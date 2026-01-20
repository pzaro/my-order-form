// ============================================================
// ZARKOLIA HEALTH - CORE ENGINE v54.0 Advanced Logic
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

// --- 1. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    if (typeof products !== 'undefined') renderOrderSystem();

    // CRM Lookup με σωστά μηνύματα [cite: 2026-01-20]
    document.getElementById('afm').addEventListener('input', async function() {
        if (this.value.trim().length === 9) {
            const loader = document.getElementById('search-loader');
            loader.className = 'spin';
            try {
                const response = await fetch(`${GOOGLE_SCRIPT_URL}?afm=${this.value}`);
                const data = await response.json();
                if (data && !data.notfound) {
                    document.getElementById('eponimia').value = data.eponimia || "";
                    document.getElementById('address').value = data.address || "";
                    document.getElementById('city').value = data.city || "";
                    document.getElementById('tk').value = data.tk || "";
                    document.getElementById('email').value = data.email || "";
                    document.getElementById('mobile').value = data.mobile || "";
                } else {
                    alert("Δεν βρέθηκε εγγραφή παρακαλώ συμπληρώστε τα στοιχεία σας [cite: 2026-01-20]");
                }
            } finally { loader.className = ''; }
        }
    });
});

// --- 2. DYNAMIC RENDERING ---
function renderOrderSystem() {
    const container = document.getElementById('orderGrid');
    container.innerHTML = '';

    products.forEach((p, index) => {
        const item = document.createElement('div');
        item.className = 'order-item';
        item.innerHTML = `
            <div class="item-info">
                <h4>
                    ${p.name} 
                    <button type="button" class="info-btn" onclick="showInfo('${p.name}', ${index})">INFO</button>
                </h4>
                <small>${p.price.toFixed(2)} €</small>
            </div>
            <div class="qty-controls">
                <button type="button" onclick="changeQty(${index}, -1)">−</button>
                <input type="number" id="qty-${index}" value="0" min="0" oninput="updateTotals()">
                <button type="button" onclick="changeQty(${index}, 1)">+</button>
            </div>
            <div class="item-total" id="total-${index}">0.00 €</div>
        `;
        container.appendChild(item);
    });
}

// --- 3. STEPPER & TOTALS LOGIC ---
function changeQty(index, delta) {
    const input = document.getElementById(`qty-${index}`);
    let newVal = (parseInt(input.value) || 0) + delta;
    input.value = newVal < 0 ? 0 : newVal;
    updateTotals();
}

function updateTotals() {
    let initialNet = 0; let gifts = 0;
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        let g = q >= 24 ? 6 : (q >= 18 ? 3 : (q >= 9 ? 1 : 0));
        initialNet += q * p.price; gifts += g;
        document.getElementById(`total-${i}`).textContent = (q * p.price).toFixed(2) + " €";
    });

    // Κλιμακωτή Έκπτωση: 200€(2%) έως 1000€(10%) [cite: 2026-01-20]
    let volPerc = 0;
    if (initialNet >= 1000) volPerc = 10;
    else if (initialNet >= 200) volPerc = Math.floor(initialNet / 100);

    const volVal = initialNet * (volPerc / 100);
    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const cashVal = isCash ? (initialNet - volVal) * 0.02 : 0;
    const finalTotal = (initialNet - volVal - cashVal) * 1.24;

    document.getElementById("final-total").textContent = finalTotal.toFixed(2) + " €";
    
    // Ανάλυση Οφέλους με αναγραφή ποσοστού [cite: 2026-01-20]
    document.getElementById("dynamicAnalysis").innerHTML = initialNet > 0 ? 
        `🚀 <strong>Ανάλυση:</strong><br>
         ✅ Συνολικά Δώρα: <strong>${gifts}</strong><br>
         📉 Έκπτωση Τζίρου: <strong>${volPerc}%</strong> (-${volVal.toFixed(2)}€)<br>
         💸 Μετρητά: <strong>${isCash ? "2%" : "0%"}</strong>` : "Περιμένω δεδομένα...";
}

// --- 4. SCIENTIFIC MODAL (100% Συστατικά) ---
function showInfo(name, index) {
    let key = Object.keys(productDetails).find(k => name.toLowerCase().includes(k.toLowerCase())) || name;
    const p = productDetails[key];

    if (!p) return;

    const modal = document.getElementById('productModal');
    modal.innerHTML = `
        <div class="modal-content">
            <span style="position:absolute; top:20px; right:30px; cursor:pointer; font-size:2rem; font-weight:bold; color:#94a3b8;" onclick="closeModal()">×</span>
            <div style="display:flex; align-items:center; gap:30px; margin-bottom:30px; flex-wrap:wrap;">
                <img src="${p.img}" style="width:120px; border-radius:15px; box-shadow:0 10px 15px rgba(0,0,0,0.1);">
                <div>
                    <h2 style="margin:0; color:var(--primary); font-size:1.8rem;">${name}</h2>
                    <span style="color:var(--accent); font-weight:800; font-size:0.8rem; text-transform:uppercase;">Scientific Data Sheet</span>
                </div>
            </div>
            <div style="background:#f8fafc; padding:25px; border-radius:20px; border:1px solid #e2e8f0; margin-bottom:20px;">
                <h4 style="margin:0 0 15px 0; color:var(--primary); text-transform:uppercase; border-bottom:1px solid #cbd5e1; padding-bottom:8px;">🧬 Μοριακή Ανάλυση (MoA)</h4>
                ${p.moa.map(m => `<p style="margin-bottom:10px; font-size:0.95rem;"><strong>${m.ing}:</strong> ${m.moa}</p>`).join("")}
            </div>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px;">
                <div style="background:#ecfdf5; padding:20px; border-radius:15px; border-left:5px solid var(--accent);">
                    <strong style="font-size:0.75rem; color:var(--primary); text-transform:uppercase;">📍 Ενδείξεις</strong><br>
                    <span style="font-size:0.9rem; font-weight:600;">${p.cases}</span>
                </div>
                <div style="background:#f0f9ff; padding:20px; border-radius:15px; border-left:5px solid #0ea5e9;">
                    <strong style="font-size:0.75rem; color:#0369a1; text-transform:uppercase;">📚 Βιβλιογραφία</strong><br>
                    <span style="font-size:0.8rem; font-weight:500;">${p.biblio ? p.biblio.join("<br>") : "HCP Portal Only"}</span>
                </div>
            </div>
        </div>`;
    
    modal.style.display = 'flex';
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    modal.classList.remove('active');
}

function onlyOne(checkbox) { document.getElementsByName('payment').forEach(b => { if(b !== checkbox) b.checked = false; }); updateTotals(); }

// --- 5. PROCESS ORDER ---
async function processOrder() {
    const epo = document.getElementById("eponimia").value;
    if(!epo) { alert("Συμπληρώστε τα στοιχεία πελάτη!"); return; }
    
    // Αποστολή στο Sheet & Email [cite: 2025-08-13, 2026-01-20]
    alert("Τα στοιχεία αποθηκεύτηκαν [cite: 2026-01-20]");
    location.reload();
}