// ============================================================
// ZARKOLIA HEALTH - CORE ENGINE v40.0
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

// --- 1. LIVE CRM LOOKUP (Διορθωμένο) [cite: 2025-08-13] ---
async function lookupCustomer(afm) {
    const loader = document.getElementById('search-loader');
    loader.className = 'hourglass-visible'; // Εμφάνιση κλεψύδρας

    try {
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?afm=${afm.trim()}`);
        if (!response.ok) throw new Error('Network Error');
        const data = await response.json();
        return data.notfound ? null : data;
    } catch (e) {
        console.error("CRM Error:", e);
        return null;
    } finally {
        loader.className = 'hourglass-hidden'; // Απόκρυψη κλεψύδρας
    }
}

// --- 2. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector('#product-table tbody');
    const btnContainer = document.getElementById('productButtonsContainer');

    // Δημιουργία UI από το products.js [cite: 2026-01-20]
    if (typeof products !== 'undefined') {
        products.forEach((p, index) => {
            const btn = document.createElement('button');
            btn.className = 'product-btn';
            btn.innerHTML = `<strong>${p.name}</strong>`;
            btn.onclick = () => showInfo(p.name, index);
            btnContainer.appendChild(btn);

            const row = document.createElement('tr');
            row.innerHTML = `
                <td style="font-weight:700;">${p.name}</td>
                <td>${p.price.toFixed(2)} €</td>
                <td><input type="number" id="qty-${index}" min="0" oninput="updateTotals()" value="0" style="width:50px; text-align:center; border-radius:8px; border:1px solid #ddd;"></td>
                <td style="color:var(--accent); font-weight:700;"><span id="gift-${index}">0</span></td>
                <td id="eff-${index}">${p.price.toFixed(2)}</td>
                <td id="total-${index}" style="font-weight:800; text-align:right;">0.00 €</td>`;
            tableBody.appendChild(row);
        });
    }

    // Auto-Lookup ΑΦΜ
    document.getElementById('afm').addEventListener('input', async function() {
        const val = this.value.trim();
        if (val.length === 9) {
            const c = await lookupCustomer(val);
            if (c) {
                document.getElementById('eponimia').value = c.eponimia || "";
                document.getElementById('doy').value = c.doy || "";
                document.getElementById('mobile').value = c.mobile || "";
                document.getElementById('email').value = c.email || "";
            }
        }
    });
});

// --- 3. ΠΡΟΒΟΛΗ ΛΕΠΤΟΜΕΡΕΙΩΝ (CENTERED MODAL) ---
function showInfo(name, index) {
    let key = Object.keys(productDetails).find(k => name.includes(k)) || name;
    const p = productDetails[key] || { moa: [], cases: "—", rationale: "—" };
    const modal = document.getElementById('productModal');
    
    modal.innerHTML = `
        <div class="modal-content">
            <span style="position:absolute; top:20px; right:30px; cursor:pointer; font-size:2.5rem; color:#cbd5e1;" onclick="closeModal()">&times;</span>
            <div style="display:flex; align-items:center; gap:30px; margin-bottom:30px;">
                <img src="${p.img || 'https://via.placeholder.com/150'}" style="width:140px; border-radius:20px; border:1px solid #eee;">
                <div>
                    <h2 style="margin:0; color:var(--primary); font-size:1.8rem;">${name}</h2>
                    <p style="color:#64748b; font-weight:700;">HCP Scientific Compendium</p>
                </div>
            </div>
            <div style="background:#f8fafc; padding:25px; border-radius:20px; border:1px solid #f1f5f9;">
                <h4 style="margin-top:0; color:var(--primary);">🧬 Μοριακός Μηχανισμός Δράσης (MoA)</h4>
                ${p.moa.map(m => `<p style="margin-bottom:10px;"><strong>${m.ing}:</strong> ${m.moa}</p>`).join("")}
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px; margin-top:20px;">
                <div style="background:#ecfdf5; padding:20px; border-radius:18px;"><strong>📍 Ενδείξεις:</strong><br>${p.cases}</div>
                <div style="background:#f0f9ff; padding:20px; border-radius:18px;"><strong>💡 Γιατί λειτουργεί:</strong><br>${p.rationale}</div>
            </div>
            <div style="text-align:right; margin-top:30px;">
                <button onclick="closeModal()" style="background:var(--primary); color:#fff; border:none; padding:15px 40px; border-radius:14px; font-weight:bold; cursor:pointer;">ΚΛΕΙΣΙΜΟ</button>
            </div>
        </div>`;
    modal.classList.add('active');
}

function closeModal() { document.getElementById('productModal').classList.remove('active'); }

// --- 4. TOTALS & ORDER PROCESSING [cite: 2025-08-13] ---
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
    const finalNetVal = initialNet - volVal - cashVal;

    document.getElementById("final-net").textContent = finalNetVal.toFixed(2) + " €";
    document.getElementById("final-total").textContent = (finalNetVal * 1.24).toFixed(2) + " €";

    document.getElementById("dynamicAnalysis").innerHTML = initialNet > 0 ? 
        `✅ Κερδίζετε <strong>${totalGifts}</strong> Δώρα<br>✅ Συνολικό Όφελος: <strong>${(volVal + cashVal + (totalGifts*8)).toFixed(2)}€</strong>` : "—";
}

async function processOrder() {
    const epo = document.getElementById("eponimia").value;
    if(!epo) { alert("Επιλέξτε Πελάτη!"); return; }

    let emailItems = "";
    const items = products.map((p, i) => {
        const q = document.getElementById(`qty-${i}`).value;
        const g = document.getElementById(`gift-${i}`).textContent;
        if(q > 0) {
            emailItems += `* ${p.name} | Τεμ: ${q} (+${g} δώρο)%0D%0A`;
            return `${p.name} (${q})`;
        }
        return null;
    }).filter(x => x).join(", ");

    const finalNetVal = document.getElementById("final-net").textContent;
    const finalTotalVal = document.getElementById("final-total").textContent;

    const data = {
        customer: epo, afm: document.getElementById("afm").value, doy: document.getElementById("doy").value,
        products: items, netValue: finalNetVal, total: finalTotalVal, remarks: document.getElementById("remarks").value
    };

    try {
        await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
        alert("Η παραγγελία καταχωρήθηκε!");
        const mailBody = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ%0D%0A%0D%0AΠΕΛΑΤΗΣ: ${epo}%0D%0A%0D%0A${emailItems}%0D%0A------------------------%0D%0AΑΝΑΛΥΣΗ ΚΟΣΤΟΥΣ:%0D%0A- Καθαρή Αξία: ${finalNetVal}%0D%0A- Τελικό με ΦΠΑ: ${finalTotalVal}%0D%0A------------------------%0D%0AΠΑΡΑΤΗΡΗΣΕΙΣ: ${data.remarks}`;
        window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=Order_${encodeURIComponent(epo)}&body=${mailBody}`;
    } catch(e) { alert("Σφάλμα σύνδεσης."); }
}
