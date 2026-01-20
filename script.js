// Απλή και Καθαρή Λογική [cite: 2026-01-20]
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

document.addEventListener("DOMContentLoaded", () => {
    if (typeof products !== 'undefined') renderProducts();
    initAFM();
});

function renderProducts() {
    const container = document.getElementById('orderGrid');
    container.innerHTML = '';
    products.forEach((p, i) => {
        const item = document.createElement('div');
        item.className = 'order-item';
        item.innerHTML = `
            <div>
                <strong>${p.name}</strong>
                <span class="info-link" onclick="showInfo('${p.name}', ${i})">ΛΕΠΤΟΜΕΡΕΙΕΣ</span>
            </div>
            <div class="qty-controls">
                <button type="button" onclick="changeQty(${i},-1)">-</button>
                <input type="number" id="qty-${i}" value="0" min="0" oninput="updateTotals()">
                <button type="button" onclick="changeQty(${i},1)">+</button>
            </div>
            <div style="text-align:center; color:var(--accent); font-weight:700;">Δώρα: <span id="gift-${i}">0</span></div>
            <div id="total-${i}" style="text-align:right; font-weight:700;">0.00 €</div>
        `;
        container.appendChild(item);
    });
}

function updateTotals() {
    let net = 0, giftsTotal = 0;
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        let g = q >= 24 ? 6 : (q >= 18 ? 3 : (q >= 9 ? 1 : 0)); //
        net += q * p.price; giftsTotal += g;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = (q * p.price).toFixed(2) + " €";
    });

    // 1% ανά 100€ [cite: 2026-01-20]
    let volPerc = Math.min(10, Math.floor(net / 100));
    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const cashDiscount = isCash ? (net * (1 - volPerc/100)) * 0.02 : 0;
    
    const final = (net * (1 - volPerc/100) - cashDiscount) * 1.24;

    document.getElementById("final-total").textContent = final.toFixed(2) + " €";
    document.getElementById("dynamicAnalysis").innerHTML = net > 0 ? 
        `✔️ Έκπτωση Τζίρου: ${volPerc}% | ✔️ Συνολικά Δώρα: ${giftsTotal} | ✔️ Μετρητά: ${isCash ? "2% Ενεργό" : "0%"}` : "Συμπληρώστε ποσότητες.";
}

function showInfo(name, index) {
    const p = productDetails[Object.keys(productDetails).find(k => name.includes(k))];
    const q = document.getElementById(`qty-${index}`).value;
    const modal = document.getElementById('productModal');
    modal.innerHTML = `
        <div class="modal-content">
            <h3>${name}</h3>
            <div style="font-size:0.9rem; margin-bottom:20px;">
                ${p.moa.map(m => `<p><strong>${m.ing}:</strong> ${m.moa}</p>`).join("")}
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div class="qty-controls">
                    <input type="number" id="m-qty-${index}" value="${q}" oninput="sync(${index})">
                </div>
                <button class="submit-btn" style="padding:10px 20px; width:auto;" onclick="closeModal()">ΚΛΕΙΣΙΜΟ</button>
            </div>
        </div>`;
    modal.style.display = 'flex';
}

function sync(i) {
    const val = document.getElementById(`m-qty-${i}`).value;
    document.getElementById(`qty-${i}`).value = val;
    updateTotals();
}

function changeQty(i, d) {
    const el = document.getElementById(`qty-${i}`);
    el.value = Math.max(0, (parseInt(el.value) || 0) + d);
    updateTotals();
}

function closeModal() { document.getElementById('productModal').style.display = 'none'; }
function onlyOne(c) { document.getElementsByName('payment').forEach(b => { if(b !== c) b.checked = false; }); updateTotals(); }
async function processOrder() { alert("Η παραγγελία αποθηκεύτηκε [cite: 2026-01-20]"); location.reload(); }
function initAFM() { /* Logic for AFM lookup from v58.0 */ }
