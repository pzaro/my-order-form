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
    { name: 'Revitacell Plus Face cream 50ml', price: 10.69 },
    { name: 'Revitace Eyes cream Luce 30ml', price: 10.10 },
    { name: 'Alveolair Sir', price: 7.65 }
];

// Αντικείμενο με τις πλήρεις, διορθωμένες περιγραφές
const productDetails = { /* ... ΟΙ ΠΕΡΙΓΡΑΦΕΣ ΠΑΡΑΜΕΝΟΥΝ ΙΔΙΕΣ ΜΕ ΠΡΙΝ ... */ };

document.addEventListener("DOMContentLoaded", function() {
    // ... (Ο κώδικας αυτός παραμένει ίδιος) ...
});

// ... (Οι συναρτήσεις showProductDetails, openTab, κλπ. παραμένουν ίδιες) ...

// --- ΝΕΑ, ΒΕΛΤΙΩΜΕΝΗ ΣΥΝΑΡΤΗΣΗ ΓΙΑ ΤΗ ΔΗΜΙΟΥΡΓΙΑ ΤΟΥ EMAIL ---
function generateEmailBody() {
    const { customerData, items, totals } = getOrderData();
    
    let body = `Νέα Παραγγελία\n\n`;
    body += `*********************************\n`;
    body += `* ΣΤΟΙΧΕΙΑ ΠΕΛΑΤΗ      *\n`;
    body += `*********************************\n`;
    body += `ΕΠΩΝΥΜΙΑ: ${customerData.eponimia || '-'}\n`;
    body += `ΑΦΜ:      ${customerData.afm || '-'}\n`;
    body += `ΔΟΥ:      ${customerData.doy || '-'}\n`;
    body += `ΚΙΝΗΤΟ:   ${customerData.mobile || '-'}\n`;
    body += `ΣΤΑΘΕΡΟ:  ${customerData.phone || '-'}\n`;
    body += `EMAIL:    ${customerData.email || '-'}\n\n`;

    body += `--- ΠΑΡΑΓΓΕΛΙΑ ---\n`;
    body += `${'*ΠΡΟΪΟΝ*'.padEnd(38)}| ${'*ΤΕΜ*'.padStart(5)} | ${'*ΔΩΡΑ*'.padStart(5)}\n`;
    body += `------------------------------------------------------\n`;
    items.forEach(item => {
        body += `*${item.name.padEnd(35)}* | ${item.quantity.toString().padStart(5)} | ${item.gifts.toString().padStart(5)}\n`;
    });
    body += `------------------------------------------------------\n\n`;

    body += `--- ΣΥΝΟΛΑ ---\n`;
    body += `Καθαρή Αξία: ${totals.net}\n`;
    body += `Αξία ΦΠΑ (24%): ${totals.vat}\n`;
    body += `ΤΕΛΙΚΟ ΠΟΣΟ: ${totals.final}\n\n`;

    // ΝΕΑ ΕΝΟΤΗΤΑ ΣΥΝΟΛΙΚΩΝ ΤΕΜΑΧΙΩΝ
    body += `--- ΣΥΝΟΛΙΚΑ ΤΕΜΑΧΙΑ (Αγορασμένα + Δώρα) ---\n`;
    items.forEach(item => {
        const totalPieces = item.quantity + item.gifts;
        body += `- ${item.name}: ${totalPieces} τεμάχια\n`;
    });
    body += `\n`;

    body += `--- Στοιχεία Κατάθεσης ---\n`;
    body += `IBAN: GR8901722520005252016160277\n`;
    body += `Τράπεζα: Τράπεζα Πειραιώς\n`;

    return body;
}

// Η συνάρτηση για το TXT παραμένει η ίδια με την αναλυτική μορφοποίηση
function generateOrderContent(){
    const{customerData:c,items:i,totals:t}=getOrderData();
    const b="\n\nΣΤΟΙΧΕΙΑ ΚΑΤΑΘΕΣΗΣ\n----------------------------------------\nIBAN: GR8901722520005252016160277\nΤράπεζα: Τράπεζα Πειραιώς\n";
    let content="========================================\n      Π Α Ρ Α Γ Γ Ε Λ Ι Α\n========================================\n\n";
    content+="****************************************\n* ΣΤΟΙΧΕΙΑ ΠΕΛΑΤΗ           *\n****************************************\n";
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


function sendEmailViaClient() {
    const { customerData, items } = getOrderData();
    if (items.length === 0) {
        alert("Η παραγγελία είναι κενή.");
        return;
    }
    const body = generateEmailBody(); // <--- ΧΡΗΣΙΜΟΠΟΙΕΙ ΤΗ ΝΕΑ ΣΥΝΑΡΤΗΣΗ
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

// ... (Ο υπόλοιπος κώδικας παραμένει ακριβώς ο ίδιος)
function getOrderData(){ /* ... */ }
function updateAll(){ /* ... */ }
function calculateGifts(quantity){ /* ... */ }
// κ.λπ.
