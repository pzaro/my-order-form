// ============================================================
// ZARKOLIA HEALTH - COMPLETE PRODUCT DATABASE v32.0
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
            { ing: "Ethanol 70% v/v", moa: "Άμεση μετουσίωση πρωτεϊνών του καψιδίου των ιών και λύση της λιπιδικής μεμβράνης των βακτηρίων." },
            { ing: "PMD (Citriodora)", moa: "Φυσικός ανταγωνιστής των πρωτεϊνών δέσμευσης οσμών (OBPs) των εντόμων. Αποκλείει τον εντοπισμό του ξενιστή (άνθρωπος) για 12 ώρες." }
        ],
        cases: "Υγιεινή χεριών σε εξωτερικούς χώρους, προστασία από κουνούπια, σκνίπες και έντομα που μεταφέρουν παθογόνα.",
        rationale: "Μοναδικό σκεύασμα Dual-Action. Παρέχει ταυτόχρονη αντισηψία και απώθηση, εξοικονομώντας χρόνο και κόστος στον καταναλωτή.",
        biblio: ["Carroll SP (2006). PMD as a repellent. <a href='https://pubmed.ncbi.nlm.nih.gov/16492330/' target='_blank'>PubMed:16492330</a>"]
    },
    "Zplast Total Repair": {
        moa: [
            { ing: "Centella Asiatica", moa: "<strong>SMAD Signaling:</strong> Ενεργοποιεί το μονοπάτι TGF-β/SMAD, αυξάνοντας την παραγωγή Κολλαγόνου Ι & III και ελαστίνης κατά 40%." },
            { ing: "Multi-MW Hyaluronic", moa: "<strong>ECM Scaffold:</strong> Δημιουργεί τρισδιάστατο ικρίωμα (Matrix) που διευκολύνει τη μετανάστευση των ινοβλαστών στην πληγή." },
            { ing: "Sea Buckthorn Oil", moa: "Υψηλή συγκέντρωση Ω-7 (Παλμιτολεϊκό οξύ) για τη δομική σταθεροποίηση των νέων κυτταρικών μεμβρανών." }
        ],
        cases: "Μετεγχειρητικές τομές, διαβητικά έλκη, εγκαύματα 2ου βαθμού, βαθιές ραγάδες, ουλές ακμής, δερματικά μοσχεύματα.",
        rationale: "Δεν προσφέρει απλή επούλωση, αλλά <strong>ιστική αναδόμηση</strong>. Αποτρέπει το σχηματισμό υπερτροφικών ουσιών και χηλοειδών.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zplast%20Total%20Repair.jpeg?raw=true",
        biblio: ["Bylka W (2013). Centella in dermatology. <a href='https://pubmed.ncbi.nlm.nih.gov/24386321/' target='_blank'>PubMed:24386321</a>", "Wohlrab J (2018). Clinical review of wound healing."]
    },
    "ZplastCream": {
        moa: [
            { ing: "Μαστίχα Χίου & Μέλι", moa: "<strong>TGF-β Induction:</strong> Φυσική διέγερση της ανάπλασης και δημιουργία υγροσκοπικού αντισηπτικού φιλμ." },
            { ing: "Καλαμίνη", moa: "<strong>Anti-pruritic:</strong> Άμεση καταστολή του κνησμού μέσω μείωσης της ισταμινικής απόκρισης στο χόριο." },
            { ing: "Σπαθόλαδο", moa: "Υπερφορίνη & Υπερικίνη για ισχυρή καταστολή των ελεύθερων ριζών και αντιφλεγμονώδη δράση." }
        ],
        cases: "Συγκάματα βρεφών, ερεθισμοί μετά από έκθεση στον ήλιο, πρόληψη κατακλίσεων σε κλινήρεις ασθενείς, ξηροδερμία.",
        rationale: "100% φυτική ασπίδα προστασίας φραγμού. Ιδανικό για καθημερινή χρήση σε ευαίσθητα δέρματα (παιδιατρική/γηριατρική).",
        biblio: ["Paraschos S (2012). Mastic oil review. <a href='https://pubmed.ncbi.nlm.nih.gov/17544358/' target='_blank'>PubMed:17544358</a>"]
    },
    "Bruise Off": {
        moa: [
            { ing: "Arnica (Helenalin)", moa: "<strong>NF-κB Inhibition:</strong> Διακόπτει τη φλεγμονή στη ρίζα της, αναστέλλοντας τη μεταγραφή προ-φλεγμονωδών κυτταροκινών (IL-1, TNF-α)." },
            { ing: "Urea (Ουρία)", moa: "<strong>Penetration Enhancer:</strong> Διασπά τους δεσμούς κερατίνης, επιτρέποντας στα δραστικά συστατικά να φτάσουν άμεσα στο αιμάτωμα." },
            { ing: "Carvacrol", moa: "Ενεργοποιεί τους TRPV1 υποδοχείς προκαλώντας τοπική υπεραιμία για ταχύτερη απορρόφηση του οιδήματος." }
        ],
        cases: "Μελανιές μετά από Fillers, Botox ή Μεσοθεραπεία, μετατραυματικά αιματώματα, οιδήματα, μυϊκοί πόνοι.",
        rationale: "Η Helenalin είναι το πιο ισχυρό φυσικό αντιφλεγμονώδες. Επιταχύνει τον μεταβολισμό του αίματος στον ιστό κατά 3 φορές.",
        biblio: ["Lyss G (1998). Helenalin mechanism. <a href='https://pubmed.ncbi.nlm.nih.gov/9531637/' target='_blank'>PubMed:9531637</a>"]
    },
    "Z-boost": {
        moa: [
            { ing: "Zinc (Ψευδάργυρος)", moa: "Άμεση αναστολή της <strong>RNA πολυμεράσης</strong>, εμποδίζοντας τον πολλαπλασιασμό των ιών στο ρινοφάρυγγα." },
            { ing: "NAC (N-Acetyl-Cysteine)", moa: "<strong>GSH Precursor:</strong> Παρέχει το αμινοξύ κυστεΐνη για τη σύνθεση της Γλουταθειόνης, του ισχυρότερου ενδογενούς αντιοξειδωτικού." },
            { ing: "CoQ10 & Gingerols", moa: "Ενίσχυση της μιτοχονδριακής παραγωγής ATP και διπλή αναστολή των μονοπατιών COX-2 και 5-LOX." }
        ],
        cases: "Πρόληψη γρίπης/ιώσεων, ανάρρωση από Covid-19, οξειδωτικό στρες, υποστήριξη πνευμονικής λειτουργίας σε καπνιστές.",
        rationale: "Ολιστική θωράκιση χωρίς έκδοχα (sugar-free, gluten-free). Προσεγγίζει το ανοσοποιητικό από το επίπεδο του DNA και της ενέργειας.",
        biblio: ["Hemilä H (2017). Zinc and Colds. <a href='https://pubmed.ncbi.nlm.nih.gov/28515951/' target='_blank'>PubMed:28515951</a>"]
    },
    "Hydralia Face cream": {
        moa: [
            { ing: "LMW Hyaluronic Acid", moa: "Χαμηλού μοριακού βάρους υαλουρονικό που διεισδύει στη βασική στοιβάδα, συγκρατώντας την υγρασία στον χόριο ιστό." },
            { ing: "Jojoba Oil", moa: "Βιομιμητικά λιπίδια που αναπληρώνουν το σμήγμα, μειώνοντας τη διαδερμική απώλεια ύδατος (TEWL)." }
        ],
        cases: "Αφυδατωμένο δέρμα, θαμπή όψη, Plumping Effect (γέμισμα λεπτών γραμμών), μετά από δερματολογικά peelings.",
        rationale: "Ρύθμιση υδροδυναμικής ισορροπίας της επιδερμίδας για άμεση οπτική βελτίωση και βαθιά θρέψη.",
        biblio: ["Bukhari SNA (2018). HA Review. <a href='https://pubmed.ncbi.nlm.nih.gov/30287358/' target='_blank'>PubMed:30287358</a>"]
    },
    "Revitacell Plus": {
        moa: [
            { ing: "Mastic Oil", moa: "<strong>Klotho Gene Induction:</strong> Ενεργοποιεί το γονίδιο Klotho (πρωτεΐνη μακροζωίας), αυξάνοντας τη βιωσιμότητα των ινοβλαστών." },
            { ing: "Ω-5 (Punicic Acid)", moa: "Προστατεύει το κολλαγόνο από την αποδόμηση των μεταλλοπρωτεϊνασών (MMP-1)." }
        ],
        cases: "Ώριμο δέρμα (45+), απώλεια ελαστικότητας, φωτογήρανση, ανάγκη για επιγενετική αντιγήρανση.",
        rationale: "Δεν καλύπτει τις ρυτίδες, αλλά επανεκπαιδεύει τα κύτταρα να λειτουργούν ως νεανικά κύτταρα.",
        biblio: ["Lall N (2020). Epigenetic aging. <a href='https://pubmed.ncbi.nlm.nih.gov/32415148/' target='_blank'>PubMed:32415148</a>"]
    },
    "NUTRI MX PROBIOTIC PREMIUM": {
        moa: [
            { ing: "18 Strains (10B CFU)", moa: "<strong>Competitive Exclusion:</strong> Καταλαμβάνουν τους υποδοχείς στο εντερικό επιθήλιο, εμποδίζοντας την προσκόλληση παθογόνων." },
            { ing: "Butyrate Synthesis", moa: "Ενισχύει την παραγωγή λιπαρών οξέων βραχείας αλύσου (SCFA) για τη θρέψη των κολονοκυττάρων." }
        ],
        cases: "Μετά από αντιβιοτική θεραπεία, σύνδρομο ευερέθιστου εντέρου (IBS), φουσκώματα, ενίσχυση Tregs για αυτοάνοσα.",
        rationale: "Η υψηλότερη ποικιλομορφία στελεχών στην αγορά (18 στελέχη) διασφαλίζει την ολική επαναφορά του μικροβιώματος.",
        biblio: ["Karamanolis GP (2019). Clinical review on probiotics."]
    },
    "NUTRI MX JOINT": {
        moa: [
            { ing: "Collagen II & MSM", moa: "Παροχή δομικού υλικού για το εξωκυττάριο ικρίωμα του χόνδρου. Το MSM προσφέρει θειούχους δεσμούς για τη συνοχή του συνδετικού ιστού." },
            { ing: "Glucosamine/Chondroitin", moa: "<strong>GAG Precursors:</strong> Διεγείρουν τη βιοσύνθεση γλυκοζαμινογλυκανών και αγρεκάνης." }
        ],
        cases: "Οστεοαρθρίτιδα, αθλητές (πρόληψη φθοράς), δυσκαμψία αρθρώσεων, αποκατάσταση τραυματισμών.",
        rationale: "Τριπλή δράση: Λίπανση, αναδόμηση χόνδρου και μείωση της φλεγμονής χωρίς παρενέργειες ΜΣΑΦ.",
        biblio: ["Lugo JP (2013). Native Collagen II. <a href='https://pubmed.ncbi.nlm.nih.gov/24153020/' target='_blank'>PubMed:24153020</a>"]
    },
    "Alveolair Sir": {
        moa: [
            { ing: "Thymus & Althaea", moa: "<strong>Secretolytic:</strong> Ρευστοποιεί τη βλέννα και δημιουργεί προστατευτικό βιο-φιλμ στο βλεννογόνο του λαιμού." },
            { ing: "Eucalyptus & Pine", moa: "<strong>Bronchospasmolysis:</strong> Χαλαρώνει τους λείους μύες των βρόγχων, διευκολύνοντας την αναπνοή." }
        ],
        cases: "Παραγωγικός και ξηρός βήχος, βρογχική αποσυμφόρηση, πονόλαιμος, κρυολόγημα.",
        rationale: "Φυτική προσέγγιση που συνδυάζει την αποβολή των εκκρίσεων με την άμεση ανακούφιση του ερεθισμένου βλεννογόνου.",
        biblio: ["EMA Herbal Monograph on Thymus vulgaris."]
    },
    "NUTRI MX OMEGA 3": {
        moa: [
            { ing: "EPA/DHA (High Purity)", moa: "<strong>Resolvins/Protectins:</strong> Μετατρέπονται σε ενεργούς μεταβολίτες που επιλύουν τη φλεγμονή στο καρδιαγγειακό και νευρικό σύστημα." }
        ],
        cases: "Υπερτριγλυκεριδαιμία, καρδιαγγειακή προστασία, βελτίωση γνωστικής λειτουργίας, ξηροφθαλμία.",
        rationale: "Μοριακή απόσταξη (Molecular Distillation) που εγγυάται μηδενικά βαρέα μέταλλα και μέγιστη απορρόφηση.",
        biblio: ["Calder PC (2013). Omega-3 logic. <a href='https://pubmed.ncbi.nlm.nih.gov/23011457/' target='_blank'>PubMed:23011457</a>"]
    },
    "NUTRI MX MAGNESIUM": {
        moa: [
            { ing: "Magnesium & B6", moa: "<strong>NMDA Modulation:</strong> Ρύθμιση νευρομυϊκής διεγερσιμότητας, προκαλώντας μυϊκή και νευρική χαλάρωση." }
        ],
        cases: "Νυχτερινές κράμπες, έντονο άγχος, αϋπνία, ημικρανίες, προεμμηνορροϊκό σύνδρομο (PMS).",
        rationale: "Συνδυασμός με Β6 για μέγιστη ενδοκυττάρια βιοδιαθεσιμότητα του μαγνησίου.",
        biblio: ["EFSA Journal (2010). Magnesium and muscle function."]
    }
};
