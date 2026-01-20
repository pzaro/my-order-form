// ============================================================
// ZARKOLIA HEALTH - SUPREME PRODUCT DATABASE v44.0
// ============================================================

const products = [
    { name: 'Z-DermAspis', price: 5.03 },
    { name: 'ZARKOLIA TOTAL REPAIR CREAM 50ml', price: 14.60 },
    { name: 'ZARKOLIA TOTAL REPAIR CREAM 100ml', price: 26.80 },
    { name: 'ZARKOLIA ZPLAST CREAM 40ML', price: 12.30 },
    { name: 'ZARKOLIA ZPLAST CREAM 100ML', price: 24.79 },
    { name: 'Bruise Off cream 50ml', price: 5.60 },
    { name: 'Bruise Off cream 100ml', price: 9.50 },
    { name: 'Z-BOOST 30 CAPS', price: 14.93 },
    { name: 'Z-BOOST 12 CAPS', price: 6.99 },
    { name: 'Hydralia Face cream 50ml', price: 8.90 },
    { name: 'REVITACELL PLUS FACE CREAM', price: 10.69 },
    { name: 'REVITACELL EYES LUCE', price: 10.10 },
    { name: 'Alveolair Sir', price: 7.65 },
    { name: 'NUTRI MX PROBIOTIC PREMIUM', price: 8.96 },
    { name: 'NUTRI MX MAGNESIUM +B6', price: 5.98 },
    { name: 'NUTRI MX A to Z', price: 6.51 },
    { name: 'NUTRI MX omega 3', price: 6.87 },
    { name: 'NUTRI MX JOINT', price: 10.16 },
    { name: 'ZARKOLIA Cosmetic Pack', price: 23.89 }
];

const productDetails = {
    "Z-DermAspis": {
        moa: [{ ing: "Ethanol 70% v/v", moa: "Μετουσίωση πρωτεϊνών & λύση λιπιδικής μεμβράνης παθογόνων." }, { ing: "PMD (Citriodora)", moa: "Φυσικός ανταγωνιστής OBPs. Αποκλείει τον εντοπισμό ξενιστή για 12h." }],
        cases: "Υγιεινή χεριών & προστασία από έντομα (σκνίπες, κουνούπια, τσιμπούρια).",
        rationale: "Dual-Action αντισηψία και απώθηση σε μία εφαρμογή.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Z-boost%2012%20caps.jpg?raw=true"
    },
    "TOTAL REPAIR CREAM": {
        moa: [
            { ing: "Centella Asiatica", moa: "<strong>SMAD Signaling:</strong> Διεγείρει τη βιοσύνθεση Κολλαγόνου Ι & III μέσω TGF-β." },
            { ing: "Multi-MW Hyaluronic", moa: "<strong>ECM Scaffold:</strong> Τρισδιάστατο ικρίωμα για ταχεία ιστική αναγέννηση." },
            { ing: "Sea Buckthorn Oil", moa: "Υψηλή συγκέντρωση Ω-7 για δομική σταθεροποίηση νέων κυτταρικών μεμβρανών." }
        ],
        cases: "Μετεγχειρητικές τομές, διαβητικά έλκη, εγκαύματα 2ου βαθμού, ουλές ακμής.",
        rationale: "Κλινική αναδόμηση του χορίου σε βάθος. Αποτροπή χηλοειδών.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zplast%20Total%20Repair.jpeg?raw=true",
        biblio: ["Bylka W (2013). PubMed:24386321"]
    },
    "ZPLAST CREAM": {
        moa: [{ ing: "Μαστίχα & Μέλι", moa: "<strong>TGF-β Induction:</strong> Φυσική διέγερση επούλωσης & αντισηψία."}, { ing: "Καλαμίνη", moa: "<strong>Anti-pruritic:</strong> Καταστολή κνησμού & φλεγμονής." }],
        cases: "Συγκάματα βρεφών, ηλιακά εγκαύματα, προστασία από κατακλίσεις.",
        rationale: "100% φυτική προστασία φραγμού για ευαίσθητα δέρματα.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/ZplastCream%2040gr.jpg?raw=true"
    },
    "Bruise Off": {
        moa: [{ ing: "Arnica (Helenalin)", moa: "<strong>NF-κB Inhibition:</strong> Διακοπή μεταγραφής προ-φλεγμονωδών κυτταροκινών." }, { ing: "Urea", moa: "<strong>Penetration Enhancer:</strong> Διασφάλιση βαθιάς διείσδυσης στο αιμάτωμα." }],
        cases: "Μελανιές (Botox/Fillers), αιματώματα, οιδήματα, μυϊκοί πόνοι.",
        rationale: "Επιταχύνει τον μεταβολισμό του αίματος στον ιστό κατά 3 φορές.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Bruise%20Off%20Bite%20Out%20&%20Pain%20Free%20cream.jpg?raw=true",
        biblio: ["Lyss G (1998). PubMed:9531637"]
    },
    "Z-BOOST": {
        moa: [{ ing: "Zinc", moa: "Άμεση αναστολή της <strong>RNA πολυμεράσης</strong> των ιών." }, { ing: "NAC", moa: "<strong>GSH Precursor:</strong> Σύνθεση ενδογενούς Γλουταθειόνης (Redox)." }],
        cases: "Πρόληψη γρίπης, ανάρρωση, οξειδωτικό στρες.",
        rationale: "Ολιστική Redox θωράκιση ανοσοποιητικού.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Z-boost%2030%20caps.jpg?raw=true"
    },
    "Hydralia": {
        moa: [{ ing: "LMW Hyaluronic", moa: "Διείσδυση στη βασική στοιβάδα για βαθιά ενυδάτωση." }, { ing: "Jojoba Oil", moa: "Βιομιμητικά λιπίδια που μειώνουν το TEWL." }],
        cases: "Αφυδατωμένο δέρμα, θαμπή όψη, Plumping Effect.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Hydralia%20Face%20Cream%2050ml.jpg?raw=true"
    },
    "REVITACELL PLUS": {
        moa: [{ ing: "Mastic Oil", moa: "<strong>Klotho Gene Induction:</strong> Ενεργοποίηση πρωτεΐνης μακροζωίας." }, { ing: "Ω-5", moa: "MMP-1 inhibition για προστασία κολλαγόνου." }],
        cases: "Ώριμο δέρμα (45+), επιγενετική αντιγήρανση.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Revitacell%20Plus%20Face%20cream%2050ml.jpg?raw=true"
    },
    "EYES LUCE": {
        moa: [{ ing: "Escin", moa: "Μείωση διαπερατότητας τριχοειδών (μείωση οιδήματος)." }, { ing: "Arnica Extract", moa: "Αποδόμηση αίμης για εξαφάνιση μαύρων κύκλων." }],
        cases: "Μαύροι κύκλοι, σακούλες, κουρασμένο βλέμμα.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Revitace%20Eyes%20cream%20Luce%2030ml.jpg?raw=true"
    },
    "PROBIOTIC PREMIUM": {
        moa: [{ ing: "18 Strains (10B CFU)", moa: "<strong>Competitive Exclusion:</strong> Αποκλεισμός παθογόνων στο επιθήλιο." }, { ing: "Butyrate Synthesis", moa: "Θρέψη κολονοκυττάρων μέσω SCFA." }],
        cases: "Αντιβιοτικά, IBS, φουσκώματα, εντερική δυσβίωση.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20PROBIOTIC%20PREMIUM.jpg?raw=true"
    },
    "MAGNESIUM +B6": {
        moa: [{ ing: "Magnesium & B6", moa: "<strong>NMDA Modulation:</strong> Ρύθμιση νευρομυϊκής διεγερσιμότητας." }],
        cases: "Κράμπες, άγχος, αϋπνία, PMS.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20MAGNESIUM%201%20%CE%A4%CE%B5%CE%BC.jpg?raw=true"
    },
    "Alveolair Sir": {
        moa: [{ ing: "Thymus & Althaea", moa: "Secretolytic & προστατευτικό βιο-φίλμ στο λαιμό." }, { ing: "Eucalyptus", moa: "Bronchospasmolysis & απόχρεμψη." }],
        cases: "Παραγωγικός/ξηρός βήχος, πονόλαιμος.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Alveolair%20Sir.jpg?raw=true"
    },
    "A to Z": {
        moa: [{ ing: "24 Nutrients", moa: "Διατήρηση μεταβολικής ομοιόστασης." }],
        cases: "Κόπωση, ενίσχυση μεταβολισμού.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20A-Z.jpg?raw=true"
    },
    "omega 3": {
        moa: [{ ing: "EPA/DHA", moa: "<strong>Resolvins:</strong> Επίλυση φλεγμονής στο καρδιαγγειακό." }],
        cases: "Υπερτριγλυκεριδαιμία, καρδιαγγειακή προστασία.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20OMEGA%203.jpg?raw=true"
    },
    "JOINT": {
        moa: [{ ing: "Col II & MSM", moa: "Δομική αναπλήρωση χόνδρου & θειούχοι δεσμοί." }, { ing: "Glucosamine", moa: "Βιοσύνθεση αγρεκάνης για λίπανση." }],
        cases: "Οστεοαρθρίτιδα, αθλητές.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20JOINT.jpg?raw=true"
    },
    "Cosmetic Pack": {
        moa: [{ ing: "Synergy", moa: "Συνδυασμένη δράση Hydralia & Revitacell." }],
        cases: "Ολοκληρωμένη αντιγήρανση & ενυδάτωση.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zarkolia%20Cosmetic%20pack.jpg?raw=true"
    }
};
