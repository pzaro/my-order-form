// ============================================================
// ZARKOLIA HEALTH - SUPREME MASTER ENGINE v47.0
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

// --- 1. INITIALIZATION & UI GENERATION ---
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById('product-rows');
    const btnContainer = document.getElementById('productButtonsContainer');

    if (typeof products !== 'undefined') {
        products.forEach((p, index) => {
            // Δημιουργία Οριζόντιων Pills Πληροφοριών [cite: 2026-01-20]
            const btn = document.createElement('button');
            btn.type = "button";
            btn.className = 'product-btn';
            btn.innerHTML = `🧬 ${p.name}`;
            btn.onclick = () => showInfo(p.name, index);
            btnContainer.appendChild(btn);

            // Δημιουργία Γραμμών Πίνακα με Steppers
            const row = document.createElement('tr');
            row.style.borderBottom = "1px solid var(--border-soft)";
            row.innerHTML = `
                <td style="padding:15px;"><strong>${p.name}</strong><br><small style="color:#64748b;">${p.price.toFixed(2)} €</small></td>
                <td style="padding:15px;">
                    <div class="stepper" style="display:flex; align-items:center; background:#f1f5f9; padding:5px; border-radius:12px; width:fit-content; margin:auto;">
                        <button type="button" onclick="changeQty(${index}, -1)" style="width:32px; height:32px; border-radius:8px; border:1px solid #e2e8f0; background:#fff; cursor:pointer; font-weight:800;">−</button>
                        <input type="number" id="qty-${index}" value="0" min="0" oninput="updateTotals()" style="width:45px; text-align:center; border:none; background:transparent; font-weight:700; font-family:inherit;">
                        <button type="button" onclick="changeQty(${index}, 1)" style="width:32px; height:32px; border-radius:8px; border:1px solid #e2e8f0; background:#fff; cursor:pointer; font-weight:800;">+</button>
                    </div>
                </td>
                <td style="padding:15px; text-align:center; color:var(--accent); font-weight:800; font-size:1.1rem;"><span id="gift-${index}">0</span></td>
                <td style="padding:15px; text-align:right; font-weight:900; color:var(--primary);" id="total-${index}">0.00 €</td>`;
            tableBody.appendChild(row);
        });
    }

    // CRM Lookup με Έξυπνα Μηνύματα [cite: 2025-08-13]
    document.getElementById('afm').addEventListener('input', async function() {
        if (this.value.trim().length === 9) {
            const loader = document.getElementById('search-loader');
            loader.className = 'hourglass-visible spin'; // Εμφάνιση Κλεψύδρας
            try {
                const response = await fetch(`${GOOGLE_SCRIPT_URL}?afm=${this.value}`);
                const data = await response.json();
                if (data && !data.notfound) {
                    document.getElementById('eponimia').value = data.eponimia || "";
                    document.getElementById('doy').value = data.doy || "";
                    document.getElementById('address').value = data.address || "";
                    document.getElementById('city').value = data.city || "";
                    document.getElementById('tk').value = data.tk || "";
                    document.getElementById('email').value = data.email || "";
                    document.getElementById('mobile').value = data.mobile || "";
                } else {
                    alert("Δεν βρέθηκε εγγραφή παρακαλώ συμπληρώστε τα στοιχεία σας");
                }
            } finally { loader.className = 'hourglass-hidden'; }
        }
    });
});

// --- 2. STEPPER LOGIC ---
function changeQty(index, delta) {
    const input = document.getElementById(`qty-${index}`);
    let newVal = (parseInt(input.value) || 0) + delta;
    input.value = newVal < 0 ? 0 : newVal;
    updateTotals();
}

// --- 3. ADVANCED DISCOUNT ENGINE (2% - 10%) [cite: 2026-01-20] ---
function updateTotals() {
    let initialNet = 0; let gifts = 0;
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        let g = q >= 24 ? 6 : (q >= 18 ? 3 : (q >= 9 ? 1 : 0));
        initialNet += q * p.price; gifts += g;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = (q * p.price).toFixed(2) + " €";
    });

    // Κλίμακα Τζίρου: 200€(2%) -> 1000€(10%) με βήμα 1% ανά 100€
    let volPerc = 0;
    if (initialNet >= 1000) volPerc = 10;
    else if (initialNet >= 200) volPerc = Math.floor(initialNet / 100);

    const volVal = initialNet * (volPerc / 100);
    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const cashVal = isCash ? (initialNet - volVal) * 0.02 : 0;
    const finalTotal = (initialNet - volVal - cashVal) * 1.24;

    document.getElementById("final-total").textContent = finalTotal.toFixed(2) + " €";
    document.getElementById("dynamicAnalysis").innerHTML = initialNet > 0 ? 
        `✅ Δώρα: <strong>${gifts}</strong> | Έκπτωση Τζίρου: <strong>${volPerc}% (-${volVal.toFixed(2)}€)</strong><br>
         🚀 Συνολικό Όφελος: <strong>${(volVal + cashVal + (gifts*8)).toFixed(2)}€</strong>` : "—";
}

// --- 4. CENTERED MODAL & SCIENTIFIC DATA ---
function showInfo(name, index) {
    let key = Object.keys(productDetails).find(k => name.includes(k)) || name;
    const p = productDetails[key] || { moa: [], cases: "—", rationale: "—", img: "" };
    const modal = document.getElementById('productModal');
    
    modal.innerHTML = `
        <div class="modal-content">
            <span style="position:absolute; top:25px; right:35px; cursor:pointer; font-size:2.5rem; color:#cbd5e1;" onclick="closeModal()">&times;</span>
            <div style="display:flex; align-items:center; gap:40px; margin-bottom:40px; flex-wrap:wrap;">
                <img src="${p.img}" style="width:160px; border-radius:28px; border:1px solid #eee; box-shadow: 0 10px 20px rgba(0,0,0,0.05);">
                <div>
                    <h2 style="margin:0; color:var(--primary); font-size:2.2rem; letter-spacing:-1px;">${name}</h2>
                    <p style="color:var(--accent); font-weight:800; text-transform:uppercase; letter-spacing:1px;">Scientific Compendium</p>
                </div>
            </div>
            <div style="background:#f8fafc; padding:30px; border-radius:28px; border:1px solid #f1f5f9; margin-bottom:25px;">
                <h4 style="margin-top:0; color:var(--primary); text-transform:uppercase; font-size:0.9rem;">🧬 Μοριακός Μηχανισμός (MoA)</h4>
                ${p.moa.map(m => `<p style="margin-bottom:10px; font-size:1rem;"><strong>${m.ing}:</strong> ${m.moa}</p>`).join("")}
            </div>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:25px;">
                <div style="background:#ecfdf5; padding:25px; border-radius:20px;">
                    <strong style="color:var(--primary); font-size:0.75rem; text-transform:uppercase;">📍 Ενδείξεις</strong><br><span style="font-weight:600;">${p.cases}</span>
                </div>
                <div style="background:#f0f9ff; padding:25px; border-radius:20px;">
                    <strong style="color:#0369a1; font-size:0.75rem; text-transform:uppercase;">💡 Rationale</strong><br><span style="font-weight:600;">${p.rationale || "Zarkolia Exclusive Formulation"}</span>
                </div>
            </div>
            <div style="margin-top:25px; padding:15px; background:#f8fafc; border-radius:12px; border-left:4px solid var(--accent);">
                <strong style="font-size:0.8rem;">📚 ΒΙΒΛΙΟΓΡΑΦΙΑ:</strong><br>
                <small>${p.biblio ? p.biblio.join("<br>") : "HCP Only Data"}</small>
            </div>
        </div>`;
    modal.classList.add('active');
}

function closeModal() { document.getElementById('productModal').classList.remove('active'); }

function onlyOne(checkbox) {
    document.getElementsByName('payment').forEach(b => { if(b !== checkbox) b.checked = false; });
    updateTotals();
}

// --- 5. PROCESS ORDER & EMAIL SYNC [cite: 2025-08-13] ---
async function processOrder() {
    const epo = document.getElementById("eponimia").value;
    const afm = document.getElementById("afm").value;
    const totalVal = document.getElementById("final-total").textContent;
    const remarks = document.getElementById("remarks").value;
    const payment = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "—";

    if (!epo || !afm) {
        alert("Παρακαλώ συμπληρώστε τα στοιχεία πελάτη!");
        return;
    }

    let emailItems = "";
    let sheetItems = [];

    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        const g = document.getElementById(`gift-${i}`).textContent;
        if (q > 0) {
            emailItems += `• ${p.name}: ${q} τεμ. (+${g} δώρο)%0D%0A`;
            sheetItems.push(`${p.name} (${q}+${g})`);
        }
    });

    if (sheetItems.length === 0) {
        alert("Η παραγγελία είναι άδεια!");
        return;
    }

    const submitBtn = document.querySelector(".btn-primary");
    submitBtn.disabled = true;
    submitBtn.textContent = "Γίνεται Συγχρονισμός...";

    try {
        // Αποστολή στο Google Sheet
        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ customer: epo, afm: afm, products: sheetItems.join(", "), total: totalVal, payment: payment, remarks: remarks })
        });

        alert("Τα στοιχεία αποθηκεύτηκαν");

        // Δημιουργία Email
        const mailBody = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ - ZARKOLIA HEALTH%0D%0A------------------------------------%0D%0AΠΕΛΑΤΗΣ: ${epo}%0D%0AΑΦΜ: ${afm}%0D%0A------------------------------------%0D%0AΠΡΟΪΟΝΤΑ:%0D%0A${emailItems}%0D%0A------------------------------------%0D%0AΠΛΗΡΩΜΗ: ${payment}%0D%0AΣΥΝΟΛΟ ΜΕ ΦΠΑ: ${totalVal}%0D%0A------------------------------------%0D%0AΠΑΡΑΤΗΡΗΣΕΙΣ: ${remarks}`;

        window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=Νέα Παραγγελία: ${encodeURIComponent(epo)}&body=${mailBody}`;

    } catch (e) {
        alert("Σφάλμα σύνδεσης. Δοκιμάστε ξανά.");
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Ολοκλήρωση & Αποθήκευση";
    }
}
