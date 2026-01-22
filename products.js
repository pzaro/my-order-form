/**
 * ZARKOLIA HEALTH - Full Product Compendium (v63.0)
 * Περιλαμβάνει πλήρη επιστημονική τεκμηρίωση και τιμολογιακή πολιτική.
 */

const PRODUCTS_DATA = [
    {
        id: "alveolair-sir",
        name: "Alveolair Sir",
        price: 18.50,
        category: "Respiratory Support",
        moa: "Τριπλή δράση στο αναπνευστικό σύστημα: 1) Βλεννολυτική μέσω διάσπασης των δισουλφιδικών δεσμών των βλεννοπρωτεϊνών, 2) Αποχρεμπτική μέσω ενίσχυσης της κροσσωτής κάθαρσης και 3) Βρογχοδιασταλτική μέσω χαλάρωσης των λείων μυϊκών ινών.",
        formula: "N-Acetylcysteine 600mg, Hedera Helix extract (10% Saponins), Thymus Vulgaris.",
        innovation: "Τεχνολογία ελεγχόμενης αποδέσμευσης για σταθερά επίπεδα NAC στο πλάσμα επί 12 ώρες."
    },
    {
        id: "z-boost",
        name: "Z-boost Immune",
        price: 24.90,
        category: "Immune System",
        moa: "Ενεργοποίηση της ενδογενούς ανοσολογικής απόκρισης μέσω του άξονα Ψευδαργύρου-Βιταμίνης C. Ενισχύει τη δραστικότητα των μακροφάγων και των NK-κυττάρων (Natural Killers).",
        formula: "Liposomal Vitamin C 1000mg, Zinc Picolinate 15mg, Standardized Propolis (Galangin 12%).",
        innovation: "Λιποσωμιακή τεχνολογία για 400% υψηλότερη απορρόφηση σε σχέση με τις κοινές μορφές βιταμίνης C."
    },
    {
        id: "zplast",
        name: "Zplast Hydrogel",
        price: 12.00,
        category: "Advanced Wound Care",
        moa: "Δημιουργία βέλτιστου υγρού περιβάλλοντος (Moist Wound Healing). Τα ιόντα $Ag^{+}$ δρουν προληπτικά κατά του βακτηριακού αποικισμού διασπώντας το κυτταρικό τοίχωμα των παθογόνων.",
        formula: "Cross-linked Polyurethane, Hydrocolloid particles, Ionic Silver $Ag^{+}$. ",
        innovation: "Smart-pore Technology: Επιτρέπει τη διαπνοή ενώ εμποδίζει την είσοδο νερού και μικροβίων."
    },
    {
        id: "bruise-off",
        name: "Bruise Off Gel",
        price: 15.80,
        category: "Topical Recovery",
        moa: "Άμεση παρέμβαση στο φλεγμονώδες οίδημα. Η Εσκίνη (Escin) μειώνει τη διαπερατότητα των τριχοειδών αγγείων, ενώ η Arnica Montana επιταχύνει την επαναρρόφηση των αιματωμάτων.",
        formula: "Arnica Montana (High Potency 10%), Escin, Bromelain 2500 GDU, Menthol.",
        innovation: "Nano-emulsion base για διείσδυση των δραστικών συστατικών εντός 60 δευτερολέπτων."
    },
    {
        id: "d-vit-5000",
        name: "D-vit 5000iu Gold",
        price: 19.20,
        category: "Essential Supplements",
        moa: "Σύνδεση με τον υποδοχέα VDR (Vitamin D Receptor). Ρυθμίζει την ομοιόσταση ασβεστίου-φωσφόρου και ενισχύει την παραγωγή αντιμικροβιακών πεπτιδίων.",
        formula: "Cholecalciferol ($D_{3}$) 5000iu, Extra Virgin Olive Oil carrier, Vitamin $K_{2}$ (MK-7).",
        innovation: "Oil-based delivery system για μέγιστη λιποδιαλυτή βιοδιαθεσιμότητα χωρίς ανάγκη λήψης γεύματος."
    },
    {
        id: "z-mag-triple",
        name: "Z-Mag Triple Action",
        price: 21.50,
        category: "Neuromuscular Support",
        moa: "Συνδυασμός τριών μορφών μαγνησίου για πλήρη κυτταρική κάλυψη: Bisglycinate (νευρικό σύστημα), Citrate (μύες) και Malate (παραγωγή ενέργειας ATP).",
        formula: "Magnesium Bisglycinate, Magnesium Citrate, Magnesium Malate + Vitamin $B_{6}$ (P-5-P).",
        innovation: "Chelated Amino Acid Complex που εξαλείφει πλήρως τις γαστρεντερικές διαταραχές."
    },
    {
        id: "omega3-ultra",
        name: "Omega-3 Ultra Pure",
        price: 32.00,
        category: "Cardiovascular Health",
        moa: "Μείωση των επιπέδων τριγλυκεριδίων VLDL και προστασία του ενδοθηλίου. Βελτίωση της ρευστότητας των κυτταρικών μεμβρανών στον εγκέφαλο.",
        formula: "Concentrated Fish Oil 1200mg (EPA 500mg / DHA 250mg), Φυσική Βιταμίνη E.",
        innovation: "Μοριακή απόσταξη (Molecular Distillation) για μηδενικά επίπεδα βαρέων μετάλλων και διοξινών."
    },
    {
        id: "probio-max",
        name: "Probio-Max 50B",
        price: 28.50,
        category: "Digestive Innovation",
        moa: "Αποκατάσταση της μικροβιακής χλωρίδας (Microbiome) και ενίσχυση του εντερικού φραγμού. Ανταγωνιστική αναστολή της ανάπτυξης παθογόνων μικροοργανισμών.",
        formula: "12 εξειδικευμένα στελέχη (Lactobacillus, Bifidobacterium), 50 Billion CFU, Inulin Prebiotic.",
        innovation: "Acid-resistant DRcaps® που διασφαλίζουν την επιβίωση των στελεχών από το γαστρικό οξύ."
    },
    {
        id: "joint-fix",
        name: "Joint-Fix Collagen",
        price: 35.00,
        category: "Joints & Cartilage",
        moa: "Διέγερση της παραγωγής χονδροκυττάρων και μείωση της φλεγμονής του αρθρικού υμένα μέσω της αναστολής των μεταλλοπρωτεϊνασών.",
        formula: "Hydrolyzed Collagen Type II, Glucosamine Sulfate, Chondroitin, MSM, Hyaluronic Acid.",
        innovation: "Bioactive Collagen Peptides χαμηλού μοριακού βάρους για άμεση ενσωμάτωση στον χόνδρο."
    },
    {
        id: "sleep-well",
        name: "Sleep-Well Melatonin",
        price: 14.50,
        category: "CNS & Sleep",
        moa: "Επαγωγή του φυσιολογικού ύπνου μέσω της ρύθμισης του κιρκάδιου ρυθμού. Η συνεργιστική δράση με την Βαλεριάνα μειώνει τα επίπεδα κορτιζόλης.",
        formula: "Melatonin 1mg, Valeriana Officinalis extract, Passiflora, Vitamin $B_{6}$.",
        innovation: "Sublingual Micro-tablets για απορρόφηση από τον υπογλώσσιο βλεννογόνο εντός 5 λεπτών."
    },
    {
        id: "iron-fe",
        name: "Iron-Fe Bisglycinate",
        price: 17.00,
        category: "Blood Support",
        moa: "Αποκατάσταση των επιπέδων φερριτίνης και αιμοσφαιρίνης. Η δισγλυκινική μορφή δεν οξειδώνεται στο έντερο, προλαμβάνοντας τη δυσκοιλιότητα.",
        formula: "Ferrous Bisglycinate 25mg, Vitamin C (ως Ester-C), Folic Acid (Quatrefolic®).",
        innovation: "Non-constipating φόρμουλα με μέγιστη γαστρεντερική ανοχή και απορρόφηση."
    },
    {
        id: "b-complex-act",
        name: "B-Complex Active",
        price: 22.00,
        category: "Metabolic Energy",
        moa: "Κεντρικός ρόλος στον κύκλο του Krebs για την παραγωγή ενέργειας. Υποστήριξη της σύνθεσης νευροδιαβιβαστών και της μυελίνης.",
        formula: "Πλήρες φάσμα βιταμινών B σε ενεργές μεθυλιωμένες μορφές (Methylcobalamin, 5-MTHF).",
        innovation: "Active Co-enzyme forms που παρακάμπτουν τις γενετικές μεταλλάξεις (π.χ. MTHFR)."
    },
    {
        id: "eye-protect",
        name: "Eye-Protect Lutein",
        price: 26.00,
        category: "Vision & Retina",
        moa: "Προστασία των φωτοϋποδοχέων της ωχράς κηλίδας. Φιλτράρισμα της επιβλαβούς μπλε ακτινοβολίας και εξουδετέρωση ελευθέρων ριζών.",
        formula: "Lutein 20mg, Zeaxanthin 4mg, Astaxanthin, Vitamin A, Zinc.",
        innovation: "Blue-Light Filtration Technology μέσω της υψηλότερης συγκέντρωσης καροτενοειδών στην αγορά."
    },
    {
        id: "hepa-clean",
        name: "Hepa-Clean Silymarin",
        price: 23.50,
        category: "Liver Detox",
        moa: "Ενίσχυση της πρωτεϊνοσύνθεσης στα ηπατοκύτταρα και σταθεροποίηση της κυτταρικής μεμβράνης του ήπατος έναντι τοξινών.",
        formula: "Milk Thistle (Standardized 80% Silymarin), Artichoke extract, Turmeric (Curcumin).",
        innovation: "Phytosome™ Technology που αυξάνει τη βιοδιαθεσιμότητα της σιλυμαρίνης κατά 10 φορές."
    },
    {
        id: "hair-skin",
        name: "Hair-Skin-Nails",
        price: 19.80,
        category: "Beauty & Dermaceuticals",
        moa: "Ενίσχυση της δομής της κερατίνης και του κολλαγόνου. Βελτίωση της μικροκυκλοφορίας του τριχωτού της κεφαλής.",
        formula: "Biotin 10.000mcg, Zinc, Selenium, L-Cysteine, Bamboo Silica.",
        innovation: "Synergistic Keratin-Boost Complex για ορατή βελτίωση της πυκνότητας σε 30 ημέρες."
    },
    {
        id: "antiox-coq10",
        name: "Antiox-CoQ10",
        price: 29.00,
        category: "Cellular Energy",
        moa: "Κρίσιμος παράγοντας στη μιτοχονδριακή αλυσίδα μεταφοράς ηλεκτρονίων. Προστασία της LDL χοληστερόλης από την οξείδωση.",
        formula: "Coenzyme $Q_{10}$ (Ubiquinone) 200mg, Φυσική Βιταμίνη E.",
        innovation: "Micro-crystalline Coenzyme $Q_{10}$ για σταθερή απορρόφηση ανεξάρτητα από τη λιπαρότητα του γεύματος."
    },
    {
        id: "calm-ashwa",
        name: "Calm-Ashwagandha",
        price: 21.00,
        category: "Adaptogenic Support",
        moa: "Ρύθμιση του άξονα HPA (Υποθάλαμος-Υπόφυση-Επινεφρίδια). Μείωση της κορτιζόλης και ενίσχυση της αντοχής στο ψυχολογικό στρες.",
        formula: "KSM-66 Ashwagandha® extract (5% Withanolides), Magnesium, Vitamin $B_{12}$.",
        innovation: "Full-spectrum extract που διατηρεί τη φυσική ισορροπία των συστατικών της ρίζας."
    },
    {
        id: "vit-k2-mk7",
        name: "Vitamin $K_{2}$-MK7",
        price: 18.00,
        category: "Bone & Heart",
        moa: "Ενεργοποίηση της οστεοκαλσίνης και της Matrix Gla Protein (MGP). Μεταφέρει το ασβέστιο στα οστά και εμποδίζει την ασβεστοποίηση των αρτηριών.",
        formula: "Vitamin $K_{2}$ as MK-7 (Menaquinone-7) 100mcg, Pharmaceutical Grade.",
        innovation: "Bone-Artery Axis Protection: Η μοναδική βιταμίνη που προστατεύει ταυτόχρονα σκελετό και καρδιά."
    },
    {
        id: "kids-multi",
        name: "Kids-Multi Jelly",
        price: 16.50,
        category: "Pediatric Care",
        moa: "Υποστήριξη της σωματικής και γνωστικής ανάπτυξης. Ενίσχυση του ανοσοποιητικού συστήματος κατά τη σχολική περίοδο.",
        formula: "Πλήρες σύμπλεγμα βιταμινών, Ιώδιο, Ψευδάργυρος (Sugar-Free).",
        innovation: "Pectin-based Soft Jellies: Χωρίς ζελατίνη ζωικής προέλευσης, ιδανικά για παιδιά με ευαισθησίες."
    }
];
