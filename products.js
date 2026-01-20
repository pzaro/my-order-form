// ============================================================
// ZARKOLIA HEALTH - COMPLETE PRODUCT DATABASE v33.0
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
        moa: [
            { ing: "Ethanol 70% v/v", moa: "Μετουσίωση πρωτεϊνών παθογόνων και λύση λιπιδικής μεμβράνης." },
            { ing: "PMD (Citriodora)", moa: "Αποκλεισμός OBPs εντόμων. Εμποδίζει τον εντοπισμό του ξενιστή (12h)." }
        ],
        cases: "Υγιεινή χεριών και 12ωρη προστασία από κουνούπια/σκνίπες.",
        rationale: "Dual Action αντισηψία και απώθηση σε ένα προϊόν.",
        biblio: ["Carroll SP (2006). PubMed: 16492330"]
    },
    "Zplast Total Repair": {
        moa: [
            { ing: "Centella Asiatica", moa: "<strong>SMAD Signaling:</strong> Διεγείρει τη βιοσύνθεση Κολλαγόνου Ι & III." },
            { ing: "Hyaluronic Acid", moa: "<strong>ECM Scaffold:</strong> Τρισδιάστατο ικρίωμα για ιστική αναγέννηση." },
            { ing: "Sea Buckthorn (Ω-7)", moa: "Σταθεροποίηση κυτταρικών μεμβρανών και επιθηλιοποίηση." }
        ],
        cases: "Χειρουργικές τομές, διαβητικά έλκη, εγκαύματα, βαθιές ραγάδες, ουλές ακμής.",
        rationale: "Κλινική αναδόμηση του χορίου σε βάθος. Διασφαλίζει ελαστικότητα.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zplast%20Total%20Repair.jpeg?raw=true",
        biblio: ["Bylka W (2013). PubMed: 24386321"]
    },
    "ZplastCream": {
        moa: [
            { ing: "Μαστίχα & Μέλι", moa: "<strong>TGF-β Induction:</strong> Φυσική διέγερση επούλωσης." },
            { ing: "Καλαμίνη", moa: "Άμεση καταστολή κνησμού και ερεθισμού." }
        ],
        cases: "Συγκάματα βρεφών, ηλιακά εγκαύματα, προστασία φραγμού.",
        rationale: "100% φυτική προστασία φραγμού για ευαίσθητα δέρματα.",
        biblio: ["Paraschos S (2012). PubMed: 17544358"]
    },
    "Bruise Off": {
        moa: [
            { ing: "Arnica (Helenalin)", moa: "<strong>NF-κB Inhibition:</strong> Διακοπή φλεγμονώδους απόκρισης." },
            { ing: "Urea", moa: "Penetration Enhancer για μέγιστη απορρόφηση." }
        ],
        cases: "Μελανιές (Botox/Fillers), αιματώματα, οιδήματα, μυϊκοί πόνοι.",
        rationale: "Επιταχύνει τη μεταβολική απομάκρυνση αίματος από τον ιστό.",
        biblio: ["Lyss G (1998). PubMed: 9531637"]
    },
    "Revitace Eyes Luce": {
        moa: [
            { ing: "Escin (Εσκίνη)", moa: "Ενίσχυση φλεβικού τόνου και μείωση οιδήματος (σακούλες)." },
            { ing: "Arnica Extract", moa: "Επιταχύνει την αποδόμηση της αίμης για εξάλειψη μαύρων κύκλων." }
        ],
        cases: "Μαύροι κύκλοι, σακούλες, κουρασμένο βλέμμα, λεπτές γραμμές.",
        rationale: "Εξειδικευμένη δράση στη μικροκυκλοφορία για άμεση αποσυμφόρηση ματιών.",
        biblio: ["Gallelli L (2019). PubMed: 31562234"]
    },
    "Z-boost": {
        moa: [
            { ing: "Zinc", moa: "Viral RNA polymerase inhibition." },
            { ing: "NAC", moa: "<strong>GSH Precursor:</strong> Σύνθεση ενδογενούς Γλουταθειόνης." }
        ],
        cases: "Πρόληψη γρίπης, ανάρρωση, οξειδωτικό στρες.",
        rationale: "Ολική Redox θωράκιση του ανοσοποιητικού.",
        biblio: ["Hemilä H (2017). PubMed: 28515951"]
    },
    "NUTRI MX PROBIOTIC PREMIUM": {
        moa: [
            { ing: "18 Strains (10B CFU)", moa: "<strong>Competitive Exclusion:</strong> Αποκλεισμός παθογόνων." },
            { ing: "Butyrate Synthesis", moa: "Θρέψη κολονοκυττάρων μέσω SCFAs." }
        ],
        cases: "Αντιβιοτικά, IBS, φουσκώματα, δυσβίωση.",
        rationale: "Το πληρέστερο φάσμα στελεχών για ολική επαναφορά.",
        biblio: ["Karamanolis GP (2019). Clinical Review."]
    },
    "NUTRI MX JOINT": {
        moa: [
            { ing: "Collagen II & MSM", moa: "Δομική αναπλήρωση χόνδρου και θειούχοι δεσμοί." },
            { ing: "Glucosamine", moa: "Διέγερση σύνθεσης αγρεκάνης για λίπανση." }
        ],
        cases: "Οστεοαρθρίτιδα, αθλητές, δυσκαμψία.",
        rationale: "Ολοκληρωμένη χονδροπροστασία και λίπανση αρθρώσεων.",
        biblio: ["Lugo JP (2013). PubMed: 24153020"]
    },
    "Alveolair Sir": {
        moa: [
            { ing: "Thymus & Althaea", moa: "<strong>Secretolytic:</strong> Ρευστοποίηση βλέννας & βιο-φιλμ." },
            { ing: "Eucalyptus", moa: "Bronchospasmolysis και απόχρεμψη." }
        ],
        cases: "Παραγωγικός και ξηρός βήχος, πονόλαιμος.",
        rationale: "Φυτική λύση ολικής προστασίας αναπνευστικού.",
        biblio: ["EMA Herbal Monograph."]
    }
};
