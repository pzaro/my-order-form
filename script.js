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
                <p style="color:var(--health-gray); font-weight:600">${p.price.toFixed(2)}€ / μονάδα</p>
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
    document.getElementById('progress-text').innerText = prog.toFixed(0) + " / 100€ για επόμενο %";
    document.getElementById('total-benefit').innerText = ((sub - net) + (gTotal * 15)).toFixed(2) + "€";
}

function openModal(id) {
    const p = PRODUCTS_DATA.find(x => x.id === id);
    document.getElementById('modal-body').innerHTML = `
        <h2 class="luxury-title" style="margin-bottom:10px">${p.name}</h2>
        <h4 style="color:var(--accent-emerald)">Scientific Compendium</h4>
        <div style="margin-top:30px">
            <h5 style="font-weight:800; border-bottom:1px solid #eee; padding-bottom:10px">Μηχανισμός Δράσης (MoA)</h5>
            <p style="margin-top:10px; font-size:1.1rem; line-height:1.8">${p.moa}</p>
            <h5 style="margin-top:25px; font-weight:800; border-bottom:1px solid #eee; padding-bottom:10px">Συστατικά / Φόρμουλα</h5>
            <p style="margin-top:10px; font-size:1.1rem">${p.formula}</p>
            <div style="margin-top:25px; background:#f0fdf4; padding:25px; border-radius:25px">
                <h5 style="font-weight:800; color:var(--primary-green)">Innovation & Nature</h5>
                <p style="margin-top:10px">${p.innovation}</p>
            </div>
        </div>
        <div class="qty-controls" style="margin-top:40px; justify-content:center; background:#f8fafc; padding:35px; border-radius:30px">
            <button class="btn-qty" onclick="changeQty('${p.id}', -1); syncModal('${p.id}')">-</button>
            <input type="number" class="qty-input" id="modal-qty-${p.id}" value="${cart[p.id]}" readonly>
            <button class="btn-qty" onclick="changeQty('${p.id}', 1); syncModal('${p.id}')">+</button>
        </div>
    `;
    document.getElementById('info-modal').style.display = 'flex';
}

function syncModal(id) { document.getElementById(`modal-qty-${id}`).value = cart[id]; }

function setupListeners() {
    document.getElementById('afm-input').addEventListener('input', async (e) => {
        if (e.target.value.length === 9) {
            const box = document.getElementById('customer-info-box');
            box.style.display = 'block'; box.innerText = "Αναζήτηση...";
            try {
                const res = await fetch(`${GAS_URL}?afm=${e.target.value}`);
                const data = await res.json();
                if (data.status === "found" || data.eponimia) {
                    currentCustomer = data;
                    box.innerText = `Πελάτης: ${data.eponimia} | ΔΟΥ: ${data.doy}`;
                } else {
                    currentCustomer = null; box.innerText = "Νέος Πελάτης";
                }
            } catch (e) { box.innerText = "Σφάλμα Lookup"; }
        }
    });

    document.getElementById('submit-order').onclick = async () => {
        const btn = document.getElementById('submit-order');
        const afm = document.getElementById('afm-input').value;
        if (afm.length < 9) return alert("Εισάγετε έγκυρο ΑΦΜ");

        let itemsText = "";
        PRODUCTS_DATA.forEach(p => { if(cart[p.id] > 0) itemsText += `${p.name}: ${cart[p.id]} τεμ.\n`; });
        if (!itemsText) return alert("Το καλάθι είναι άδειο");

        btn.disabled = true; btn.innerText = "ΑΠΟΣΤΟΛΗ...";

        const payload = {
            customer: currentCustomer ? currentCustomer.eponimia : "NEW CUSTOMER",
            afm: afm,
            doy: currentCustomer ? currentCustomer.doy : "-",
            email: currentCustomer ? currentCustomer.email : "info@zarkolia.gr",
            products: itemsText,
            netValue: document.getElementById('net-total').innerText,
            vat: "24%",
            total: document.getElementById('final-payable').innerText,
            payment: document.getElementById('payment-method').value,
            remarks: "Web Order v63.0"
        };

        try {
            await fetch(GAS_URL, { method: 'POST', body: JSON.stringify(payload) });
            alert("Η παραγγελία εστάλη! Αντίγραφο εστάλη στα emails pzaro2010@gmail.com και liapaki2017@gmail.com.");
            location.reload();
        } catch (e) {
            alert("Σφάλμα σύνδεσης."); btn.disabled = false; btn.innerText = "Ολοκλήρωση & Αποστολή";
        }
    };
    document.getElementById('payment-method').onchange = calculateTotals;
    document.querySelector('.close-modal').onclick = () => document.getElementById('info-modal').style.display = 'none';
}
