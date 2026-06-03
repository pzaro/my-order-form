// ΕΝΣΩΜΑΤΩΣΗ ΕΠΙΣΤΗΜΟΝΙΚΩΝ ΔΕΔΟΜΕΝΩΝ (SCI OBJECTS)
const sciTotalRepair = {
    act: "Centella Asiatica, Hypericum Perforatum, Linum Seed Oil, Avocado Oil, Calamine, Sea Buckthorn, Honey, Mastic, Hyaluronic Acid, Vit E.",
    ind: "Επιβαρυμένο και ερεθισμένο δέρμα, ανάγκη επανόρθωσης επιφανειακού φραγμού, ξηρότητα και αφυδάτωση, καταπραϋντική περιποίηση περιοχών με επιφανειακή καταπόνηση, τραχύτητα και δυσφορία.",
    mech: "Centella: Υποστήριξη επούλωσης & κολλαγονική δραστηριότητα. Hypericum: Καταπραϋντική φροντίδα. Μέλι: Υγρό επουλωτικό περιβάλλον. Calamine: Ανακούφιση ερεθισμού. Υαλουρονικό: Humectant ενυδάτωση. Φυτικά έλαια: Μείωση TEWL & ενίσχυση φραγμού."
};

const sciZplastCream = {
    act: "Μαστίχα Χίου, Βαλσαμόχορτο, Μέλι, Καλαμίνη, Καλέντουλα, Zea mays, Ιπποφαές, Αβοκάντο.",
    ind: "Ερεθισμένο δέρμα, ήπια επιφανειακή δερματική καταπόνηση, ξηρότητα και αίσθημα τραβήγματος, φροντίδα δέρματος με ανάγκη καταπράυνσης, υποστηρικτική περιποίηση μικροτραυματισμών και barrier support.",
    mech: "Hypericum / καλέντουλα: βοτανική υποστήριξη με καταπραϋντικό ενδιαφέρον. Μέλι: συμβολή σε προστατευτικό / υγρό επουλωτικό περιβάλλον. Καλαμίνη: τοπική ανακούφιση ερεθισμού. Μαστίχα / ιπποφαές / αβοκάντο: αντιοξειδωτική και barrier-support δράση."
};

const sciBruiseOff = {
    act: "Ουρία 10%, Άρνικα 10%, Ριγανέλαιο, Μελισσόχορτο.",
    ind: "Μώλωπες, τοπικό οίδημα, τοπική δυσφορία μετά από μικροκακώσεις, καταπραϋντική φροντίδα της περιοχής εφαρμογής.",
    mech: "Άρνικα: παραδοσιακή χρήση για μώλωπες / τοπική φλεγμονώδη αντίδραση. Ουρία: ενυδατική και ήπια κερατολυτική δράση. Μελισσόχορτο / ριγανέλαιο: βοτανική υποστηρικτική καταπραϋντική συμβολή."
};

const sciZboost = {
    act: "NAC 300 mg, Ψευδάργυρος, Σελήνιο, ALA (άλφα-λιποϊκό οξύ), CoQ10, Ginger.",
    ind: "Αντιοξειδωτική υποστήριξη, υποστήριξη φυσιολογικής λειτουργίας ανοσοποιητικού, καταστάσεις αυξημένου οξειδωτικού στρες, υποστήριξη ενεργειακού μεταβολισμού, συμπληρωματική υποστήριξη σε κόπωση.",
    mech: "NAC: πρόδρομος της γλουταθειόνης. CoQ10: υποστήριξη μιτοχονδριακής παραγωγής ενέργειας. Ψευδάργυρος/Σελήνιο: συμμετοχή σε αντιοξειδωτικά ένζυμα. ALA: redox-cycling. Ginger: αντιοξειδωτικό ενδιαφέρον."
};

const sciZDermAspis = {
    act: "Εντομοαπωθητικοί παράγοντες, αιθέρια έλαια.",
    ind: "Απώθηση κουνουπιών και προστασία από τσιμπήματα.",
    mech: "Δημιουργία προστατευτικού φραγμού και αποκλεισμός οσφρητικών υποδοχέων εντόμων."
};

// Ο ΚΑΤΑΛΟΓΟΣ ΤΩΝ ΠΡΟΪΟΝΤΩΝ ΣΑΣ
const products = [
    { name: 'Z-DermAspis', price: 5.03, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/Graphone.PNG", sci: sciZDermAspis },
    { name: 'Zplast Total Repair Cream 30ml', price: 10.21, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/Zplast%20Total%20Repair.jpeg", sci: sciTotalRepair },
    { name: 'Zplast Total Repair 50ml', price: 14.60, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/Zplast%20Total%20Repair.jpeg", sci: sciTotalRepair },
    { name: 'Zplast Total Repair 100ml', price: 26.80, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/Zplast%20Total%20Repair.jpeg", sci: sciTotalRepair },
    { name: 'ZplastCream 40gr', price: 12.30, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/ZplastCream%2040gr.jpg", sci: sciZplastCream },
    { name: 'ZplastCream 100gr', price: 24.79, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/ZplastCream%2040gr.jpg", sci: sciZplastCream },
    { name: 'Bruise Off cream 50ml', price: 5.60, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/Bruise%20Off%20Bite%20Out%20&%20Pain%20Free%20cream.jpg", sci: sciBruiseOff },
    { name: 'Bruise Off cream 100ml', price: 9.50, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/Bruise%20Off%20Bite%20Out%20&%20Pain%20Free%20cream.jpg", sci: sciBruiseOff },
    { name: 'Z-boost 30 caps', price: 14.93, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/Z-boost%2030%20caps.jpg", sci: sciZboost },
    { name: 'Z-boost 12 caps', price: 6.99, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/Z-boost%2030%20caps.jpg", sci: sciZboost },
    { name: 'Hydralia Face cream 50ml', price: 8.90, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/Hydralia%20Face%20Cream%2050ml.jpg", sci: { act: "Υαλουρονικό οξύ, Έλαιο Αβοκάντο, Έλαιο Jojoba, Αμυγδαλέλαιο, Aloe vera.", ind: "Ξηρό ή αφυδατωμένο δέρμα, καθημερινή ενυδάτωση προσώπου, δέρμα με αίσθημα τραβήγματος, υποστήριξη δερματικού φραγμού.", mech: "Υαλουρονικό: συγκράτηση νερού στην επιδερμίδα. Aloe vera: humectant. Jojoba/αβοκάντο: μαλακτική, θρεπτική και barrier-support δράση." } },
    { name: 'Revitacell Plus Face cream 50ml', price: 10.69, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/Revitacell%20Plus%20Face%20cream%2050ml.jpg", sci: { act: "Έλαιο ροδιού, Υαλουρονικό οξύ, Μαστίχα Χίου, Βιταμίνη Ε, Έλαιο Jojoba, Έλαιο Αβοκάντο.", ind: "Αφυδατωμένο δέρμα, θαμπό δέρμα, δέρμα με απώλεια ελαστικότητας, πρόωρη γήρανση, ανάγκη ενίσχυσης δερματικού φραγμού.", mech: "Υαλουρονικό: ενισχύει ενυδάτωση. Έλαιο ροδιού: αντιοξειδωτική υποστήριξη. Μαστίχα Χίου: καταπραϋντική φροντίδα. Βιταμίνη Ε: προστασία λιπιδικών δομών." } },
    { name: 'Revitace Eyes cream Luce 30ml', price: 10.10, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/Revitace%20Eyes%20cream%20Luce%2030ml.jpg", sci: { act: "Ιπποκαστανιά / Escin, Άρνικα, Υαλουρονικό οξύ.", ind: "Περιοφθαλμική αφυδάτωση, αίσθηση κούρασης, φροντίδα για αίσθηση βάρους / ήπιου οιδήματος.", mech: "Escin: υποστήριξη μικροκυκλοφορίας και οιδήματος. Υαλουρονικό: ενυδάτωση. Άρνικα: παραδοσιακή τοπική καταπραϋντική χρήση." } },
    { name: 'Alveolair Sir', price: 7.65, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/Alveolair%20Sir.jpg", sci: { act: "Αλθέα, Ευκάλυπτος, Θυμάρι, Κράνι (Cornus mas), Ιπποφαές.", ind: "Ερεθισμένος λαιμός, βήχας ως υποστηρικτική βοτανική φροντίδα, ανάγκη για μαλακτική υποστήριξη βλεννογόνου.", mech: "Αλθέα: demulcent / μαλακτική δράση σε βλεννογόνους. Θυμάρι: αναπνευστική υποστήριξη. Ευκάλυπτος: σχετίζεται με αίσθηση αποσυμφόρησης." } },
    { name: 'NUTRI MX PROBIOTIC Premium (18 ΠΡΟΒΙΟΤΙΚΑ - 10 Billion CFU) 30 caps', price: 8.96, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/NUTRI%20MX%20PROBIOTIC%20PREMIUM.jpg", sci: { act: "18 στελέχη (Bifidobacterium, Lactobacillus), περίπου 10 billion CFU ανά κάψουλα.", ind: "Αποκατάσταση εντερικού μικροβιώματος, υποστήριξη μετά από αντιβίωση, λειτουργικές διαταραχές εντέρου.", mech: "Ανταγωνισμός παθογόνων μικροοργανισμών, ενίσχυση εντερικού φραγμού, modulation τοπικής ανοσολογικής απόκρισης." } },
    { name: 'NUTRI MX MAGNESIUM +B6 (200 mg +5mg) 30 tab', price: 5.98, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/NUTRI%20MX%20MAGNESIUM%201%20%CE%A4%CE%B5%CE%BC.jpg", sci: { act: "Magnesium 200 mg, Vitamin B6 5 mg.", ind: "Κόπωση, μυϊκή λειτουργία, νευρομυϊκή υποστήριξη, έντονη φυσική δραστηριότητα.", mech: "Μαγνήσιο: ενζυμικές αντιδράσεις, νευρομυϊκή λειτουργία, παραγωγή ενέργειας. Βιταμίνη B6: μεταβολισμός αμινοξέων, λειτουργία νευρικού συστήματος." } },
    { name: 'NUTRI MX A-Z ΠΟΛΥΒΙΤΑΜΙΝΗ 30 TAB', price: 6.51, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/NUTRI%20MX%20A-Z.jpg", sci: { act: "Πλήρες φάσμα Βιταμινών (A, B, C, D, E, K1) και Μετάλλων + Lutein 0.5 mg.", ind: "Γενική διατροφική υποστήριξη, κάλυψη αυξημένων αναγκών μικροθρεπτικών, κόπωση / έντονος ρυθμός ζωής.", mech: "Πολυπαραγοντική ενίσχυση ενζυμικών/μεταβολικών οδών, παραγωγή ενέργειας, ανοσολογική λειτουργία και αντιοξειδωτική άμυνα." } },
    { name: 'NUTRI MX OMEGA 3 30 Softgel Caps', price: 6.87, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/NUTRI%20MX%20OMEGA%203.jpg", sci: { act: "Fish Oil 1000 mg (EPA 180 mg, DHA 120 mg).", ind: "Υποστήριξη καρδιαγγειακής υγείας, συμβολή στη φυσιολογική λειτουργία εγκεφάλου, υποστήριξη όρασης.", mech: "EPA / DHA: ενσωμάτωση σε κυτταρικές μεμβράνες, ρύθμιση εικοσανοειδών και φλεγμονωδών μονοπατιών." } },
    { name: 'NUTRI MX JOINT (GLUCOSAMINE + CHONDROITINE + MSM +COLLAGEN) 30 TAB', price: 10.16, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/NUTRI%20MX%20JOINT.jpg", sci: { act: "Glucosamine 500 mg, MSM 133.3 mg, Chondroitin 100 mg, Collagen 100 mg, Citrus bioflavonoids 100 mg, Ginger 5 mg.", ind: "Υποστήριξη αρθρώσεων, χόνδρων και συνδέσμων, συμπληρωματική φροντίδα σε αυξημένη επιβάρυνση μυοσκελετικού.", mech: "Glucosamine / chondroitin: δομική υποστήριξη χόνδρου. MSM: θειούχος υποστηρικτικός παράγοντας. Collagen: υποστήριξη συνδετικού ιστού." } },
    { name: 'NUTRI MX D3 + K2 (4000 IU +100μg) 30 tab', price: 7.90, img: "https://github.com/pzaro/zarkolia-images/blob/main/NUTRI%20MX%20D3%20k2.png?raw=true", sci: { act: "Vitamin D3 4000 IU (100 μg), Vitamin K2 (MK-7) 100 μg.", ind: "Υποστήριξη οστικής υγείας, φυσιολογικός μεταβολισμός ασβεστίου, υποστήριξη μυϊκής λειτουργίας.", mech: "Vitamin D3: αυξάνει εντερική απορρόφηση ασβεστίου. Vitamin K2: συμμετέχει στην καρβοξυλίωση της οστεοκαλσίνης." } },
    { name: 'Zarkolia Cosmetic pack', price: 23.89, img: "https://raw.githubusercontent.com/pzaro/my-order-form/main/images/Zarkolia%20Cosmetic%20pack.jpg", sci: { act: "Hydralia Face Cream + Revitacell Plus Face Cream + Revitace Eyes Cream.", ind: "Ολοκληρωμένη καθημερινή αντιοξειδωτική, ενυδατική και επανορθωτική φροντίδα προσώπου και περιοφθαλμικής περιοχής.", mech: "Συνδυαστική δράση υαλουρονικού οξέος, ελαίου ροδιού, μαστίχας Χίου και escin για πλήρη δερματική προστασία." } }
];
