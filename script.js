// ΣΥΝΘΕΣΗ 100% ΣΥΣΤΑΤΙΚΩΝ
const productDetails = {
    "Alveolair Sir": {
        moa: [
            { ing: "Αλθέα (Βάμμα)", moa: "Πλούσια σε βλεννώδεις ουσίες, καταπραΰνει τον ερεθισμό." },
            { ing: "Ευκάλυπτος & Θυμάρι", moa: "Μαλακτική δράση & ρευστοποίηση εκκρίσεων." },
            { ing: "Κράνι & Ιπποφαές", moa: "Στυπτική δράση & φυσική Vit C για τόνωση." }
        ],
        img: "https://github.com/pzaro/zarkolia-images/blob/main/Alveolair%20Sir%20fonto.jpg?raw=true"
    },
    "Z-boost": {
        moa: [
            { ing: "NAC (300mg)", moa: "Πρόδρομος Γλουταθειόνης & βλεννολυτική δράση." },
            { ing: "ALA & CoQ10", moa: \"Universal Antioxidant\" & παραγωγή ATP." },
            { ing: "Ψευδάργυρος & Σελήνιο", moa: "Φυσιολογική λειτουργία ανοσοποιητικού (EFSA)." }
        ],
        img: "https://github.com/pzaro/zarkolia-images/blob/main/Zboost%2030%20%CF%86%CE%BF%CE%BD%CF%84%CE%BF.jpg?raw=true"
    },
    "Zplast": {
        moa: [
            { ing: "Μαστίχα & Μέλι", moa: "Αντιμικροβιακή προστασία & υγροσκοπική επούλωση." },
            { ing: "Καλαμίνη & Hypericum", moa: "Άμεση ανακούφιση από κνησμό & επιτάχυνση κοκκιοποίησης." },
            { ing: "Ιπποφαές (Ω-7)", moa: "Ανάπλαση λιπιδίων επιδερμικού φραγμού." }
        ],
        img: "https://github.com/pzaro/zarkolia-images/blob/main/zplast%20%CE%BC%CE%B5%20%CF%86%CE%BF%CE%BD%CF%84%CE%BF.jpg?raw=true"
    },
    "Bruise Off": {
        moa: [
            { ing: "Ουρία 10%", moa: "Penetration Enhancer για βαθιά διείσδυση." },
            { ing: "Άρνικα 10%", moa: "Απορρόφηση εκχυμώσεων & αντιοιδηματική δράση." },
            { ing: "Ριγανέλαιο", moa: "Τοπική υπεραιμία (Warming effect)." }
        ],
        img: "https://github.com/pzaro/zarkolia-images/blob/main/Bruise%20Off%20%CE%BC%CE%B5%20%CF%86%CF%8C%CE%BD%CF%84%CE%BF.jpg?raw=true"
    }
    // ... τα υπόλοιπα προϊόντα ακολουθούν την ίδια δομή
};

// ΔΥΝΑΜΙΚΗ ΔΗΜΙΟΥΡΓΙΑ ΠΑΡΑΓΓΕΛΙΑΣ
function renderOrderSystem() {
    const container = document.getElementById('orderGrid');
    container.innerHTML = '';

    products.forEach((p, index) => {
        const details = Object.entries(productDetails).find(([key]) => p.name.includes(key))?.[1] || {};
        
        const item = document.createElement('div');
        item.className = 'order-item';
        item.innerHTML = `
            <img src="${details.img || ''}" class="item-img" onerror="this.style.display='none'">
            <div class="item-info">
                <h4>${p.name} <span onclick="showInfo('${p.name}', ${index})" style="cursor:pointer; font-size:1.2rem;">🧬</span></h4>
                <small>${p.price.toFixed(2)} €</small>
            </div>
            <div class="qty-controls">
                <button type="button" onclick="changeQty(${index}, -1)">−</button>
                <input type="number" id="qty-${index}" value="0" min="0" oninput="updateTotals()">
                <button type="button" onclick="changeQty(${index}, 1)">+</button>
            </div>
            <div class="item-total" id="total-${index}">0.00 €</div>
        `;
        container.appendChild(item);
    });
}
