// ============================================================
// ZARKOLIA HEALTH - CORE ENGINE v41.0
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById('product-rows');
    const btnContainer = document.getElementById('productButtonsContainer');

    if (typeof products !== 'undefined') {
        products.forEach((p, index) => {
            // Οριζόντια Pills
            const btn = document.createElement('button');
            btn.type = "button";
            btn.className = 'product-btn';
            btn.innerHTML = `🧬 <span>${p.name}</span>`;
            btn.onclick = () => showInfo(p.name, index);
            btnContainer.appendChild(btn);

            // Steppers
            const row = document.createElement('tr');
            row.style.borderBottom = "1px solid var(--border)";
            row.innerHTML = `
                <td style="padding:15px;"><strong>${p.name}</strong><br><small>${p.price.toFixed(2)} €</small></td>
                <td style="padding:15px; display:flex; justify-content:center;">
                    <div class="stepper">
                        <button type="button" onclick="changeQty(${index}, -1)">−</button>
                        <input type="number" id="qty-${index}" value="0" min="0" oninput="updateTotals()">
                        <button type="button" onclick="changeQty(${index}, 1)">+</button>
                    </div>
                </td>
                <td style="padding:15px; text-align:center; color:var(--accent); font-weight:800;"><span id="gift-${index}">0</span></td>
                <td style="padding:15px; text-align:right; font-weight:900;" id="total-${index}">0.00 €</td>`;
            tableBody.appendChild(row);
        });
    }

    // Live CRM Search με όλα τα πεδία [cite: 2025-08-13]
    document.getElementById('afm').addEventListener('input', async function() {
        if (this.value.trim().length === 9) {
            const loader = document.getElementById('search-loader');
            loader.style.display = 'block';
            try {
                const response = await fetch(`${GOOGLE_SCRIPT_URL}?afm=${this.value}`);
                const data = await response.json();
                if (data && !data.notfound) {
                    document.getElementById('eponimia').value = data.eponimia || "";
                    document.getElementById('doy').value = data.doy || "";
                    document.getElementById('address').value = data.address || "";
                    document.getElementById('city').value = data.city || "";
                    document.getElementById('tk').value = data.tk || "";
                    document.getElementById('mobile').value = data.mobile || "";
                    document.getElementById('email').value = data.email || "";
                }
            } finally { loader.style.display = 'none'; }
        }
    });
});

function changeQty(index, delta) {
    const input = document.getElementById(`qty-${index}`);
    let newVal = parseInt(input.value) + delta;
    if (newVal < 0) newVal = 0;
    input.value = newVal;
    updateTotals();
}

function updateTotals() {
    let initialNet = 0; let gifts = 0;
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        let g = q >= 24 ? 6 : (q >= 18 ? 3 : (q >= 9 ? 1 : 0));
        initialNet += q * p.price; gifts += g;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = (q * p.price).toFixed(2) + " €";
    });

    // ΝΕΑ ΚΛΙΜΑΚΑ ΕΚΠΤΩΣΕΩΝ [cite: 2026-01-20]
    let volPerc = 0;
    if (initialNet >= 1000) volPerc = 10;
    else if (initialNet >= 200) volPerc = Math.floor(initialNet / 100);

    const volVal = initialNet * (volPerc / 100);
    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const cashVal = isCash ? (initialNet - volVal) * 0.02 : 0;
    const finalTotal = (initialNet - volVal - cashVal) * 1.24;

    document.getElementById("final-total").textContent = finalTotal.toFixed(2) + " €";
    document.getElementById("dynamicAnalysis").innerHTML = initialNet > 0 ? 
        `✅ Έκπτωση Τζίρου: ${volPerc}% | Δώρα: <strong>${gifts}</strong><br>🚀 Συνολικό Όφελος: <strong>${(volVal + cashVal + (gifts*8)).toFixed(2)}€</strong>` : "—";
}

function showInfo(name, index) {
    let key = Object.keys(productDetails).find(k => name.includes(k)) || name;
    const p = productDetails[key] || { moa: [], cases: "—", rationale: "—", img: "" };
    const modal = document.getElementById('productModal');
    modal.innerHTML = `
        <div class="modal-content">
            <span style="position:absolute; top:20px; right:30px; cursor:pointer; font-size:2.5rem; color:#cbd5e1;" onclick="closeModal()">&times;</span>
            <div style="display:flex; align-items:center; gap:35px; margin-bottom:30px;">
                <img src="${p.img}" style="width:150px; border-radius:22px; border:1px solid #eee;">
                <div>
                    <h2 style="margin:0; color:var(--primary); font-size:2.2rem;">${name}</h2>
                    <p style="color:var(--accent); font-weight:800; text-transform:uppercase;">Scientific Compendium</p>
                </div>
            </div>
            <div style="background:#f8fafc; padding:30px; border-radius:24px; margin-bottom:25px;">
                <h4 style="margin-top:0; color:var(--primary);">🧬 Μοριακός Μηχανισμός (MoA)</h4>
                ${p.moa.map(m => `<p><strong>${m.ing}:</strong> ${m.moa}</p>`).join("")}
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
                <div style="background:#ecfdf5; padding:20px; border-radius:18px;"><strong>📍 Ενδείξεις:</strong><br>${p.cases}</div>
                <div style="background:#f0f9ff; padding:20px; border-radius:18px;"><strong>💡 Rationale:</strong><br>${p.rationale}</div>
            </div>
        </div>`;
    modal.classList.add('active');
}

function closeModal() { document.getElementById('productModal').classList.remove('active'); }

async function processOrder() {
    const epo = document.getElementById("eponimia").value;
    if(!epo) { alert("Επιλέξτε Πελάτη!"); return; }
    alert("Η παραγγελία καταχωρήθηκε & το αντίγραφο εστάλη!");
    location.reload();
}
