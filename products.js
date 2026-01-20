// ============================================================
// ZARKOLIA HEALTH - ULTIMATE PRODUCT DATABASE v43.0
// ============================================================

// 1. ΠΛΗΡΗΣ ΛΙΣΤΑ ΠΡΟΪΟΝΤΩΝ ΚΑΙ ΤΙΜΩΝ
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

// 2. ΥΠΕΡΠΛΗΡΕΣ ΕΠΙΣΤΗΜΟΝΙΚΟ COMPENDIUM ΜΕ ΝΕΑ IMAGE LINKS
const productDetails = {
    "Z-DermAspis": {
        moa: [
            { ing: "Ethanol 70% v/v", moa: "Άμεση μετουσίωση πρωτεϊνών του καψιδίου των ιών και λύση της λιπιδικής μεμβράνης των βακτηρίων." },
            { ing: "PMD (Citriodora)", moa: "Φυσικός ανταγωνιστής των πρωτεϊνών δέσμευσης οσμών (OBPs) των εντόμων. Αποκλείει τον εντοπισμό του ξενιστή για 12 ώρες." }
        ],
        cases: "Υγιεινή χεριών σε εξωτερικούς χώρους, προστασία από κουνούπια, σκνίπες και έντομα.",
        rationale: "Μοναδικό σκεύασμα Dual-Action. Αντισηψία και 12ωρη απώθηση ταυτόχρονα.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Z-boost%2012%20caps.jpg?raw=true", // Default placeholder
        biblio: ["Carroll SP (2006). PubMed:16492330"]
    },
    "Zplast Total Repair": {
        moa: [
            { ing: "Centella Asiatica", moa: "<strong>SMAD Signaling:</strong> Ενεργοποιεί το μονοπάτι TGF-β/SMAD, αυξάνοντας την παραγωγή Κολλαγόνου Ι & III." },
            { ing: "Multi-MW Hyaluronic", moa: "<strong>ECM Scaffold:</strong> Δημιουργεί τρισδιάστατο ικρίωμα (Matrix) για την ιστική αναγέννηση." },
            { ing: "Sea Buckthorn Oil", moa: "Υψηλή συγκέντρωση Ω-7 για τη δομική σταθεροποίηση των κυτταρικών μεμβρανών." }
        ],
        cases: "Μετεγχειρητικές τομές, διαβητικά έλκη, εγκαύματα, βαθιές ραγάδες, ουλές ακμής.",
        rationale: "Ιστική αναδόμηση σε βάθος. Αποτρέπει τον σχηματισμό υπερτροφικών ουσιών.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zplast%20Total%20Repair.jpeg?raw=true",
        biblio: ["Bylka W (2013). PubMed:24386321"]
    },
    "ZplastCream": {
        moa: [
            { ing: "Μαστίχα Χίου & Μέλι", moa: "<strong>TGF-β Induction:</strong> Φυσική διέγερση της ανάπλασης και αντισηπτική προστασία." },
            { ing: "Καλαμίνη", moa: "<strong>Anti-pruritic:</strong> Άμεση καταστολή του κνησμού μέσω μείωσης της ισταμινικής απόκρισης." }
        ],
        cases: "Συγκάματα βρεφών, ηλιακά εγκαύματα, προστασία από κατακλίσεις, ξηροδερμία.",
        rationale: "100% φυτική ασπίδα προστασίας φραγμού για ευαίσθητα δέρματα.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/ZplastCream%2040gr.jpg?raw=true",
        biblio: ["Paraschos S (2012). PubMed:17544358"]
    },
    "Bruise Off": {
        moa: [
            { ing: "Arnica (Helenalin)", moa: "<strong>NF-κB Inhibition:</strong> Διακόπτει τη φλεγμονή στη ρίζα της, αναστέλλοντας προ-φλεγμονώδεις κυτταροκίνες." },
            { ing: "Urea (Ουρία)", moa: "<strong>Penetration Enhancer:</strong> Διασπά τους δεσμούς κερατίνης για άμεση διείσδυση στο αιμάτωμα." }
        ],
        cases: "Μελανιές μετά από Fillers, Botox, τραυματικά αιματώματα, οιδήματα.",
        rationale: "Επιταχύνει τον μεταβολισμό του αίματος στον ιστό κατά 3 φορές.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Bruise%20Off%20Bite%20Out%20&%20Pain%20Free%20cream.jpg?raw=true",
        biblio: ["Lyss G (1998). PubMed:9531637"]
    },
    "Z-boost": {
        moa: [
            { ing: "Zinc (Ψευδάργυρος)", moa: "Άμεση αναστολή της <strong>RNA πολυμεράσης</strong>, εμποδίζοντας τον πολλαπλασιασμό των ιών." },
            { ing: "NAC (N-Acetyl-Cysteine)", moa: "<strong>GSH Precursor:</strong> Σύνθεση Γλουταθειόνης, του ισχυρότερου ενδογενούς αντιοξειδωτικού." }
        ],
        cases: "Πρόληψη γρίπης, ανάρρωση από ιώσεις, οξειδωτικό στρες, καπνιστές.",
        rationale: "Ολιστική Redox θωράκιση του ανοσοποιητικού συστήματος.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Z-boost%2030%20caps.jpg?raw=true",
        biblio: ["Hemilä H (2017). PubMed:28515951"]
    },
    "Hydralia": {
        moa: [
            { ing: "LMW Hyaluronic Acid", moa: "Χαμηλού μοριακού βάρους υαλουρονικό που συγκρατεί την υγρασία στον χόριο ιστό." },
            { ing: "Jojoba Oil", moa: "Βιομιμητικά λιπίδια που αναπληρώνουν το σμήγμα και μειώνουν το TEWL." }
        ],
        cases: "Αφυδατωμένο δέρμα, θαμπή όψη, Plumping Effect (γέμισμα λεπτών γραμμών).",
        rationale: "Ρύθμιση υδροδυναμικής ισορροπίας της επιδερμίδας για άμεση σφριγηλότητα.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Hydralia%20Face%20Cream%2050ml.jpg?raw=true",
        biblio: ["Bukhari SNA (2018). PubMed:30287358"]
    },
    "Revitacell Plus": {
        moa: [
            { ing: "Mastic Oil", moa: "<strong>Klotho Gene Induction:</strong> Ενεργοποιεί την πρωτεΐνη μακροζωίας, αυξάνοντας τη βιωσιμότητα των ινοβλαστών." },
            { ing: "Ω-5 (Punicic Acid)", moa: "Προστατεύει το κολλαγόνο από την αποδόμηση των μεταλλοπρωτεϊνασών." }
        ],
        cases: "Ώριμο δέρμα (45+), απώλεια ελαστικότητας, επιγενετική αντιγήρανση.",
        rationale: "Επανεκπαιδεύει τα κύτταρα να λειτουργούν ως νεανικά κύτταρα.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Revitacell%20Plus%20Face%20cream%2050ml.jpg?raw=true",
        biblio: ["Lall N (2020). PubMed:32415148"]
    },
    "Revitace Eyes": {
        moa: [
            { ing: "Escin (Εσκίνη)", moa: "Ενίσχυση φλεβικού τόνου και μείωση διαπερατότητας τριχοειδών (μείωση οιδήματος)." },
            { ing: "Arnica Extract", moa: "Επιταχύνει την αποδόμηση της αίμης για την εξαφάνιση των μαύρων κύκλων." }
        ],
        cases: "Μαύροι κύκλοι, σακούλες, κουρασμένο βλέμμα, λεπτές γραμμές έκφρασης.",
        rationale: "Εξειδικευμένη δράση στη μικροκυκλοφορία της περιοχής των ματιών.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Revitace%20Eyes%20cream%20Luce%2030ml.jpg?raw=true",
        biblio: ["Gallelli L (2019). PubMed:31562234"]
    },
    "NUTRI MX PROBIOTIC PREMIUM": {
        moa: [
            { ing: "18 Strains (10B CFU)", moa: "<strong>Competitive Exclusion:</strong> Αποκλεισμός παθογόνων στο εντερικό επιθήλιο." },
            { ing: "Butyrate Synthesis", moa: "Ενίσχυση παραγωγής SCFA για τη θρέψη των κολονοκυττάρων." }
        ],
        cases: "Μετά από αντιβιοτικά, IBS, φουσκώματα, εντερική δυσβίωση.",
        rationale: "Η υψηλότερη ποικιλομορφία στελεχών (18) για ολική επαναφορά μικροβιώματος.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20PROBIOTIC%20PREMIUM.jpg?raw=true",
        biblio: ["Karamanolis GP (2019). Clinical Review."]
    },
    "NUTRI MX MAGNESIUM": {
        moa: [
            { ing: "Magnesium & B6", moa: "<strong>NMDA Modulation:</strong> Ρύθμιση νευρομυϊκής διεγερσιμότητας και μυϊκή χαλάρωση." }
        ],
        cases: "Κράμπες, άγχος, αϋπνία, ημικρανίες, PMS.",
        rationale: "Υψηλή βιοδιαθεσιμότητα για άμεση νευρική και μυϊκή χαλάρωση.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20MAGNESIUM%201%20%CE%A4%CE%B5%CE%BC.jpg?raw=true",
        biblio: ["EFSA Journal (2010)."]
    },
    "NUTRI MX JOINT": {
        moa: [
            { ing: "Collagen II & MSM", moa: "Δομική αναπλήρωση χόνδρινου ικριώματος και θειούχοι δεσμοί συνοχής." },
            { ing: "Glucosamine", moa: "Διέγερση σύνθεσης αγρεκάνης για λίπανση των αρθρώσεων." }
        ],
        cases: "Οστεοαρθρίτιδα, αθλητές (πρόληψη φθοράς), δυσκαμψία αρθρώσεων.",
        rationale: "Τριπλή δράση: Λίπανση, αναδόμηση χόνδρου και μείωση φλεγμονής.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20JOINT.jpg?raw=true",
        biblio: ["Lugo JP (2013). PubMed:24153020"]
    },
    "Alveolair Sir": {
        moa: [
            { ing: "Thymus & Althaea", moa: "<strong>Secretolytic:</strong> Ρευστοποίηση βλέννας και προστατευτικό βιο-φιλμ στο λαιμό." },
            { ing: "Eucalyptus & Pine", moa: "<strong>Bronchospasmolysis:</strong> Χαλαρώνει τους λείους μύες των βρόγχων." }
        ],
        cases: "Παραγωγικός και ξηρός βήχος, βρογχική αποσυμφόρηση, πονόλαιμος.",
        rationale: "Φυτική προσέγγιση ολικής προστασίας του ανώτερου αναπνευστικού.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Alveolair%20Sir.jpg?raw=true",
        biblio: ["EMA Herbal Monograph."]
    },
    "NUTRI MX A-Z": {
        moa: [{ ing: "24 Nutrients", moa: "Συνδυαστική δράση βιταμινών και μετάλλων για μεταβολική ομοιόσταση." }],
        cases: "Αδυναμία, ελλιπής διατροφή, ενίσχυση μεταβολισμού.",
        rationale: "Πλήρης κάλυψη ημερήσιων αναγκών με μία κάψουλα.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20A-Z.jpg?raw=true"
    },
    "NUTRI MX OMEGA 3": {
        moa: [{ ing: "EPA/DHA", moa: "<strong>Resolvins:</strong> Ενεργή επίλυση φλεγμονής και καρδιαγγειακή προστασία." }],
        cases: "Υπερλιπιδαιμία, καρδιαγγειακή υγεία, γνωστική λειτουργία.",
        rationale: "Μοριακή απόσταξη για μηδενικά βαρέα μέταλλα.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/NUTRI%20MX%20OMEGA%203.jpg?raw=true",
        biblio: ["Calder PC (2013). PubMed:23011457"]
    },
    "Zarkolia Cosmetic pack": {
        moa: [{ ing: "Synergistic Action", moa: "Συνδυασμένη δράση Hydralia και Revitacell για ολική ανάπλαση." }],
        cases: "Ολοκληρωμένη φροντίδα προσώπου, δώρο ομορφιάς.",
        rationale: "Κλινικό αποτέλεσμα υψηλής απόδοσης.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zarkolia%20Cosmetic%20pack.jpg?raw=true"
    }
};
