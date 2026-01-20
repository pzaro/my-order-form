let cart = {};
PRODUCTS_DATA.forEach(p => cart[p.id] = 0);

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupListeners();
});

function renderProducts() {
    const list = document.getElementById('product-list');
    list.innerHTML = PRODUCTS_DATA.map(p => `
        <div class="product-card">
            <div class="product-info">
                <h4 style="font-size:1.6rem">${p.name}</h4>
                <p style="color:var(--health-gray)">${p.price.toFixed(2)}€ / μονάδα</p>
                <button class="btn-info" style="margin-top:10px; cursor:pointer; background:none; border:1px solid #ddd; padding:5px 10px; border-radius:8px" 
                        onclick="openModal('${p.id}')">ℹ INFO</button>
            </div>
            
            <div class="gift-col">
                <span class="badge" id="gift-${p.id}">Δώρα: 0</span>
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
    updateUI(id);
}

function updateUI(id) {
    document.getElementById(`qty-${id}`).value = cart[id];
    
    // Gift Logic: 9+1, 18+3, 24+6
    let gifts = 0;
    if (cart[id] >= 24) gifts = 6;
    else if (cart[id] >= 18) gifts = 3;
    else if (cart[id] >= 9) gifts = 1;
    
    document.getElementById(`gift-${id}`).innerText = `Δώρα: ${gifts}`;
    calculateTotals();
}

function calculateTotals() {
    let subtotal = 0;
    let totalGifts = 0;

    PRODUCTS_DATA.forEach(p => {
        subtotal += cart[p.id] * p.price;
        // Re-calc gifts for total
        if (cart[p.id] >= 24) totalGifts += 6;
        else if (cart[p.id] >= 18) totalGifts += 3;
        else if (cart[p.id] >= 9) totalGifts += 1;
    });

    // 1% discount per 100€ (max 10%)
    let volDiscountPercent = Math.min(Math.floor(subtotal / 100), 10);
    let afterVol = subtotal * (1 - volDiscountPercent / 100);

    // Cash discount +2%
    const isCash = document.getElementById('payment-method').value === 'cash';
    let cashDiscount = isCash ? afterVol * 0.02 : 0;
    let netFinal = afterVol - cashDiscount;

    // VAT 24%
    let totalPayable = netFinal * 1.24;

    // Dashboard Update
    document.getElementById('net-total').innerText = `${subtotal.toFixed(2)}€`;
    document.getElementById('total-gifts').innerText = totalGifts;
    document.getElementById('current-discount-badge').innerText = `${volDiscountPercent}% Έκπτωση`;
    document.getElementById('final-payable').innerText = `${totalPayable.toFixed(2)}€`;

    // Progress Bar (next 100€)
    let progress = (subtotal % 100);
    document.getElementById('volume-progress').style.width = `${progress}%`;
    document.getElementById('progress-text').innerText = `${progress.toFixed(0)} / 100€`;

    // ROI Estimation (Subtotal - Final Net + Gift Value)
    let benefit = (subtotal - netFinal) + (totalGifts * 15); 
    document.getElementById('total-benefit').innerText = `${benefit.toFixed(2)}€`;
}

function openModal(id) {
    const p = PRODUCTS_DATA.find(x => x.id === id);
    document.getElementById('modal-body').innerHTML = `
        <h2 class="luxury-title">${p.name}</h2>
        <p class="subtitle">Επιστημονικό Compendium</p>
        <div style="margin:30px 0">
            <h4 style="color:var(--accent-emerald)">Μηχανισμός Δράσης (MoA)</h4>
            <p>${p.moa}</p>
            <h4 style="color:var(--accent-emerald); margin-top:20px">Συστατικά</h4>
            <p>${p.ingredients}</p>
        </div>
        <div class="qty-controls" style="justify-content:center; padding:30px; background:#f8fafc; border-radius:20px">
            <span>Ποσότητα:</span>
            <button class="btn-qty" onclick="changeQty('${p.id}', -1); syncModal('${p.id}')">-</button>
            <input type="number" class="qty-input" id="modal-qty-${p.id}" value="${cart[p.id]}" readonly>
            <button class="btn-qty" onclick="changeQty('${p.id}', 1); syncModal('${p.id}')">+</button>
        </div>
    `;
    document.getElementById('info-modal').style.display = 'flex';
}

function syncModal(id) {
    document.getElementById(`modal-qty-${id}`).value = cart[id];
}

function setupListeners() {
    document.querySelector('.close-modal').onclick = () => document.getElementById('info-modal').style.display = 'none';
    document.getElementById('payment-method').onchange = calculateTotals;
}