// ============================================================
// ZARKOLIA HEALTH - SUPREME SCIENTIFIC DATABASE v45.0
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
        moa: [
            { ing: "Ethanol 70% v/v", moa: "Άμεση μετουσίωση πρωτεϊνών του καψιδίου των ιών και λύση της λιπιδικής μεμβράνης των βακτηρίων." },
            { ing: "PMD (Citriodora)", moa: "Φυσικός ανταγωνιστής των πρωτεϊνών δέσμευσης οσμών (OBPs) των εντόμων. Αποκλείει τον εντοπισμό του ξενιστή (άνθρωπος) για 12 ώρες." }
        ],
        cases: "Υγιεινή χεριών σε εξωτερικούς χώρους, προστασία από κουνούπια, σκνίπες και έντομα που μεταφέρουν παθογόνα.",
        rationale: "Μοναδικό σκεύασμα Dual-Action. Παρέχει ταυτόχρονη αντισηψία και απώθηση.",
        biblio: ["Carroll SP (2006). <a href='https://pubmed.ncbi.nlm.nih.gov/16492330/' target='_blank'>PubMed:16492330</a>"],
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Z-boost%2012%20caps.jpg?raw=true"
    },
    "TOTAL REPAIR CREAM": {
        moa: [
            { ing: "Centella Asiatica", moa: "<strong>SMAD Signaling:</strong> Ενεργοποιεί το μονοπάτι TGF-β/SMAD, αυξάνοντας την παραγωγή Κολλαγόνου Ι & III και ελαστίνης κατά 40%." },
            { ing: "Multi-MW Hyaluronic", moa: "<strong>ECM Scaffold:</strong> Δημιουργεί τρισδιάστατο ικρίωμα (Matrix) που διευκολύνει τη μετανάστευση των ινοβλαστών στην πληγή." },
            { ing: "Sea Buckthorn Oil", moa: "Υψηλή συγκέντρωση Ω-7 (Παλμιτολεϊκό οξύ) για τη δομική σταθεροποίηση των νέων κυτταρικών μεμβρανών." }
        ],
        cases: "Μετεγχειρητικές τομές, διαβητικά έλκη, εγκαύματα 2ου βαθμού, βαθιές ραγάδες, ουλές ακμής.",
        rationale: "Δεν προσφέρει απλή επούλωση, αλλά <strong>ιστική αναδόμηση</strong>. Αποτρέπει το σχηματισμό χηλοειδών.",
        biblio: ["Bylka W (2013). <a href='https://pubmed.ncbi.nlm.nih.gov/24386321/' target='_blank'>PubMed:24386321</a>"],
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zplast%20Total%20Repair.jpeg?raw=true"
    },
    "ZPLAST CREAM": {
        moa: [
            { ing: "Μαστίχα Χίου & Μέλι", moa: "<strong>TGF-β Induction:</strong> Φυσική διέγερση της ανάπλασης και δημιουργία υγροσκοπικού αντισηπτικού φιλμ." },
            { ing: "Καλαμίνη", moa: "<strong>Anti-pruritic:</strong> Άμεση καταστολή του κνησμού μέσω μείωσης της ισταμινικής απόκρισης στο χόριο." }
        ],
        cases: "Συγκάματα βρεφών, ερεθισμοί μετά από έκθεση στον ήλιο, πρόληψη κατακλίσεων, ξηροδερμία.",
        rationale: "100% φυτική ασπίδα προστασίας φραγμού. Ιδανικό για καθημερινή χρήση σε ευαίσθητα δέρματα.",
        biblio: ["Paraschos S (2012). <a href='https://pubmed.ncbi.nlm.nih.gov/17544358/' target='_blank'>PubMed:17544358</a>"],
        img: "https://github.com/pzaro/my-order-form/blob/main/images/ZplastCream%2040gr.jpg?raw=true"
    },
    "Bruise Off": {
        moa: [
            { ing: "Arnica (Helenalin)", moa: "<strong>NF-κB Inhibition:</strong> Διακόπτει τη φλεγμονή στη ρίζα της, αναστέλλοντας τη μεταγραφή προ-φλεγμονωδών κυτταροκινών." },
            { ing: "Urea (Ουρία)", moa: "<strong>Penetration Enhancer:</strong> Διασπά τους δεσμούς κερατίνης, επιτρέποντας στα δραστικά να φτάσουν άμεσα στο αιμάτωμα." }
        ],
        cases: "Μελανιές μετά από Fillers/Botox, μετατραυματικά αιματώματα, οιδήματα, μυϊκοί πόνοι.",
        rationale: "Η Helenalin επιταχύνει τον μεταβολισμό του αίματος στον ιστό κατά 3 φορές.",
        biblio: ["Lyss G (1998). <a href='https://pubmed.ncbi.nlm.nih.gov/9531637/' target='_blank'>PubMed:9531637</a>"],
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Bruise%20Off%20Bite%20Out%20&%20Pain%20Free%20cream.jpg?raw=true"
    },
    "Z-BOOST": {
        moa: [
            { ing: "Zinc (Ψευδάργυρος)", moa: "Άμεση αναστολή της <strong>RNA πολυμεράσης</strong>, εμποδίζοντας τον πολλαπλασιασμό των ιών." },
            { ing: "NAC (N-Acetyl-Cysteine)", moa: "<strong>GSH Precursor:</strong> Παρέχει κυστεΐνη για τη σύνθεση της Γλουταθειόνης, του ισχυρότερου ενδογενούς αντιοξειδωτικού." }
        ],
        cases: "Πρόληψη γρίπης/ιώσεων, ανάρρωση από Covid-19, οξειδωτικό στρες, υποστήριξη καπνιστών.",
        biblio: ["Hemilä H (2017). <a href='https://pubmed.ncbi.nlm.nih.gov/28515951/' target='_blank'>PubMed:28515951</a>"],
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Z-boost%2030%20caps.jpg?raw=true"
    },
    "Hydralia": {
        moa: [{ ing: "LMW Hyaluronic", moa: "Χαμηλού μοριακού βάρους υαλουρονικό που συγκρατεί την υγρασία στον χόριο ιστό." }],
        cases: "Αφυδατωμένο δέρμα, θαμπή όψη, Plumping Effect.",
        biblio: ["Bukhari SNA (2018). <a href='https://pubmed.ncbi.nlm.nih.gov/30287358/' target='_blank'>PubMed:30287358</a>"],
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Hydralia%20Face%20Cream%2050ml.jpg?raw=true"
    },
    "REVITACELL PLUS": {
        moa: [{ ing: "Mastic Oil", moa: "<strong>Klotho Gene Induction:</strong> Ενεργοποιεί το γονίδιο Klotho (πρωτεΐνη μακροζωίας)." }],
        cases: "Ώριμο δέρμα (45+), απώλεια ελαστικότητας, επιγενετική αντιγήρανση.",
        biblio: ["Lall N (2020). <a href='https://pubmed.ncbi.nlm.nih.gov/32415148/' target='_blank'>PubMed:32415148</a>"],
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Revitacell%20Plus%20Face%20cream%2050ml.jpg?raw=true"
    },
    "EYES LUCE": {
        moa: [{ ing: "Escin (Εσκίνη)", moa: "Ενίσχυση φλεβικού τόνου και μείωση διαπερατότητας τριχοειδών (μείωση οιδήματος)." }],
        cases: "Μαύροι κύκλοι, σακούλες, κουρασμένο βλέμμα.",
        biblio: ["Gallelli L (2019). <a href='https://pubmed.ncbi.nlm.nih.gov/31562234/' target='_blank'>PubMed:31562234</a>"],
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Revitace%20Eyes%20cream%20Luce%2030ml.jpg?raw=true"
    },
    "PROBIOTIC PREMIUM": {
        moa: [{ ing: "18 Strains (10B CFU)", moa: "<strong>Competitive Exclusion:</strong> Αποκλεισμός παθογόνων στο εντερικό επιθήλιο." }],
        cases: "Αντιβιοτικά, IBS, φουσκώματα, δυσβίωση.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20PROBIOTIC%20PREMIUM.jpg?raw=true"
    },
    "MAGNESIUM +B6": {
        moa: [{ ing: "Magnesium & B6", moa: "<strong>NMDA Modulation:</strong> Ρύθμιση νευρομυϊκής διεγερσιμότητας (μυϊκή χαλάρωση)." }],
        cases: "Κράμπες, έντονο άγχος, αϋπνία, ημικρανίες, PMS.",
        biblio: ["EFSA Journal (2010). Magnesium and muscle function"],
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20MAGNESIUM%201%20%CE%A4%CE%B5%CE%BC.jpg?raw=true"
    },
    "JOINT": {
        moa: [{ ing: "Collagen II & MSM", moa: "Δομική αναπλήρωση του χόνδρινου ικριώματος και θειούχοι δεσμοί." }],
        cases: "Οστεοαρθρίτιδα, αθλητές, δυσκαμψία αρθρώσεων.",
        biblio: ["Lugo JP (2013). <a href='https://pubmed.ncbi.nlm.nih.gov/24153020/' target='_blank'>PubMed:24153020</a>"],
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20JOINT.jpg?raw=true"
    },
    "Alveolair Sir": {
        moa: [{ ing: "Thymus & Althaea", moa: "<strong>Secretolytic:</strong> Ρευστοποίηση βλέννας και προστατευτικό βιο-φιλμ στο λαιμό." }],
        cases: "Παραγωγικός και ξηρός βήχος, βρογχική αποσυμφόρηση, πονόλαιμος.",
        biblio: ["EMA Herbal Monograph on Thymus vulgaris"],
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Alveolair%20Sir.jpg?raw=true"
    },
    "A to Z": {
        moa: [{ ing: "24 Nutrients", moa: "Metabolic homeostasis και co-enzymatic activity." }],
        cases: "Αδυναμία, ελλιπής διατροφή, ενίσχυση μεταβολισμού.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20A-Z.jpg?raw=true"
    },
    "omega 3": {
        moa: [{ ing: "EPA/DHA", moa: "<strong>Resolvins:</strong> Ενεργή επίλυση της φλεγμονής στο καρδιαγγειακό." }],
        cases: "Υπερτριγλυκεριδαιμία, καρδιαγγειακή προστασία, γνωστική λειτουργία.",
        biblio: ["Calder PC (2013). <a href='https://pubmed.ncbi.nlm.nih.gov/23011457/' target='_blank'>PubMed:23011457</a>"],
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20OMEGA%203.jpg?raw=true"
    },
    "Cosmetic Pack": {
        moa: [{ ing: "Synergy", moa: "Συνδυασμένη δράση Hydralia και Revitacell για ολική ανάπλαση." }],
        cases: "Ολοκληρωμένη φροντίδα προσώπου, δώρο ομορφιάς.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zarkolia%20Cosmetic%20pack.jpg?raw=true"
    }
};
