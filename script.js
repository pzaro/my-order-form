// ============================================================
// ZARKOLIA HEALTH - ULTIMATE LOGIC ENGINE v37.0
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

// --- 1. HELPERS ΕΠΙΣΤΗΜΟΝΙΚΗΣ ΤΕΚΜΗΡΙΩΣΗΣ ---
function hcpTable(rows) {
    if (!rows || rows.length === 0) return "<p>Μη διαθέσιμα δεδομένα MoA.</p>";
    return `<table style="width:100%; border-collapse:collapse; margin:15px 0; font-size:0.85rem;">
        <thead><tr style="background:#f9f9f9;"><th style="padding:8px; border:1px solid #eee;">Συστατικό</th><th style="padding:8px; border:1px solid #eee;">Μηχανισμός Δράσης (MoA)</th></tr></thead>
        <tbody>${rows.map(r => `<tr><td style="padding:8px; border:1px solid #eee;"><strong>${r.ing}</strong></td><td style="padding:8px; border:1px solid #eee;">${r.moa}</td></tr>`).join("")}</tbody>
    </table>`;
}

// --- 2. LIVE CRM LOOKUP ΜΕ ΚΛΕΨΥΔΡΑ ---
async function lookupCustomer(afm) {
    const loader = document.getElementById('search-loader');
    loader.className = 'hourglass-visible'; // Εμφάνιση κλεψύδρας

    try {
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?afm=${afm.trim()}`);
        const data = await response.json();
        return data.notfound ? null : data;
    } catch (e) {
        console.error("CRM Error:", e);
        return null;
    } finally {
        loader.className = 'hourglass-hidden'; // Απόκρυψη κλεψύδρας
    }
}

// --- 3. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector('#product-table tbody');
    const btnContainer = document.getElementById('productButtonsContainer');

    // Δυναμική παραγωγή από το products.js [cite: 2026-01-20]
    products.forEach((p, index) => {
        const btn = document.createElement('button');
        btn.className = 'product-btn';
        btn.innerHTML = `<strong>${p.name}</strong>`;
        btn.onclick = () => showInfo(p.name, index);
        btnContainer.appendChild(btn);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p.name}</td>
            <td>${p.price.toFixed(2)} €</td>
            <td><input type="number" id="qty-${index}" min="0" oninput="updateTotals()" value="0" style="width:50px;"></td>
            <td><span id="gift-${index}">0</span></td>
            <td id="eff-${index}">${p.price.toFixed(2)}</td>
            <td id="total-${index}">0.00 €</td>`;
        tableBody.appendChild(row);
    });

    // Event Listener για ΑΦΜ (Image 2 Logic)
    document.getElementById('afm').addEventListener('input', async function() {
        if (this.value.trim().length === 9) {
            const c = await lookupCustomer(this.value);
            if (c) {
                document.getElementById('eponimia').value = c.eponimia || "";
                document.getElementById('doy').value = c.doy || "ΕΔΕΣΣΑΣ";
                document.getElementById('mobile').value = c.mobile || "";
                document.getElementById('phone').value = c.phone || "";
                document.getElementById('email').value = c.email || "";
            }
        }
    });
});

// --- 4. ΥΠΟΛΟΓΙΣΜΟΙ & ΠΟΛΙΤΙΚΗ [cite: 2025-08-13] ---
function updateTotals() { 
    let initialNet = 0; let totalGifts = 0;
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        let g = q >= 24 ? 6 : (q >= 18 ? 3 : (q >= 9 ? 1 : 0));
        const line = q * p.price;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = line.toFixed(2) + " €";
        document.getElementById(`eff-${i}`).textContent = q > 0 ? (line/(q+g)).toFixed(2) : p.price.toFixed(2);
        initialNet += line; totalGifts += g;
    });

    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const volPerc = initialNet < 300 ? 0 : (initialNet < 400 ? 3 : (initialNet < 500 ? 4 : Math.min(5 + Math.floor((initialNet-500)/100), 10)));
    const volVal = initialNet * (volPerc / 100);
    const cashVal = isCash ? (initialNet - volVal) * 0.02 : 0;
    const finalNet = initialNet - volVal - cashVal;

    document.getElementById("final-net").textContent = finalNet.toFixed(2) + " €";
    document.getElementById("final-total").textContent = (finalNet * 1.24).toFixed(2) + " €";

    document.getElementById("dynamicAnalysis").innerHTML = initialNet > 0 ? 
        `<p>🎁 Δώρα: +${totalGifts} | 📉 Έκπτωση: ${(volVal+cashVal).toFixed(2)}€</p>` : "Επιλέξτε προϊόντα...";
}

// --- 5. MODAL SYSTEM (HCP HUB) ---
function showInfo(name, index) {
    let lookupKey = Object.keys(productDetails).find(key => name.includes(key)) || name;
    const p = productDetails[lookupKey] || { moa: [], cases: "—", rationale: "—" };
    const modal = document.getElementById('productModal');
    modal.innerHTML = `
        <div class="modal-content">
            <span style="position:absolute;top:15px;right:20px;cursor:pointer;font-size:2rem;" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
            <div style="display:flex; align-items:center; gap:20px; margin-bottom:20px;">
                <img src="${p.img || 'https://via.placeholder.com/130'}" style="width:110px; border-radius:12px; border:1px solid #eee;">
                <div><h2 style="margin:0;">${name}</h2><p style="color:#64748b; font-size:0.8rem;">HCP Compendium</p></div>
            </div>
            <h4>🧬 Μοριακός Μηχανισμός</h4>
            ${hcpTable(p.moa)}
            <p><strong>📍 Ενδείξεις:</strong> ${p.cases}</p>
            <p><strong>💡 Γιατί λειτουργεί:</strong> ${p.rationale}</p>
            <div style="display:flex; gap:10px; align-items:center; background:#ecfdf5; padding:12px; border-radius:12px; margin-top:15px; justify-content:space-between;">
                <span>Ποσότητα: <input type="number" id="modal-qty" value="${document.getElementById(`qty-${index}`).value}" style="width:50px;"></span>
                <button onclick="updateFromModal(${index})" style="background:#059669; color:#fff; border:none; padding:8px 15px; border-radius:8px; cursor:pointer;">ΕΝΗΜΕΡΩΣΗ</button>
            </div>
        </div>`;
    modal.style.display = 'block';
}

function updateFromModal(index) {
    document.getElementById(`qty-${index}`).value = document.getElementById('modal-qty').value;
    updateTotals(); document.getElementById('productModal').style.display = 'none';
}

// --- 6. PROCESS ORDER & EMAIL [cite: 2025-08-13] ---
async function processOrder() {
    const epo = document.getElementById("eponimia").value;
    if(!epo) { alert("Επιλέξτε Πελάτη!"); return; }

    const items = products.map((p, i) => {
        const q = document.getElementById(`qty-${i}`).value;
        const g = document.getElementById(`gift-${i}`).textContent;
        return q > 0 ? `* ${p.name} (${q} τεμ + ${g} δώρο)` : null;
    }).filter(x => x).join("%0D%0A");

    const data = { 
        customer: epo, afm: document.getElementById("afm").value, doy: document.getElementById("doy").value,
        mobile: document.getElementById("mobile").value, phone: document.getElementById("phone").value, email: document.getElementById("email").value,
        products: items.replace(/%0D%0A/g, ", "), netValue: document.getElementById("final-net").textContent, 
        total: document.getElementById("final-total").textContent, payment: Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "—", remarks: document.getElementById("remarks").value 
    };

    try {
        await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
        alert("ΕΠΙΤΥΧΙΑ!");
        const mailBody = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ%0D%0A%0D%0AΠΕΛΑΤΗΣ: ${epo}%0D%0A%0D%0A${items}%0D%0A%0D%0AΑΝΑΛΥΣΗ ΚΟΣΤΟΥΣ:%0D%0A- Καθαρή Αξία: ${data.netValue}%0D%0A- Τελικό με ΦΠΑ: ${data.total}%0D%0A- Πληρωμή: ${data.payment}%0D%0A%0D%0AΠΑΡΑΤΗΡΗΣΕΙΣ: ${data.remarks}`;
        window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=Order_${encodeURIComponent(epo)}&body=${mailBody}`;
    } catch(e) { alert("Σφάλμα σύνδεσης."); }
}
