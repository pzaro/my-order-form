// --- Προσθήκη Preloading Φωτογραφιών στην αρχή του script.js ---
function preloadImages() {
    Object.values(productDetails).forEach(detail => {
        if (detail.img) {
            const img = new Image();
            img.src = detail.img;
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    preloadImages(); // Φόρτωση φωτογραφιών αμέσως
    
    // ... Υπόλοιπος κώδικας για Lookup ΑΦΜ και Πίνακα Προϊόντων ...
    
    // Διορθωμένο Lookup ΑΦΜ
    document.getElementById('afm').addEventListener('input', async function() {
        const val = this.value.trim();
        if (val.length === 9) {
            const response = await fetch(`${GOOGLE_SCRIPT_URL}?afm=${val}`);
            const c = await response.json();
            if (c && !c.notfound) {
                document.getElementById('eponimia').value = c.eponimia || "";
                document.getElementById('doy').value = c.doy || "ΕΔΕΣΣΑΣ";
                document.getElementById('mobile').value = c.mobile || "";
                document.getElementById('phone').value = c.phone || "";
                document.getElementById('email').value = c.email || "";
            }
        }
    });
});

// Διορθωμένο showInfo για να βρίσκει την κρέμα ματιών και τα μεγέθη
function showInfo(name, index) {
    let lookupKey = Object.keys(productDetails).find(key => name.includes(key));
    const p = productDetails[lookupKey] || { moa: [], cases: "—", rationale: "—" };
    
    const modal = document.getElementById('productModal');
    modal.innerHTML = `
        <div class="modal-content">
            <span style="position:absolute;top:20px;right:25px;cursor:pointer;font-size:2.5rem;" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
            <div style="display:flex; align-items:center; gap:25px; margin-bottom:20px;">
                <img src="${p.img || 'https://via.placeholder.com/130?text=ZARKOLIA'}" style="width:130px; border-radius:15px; border:1px solid #eee;">
                <div><h2>${name}</h2></div>
            </div>
            <h4>🧬 Μηχανισμός Δράσης</h4>
            ${hcpTable(p.moa)}
            <p><strong>📍 Ενδείξεις:</strong> ${p.cases}</p>
            <p><strong>💡 Rationale:</strong> ${p.rationale}</p>
            ${biblioList(p.biblio)}
        </div>`;
    modal.style.display = 'block';
}
