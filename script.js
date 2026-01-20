// ============================================================
// ZARKOLIA HEALTH - LIVE CRM ENGINE v31.0
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

// --- 1. LIVE LOOKUP ---
async function lookupCustomer(afm) {
    try {
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?afm=${afm}`);
        const data = await response.json();
        return data.notfound ? null : data;
    } catch (e) { return null; }
}

// --- 2. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector('#product-table tbody');
    const btnContainer = document.getElementById('productButtonsContainer');

    // Χρήση της μεταβλητής 'products' από το products.js
    products.forEach((p, index) => {
        const btn = document.createElement('button');
        btn.className = 'product-btn';
        btn.innerHTML = `<strong>${p.name}</strong>`;
        btn.onclick = () => showInfo(p.name, index);
        btnContainer.appendChild(btn);

        const row = document.createElement('tr');
        row.innerHTML = `<td>${p.name}</td><td>${p.price.toFixed(2)}</td><td><input type="number" id="qty-${index}" min="0" oninput="updateTotals()" value="0" style="width:55px;"></td><td><span id="gift-${index}">0</span></td><td id="eff-${index}">${p.price.toFixed(2)}</td><td id="total-${index}">0.00</td>`;
        tableBody.appendChild(row);
    });

    document.getElementById('afm').addEventListener('input', async function() {
        const val = this.value.trim();
        if (val.length === 9) {
            const c = await lookupCustomer(val);
            if (c) {
                document.getElementById('eponimia').value = c.eponimia || "";
                document.getElementById('doy').value = c.doy || "";
                document.getElementById('mobile').value = c.mobile || "";
                document.getElementById('phone').value = c.phone || "";
                document.getElementById('email').value = c.email || "";
            }
        }
    });
});

function updateTotals() { 
    let initialNet = 0; let totalGifts = 0;
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        let g = q >= 24 ? 6 : (q >= 18 ? 3 : (q >= 9 ? 1 : 0));
        initialNet += q * p.price; totalGifts += g;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = (q * p.price).toFixed(2) + " €";
        document.getElementById(`eff-${i}`).textContent = q > 0 ? ((q * p.price)/(q+g)).toFixed(2) : p.price.toFixed(2);
    });

    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const volPerc = initialNet < 300 ? 0 : (initialNet < 400 ? 3 : (initialNet < 500 ? 4 : Math.min(5 + Math.floor((initialNet-500)/100), 10)));
    const volVal = initialNet * (volPerc / 100);
    const cashVal = isCash ? (initialNet - volVal) * 0.02 : 0;
    const finalNet = initialNet - volVal - cashVal;

    document.getElementById("final-net").textContent = finalNet.toFixed(2) + " €";
    document.getElementById("final-total").textContent = (finalNet * 1.24).toFixed(2) + " €";

    const analysis = document.getElementById("dynamicAnalysis");
    analysis.innerHTML = initialNet > 0 ? `<p>🎁 Δώρα: +${totalGifts} τεμ | 📉 Έκπτωση: ${(volVal+cashVal).toFixed(2)}€</p>` : "Επιλέξτε προϊόντα...";
}

async function processOrder() {
    const epo = document.getElementById("eponimia").value;
    if(!epo) { alert("Επιλέξτε Πελάτη!"); return; }
    
    const items = products.map((p, i) => {
        const q = document.getElementById(`qty-${i}`).value;
        return q > 0 ? `* ${p.name} (${q} τεμ + ${document.getElementById(`gift-${i}`).textContent} δώρο)` : null;
    }).filter(x => x).join("%0D%0A");

    const analysis = `ΑΝΑΛΥΣΗ ΚΕΡΔΟΥΣ:%0D%0A- Καθαρή Αξία: ${document.getElementById("final-net").textContent}%0D%0A- Τελικό με ΦΠΑ: ${document.getElementById("final-total").textContent}%0D%0A- Πληρωμή: ${Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "—"}`;

    const data = {
        customer: epo, afm: document.getElementById("afm").value, doy: document.getElementById("doy").value,
        mobile: document.getElementById("mobile").value, phone: document.getElementById("phone").value, email: document.getElementById("email").value,
        products: items.replace(/%0D%0A/g, ", "), netValue: document.getElementById("final-net").textContent, total: document.getElementById("final-total").textContent,
        payment: Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "—", remarks: document.getElementById("remarks").value
    };

    try {
        await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
        alert("Επιτυχής καταχώρηση!");
        window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=Order_${encodeURIComponent(epo)}&body=ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ%0D%0A%0D%0A${items}%0D%0A%0D%0A${analysis}%0D%0A%0D%0AΠΑΡΑΤΗΡΗΣΕΙΣ: ${document.getElementById("remarks").value}`;
    } catch(e) { alert("Σφάλμα σύνδεσης."); }
}

function showInfo(name, index) {
    let lookup = Object.keys(productDetails).find(key => name.includes(key)) || name;
    const p = productDetails[lookup] || { moa: [], cases: "—" };
    const modal = document.getElementById('productModal');
    modal.innerHTML = `<div class="modal-content"><h2>${name}</h2>${hcpTable(p.moa)}<p><strong>Ενδείξεις:</strong> ${p.cases}</p><button onclick="this.parentElement.parentElement.style.display='none'">ΚΛΕΙΣΙΜΟ</button></div>`;
    modal.style.display = 'block';
}
