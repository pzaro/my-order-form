// Λίστα προϊόντων
const products = [
    { name: 'Z-DermAspis', price: 5.03 },
    { name: 'ZplastCream 40gr', price: 12.30 },
    { name: 'ZplastCream 100gr', price: 24.79 },
    { name: 'Bruise Off Bite Out & Pain Free cream', price: 5.26 },
    { name: 'Bruise Off Bite Out & Pain Free cream 100ml', price: 9.50 },
    { name: 'Z-boost 30 caps', price: 14.93 },
    { name: 'Z-boost 12 caps', price: 6.99 },
    { name: 'Zarkolia Cosmetic pack', price: 23.89 },
    { name: 'Hydralia Face cream 50ml', price: 8.90 },
    { name: 'Revitacell Plus Face cream 50ml', price: 10.69 },
    { name: 'Revitace Eyes cream Luce 30ml', price: 10.10 },
    { name: 'Alveolair Sir', price: 7.65 },
    { name: 'NUTRI MX PROBIOTIC PREMIUM', price: 8.96 },
    { name: 'NUTRI MX MAGNESIUM 1 Τεμ', price: 5.98 },
    { name: 'NUTRI MX A-Z', price: 6.51 },
    { name: 'NUTRI MX OMEGA 3', price: 6.87 },
    { name: 'NUTRI MX JOINT', price: 10.16 }
];

// Πλήρεις περιγραφές προϊόντων
const productDetails = [
    {
        name: 'Z-DermAspis',
        description: { consumer: `<h3>Καινοτόμο Σπρέι Διπλής Δράσης</h3><p>Το Z-Derm Aspis είναι σχεδιασμένο για να προσφέρει ταυτόχρονα καθαρισμό της επιδερμίδας και αποτελεσματική προστασία από τα έντομα.</p>`, science: `<h3>Αποδεδειγμένη Δράση</h3><p><strong>Αιθυλική Αλκοόλη:</strong> Αντισηπτικό.<br><strong>PMD:</strong> Φυτικό εντομοαπωθητικό.</p>`, bibliography: `<p>[1] WHO Guidelines...</p>` }
    },
    {
        name: 'ZplastCream 40gr',
        description: { consumer: `<h3>Εξειδικευμένη Αναπλαστική Κρέμα</h3><p>Για την εντατική φροντίδα και ταχεία επούλωση του ταλαιπωρημένου δέρματος.</p>`, science: `<h3>Συστατικά</h3><p>Βαλσαμόχορτο, Αβοκάντο, Ιπποφαές.</p>`, bibliography: `<p>Δεν παρασχέθηκε.</p>` }
    },
    {
        name: 'ZplastCream 100gr',
        description: { consumer: `<h3>Εξειδικευμένη Αναπλαστική Κρέμα (100gr)</h3><p>Μεγαλύτερη συσκευασία για εκτεταμένη χρήση.</p>`, science: `<h3>Συστατικά</h3><p>Βαλσαμόχορτο, Αβοκάντο, Ιπποφαές.</p>`, bibliography: `<p>Δεν παρασχέθηκε.</p>` }
    },
    {
        name: 'Bruise Off Bite Out & Pain Free cream',
        description: { consumer: `<h3>Κρέμα με Άρνικα</h3><p>Προσφέρει ανακούφιση από μυϊκές και αρθρικές ενοχλήσεις.</p>`, science: `<h3>Συστατικά</h3><p>Άρνικα, Λινέλαιο, Λεβάντα.</p>`, bibliography: `<p>Lyss, G., et al.</p>` }
    },
    {
        name: 'Bruise Off Bite Out & Pain Free cream 100ml',
        description: { consumer: `<h3>Κρέμα με Άρνικα (100ml)</h3><p>Προσφέρει ανακούφιση από μυϊκές και αρθρικές ενοχλήσεις. Μεγάλη συσκευασία.</p>`, science: `<h3>Συστατικά</h3><p>Άρνικα, Λινέλαιο, Λεβάντα.</p>`, bibliography: `<p>Lyss, G., et al.</p>` }
    },
    {
        name: 'Z-boost 30 caps',
        description: { consumer: `<h3>Ενίσχυση Ανοσοποιητικού</h3><p>Προηγμένο συμπλήρωμα διατροφής για την ολιστική ενίσχυση του ανοσοποιητικού.</p>`, science: `<h3>Συστατικά</h3><p>Ψευδάργυρος, Σελήνιο, Q10.</p>`, bibliography: `<p>Hemilä, H. (2017)</p>` }
    },
    {
        name: 'Z-boost 12 caps',
        description: { consumer: `<h3>Ενίσχυση Ανοσοποιητικού (12 caps)</h3><p>Προηγμένο συμπλήρωμα διατροφής. Συσκευασία ταξιδίου.</p>`, science: `<h3>Συστατικά</h3><p>Ψευδάργυρος, Σελήνιο, Q10.</p>`, bibliography: `<p>Hemilä, H. (2017)</p>` }
    },
    {
        name: 'Zarkolia Cosmetic pack',
        description: { consumer: `<h3>Ολοκληρωμένη Περιποίηση</h3><p>Σετ τριών προϊόντων για ενυδάτωση και αντιγήρανση.</p>`, science: `<h3>Προϊόντα</h3><p>Revitacell, Hydralia, Eyes.</p>`, bibliography: `<p>-</p>` }
    },
    {
        name: 'Hydralia Face cream 50ml',
        description: { consumer: `<h3>Βαθιά Ενυδάτωση</h3><p>Κρέμα για την αποκατάσταση της φυσικής ισορροπίας υγρασίας.</p>`, science: `<h3>Συστατικά</h3><p>Υαλουρονικό, Αβοκάντο, Jojoba.</p>`, bibliography: `<p>Bukhari, S. N. A., et al.</p>` }
    },
    {
        name: 'Revitacell Plus Face cream 50ml',
        description: { consumer: `<h3>Κρέμα Πολλαπλής Δράσης</h3><p>Στοχεύει στα κύρια σημάδια της γήρανσης.</p>`, science: `<h3>Συστατικά</h3><p>Μαστίχα, Ρόδι, Super Berries.</p>`, bibliography: `<p>Lall, N., et al.</p>` }
    },
    {
        name: 'Revitace Eyes cream Luce 30ml',
        description: { consumer: `<h3>Κρέμα Ματιών</h3><p>Για μαύρους κύκλους και πρήξιμο.</p>`, science: `<h3>Συστατικά</h3><p>Ιπποκαστανιά, Άρνικα, Υαλουρονικό.</p>`, bibliography: `<p>Gallelli, L. (2019)</p>` }
    },
    {
        name: 'Alveolair Sir',
        description: { consumer: `<h3>Φυσικό Σιρόπι</h3><p>Για την αντιμετώπιση του βήχα.</p>`, science: `<h3>Συστατικά</h3><p>Ευκάλυπτος, Θυμάρι, Αλθέα.</p>`, bibliography: `<p>Sadlon, A. E., et al.</p>` }
    },
    { name: 'NUTRI MX PROBIOTIC PREMIUM', description: { consumer: `<h3>Προβιοτικά</h3><p>Για την υγεία του εντέρου.</p>`, science: ``, bibliography: `` } },
    { name: 'NUTRI MX MAGNESIUM 1 Τεμ', description: { consumer: `<h3>Μαγνήσιο</h3><p>Για το νευρικό σύστημα.</p>`, science: ``, bibliography: `` } },
    { name: 'NUTRI MX A-Z', description: { consumer: `<h3>Πολυβιταμίνη</h3><p>Για όλη την οικογένεια.</p>`, science: ``, bibliography: `` } },
    { name: 'NUTRI MX OMEGA 3', description: { consumer: `<h3>Ωμέγα 3</h3><p>Για την καρδιά.</p>`, science: ``, bibliography: `` } },
    { name: 'NUTRI MX JOINT', description: { consumer: `<h3>Joint Support</h3><p>Για τις αρθρώσεις.</p>`, science: ``, bibliography: `` } }
];

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('productModal').innerHTML = `<div class="modal-content"><div class="modal-header"><h2 id="modalProductName"></h2><span class="close-button" onclick="closeProductModal()">&times;</span></div><div class="modal-body"><div class="modal-tabs"><button class="tab-button active" onclick="openTab(event, 'Consumer')">Για το Κοινό</button><button class="tab-button" onclick="openTab(event, 'Science')">Επιστημονικά</button><button class="tab-button" onclick="openTab(event, 'Biblio')">Βιβλιογραφία</button></div><div id="Consumer" class="tab-content" style="display: block;"></div><div id="Science" class="tab-content"></div><div id="Biblio" class="tab-content"></div></div><div class="modal-quick-add"><label for="modalQuantity">Ποσότητα:</label><input type="number" id="modalQuantity" min="1" value="1"><button id="modal-add-button">Προσθήκη στην Παραγγελία</button></div></div>`;
    document.getElementById('previewModal').innerHTML = `<div class="modal-content"><div class="modal-header"><h2>Προεπισκόπηση</h2><span class="close-button" onclick="closePreviewModal()">&times;</span></div><div class="modal-body"><pre id="previewContent"></pre></div><div class="modal-footer"><button id="saveTxtButton" class="btn" style="background-color:#5cb85c">Αποθήκευση</button><button class="btn" style="background-color:#aaa" onclick="closePreviewModal()">Κλείσιμο</button></div></div>`;
    
    const productButtonsContainer = document.getElementById('productButtonsContainer');
    products.forEach((p, index) => {
        const button = document.createElement('button');
        button.className = 'product-btn';
        button.textContent = p.name;
        button.onclick = () => showProductDetails(index);
        productButtonsContainer.appendChild(button);
    });
    
    const tableBody = document.querySelector('#product-table tbody');
    products.forEach((p, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p.name}</td>
            <td>${p.price.toFixed(2)} €</td>
            <td><input type="number" class="quantity" id="qty-${index}" min="0" data-price="${p.price}" oninput="updateAll()" value="0"></td>
            <td class="gifts">0</td>
            <td class="effective-price normal">${p.price.toFixed(2)} €</td>
            <td class="line-total">0.00 €</td>
        `;
        tableBody.appendChild(row);
    });
    
    updateAll();
});

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) { tabcontent[i].style.display = "none"; }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) { tablinks[i].className = tablinks[i].className.replace(" active", ""); }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function showProductDetails(productIndex){
    const p = productDetails[productIndex];
    const modalProductName = document.getElementById('modalProductName');
    const consumerTab = document.getElementById('Consumer');
    const scienceTab = document.getElementById('Science');
    const biblioTab = document.getElementById('Biblio');
    
    const tableInput = document.getElementById(`qty-${productIndex}`);
    document.getElementById('modalQuantity').value = tableInput.value > 0 ? tableInput.value : 1;

    if(p){
        modalProductName.textContent = products[productIndex].name;
        consumerTab.innerHTML = p.description.consumer || '<p>Δεν υπάρχουν πληροφορίες.</p>';
        scienceTab.innerHTML = p.description.science || '<p>Δεν υπάρχουν πληροφορίες.</p>';
        biblioTab.innerHTML = p.description.bibliography || '<p>Δεν υπάρχουν πληροφορίες.</p>';
    } else {
        modalProductName.textContent = products[productIndex].name;
        consumerTab.innerHTML = `<p>Δεν βρέθηκε αναλυτική περιγραφή για αυτό το προϊόν.</p>`;
        scienceTab.innerHTML = '';
        biblioTab.innerHTML = '';
    }

    const addButton = document.getElementById('modal-add-button');
    const newAddButton = addButton.cloneNode(true);
    addButton.parentNode.replaceChild(newAddButton, addButton);
    
    newAddButton.onclick = () => {
        const quantity = parseInt(document.getElementById('modalQuantity').value) || 0;
        const qtyInput = document.getElementById(`qty-${productIndex}`);
        qtyInput.value = quantity;
        updateAll();
        closeProductModal();
    };

    document.getElementById('productModal').style.display='block';
    document.querySelector('.tab-button').click();
}

function closeProductModal(){document.getElementById('productModal').style.display='none';}
function closePreviewModal(){document.getElementById('previewModal').style.display='none';}

function calculateGifts(quantity){if(quantity<9)return 0;if(quantity>=9&&quantity<18)return 1;if(quantity>=18&&quantity<24)return 3;if(quantity>=24&&quantity<48)return 6;const ratio=15/48;return Math.floor(quantity*ratio);}

function updateAll(){
    let netTotal = 0;
    const rows = document.querySelectorAll('#product-table tbody tr');
    
    rows.forEach(row => {
        const quantityInput = row.querySelector(".quantity");
        const quantity = parseInt(quantityInput.value) || 0;
        
        const price = parseFloat(quantityInput.dataset.price);
        const gifts = calculateGifts(quantity);
        const totalItems = quantity + gifts;
        const lineTotal = quantity * price;
        let effectivePrice = price;
        if (quantity > 0 && totalItems > 0) {
            effectivePrice = lineTotal / totalItems;
        }
        
        const priceCell = row.querySelector(".effective-price");
        priceCell.innerHTML = `${effectivePrice.toFixed(2)} €`;
        if (effectivePrice < price - 0.001) {
            priceCell.classList.add('discounted');
            priceCell.classList.remove('normal');
        } else {
            priceCell.classList.add('normal');
            priceCell.classList.remove('discounted');
        }
        
        row.querySelector(".gifts").textContent = gifts;
        row.querySelector(".line-total").innerHTML = `${lineTotal.toFixed(2)} €`;
        netTotal += lineTotal;
    });

    const vat = netTotal * 0.24;
    const finalTotal = netTotal + vat;

    document.getElementById("net-value").innerHTML = `${netTotal.toFixed(2)} €`;
    document.getElementById("vat-value").innerHTML = `${vat.toFixed(2)} €`;
    document.getElementById("final-total").innerHTML = `${finalTotal.toFixed(2)} €`;
}

function clearForm(){
    document.getElementById("orderForm").reset();
    document.querySelectorAll(".quantity").forEach(q=>{q.value="0"});
    updateAll();
}

function getOrderData(){
    const c={eponimia:document.getElementById("eponimia").value,afm:document.getElementById("afm").value,doy:document.getElementById("doy").value,mobile:document.getElementById("mobile").value,phone:document.getElementById("phone").value,email:document.getElementById("email").value};
    const i=[];
    document.querySelectorAll("#product-table tbody tr").forEach(r=>{
        const q=parseInt(r.querySelector('.quantity').value)||0;
        if (q>0) {
             i.push({
                 name:r.cells[0].textContent,
                 quantity:q,
                 gifts:parseInt(r.querySelector('.gifts').textContent),
                 effectivePrice:r.querySelector('.effective-price').textContent,
                 total:r.querySelector('.line-total').textContent
             });
        }
    });
    return{
        customerData:c,
        items:i,
        totals:{
            net:document.getElementById("net-value").textContent,
            vat:document.getElementById("vat-value").textContent,
            final:document.getElementById("final-total").textContent
        }
    }
}

// --- ΝΕΑ ΣΥΝΑΡΤΗΣΗ EMAIL ΜΕ "ΚΑΘΑΡΗ" ΜΟΡΦΟΠΟΙΗΣΗ ---
function generateEmailBody() {
    const { customerData, items, totals } = getOrderData();
    
    let body = `ΠΑΡΑΓΓΕΛΙΑ ZARKOLIA\n====================\n\n`;
    body += `ΣΤΟΙΧΕΙΑ ΠΕΛΑΤΗ\n----------------\n`;
    body += `ΕΠΩΝΥΜΙΑ:  ${customerData.eponimia}\n`;
    body += `ΑΦΜ:       ${customerData.afm}\n`;
    body += `ΔΟΥ:       ${customerData.doy}\n`;
    body += `ΚΙΝΗΤΟ:    ${customerData.mobile}\n`;
    body += `ΣΤΑΘΕΡΟ:   ${customerData.phone}\n`;
    body += `EMAIL:     ${customerData.email}\n\n`;

    body += `ΠΡΟΪΟΝΤΑ\n--------\n`;
    items.forEach(item => {
        let giftText = item.gifts > 0 ? `(+ ${item.gifts} ΔΩΡΟ)` : ``;
        // Χρήση αστερίσκων για έμφαση στο όνομα
        body += `* ${item.name}\n`;
        body += `   Ποσότητα: ${item.quantity} ${giftText}\n`;
        body += `   Αξία:     ${item.total}\n\n`;
    });

    body += `ΣΥΝΟΛΑ\n------\n`;
    body += `ΚΑΘΑΡΗ ΑΞΙΑ:   ${totals.net}\n`;
    body += `ΦΠΑ (24%):     ${totals.vat}\n`;
    body += `* ΤΕΛΙΚΟ ΠΟΣΟ: ${totals.final} *\n\n`;

    body += `ΣΤΟΙΧΕΙΑ ΚΑΤΑΘΕΣΗΣ\n------------------\n`;
    body += `IBAN: GR8901722520005252016160277\n`;
    body += `Τράπεζα: Τράπεζα Πειραιώς\n`;

    return body;
}

function sendEmailViaClient() {
    const { customerData, items } = getOrderData();
    if (items.length === 0) {
        alert("Η παραγγελία είναι κενή.");
        return;
    }
    const body = generateEmailBody();
    const subject = `Νέα Παραγγελία από ${customerData.eponimia || 'Νέος Πελάτης'}`;
    const recipients = "pzaro2010@gmail.com,liapaki2017@gmail.com";
    
    const params = new URLSearchParams();
    if (customerData.email) {
        params.append('cc', customerData.email);
    }
    params.append('subject', subject);
    params.append('body', body);
    
    let mailtoLink = `mailto:${recipients}?${params.toString()}`;
    window.location.href = mailtoLink;
}

// --- Συνάρτηση για το TXT (παραμένει με αναλυτική μορφή) ---
function generateOrderContent(){
    const{customerData:c,items:i,totals:t}=getOrderData();
    const b="\n\nΣΤΟΙΧΕΙΑ ΚΑΤΑΘΕΣΗΣ\n----------------------------------------\nIBAN: GR8901722520005252016160277\nΤράπεζα: Τράπεζα Πειραιώς\n";
    let content="========================================\n      Π Α Ρ Α Γ Γ Ε Λ Ι Α\n========================================\n\n";
    content+="ΣΤΟΙΧΕΙΑ ΠΕΛΑΤΗ\n----------------------------------------\n";
    content+=`ΕΠΩΝΥΜΙΑ: ${c.eponimia||'-'}\nΑΦΜ:      ${c.afm||'-'}\nΔΟΥ:      ${c.doy||'-'}\n`;
    content+=`ΚΙΝΗΤΟ:   ${c.mobile||'-'}\nΣΤΑΘΕΡΟ:  ${c.phone||'-'}\nEMAIL:    ${c.email||'-'}\n\n`;
    content+="ΑΝΑΛΥΣΗ ΠΑΡΑΓΓΕΛΙΑΣ\n-----------------------------------------------------------------\n";
    i.forEach(item=>{
        let qText=item.gifts>0?`${item.quantity} (+${item.gifts} Δώρο)`:`${item.quantity}`;
        content+=`${item.name}\n`;
        content+=`  - Ποσότητα:         ${qText}\n`;
        content+=`  - Τελική Τιμή/Τεμ.:  ${item.effectivePrice}\n`;
        content+=`  - Αξία Γραμμής:      ${item.total}\n`;
        content+=`-----------------------------------------------------------------\n`;
    });
    content+="\n\nΣΥΝΟΛΑ\n----------------------------------------\n";
    content+=`Καθαρή Αξία:      ${t.net}\n`;
    content+=`Αξία ΦΠΑ (24%):    ${t.vat}\n`;
    content+=`ΤΕΛΙΚΟ ΠΟΣΟ:      ${t.final}\n`;
    content+=b;
    return content;
}

function previewAndSaveAsTXT(){
    if(getOrderData().items.length===0){
        alert("Η παραγγελία είναι κενή.");
        return;
    }
    const content = generateOrderContent();
    const filename = `Παραγγελία_${getOrderData().customerData.eponimia.replace(/\s/g,'_')||'customer'}.txt`;
    document.getElementById('previewContent').textContent = content;
    document.getElementById('previewModal').style.display='block';
    document.getElementById('saveTxtButton').onclick=()=>saveTextAsFile(content,filename);
}

function saveTextAsFile(text,filename){
    const blob = new Blob([text],{type:'text/plain;charset=utf-8'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closePreviewModal();
}
