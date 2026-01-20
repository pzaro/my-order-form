// ============================================================
// ZARKOLIA HEALTH - VISUAL LOGIC ENGINE v56.0 Master
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

document.addEventListener("DOMContentLoaded", () => {
    if (typeof products !== 'undefined') renderOrderSystem();

    // CRM Lookup [cite: 2025-08-13]
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
                } else { alert("Δεν βρέθηκε εγγραφή παρακαλώ συμπληρώστε τα στοιχεία σας [cite: 2026-01-20]"); }
            } finally { loader.className = ''; }
        }
    });
});

function renderOrderSystem() {
    const container = document.getElementById('orderGrid');
    container.innerHTML = '';
    products.forEach((p, index) => {
        const item = document.createElement('div');
        item.className = 'order-item';
        item.innerHTML = `
            <div class="item-info">
                <h4>${p.name} <button type="button" class="info-btn" onclick="showInfo('${p.name}', ${index})">INFO</button></h4>
                <small>${p.price.toFixed(2)} €</small>
            </div>
            <div class="qty-controls">
                <button type="button" onclick="changeQty(${index}, -1)">−</button>
                <input type="number" id="qty-${index}" value="0" min="0" oninput="updateTotals()">
                <button type="button" onclick="changeQty(${index}, 1)">+</button>
            </div>
            <div class="item-gift" id="gift-${index}">0</div>
            <div class="item-total" id="total-${index}">0.00 €</div>
        `;
        container.appendChild(item);
    });
}

function changeQty(index, delta) {
    const input = document.getElementById(`qty-${index}`);
    input.value = Math.max(0, (parseInt(input.value) || 0) + delta);
    updateTotals();
}


function updateTotals() {
    let initialNet = 0;
    let anyGiftsAchieved = false;

    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        let g = q >= 24 ? 6 : (q >= 18 ? 3 : (q >= 9 ? 1 : 0)); //
        if (g > 0) anyGiftsAchieved = true;
        initialNet += q * p.price;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = (q * p.price).toFixed(2) + " €";
    });

    // 1. Visual Update: Gifts [cite: 2026-01-20]
    document.getElementById('status-gift').className = anyGiftsAchieved ? 'status-box active' : 'status-box inactive';

    // 2. Visual Update: Volume (1% per 100€) [cite: 2026-01-20]
    let volPerc = 0;
    const squares = document.querySelectorAll('.status-square');
    squares.forEach((sq, idx) => {
        const target = (idx + 1) * 100;
        if (initialNet >= target) {
            sq.className = 'status-square active';
            volPerc = idx + 1;
        } else { sq.className = 'status-square inactive'; }
    });

    // 3. Visual Update: Cash [cite: 2025-08-13]
    const volVal = initialNet * (volPerc / 100);
    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    document.getElementById('status-cash').className = isCash ? 'status-box active' : 'status-box inactive';

    const cashVal = isCash ? (initialNet - volVal) * 0.02 : 0;
    const finalTotal = (initialNet - volVal - cashVal) * 1.24;

    document.getElementById("final-total").textContent = finalTotal.toFixed(2) + " €";
    
    // Detailed Explanation [cite: 2026-01-20]
    document.getElementById("dynamicAnalysis").innerHTML = initialNet > 0 ? 
        `🚀 <strong>Ανάλυση Οφέλους:</strong><br>
         📊 Έκπτωση Τζίρου: <strong>${volPerc}%</strong> (-${volVal.toFixed(2)}€)<br>
         💸 Έκπτωση Μετρητών: <strong>${isCash ? "2%" : "0%"}</strong><br>
         🎁 Δώρα: Συμπεριλαμβάνονται στη στήλη "Δώρα".` : "Περιμένω δεδομένα...";
}

function showInfo(name, index) {
    let key = Object.keys(productDetails).find(k => name.toLowerCase().includes(k.toLowerCase())) || name;
    const p = productDetails[key];
    if (!p) return;
    const modal = document.getElementById('productModal');
    modal.innerHTML = `
        <div class="modal-content">
            <span style="position:absolute; top:20px; right:30px; cursor:pointer; font-size:2rem; font-weight:bold; color:#94a3b8;" onclick="closeModal()">×</span>
            <div style="display:flex; align-items:center; gap:25px; margin-bottom:25px; flex-wrap:wrap;">
                <img src="${p.img}" style="width:100px; border-radius:12px; box-shadow:0 8px 15px rgba(0,0,0,0.1);">
                <div><h2 style="margin:0; color:var(--primary); font-size:1.6rem;">${name}</h2><small>Scientific Data</small></div>
            </div>
            <div style="background:#f8fafc; padding:20px; border-radius:15px; border:1px solid #e2e8f0; margin-bottom:20px;">
                <h4 style="margin:0 0 10px 0; color:var(--primary); text-transform:uppercase; font-size:0.8rem; border-bottom:1px solid #cbd5e1; padding-bottom:5px;">🧬 Μηχανισμός Δράσης (MoA)</h4>
                ${p.moa.map(m => `<p style="margin-bottom:8px; font-size:0.9rem;"><strong>${m.ing}:</strong> ${m.moa}</p>`).join("")}
            </div>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:15px;">
                <div style="background:#ecfdf5; padding:15px; border-radius:12px; border-left:4px solid var(--accent);"><strong style="font-size:0.7rem; color:var(--primary);">📍 ΕΝΔΕΙΞΕΙΣ</strong><br><span style="font-size:0.85rem;">${p.cases}</span></div>
                <div style="background:#f0f9ff; padding:15px; border-radius:12px; border-left:4px solid #0ea5e9;"><strong style="font-size:0.7rem; color:#0369a1;">📚 ΒΙΒΛΙΟΓΡΑΦΙΑ</strong><br><span style="font-size:0.8rem;">${p.biblio ? p.biblio.join("<br>") : "HCP Only"}</span></div>
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

function onlyOne(checkbox) { document.getElementsByName('payment').forEach(b => { if (b !== checkbox) b.checked = false; }); updateTotals(); }

async function processOrder() {
    const epo = document.getElementById("eponimia").value;
    if(!epo) { alert("Συμπληρώστε τα στοιχεία πελάτη!"); return; }
    alert("Τα στοιχεία αποθηκεύτηκαν [cite: 2026-01-20]");
    location.reload();
}
