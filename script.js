// ============================================================
// ZARKOLIA HEALTH - ELITE SYNC ENGINE v58.0
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxMCnrKJzOHxADBVMw1gH6wZPaieD8YNlkyyS4KBT8RkSKQnfS00LPADkJiezRuga8ScQ/exec";

// --- 1. MODAL WITH INTEGRATED ORDERING [cite: 2026-01-20] ---
function showInfo(name, index) {
    let key = Object.keys(productDetails).find(k => name.toLowerCase().includes(k.toLowerCase())) || name;
    const p = productDetails[key];
    if (!p) return;

    const currentQty = document.getElementById(`qty-${index}`).value || 0;
    const modal = document.getElementById('productModal');

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal()">×</span>
            <div style="text-align:center; margin-bottom:25px;">
                <img src="${p.img}" style="width:130px; border-radius:20px; margin-bottom:15px;">
                <h2 style="color:var(--primary); margin:0;">${name}</h2>
                <small style="color:var(--accent); font-weight:800; text-transform:uppercase;">Scientific Update</small>
            </div>

            <div style="background:#f8fafc; padding:20px; border-radius:20px; max-height:250px; overflow-y:auto; margin-bottom:20px;">
                <h4 style="margin:0 0 10px 0; color:var(--primary); font-size:0.8rem; text-transform:uppercase;">🧬 Μοριακή Ανάλυση (MoA)</h4>
                ${p.moa.map(m => `<p style="font-size:0.9rem; margin-bottom:8px;"><strong>${m.ing}:</strong> ${m.moa}</p>`).join("")}
            </div>

            <div class="modal-footer-action">
                <div>
                    <strong style="display:block; font-size:0.75rem; color:var(--health-gray);">ΠΟΣΟΤΗΤΑ ΠΑΡΑΓΓΕΛΙΑΣ</strong>
                    <div class="qty-controls" style="margin-top:8px;">
                        <button type="button" onclick="syncModalQty(${index}, -1)">−</button>
                        <input type="number" id="modal-qty-${index}" value="${currentQty}" oninput="syncModalQty(${index}, 0)">
                        <button type="button" onclick="syncModalQty(${index}, 1)">+</button>
                    </div>
                </div>
                <div style="text-align:right;">
                    <button class="btn-primary" style="padding:12px 25px; font-size:0.9rem;" onclick="closeModal()">ΠΡΟΣΘΗΚΗ & ΚΛΕΙΣΙΜΟ</button>
                </div>
            </div>
        </div>`;
    
    modal.style.display = 'flex';
}

// Αμφίδρομος Συγχρονισμός Ποσότητας [cite: 2026-01-20]
function syncModalQty(index, delta) {
    const modalInput = document.getElementById(`modal-qty-${index}`);
    const mainInput = document.getElementById(`qty-${index}`);
    
    let newVal = (parseInt(modalInput.value) || 0) + delta;
    newVal = Math.max(0, newVal);
    
    modalInput.value = newVal;
    mainInput.value = newVal;
    updateTotals();
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// ... renderOrderSystem & updateTotals from v57.0 ...
