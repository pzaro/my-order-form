const GAS_URL = "https://script.google.com/macros/s/AKfycbxMCnrKJzOHxADBVMw1gH6wZPaieD8YNlkyyS4KBT8RkSKQnfS00LPADkJiezRuga8ScQ/exec";
let cart = {};
let currentCustomer = null;

PRODUCTS_DATA.forEach(p => cart[p.id] = 0);

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupListeners();
});

function renderProducts() {
    const container = document.getElementById('product-list');
    container.innerHTML = PRODUCTS_DATA.map(p => `
        <div class="product-card">
            <div>
                <h4 style="font-size:1.4rem">${p.name}</h4>
                <p style="color:var(--health-gray)">${p.price.toFixed(2)}€</p>
                <button class="accent" style="background:none; border:none; cursor:pointer; font-weight:700" onclick="openModal('${p.id}')">INFO</button>
            </div>
            <div style="text-align:center">
                <span class="badge" id="gift-${p.id}" style="font-size:0.9rem; color:var(--accent-emerald)">Δώρα: 0</span>
            </div>
            <div class="qty-controls">
                <button class="btn-qty" onclick="updateQty('${p.id}', -1)">-</button>
                <input type="number" class="qty-input" id="qty-${p.id}" value="0" readonly>
                <button class="btn-qty" onclick="updateQty('${p.id}', 1)">+</button>
            </div>
        </div>
    `).join('');
}

function updateQty(id, delta) {
    cart[id] = Math.max(0, cart[id] + delta);
    document.getElementById(`qty-${id}`).value = cart[id];
    
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
        if (cart[p.id] >= 24) totalGifts += 6;
        else if (cart[p.id] >= 18) totalGifts += 3;
        else if (cart[p.id] >= 9) totalGifts += 1;
    });

    let volDisc = Math.min(Math.floor(subtotal / 100), 10);
    let afterVol = subtotal * (1 - volDisc/100);
    
    const isCash = document.getElementById('payment-method').value === 'cash';
    let net = isCash ? afterVol * 0.98 : afterVol;
    let final = net * 1.24;

    document.getElementById('net-total').innerText = subtotal.toFixed(2) + "€";
    document.getElementById('total-gifts').innerText = totalGifts;
    document.getElementById('current-discount-badge').innerText = volDisc + "% Έκπτωση";
    document.getElementById('final-payable').innerText = final.toFixed(2) + "€";
    
    let prog = (subtotal % 100);
    document.getElementById('volume-progress').style.width = prog + "%";
    document.getElementById('progress-text').innerText = prog.toFixed(0) + " / 100€";
    document.getElementById('total-benefit').innerText = ((subtotal - net) + (totalGifts * 15)).toFixed(2) + "€";
}

function setupListeners() {
    document.getElementById('afm-input').addEventListener('input', async (e) => {
        if (e.target.value.length === 9) {
            const res = await fetch(`${GAS_URL}?afm=${e.target.value}`);
            const data = await res.json();
            if (data.status === "found" || data.eponimia) {
                currentCustomer = data;
                document.getElementById('customer-name-display').innerText = "Πελάτης: " + (data.eponimia || "Βρέθηκε");
            } else {
                currentCustomer = null;
                document.getElementById('customer-name-display').innerText = "Νέος Πελάτης";
            }
        }
    });

    document.getElementById('payment-method').onchange = calculateTotals;

    document.getElementById('submit-order').onclick = async () => {
        const afm = document.getElementById('afm-input').value;
        if (afm.length < 9) return alert("Εισάγετε έγκυρο ΑΦΜ");

        let itemsText = "";
        PRODUCTS_DATA.forEach(p => { if(cart[p.id] > 0) itemsText += `${p.name}: ${cart[p.id]} τεμ.\n`; });

        const payload = {
            customer: currentCustomer ? currentCustomer.eponimia : "ΝΕΟΣ ΠΕΛΑΤΗΣ",
            afm: afm,
            doy: currentCustomer ? currentCustomer.doy : "-",
            email: currentCustomer ? currentCustomer.email : "info@zarkolia.gr",
            products: itemsText,
            netValue: document.getElementById('net-total').innerText,
            vat: "24%",
            total: document.getElementById('final-payable').innerText,
            payment: document.getElementById('payment-method').value,
            remarks: "Web Order"
        };

        const btn = document.getElementById('submit-order');
        btn.disabled = true;
        btn.innerText = "ΑΠΟΣΤΟΛΗ...";

        try {
            await fetch(GAS_URL, { method: 'POST', body: JSON.stringify(payload) });
            alert("Η παραγγελία καταχωρήθηκε!");
            location.reload();
        } catch (e) {
            alert("Σφάλμα σύνδεσης.");
            btn.disabled = false;
        }
    };
}

function openModal(id) {
    const p = PRODUCTS_DATA.find(x => x.id === id);
    document.getElementById('modal-body').innerHTML = `
        <h2 class="luxury-title">${p.name}</h2>
        <p style="margin:20px 0"><strong>MoA:</strong> ${p.moa}</p>
        <p><strong>Συστατικά:</strong> ${p.ingredients}</p>
    `;
    document.getElementById('info-modal').style.display = 'flex';
}

document.querySelector('.close-modal').onclick = () => document.getElementById('info-modal').style.display = 'none';
