// ============================================================
// ZARKOLIA HEALTH - ULTIMATE LOGIC ENGINE v35.0
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

// --- 1. ΠΡΟΦΟΡΤΩΣΗ ΦΩΤΟΓΡΑΦΙΩΝ (Preloading για Ταχύτητα) ---
function preloadImages() {
    if (typeof productDetails !== 'undefined') {
        Object.values(productDetails).forEach(detail => {
            if (detail.img) {
                const img = new Image();
                img.src = detail.img;
            }
        });
    }
}

// --- 2. HELPERS ΕΠΙΣΤΗΜΟΝΙΚΗΣ ΤΕΚΜΗΡΙΩΣΗΣ ---
function hcpTable(rows) {
    if (!rows || rows.length === 0) return "<p>Μη διαθέσιμα δεδομένα MoA.</p>";
    return `<table class="hcp-table"><thead><tr style="background:#f9f9f9;"><th>Συστατικό</th><th>Μηχανισμός Δράσης (MoA)</th></tr></thead><tbody>${rows.map(r => `<tr><td><strong>${r.ing}</strong></td><td>${r.moa}</td></tr>`).join("")}</tbody></table>`;
}

function biblioList(items) {
    if (!items || items.length === 0) return "";
    return `<div style="margin-top:20px; padding:15px; background:#f0f9ff; border-radius:10px; border-left:4px solid #0284c7;">
        <h4 style="margin:0 0 10px 0;">Επιστημονική Βιβλιογραφία (HCP Only)</h4>
        <ul style="margin:0; padding-left:18px; font-size:0.85rem;">${items.map(i => `<li style="margin-bottom:5px;">${i}</li>`).join("")}</ul>
    </div>`;
}

// --- 3. LIVE CRM LOOKUP (Αναζήτηση Πελάτη στο Google Sheet) ---
async function lookupCustomer(afm) {
    try {
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?afm=${afm.trim()}`);
        if (!response.ok) throw new Error('Σφάλμα δικτύου');
        const data = await response.json();
        return data.notfound ? null : data;
    } catch (e) {
        console.error("CRM Error:", e);
        return null;
    }
}

// --- 4. INITIALIZATION (Εκκίνηση & Δημιουργία UI) ---
document.addEventListener("DOMContentLoaded", () => {
    preloadImages(); // Έναρξη φόρτωσης φωτογραφιών

    const tableBody = document.querySelector('#product-table tbody');
    const btnContainer = document.getElementById('productButtonsContainer');

    // Δημιουργία Πίνακα και Κουμπιών από το products.js [cite: 2026-01-20]
    if (typeof products !== 'undefined') {
        products.forEach((p, index) => {
            // Κουμπιά Πληροφοριών
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'product-btn';
            btn.innerHTML = `<strong>${p.name}</strong>`;
            btn.onclick = () => showInfo(p.name, index);
            btnContainer.appendChild(btn);

            // Γραμμές Παραγγελίας
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${p.name}</td>
                <td>${p.price.toFixed(2)} €</td>
                <td><input type="number" id="qty-${index}" min="0" oninput="updateTotals()" value="0" style="width:55px; border-radius:8px; border:1px solid #ddd; padding:5px;"></td>
                <td><span id="gift-${index}">0</span></td>
                <td id="eff-${index}">${p.price.toFixed(2)}</td>
                <td id="total-${index}">0.00 €</td>`;
            tableBody.appendChild(row);
        });
    }

    // Live Lookup κατά την πληκτρολόγηση ΑΦΜ
    document.getElementById('afm').addEventListener('input', async function() {
        const val = this.value.trim();
        if (val.length === 9) {
            const c = await lookupCustomer(val);
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

// --- 5. ΕΜΠΟΡΙΚΗ ΠΟΛΙΤΙΚΗ & ΥΠΟΛΟΓΙΣΜΟΙ [cite: 2025-06-19] ---
function updateTotals() { 
    let initialNet = 0; 
    let totalGifts = 0;

    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        // Πολιτική Δώρων: 9+1, 18+3, 24+6
        let g = q >= 24 ? 6 : (q >= 18 ? 3 : (q >= 9 ? 1 : 0));
        const line = q * p.price;
        
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = line.toFixed(2) + " €";
        document.getElementById(`eff-${i}`).textContent = q > 0 ? (line/(q+g)).toFixed(2) : p.price.toFixed(2);
        
        initialNet += line; 
        totalGifts += g;
    });

    // Έκπτωση Τζίρου (3-10%)
    const volPerc = initialNet < 300 ? 0 : (initialNet < 400 ? 3 : (initialNet < 500 ? 4 : Math.min(5 + Math.floor((initialNet-500)/100), 10)));
    const volVal = initialNet * (volPerc / 100);
    
    // Έκπτωση Μετρητών (2%) [cite: 2025-08-13]
    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const cashVal = isCash ? (initialNet - volVal) * 0.02 : 0;
    
    const finalNet = initialNet - volVal - cashVal;

    document.getElementById("final-net").textContent = finalNet.toFixed(2) + " €";
    document.getElementById("final-total").textContent = (finalNet * 1.24).toFixed(2) + " €";

    // Ανάλυση Οφέλους στο UI
    const analysis = document.getElementById("dynamicAnalysis");
    analysis.innerHTML = initialNet > 0 ? `
        <p style="margin:5px 0;">🎁 Δώρα: +${totalGifts} τεμ. | 📉 Έκπτωση Τζίρου: ${volPerc}% (-${volVal.toFixed(2)}€)</p>
        ${isCash ? `<p style="margin:5px 0; color:#34d399;">💰 Έκπτωση Μετρητών: 2% (-${cashVal.toFixed(2)}€)</p>` : ''}
        <p style="margin:5px 0; border-top:1px solid #444; padding-top:5px; font-weight:bold; color:#10b981;">🚀 Συνολικό Όφελος: ~${(volVal + cashVal + (totalGifts * 8)).toFixed(2)} €</p>
    ` : "Περιμένω δεδομένα...";
}

// --- 6. MODAL SYSTEM (HCP HUB - ΠΡΟΒΟΛΗ ΠΛΗΡΟΦΟΡΙΩΝ) ---
function showInfo(name, index) {
    // Αναζήτηση κλειδιού (έξυπνο ταίριασμα για μεγέθη)
    let lookupKey = Object.keys(productDetails).find(key => name.includes(key)) || name;
    const p = productDetails[lookupKey] || { moa: [], cases: "—", rationale: "—" };
    
    const modal = document.getElementById('productModal');
    modal.innerHTML = `
        <div class="modal-content">
            <span style="position:absolute;top:20px;right:25px;cursor:pointer;font-size:2.5rem;" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
            <div style="display:flex; align-items:center; gap:25px; margin-bottom:20px;">
                <img src="${p.img || 'https://via.placeholder.com/130?text=ZARKOLIA'}" style="width:130px; border-radius:15px; border:1px solid #eee; background:#fff;">
                <div>
                    <h2 style="margin:0; color:var(--emerald-dark);">${name}</h2>
                    <p style="color:var(--slate-light); font-weight:700;">HCP Scientific Compendium</p>
                </div>
            </div>
            <h4>🧬 Μοριακός Μηχανισμός Δράσης</h4>
            ${hcpTable(p.moa)}
            <div style="background:#f8fafc; padding:20px; border-radius:15px; margin:20px 0; border:1px solid #eef2f6;">
                <p><strong>📍 Ενδείξεις Φαρμακείου:</strong> ${p.cases}</p>
                <p><strong>💡 Γιατί λειτουργεί:</strong> ${p.rationale}</p>
            </div>
            ${biblioList(p.biblio)}
            <div style="display:flex; gap:10px; align-items:center; background:#ecfdf5; padding:15px; border-radius:15px; margin-top:20px; justify-content: space-between;">
                <strong>Προσθήκη στην παραγγελία:</strong>
                <div style="display:flex; gap:10px;">
                    <input type="number" id="modal-qty" value="${document.getElementById(`qty-${index}`).value}" style="width:70px; padding:10px; border-radius:8px; border:1px solid #ccc;">
                    <button onclick="updateFromModal(${index})" style="background:#059669; color:#fff; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-weight:bold;">ΕΝΗΜΕΡΩΣΗ</button>
                </div>
            </div>
        </div>`;
    modal.style.display = 'block';
}

function updateFromModal(index) {
    document.getElementById(`qty-${index}`).value = document.getElementById('modal-qty').value;
    updateTotals();
    document.getElementById('productModal').style.display = 'none';
}

// --- 7. SYNC & EMAIL (Ολοκλήρωση Παραγγελίας) [cite: 2025-08-13] ---
async function processOrder() {
    const epo = document.getElementById("eponimia").value;
    if(!epo) { alert("Παρακαλώ επιλέξτε Πελάτη!"); return; }

    let emailItems = "";
    const itemsForSheet = products.map((p, i) => {
        const q = document.getElementById(`qty-${i}`).value;
        const g = document.getElementById(`gift-${i}`).textContent;
        if (q > 0) {
            emailItems += `* ${p.name} | Τεμ: ${q} (+${g} δώρο)%0D%0A`;
            return `${p.name} (${q})`;
        }
        return null;
    }).filter(x => x).join(", ");

    if(!itemsForSheet) { alert("Η παραγγελία είναι άδεια!"); return; }

    const data = { 
        customer: epo, afm: document.getElementById("afm").value, doy: document.getElementById("doy").value,
        mobile: document.getElementById("mobile").value, phone: document.getElementById("phone").value, email: document.getElementById("email").value,
        products: itemsForSheet, netValue: document.getElementById("final-net").textContent, 
        total: document.getElementById("final-total").textContent, 
        payment: Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "—", 
        remarks: document.getElementById("remarks").value 
    };

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true; submitBtn.textContent = "Syncing...";

    try {
        // Αποστολή στο Google Sheet
        await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
        alert("ΕΠΙΤΥΧΙΑ! Η παραγγελία και ο νέος πελάτης αποθηκεύτηκαν.");
        
        // Δημιουργία Αντιγράφου Email
        const analysisText = `ΑΝΑΛΥΣΗ ΟΦΕΛΟΥΣ:%0D%0A- Καθαρή Αξία: ${data.netValue}%0D%0A- Τελικό με ΦΠΑ: ${data.total}%0D%0A- Πληρωμή: ${data.payment}`;
        const mailBody = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ%0D%0A%0D%0AΠΕΛΑΤΗΣ: ${epo}%0D%0A%0D%0A${emailItems}%0D%0A%0D%0A${analysisText}%0D%0A%0D%0AΠΑΡΑΤΗΡΗΣΕΙΣ: ${data.remarks}`;
        
        window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=Order_${encodeURIComponent(epo)}&body=${mailBody}`;
    } catch(e) { alert("Σφάλμα σύνδεσης Cloud."); }
    finally { submitBtn.disabled = false; submitBtn.textContent = "Ολοκλήρωση & Αποθήκευση"; }
}

function clearForm() { if(confirm("Εκκαθάριση φόρμας;")) location.reload(); }
