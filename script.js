// State Management
let cart = {};
PRODUCTS_DATA.forEach(p => cart[p.id] = 0);

const GAS_URL = "https://script.google.com/macros/s/AKfycbzMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
});

function renderProducts() {
    const container = document.getElementById('product-list');
    container.innerHTML = PRODUCTS_DATA.map(p => `
        <div class="product-card" id="card-${p.id}">
            <div class="product-info">
                <h4>${p.name}</h4>
                <p class="price-tag">${p.price.toFixed(2)}€ / μονάδα</p>
                <button class="btn-info" onclick="openModal('${p.id}')">SCIENTIFIC INFO</button>
            </div>
            
            <div class="gift-display">
                <span class="gift-tag" id="gift-${p.id}">Δώρα: 0</span>
            </div>

            <div class="qty-controls">
                <button class="btn-qty" onclick="updateQty('${p.id}', -1)">-</button>
                <input type="number" class="qty-input" id="qty-${p.id}" 
                       value="0" onchange="manualQty('${p.id}', this.value)">
                <button class="btn-qty" onclick="updateQty('${p.id}', 1)">+</button>
            </div>
        </div>
    `).join('');
}

function updateQty(id, delta) {
    cart[id] = Math.max(0, cart[id] + delta);
    syncUI(id);
}

function manualQty(id, val) {
    cart[id] = Math.max(0, parseInt(val) || 0);
    syncUI(id);
}

function syncUI(id) {
    document.getElementById(`qty-${id}`).value = cart[id];
    const gifts = calculateGifts(cart[id]);
    document.getElementById(`gift-${id}`).innerText = `Δώρα: ${gifts}`;
    calculateTotals();
}

function calculateGifts(qty) {
    if (qty >= 24) return 6;
    if (qty >= 18) return 3;
    if (qty >= 9) return 1;
    return 0;
}

function calculateTotals() {
    let subtotal = 0;
    let totalGiftsCount = 0;

    PRODUCTS_DATA.forEach(p => {
        subtotal += cart[p.id] * p.price;
        totalGiftsCount += calculateGifts(cart[p.id]);
    });

    // 1. Volume Discount: 1% per 100€ (max 10%)
    let volumeDiscountPercent = Math.min(Math.floor(subtotal / 100), 10);
    let afterVolumeDiscount = subtotal * (1 - volumeDiscountPercent / 100);

    // 2. Cash Discount: +2% on the result
    const isCash = document.getElementById('payment-method').value === 'cash';
    let cashDiscountAmount = isCash ? afterVolumeDiscount * 0.02 : 0;
    let netFinal = afterVolumeDiscount - cashDiscountAmount;

    // 3. VAT 24%
    let vatAmount = netFinal * 0.24;
    let totalPayable = netFinal + vatAmount;

    // Update ROI Dashboard
    document.getElementById('net-total').innerText = `${subtotal.toFixed(2)}€`;
    document.getElementById('total-gifts').innerText = totalGiftsCount;
    document.getElementById('current-discount-badge').innerText = `${volumeDiscountPercent}% Έκπτωση`;
    
    const progress = (subtotal % 1000) / 10; // Progress toward next 100€ or max
    document.getElementById('volume-progress').style.width = `${Math.min((subtotal/1000)*100, 100)}%`;

    let benefit = (subtotal - netFinal) + (totalGiftsCount * 15); // Estimated gift value 15€
    document.getElementById('total-benefit').innerText = `${benefit.toFixed(2)}€`;
    document.getElementById('final-payable').innerText = `${totalPayable.toFixed(2)}€`;
}

// Modal Logic
function openModal(id) {
    const p = PRODUCTS_DATA.find(x => x.id === id);
    const modal = document.getElementById('info-modal');
    const body = document.getElementById('modal-body');

    body.innerHTML = `
        <h2 style="margin-bottom:20px">${p.name} - Scientific Compendium</h2>
        <div style="margin-bottom:30px">
            <h4 style="color:var(--accent-emerald)">Μηχανισμός Δράσης (MoA)</h4>
            <p>${p.moa}</p>
        </div>
        <div style="margin-bottom:30px">
            <h4 style="color:var(--accent-emerald)">Συστατικά</h4>
            <p>${p.ingredients}</p>
        </div>
        <hr style="margin-bottom:30px; opacity:0.2">
        <div class="qty-controls" style="justify-content:center">
            <label>Άμεση Προσθήκη:</label>
            <button class="btn-qty" onclick="updateQty('${p.id}', -1); syncModalQty('${p.id}')">-</button>
            <input type="number" class="qty-input" id="modal-qty-${p.id}" value="${cart[p.id]}" readonly>
            <button class="btn-qty" onclick="updateQty('${p.id}', 1); syncModalQty('${p.id}')">+</button>
        </div>
    `;
    modal.style.display = 'flex';
}

function syncModalQty(id) {
    document.getElementById(`modal-qty-${id}`).value = cart[id];
}

function setupEventListeners() {
    document.querySelector('.close-modal').onclick = () => {
        document.getElementById('info-modal').style.display = 'none';
    };

    document.getElementById('payment-method').onchange = calculateTotals;

    document.getElementById('submit-order').onclick = async () => {
        const afm = document.getElementById('afm-input').value;
        if (afm.length !== 9) {
            alert("Παρακαλώ εισάγετε έγκυρο ΑΦΜ 9 ψηφίων.");
            return;
        }

        const orderData = {
            afm: afm,
            items: cart,
            total: document.getElementById('final-payable').innerText,
            timestamp: new Date().toISOString()
        };

        // Logic for Google Apps Script Connection
        console.log("Sending Order...", orderData);
        alert("Η παραγγελία καταχωρήθηκε με επιτυχία!");
    };
}