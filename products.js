// ============================================================
// ZARKOLIA HEALTH - SUPREME PRODUCT DATABASE v50.0
// ============================================================

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
    "Z-DermAspis": {
        moa: [{ ing: "Ethanol 70%", moa: "Μετουσίωση πρωτεϊνών ιών." }, { ing: "PMD", moa: "Αποκλεισμός OBPs εντόμων (12h)." }],
        cases: "Αντισηψία & 12ωρη απώθηση.", img: "https://github.com/pzaro/my-order-form/blob/main/images/Graphone.PNG?raw=true",
        biblio: ["Carroll SP (2006). <a href='https://pubmed.ncbi.nlm.nih.gov/16492330/'>PubMed:16492330</a>"]
    },
    "Zplast Total Repair": {
        moa: [{ ing: "Centella Asiatica", moa: "SMAD Signaling: Διέγερση Κολλαγόνου Ι & III." }, { ing: "Multi-MW Hyaluronic", moa: "ECM Scaffold για ιστική αναγέννηση." }],
        cases: "Τομές, διαβητικά έλκη, ουλές.", img: "https://github.com/pzaro/my-order-form/blob/main/images/Zplast%20Total%20Repair.jpeg?raw=true",
        biblio: ["Bylka W (2013). <a href='https://pubmed.ncbi.nlm.nih.gov/24386321/'>PubMed:24386321</a>"]
    },
    "ZplastCream": {
        moa: [
            { ing: "Μαστίχα & Μέλι", moa: "Αντιμικροβιακή προστασία (Gram+/-) & υγροσκοπική επούλωση." },
            { ing: "Hypericum (Βαλσαμόχορτο)", moa: "Επιτάχυνση κοκκιοποίησης." },
            { ing: "Καλαμίνη", moa: "Άμεση ανακούφιση από κνησμό." },
            { ing: "Ιπποφαές (Ω-7) & Αβοκάντο", moa: "Ανάπλαση λιπιδίων φραγμού." }
        ],
        cases: "Συγκάματα, ξηροδερμία, ηλιακά ερυθήματα.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/ZplastCream%2040gr.jpg?raw=true",
        biblio: ["Paraschos S (2007). <a href='https://pubmed.ncbi.nlm.nih.gov/17544358/'>PubMed:17544358</a>"]
    },
    "Bruise Off": {
        moa: [
            { ing: "Ουρία 10%", moa: "Penetration Enhancer: Βαθιά διείσδυση δραστικών." },
            { ing: "Άρνικα 10%", moa: "Αντιοιδηματική δράση & απορρόφηση εκχυμώσεων." },
            { ing: "Ριγανέλαιο", moa: "Warming effect & τοπική υπεραιμία." }
        ],
        cases: "Μώλωπες, οιδήματα, μελανιές (Botox/Fillers).",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Bruise%20Off%20Bite%20Out%20&%20Pain%20Free%20cream.jpg?raw=true",
        biblio: ["Lyss G (1998). <a href='https://pubmed.ncbi.nlm.nih.gov/9531637/'>PubMed:9531637</a>"]
    },
    "Z-boost": {
        moa: [
            { ing: "NAC (300mg)", moa: "Πρόδρομος Γλουταθειόνης & βλεννολυτική δράση." },
            { ing: "ALA (Άλφα Λιποϊκό)", moa: "Universal Antioxidant: Αναγέννηση Vit C & E." },
            { ing: "CoQ10", moa: "Μιτοχονδριακή παραγωγή ATP." },
            { ing: "Ψευδάργυρος & Σελήνιο", moa: "Φυσιολογική λειτουργία ανοσοποιητικού." }
        ],
        cases: "Αποκατάσταση, ενίσχυση άμυνας.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Z-boost%2030%20caps.jpg?raw=true",
        biblio: ["Hemilä H (2017). <a href='https://pubmed.ncbi.nlm.nih.gov/28515951/'>PubMed:28515951</a>"]
    },
    "Alveolair Sir": {
        moa: [
            { ing: "Αλθέα (Βάμμα)", moa: "Πλούσια σε βλεννώδεις ουσίες: Προστατευτικό φιλμ βλεννογόνου." },
            { ing: "Ευκάλυπτος", moa: "Μαλακτική δράση σε λαιμό & φωνητικές χορδές." },
            { ing: "Θυμάρι", moa: "Ρευστοποίηση εκκρίσεων (απόχρεμψη)." },
            { ing: "Κράνι (Cornus Mas)", moa: "Στυπτική δράση: Μείωση οιδήματος βλεννογόνου." }
        ],
        cases: "Βήχας, πονόλαιμος, προστασία αναπνευστικού.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Alveolair%20Sir.jpg?raw=true"
    },
    "Hydralia": {
        moa: [{ ing: "Υαλουρονικό Οξύ", moa: "Συγκράτηση 1000x βάρους σε νερό." }, { ing: "Έλαιο Jojoba", moa: "Βιομιμητικό λιπίδιο όμοιο με ανθρώπινο σμήγμα." }],
        cases: "Αφυδάτωση, υδατικό ισοζύγιο.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Hydralia%20Face%20Cream%2050ml.jpg?raw=true"
    },
    "Revitacell Plus": {
        moa: [{ ing: "Μαστίχα Χίου", moa: "Επαγωγή πρωτεΐνης Klotho στους ινοβλάστες." }, { ing: "Έλαιο Ροδιού", moa: "Προστασία κολλαγόνου." }],
        cases: "Αντιγήρανση, κυτταρική μακροζωία.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Revitacell%20Plus%20Face%20cream%2050ml.jpg?raw=true"
    },
    "Revitace Eyes": {
        moa: [{ ing: "Escin", moa: "Βελτίωση μικροκυκλοφορίας." }, { ing: "Άρνικα", moa: "Αποσυμφόρηση οιδήματος." }],
        cases: "Μαύροι κύκλοι, σακούλες.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Revitace%20Eyes%20cream%20Luce%2030ml.jpg?raw=true"
    },
    "PROBIOTIC PREMIUM": {
        moa: [{ ing: "18 Strains", moa: "Ανταγωνιστικός αποκλεισμός παθογόνων." }],
        cases: "IBS, χλωρίδα.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20PROBIOTIC%20PREMIUM.jpg?raw=true"
    },
    "MAGNESIUM +B6": {
        moa: [{ ing: "Magnesium", moa: "Ρύθμιση νευρομυϊκής διεγερσιμότητας." }],
        cases: "Κράμπες, αϋπνία.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20MAGNESIUM%201%20%CE%A4%CE%B5%CE%BC.jpg?raw=true"
    },
    "A-Z": {
        moa: [{ ing: "24 Nutrients", moa: "Μεταβολική ομοιόσταση." }],
        cases: "Κόπωση.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20A-Z.jpg?raw=true"
    },
    "OMEGA 3": {
        moa: [{ ing: "EPA/DHA", moa: "Resolvins: Επίλυση φλεγμονής." }],
        cases: "Καρδιαγγειακή υγεία.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20OMEGA%203.jpg?raw=true"
    },
    "JOINT": {
        moa: [{ ing: "Collagen & MSM", moa: "Δομική υποστήριξη αρθρώσεων." }],
        cases: "Οστεοαρθρίτιδα.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20JOINT.jpg?raw=true"
    },
    "Cosmetic pack": {
        moa: [{ ing: "Synergy", moa: "Revitacell + Hydralia." }],
        cases: "Ολοκληρωμένη φροντίδα.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zarkolia%20Cosmetic%20pack.jpg?raw=true"
    }
};
