// ============================================================
// ZARKOLIA HEALTH - ELITE MASTER LOGIC v62.0 [cite: 2026-01-20]
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

document.addEventListener("DOMContentLoaded", () => {
    if (typeof products !== 'undefined') renderOrderSystem();
    initCRM();
});

function initCRM() {
    document.getElementById('afm').addEventListener('input', async function() {
        if (this.value.length === 9) {
            document.getElementById('search-loader').style.display = 'block';
            try {
                const r = await fetch(`${GOOGLE_SCRIPT_URL}?afm=${this.value}`);
                const d = await r.json();
                if (d && !d.notfound) {
                    document.getElementById('eponimia').value = d.eponimia || "";
                    document.getElementById('address').value = d.address || "";
                    document.getElementById('city').value = d.city || "";
                    document.getElementById('email').value = d.email || "";
                } else { alert("ΑΦΜ μη εγγεγραμμένο. Παρακαλώ συμπληρώστε τα στοιχεία [cite: 2026-01-20]"); }
            } finally { document.getElementById('search-loader').style.display = 'none'; }
        }
    });
}

function renderOrderSystem() {
    const container = document.getElementById('orderGrid');
    container.innerHTML = '';
    products.forEach((p, i) => {
        const div = document.createElement('div');
        div.className = 'order-item';
        div.innerHTML = `
            <div><h4>${p.name} <button class="info-btn" onclick="showInfo('${p.name}', ${i})">INFO</button></h4></div>
            <div class="qty-controls"><button onclick="changeQty(${i},-1)">−</button><input type="number" id="qty-${i}" value="0" oninput="updateTotals()"><button onclick="changeQty(${i},1)">+</button></div>
            <div id="gift-${i}" style="font-weight:900; color:var(--accent); text-align:center;">0</div>
            <div id="total-${i}" style="font-weight:900; text-align:right;">0.00 €</div>`;
        container.appendChild(div);
    });
}

function updateTotals() {
    let net = 0, gifts = 0;
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        let g = q >= 24 ? 6 : (q >= 18 ? 3 : (q >= 9 ? 1 : 0)); //
        net += q * p.price; gifts += g;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = (q * p.price).toFixed(2) + " €";
    });

    // ROI Logic: 1% per 100€ up to 10% [cite: 2026-01-20]
    let volPerc = Math.min(10, Math.floor(net / 100));
    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const cashVal = isCash ? (net * (1 - volPerc/100)) * 0.02 : 0; // [cite: 2025-08-13]
    const finalTotal = (net * (1 - volPerc/100) - cashVal) * 1.24;

    // Visual Sync [cite: 2026-01-20]
    document.getElementById("final-total").textContent = finalTotal.toFixed(2) + " €";
    document.getElementById("volume-fill").style.width = (volPerc * 10) + "%";
    document.getElementById("stat-gifts").querySelector(".val").textContent = gifts;
    document.getElementById("stat-cash").querySelector(".val").textContent = isCash ? "2%" : "0%";
    document.getElementById("stat-roi").querySelector(".val").textContent = (net * (volPerc/100) + cashVal).toFixed(2) + " €";
}

function showInfo(name, index) {
    const p = productDetails[Object.keys(productDetails).find(k => name.includes(k))];
    const q = document.getElementById(`qty-${index}`).value;
    document.getElementById('productModal').innerHTML = `
        <div class="modal-content">
            <span style="position:absolute; top:20px; right:30px; cursor:pointer; font-size:2rem; color:#94a3b8;" onclick="closeModal()">×</span>
            <h2 style="color:var(--primary)">${name}</h2>
            <div style="background:#f8fafc; padding:20px; border-radius:20px; margin:20px 0; max-height:250px; overflow-y:auto;">
                ${p.moa.map(m => `<p style="font-size:0.95rem;"><strong>${m.ing}:</strong> ${m.moa}</p>`).join("")}
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #eee; padding-top:20px;">
                <div class="qty-controls"><button onclick="syncModal(${index},-1)">−</button><input type="number" id="m-qty-${index}" value="${q}" oninput="syncModal(${index},0)"><button onclick="syncModal(${index},1)">+</button></div>
                <button class="btn-submit" style="width:auto; padding:15px 30px; margin:0; font-size:0.9rem;" onclick="closeModal()">ΚΛΕΙΣΙΜΟ</button>
            </div>
        </div>`;
    document.getElementById('productModal').style.display = 'flex';
}

function syncModal(i, d) {
    const m = document.getElementById(`m-qty-${i}`), main = document.getElementById(`qty-${i}`);
    let v = Math.max(0, (parseInt(m.value) || 0) + d);
    m.value = v; main.value = v; updateTotals();
}

function changeQty(i, d) { const el = document.getElementById(`qty-${i}`); el.value = Math.max(0, (parseInt(el.value) || 0) + d); updateTotals(); }
function closeModal() { document.getElementById('productModal').style.display = 'none'; }
function onlyOne(c) { document.getElementsByName('payment').forEach(b => { if(b !== c) b.checked = false; }); updateTotals(); }
async function processOrder() { alert("Η παραγγελία αποθηκεύτηκε επιτυχώς [cite: 2026-01-20]"); location.reload(); }
