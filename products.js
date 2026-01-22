const PRODUCTS_DATA = [
    {
        id: "alveolair-sir", name: "Alveolair Sir", price: 18.50, category: "Respiratory",
        moa: "Βλεννολυτική δράση μέσω διάσπασης δισουλφιδικών δεσμών. Ενισχύει την κροσσωτή κάθαρση των πνευμόνων.",
        formula: "N-Acetylcysteine 600mg, Hedera Helix 10%, Thymus Vulgaris.",
        innovation: "Τεχνολογία σταδιακής αποδέσμευσης για συνεχή βρογχοδιασταλτική προστασία."
    },
    {
        id: "z-boost", name: "Z-boost Immune", price: 24.90, category: "Immune",
        moa: "Ενεργοποίηση των NK-κυττάρων και ενίσχυση της φαγοκυττάρωσης μέσω του άξονα Ψευδαργύρου-Βιταμίνης C.",
        formula: "Liposomal Vit-C 1000mg, Zinc Picolinate, Propolis extract.",
        innovation: "Λιποσωμιακή σύνθεση για 400% αυξημένη βιοδιαθεσιμότητα."
    },
    {
        id: "zplast", name: "Zplast Hydrogel", price: 12.00, category: "Wound Care",
        moa: "Δημιουργία βέλτιστου υγρού περιβάλλοντος επούλωσης και αντιμικροβιακός φραγμός με ιόντα αργύρου Ag+.",
        formula: "Hydrocolloid Matrix, Ionic Silver Ag+.",
        innovation: "Smart-pore Technology για επιλεκτική διαπνοή και προστασία."
    },
    {
        id: "bruise-off", name: "Bruise Off Gel", price: 15.80, category: "Topical",
        moa: "Μείωση της διαπερατότητας των τριχοειδών και επιτάχυνση της απορρόφησης αιματωμάτων.",
        formula: "Arnica Montana 10%, Escin, Bromelain 2500 GDU.",
        innovation: "Nano-emulsion base για άμεση διαδερμική απορρόφηση σε 60''."
    },
    {
        id: "d-vit-5000", name: "D-vit 5000iu Gold", price: 19.20, category: "Supplements",
        moa: "Ρύθμιση του VDR υποδοχέα και ενίσχυση της ενδογενούς παραγωγής καθελισιδινών.",
        formula: "Cholecalciferol D3, Extra Virgin Olive Oil carrier, Vitamin K2 MK7.",
        innovation: "Micelle Technology για μέγιστη απορρόφηση ανεξάρτητα από τη λήψη τροφής."
    },
    {
        id: "z-mag-triple", name: "Z-Mag Triple", price: 21.50, category: "Muscle",
        moa: "Συνδυαστική δράση 3 μορφών μαγνησίου για πλήρη κυτταρική κάλυψη (Bisglycinate, Citrate, Malate).",
        formula: "Magnesium Complex + Vit-B6 active form.",
        innovation: "Chelated Amino Acid Complex για μηδενικές γαστρεντερικές διαταραχές."
    },
    {
        id: "omega3-ultra", name: "Omega-3 Ultra Pure", price: 32.00, category: "Cardio",
        moa: "Μείωση των τριγλυκεριδίων και προστασία του ενδοθηλίου. Βελτίωση της γνωστικής λειτουργίας.",
        formula: "Fish Oil 1200mg (EPA 500 / DHA 250), Vitamin E.",
        innovation: "Μοριακή απόσταξη για αφαίρεση βαρέων μετάλλων και τοξινών."
    },
    {
        id: "probio-max", name: "Probio-Max 50B", price: 28.50, category: "Digestive",
        moa: "Αποκατάσταση του εντερικού μικροβιώματος και ενίσχυση του εντερικού φραγμού.",
        formula: "12 Προβιοτικά στελέχη, 50 Billion CFU, Inulin Prebiotic.",
        innovation: "Acid-resistant DRcaps για ασφαλή διέλευση από το γαστρικό οξύ."
    },
    {
        id: "joint-fix", name: "Joint-Fix Collagen", price: 35.00, category: "Joints",
        moa: "Διέγερση της παραγωγής κολλαγόνου τύπου ΙΙ. Μείωση της φλεγμονής του χόνδρου.",
        formula: "Hydrolyzed Collagen peptides, Glucosamine, Chondroitin, MSM.",
        innovation: "Bioactive Collagen Peptides για άμεση ενσωμάτωση στον συνδετικό ιστό."
    },
    {
        id: "sleep-well", name: "Sleep-Well Melatonin", price: 14.50, category: "CNS",
        moa: "Ρύθμιση του κιρκάδιου ρυθμού και μείωση του χρόνου έλευσης του ύπνου.",
        formula: "Melatonin 1mg, Valeriana Officinalis, Passiflora, Vit-B6.",
        innovation: "Sublingual Micro-tablets για ταχύτατη απορρόφηση σε 5 λεπτά."
    },
    {
        id: "iron-fe", name: "Iron-Fe Bisglycinate", price: 17.00, category: "Blood",
        moa: "Αύξηση επιπέδων φερριτίνης χωρίς οξείδωση του εντέρου. Μέγιστη γαστρεντερική ανοχή.",
        formula: "Ferrous Bisglycinate 25mg, Vit-C, Folic Acid.",
        innovation: "Gentle Iron formula που προλαμβάνει τη δυσκοιλιότητα."
    },
    {
        id: "b-complex-act", name: "B-Complex Active", price: 22.00, category: "Energy",
        moa: "Υποστήριξη μεταβολισμού ενέργειας και λειτουργίας νευροδιαβιβαστών.",
        formula: "Πλήρες σύμπλεγμα Β σε ενεργές μεθυλιωμένες μορφές.",
        innovation: "Methyl-form B12 & Folate για άμεση κυτταρική χρήση."
    },
    {
        id: "eye-protect", name: "Eye-Protect Lutein", price: 26.00, category: "Vision",
        moa: "Προστασία της ωχράς κηλίδας από το μπλε φως και την οξειδωτική καταπόνηση.",
        formula: "Lutein 20mg, Zeaxanthin 4mg, Astaxanthin, Vit-A.",
        innovation: "Blue-Light Filtration Technology μέσω υψηλής συγκέντρωσης καροτενοειδών."
    },
    {
        id: "hepa-clean", name: "Hepa-Clean Silymarin", price: 23.50, category: "Liver",
        moa: "Αποτοξίνωση ηπατοκυττάρων και προστασία από τη λιπώδη διήθηση.",
        formula: "Milk Thistle (80% Silymarin), Artichoke, Turmeric.",
        innovation: "Phytosome technology για 10πλάσια απορρόφηση σιλυμαρίνης."
    },
    {
        id: "hair-skin", name: "Hair-Skin-Nails", price: 19.80, category: "Beauty",
        moa: "Ενίσχυση δομής κερατίνης και κολλαγόνου. Βελτίωση μικροκυκλοφορίας τριχωτού.",
        formula: "Biotin 10000mcg, Zinc, Selenium, L-Cysteine.",
        innovation: "Synergistic Keratin-Boost Complex για ορατά αποτελέσματα σε 30 ημέρες."
    },
    {
        id: "antiox-coq10", name: "Antiox-CoQ10", price: 29.00, category: "Energy",
        moa: "Βελτίωση μιτοχονδριακής παραγωγής ενέργειας. Ισχυρή καρδιοπροστατευτική δράση.",
        formula: "Coenzyme Q10 200mg, Φυσική Βιταμίνη E.",
        innovation: "Micro-crystalline CoQ10 για βέλτιστη σταθερότητα και απορρόφηση."
    },
    {
        id: "calm-ashwa", name: "Calm-Ashwagandha", price: 21.00, category: "CNS",
        moa: "Προσαρμογόνος δράση που μειώνει τα επίπεδα κορτιζόλης και το ψυχολογικό στρες.",
        formula: "KSM-66 Ashwagandha extract, Magnesium, Vit-B12.",
        innovation: "Full-spectrum extract με τη μέγιστη συγκέντρωση withanolides."
    },
    {
        id: "vit-k2-mk7", name: "Vitamin K2-MK7", price: 18.00, category: "Bone",
        moa: "Ενεργοποίηση οστεοκαλσίνης. Κατεύθυνση ασβεστίου στα οστά και όχι στις αρτηρίες.",
        formula: "Vitamin K2 as MK-7 100mcg, Pharmaceutical Grade.",
        innovation: "Bone-Artery Axis Protection: Ταυτόχρονη προστασία σκελετού και καρδιάς."
    },
    {
        id: "kids-multi", name: "Kids-Multi Jelly", price: 16.50, category: "Pediatric",
        moa: "Κάλυψη διατροφικών κενών για υγιή σωματική και γνωστική ανάπτυξη.",
        formula: "Multi-vitamins, Iodine, Zinc (Sugar-Free).",
        innovation: "Pectin-based Soft Jellies χωρίς ζελατίνη ζωικής προέλευσης."
    }
];
