// ============================================================
// ZARKOLIA HEALTH - LOGIC v39.0
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById('order-rows');
    const btnContainer = document.getElementById('productButtonsContainer');

    products.forEach((p, index) => {
        // Κουμπιά πληροφοριών
        const btn = document.createElement('button');
        btn.className = 'product-btn';
        btn.innerHTML = `<strong>${p.name}</strong>`;
        btn.onclick = () => showInfo(p.name, index);
        btnContainer.appendChild(btn);

        // Γραμμές πίνακα
        const row = document.createElement('tr');
        row.style.borderBottom = "1px solid #e2e8f0";
        row.innerHTML = `
            <td style="padding:15px;"><strong>${p.name}</strong><br><small>${p.price.toFixed(2)} €</small></td>
            <td style="padding:15px; text-align:center;"><input type="number" id="qty-${index}" min="0" oninput="updateTotals()" value="0" style="width:60px; text-align:center;"></td>
            <td style="padding:15px; text-align:center; color:var(--accent); font-weight:700;"><span id="gift-${index}">0</span></td>
            <td style="padding:15px; text-align:right; font-weight:800;" id="total-${index}">0.00 €</td>`;
        tableBody.appendChild(row);
    });

    // CRM Lookup
    document.getElementById('afm').addEventListener('input', async function() {
        const val = this.value.trim();
        if (val.length === 9) {
            const loader = document.getElementById('search-loader');
            loader.style.display = 'block';
            loader.classList.add('loader-spin');
            
            try {
                const response = await fetch(`${GOOGLE_SCRIPT_URL}?afm=${val}`);
                const data = await response.json();
                if (data && !data.notfound) {
                    document.getElementById('eponimia').value = data.eponimia || "";
                    document.getElementById('doy').value = data.doy || "";
                    document.getElementById('email').value = data.email || "";
                }
            } finally {
                loader.style.display = 'none';
            }
        }
    });
});

// --- MODAL FIX ---
function showInfo(name, index) {
    let key = Object.keys(productDetails).find(k => name.includes(k)) || name;
    const p = productDetails[key] || { moa: [], cases: "—", rationale: "—" };
    const modal = document.getElementById('productModal');
    
    modal.innerHTML = `
        <div class="modal-content">
            <span style="position:absolute; top:20px; right:30px; cursor:pointer; font-size:2.5rem; color:var(--text-muted);" onclick="closeModal()">&times;</span>
            <div style="display:flex; align-items:center; gap:30px; margin-bottom:30px;">
                <img src="${p.img || 'https://via.placeholder.com/150'}" style="width:150px; border-radius:20px; border:1px solid #eee;">
                <div>
                    <h2 style="margin:0; color:var(--primary);">${name}</h2>
                    <p style="color:var(--text-muted); font-weight:700;">HCP Scientific Compendium</p>
                </div>
            </div>
            <div style="background:var(--bg-light); padding:25px; border-radius:20px; margin-bottom:20px;">
                <h4 style="margin-top:0;">🧬 Μηχανισμός Δράσης (MoA)</h4>
                ${p.moa.map(m => `<p><strong>${m.ing}:</strong> ${m.moa}</p>`).join("")}
            </div>
            <p><strong>📍 Ενδείξεις:</strong> ${p.cases}</p>
            <p><strong>💡 Rationale:</strong> ${p.rationale}</p>
            <div style="text-align:right; margin-top:30px;">
                <button onclick="closeModal()" style="background:var(--primary); color:#fff; border:none; padding:12px 30px; border-radius:12px; cursor:pointer; font-weight:bold;">ΚΛΕΙΣΙΜΟ</button>
            </div>
        </div>`;
    modal.classList.add('active'); // Ενεργοποίηση Flex Center
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

// --- TOTALS ---
function updateTotals() {
    let initialNet = 0; let gifts = 0;
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        let g = q >= 24 ? 6 : (q >= 18 ? 3 : (q >= 9 ? 1 : 0));
        const line = q * p.price;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = line.toFixed(2) + " €";
        initialNet += line; gifts += g;
    });

    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const volPerc = initialNet < 300 ? 0 : (initialNet < 400 ? 3 : (initialNet < 500 ? 4 : Math.min(5 + Math.floor((initialNet-500)/100), 10)));
    const volVal = initialNet * (volPerc / 100);
    const cashVal = isCash ? (initialNet - volVal) * 0.02 : 0;
    const finalTotal = (initialNet - volVal - cashVal) * 1.24;

    document.getElementById("final-total").textContent = finalTotal.toFixed(2) + " €";
    document.getElementById("dynamicAnalysis").innerHTML = initialNet > 0 ? 
        `✅ Δωρεάν Τεμάχια: <strong>${gifts}</strong><br>✅ Συνολική Έκπτωση: <strong>${(volVal + cashVal).toFixed(2)}€</strong>` : "—";
}
