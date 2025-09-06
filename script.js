const products=[{name:'Z-DermAspis',price:5.03},{name:'ZplastCream 40gr',price:12.3},{name:'ZplastCream 100gr',price:24.79},{name:'Bruise Off Bite Out & Pain Free cream',price:5.26},{name:'Z-boost 30 caps',price:14.93},{name:'Z-boost 12 caps',price:6.99},{name:'Zarkolia Cosmetic pack',price:23.89},{name:'Hydralia Face cream 50ml',price:8.9},{name:'Revitacell + Face cream 50ml',price:10.69},{name:'Revitace Eyes cream Luce 30ml',price:10.1},{name:'Alveolair Sir',price:7.65}];

// ΝΕΟ: Οι περιγραφές είναι τώρα αντικείμενα (objects) με πεδία για κάθε καρτέλα
const productDetails=[
    {
        name:'Z-boost 30 caps',
        description: {
            consumer: `<h3>Ενίσχυση του Ανοσοποιητικού Συστήματος</h3><p>Το Zarkolia Z-Boost είναι ένα προηγμένο συμπλήρωμα διατροφής, ειδικά σχεδιασμένο για την ολιστική ενίσχυση και θωράκιση του ανοσοποιητικού συστήματος. Η μοναδική του φόρμουλα συνδυάζει ισχυρά αντιοξειδωτικά συστατικά που δρουν συνεργατικά για να ενδυναμώσουν τη φυσική άμυνα του οργανισμού απέναντι στις καθημερινές προκλήσεις. Υποστηρίζει την παραγωγή ενέργειας, προστατεύει από το οξειδωτικό στρες και συμβάλλει στη μείωση του χρόνου ανάρρωσης.</p>`,
            science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Ψευδάργυρος (Zinc):</strong> Απαραίτητο για τη λειτουργία των κυττάρων του ανοσοποιητικού. Μελέτες έχουν δείξει ότι μειώνει τη διάρκεια και τη σοβαρότητα των λοιμώξεων του ανώτερου αναπνευστικού [1].</p><p><strong>Σελήνιο (Selenium):</strong> Ως συστατικό των σεληνοπρωτεϊνών, προστατεύει τα κύτταρα του ανοσοποιητικού από την οξειδωτική βλάβη κατά τη διάρκεια της φλεγμονής [2].</p><p><strong>Συνένζυμο Q10:</strong> Θεμελιώδες για την παραγωγή κυτταρικής ενέργειας (ATP) και ισχυρό λιποδιαλυτό αντιοξειδωτικό [3].</p><p><strong>Άλφα-λιποϊκό οξύ (ALA):</strong> Μοναδικό αντιοξειδωτικό που αναγεννά άλλα σημαντικά αντιοξειδωτικά όπως τις βιταμίνες C και E [4].</p><p><strong>Ν-ακετυλοκυστεΐνη (NAC):</strong> Πρόδρομη ουσία της γλουταθειόνης, του πιο ισχυρού ενδογενούς αντιοξειδωτικού, και έχει βλεννολυτικές ιδιότητες [5].</p>`,
            bibliography: `<p>1. Hemilä, H. (2017). Zinc lozenges and the common cold...</p><p>2. Hoffmann, P. R., & Berry, M. J. (2008). The influence of selenium on immune responses...</p><p>3. Saini, R. (2011). Coenzyme Q10: The essential nutrient...</p><p>4. Packer, L., et al. (1995). alpha-Lipoic acid as a biological antioxidant...</p><p>5. Aldini, G., et al. (2018). N-Acetylcysteine as an antioxidant...</p><p>6. Prasad, A. S. (2008). Zinc in human health...</p>`
        }
    },
    {
        name:'ZplastCream 40gr',
        description: {
            consumer: `<h3>Εξειδικευμένη Αναπλαστική Κρέμα</h3><p>Η Zplast Cream είναι σχεδιασμένη για την εντατική φροντίδα και ταχεία επούλωση του ταλαιπωρημένου δέρματος. Η σύνθεσή της, βασισμένη σε μέλι, μαστίχα Χίου, ιπποφαές, και ελληνικά βότανα, προάγει ενεργά την ανάπλαση των ιστών σε πληγές, εγκαύματα και ουλές. Προσφέρει άμεση καταπράυνση από τον κνησμό και τη φλεγμονή.</p>`,
            science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Βαλσαμόχορτο:</strong> Επιταχύνει την επιθηλιοποίηση και την επούλωση [1].</p><p><strong>Έλαιο Αβοκάντο:</strong> Αυξάνει τη σύνθεση κολλαγόνου και μειώνει τη φλεγμονή [2].</p><p><strong>Ιπποφαές:</strong> Ενισχύει την αναγέννηση των ιστών και βελτιώνει την ελαστικότητα του δέρματος [3].</p><p><strong>Καλαμίνη:</strong> Παρέχει άμεση ανακούφιση από τον κνησμό και δρα ως ήπιο στυπτικό και αντισηπτικό [4].</p><p><strong>Καλέντουλα:</strong> Προάγει τον σχηματισμό κοκκιώδους ιστού και την αγγειογένεση [5].</p><p><strong>Μαστίχα Χίου:</strong> Καταπολεμά παθογόνα του δέρματος και προάγει τον πολλαπλασιασμό των ινοβλαστών [6].</p><p><strong>Μέλι:</strong> Δημιουργεί ένα ιδανικό περιβάλλον για ανάπλαση και προσφέρει ήπια αντισηπτική δράση [7].</p><p><strong>Θυμάρι:</strong> Προστατεύει την πληγή από επιμολύνσεις [8].</p>`,
            bibliography: `<p>1. Sadlon, A. E., & Lamson, D. W. (2010). Eucalyptus oil...</p><p>2. Kemmerich, B., et al. (2007). Thyme herb and ivy leaves...</p><p>3. EMA. (2016). Althaea officinalis L., radix...</p><p>4. Tural, S., & Koca, I. (2008). Cornelian cherry...</p><p>5. Olas, B. (2018). Sea buckthorn oil...</p><p>6. Graca, J., et al. (2022). Thymus vulgaris L...</p>`
        }
    },
    {
        name: 'Alveolair Sir',
        description: {
            consumer: `<h3>Φυσικό Σιρόπι για το Βήχα</h3><p>Το φυτικό αυτό σιρόπι προσφέρει μια ολοκληρωμένη, φυσική προσέγγιση για την αντιμετώπιση τόσο του ξηρού όσο και του παραγωγικού βήχα. Η σύνθεσή του δρα συνεργατικά για να καταπραΰνει τον ερεθισμένο λαιμό, να μαλακώνει τους αεραγωγούς και να ενισχύει τη φυσική άμυνα του οργανισμού.</p>`,
            science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Ευκάλυπτος:</strong> Εγκεκριμένο από τον EMA ως αποχρεμπτικό, ρευστοποιεί τις βλεννώδεις εκκρίσεις [1].</p><p><strong>Θυμάρι:</strong> Έχει αποχρεμπτική, βρογχοδιασταλτική και αντιμικροβιακή δράση [2].</p><p><strong>Αλθέα:</strong> Οι πολυσακχαρίτες της δημιουργούν ένα προστατευτικό στρώμα που ανακουφίζει από τον ξηρό βήχα [3].</p><p><strong>Κράνι:</strong> Πηγή βιταμίνης C και φαινολικών ενώσεων με αντιοξειδωτικές ιδιότητες [4].</p><p><strong>Ιπποφαές:</strong> Πλούσιο σε βιταμίνες C, E, A, αποτελεί ισχυρό τονωτικό του ανοσοποιητικού [5].</p>`,
            bibliography: `<p>1. Sadlon, A. E., & Lamson, D. W. (2010). Immune-modifying and antimicrobial effects of Eucalyptus oil...</p><p>2. Kemmerich, B., et al. (2007). Efficacy and tolerability of a fluid extract combination of thyme herb...</p><p>3. European Medicines Agency (EMA). (2016). European Union herbal monograph on Althaea officinalis L., radix...</p><p>4. Tural, S., & Koca, I. (2008). Physico-chemical and antioxidant properties of cornelian cherry...</p><p>5. Olas, B. (2018). The beneficial health aspects of sea buckthorn...</p><p>6. Graca, J., et al. (2022). Thymus vulgaris L. as a Source of Bioactive Compounds...</p>`
        }
    },
    // ... (Προσθέστε και τα υπόλοιπα προϊόντα με την ίδια δομή) ...
];

document.addEventListener("DOMContentLoaded", function() {
    // Δημιουργία των Modals
    document.getElementById('productModal').innerHTML = `<div class="modal-content">
        <div class="modal-header"><h2 id="modalProductName"></h2><span class="close-button" onclick="closeProductModal()">&times;</span></div>
        <div class="modal-body">
            <div class="modal-tabs">
                <button class="tab-button active" onclick="openTab(event, 'Consumer')">Για το Κοινό</button>
                <button class="tab-button" onclick="openTab(event, 'Science')">Επιστημονικά</button>
                <button class="tab-button" onclick="openTab(event, 'Biblio')">Βιβλιογραφία</button>
            </div>
            <div id="Consumer" class="tab-content" style="display: block;"></div>
            <div id="Science" class="tab-content"></div>
            <div id="Biblio" class="tab-content"></div>
        </div>
    </div>`;
    document.getElementById('previewModal').innerHTML = `<div class="modal-content"><div class="modal-header"><h2>Προεπισκόπηση</h2><span class="close-button" onclick="closePreviewModal()">&times;</span></div><div class="modal-body"><pre id="previewContent"></pre></div><div class="modal-footer"><button id="saveTxtButton" class="btn" style="background-color:#5cb85c">Αποθήκευση</button><button class="btn" style="background-color:#aaa" onclick="closePreviewModal()">Κλείσιμο</button></div></div>`;
    
    // Δημιουργία των κουμπιών
    const productButtonsContainer = document.getElementById('productButtonsContainer');
    products.forEach(p => {
        const button = document.createElement('button');
        button.className = 'product-btn';
        button.textContent = p.name;
        button.onclick = () => showProductDetails(p.name);
        productButtonsContainer.appendChild(button);
    });
    
    // Δημιουργία του πίνακα
    const tableBody=document.querySelector('#product-table tbody');
    products.forEach(p=>{const r=document.createElement('tr');r.innerHTML=`<td>${p.name}</td><td>${p.price.toFixed(2)} €</td><td><input type="number" class="quantity" min="0" data-price="${p.price}" oninput="updateAll()" value="0"></td><td class="gifts">0</td><td class="effective-price normal">${p.price.toFixed(2)} €</td><td class="line-total">0.00 €</td>`;tableBody.appendChild(r);});
    
    updateAll();
});

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function showProductDetails(productName){
    const p=productDetails.find(p=>p.name===productName);
    if(p){
        document.getElementById('modalProductName').textContent = p.name;
        // Γέμισμα των tabs
        document.getElementById('Consumer').innerHTML = p.description.consumer || '<p>Δεν υπάρχουν πληροφορίες.</p>';
        document.getElementById('Science').innerHTML = p.description.science || '<p>Δεν υπάρχουν πληροφορίες.</p>';
        document.getElementById('Biblio').innerHTML = p.description.bibliography || '<p>Δεν υπάρχουν πληροφορίες.</p>';
        
        document.getElementById('productModal').style.display='block';
        // Προεπιλογή της πρώτης καρτέλας
        document.querySelector('.tab-button').click();
    } else {
        document.getElementById('modalProductName').textContent = productName;
        document.getElementById('Consumer').innerHTML = `<p>Δεν βρέθηκε αναλυτική περιγραφή για αυτό το προϊόν.</p>`;
        document.getElementById('Science').innerHTML = '';
        document.getElementById('Biblio').innerHTML = '';
        document.getElementById('productModal').style.display='block';
        document.querySelector('.tab-button').click();
    }
}
function closeProductModal(){document.getElementById('productModal').style.display='none';}
function closePreviewModal(){document.getElementById('previewModal').style.display='none';}

function calculateGifts(quantity){if(quantity<9)return 0;if(quantity>=9&&quantity<18)return 1;if(quantity>=18&&quantity<24)return 3;if(quantity>=24&&quantity<48)return 6;const ratio=15/48;return Math.floor(quantity*ratio);}
function updateAll(){let t=0;document.querySelectorAll("#product-table tbody tr").forEach(r=>{const q=r.querySelector(".quantity"),p=parseInt(q.value)||0,d=parseFloat(q.dataset.price),g=calculateGifts(p),a=p+g,l=p*d;let e=d;p>0&&a>0&&(e=l/a);const pc=r.querySelector(".effective-price");pc.innerHTML=`${e.toFixed(2)} €`;if(e<d-0.001){pc.classList.add('discounted');pc.classList.remove('normal');}else{pc.classList.add('normal');pc.classList.remove('discounted');}r.querySelector(".gifts").textContent=g;r.querySelector(".line-total").innerHTML=`${l.toFixed(2)} €`;t+=l;});const v=t*0.24,f=t+v;document.getElementById("net-value").innerHTML=`${t.toFixed(2)} €`;document.getElementById("vat-value").innerHTML=`${v.toFixed(2)} €`;document.getElementById("final-total").innerHTML=`${f.toFixed(2)} €`;}
function getOrderData(){const c={eponimia:document.getElementById("eponimia").value,afm:document.getElementById("afm").value,doy:document.getElementById("doy").value,mobile:document.getElementById("mobile").value,phone:document.getElementById("phone").value,email:document.getElementById("email").value};const i=[];document.querySelectorAll("#product-table tbody tr").forEach(r=>{const q=parseInt(r.querySelector('.quantity').value)||0;q>0&&i.push({name:r.cells[0].textContent,quantity:q,gifts:parseInt(r.querySelector('.gifts').textContent),effectivePrice:r.querySelector('.effective-price').textContent,total:r.querySelector('.line-total').textContent});});return{customerData:c,items:i,totals:{net:document.getElementById("net-value").textContent,vat:document.getElementById("vat-value").textContent,final:document.getElementById("final-total").textContent}}}
function generateOrderContent(){const{customerData:c,items:i,totals:t}=getOrderData();const b="\n\nΣΤΟΙΧΕΙΑ ΚΑΤΑΘΕΣΗΣ\n----------------------------------------\nIBAN: GR8901722520005252016160277\nΤράπεζα: Τράπεζα Πειραιώς\n";let content="========================================\n      Π Α Ρ Α Γ Γ Ε Λ Ι Α\n========================================\n\n";content+="ΣΤΟΙΧΕΙΑ ΠΕΛΑΤΗ\n----------------------------------------\n";content+=`Επωνυμία: ${c.eponimia}\nΑΦΜ: ${c.afm}\nΔΟΥ: ${c.doy}\n`;content+=`Email: ${c.email}\nΤηλ: ${c.mobile} / ${c.phone}\n\n`;content+="ΑΝΑΛΥΣΗ ΠΑΡΑΓΓΕΛΙΑΣ\n------------------------------------------------------------------------\n";i.forEach(item=>{let qText=item.gifts>0?`${item.quantity} (+${item.gifts} Δώρο)`:`${item.quantity}`;content+=`${item.name}\n`;content+=`  └─ Ποσότητα: ${qText.padEnd(15)} | Τελ. Τιμή/Τεμ.: ${item.effectivePrice.padEnd(12)} | Σύνολο: ${item.total.padStart(8)}\n\n`;});content+="------------------------------------------------------------------------\n\n";content+="ΣΥΝΟΛΑ\n----------------------------------------\n";content+=`Καθαρή Αξία:${''.padStart(15)} ${t.net}\n`;content+=`Αξία ΦΠΑ (24%):${''.padStart(11)} ${t.vat}\n`;content+=`ΤΕΛΙΚΟ ΠΟΣΟ:${''.padStart(14)} ${t.final}\n`;content+=b;return content;}
function sendEmailViaClient(){const{customerData:c,items:i}=getOrderData();if(i.length===0){alert("Η παραγγελία είναι κενή.");return}const body=generateOrderContent();const subject=`Νέα Παραγγελία από ${c.eponimia||'Νέος Πελάτης'}`;let mailtoLink=`mailto:pzaro2010@gmail.com,liapaki2017@gmail.com`;c.email&&(mailtoLink+=`?cc=${c.email}`);mailtoLink+=`&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;window.location.href=mailtoLink;}
function previewAndSaveAsTXT(){if(getOrderData().items.length===0){alert("Η παραγγελία είναι κενή.");return}const content=generateOrderContent();const filename=`Παραγγελία_${getOrderData().customerData.eponimia.replace(/\s/g,'_')||'customer'}.txt`;document.getElementById('previewContent').textContent=content;document.getElementById('previewModal').style.display='block';document.getElementById('saveTxtButton').onclick=()=>saveTextAsFile(content,filename);}
function saveTextAsFile(text,filename){const blob=new Blob([text],{type:'text/plain;charset=utf-8'});const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download=filename;document.body.appendChild(link);link.click();document.body.removeChild(link);closePreviewModal();}
function clearForm(){document.getElementById("orderForm").reset();document.querySelectorAll(".quantity").forEach(q=>{q.value="0"});updateAll();}
