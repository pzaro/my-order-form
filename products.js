// ============================================================
// ZARKOLIA HEALTH - COMPLETE PRODUCT DATABASE v41.0
// ============================================================

const products = [
    { name: 'Z-DermAspis', price: 5.03 },
    { name: 'Zplast Total Repair 50ml', price: 14.60 },
    { name: 'Zplast Total Repair 100ml', price: 26.80 },
    { name: 'ZplastCream 40gr', price: 12.30 },
    { name: 'ZplastCream 100gr', price: 24.79 },
    { name: 'Bruise Off Bite Out & Pain Free cream 50ml', price: 5.60 },
    { name: 'Bruise Off Bite Out & Pain Free cream 100ml', price: 9.50 },
    { name: 'Z-boost 30 caps', price: 14.93 },
    { name: 'Z-boost 12 caps', price: 6.99 },
    { name: 'Hydralia Face cream 50ml', price: 8.90 },
    { name: 'Revitacell Plus Face cream 50ml', price: 10.69 },
    { name: 'Revitace Eyes cream Luce 30ml', price: 10.10 },
    { name: 'Alveolair Sir', price: 7.65 },
    { name: 'NUTRI MX PROBIOTIC PREMIUM', price: 8.96 },
    { name: 'NUTRI MX MAGNESIUM 1 Τεμ', price: 5.98 },
    { name: 'NUTRI MX A-Z', price: 6.51 },
    { name: 'NUTRI MX OMEGA 3', price: 6.87 },
    { name: 'NUTRI MX JOINT', price: 10.16 },
    { name: 'Zarkolia Cosmetic pack', price: 23.89 }
];

const productDetails = {
    "Z-DermAspis": {
        moa: [{ ing: "Ethanol 70% v/v", moa: "Μετουσίωση πρωτεϊνών ιών & λύση λιπιδικής μεμβράνης." }, { ing: "PMD", moa: "Αποκλεισμός OBPs εντόμων (12h)." }],
        cases: "Αντισηψία & 12ωρη απώθηση.", rationale: "Dual Action.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Z-boost%2012%20caps.jpg?raw=true" // Fallback
    },
    "Zplast Total Repair": {
        moa: [{ ing: "Centella Asiatica", moa: "SMAD Signaling: Κολλαγόνο Ι & III." }, { ing: "Hyaluronic Acid", moa: "ECM Scaffold για αναγέννηση." }],
        cases: "Έλκη, τομές, ουλές.", rationale: "Ιστική αναδόμηση.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zplast%20Total%20Repair.jpeg?raw=true"
    },
    "Bruise Off": {
        moa: [{ ing: "Arnica (Helenalin)", moa: "NF-κB Inhibition: Αντιφλεγμονώδες." }, { ing: "Urea", moa: "Penetration Enhancer." }],
        cases: "Μελανιές, αιματώματα.", rationale: "Μεταβολική απομάκρυνση αίματος.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Bruise%20Off%20Bite%20Out%20&%20Pain%20Free%20cream.jpg?raw=true"
    },
    "Alveolair Sir": {
        moa: [{ ing: "Thymus & Althaea", moa: "Secretolytic & Βιο-φίλμ προστασίας." }],
        cases: "Βήχας, πονόλαιμος.", rationale: "Φυτική ανακούφιση.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Alveolair%20Sir.jpg?raw=true"
    },
    "NUTRI MX MAGNESIUM": {
        moa: [{ ing: "Magnesium & B6", moa: "NMDA Modulation: Μυϊκή χαλάρωση." }],
        cases: "Κράμπες, άγχος, αϋπνία.", rationale: "Υψηλή βιοδιαθεσιμότητα.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20MAGNESIUM%201%20%CE%A4%CE%B5%CE%BC.jpg?raw=true"
    },
    "NUTRI MX A-Z": {
        moa: [{ ing: "24 Nutrients", moa: "Μεταβολική ομοιόσταση." }],
        cases: "Κόπωση, ενίσχυση.", rationale: "Πλήρης κάλυψη.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20A-Z.jpg?raw=true"
    },
    "NUTRI MX PROBIOTIC PREMIUM": {
        moa: [{ ing: "18 Strains", moa: "Competitive Exclusion παθογόνων." }],
        cases: "Αντιβιοτικά, IBS.", rationale: "Ολική επαναφορά μικροβιώματος.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20PROBIOTIC%20PREMIUM.jpg?raw=true"
    },
    "NUTRI MX JOINT": {
        moa: [{ ing: "Collagen II & MSM", moa: "Δομική αναπλήρωση χόνδρου." }],
        cases: "Οστεοαρθρίτιδα, αθλητές.", rationale: "Λίπανση & αναδόμηση.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20JOINT.jpg?raw=true"
    },
    "NUTRI MX OMEGA 3": {
        moa: [{ ing: "EPA/DHA", moa: "Resolvins: Επίλυση φλεγμονής." }],
        cases: "Καρδιαγγειακή προστασία.", rationale: "Μοριακή απόσταξη.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20OMEGA%203.jpg?raw=true"
    },
    "Revitace Eyes": {
        moa: [{ ing: "Escin", moa: "Μείωση οιδήματος (σακούλες)." }],
        cases: "Μαύροι κύκλοι, σακούλες.", rationale: "Αποσυμφόρηση.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Revitace%20Eyes%20cream%20Luce%2030ml.jpg?raw=true"
    },
    "Revitacell Plus": {
        moa: [{ ing: "Mastic Oil", moa: "Klotho Gene Induction." }],
        cases: "Ώριμο δέρμα.", rationale: "Επιγενετική αντιγήρανση.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Revitacell%20Plus%20Face%20cream%2050ml.jpg?raw=true"
    },
    "Hydralia": {
        moa: [{ ing: "LMW Hyaluronic", moa: "Βαθιά δερματική ενυδάτωση." }],
        cases: "Αφυδάτωση.", rationale: "Plumping effect.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Hydralia%20Face%20Cream%2050ml.jpg?raw=true"
    },
    "Z-boost 12 caps": {
        moa: [{ ing: "Zinc & NAC", moa: "GSH Precursor & RNA Polymerase inhibition." }],
        cases: "Ανοσοποιητικό.", rationale: "Redox θωράκιση.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Z-boost%2012%20caps.jpg?raw=true"
    },
    "Z-boost 30 caps": {
        moa: [{ ing: "Zinc & NAC", moa: "GSH Precursor & RNA Polymerase inhibition." }],
        cases: "Ανοσοποιητικό.", rationale: "Redox θωράκιση.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Z-boost%2030%20caps.jpg?raw=true"
    },
    "Zarkolia Cosmetic pack": {
        moa: [{ ing: "Synergy", moa: "Συνδυασμένη δράση Revitacell & Hydralia." }],
        cases: "Ολική ανάπλαση.", rationale: "Luxury Care.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zarkolia%20Cosmetic%20pack.jpg?raw=true"
    },
    "ZplastCream 40gr": {
        moa: [{ ing: "Μαστίχα & Καλαμίνη", moa: "Anti-pruritic & TGF-β induction." }],
        cases: "Συγκάματα, ηλιακά.", rationale: "100% Φυτικό.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/ZplastCream%2040gr.jpg?raw=true"
    },
    "ZplastCream 100gr": {
        moa: [{ ing: "Μαστίχα & Καλαμίνη", moa: "Anti-pruritic & TGF-β induction." }],
        cases: "Συγκάματα, ηλιακά.", rationale: "100% Φυτικό.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/ZplastCream%20100gr.jpg?raw=true"
    }
};
