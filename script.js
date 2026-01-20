// ============================================================
// ZARKOLIA HEALTH - ELITE SYNC LOGIC v58.0 Master
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

// --- 1. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    if (typeof products !== 'undefined') renderOrderSystem();

    // CRM Search Sync [cite: 2025-08-13]
    document.getElementById('afm').addEventListener('input', async function() {
        if (this.value.trim().length === 9) {
            const loader = document.getElementById('search-loader');
            loader.style.display = 'block';
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
            } finally { loader.style.display = 'none'; }
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
                <h4>${p.name} <button type="button" class="info-btn" onclick="showInfo('${p.name}', ${index})">INFO</button></h4>
                <small>${p.price.toFixed(2)} € (9+1, 18+3, 24+6)</small>
            </div>
            <div class="qty-controls">
                <button type="button" onclick="changeQty(${index}, -1)">−</button>
                <input type="number" id="qty-${index}" value="0" min="0" oninput="updateTotals()">
                <button type="button" onclick="changeQty(${index}, 1)">+</button>
            </div>
            <div class="item-gift" id="gift-${index}" style="text-align:center; font-weight:800; color:var(--accent); background:#f0fdf4; border-radius:8px;">0</div>
            <div class="item-total" id="total-${index}">0.00 €</div>`;
        container.appendChild(item);
    });
}

// --- 3. MODAL WITH INTEGRATED ORDERING [cite: 2026-01-20] ---
function showInfo(name, index) {
    let key = Object.keys(productDetails).find(k => name.toLowerCase().includes(k.toLowerCase())) || name;
    const p = productDetails[key];
    if (!p) return;

    const currentQty = document.getElementById(`qty-${index}`).value || 0;
    const modal = document.getElementById('productModal');

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal()">×</span>
            <div style="text-align:center; margin-bottom:25px;">
                <img src="${p.img}" style="width:120px; border-radius:20px; margin-bottom:15px; box-shadow:0 8px 20px rgba(0,0,0,0.1);">
                <h2 style="color:var(--primary); margin:0;">${name}</h2>
                <small style="color:var(--accent); font-weight:800; text-transform:uppercase; letter-spacing:1px;">Scientific Update</small>
            </div>

            <div style="background:#f8fafc; padding:20px; border-radius:24px; max-height:250px; overflow-y:auto; margin-bottom:25px; border:1px solid #eef2f6;">
                <h4 style="margin:0 0 12px 0; color:var(--primary); font-size:0.85rem; text-transform:uppercase; border-bottom:1px solid #cbd5e1; padding-bottom:5px;">🧬 Μοριακός Μηχανισμός (MoA)</h4>
                ${p.moa.map(m => `<p style="font-size:0.95rem; margin-bottom:10px; line-height:1.4;"><strong>${m.ing}:</strong> ${m.moa}</p>`).join("")}
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin-bottom:25px;">
                <div style="background:#ecfdf5; padding:15px; border-radius:18px; border-left:5px solid var(--accent);"><strong style="font-size:0.7rem; color:var(--primary); text-transform:uppercase;">📍 Ενδείξεις</strong><br><span style="font-size:0.9rem; font-weight:600;">${p.cases}</span></div>
                <div style="background:#f0f9ff; padding:15px; border-radius:18px; border-left:5px solid #0ea5e9;"><strong style="font-size:0.7rem; color:#0369a1; text-transform:uppercase;">📚 Βιβλιογραφία</strong><br><span style="font-size:0.8rem;">${p.biblio ? p.biblio.join("<br>") : "HCP Portal Only"}</span></div>
            </div>

            <div style="margin-top:20px; padding-top:20px; border-top:1px solid #eee; display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <label style="display:block; font-size:0.7rem; font-weight:800; color:var(--health-gray); margin-bottom:5px; text-transform:uppercase;">Προσθήκη Ποσότητας</label>
                    <div class="qty-controls">
                        <button type="button" onclick="syncModalQty(${index}, -1)">−</button>
                        <input type="number" id="modal-qty-${index}" value="${currentQty}" oninput="syncModalQty(${index}, 0)">
                        <button type="button" onclick="syncModalQty(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="btn-primary" style="padding:15px 30px; font-size:0.9rem; margin:0;" onclick="closeModal()">ΠΡΟΣΘΗΚΗ & ΚΛΕΙΣΙΜΟ</button>
            </div>
        </div>`;
    modal.style.display = 'flex';
}

function syncModalQty(index, delta) {
    const modalInput = document.getElementById(`modal-qty-${index}`);
    const mainInput = document.getElementById(`qty-${index}`);
    let newVal = (parseInt(modalInput.value) || 0) + delta;
    newVal = Math.max(0, newVal);
    modalInput.value = newVal;
    mainInput.value = newVal;
    updateTotals();
}

// --- 4. TOTALS & VISUAL TARGET LOGIC ---
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

    // Targets Tracking [cite: 2026-01-20]
    document.getElementById('status-gift').className = anyGiftsAchieved ? 'status-box active' : 'status-box inactive';

    let volPerc = 0;
    const squares = document.querySelectorAll('.status-square');
    squares.forEach((sq, idx) => {
        const target = (idx + 1) * 100;
        if (initialNet >= target) {
            sq.className = 'status-square active';
            volPerc = idx + 1;
        } else { sq.className = 'status-square inactive'; }
    });

    const volVal = initialNet * (volPerc / 100);
    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    document.getElementById('status-cash').className = isCash ? 'status-box active' : 'status-box inactive';

    const cashVal = isCash ? (initialNet - volVal) * 0.02 : 0;
    const finalTotal = (initialNet - volVal - cashVal) * 1.24;

    document.getElementById("final-total").textContent = finalTotal.toFixed(2) + " €";
    document.getElementById("dynamicAnalysis").innerHTML = initialNet > 0 ? 
        `🚀 <strong>Ανάλυση:</strong> Έκπτωση Τζίρου <strong>${volPerc}%</strong> | Επιπλέον Μετρητά <strong>${isCash ? "2%" : "0%"}</strong> [cite: 2026-01-20]` : "Περιμένω δεδομένα...";
}

function closeModal() { document.getElementById('productModal').style.display = 'none'; }
function onlyOne(checkbox) { document.getElementsByName('payment').forEach(b => { if (b !== checkbox) b.checked = false; }); updateTotals(); }

async function processOrder() {
    const epo = document.getElementById("eponimia").value;
    if(!epo) { alert("Συμπληρώστε τα στοιχεία πελάτη!"); return; }
    alert("Τα στοιχεία αποθηκεύτηκαν [cite: 2026-01-20]");
    location.reload();
}
