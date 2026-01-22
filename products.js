// ============================================================
// ZARKOLIA HEALTH - SUPREME PRODUCT DATABASE v50.0
// ============================================================

const products = [
    { name: 'Z-DermAspis', price: 5.03 },
    { name: 'Zplast Total Repair 50ml', price: 14.60 },
    { name: 'Zplast Total Repair 100ml', price: 26.80 },
    { name: 'ZplastCream 40gr', price: 12.30 },
    { name: 'ZplastCream 100gr', price: 24.79 },
    { name: 'Bruise Off cream 50ml', price: 5.60 },
    { name: 'Bruise Off cream 100ml', price: 9.50 },
    { name: 'Z-boost 30 caps', price: 14.93 },
    { name: 'Z-boost 12 caps', price: 6.99 },
    { name: 'Hydralia Face cream 50ml', price: 8.90 },
    { name: 'Revitacell Plus Face cream 50ml', price: 10.69 },
    { name: 'Revitace Eyes cream Luce 30ml', price: 10.10 },
    { name: 'Alveolair Sir', price: 7.65 },
    { name: 'NUTRI MX PROBIOTIC PREMIUM', price: 8.96 },
    { name: 'NUTRI MX MAGNESIUM +B6', price: 5.98 },
    { name: 'NUTRI MX A-Z', price: 6.51 },
    { name: 'NUTRI MX OMEGA 3', price: 6.87 },
    { name: 'NUTRI MX JOINT', price: 10.16 },
    { name: 'Zarkolia Cosmetic pack', price: 23.89 }
];

const PRODUCTS_DATA = [
    {
        id: "alveolair-sir",
        name: "Alveolair Sir",
        price: 18.50,
        category: "Respiratory Support",
        moa: "Μείωση του ιξώδους της βλέννας μέσω διάσπασης των δισουλφιδικών δεσμών των βλεννοπρωτεϊνών στις κυψελίδες. Ενισχύει την κροσσωτή κάθαρση.",
        formula: "N-Acetylcysteine 600mg, Hedera Helix extract, Thymus Vulgaris.",
        innovation: "Τεχνολογία ελεγχόμενης αποδέσμευσης για συνεχή βρογχοδιασταλτική δράση."
    },
    {
        id: "z-boost",
        name: "Z-boost Immune",
        price: 24.90,
        category: "Immune System",
        moa: "Ενεργοποίηση των Τ-λεμφοκυττάρων και ενίσχυση της δράσης των μακροφάγων. Ρύθμιση της κυτταρικής απόκρισης έναντι ιογενών φορτίων.",
        formula: "Liposomal Vitamin C 1000mg, Zinc Picolinate, Propolis Max.",
        innovation: "Λιποσωμιακή σύνθεση για 400% αυξημένη βιοδιαθεσιμότητα δραστικών."
    },
    {
        id: "zplast",
        name: "Zplast Hydrogel",
        price: 12.00,
        category: "Wound Healing",
        moa: "Δημιουργία υγρού μικροπεριβάλλοντος επούλωσης. Τα ιόντα αργύρου Ag+ διασπούν το κυτταρικό τοίχωμα των Gram+/- βακτηρίων.",
        formula: "Hydrocolloid Matrix, Silver Ions, Polyurethane Membrane.",
        innovation: "Smart-pore Technology για επιλεκτική διαπνοή και προστασία από υγρασία."
    },
    {
        id: "bruise-off",
        name: "Bruise Off Gel",
        price: 15.80,
        category: "Topical Recovery",
        moa: "Επιτάχυνση απορρόφησης εκχυμώσεων μέσω της ενίσχυσης της μικροκυκλοφορίας. Μείωση του οιδήματος μέσω της αναστολής των προφλεγμονωδών κυτοκινών.",
        formula: "Arnica Montana 10%, Escin, Bromelain 2500 GDU.",
        innovation: "Nano-emulsion base για άμεση διαδερμική απορρόφηση σε 60 δευτερόλεπτα."
    },
    {
        id: "d-vit-5000",
        name: "D-vit 5000iu Gold",
        price: 19.20,
        category: "Supplements",
        moa: "Ρύθμιση της ομοιόστασης ασβεστίου-φωσφόρου. Ενίσχυση της παραγωγής αντιμικροβιακών πεπτιδίων στον οργανισμό.",
        formula: "Cholecalciferol D3, Extra Virgin Olive Oil carrier, Vitamin K2 MK7.",
        innovation: "Micelle Technology για μέγιστη απορρόφηση ανεξάρτητα από τη λήψη τροφής."
    },
    {
        id: "z-mag-triple",
        name: "Z-Mag Triple",
        price: 21.50,
        category: "Muscle & Nerve",
        moa: "Συνδυαστική δράση 3 μορφών μαγνησίου για πλήρη κυτταρική κάλυψη (μύες, καρδιά, νευρικό σύστημα).",
        formula: "Magnesium Bisglycinate, Citrate, Malate + Vit-B6 active.",
        innovation: "Chelated Amino Acid Complex για μηδενικές γαστρεντερικές διαταραχές."
    },
    {
        id: "omega3-ultra",
        name: "Omega-3 Ultra Pure",
        price: 32.00,
        category: "Cardio",
        moa: "Μείωση των τριγλυκεριδίων και προστασία του ενδοθηλίου. Βελτίωση της γνωστικής λειτουργίας.",
        formula: "Fish Oil 1200mg (EPA 500 / DHA 250), Vitamin E.",
        innovation: "Μοριακή απόσταξη για αφαίρεση βαρέων μετάλλων και τοξινών."
    },
    {
        id: "probio-max",
        name: "Probio-Max 50B",
        price: 28.50,
        category: "Digestive",
        moa: "Αποκατάσταση του εντερικού μικροβιώματος. Ενίσχυση του εντερικού φραγμού έναντι παθογόνων.",
        formula: "12 Προβιοτικά στελέχη, 50 Billion CFU, Inulin Prebiotic.",
        innovation: "Acid-resistant DRcaps για ασφαλή διέλευση από το στομάχι."
    },
    {
        id: "joint-fix",
        name: "Joint-Fix Collagen",
        price: 35.00,
        category: "Joints",
        moa: "Διέγερση της ενδογενούς παραγωγής κολλαγόνου τύπου ΙΙ. Μείωση της φλεγμονής του χόνδρου.",
        formula: "Hydrolyzed Collagen peptides, Glucosamine, Chondroitin, MSM.",
        innovation: "Bioactive Collagen Peptides για άμεση ενσωμάτωση στον συνδετικό ιστό."
    },
    {
        id: "sleep-well",
        name: "Sleep-Well Melatonin",
        price: 14.50,
        category: "CNS",
        moa: "Ρύθμιση του κιρκάδιου ρυθμού. Μείωση του χρόνου έλευσης του ύπνου μέσω του άξονα Μελατονίνης-Βαλεριάνας.",
        formula: "Melatonin 1mg, Valerian, Passiflora, Vit-B6.",
        innovation: "Sublingual tablets για ταχύτατη δράση εντός 10 λεπτών."
    },
    {
        id: "iron-fe",
        name: "Iron-Fe Bisglycinate",
        price: 17.00,
        category: "Blood",
        moa: "Αύξηση των επιπέδων αιμοσφαιρίνης και φερριτίνης χωρίς οξείδωση του εντέρου.",
        formula: "Ferrous Bisglycinate 25mg, Vit-C, Folic Acid.",
        innovation: "Gentle Iron formula υψηλής ανοχής για ευαίσθητα στομάχια."
    },
    {
        id: "b-complex-act",
        name: "B-Complex Active",
        price: 22.00,
        category: "Energy",
        moa: "Υποστήριξη του μεταβολισμού της ενέργειας (ATP) και της λειτουργίας των νευροδιαβιβαστών.",
        formula: "Πλήρες σύμπλεγμα Β σε ενεργές μεθυλιωμένες μορφές.",
        innovation: "Methyl-form B12 & Folate για άμεση κυτταρική χρήση."
    },
    {
        id: "eye-protect",
        name: "Eye-Protect Lutein",
        price: 26.00,
        category: "Vision",
        moa: "Προστασία της ωχράς κηλίδας από το μπλε φως και την οξειδωτική καταπόνηση.",
        formula: "Lutein 20mg, Zeaxanthin, Astaxanthin, Vit-A.",
        innovation: "Blue-Light Filtration Technology μέσω καροτενοειδών."
    },
    {
        id: "hepa-clean",
        name: "Hepa-Clean Silymarin",
        price: 23.50,
        category: "Liver",
        moa: "Αποτοξίνωση των ηπατοκυττάρων και προστασία από τη λιπώδη διήθηση.",
        formula: "Milk Thistle (80% Silymarin), Artichoke, Turmeric.",
        innovation: "Phytosome technology για 10πλάσια απορρόφηση σιλυμαρίνης."
    },
    {
        id: "hair-skin",
        name: "Hair-Skin-Nails",
        price: 19.80,
        category: "Beauty",
        moa: "Ενίσχυση της δομής της κερατίνης και του κολλαγόνου στα εξαρτήματα του δέρματος.",
        formula: "Biotin 10000mcg, Zinc, Selenium, L-Cysteine.",
        innovation: "Synergistic Keratin-Boost Complex για ορατά αποτελέσματα σε 30 ημέρες."
    },
    {
        id: "antiox-coq10",
        name: "Antiox-CoQ10",
        price: 29.00,
        category: "Energy",
        moa: "Βελτίωση της μιτοχονδριακής παραγωγής ενέργειας. Ισχυρή καρδιοπροστατευτική δράση.",
        formula: "Coenzyme Q10 (Ubiquinone) 200mg, Vit-E.",
        innovation: "Micro-crystalline CoQ10 για βέλτιστη σταθερότητα."
    },
    {
        id: "calm-ashwa",
        name: "Calm-Ashwagandha",
        price: 21.00,
        category: "CNS",
        moa: "Προσαρμογόνος δράση (adaptogen) που μειώνει τα επίπεδα κορτιζόλης και το στρες.",
        formula: "KSM-66 Ashwagandha extract, Magnesium, Vit-B12.",
        innovation: "Full-spectrum extract με τη μέγιστη συγκέντρωση Withanolides."
    },
    {
        id: "vit-k2-mk7",
        name: "Vitamin K2-MK7",
        price: 18.00,
        category: "Bone",
        moa: "Ενεργοποίηση της οστεοκαλσίνης. Κατεύθυνση του ασβεστίου στα οστά και όχι στις αρτηρίες.",
        formula: "Vitamin K2 as MK-7 (Menaquinone-7) 100mcg.",
        innovation: "Bone-Artery axis protection technology."
    },
    {
        id: "kids-multi",
        name: "Kids-Multi Jelly",
        price: 16.50,
        category: "Pediatric",
        moa: "Κάλυψη διατροφικών κενών για την υγιή ανάπτυξη του παιδικού σκελετού και ανοσοποιητικού.",
        formula: "Multi-vitamins, Iodine, Zinc (Sugar-Free).",
        innovation: "Pectin-based gummies χωρίς ζελατίνη ζωικής προέλευσης."
    }
];
