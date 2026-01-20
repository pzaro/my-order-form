// ============================================================
// ZARKOLIA HEALTH - SUPREME MASTER ENGINE v57.0
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

document.addEventListener("DOMContentLoaded", () => {
    if (typeof products !== 'undefined') renderOrderSystem();

    // Live CRM Search [cite: 2025-08-13]
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
                <small>${p.price.toFixed(2)} € (Πολιτική: 9+1, 18+3, 24+6)</small>
            </div>
            <div class="qty-controls">
                <button type="button" onclick="changeQty(${index}, -1)">−</button>
                <input type="number" id="qty-${index}" value="0" min="0" oninput="updateTotals()">
                <button type="button" onclick="changeQty(${index}, 1)">+</button>
            </div>
            <div class="item-gift" id="gift-${index}">0</div>
            <div class="item-total" id="total-${index}">0.00 €</div>`;
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
        const input = document.getElementById(`qty-${i}`);
        let q = parseInt(input.value) || 0;
        let g = q >= 24 ? 6 : (q >= 18 ? 3 : (q >= 9 ? 1 : 0)); //
        if (g > 0) anyGiftsAchieved = true;
        initialNet += q * p.price;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = (q * p.price).toFixed(2) + " €";
    });

    // Visual Tracking: Gifts & Volume [cite: 2026-01-20]
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
        `🚀 <strong>Ανάλυση:</strong> Έκπτωση Τζίρου <strong>${volPerc}%</strong> | Έκπτωση Μετρητών <strong>${isCash ? "2%" : "0%"}</strong> [cite: 2026-01-20]` : "Περιμένω δεδομένα...";
}

function onlyOne(checkbox) {
    document.getElementsByName('payment').forEach(b => { if (b !== checkbox) b.checked = false; });
    updateTotals();
}

// ... showInfo() & processOrder() παραμένουν ως είχαν στην v54.0 ...
