// ============================================================
// ZARKOLIA HEALTH - MASTER LOGIC v38.0
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

// Preloading images for speed [cite: 2026-01-20]
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

// Live CRM Lookup with Hourglass [cite: 2025-08-13]
async function lookupCustomer(afm) {
    const loader = document.getElementById('search-loader');
    loader.className = 'hourglass-visible';
    try {
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?afm=${afm.trim()}`);
        const data = await response.json();
        return data.notfound ? null : data;
    } catch (e) {
        console.error("CRM Error", e); return null;
    } finally {
        loader.className = 'hourglass-hidden';
    }
}

// UI Construction
document.addEventListener("DOMContentLoaded", () => {
    preloadImages();
    const tableBody = document.querySelector('#product-table tbody');
    const btnContainer = document.getElementById('productButtonsContainer');

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
                <td style="color:var(--text-light);">${p.price.toFixed(2)} €</td>
                <td><input type="number" id="qty-${index}" min="0" oninput="updateTotals()" value="0" style="width:60px; text-align:center;"></td>
                <td style="color:var(--primary-dark);"><span id="gift-${index}">0</span></td>
                <td id="eff-${index}" style="font-style:italic;">${p.price.toFixed(2)}</td>
                <td id="total-${index}" style="font-weight:800; color:var(--primary-dark);">0.00 €</td>`;
            tableBody.appendChild(row);
        });
    }

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

// Scientific Modal
function showInfo(name, index) {
    let key = Object.keys(productDetails).find(k => name.includes(k)) || name;
    const p = productDetails[key] || { moa: [], cases: "—", rationale: "—" };
    const modal = document.getElementById('productModal');
    
    modal.innerHTML = `
        <div class="modal-content" style="position:relative; background:#fff; padding:40px; border-radius:30px; max-width:850px; margin:auto; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);">
            <span style="position:absolute; top:20px; right:30px; cursor:pointer; font-size:2.5rem; color:#ccc;" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
            <div style="display:flex; align-items:center; gap:30px; margin-bottom:30px;">
                <img src="${p.img || 'https://via.placeholder.com/150'}" style="width:150px; border-radius:20px; box-shadow: var(--shadow);">
                <div>
                    <h2 style="margin:0; font-size:2rem; color:var(--primary-dark);">${name}</h2>
                    <p style="color:var(--text-light); font-weight:700; margin-top:5px;">Scientific Compendium (HCP Only)</p>
                </div>
            </div>
            <div style="background:#f8fafc; padding:25px; border-radius:20px; margin-bottom:20px;">
                <h4 style="margin-top:0;">🧬 Μοριακός Μηχανισμός Δράσης (MoA)</h4>
                ${p.moa.map(m => `<p><strong>${m.ing}:</strong> ${m.moa}</p>`).join("")}
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
                <div style="background:var(--emerald-light); padding:20px; border-radius:20px;">
                    <strong>📍 Ενδείξεις:</strong><br>${p.cases}
                </div>
                <div style="background:#f0f9ff; padding:20px; border-radius:20px;">
                    <strong>💡 Rationale:</strong><br>${p.rationale}
                </div>
            </div>
            <div style="margin-top:30px; text-align:right;">
                <button onclick="this.parentElement.parentElement.parentElement.style.display='none'" style="background:var(--primary-dark); color:#fff; border:none; padding:15px 40px; border-radius:15px; font-weight:bold; cursor:pointer;">ΚΛΕΙΣΙΜΟ</button>
            </div>
        </div>`;
    modal.style.display = 'block';
}

// Totals Calculation [cite: 2025-08-13]
function updateTotals() {
    let initialNet = 0; let gifts = 0;
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        let g = q >= 24 ? 6 : (q >= 18 ? 3 : (q >= 9 ? 1 : 0));
        const line = q * p.price;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = line.toFixed(2) + " €";
        document.getElementById(`eff-${i}`).textContent = q > 0 ? (line/(q+g)).toFixed(2) : p.price.toFixed(2);
        initialNet += line; gifts += g;
    });

    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const volPerc = initialNet < 300 ? 0 : (initialNet < 400 ? 3 : (initialNet < 500 ? 4 : Math.min(5 + Math.floor((initialNet-500)/100), 10)));
    const volVal = initialNet * (volPerc / 100);
    const cashVal = isCash ? (initialNet - volVal) * 0.02 : 0;
    const finalNet = initialNet - volVal - cashVal;

    document.getElementById("final-net").textContent = finalNet.toFixed(2) + " €";
    document.getElementById("final-total").textContent = (finalNet * 1.24).toFixed(2) + " €";

    document.getElementById("dynamicAnalysis").innerHTML = initialNet > 0 ? 
        `<p style="font-size:1.1rem; color:#34d399;">✅ Κερδίζετε <strong>${gifts}</strong> δωρεάν τεμάχια</p>
         <p style="font-size:1.1rem;">✅ Συνολική έκπτωση: <strong>${(volVal+cashVal).toFixed(2)}€</strong></p>` : "Επιλέξτε προϊόντα...";
}

// Process Order [cite: 2025-08-13]
async function processOrder() {
    const epo = document.getElementById("eponimia").value;
    if(!epo) { alert("Παρακαλώ επιλέξτε Πελάτη!"); return; }

    const items = products.map((p, i) => {
        const q = document.getElementById(`qty-${i}`).value;
        const g = document.getElementById(`gift-${i}`).textContent;
        return q > 0 ? `* ${p.name} (${q} + ${g} δώρο)` : null;
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
        window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=Order_${encodeURIComponent(epo)}&body=ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ%0D%0A%0D%0AΠΕΛΑΤΗΣ: ${epo}%0D%0A%0D%0A${items}%0D%0A%0D%0AΑΝΑΛΥΣΗ ΚΟΣΤΟΥΣ:%0D%0A- Καθαρή Αξία: ${data.netValue}%0D%0A- Τελικό με ΦΠΑ: ${data.total}%0D%0A- Τρόπος Πληρωμής: ${data.payment}%0D%0A%0D%0AΠΑΡΑΤΗΡΗΣΕΙΣ: ${data.remarks}`;
    } catch(e) { alert("Σφάλμα σύνδεσης."); }
}
