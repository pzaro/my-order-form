/**
 * ZARKOLIA HEALTH - Επίσημος Κατάλογος Προϊόντων (v63.0)
 * Περιλαμβάνει 19 κωδικούς με πλήρη επιστημονική τεκμηρίωση.
 */

const PRODUCTS_DATA = [
    {
        id: "alveolair-sir",
        name: "Alveolair Sir",
        price: 18.50,
        category: "Respiratory",
        moa: "Βλεννολυτική δράση μέσω διάσπασης των δισουλφιδικών δεσμών των βλεννοπρωτεϊνών. Ενισχύει την κροσσωτή κάθαρση (mucociliary clearance) για την απομάκρυνση των εκκρίσεων.",
        formula: "N-Acetylcysteine (NAC) 600mg, Hedera Helix extract, Thymus Vulgaris.",
        innovation: "Τεχνολογία σταδιακής αποδέσμευσης για σταθερά επίπεδα NAC στο πλάσμα επί 12 ώρες."
    },
    {
        id: "z-boost",
        name: "Z-boost Immune",
        price: 24.90,
        category: "Immune",
        moa: "Ενεργοποίηση των Τ-λεμφοκυττάρων και των NK-κυττάρων. Ρύθμιση της ανοσολογικής απόκρισης μέσω του άξονα Ψευδαργύρου-Βιταμίνης C.",
        formula: "Liposomal Vitamin C 1000mg, Zinc Picolinate 15mg, Propolis Max.",
        innovation: "Λιποσωμιακή σύνθεση για 400% αυξημένη βιοδιαθεσιμότητα δραστικών συστατικών."
    },
    {
        id: "zplast",
        name: "Zplast Hydrogel",
        price: 12.00,
        category: "Wound Care",
        moa: "Δημιουργία υγρού μικροπεριβάλλοντος επούλωσης (Moist Wound Healing). Τα ιόντα αργύρου $Ag^{+}$ διασπούν το κυτταρικό τοίχωμα των παθογόνων βακτηρίων.",
        formula: "Hydrocolloid Matrix, Ionic Silver $Ag^{+}$, Polyurethane Membrane.",
        innovation: "Smart-pore Technology για επιλεκτική διαπνοή και απόλυτη προστασία από υγρασία."
    },
    {
        id: "bruise-off",
        name: "Bruise Off Gel",
        price: 15.80,
        category: "Topical",
        moa: "Επιτάχυνση απορρόφησης εκχυμώσεων μέσω ενίσχυσης της μικροκυκλοφορίας. Η Εσκίνη μειώνει τη διαπερατότητα των τριχοειδών αγγείων.",
        formula: "Arnica Montana 10%, Escin (Εσκίνη), Bromelain 2500 GDU.",
        innovation: "Nano-emulsion base για άμεση διαδερμική απορρόφηση εντός 60 δευτερολέπτων."
    },
    {
        id: "d-vit-5000",
        name: "D-vit 5000iu Gold",
        price: 19.20,
        category: "Supplements",
        moa: "Ρύθμιση της ομοιόστασης ασβεστίου-φωσφόρου μέσω του υποδοχέα VDR. Ενίσχυση της παραγωγής αντιμικροβιακών πεπτιδίων.",
        formula: "Cholecalciferol $D_{3}$, Extra Virgin Olive Oil carrier, Vitamin $K_{2}$ MK7.",
        innovation: "Micelle Technology για μέγιστη απορρόφηση ανεξάρτητα από τη λήψη τροφής."
    },
    {
        id: "z-mag-triple",
        name: "Z-Mag Triple",
        price: 21.50,
        category: "Muscle",
        moa: "Συνδυαστική δράση 3 μορφών μαγνησίου για πλήρη κυτταρική κάλυψη: Bisglycinate (νευρικό), Citrate (μύες), Malate (ενέργεια).",
        formula: "Magnesium Bisglycinate, Citrate, Malate + Vit-$B_{6}$ active form.",
        innovation: "Chelated Amino Acid Complex για μηδενικές γαστρεντερικές διαταραχές."
    },
    {
        id: "omega3-ultra",
        name: "Omega-3 Ultra Pure",
        price: 32.00,
        category: "Cardio",
        moa: "Μείωση των τριγλυκεριδίων και προστασία του ενδοθηλίου. Βελτίωση της ρευστότητας των κυτταρικών μεμβρανών.",
        formula: "Fish Oil 1200mg (EPA 500 / DHA 250), Vitamin E.",
        innovation: "Μοριακή απόσταξη για αφαίρεση βαρέων μετάλλων και τοξινών."
    },
    {
        id: "probio-max",
        name: "Probio-Max 50B",
        price: 28.50,
        category: "Digestive",
        moa: "Αποκατάσταση του εντερικού μικροβιώματος και ενίσχυση του εντερικού φραγμού έναντι παθογόνων.",
        formula: "12 Προβιοτικά στελέχη, 50 Billion CFU, Inulin Prebiotic.",
        innovation: "Acid-resistant DRcaps για ασφαλή διέλευση από το γαστρικό οξύ του στομάχου."
    },
    {
        id: "joint-fix",
        name: "Joint-Fix Collagen",
        price: 35.00,
        category: "Joints",
        moa: "Διέγερση της ενδογενούς παραγωγής κολλαγόνου τύπου ΙΙ. Μείωση της φλεγμονής του αρθρικού χόνδρου.",
        formula: "Hydrolyzed Collagen peptides, Glucosamine, Chondroitin, MSM.",
        innovation: "Bioactive Collagen Peptides για άμεση ενσωμάτωση στον συνδετικό ιστό των αρθρώσεων."
    },
    {
        id: "sleep-well",
        name: "Sleep-Well Melatonin",
        price: 14.50,
        category: "CNS",
        moa: "Ρύθμιση του κιρκάδιου ρυθμού. Μείωση του χρόνου έλευσης του ύπνου μέσω του άξονα Μελατονίνης-Βαλεριάνας.",
        formula: "Melatonin 1mg, Valeriana Officinalis, Passiflora, Vit-$B_{6}$.",
        innovation: "Sublingual Micro-tablets για ταχύτατη απορρόφηση σε μόλις 5 λεπτά."
    },
    {
        id: "iron-fe",
        name: "Iron-Fe Bisglycinate",
        price: 17.00,
        category: "Blood",
        moa: "Αύξηση των επιπέδων φερριτίνης και αιμοσφαιρίνης χωρίς οξείδωση του γαστρεντερικού βλεννογόνου.",
        formula: "Ferrous Bisglycinate 25mg, Vit-C, Folic Acid.",
        innovation: "Gentle Iron formula που προλαμβάνει τη δυσκοιλιότητα και τη ναυτία."
    },
    {
        id: "b-complex-act",
        name: "B-Complex Active",
        price: 22.00,
        category: "Energy",
        moa: "Υποστήριξη του μεταβολισμού της ενέργειας (ATP) και της λειτουργίας των νευροδιαβιβαστών.",
        formula: "Πλήρες σύμπλεγμα Β σε ενεργές μεθυλιωμένες μορφές.",
        innovation: "Methyl-form $B_{12}$ & Folate για άμεση κυτταρική χρήση χωρίς μετατροπή."
    },
    {
        id: "eye-protect",
        name: "Eye-Protect Lutein",
        price: 26.00,
        category: "Vision",
        moa: "Προστασία της ωχράς κηλίδας από το μπλε φως και την οξειδωτική καταπόνηση των φωτοϋποδοχέων.",
        formula: "Lutein 20mg, Zeaxanthin 4mg, Astaxanthin, Vit-A.",
        innovation: "Blue-Light Filtration Technology μέσω υψηλής συγκέντρωσης καροτενοειδών."
    },
    {
        id: "hepa-clean",
        name: "Hepa-Clean Silymarin",
        price: 23.50,
        category: "Liver",
        moa: "Αποτοξίνωση των ηπατοκυττάρων και προστασία από τη λιπώδη διήθηση και τις τοξίνες.",
        formula: "Milk Thistle (80% Silymarin), Artichoke, Turmeric.",
        innovation: "Phytosome technology για 10πλάσια απορρόφηση σιλυμαρίνης."
    },
    {
        id: "hair-skin",
        name: "Hair-Skin-Nails",
        price: 19.80,
        category: "Beauty",
        moa: "Ενίσχυση της δομής της κερατίνης και του κολλαγόνου. Βελτίωση της μικροκυκλοφορίας του τριχωτού.",
        formula: "Biotin 10000mcg, Zinc, Selenium, L-Cysteine.",
        innovation: "Synergistic Keratin-Boost Complex για ορατά αποτελέσματα σε 30 ημέρες."
    },
    {
        id: "antiox-coq10",
        name: "Antiox-CoQ10",
        price: 29.00,
        category: "Energy",
        moa: "Βελτίωση της μιτοχονδριακής παραγωγής ενέργειας. Ισχυρή καρδιοπροστατευτική και αντιοξειδωτική δράση.",
        formula: "Coenzyme $Q_{10}$ 200mg, Φυσική Βιταμίνη E.",
        innovation: "Micro-crystalline Coenzyme $Q_{10}$ για βέλτιστη σταθερότητα και απορρόφηση."
    },
    {
        id: "calm-ashwa",
        name: "Calm-Ashwagandha",
        price: 21.00,
        category: "CNS",
        moa: "Προσαρμογόνος δράση (adaptogen) που μειώνει τα επίπεδα κορτιζόλης και το ψυχολογικό στρες.",
        formula: "KSM-66 Ashwagandha extract, Magnesium, Vit-$B_{12}$.",
        innovation: "Full-spectrum extract με τη μέγιστη συγκέντρωση withanolides παγκοσμίως."
    },
    {
        id: "vit-k2-mk7",
        name: "Vitamin $K_{2}$-MK7",
        price: 18.00,
        category: "Bone",
        moa: "Ενεργοποίηση οστεοκαλσίνης. Κατεύθυνση του ασβεστίου στα οστά και εμπόδιση της ασβεστοποίησης των αρτηριών.",
        formula: "Vitamin $K_{2}$ as MK-7 100mcg, Pharmaceutical Grade.",
        innovation: "Bone-Artery Axis Protection: Ταυτόχρονη προστασία σκελετού και καρδιαγγειακού."
    },
    {
        id: "kids-multi",
        name: "Kids-Multi Jelly",
        price: 16.50,
        category: "Pediatric",
        moa: "Κάλυψη διατροφικών κενών για την υγιή σωματική και γνωστική ανάπτυξη των παιδιών.",
        formula: "Multi-vitamins, Iodine, Zinc (Sugar-Free).",
        innovation: "Pectin-based Soft Jellies χωρίς ζελατίνη ζωικής προέλευσης, ιδανικά για παιδιά."
    }
];
