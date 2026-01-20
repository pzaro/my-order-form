// ============================================================
// ZARKOLIA HEALTH - SCIENTIFIC PRODUCT DATABASE
// ============================================================

const products = [
    { name: 'Z-DermAspis', price: 5.03 },
    { name: 'Zplast Total Repair 50ml', price: 14.60 },
    { name: 'Zplast Total Repair 100ml', price: 26.80 },
    { name: 'ZplastCream 40gr', price: 12.30 },
    { name: 'ZplastCream 100gr', price: 24.79 },
    { name: 'Bruise Off 50ml', price: 5.60 },
    { name: 'Bruise Off 100ml', price: 9.50 },
    { name: 'Z-boost 30 caps', price: 14.93 },
    { name: 'Z-boost 12 caps', price: 6.99 },
    { name: 'Hydralia Face cream 50ml', price: 8.90 },
    { name: 'Revitacell Plus Face cream 50ml', price: 10.69 },
    { name: 'Revitace Eyes Luce 30ml', price: 10.10 },
    { name: 'Alveolair Sir', price: 7.65 },
    { name: 'NUTRI MX PROBIOTIC PREMIUM', price: 8.96 },
    { name: 'NUTRI MX MAGNESIUM', price: 5.98 },
    { name: 'NUTRI MX A-Z', price: 6.51 },
    { name: 'NUTRI MX OMEGA 3', price: 6.87 },
    { name: 'NUTRI MX JOINT', price: 10.16 },
    { name: 'Zarkolia Cosmetic pack', price: 23.89 }
];

const productDetails = {
    "Z-DermAspis": {
        moa: [{ing: "Ethanol 70%", moa: "Denaturation of viral proteins."}, {ing: "PMD", moa: "Blocks host-seeking odor receptors (12h protection)."}],
        cases: "Υγιεινή χεριών και προστασία από σκνίπες/κουνούπια.", rationale: "Dual Action προστασία για outdoor χρήση."
    },
    "Zplast Total Repair": {
        moa: [
            {ing: "Centella Asiatica", moa: "<strong>SMAD Signaling:</strong> Ενεργοποιεί τη μεταγραφή γονιδίων για Κολλαγόνο Ι & III."},
            {ing: "Hyaluronic Acid", moa: "<strong>ECM Scaffold:</strong> Δημιουργεί τρισδιάστατο ικρίωμα για την ιστική αναγέννηση."},
            {ing: "Sea Buckthorn", moa: "Membrane stabilization μέσω Ω-7 λιπαρών οξέων."}
        ],
        cases: "Τομές, έλκη, εγκαύματα 2ου βαθμού, ουλές ακμής.", rationale: "Κλινική αναδόμηση του χορίου σε βάθος.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zplast%20Total%20Repair.jpeg?raw=true"
    },
    "Bruise Off": {
        moa: [{ing: "Arnica (Helenalin)", moa: "<strong>NF-κB Inhibition:</strong> Διακοπή της φλεγμονώδους απόκρισης."}, {ing: "Urea", moa: "Keratolytic action για βαθιά διείσδυση ενεργών."}],
        cases: "Μελανιές (Botox/Fillers), αιματώματα, μυϊκοί πόνοι.", rationale: "Επιταχύνει το μεταβολισμό του αίματος στον ιστό."
    },
    "NUTRI MX PROBIOTIC PREMIUM": {
        moa: [{ing: "18 Strains (10B CFU)", moa: "Competitive exclusion παθογόνων και Tregs induction."}, {ing: "SCFAs Support", moa: "Θρέψη επιθηλίου κολονοκυττάρων."}],
        cases: "Αντιβιοτικά, IBS, φουσκώματα, εντερική δυσβίωση.", rationale: "Το πληρέστερο φάσμα στελεχών για ολική επαναφορά."
    },
    "NUTRI MX MAGNESIUM": {
        moa: [{ing: "Magnesium & B6", moa: "<strong>NMDA Modulation:</strong> Ρύθμιση νευρομυϊκής διεγερσιμότητας."}],
        cases: "Κράμπες, άγχος, αϋπνία, ημικρανίες.", rationale: "Υψηλή βιοδιαθεσιμότητα για άμεση χαλάρωση."
    },
    "Alveolair Sir": {
        moa: [{ing: "Thymus & Althaea", moa: "<strong>Secretolytic Action:</strong> Ρευστοποίηση βλέννας."}, {ing: "Eucalyptus", moa: "Bronchospasmolysis και απόχρεμψη."}],
        cases: "Παραγωγικός/ξηρός βήχος, ερεθισμένος λαιμός.", rationale: "Φυτική προστασία ανώτερου αναπνευστικού."
    }
};
