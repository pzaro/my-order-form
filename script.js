// Λίστα προϊόντων για τον πίνακα παραγγελιών
const products = [
    { name: 'Z-DermAspis', price: 5.03 },
    { name: 'ZplastCream 40gr', price: 12.30 },
    { name: 'ZplastCream 100gr', price: 24.79 },
    { name: 'Bruise Off Bite Out & Pain Free cream', price: 5.26 },
    { name: 'Z-boost 30 caps', price: 14.93 },
    { name: 'Z-boost 12 caps', price: 6.99 },
    { name: 'Zarkolia Cosmetic pack', price: 23.89 },
    { name: 'Hydralia Face cream 50ml', price: 8.90 },
    { name: 'Revitacell + Face cream 50ml', price: 10.69 },
    { name: 'Revitace Eyes cream Luce 30ml', price: 10.10 },
    { name: 'Alveolair Sir', price: 7.65 }
];

// Αντικείμενο με τις πλήρεις, διορθωμένες περιγραφές
const productDetails = {
    'Z-DermAspis': {
        consumer: `<h3>Καινοτόμο Σπρέι Διπλής Δράσης</h3><p>Το Z-Derm Aspis είναι σχεδιασμένο για να προσφέρει ταυτόχρονα καθαρισμό της επιδερμίδας και αποτελεσματική προστασία από τα έντομα...</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Αιθυλική Αλκοόλη (Alcohol Denat.):</strong> Ταχείας δράσης και ευρέος φάσματος αντισηπτικό...</p>`,
        bibliography: `<ol><li>World Health Organization (WHO). (2009). WHO Guidelines on Hand Hygiene...</li></ol>`
    },
    'ZplastCream 40gr': {
        consumer: `<h3>Εξειδικευμένη Αναπλαστική Κρέμα</h3><p>Η Zplast Cream είναι σχεδιασμένη για την εντατική φροντίδα και ταχεία επούλωση του ταλαιπωρημένου δέρματος...</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Βαλσαμόχορτο:</strong> Επιταχύνει την επιθηλιοποίηση και την επούλωση...</p>`,
        bibliography: `<p>Η βιβλιογραφία για το Zplast Cream δεν παρασχέθηκε.</p>`
    },
    'ZplastCream 100gr': {
        consumer: `<h3>Εξειδικευμένη Αναπλαστική Κρέμα (100gr)</h3><p>Η Zplast Cream... Η μεγαλύτερη συσκευασία είναι ιδανική για εκτεταμένη χρήση.</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Βαλσαμόχορτο:</strong> Επιταχύνει την επιθηλιοποίηση και την επούλωση...</p>`,
        bibliography: `<p>Η βιβλιογραφία για το Zplast Cream δεν παρασχέθηκε.</p>`
    },
    'Bruise Off Bite Out & Pain Free cream': {
        consumer: `<h3>Κρέμα με Άρνικα & Αιθέρια Έλαια</h3><p>Η εξειδικευμένη αυτή κρέμα προσφέρει στοχευμένη ανακούφιση από μυϊκές και αρθρικές ενοχλήσεις...</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Άρνικα:</strong> Αποτελεσματική στη μείωση του πόνου, της δυσκαμψίας και του οιδήματος...</p>`,
        bibliography: `<ol><li>Lyss, G., et al. (1998). Helenalin, an anti-inflammatory...</li></ol>`
    },
    'Z-boost 30 caps': {
        consumer: `<h3>Ενίσχυση του Ανοσοποιητικού Συστήματος</h3><p>Το Zarkolia Z-Boost είναι ένα προηγμένο συμπλήρωμα διατροφής για την ολιστική ενίσχυση του ανοσοποιητικού...</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Ψευδάργυρος (Zinc):</strong> Απαραίτητο για τη λειτουργία των κυττάρων του ανοσοποιητικού...</p>`,
        bibliography: `<ol><li>Hemilä, H. (2017). Zinc lozenges and the common cold...</li></ol>`
    },
    'Z-boost 12 caps': {
        consumer: `<h3>Ενίσχυση του Ανοσοποιητικού Συστήματος (12 caps)</h3><p>Το Zarkolia Z-Boost είναι ένα προηγμένο συμπλήρωμα διατροφής... Η συσκευασία των 12 καψουλών είναι ιδανική για περιοδική ενίσχυση.</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Ψευδάργυρος (Zinc):</strong> Απαραίτητο για τη λειτουργία των κυττάρων του ανοσοποιητικού...</p>`,
        bibliography: `<ol><li>Hemilä, H. (2017). Zinc lozenges and the common cold...</li></ol>`
    },
    'Zarkolia Cosmetic pack': {
        consumer: `<h3>Ολοκληρωμένη Προσέγγιση στην Περιποίηση</h3><p>Η σειρά περιποίησης προσώπου της Zarkolia αποτελεί ένα ολοκληρωμένο πρωτόκολλο φροντίδας...</p>`,
        science: `<h3>Τα 3 Βήματα της Περιποίησης Zarkolia</h3><p><strong>1. Revitacell Plus Face Cream...</strong></p><p><strong>2. Hydralia Face Cream...</strong></p><p><strong>3. Revitacell Eyes Cream...</strong></p>`,
        bibliography: `<p>Παρακαλώ ανατρέξτε στη βιβλιογραφία των επιμέρους προϊόντων.</p>`
    },
    'Hydralia Face cream 50ml': {
        consumer: `<h3>Βαθιά, Μακράς Διάρκειας Ενυδάτωση</h3><p>Η κρέμα προσώπου Hydralia είναι μια προηγμένη φόρμουλα σχεδιασμένη για να αποκαταστήσει τη φυσική ισορροπία υγρασίας της επιδερμίδας...</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Υαλουρονικό Οξύ:</strong> Αυξάνει δραματικά την ενυδάτωση...</p>`,
        bibliography: `<ol><li>Bukhari, S. N. A., et al. (2018). Hyaluronic acid...</li></ol>`
    },
    'Revitacell + Face cream 50ml': {
        consumer: `<h3>Κρέμα Πολλαπλής Δράσης για Ολική Επανόρθωση</h3><p>Η Revitacell Plus στοχεύει στα κύρια σημάδια της γήρανσης...</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Μαστίχα Χίου:</strong> Αυξάνει την πυκνότητα των ινών κολλαγόνου...</p>`,
        bibliography: `<ol><li>Lall, N., et al. (2020). Rejuvenating effect of mastic gum...</li></ol>`
    },
    'Revitace Eyes cream Luce 30ml': {
        consumer: `<h3>Επανορθωτική Κρέμα για την Περιοχή των Ματιών</h3><p>Μια σύνθεση πολλαπλής δράσης, ειδικά σχεδιασμένη για να καταπολεμά τα κύρια σημάδια της κούρασης και της γήρανσης...</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Ιπποκαστανιά:</strong> Η αισκίνη που περιέχει ενισχύει τα τοιχώματα των τριχοειδών αγγείων...</p>`,
        bibliography: `<ol><li>Gallelli, L. (2019). Escin: a review...</li></ol>`
    },
    'Alveolair Sir': {
        consumer: `<h3>Φυσικό Σιρόπι για το Βήχα</h3><p>Το φυτικό αυτό σιρόπι προσφέρει μια ολοκληρωμένη, φυσική προσέγγιση για την αντιμετώπιση τόσο του ξηρού όσο και του παραγωγικού βήχα...</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Ευκάλυπτος:</strong> Εγκεκριμένο από τον EMA ως αποχρεμπτικό...</p>`,
        bibliography: `<ol><li>Sadlon, A. E., & Lamson, D. W. (2010). Eucalyptus oil...</li></ol>`
    }
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('productModal').innerHTML = `<div class="modal-content"><div class="modal-header"><h2 id="modalProductName"></h2><span class="close-button" onclick="closeProductModal()">&times;</span></div><div class="modal-body"><div class="modal-tabs"><button class="tab-button active" onclick="openTab(event, 'Consumer')">Για το Κοινό</button><button class="tab-button" onclick="openTab(event, 'Science')">Επιστημονικά</button><button class="tab-button" onclick="openTab(event, 'Biblio')">Βιβλιογραφία</button></div><div id="Consumer" class="tab-content" style="display: block;"></div><div id="Science" class="tab-content"></div><div id="Biblio" class="tab-content"></div></div></div>`;
    document.getElementById('previewModal').innerHTML = `<div class="modal-content"><div class="modal-header"><h2>Προεπισκόπηση</h2><span class="close-button" onclick="closePreviewModal()">&times;</span></div><div class="modal-body"><pre id="previewContent"></pre></div><div class="modal-footer"><button id="saveTxtButton" class="btn" style="background-color:#5cb85c">Αποθήκευση</button><button class="btn" style="background-color:#aaa" onclick="closePreviewModal()">Κλείσιμο</button></div></div>`;
    
    const productButtonsContainer = document.getElementById('productButtonsContainer');
    products.forEach(p => {
        const button = document.createElement('button');
        button.className = 'product-btn';
        button.textContent = p.name;
        button.onclick = () => showProductDetails(p.name);
        productButtonsContainer.appendChild(button);
    });
    
    const tableBody=document.querySelector('#product-table tbody');
    products.forEach(p=>{const r=document.createElement('tr');r.innerHTML=`<td>${p.name}</td><td>${p.price.toFixed(2)} €</td><td><input type="number" class="quantity" min="0" data-price="${p.price}" oninput="updateAll()" value="0"></td><td class="gifts">0</td><td class="effective-price normal">${p.price.toFixed(2)} €</td><td class="line-total">0.00 €</td>`;tableBody.appendChild(r);});
    
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

// **ΔΙΟΡΘΩΜΕΝΗ ΣΥΝΑΡΤΗΣΗ:** Χρησιμοποιεί το όνομα του προϊόντος για να βρει τις πληροφορίες.
function showProductDetails(productName){
    const p = productDetails[productName]; // Αναζήτηση με βάση το όνομα (key)
    
    const modalProductName = document.getElementById('modalProductName');
    const consumerTab = document.getElementById('Consumer');
    const scienceTab = document.getElementById('Science');
    const biblioTab = document.getElementById('Biblio');

    if(p){
        modalProductName.textContent = productName;
        consumerTab.innerHTML = p.description.consumer || '<p>Δεν υπάρχουν πληροφορίες.</p>';
        scienceTab.innerHTML = p.description.science || '<p>Δεν υπάρχουν πληροφορίες.</p>';
        biblioTab.innerHTML = p.description.bibliography || '<p>Δεν υπάρχουν πληροφορίες.</p>';
    } else {
        modalProductName.textContent = productName;
        consumerTab.innerHTML = `<p>Δεν βρέθηκε αναλυτική περιγραφή για αυτό το προϊόν.</p>`;
        scienceTab.innerHTML = '';
        biblioTab.innerHTML = '';
    }
    document.getElementById('productModal').style.display='block';
    document.querySelector('.tab-button').click();
}

function closeProductModal(){document.getElementById('productModal').style.display='none';}
function closePreviewModal(){document.getElementById('previewModal').style.display='none';}

function calculateGifts(quantity){if(quantity<9)return 0;if(quantity>=9&&quantity<18)return 1;if(quantity>=18&&quantity<24)return 3;if(quantity>=24&&quantity<48)return 6;const ratio=15/48;return Math.floor(quantity*ratio);}
function updateAll(){let t=0;document.querySelectorAll("#product-table tbody tr").forEach(r=>{const q=r.querySelector(".quantity"),p=parseInt(q.value)||0,d=parseFloat(q.dataset.price),g=calculateGifts(p),a=p+g,l=p*d;let e=d;p>0&&a>0&&(e=l/a);const pc=r.querySelector(".effective-price");pc.innerHTML=`${e.toFixed(2)} €`;if(e<d-0.001){pc.classList.add('discounted');pc.classList.remove('normal');}else{pc.classList.add('normal');pc.classList.remove('discounted');}r.querySelector(".gifts").textContent=g;r.querySelector(".line-total").innerHTML=`${l.toFixed(2)} €`;t+=l;});const v=t*0.24,f=t+v;document.getElementById("net-value").innerHTML=`${t.toFixed(2)} €`;document.getElementById("vat-value").innerHTML=`${v.toFixed(2)} €`;document.getElementById("final-total").innerHTML=`${f.toFixed(2)} €`;}
function getOrderData(){const c={eponimia:document.getElementById("eponimia").value,afm:document.getElementById("afm").value,doy:document.getElementById("doy").value,mobile:document.getElementById("mobile").value,phone:document.getElementById("phone").value,email:document.getElementById("email").value};const i=[];document.querySelectorAll("#product-table tbody tr").forEach(r=>{const q=parseInt(r.querySelector('.quantity').value)||0;q>0&&i.push({name:r.cells[0].textContent,quantity:q,gifts:parseInt(r.querySelector('.gifts').textContent),effectivePrice:r.querySelector('.effective-price').textContent,total:r.querySelector('.line-total').textContent});});return{customerData:c,items:i,totals:{net:document.getElementById("net-value").textContent,vat:document.getElementById("vat-value").textContent,final:document.getElementById("final-total").textContent}}}

function generateEmailBody() {
    const { customerData, items, totals } = getOrderData();
    let body = `Νέα Παραγγελία\n\n--- Στοιχεία Πελάτη ---\n`;
    body += `Επωνυμία: ${customerData.eponimia}\nEmail: ${customerData.email}\nΤηλέφωνο: ${customerData.mobile}\n\n`;
    body += `--- Παραγγελία ---\n`;
    items.forEach(item => {
        let quantityText = item.gifts > 0 ? `${item.quantity} (+${item.gifts} Δώρο)` : `${item.quantity}`;
        body += `- ${item.name} | Ποσ: ${quantityText} | Σύνολο: ${item.total}\n`;
    });
    body += `\n--- Σύνολα ---\n`;
    body += `Καθαρή Αξία: ${totals.net}\nΑξία ΦΠΑ (24%): ${totals.vat}\nΤΕΛΙΚΟ ΠΟΣΟ: ${totals.final}\n\n`;
    body += `--- Στοιχεία Κατάθεσης ---\nIBAN: GR8901722520005252016160277\nΤράπεζα: Τράπεζα Πειραιώς\n`;
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

function generateOrderContent(){const{customerData:c,items:i,totals:t}=getOrderData();const b="\n\nΣΤΟΙΧΕΙΑ ΚΑΤΑΘΕΣΗΣ\n----------------------------------------\nIBAN: GR8901722520005252016160277\nΤράπεζα: Τράπεζα Πειραιώς\n";let content="========================================\n      Π Α Ρ Α Γ Γ Ε Λ Ι Α\n========================================\n\n";content+="ΣΤΟΙΧΕΙΑ ΠΕΛΑΤΗ\n----------------------------------------\n";content+=`Επωνυμία: ${c.eponimia}\nΑΦΜ: ${c.afm}\nΔΟΥ: ${c.doy}\n`;content+=`Email: ${c.email}\nΤηλ: ${c.mobile} / ${c.phone}\n\n`;content+="ΑΝΑΛΥΣΗ ΠΑΡΑΓΓΕΛΙΑΣ\n------------------------------------------------------------------------\n";i.forEach(item=>{let qText=item.gifts>0?`${item.quantity} (+${item.gifts} Δώρο)`:`${item.quantity}`;content+=`${item.name}\n`;content+=`  └─ Ποσότητα: ${qText.padEnd(15)} | Τελ. Τιμή/Τεμ.: ${item.effectivePrice.padEnd(12)} | Σύνολο: ${item.total.padStart(8)}\n\n`;});content+="------------------------------------------------------------------------\n\n";content+="ΣΥΝΟΛΑ\n----------------------------------------\n";content+=`Καθαρή Αξία:${''.padStart(15)} ${t.net}\n`;content+=`Αξία ΦΠΑ (24%):${''.padStart(11)} ${t.vat}\n`;content+=`ΤΕΛΙΚΟ ΠΟΣΟ:${''.padStart(14)} ${t.final}\n`;content+=b;return content;}
function previewAndSaveAsTXT(){if(getOrderData().items.length===0){alert("Η παραγγελία είναι κενή.");return}const content=generateOrderContent();const filename=`Παραγγελία_${getOrderData().customerData.eponimia.replace(/\s/g,'_')||'customer'}.txt`;document.getElementById('previewContent').textContent=content;document.getElementById('previewModal').style.display='block';document.getElementById('saveTxtButton').onclick=()=>saveTextAsFile(content,filename);}
function saveTextAsFile(text,filename){const blob=new Blob([text],{type:'text/plain;charset=utf-8'});const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download=filename;document.body.appendChild(link);link.click();document.body.removeChild(link);closePreviewModal();}
function clearForm(){document.getElementById("orderForm").reset();document.querySelectorAll(".quantity").forEach(q=>{q.value="0"});updateAll();}
