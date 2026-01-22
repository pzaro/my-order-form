const products = [
    { name: 'Z-DermAspis', price: 5.03 },
    { name: 'Zplast Total Repair 50ml', price: 14.60 },
    { name: 'Zplast Total Repair 100ml', price: 26.80 },
    { name: 'ZplastCream 40gr', price: 12.30 },
    { name: 'ZplastCream 100gr', price: 24.79 },
    { name: 'Bruise Off cream 50ml', price: 5.60 },
    { name: 'Bruise Off cream 100ml', price: 9.50 },
    { name: 'Z-boost 30 caps', price: 14.93 },
    { name: 'Z-boost 12 caps', price: 6.99 },
    { name: 'Hydralia Face cream 50ml', price: 8.90 },
    { name: 'Revitacell Plus Face cream 50ml', price: 10.69 },
    { name: 'Revitace Eyes cream Luce 30ml', price: 10.10 },
    { name: 'Alveolair Sir', price: 7.65 },
    { name: 'NUTRI MX PROBIOTIC PREMIUM', price: 8.96 },
    { name: 'NUTRI MX MAGNESIUM +B6', price: 5.98 },
    { name: 'NUTRI MX A-Z', price: 6.51 },
    { name: 'NUTRI MX OMEGA 3', price: 6.87 },
    { name: 'NUTRI MX JOINT', price: 10.16 },
    { name: 'Zarkolia Cosmetic pack', price: 23.89 }
];

const productDetails = {
    "Z-DermAspis": { moa: [{ ing: "Ethanol 70%", moa: "Μετουσίωση πρωτεϊνών ιών." }], cases: "Αντισηψία & 12ωρη απώθηση.", img: "https://github.com/pzaro/my-order-form/blob/main/images/Graphone.PNG?raw=true" },
    "Zplast Total Repair": { moa: [{ ing: "Centella Asiatica", moa: "Διέγερση Κολλαγόνου Ι & III." }], cases: "Τομές, διαβητικά έλκη.", img: "https://github.com/pzaro/my-order-form/blob/main/images/Zplast%20Total%20Repair.jpeg?raw=true" },
    "ZplastCream": { moa: [{ ing: "Μαστίχα & Μέλι", moa: "Αντιμικροβιακή προστασία." }], cases: "Συγκάματα, ξηροδερμία.", img: "https://github.com/pzaro/my-order-form/blob/main/images/ZplastCream%2040gr.jpg?raw=true" },
    "Bruise Off": { moa: [{ ing: "Άρνικα 10%", moa: "Απορρόφηση εκχυμώσεων." }], cases: "Μώλωπες, οιδήματα.", img: "https://github.com/pzaro/my-order-form/blob/main/images/Bruise%20Off%20Bite%20Out%20&%20Pain%20Free%20cream.jpg?raw=true" },
    "Z-boost": { moa: [{ ing: "NAC (300mg)", moa: "Πρόδρομος Γλουταθειόνης." }], cases: "Αποκατάσταση, άμυνα.", img: "https://github.com/pzaro/my-order-form/blob/main/images/Z-boost%2030%20caps.jpg?raw=true" },
    "Alveolair Sir": { moa: [{ ing: "Αλθέα", moa: "Προστατευτικό φιλμ βλεννογόνου." }], cases: "Βήχας, πονόλαιμος.", img: "https://github.com/pzaro/my-order-form/blob/main/images/Alveolair%20Sir.jpg?raw=true" },
    "Hydralia": { moa: [{ ing: "Υαλουρονικό", moa: "Συγκράτηση νερού." }], cases: "Αφυδάτωση.", img: "https://github.com/pzaro/my-order-form/blob/main/images/Hydralia%20Face%20Cream%2050ml.jpg?raw=true" },
    "Revitacell Plus": { moa: [{ ing: "Μαστίχα Χίου", moa: "Επαγωγή Klotho." }], cases: "Αντιγήρανση.", img: "https://github.com/pzaro/my-order-form/blob/main/images/Revitacell%20Plus%20Face%20cream%2050ml.jpg?raw=true" },
    "Revitace Eyes": { moa: [{ ing: "Escin", moa: "Μικροκυκλοφορία." }], cases: "Μαύροι κύκλοι.", img: "https://github.com/pzaro/my-order-form/blob/main/images/Revitace%20Eyes%20cream%20Luce%2030ml.jpg?raw=true" },
    "PROBIOTIC PREMIUM": { moa: [{ ing: "18 Strains", moa: "Χλωρίδα." }], cases: "IBS.", img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20PROBIOTIC%20PREMIUM.jpg?raw=true" },
    "MAGNESIUM +B6": { moa: [{ ing: "Magnesium", moa: "Νευρομυϊκή ρύθμιση." }], cases: "Κράμπες.", img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20MAGNESIUM%201%20%CE%A4%CE%B5%CE%BC.jpg?raw=true" },
    "A-Z": { moa: [{ ing: "24 Nutrients", moa: "Ομοιόσταση." }], cases: "Κόπωση.", img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20A-Z.jpg?raw=true" },
    "OMEGA 3": { moa: [{ ing: "EPA/DHA", moa: "Επίλυση φλεγμονής." }], cases: "Καρδιά.", img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20OMEGA%203.jpg?raw=true" },
    "JOINT": { moa: [{ ing: "Collagen", moa: "Υποστήριξη αρθρώσεων." }], cases: "Οστεοαρθρίτιδα.", img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20JOINT.jpg?raw=true" },
    "Cosmetic pack": { moa: [{ ing: "Synergy", moa: "Ολοκληρωμένη φροντίδα." }], cases: "Συνδυαστική δράση.", img: "https://github.com/pzaro/my-order-form/blob/main/images/Zarkolia%20Cosmetic%20pack.jpg?raw=true" }
};
