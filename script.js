const GAS_URL = "https://script.google.com/macros/s/AKfycbxMCnrKJzOHxADBVMw1gH6wZPaieD8YNlkyyS4KBT8RkSKQnfS00LPADkJiezRuga8ScQ/exec";
let cart = {};
let currentCustomer = null;

PRODUCTS_DATA.forEach(p => cart[p.id] = 0);

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupListeners();
});

function renderProducts() {
    const list = document.getElementById('product-list');
    list.innerHTML = PRODUCTS_DATA.map(p => `
        <div class="product-card">
            <div>
                <h4 style="font-size:1.6rem; font-weight:800">${p.name}</h4>
                <p style="color:var(--health-gray); font-weight:600">${p.price.toFixed(2)}€</p>
                <button style="margin-top:15px; cursor:pointer; color:var(--accent-emerald); background:none; border:1px solid #ddd; padding:8px 15px; border-radius:12px; font-weight:700" 
                        onclick="openModal('${p.id}')">SCIENTIFIC INFO</button>
            </div>
            <div style="text-align:center"><span id="gift-${p.id}" style="font-weight:800; color:var(--accent-emerald)">Δώρα: 0</span></div>
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
    let g = 0;
    if (cart[id] >= 24) g = 6; else if (cart[id] >= 18) g = 3; else if (cart[id] >= 9) g = 1;
    document.getElementById(`gift-${id}`).innerText = `Δώρα: ${g}`;
    calculateTotals();
}

function calculateTotals() {
    let sub = 0; let gTotal = 0;
    PRODUCTS_DATA.forEach(p => {
        sub += cart[p.id] * p.price;
        if (cart[p.id] >= 24) gTotal += 6; else if (cart[p.id] >= 18) gTotal += 3; else if (cart[p.id] >= 9) gTotal += 1;
    });

    let volDisc = Math.min(Math.floor(sub / 100), 10);
    let afterVol = sub * (1 - volDisc/100);
    const isCash = document.getElementById('payment-method').value === 'cash';
    let net = isCash ? afterVol * 0.98 : afterVol;
    let final = net * 1.24;

    document.getElementById('net-total').innerText = sub.toFixed(2) + "€";
    document.getElementById('total-gifts').innerText = gTotal;
    document.getElementById('current-discount-badge').innerText = volDisc + "% Έκπτωση";
    document.getElementById('final-payable').innerText = final.toFixed(2) + "€";
    
    let prog = sub % 100;
    document.getElementById('volume-progress').style.width = (sub >= 1000 ? 100 : (sub/1000)*100) + "%";
    document.getElementById('progress-text').innerText = prog.toFixed(0) + " / 100€";
    document.getElementById('total-benefit').innerText = ((sub - net) + (gTotal * 15)).toFixed(2) + "€";
}

function setupListeners() {
    document.getElementById('afm-input').addEventListener('input', async (e) => {
        if (e.target.value.length === 9) {
            const res = await fetch(`${GAS_URL}?afm=${e.target.value}`);
            const data = await res.json();
            const box = document.getElementById('customer-info-box');
            box.style.display = 'block';
            if (data.status === "found" || data.eponimia) {
                currentCustomer = data;
                document.getElementById('billing-name').value = data.eponimia || "";
                document.getElementById('billing-doy').value = data.doy || "";
                document.getElementById('billing-email').value = data.email || "";
                document.getElementById('billing-phone').value = data.mobile || "";
                box.innerText = "Πελάτης Βρέθηκε: " + data.eponimia;
            } else { box.innerText = "Νέος Πελάτης"; }
        }
    });

    document.getElementById('submit-order').onclick = async () => {
        const afm = document.getElementById('afm-input').value;
        if (afm.length < 9) return alert("Εισάγετε ΑΦΜ.");
        
        let pText = "";
        PRODUCTS_DATA.forEach(p => { if(cart[p.id] > 0) pText += `${p.name}: ${cart[p.id]} τεμ.\n`; });
        if(!pText) return alert("Καλάθι άδειο.");

        const payload = {
            afm: afm,
            customer: document.getElementById('billing-name').value,
            doy: document.getElementById('billing-doy').value,
            email: document.getElementById('billing-email').value,
            products: pText,
            total: document.getElementById('final-payable').innerText,
            payment: document.getElementById('payment-method').value
        };

        const btn = document.getElementById('submit-order');
        btn.disabled = true; btn.innerText = "ΑΠΟΣΤΟΛΗ...";
        
        try {
            await fetch(GAS_URL, { method: 'POST', body: JSON.stringify(payload) });
            alert("Η παραγγελία εστάλη!");
            location.reload();
        } catch (e) { alert("Σφάλμα."); btn.disabled = false; }
    };
    document.getElementById('payment-method').onchange = calculateTotals;
}

function openModal(id) {
    const p = PRODUCTS_DATA.find(x => x.id === id);
    document.getElementById('modal-body').innerHTML = `
        <h2 class="luxury-title">${p.name}</h2>
        <p style="margin-top:20px; font-size:1.1rem; line-height:1.8"><strong>MoA:</strong> ${p.moa}</p>
        <p style="margin-top:15px"><strong>Φόρμουλα:</strong> ${p.formula}</p>
        <div class="qty-controls" style="margin-top:30px; justify-content:center">
            <button class="btn-qty" onclick="changeQty('${p.id}', -1); syncModal('${p.id}')">-</button>
            <input type="number" class="qty-input" id="modal-qty-${p.id}" value="${cart[p.id]}" readonly>
            <button class="btn-qty" onclick="changeQty('${p.id}', 1); syncModal('${p.id}')">+</button>
        </div>
    `;
    document.getElementById('info-modal').style.display = 'flex';
}
function syncModal(id) { document.getElementById(`modal-qty-${id}`).value = cart[id]; }
document.querySelector('.close-modal').onclick = () => document.getElementById('info-modal').style.display = 'none';
