const GAS_URL = "https://script.google.com/macros/s/AKfycbxMCnrKJzOHxADBVMw1gH6wZPaieD8YNlkyyS4KBT8RkSKQnfS00LPADkJiezRuga8ScQ/exec";
let cart = {};
let currentCustomer = null;

// Initialization
PRODUCTS_DATA.forEach(p => cart[p.id] = 0);

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
});

function renderProducts() {
    const container = document.getElementById('product-list');
    container.innerHTML = PRODUCTS_DATA.map(p => `
        <div class="product-card" id="card-${p.id}">
            <div class="product-info-col">
                <span class="badge" style="margin-bottom:10px">${p.category}</span>
                <h4 style="font-size:1.7rem; font-weight:800">${p.name}</h4>
                <p style="color:var(--health-gray); font-weight:600">${p.price.toFixed(2)}€ / μονάδα</p>
                <button class="btn-info-link" style="background:none; border:none; color:var(--accent-emerald); font-weight:700; cursor:pointer; padding:0; margin-top:15px; text-decoration:underline; font-size:1.1rem" onclick="openModal('${p.id}')">SCIENTIFIC INFO</button>
            </div>
            
            <div class="gift-col" style="text-align:center">
                <span id="gift-${p.id}" style="font-weight:800; color:var(--accent-emerald); background:#ecfdf5; padding:10px 20px; border-radius:15px">Δώρα: 0</span>
            </div>

            <div class="qty-controls">
                <button class="btn-qty" onclick="changeQty('${p.id}', -1)">-</button>
                <input type="number" class="qty-input" id="qty-${p.id}" value="0" readonly>
                <button class="btn-qty" onclick="changeQty('${p.id}', 1)">+</button>
            </div>
        </div>
    `).join('');
}

function changeQty(id, delta) {
    cart[id] = Math.max(0, cart[id] + delta);
    document.getElementById(`qty-${id}`).value = cart[id];
    
    // Gift Tier Logic: 9+1, 18+3, 24+6
    let gifts = 0;
    if (cart[id] >= 24) gifts = 6;
    else if (cart[id] >= 18) gifts = 3;
    else if (cart[id] >= 9) gifts = 1;
    
    document.getElementById(`gift-${id}`).innerText = `Δώρα: ${gifts}`;
    calculateTotals();
}

function calculateTotals() {
    let subtotal = 0;
    let totalGiftsCount = 0;

    PRODUCTS_DATA.forEach(p => {
        subtotal += cart[p.id] * p.price;
        if (cart[p.id] >= 24) totalGiftsCount += 6;
        else if (cart[p.id] >= 18) totalGiftsCount += 3;
        else if (cart[p.id] >= 9) totalGiftsCount += 1;
    });

    // 1. Tiered Volume Discount: 1% per 100€ (max 10%)
    let volumeDiscountPercent = Math.min(Math.floor(subtotal / 100), 10);
    let afterVolumeDiscount = subtotal * (1 - volumeDiscountPercent / 100);

    // 2. Cash Discount: +2% on the result of step 1
    const isCash = document.getElementById('payment-method').value === 'cash';
    let cashDiscountAmount = isCash ? afterVolumeDiscount * 0.02 : 0;
    let finalNetValue = afterVolumeDiscount - cashDiscountAmount;

    // 3. VAT 24%
    let vatAmount = finalNetValue * 0.24;
    let totalPayable = finalNetValue + vatAmount;

    // Update ROI Dashboard UI
    document.getElementById('net-total').innerText = `${subtotal.toFixed(2)}€`;
    document.getElementById('total-gifts').innerText = totalGiftsCount;
    document.getElementById('current-discount-badge').innerText = `${volumeDiscountPercent}% Έκπτωση Τζίρου`;
    
    // Progress Bar Logic (Progress toward next 100€)
    let progressPercent = (subtotal % 100); 
    document.getElementById('volume-progress').style.width = (subtotal >= 1000 ? 100 : (subtotal/1000)*100) + "%";
    document.getElementById('progress-text').innerText = `${progressPercent.toFixed(0)} / 100€ για επόμενο κλιμάκιο`;

    // Benefit Calculation: (Savings from discounts) + (Value of gifts estimated at 15€ each)
    let totalBenefit = (subtotal - finalNetValue) + (totalGiftsCount * 15);
    document.getElementById('total-benefit').innerText = `${totalBenefit.toFixed(2)}€`;
    document.getElementById('final-payable').innerText = `${totalPayable.toFixed(2)}€`;
}

function openModal(id) {
    const p = PRODUCTS_DATA.find(x => x.id === id);
    const modal = document.getElementById('info-modal');
    const body = document.getElementById('modal-body');

    body.innerHTML = `
        <h2 class="luxury-title" style="margin-bottom:10px">${p.name}</h2>
        <h4 style="color:var(--accent-emerald); margin-bottom:30px">${p.category} | Scientific Innovation</h4>
        
        <div class="modal-section" style="margin-bottom:30px">
            <h5 style="font-weight:800; border-bottom:2px solid #f1f5f9; padding-bottom:10px">Μηχανισμός Δράσης (MoA)</h5>
            <p style="margin-top:15px; font-size:1.2rem; line-height:1.8">${p.moa}</p>
        </div>

        <div class="modal-section" style="margin-bottom:30px">
            <h5 style="font-weight:800; border-bottom:2px solid #f1f5f9; padding-bottom:10px">Φόρμουλα Συστατικών</h5>
            <p style="margin-top:15px; font-size:1.2rem; line-height:1.8">${p.formula}</p>
        </div>

        <div class="modal-section" style="background:#f0fdf4; padding:30px; border-radius:25px; border:1px dashed var(--accent-emerald)">
            <h5 style="font-weight:800; color:var(--primary-green)">Innovation & Technology</h5>
            <p style="margin-top:10px; font-size:1.1rem">${p.innovation}</p>
        </div>

        <div class="qty-controls" style="margin-top:50px; justify-content:center; background:#f8fafc; padding:30px; border-radius:30px">
            <span style="font-weight:800; margin-right:20px">Ποσότητα Παραγγελίας:</span>
            <button class="btn-qty" onclick="changeQty('${p.id}', -1); syncModal('${p.id}')">-</button>
            <input type="number" class="qty-input" id="modal-qty-${p.id}" value="${cart[p.id]}" readonly>
            <button class="btn-qty" onclick="changeQty('${p.id}', 1); syncModal('${p.id}')">+</button>
        </div>
    `;
    modal.style.display = 'flex';
}

function syncModal(id) {
    document.getElementById(`modal-qty-${id}`).value = cart[id];
}

function setupEventListeners() {
    // CRM Lookup logic
    document.getElementById('afm-input').addEventListener('input', async (e) => {
        const afm = e.target.value;
        if (afm.length === 9) {
            const box = document.getElementById('customer-info-box');
            box.style.display = 'block';
            box.innerText = "Αναζήτηση στη βάση δεδομένων...";
            
            try {
                const response = await fetch(`${GAS_URL}?afm=${afm}`);
                const result = await response.json();
                
                if (result.status === "found" || result.eponimia) {
                    currentCustomer = result;
                    box.innerHTML = `<span style="color:var(--accent-emerald)">✓ ΠΕΛΑΤΗΣ:</span> ${result.eponimia} <br> <span style="font-size:0.9rem; opacity:0.8">ΔΟΥ: ${result.doy}</span>`;
                } else {
                    currentCustomer = null;
                    box.innerHTML = `<span style="color:var(--health-gray)">! ΝΕΟΣ ΠΕΛΑΤΗΣ:</span> Θα γίνει αυτόματη καταχώρηση στο ERP.`;
                }
            } catch (err) {
                box.innerText = "Σφάλμα σύνδεσης με το CRM.";
            }
        }
    });

    document.getElementById('payment-method').onchange = calculateTotals;

    document.querySelector('.close-modal').onclick =
