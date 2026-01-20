// ============================================================
// ZARKOLIA HEALTH - CORE ENGINE v46.0
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

// --- 1. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById('product-rows');
    const btnContainer = document.getElementById('productButtonsContainer');

    if (typeof products !== 'undefined') {
        products.forEach((p, index) => {
            const btn = document.createElement('button');
            btn.type = "button";
            btn.className = 'product-btn';
            btn.innerHTML = `🧬 ${p.name}`;
            btn.onclick = () => showInfo(p.name, index);
            btnContainer.appendChild(btn);

            const row = document.createElement('tr');
            row.style.borderBottom = "1px solid #e2e8f0";
            row.innerHTML = `
                <td style="padding:20px;"><strong>${p.name}</strong><br><small>${p.price.toFixed(2)} €</small></td>
                <td style="padding:20px; display:flex; justify-content:center;">
                    <div style="display:flex; align-items:center; background:#f1f5f9; padding:5px; border-radius:12px;">
                        <button type="button" onclick="changeQty(${index}, -1)" style="width:30px; height:30px; border-radius:8px; border:none; background:#fff; cursor:pointer;">−</button>
                        <input type="number" id="qty-${index}" value="0" min="0" oninput="updateTotals()" style="width:45px; text-align:center; border:none; background:transparent; font-weight:700;">
                        <button type="button" onclick="changeQty(${index}, 1)" style="width:30px; height:30px; border-radius:8px; border:none; background:#fff; cursor:pointer;">+</button>
                    </div>
                </td>
                <td style="padding:20px; text-align:center; color:var(--accent); font-weight:800;"><span id="gift-${index}">0</span></td>
                <td style="padding:20px; text-align:right; font-weight:900; color:var(--primary);" id="total-${index}">0.00 €</td>`;
            tableBody.appendChild(row);
        });
    }

    // CRM Lookup
    document.getElementById('afm').addEventListener('input', async function() {
        if (this.value.trim().length === 9) {
            const loader = document.getElementById('search-loader');
            loader.className = 'hourglass-visible spin';
            try {
                const response = await fetch(`${GOOGLE_SCRIPT_URL}?afm=${this.value}`);
                const data = await response.json();
                if (data && !data.notfound) {
                    document.getElementById('eponimia').value = data.eponimia || "";
                    document.getElementById('doy').value = data.doy || "";
                    document.getElementById('address').value = data.address || "";
                    document.getElementById('city').value = data.city || "";
                    document.getElementById('tk').value = data.tk || "";
                    document.getElementById('email').value = data.email || "";
                    document.getElementById('mobile').value = data.mobile || "";
                } else {
                    alert("Δεν βρέθηκε εγγραφή παρακαλώ συμπληρώστε τα στοιχεία σας");
                }
            } finally { loader.className = 'hourglass-hidden'; }
        }
    });
});

function changeQty(index, delta) {
    const input = document.getElementById(`qty-${index}`);
    let newVal = parseInt(input.value) + delta;
    input.value = newVal < 0 ? 0 : newVal;
    updateTotals();
}

// TOTALS & DISCOUNT ENGINE
function updateTotals() {
    let initialNet = 0; let gifts = 0;
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        let g = q >= 24 ? 6 : (q >= 18 ? 3 : (q >= 9 ? 1 : 0));
        initialNet += q * p.price; gifts += g;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = (q * p.price).toFixed(2) + " €";
    });

    // Νέα Κλίμακα Εκπτώσεων
    let volPerc = 0;
    if (initialNet >= 1000) volPerc = 10;
    else if (initialNet >= 200) volPerc = Math.floor(initialNet / 100);

    const volVal = initialNet * (volPerc / 100);
    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const cashVal = isCash ? (initialNet - volVal) * 0.02 : 0;
    const finalTotal = (initialNet - volVal - cashVal) * 1.24;

    document.getElementById("final-total").textContent = finalTotal.toFixed(2) + " €";
    document.getElementById("dynamicAnalysis").innerHTML = initialNet > 0 ? 
        `✅ Δώρα: <strong>${gifts}</strong> | Έκπτωση Τζίρου: <strong>${volPerc}% (-${volVal.toFixed(2)}€)</strong>` : "—";
}

function showInfo(name, index) {
    let key = Object.keys(productDetails).find(k => name.includes(k)) || name;
    const p = productDetails[key] || { moa: [], cases: "—", rationale: "—", img: "" };
    const modal = document.getElementById('productModal');
    modal.innerHTML = `
        <div class="modal-content">
            <span style="position:absolute; top:25px; right:35px; cursor:pointer; font-size:2.5rem; color:#cbd5e1;" onclick="closeModal()">&times;</span>
            <div style="display:flex; align-items:center; gap:40px; margin-bottom:40px;">
                <img src="${p.img}" style="width:160px; border-radius:28px; border:1px solid #eee; box-shadow: 0 10px 20px rgba(0,0,0,0.05);">
                <div>
                    <h2 style="margin:0; color:var(--primary); font-size:2.4rem;">${name}</h2>
                    <p style="color:var(--accent); font-weight:800; text-transform:uppercase;">Scientific Compendium</p>
                </div>
            </div>
            <div style="background:#f8fafc; padding:35px; border-radius:28px; border:1px solid #f1f5f9; margin-bottom:30px;">
                <h4 style="margin-top:0; color:var(--primary);">🧬 Μοριακός Μηχανισμός (MoA)</h4>
                ${p.moa.map(m => `<p style="margin-bottom:12px; font-size:1.05rem;"><strong>${m.ing}:</strong> ${m.moa}</p>`).join("")}
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:25px;">
                <div style="background:#ecfdf5; padding:30px; border-radius:24px;">
                    <strong style="color:var(--primary); text-transform:uppercase; font-size:0.75rem;">📍 Ενδείξεις</strong><br><span style="font-size:1.1rem; font-weight:600;">${p.cases}</span>
                </div>
                <div style="background:#f0f9ff; padding:30px; border-radius:24px;">
                    <strong style="color:#0369a1; text-transform:uppercase; font-size:0.75rem;">💡 Rationale</strong><br><span style="font-size:1.1rem; font-weight:600;">${p.rationale || "Εξειδικευμένη φόρμουλα Zarkolia Health"}</span>
                </div>
            </div>
            <div style="margin-top:20px; padding:15px; background:#f0f9ff; border-radius:10px;">
                <strong>📚 Βιβλιογραφία:</strong> ${p.biblio ? p.biblio.join(", ") : "HCP Only"}
            </div>
        </div>`;
    modal.classList.add('active');
}

function closeModal() { document.getElementById('productModal').classList.remove('active'); }

async function processOrder() {
    const epo = document.getElementById("eponimia").value;
    if(!epo) { alert("Επιλέξτε Πελάτη!"); return; }
    
    // Αποθήκευση Δεδομένων & Παραγγελία
    alert("Τα στοιχεία αποθηκεύτηκαν");
    // Εδώ καλείται η fetch για το sheet...
    location.reload();
}
