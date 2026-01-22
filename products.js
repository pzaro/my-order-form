const products = [
    { name: "Alveolair Sir 200ml", price: 10.50 },
    { name: "Z-boost 30caps", price: 15.80 },
    { name: "Zplast 50ml", price: 12.40 },
    { name: "Bruise Off 75ml", price: 9.90 },
    { name: "D-vit 50ml (Drops)", price: 8.50 },
    { name: "Omega-3 Pure 60soft", price: 18.20 },
    { name: "Z-Iron 30caps", price: 14.20 },
    { name: "Z-Sleep 30caps", price: 13.50 },
    { name: "Z-Magnesium 60caps", price: 16.40 },
    { name: "Z-C 1000mg 20eff", price: 7.90 },
    { name: "Z-Multi 30caps", price: 11.80 },
    { name: "Z-Hair 60caps", price: 19.50 },
    { name: "Z-Joint 60caps", price: 22.10 }
];

const productDetails = {
    "Alveolair Sir": { moa: [{ ing: "Αλθέα", moa: "Προστατευτική μεμβράνη στον βλεννογόνο." }, { ing: "Θυμάρι", moa: "Αποχρεμπτική δράση." }] },
    "Z-boost": { moa: [{ ing: "NAC (300mg)", moa: "Ισχυρή αντιοξειδωτική δράση." }, { ing: "Ψευδάργυρος", moa: "Ενίσχυση ανοσοποιητικού." }] },
    "Zplast": { moa: [{ ing: "Μέλι & Μαστίχα", moa: "Ανάπλαση και αντιβακτηριακή προστασία." }] },
    "Bruise Off": { moa: [{ ing: "Άρνικα 10%", moa: "Απορρόφηση εκχυμώσεων." }] },
    "Z-Iron": { moa: [{ ing: "Δισγλυκινικός Σίδηρος", moa: "Υψηλή βιοδιαθεσιμότητα." }] },
    "Z-Sleep": { moa: [{ ing: "Μελατονίνη (1mg)", moa: "Ρύθμιση βιολογικού κύκλου ύπνου." }] },
    "Z-Magnesium": { moa: [{ ing: "Κιτρικό Μαγνήσιο", moa: "Μυϊκή και νευρική χαλάρωση." }] },
    "Z-C 1000mg": { moa: [{ ing: "Βιταμίνη C", moa: "Θωράκιση ανοσοποιητικού." }] },
    "Z-Multi": { moa: [{ ing: "Πολυβιταμίνη", moa: "Κάλυψη ημερήσιων αναγκών." }] },
    "Z-Hair": { moa: [{ ing: "Βιοτίνη & Ψευδάργυρος", moa: "Υγεία μαλλιών και νυχιών." }] },
    "Z-Joint": { moa: [{ ing: "Γλυκοζαμίνη", moa: "Υποστήριξη χόνδρων και αρθρώσεων." }] }
};
