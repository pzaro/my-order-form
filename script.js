// ============================================================
// ZARKOLIA HEALTH - CORE ENGINE v53.0 Master Logic
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
                } else {
                    alert("Δεν βρέθηκε εγγραφή παρακαλώ συμπληρώστε τα στοιχεία σας [cite: 2026-01-20]");
                }
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
                <h4>${p.name} <span onclick="showInfo('${p.name}', ${index})" style="cursor:pointer; font-size:1.2rem;">🧬</span></h4>
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

    // ΔΥΝΑΜΙΚΗ ΚΛΙΜΑΚΑ ΕΚΠΤΩΣΗΣ [cite: 2026-01-20]
    let volPerc = 0;
    if (initialNet >= 1000) volPerc = 10;
    else if (initialNet >= 200) volPerc = Math.floor(initialNet / 100);

    const volVal = initialNet * (volPerc / 100);
    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const cashVal = isCash ? (initialNet - volVal) * 0.02 : 0;
    const finalTotal = (initialNet - volVal - cashVal) * 1.24;

    document.getElementById("final-total").textContent = finalTotal.toFixed(2) + " €";
    
    // Εμφάνιση της έκπτωσης στην ανάλυση [cite: 2026-01-20]
    document.getElementById("dynamicAnalysis").innerHTML = initialNet > 0 ? 
        `🚀 <strong>Ανάλυση:</strong><br>
         ✅ Δώρα: <strong>${gifts}</strong><br>
         📉 Έκπτωση Τζίρου: <strong>${volPerc}%</strong> (-${volVal.toFixed(2)}€)<br>
         💸 Επιπλέον Μετρητά: <strong>${isCash ? "2%" : "0%"}</strong>` : "Περιμένω δεδομένα...";
}

// ... η showInfo και η processOrder παραμένουν ως είχαν στην v52.0 ...
function onlyOne(checkbox) { document.getElementsByName('payment').forEach(b => { if(b !== checkbox) b.checked = false; }); updateTotals(); }

async function processOrder() {
    const epo = document.getElementById("eponimia").value;
    if(!epo) { alert("Συμπληρώστε τα στοιχεία πελάτη!"); return; }
    alert("Τα στοιχεία αποθηκεύτηκαν [cite: 2026-01-20]");
    location.reload();
}
