// ==========================================
// 1. ΡΥΘΜΙΣΕΙΣ & ONLINE ΔΕΔΟΜΕΝΑ
// ==========================================

const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTyh1AJApeD-UUcEwJvsEj7IgozJzjGzUXv8OY3wOPGD71_HbhsfuHUJcPb3uFC9-rnpCLE2j2YE7DK/pub?output=csv';

const SHOW_ALL_MODE = false;

const cityCenters = {
    "Έδεσσα": "Έδεσσα (Κέντρο)",
    "Γιαννιτσά": "Γιαννιτσά (Πόλη)",
    "Αριδαία": "Αριδαία (Πόλη)",
    "Σκύδρα": "Σκύδρα (Πόλη)",
    "Κρύα Βρύση": "Κρύα Βρύση (Κέντρο)"
};

// ==========================================
// 2. ΣΤΑΘΕΡΑ ΔΕΔΟΜΕΝΑ ΦΑΡΜΑΚΕΙΩΝ
// ==========================================
const pharmacies = [
    // --- ΕΔΕΣΣΑ ---
    { id: 1, name: "ΑΓΓΕΛΟΥ ΜΑΡΙΑ - ΖΩΗ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΕΓΝΑΤΙΑΣ 9", phone: "2381023410" },
    { id: 2, name: "ΑΓΓΕΛΟΥ ΑΓΓΕΛΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΕΓΝΑΤΙΑΣ 9", phone: "2381023410" },
    { id: 15, name: "ΒΑΣΙΛΕΙΑΔΗΣ ΑΝΑΣΤΑΣΙΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΦΙΛΙΠΠΟΥ-Π. ΜΕΛΑ 18", phone: "2381022236" },
    { id: 18, name: "ΓΙΑΝΝΙΟΣ ΠΟΛΥΖΩΗΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΔΗΜΟΚΡΑΤΙΑΣ 17", phone: "2381023513" },
    { id: 23, name: "ΓΚΙΚΑΣ ΔΗΜΗΤΡΙΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΘΕΟΤΟΚΟΠΟΥΛΟΥ 5", phone: "2381023770" },
    { id: 25, name: "ΓΟΥΛΙΟΣ ΠΑΝΤΕΛΗΣ", area: "Έδεσσα", subArea: "Ν. Αγ. Αθανάσιος", address: "Ν. ΑΓ. ΑΘΑΝΑΣΙΟΣ", phone: "2381031330" },
    { id: 28, name: "ΓΟΥΛΙΕΛΜΟΥ ΓΕΘΣΗΜΑΝΗ", area: "Έδεσσα", subArea: "Φλαμουριά", address: "ΦΛΑΜΟΥΡΙΑ", phone: "2381099005" },
    { id: 29, name: "ΓΡΟΠΑΛΗ ΙΟΡΔΑΝΑ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "Ρ. ΦΕΡΑΙΟΥ 2", phone: "2381022623" },
    { id: 35, name: "ΔΙΤΣΟΣ ΛΑΖΑΡΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΑΓ. ΔΗΜΗΤΡΙΟΥ 28", phone: "2381027741" },
    { id: 47, name: "ΙΩΑΝΝΙΔΟΥ ΧΡΙΣΤΙΝΑ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΦΛΩΡΙΝΗΣ 7", phone: "2381028673" },
    { id: 55, name: "ΚΑΤΣΙΜΗΡΗΣ ΔΗΜΗΤΡΙΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΜΟΝΑΣΤΗΡΙΟΥ 31", phone: "2381025510" },
    { id: 56, name: "ΚΑΤΣΙΜΗΡΗΣ ΙΩΑΚΕΙΜ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΜΟΝΑΣΤΗΡΙΟΥ 31", phone: "2381025510" },
    { id: 60, name: "ΚΙΤΚΑΣ ΙΩΑΝΝΗΣ", area: "Έδεσσα", subArea: "Άγρας", address: "ΑΓΡΑΣ", phone: "2381092855" },
    { id: 63, name: "ΚΟΥΚΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "Ρ.ΦΕΡΑΙΟΥ 2", phone: "2381022623" },
    { id: 66, name: "ΚΥΡΙΑΖΟΠΟΥΛΟΣ ΔΗΜΗΤΡΙΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "18ης ΟΚΤΩΒΡΙΟΥ 10", phone: "2381028200" },
    { id: 72, name: "ΛΟΥΣΙΩΤΗΣ ΠΕΤΡΟΣ-ΚΑΡΟΛΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΑΡΧ. ΠΑΝΤΕΛΕΗΜΟΝΟΣ 26", phone: "2381028554" },
    { id: 73, name: "ΛΥΣΙΤΣΚΑ ΧΡΙΣΤΙΝΑ", area: "Έδεσσα", subArea: "Παναγίτσα", address: "ΠΑΝΑΓΙΤΣΑ", phone: "2381034191" },
    { id: 85, name: "ΜΙΣΑΗΛΙΔΗΣ ΦΩΤΙΟΣ", area: "Έδεσσα", subArea: "Άρνισσα", address: "ΑΡΝΙΣΣΑ", phone: "2381031656" },
    { id: 86, name: "ΜΟΝΑ ΚΑΛΛΙΟΠΗ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΑΘ. ΣΤΟΓΙΟΥ 22", phone: "2381024131" },
    { id: 88, name: "ΜΟΡΗΣ ΟΥΜΠΕΡΤΟ", area: "Έδεσσα", subArea: "Μεσημέρι", address: "ΜΕΣΗΜΕΡΙ", phone: "2381021200" },
    { id: 89, name: "ΜΟΥΧΑΛΕΜΠΗΣ ΝΙΚΟΛΑΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΔΗΜΟΚΡΑΤΙΑΣ 25", phone: "2381023324" },
    { id: 90, name: "ΜΠΑΧΤΣΕΒΑΝΙΔΟΥ ΜΕΡΟΠΗ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "25ης ΜΑΡΤΙΟΥ 12", phone: "2381023080" },
    { id: 95, name: "ΝΟΥΣΗΚΥΡΟΥ ΙΩΑΝΝΗΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "18Ης ΟΚΤΩΒΡΙΟΥ 5", phone: "2381022553" },
    { id: 107, name: "ΠΑΣΧΑΛΙΔΗΣ ΟΝΟΥΦΡΙΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "Π. ΜΕΛΑ 11", phone: "2381025007" },
    { id: 108, name: "ΠΑΣΧΑΛΟΓΛΟΥ ΧΡΙΣΤΙΝΑ", area: "Γιαννιτσά", subArea: "Δροσερό", address: "ΔΡΟΣΕΡΟ", phone: "2381096196" },
    { id: 110, name: "ΠΕΤΡΙΔΗΣ ΔΗΜΗΤΡΙΟΣ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "Γ. ΠΕΤΣΟΥ 2-4", phone: "2381026158" },
    { id: 121, name: "ΣΙΓΑΛΑΣ ΜΑΡΙΝΟΣ", area: "Έδεσσα", subArea: "Πλατάνη", address: "ΠΛΑΤΑΝΗ", phone: "2381099114" },
    { id: 132, name: "ΣΤΟΥΓΙΑΝΝΙΔΟΥ ΝΕΚΤΑΡΙΑ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΜΟΝΑΣΤΗΡΙΟΥ 30", phone: "2381022444" },
    { id: 139, name: "ΤΡΥΨΙΑΝΗ ΕΙΡΗΝΗ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΑΛΜΩΠΙΑΣ 1", phone: "2381024191" },
    { id: 142, name: "ΤΣΙΤΛΑΚΙΔΟΥ ΜΑΡΙΑ", area: "Έδεσσα", subArea: "Ριζάρι", address: "ΡΙΖΑΡΙ", phone: "2381091116" },
    { id: 152, name: "ΧΡΗΣΤΟΥ ΒΑΡΒΑΡΑ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΘΕΟΤΟΚΟΠΟΥΛΟΥ 5", phone: "2381023770" },
    { id: 154, name: "ΧΡΙΣΤΟΦΗ ΣΩΤΗΡΟΥΛΑ", area: "Έδεσσα", subArea: "Άρνισσα", address: "ΑΡΝΙΣΣΑ", phone: "2381031656" },
    { id: 158, name: "ΨΥΧΟΓΙΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΕΓΝΑΤΙΑΣ 36", phone: "2381022232" },
    { id: 159, name: "ΨΥΧΟΓΙΟΥ ΣΟΦΙΑ", area: "Έδεσσα", subArea: "Έδεσσα (Κέντρο)", address: "ΕΓΝΑΤΙΑΣ 36", phone: "2381022232" },

    // --- ΑΡΙΔΑΙΑ ---
    { id: 3, name: "ΑΓΟΡΑΣΤΟΥ ΧΡΙΣΤΙΝΑ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΑΘ. ΔΙΑΚΟΥ 18", phone: "2384022300" },
    { id: 6, name: "ΑΘΑΝΑΣΙΑΔΗΣ ΕΥΣΤΡΑΤΙΟΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΚΥΠΡΟΥ 41", phone: "2384021272" },
    { id: 9, name: "ΑΛΤΙΝΙΔΗΣ ΙΩΑΝΝΗΣ", area: "Αριδαία", subArea: "Γαρέφι", address: "ΓΑΡΕΦΙ", phone: "2384075083" },
    { id: 11, name: "ΑΝΔΡΕΑΔΟΥ ΕΥΑΓΓΕΛΙΑ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΑΓ. ΝΙΚΑΝΔΡΟΥ 8", phone: "2384021001" },
    { id: 34, name: "ΔΗΜΟΥ ΙΩΑΝΝΗΣ", area: "Αριδαία", subArea: "Αρχάγγελος", address: "ΑΡΧΑΓΓΕΛΟΣ", phone: "2384073618" },
    { id: 43, name: "ΖΙΑΚΑΣ ΓΕΩΡΓΙΟΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΚΥΠΡΟΥ 33", phone: "2384023066" },
    { id: 46, name: "ΘΩΜΑΪΔΗΣ ΣΩΤΗΡΙΟΣ", area: "Αριδαία", subArea: "Όρμα", address: "ΟΡΜΑ", phone: "2384094437" },
    { id: 49, name: "ΚΑΛΤΣΑ ΜΑΡΙΑ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΔΗΜΟΚΡΑΤΙΑΣ 2", phone: "2384022235" },
    { id: 51, name: "ΚΑΡΑΤΖΙΔΗΣ ΒΑΣΙΛΕΙΟΣ", area: "Αριδαία", subArea: "Εξαπλάτανος", address: "ΕΞΑΠΛΑΤΑΝΟΣ", phone: "2384042170" },
    { id: 52, name: "ΚΑΡΑΔΗΜΟΥ ΚΩΝΣΤΑΝΤΙΝΑ", area: "Αριδαία", subArea: "Εξαπλάτανος", address: "ΕΞΑΠΛΑΤΑΝΟΣ", phone: "2384041701" },
    { id: 57, name: "ΚΙΛΙΚΛΗΣ ΑΝΤΩΝΙΟΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "4Ης ΝΟΕΜΒΡΙΟΥ 7", phone: "2384309184" },
    { id: 58, name: "ΚΙΟΣΗΣ ΙΩΑΝΝΗΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΠΛ. ΑΓ.ΓΑΤΣΟΥ 1", phone: "2384025424" },
    { id: 62, name: "ΚΟΤΙΔΟΥ ΕΥΑ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΜΙΑΟΥΛΗ 21", phone: "2384022908" },
    { id: 68, name: "ΚΥΡΙΑΚΙΔΟΥ ΜΑΡΙΑ", area: "Αριδαία", subArea: "Ριζοχώρι", address: "ΡΙΖΟΧΩΡΙ", phone: "2384042010" },
    { id: 78, name: "ΜΑΡΚΟΥ ΜΑΡΙΑ", area: "Αριδαία", subArea: "Σωσάνδρα", address: "ΣΩΣΑΝΔΡΑ", phone: "2384028060" },
    { id: 79, name: "ΜΑΥΡΟΠΟΥΛΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΠΟΛΥΤΕΧΝΕΙΟΥ 1", phone: "2384024074" },
    { id: 80, name: "ΜΕΤΑΞΑ ΕΛΙΣΑΒΕΤ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΑΓ. ΝΙΚΑΝΔΡΟΥ - ΣΚΡΑ 21", phone: "2384024073" },
    { id: 81, name: "ΜΕΤΑΞΑΣ ΘΕΟΔΩΡΟΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΑΓ. ΝΙΚΑΝΔΡΟΥ - ΣΚΡΑ 21", phone: "2384024073" },
    { id: 87, name: "ΜΟΥΛΑ ΕΛΕΥΘΕΡΙΑ", area: "Αριδαία", subArea: "Κωνσταντία", address: "ΚΩΝΣΤΑΝΤΙΑ", phone: "2384051111" },
    { id: 98, name: "ΠΑΛΙΚΟΓΛΟΥ ΕΥΔΟΚΙΑ", area: "Αριδαία", subArea: "Ίδα", address: "ΙΔΑ", phone: "2384022555" },
    { id: 100, name: "ΠΑΠΑΔΟΠΟΥΛΟΣ ΑΓΓΕΛΟΣ", area: "Αριδαία", subArea: "Ξιφιανή", address: "ΞΙΦΙΑΝΗ", phone: "2384092353" },
    { id: 101, name: "ΠΑΠΑΠΔΟΠΟΥΛΟΥ ΠΩΛΙΝΑ", area: "Αριδαία", subArea: "Πρόμαχοι", address: "ΠΡΟΜΑΧΟΙ", phone: "2384075673" },
    { id: 109, name: "ΠΑΣΧΟΥΛΑΡΗ ΠΑΥΛΙΝΑ", area: "Αριδαία", subArea: "Λουτράκι", address: "ΛΟΥΤΡΑΚΙ", phone: "2384091122" },
    { id: 111, name: "ΠΛΑΤΗΣ ΒΑΣΙΛΕΙΟΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΜΙΑΟΥΛΗ 21", phone: "2384022908" },
    { id: 115, name: "ΣΑΠΑΚΟΛΗ ΕΥΑΓΓΕΛΙΑ", area: "Αριδαία", subArea: "Βορεινό", address: "ΒΟΡΕΙΝΟ", phone: "2384071151" },
    { id: 116, name: "ΣΑΠΟΥΝΤΖΗΣ ΝΙΚΟΛΑΟΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "Π. ΜΕΛΑ 28", phone: "2384023325" },
    { id: 118, name: "ΣΑΡΗΓΚΙΟΛΗΣ ΟΡΕΣΤΗΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΛΟΧ. ΠΑΣΣΙΑ 26", phone: "2384024298" },
    { id: 122, name: "ΣΙΓΚΕΡΗ ΖΩΗ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΔΗΜΟΚΡΑΤΙΑΣ 2", phone: "2384022235" },
    { id: 125, name: "ΣΙΣΚΟΥ ΜΑΡΙΑ", area: "Αριδαία", subArea: "Πολυκάρπη", address: "ΠΟΛΥΚΑΡΠΗ", phone: "2384031101" },
    { id: 133, name: "ΣΦΥΡΙΔΟΥ ΜΑΡΙΑ", area: "Αριδαία", subArea: "Τσάκωνες", address: "ΤΣΑΚΩΝΕΣ", phone: "2384022555" },
    { id: 136, name: "ΤΟΥΜΑΝΙΔΗΣ ΑΛΕΞΑΝΔΡΟΣ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΧΡ. ΣΜΥΡΝΗΣ 8", phone: "2384022430" },
    { id: 137, name: "ΤΟΥΜΑΝΙΔΟΥ ΚΛΑΡΑ", area: "Αριδαία", subArea: "Άψαλος", address: "ΑΨΑΛΟΣ", phone: "2384065459" },
    { id: 140, name: "ΤΣΑΚΩΝΑ ΑΙΚΑΤΕΡΙΝΗ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΧΡ. ΣΜΥΡΝΗΣ 8", phone: "2384022430" },
    { id: 146, name: "ΤΣΟΥΛΦΑ ΑΝΑΣΤΑΣΙΑ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΛΟΧ. ΠΑΣΣΙΑ 2", phone: "2384021700" },
    { id: 153, name: "ΧΡΗΣΤΟΥ ΠΕΛΑΓΙΑ", area: "Αριδαία", subArea: "Αριδαία (Πόλη)", address: "ΛΟΧ. ΠΑΣΣΙΑ 26", phone: "2384024298" },

    // --- ΓΙΑΝΝΙΤΣΑ ---
    { id: 7, name: "ΑΘΑΝΑΣΙΑΔΗΣ ΠΑΝΑΓΙΩΤΗΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΠΛΑΣΤΗΡΑ 29", phone: "2382029108" },
    { id: 10, name: "ΑΜΒΡΟΣΙΔΟΥ ΛΙΑΝΑ", area: "Γιαννιτσά", subArea: "Τριφύλλι", address: "ΤΡΙΦΥΛΛΙ", phone: "2382094300" },
    { id: 12, name: "ΒΑΡΕΛΑΣ ΜΙΧΑΗΛ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "Π. ΜΕΛΑ 5", phone: "2382024555" },
    { id: 14, name: "ΒΑΚΙΡΤΖΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ", area: "Γιαννιτσά", subArea: "Παλαίφυτο", address: "ΠΑΛΑΙΦΥΤΟ", phone: "2382041322" },
    { id: 17, name: "ΓΑΝΑ ΒΑΣΙΛΙΚΗ", area: "Γιαννιτσά", subArea: "Πενταπλάτανος", address: "ΠΕΝΤΑΠΛΑΤΑΝΟΣ", phone: "2382082077" },
    { id: 19, name: "ΓΙΟΥΤΙΚΑ ΕΛΕΥΘΕΡΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΤΣΑΚΜΑΚΗ 68", phone: "2382022694" },
    { id: 20, name: "ΓΚΑΪΤΑΤΖΗΣ ΑΓΓΕΛΟΣ", area: "Γιαννιτσά", subArea: "Αραβησσός", address: "ΑΡΑΒΗΣΣΟΣ", phone: "2382099191" },
    { id: 21, name: "ΓΚΙΚΑΣ ΑΛΕΞΑΝΔΡΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "Δ. ΣΕΜΕΡΤΖΙΔΗ", phone: "2382024813" },
    { id: 22, name: "ΓΚΙΚΑ ΑΝΑΣΤΑΣΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "Δ. ΣΕΜΕΡΤΖΙΔΗ", phone: "2382024813" },
    { id: 24, name: "ΓΚΟΥΤΣΙΔΟΥ ΒΑΣΙΛΙΚΗ", area: "Γιαννιτσά", subArea: "Αμπελιές", address: "ΑΜΠΕΛΙΕΣ", phone: "2382094540" },
    { id: 26, name: "ΓΟΡΟΖΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΑΓ. ΓΕΩΡΓΙΟΥ 11 Α", phone: "2382024060" },
    { id: 27, name: "ΓΟΤΟΥΧΙΔΗΣ ΧΑΡΑΛΑΜΠΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΒΕΝΙΖΕΛΟΥ 49", phone: "2382029030" },
    { id: 31, name: "ΔΑΝΤΣΑΚΗ ΡΟΔΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΜΠΑΦΡΑΣ 5", phone: "2382025500" },
    { id: 32, name: "ΔΕΜΕΡΤΖΙΔΟΥ ΧΡΙΣΤΙΝΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΧΑΤΖΗΔΗΜΗΤΡΙΟΥ 17", phone: "2382022888" },
    { id: 37, name: "ΔΟΥΛΚΕΡΙΔΗΣ ΚΟΣΜΑΣ", area: "Γιαννιτσά", subArea: "Καρυώτισσα", address: "ΚΑΡΥΩΤΙΣΣΑ", phone: "2382042630" },
    { id: 41, name: "ΖΑΧΑΡΙΑΔΟΥ ΓΕΩΡΓΙΑ", area: "Γιαννιτσά", subArea: "Ν. Μυλότοπος", address: "Ν. ΜΥΛΟΤΟΠΟΣ", phone: "2382051791" },
    { id: 42, name: "ΖΕΡΒΟΥ ΦΩΤΕΙΝΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΧΑΤΖΗΔΗΜΗΤΡΙΟΥ 70", phone: "2382022264" },
    { id: 44, name: "ΖΟΥΜΠΟΥΡΙΔΟΥ ΕΥΔΟΞΙΑ", area: "Γιαννιτσά", subArea: "Ν. Μυλότοπος", address: "Ν. ΜΥΛΟΤΟΠΟΣ", phone: "2382052210" },
    { id: 45, name: "ΘΕΜΕΛΗ ΜΗΝΑΔΩΡΑ", area: "Γιαννιτσά", subArea: "Αξός", address: "ΑΞΟΣ", phone: "2382051512" },
    { id: 50, name: "ΚΑΡΑΓΙΑΝΝΗ ΑΝΝΑ", area: "Γιαννιτσά", subArea: "Π. Πέλλα", address: "Π. ΠΕΛΛΑ", phone: "2382031447" },
    { id: 53, name: "ΚΑΡΑΟΥΛΑΝΗ ΕΥΑΓΓΕΛΙΑ", area: "Γιαννιτσά", subArea: "Γαλατάδες", address: "ΓΑΛΑΤΑΔΕΣ", phone: "2382042299" },
    { id: 54, name: "ΚΑΡΑΠΟΥΡΤΖΙΔΗΣ ΑΝΑΣΤΑΣΙΟΣ", area: "Κρύα Βρύση", subArea: "Αγ. Λουκάς", address: "ΑΓ.ΛΟΥΚΑΣ", phone: "2382063620" },
    { id: 61, name: "ΚΟΡΥΦΙΔΟΥ ΑΝΤΩΝΙΑ", area: "Γιαννιτσά", subArea: "Καρυώτισσα", address: "ΚΑΡΥΩΤΙΣΣΑ", phone: "2382041545" },
    { id: 64, name: "ΚΟΥΠΑΡΑΝΙΔΟΥ ΚΑΛΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΤΑΓ. ΓΕΩΡΓΟΥΛΗ 23", phone: "2382024825" },
    { id: 65, name: "ΚΟΥΤΣΟΚΩΣΤΑ ΙΩΑΝΝΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΑΦΩΝ ΠΑΠΑΙΩΑΝΝΟΥ", phone: "2382024141" },
    { id: 67, name: "ΚΥΡΙΑΚΙΔΗΣ ΕΥΑΓΓΕΛΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΜΠΑΦΡΑΣ 18", phone: "2382083233" },
    { id: 69, name: "ΛΙΑΒΑΣ ΑΘΑΝΑΣΙΟΣ", area: "Γιαννιτσά", subArea: "Αχλαδοχώρι", address: "ΑΧΛΑΔΟΧΩΡΙ", phone: "2382181100" },
    { id: 71, name: "ΛΑΠΙΧΟΥ ΚΑΛΛΙΟΠΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΠΛ. ΓΚ. ΓΙΩΤΑ 2", phone: "2382028229" },
    { id: 74, name: "ΜΑΜΑΓΚΙΝΙΔΟΥ ΕΜΜΑΝΟΥΕΛΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΜΠΑΦΡΑΣ 18", phone: "2382083233" },
    { id: 75, name: "ΜΑΝΔΑΛΤΣΗ ΑΙΚΑΤΕΡΙΝΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΚΟΛΟΚΟΤΡΩΝΗ 15", phone: "2382022735" },
    { id: 76, name: "ΜΑΝΘΟΥ ΑΙΚΑΤΕΡΙΝΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΚΥΠΡΟΥ & ΚΟΛΟΚΟΤΡΩΝΗ 11", phone: "2382026979" },
    { id: 82, name: "ΜΗΝΟΒΓΙΟΥΔΗΣ ΔΗΜΗΤΡΙΟΣ", area: "Γιαννιτσά", subArea: "Ραχώνα", address: "ΡΑΧΩΝΑ", phone: "2391054431" },
    { id: 97, name: "ΠΑΚΟΥ ΑΝΑΣΤΑΣΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "Δ. ΣΤΑΜΚΟΥ 21", phone: "2382020039" },
    { id: 102, name: "ΠΑΠΑΖΟΓΛΟΥ ΕΛΕΝΗ", area: "Γιαννιτσά", subArea: "Π. Μυλότοπος", address: "Π. ΜΥΛΟΤΟΠΟΣ", phone: "2382051200" },
    { id: 104, name: "ΠΑΠΑΝΤΩΝΗ ΧΑΡΙΚΛΕΙΑ", area: "Γιαννιτσά", subArea: "Π. Πέλλα", address: "Π. ΠΕΛΛΑ", phone: "2382031447" },
    { id: 105, name: "ΠΑΠΑΣΤΑΥΡΟΥ ΣΟΦΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΤΑΓ. ΓΕΩΡΓΟΥΛΗ 7", phone: "2382025444" },
    { id: 112, name: "ΠΛΟΥΓΑΡΛΗΣ ΔΗΜΗΤΡΙΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΕΘ. ΑΝΤΙΣΤΑΣΕΩΣ 4", phone: "2382028806" },
    { id: 113, name: "ΠΟΛΥΧΡΟΝΙΑΔΟΥ ΜΑΡΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "Δ. ΣΕΜΕΡΤΖΙΔΗ", phone: "2382022620" },
    { id: 117, name: "ΣΑΡΑΜΑΝΤΟΥ ΣΟΥΛΤΑΝΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "Χ. ΔΗΜΗΤΡΙΟΥ 1", phone: "2382024134" },
    { id: 120, name: "ΣΙΑΜΑΝΤΑ ΠΕΤΡΙΝΑ", area: "Γιαννιτσά", subArea: "Γαλατάδες", address: "ΓΑΛΑΤΑΔΕΣ", phone: "2382042002" },
    { id: 123, name: "ΣΙΓΚΟΥΔΗ ΑΙΚΤΕΡΙΝΗ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΖΑΜΙΔΗ 4", phone: "2382023881" },
    { id: 127, name: "ΣΚΡΕΚΑ ΘΕΟΓΝΩΣΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΤΣΑΚΜΑΚΗ 72", phone: "2382024753" },
    { id: 128, name: "ΣΟΥΜΠΑΣΗΣ ΔΗΜΗΤΡΙΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΒΕΝΙΖΕΛΟΥ 180", phone: "2382081100" },
    { id: 129, name: "ΣΟΥΜΠΑΣΗΣ ΝΙΚΟΛΑΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΒΕΝΙΖΕΛΟΥ - ΑΡΒΑΝΙΤΗ 2", phone: "2382024904" },
    { id: 130, name: "ΣΤΑΥΡΑΚΗΣ ΧΡΗΣΤΟΣ", area: "Γιαννιτσά", subArea: "Νέα Πέλλα", address: "ΝΕΑ ΠΕΛΛΑ", phone: "2382031471" },
    { id: 131, name: "ΣΤΑΥΡΟΠΟΥΛΟΣ ΣΤΑΥΡΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 140", phone: "2382028400" },
    { id: 134, name: "ΤΕΡΖΟΥΔΗ ΜΑΡΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΒΕΝΙΖΕΛΟΥ 96", phone: "2382027651" },
    { id: 143, name: "ΤΣΙΤΣΙΓΙΑ ΣΟΦΙΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΒΕΝΙΖΕΛΟΥ 127", phone: "2382027545" },
    { id: 144, name: "ΤΣΙΤΣΙΓΙΑ ΘΕΟΔΩΡΑ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΒΕΝΙΖΕΛΟΥ 127", phone: "2382026044" },
    { id: 145, name: "ΤΣΟΝΟΓΛΟΥ ΔΕΣΠΟΙΝΑ", area: "Γιαννιτσά", subArea: "Δυτικό", address: "ΔΥΤΙΚΟ", phone: "2382093040" },
    { id: 148, name: "ΦΑΡΜΑΚΗΣ ΙΩΑΝΝΗΣ", area: "Γιαννιτσά", subArea: "Άθυρα", address: "ΑΘΥΡΑ", phone: "2391091551" },
    { id: 149, name: "ΦΟΥΝΤΟΥΚΙΔΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΒΕΛ. ΡΩΜΑ 12", phone: "2382082190" },
    { id: 151, name: "ΧΑΤΖΗΔΗΜΗΤΡΙΟΥ ΙΟΥΛΙΑ", area: "Γιαννιτσά", subArea: "Μελίσσι", address: "ΜΕΛΙΣΣΙ", phone: "2382042444" },
    { id: 156, name: "ΧΡΥΣΟΣΤΟΜΙΔΗΣ ΑΝΤΩΝΙΟΣ", area: "Γιαννιτσά", subArea: "Γιαννιτσά (Πόλη)", address: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 178", phone: "2382025735" },

    // --- ΣΚΥΔΡΑ & ΧΩΡΙΑ ---
    { id: 8, name: "ΑΛΜΠΑΝΙΔΟΥ ΒΑΣΙΛΙΚΗ", area: "Σκύδρα", subArea: "Αρσένι", address: "ΑΡΣΕΝΙ", phone: "2381071194", map: "" },
    { id: 13, name: "ΒΑΡΣΑΚΟΠΟΥΛΟΥ ΒΑΣΙΛΙΚΗ", area: "Σκύδρα", subArea: "Ριζό", address: "ΡΙΖΟ", phone: "2381071604", map: "" },
    { id: 16, name: "ΒΕΧΤΣΑΛΗΣ ΣΩΤΗΡΙΟΣ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "Μ.ΑΛΕΞΑΝΔΡΟΥ 29", phone: "2381082057", map: "" },
    { id: 30, name: "ΓΩΝΙΑΔΗ ΛΙΑΝΑ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "24ης ΙΟΥΛΙΟΥ 8", phone: "2381089588", map: "" },
    { id: 33, name: "ΔΗΜΗΤΡΙΑΔΟΥ ΑΛΕΞΑΝΔΡΑ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "ΣΑΦΡΑΠΟΛΕΩΣ 17", phone: "2381089199", map: "" },
    { id: 36, name: "ΔΟΥΛΚΕΡΙΔΗΣ ΧΑΡΑΛΑΜΠΟΣ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "ΕΘΝ. ΑΝΤΙΣΤΑΣΕΩΣ 24", phone: "2381088845", map: "" },
    { id: 38, name: "ΕΜΜΑΝΟΥΗΛΙΔΗΣ ΓΕΩΡΓΙΟΣ", area: "Σκύδρα", subArea: "Καλύβια", address: "ΚΑΛΥΒΙΑ", phone: "2381061195", map: "" },
    { id: 40, name: "ΖΑΡΟΓΟΥΛΙΔΗΣ ΠΑΝΑΓΙΩΤΗΣ", area: "Σκύδρα", subArea: "Μάνδαλο", address: "ΜΑΝΔΑΛΟ", phone: "2381097677", map: "" },
    { id: 48, name: "ΚΑΛΑΦΑΤΗΣ ΣΤΑΥΡΟΣ", area: "Σκύδρα", subArea: "Πρ. Ηλίας", address: "ΠΡ. ΗΛΙΑΣ", phone: "2381041959", map: "" },
    { id: 77, name: "ΜΑΝΘΟΥ ΧΡΗΣΤΟΣ", area: "Σκύδρα", subArea: "Λιποχώρι", address: "ΛΙΠΟΧΩΡΙ", phone: "2381400770", map: "" },
    { id: 83, name: "ΜΗΝΤΙΛΑΚΗ ΔΕΣΠΟΙΝΑ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "ΕΘΝ. ΑΝΤΙΣΤΑΣΗΣ 8", phone: "2381088875", map: "" },
    { id: 91, name: "ΜΠΟΥΝΤΩΝΑΣ ΕΜΜΑΝΟΥΗΛ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "Μ.ΑΛΕΞΑΝΔΡΟΥ 30", phone: "2381089333", map: "" },
    { id: 92, name: "ΝΑΤΣΚΟΥ ΦΩΤΕΙΝΗ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "Μ. ΑΛΕΞΑΝΔΡΟΥ 33", phone: "2381089221", map: "" },
    { id: 94, name: "ΝΟΥΣΗΚΥΡΟΥ ΓΕΩΡΓΙΟΣ", area: "Σκύδρα", subArea: "Σεβαστειανά", address: "ΣΕΒΑΣΤΕΙΑΝΑ", phone: "2381089565", map: "" },
    { id: 96, name: "ΝΟΥΣΗΚΥΡΟΥ ΣΟΦΙΑ", area: "Σκύδρα", subArea: "Λουτροχώρι", address: "ΛΟΥΤΡΟΧΩΡΙ", phone: "2381052810", map: "" },
    { id: 99, name: "ΠΑΠΑΓΕΩΡΓΙΟΥ ΜΑΡΙΑ", area: "Σκύδρα", subArea: "Καλή", address: "ΚΑΛΗ", phone: "2381041884", map: "" },
    { id: 103, name: "ΠΑΠΑΪΩΑΝΝΟΥ ΜΑΡΙΑ", area: "Σκύδρα", subArea: "Πετριά", address: "ΠΕΤΡΙΑ", phone: "2381071056", map: "" },
    { id: 114, name: "ΣΑΒΒΙΔΗΣ ΠΑΝΑΓΙΩΤΗΣ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "Μ. ΑΛΕΞΑΝΔΡΟΥ 40", phone: "2381088173", map: "" },
    { id: 119, name: "ΣΔΡΑΥΚΑΚΗΣ ΒΑΣΙΛΕΙΟΣ", area: "Σκύδρα", subArea: "Δάφνη", address: "ΔΑΦΝΗ", phone: "2381061290", map: "" },
    { id: 124, name: "ΣΙΔΗΡΟΠΟΥΛΟΥ ΜΑΡΙΚΑ", area: "Σκύδρα", subArea: "Μαυροβούνι", address: "ΜΑΥΡΟΒΟΥΝΙ", phone: "2381088532", map: "" },
    { id: 126, name: "ΣΚΕΝΔΕΡΙΔΗΣ ΠΑΥΛΟΣ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "ΕΘ.ΑΝΤΙΣΤΑΣΕΩΣ 24", phone: "2381088845", map: "" },
    { id: 135, name: "ΤΖΑΙΚΟΥ ΧΡΙΣΤΙΝΑ", area: "Σκύδρα", subArea: "Άσπρο", address: "ΑΣΠΡΟ", phone: "2381061040", map: "" },
    { id: 138, name: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΗΣ ΛΑΖΑΡΟΣ", area: "Σκύδρα", subArea: "Καλή", address: "ΚΑΛΗ", phone: "2381041464", map: "" },
    { id: 141, name: "ΤΣΕΛΕΠΗ ΜΑΡΙΑ", area: "Σκύδρα", subArea: "Λιπαρό", address: "ΛΙΠΑΡΟ", phone: "2381061851", map: "" },
    { id: 147, name: "ΦΑΝΤΙΔΟΥ ΕΙΡΗΝΗ", area: "Σκύδρα", subArea: "Σκύδρα (Πόλη)", address: "ΑΡΓΥΡΟΥΠΟΛΕΩΣ 23", phone: "2381089980", map: "" },
    { id: 150, name: "ΧΑΤΖΗΔΗΜΟΥ ΓΡΗΓΟΡΙΟΣ", area: "Σκύδρα", subArea: "Καλλίπολη", address: "ΚΑΛΛΙΠΟΛΗ", phone: "2381094000", map: "" },

    // --- ΚΡΥΑ ΒΡΥΣΗ ---
    { id: 4, name: "ΑΔΑΜΙΔΗΣ ΘΕΟΔΟΣΙΟΣ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "Β. ΠΑΥΛΟΥ 77", phone: "2382062100" },
    { id: 5, name: "ΑΔΑΜΙΔΟΥ ΜΑΡΘΑ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "Β. ΠΑΥΛΟΥ 77", phone: "2382062100" },
    { id: 39, name: "ΕΜΜΑΝΟΥΗΛΙΔΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "ΚΡΥΑ ΒΡΥΣΗ", phone: "2382061028" },
    { id: 59, name: "ΚΙΤΚΑ ΑΝΑΣΤΑΣΙΑ", area: "Κρύα Βρύση", subArea: "Ακρολίμνη", address: "ΑΚΡΟΛΙΜΝΗ", phone: "2382063656" },
    { id: 70, name: "ΛΑΠΠΑ ΑΓΓΕΛΑ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "Μ. ΑΛΕΞΑΝΔΡΟΥ 8", phone: "2382061786" },
    { id: 84, name: "ΜΙΧΑΚΗ ΑΘΗΝΑ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "ΒΕΝΙΖΕΛΟΥ 71", phone: "2382061124" },
    { id: 93, name: "ΝΑΥΡΟΖΙΔΗΣ ΑΝΑΣΤΑΣΙΟΣ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "Β. ΠΑΥΛΟΥ 32", phone: "2382062120" },
    { id: 106, name: "ΠΑΡΔΑΛΗ ΓΕΩΡΓΙΑ", area: "Κρύα Βρύση", subArea: "Εσώβαλτα", address: "ΕΣΩΒΑΛΤΑ", phone: "2382071001" },
    { id: 155, name: "ΧΡΥΣΑΓΗΣ ΧΑΡΑΛΑΜΠΟΣ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "ΒΑΣ. ΠΑΥΛΟΥ 91", phone: "2382061028" },
    { id: 157, name: "ΧΥΤΑ ΕΛΕΝΗ", area: "Κρύα Βρύση", subArea: "Κρύα Βρύση (Κέντρο)", address: "ΑΙΣΧΥΛΟΥ 19", phone: "2382062010" }
];

let globalSchedule = []; 

// --- ΒΟΗΘΗΤΙΚΕΣ ΣΥΝΑΡΤΗΣΕΙΣ ---

function normalize(str) {
    if (!str) return "";
    return str
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
        .replace(/\s+/g, "")
        .trim();
}

function parseDateStr(dateStr) {
    if (!dateStr) return null;
    const cleanStr = dateStr.trim().replace(/-/g, '/');
    const parts = cleanStr.split('/');
    
    // Περίπτωση d/m/y (π.χ. 1/12/2025)
    if (parts.length === 3) {
        let d = parseInt(parts[0], 10);
        let m = parseInt(parts[1], 10);
        let y = parseInt(parts[2], 10);
        
        // ΔΙΟΡΘΩΣΗ: Έλεγχος αν το format είναι YYYY/MM/DD
        if (d > 31) {
            // Αν το πρώτο νούμερο είναι > 31, τότε είναι Έτος (YYYY/MM/DD)
            y = parseInt(parts[0], 10);
            m = parseInt(parts[1], 10);
            d = parseInt(parts[2], 10);
        } else {
            // Αλλιώς είναι d/m/y
            // Διόρθωση για 2ψηφιο έτος (π.χ. 25 -> 2025)
            if (y < 100) y += 2000;
        }
        
        return { d, m, y };
    }
    return null;
}

// ⚠️ ΝΕΑ ΣΥΝΑΡΤΗΣΗ: Λήψη Ώρας Δικτύου ⚠️
async function getGreeceTime() {
    try {
        const response = await fetch("https://worldtimeapi.org/api/timezone/Europe/Athens");
        if (!response.ok) throw new Error("Time API Error");
        const data = await response.json();
        return new Date(data.datetime);
    } catch (error) {
        console.warn("Δεν βρέθηκε ώρα δικτύου, χρήση ώρας συσκευής.", error);
        return new Date(); // Fallback στην ώρα συσκευής αν αποτύχει
    }
}

// Τροποποιημένη getShiftDate για να δέχεται το Date Object
function getShiftDate(dateObj) {
    const now = new Date(dateObj); // Δημιουργία αντιγράφου για να μην πειράξουμε το πρωτότυπο
    // Αν η ώρα είναι < 8, πάμε στην προηγούμενη μέρα
    if (now.getHours() < 8) {
        now.setDate(now.getDate() - 1);
    }
    return {
        d: now.getDate(),
        m: now.getMonth() + 1,
        y: now.getFullYear(),
        obj: now 
    };
}

function parseCSVLine(text) {
    let result = [];
    let cell = '';
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char === '"') { inQuotes = !inQuotes; }
        else if (char === ',' && !inQuotes) {
            result.push(cell.trim());
            cell = '';
        } else { cell += char; }
    }
    result.push(cell.trim());
    return result;
}

function findPharmacyIds(rawValue, allPharmacies, currentArea) {
    if (!rawValue) return [];
    
    if (/^\d+$/.test(rawValue)) {
        return [parseInt(rawValue, 10)];
    }

    if (/^[\d\-\s,]+$/.test(rawValue)) {
        return rawValue.split(/[\-\s,]+/).map(n => parseInt(n)).filter(n => !isNaN(n));
    }

    const areaPharmacies = allPharmacies.filter(p => normalize(p.area) === normalize(currentArea));
    const tokens = rawValue.split(/[\-,\/]+/);
    let foundIds = [];

    tokens.forEach(token => {
        let searchStr = normalize(token);
        if (!searchStr) return;

        let match = areaPharmacies.find(p => normalize(p.name).includes(searchStr));

        if (!match) {
            const surname = searchStr.split(' ')[0]; 
            if (surname.length > 2) { 
                match = areaPharmacies.find(p => normalize(p.name).includes(surname));
            }
        }

        if (match) foundIds.push(match.id);
    });

    return [...new Set(foundIds)]; 
}

// ⚠️ ΑΛΛΑΓΗ ΣΤΗ ΡΟΗ ΕΚΤΕΛΕΣΗΣ (ASYNC) ⚠️
document.addEventListener('DOMContentLoaded', async () => {
    const tabsContainer = document.getElementById('tabs-container');
    const cityContainer = document.getElementById('city-pharmacy-container');
    const cityTitle = document.getElementById('city-title');
    const gridContainer = document.getElementById('pharmacy-grid');
    const dateDisplay = document.getElementById('current-date');
    const loadingMsg = document.getElementById('loading-msg');
    const mainLayout = document.getElementById('main-layout');
    const tickerContainer = document.getElementById('ticker-container');
    const tickerText = document.getElementById('ticker-text');
    const bottomAdContainer = document.getElementById('bottom-ad-container');

    let fileLinkContainer = document.getElementById('file-link-container');
    if (!fileLinkContainer) {
        fileLinkContainer = document.createElement('div');
        fileLinkContainer.id = 'file-link-container';
        if(cityTitle) cityTitle.parentNode.insertBefore(fileLinkContainer, cityTitle.nextSibling);
    }

    // 1. Λήψη πραγματικής ώρας Ελλάδας (Async)
    if(loadingMsg) loadingMsg.style.display = 'block';
    
    const realTime = await getGreeceTime(); // Περιμένουμε να έρθει η ώρα
    const shiftDate = getShiftDate(realTime); // Υπολογίζουμε τη βάρδια

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    if(dateDisplay) dateDisplay.textContent = shiftDate.obj.toLocaleDateString('el-GR', options);

    // 2. Τώρα καλούμε το Google Sheet με τη σωστή ημερομηνία
    fetchGoogleSheet(shiftDate);

    async function fetchGoogleSheet(currentShiftDate) {
        try {
            if (GOOGLE_SHEET_CSV_URL.includes('/edit')) {
                throw new Error("Λάθος Link! Έχεις βάλει το link επεξεργασίας.");
            }

            const response = await fetch(GOOGLE_SHEET_CSV_URL);
            if (!response.ok) throw new Error("Δεν ήταν δυνατή η σύνδεση με το Google Sheet.");
            
            const data = await response.text();
            
            const rows = data.split('\n').slice(1); 
            
            rows.forEach(row => {
                if (!row.trim()) return;

                const cols = parseCSVLine(row); 
                if (cols.length < 2) return; 

                const parsedDate = parseDateStr(cols[0]);
                const area = cols[1];
                
                const nightIds = findPharmacyIds(cols[2], pharmacies, area);
                const dayIds = findPharmacyIds(cols[3], pharmacies, area);

                const link = cols[4] ? cols[4].replace(/"/g, '') : null;
                const tickerMsg = cols[5] ? cols[5].replace(/"/g, '') : null;
                const bottomAd = cols[6] ? cols[6].replace(/"/g, '') : null; // Στήλη G

                globalSchedule.push({ 
                    dateObj: parsedDate,
                    area, nightIds, dayIds, link, adText: tickerMsg, bottomAd: bottomAd 
                });
            });

            // Ticker Logic
            const todayEntry = globalSchedule.find(s => 
                s.dateObj && 
                s.dateObj.d === currentShiftDate.d &&
                s.dateObj.m === currentShiftDate.m &&
                s.dateObj.y === currentShiftDate.y &&
                s.adText && s.adText.length > 2
            );
            
            if (todayEntry && tickerText) {
                tickerText.textContent = todayEntry.adText;
                tickerContainer.style.display = 'block'; 
            } else if (tickerContainer) {
                tickerContainer.style.display = 'none'; 
            }

            if (loadingMsg) loadingMsg.style.display = 'none';
            if (mainLayout) mainLayout.style.display = 'grid';
            initApp(currentShiftDate);

        } catch (error) {
            console.error(error);
            if (loadingMsg) {
                loadingMsg.innerHTML = `<div style="color:red; font-weight:bold; border:1px solid red; padding:10px; background:#fff0f0;">
                    ⚠️ Πρόβλημα: ${error.message}
                </div>`;
            }
        }
    }

    function initApp(currentShiftDate) {
        const mainAreas = ["Έδεσσα", "Γιαννιτσά", "Αριδαία", "Σκύδρα", "Κρύα Βρύση"];
        let currentArea = "Έδεσσα";

        function renderTabs() {
            if(!tabsContainer) return;
            tabsContainer.innerHTML = '';
            mainAreas.forEach(area => {
                const btn = document.createElement('button');
                btn.className = `tab-btn ${area === currentArea ? 'active' : ''}`;
                btn.textContent = area;
                btn.onclick = () => {
                    currentArea = area;
                    renderTabs();
                    renderContent();
                };
                tabsContainer.appendChild(btn);
            });
        }

        function renderContent() {
            if(!cityContainer || !gridContainer) return;
            
            cityContainer.innerHTML = '';
            gridContainer.innerHTML = '';
            fileLinkContainer.innerHTML = '';
            if(bottomAdContainer) bottomAdContainer.style.display = 'none'; // Reset
            cityTitle.textContent = `Εφημερεύει: ${currentArea}`;

            const scheduleEntry = globalSchedule.find(s => 
                s.dateObj &&
                s.dateObj.d === currentShiftDate.d &&
                s.dateObj.m === currentShiftDate.m &&
                s.dateObj.y === currentShiftDate.y &&
                normalize(s.area) === normalize(currentArea)
            );
            
            const nightIds = scheduleEntry ? scheduleEntry.nightIds : [];
            const dayIds = scheduleEntry ? scheduleEntry.dayIds : [];
            const fileLink = scheduleEntry ? scheduleEntry.link : null;
            const bottomAdText = scheduleEntry ? scheduleEntry.bottomAd : null;

            if (fileLink && fileLink.length > 5) {
                fileLinkContainer.innerHTML = `
                    <a href="${fileLink}" target="_blank" style="
                        display: block; background: #2c3e50; color: white; text-align: center; 
                        padding: 12px; margin-bottom: 20px; border-radius: 8px; 
                        text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.2);">
                        <i class="fas fa-file-download"></i> Προβολή Επίσημου Προγράμματος (PDF/Εικόνα)
                    </a>`;
            }

            // ⚠️ ΛΟΓΙΚΗ ΔΙΑΦΗΜΙΣΗΣ (Δυναμική ή Default Z-Boost) ⚠️
            let adContent = '';
            if (bottomAdText && bottomAdText.length > 2) {
                // Υπάρχει διαφήμιση στο Excel (Στήλη G)
                if (bottomAdText.includes('<')) {
                    adContent = bottomAdText; // Είναι HTML (π.χ. εικόνα)
                } else {
                    // Είναι απλό Link -> Το κάνουμε iframe
                    adContent = `<iframe src="${bottomAdText}" title="Ad" style="width:100%; height:500px; border:none; border-radius:8px;"></iframe>`;
                }
            } else {
                // Δεν υπάρχει στο Excel -> Δείχνουμε την Default Z-Boost
                adContent = `<iframe src="https://zboost.netlify.app/" title="Z-Boost" style="width:100%; height:500px; border:none; border-radius:8px;"></iframe>`;
            }

            if (bottomAdContainer) {
                bottomAdContainer.innerHTML = adContent;
                bottomAdContainer.style.display = 'block';
            }

            const areaPharmacies = pharmacies.filter(p => normalize(p.area) === normalize(currentArea));
            const centerName = cityCenters[currentArea];

            // 1. ΚΕΝΤΡΟ - NIGHT
            const activeNightPharmacies = areaPharmacies.filter(p => nightIds.includes(p.id) && p.subArea === centerName);
            if (activeNightPharmacies.length > 0) {
                const header = document.createElement('div');
                header.innerHTML = '<h4 style="margin:0 0 10px; color:#008542; border-bottom:2px solid #008542; padding-bottom:5px;">ΔΙΑΝΥΚΤΕΡΕΥΟΝΤΑ (24ωρο)</h4>';
                cityContainer.appendChild(header);
                activeNightPharmacies.forEach(p => renderCard(p, cityContainer, 'night'));
            }

            // 2. ΚΕΝΤΡΟ - DAY
            const activeDayPharmacies = areaPharmacies.filter(p => dayIds.includes(p.id) && p.subArea === centerName);
            if (activeDayPharmacies.length > 0) {
                const header = document.createElement('div');
                header.innerHTML = '<h4 style="margin:20px 0 10px; color:#e67e22; border-bottom:2px solid #e67e22; padding-bottom:5px;">ΔΙΗΜΕΡΕΥΟΝΤΑ (Έως 21:00/22:00)</h4>';
                cityContainer.appendChild(header);
                activeDayPharmacies.forEach(p => renderCard(p, cityContainer, 'day'));
            }

            if (activeNightPharmacies.length === 0 && activeDayPharmacies.length === 0) {
                cityContainer.innerHTML = `
                    <div class="featured-card" style="background:#f9f9f9; border-top: 4px solid #ccc;">
                        <p style="color:#777; margin:0;">Δεν βρέθηκε εφημερία στο κέντρο για σήμερα.</p>
                        ${!fileLink && !SHOW_ALL_MODE ? '<small style="color:#999;">(Ελέγξτε το αρχείο προγράμματος)</small>' : ''}
                    </div>`;
            }

            // 3. ΧΩΡΙΑ
            const uniqueSubAreas = [...new Set(areaPharmacies.map(p => p.subArea))]
                .filter(sub => sub !== centerName).sort();

            if (uniqueSubAreas.length > 0) {
                uniqueSubAreas.forEach(sub => {
                    const activePharmasInSub = areaPharmacies
                        .filter(p => (nightIds.includes(p.id) || dayIds.includes(p.id)) && p.subArea === sub)
                        .sort((a, b) => a.name.localeCompare(b.name));

                    const hasPharmacy = activePharmasInSub.length > 0;
                    const row = document.createElement('div');
                    row.className = `location-row ${hasPharmacy ? 'has-pharmacy' : ''}`;

                    const previewText = activePharmasInSub.map(p => p.name).join(', ');

                    let headerHTML = `
                        <div class="location-header">
                            <div class="location-info">
                                <span class="village-name">${sub}</span>
                                ${hasPharmacy
                                    ? `<span class="pharmacy-preview"><i class="fas fa-check-circle"></i> ${previewText}</span>` 
                                    : `<span style="font-size:0.8rem; color:#bbb;">-</span>`}
                            </div>
                            ${hasPharmacy ? '<i class="fas fa-chevron-down" style="color:#aaa;"></i>' : ''}
                        </div>`;

                    let detailsHTML = '';
                    if (hasPharmacy) {
                        detailsHTML = '<div class="location-details"><div class="details-content">';
                        activePharmasInSub.forEach((pharma, index) => {
                            const mapLink = pharma.map ? pharma.map : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pharma.name + " " + pharma.address + " " + pharma.area)}`;
                            if (index > 0) detailsHTML += '<hr style="margin: 15px 0; border: 0; border-top: 1px solid #eee;">';
                            detailsHTML += `
                                <div class="pharma-block">
                                    <p style="margin:0 0 5px; font-weight:bold; color:#2c3e50;">${pharma.name}</p>
                                    <p style="margin:0 0 10px; color:#555; font-size:0.95rem;"><i class="fas fa-map-marker-alt"></i> ${pharma.address}</p>
                                    <div style="display:flex; gap:10px;">
                                        <a href="tel:${pharma.phone}" class="btn btn-call" style="background:var(--primary-color); color:white; padding:8px; border-radius:5px; text-decoration:none; flex:1; text-align:center; font-size:0.9rem;">Κλήση</a>
                                        <a href="${mapLink}" target="_blank" class="btn btn-map" style="background:white; border:1px solid #ccc; color:#333; padding:8px; border-radius:5px; text-decoration:none; flex:1; text-align:center; font-size:0.9rem;">Χάρτης</a>
                                    </div>
                                </div>`;
                        });
                        detailsHTML += '</div></div>';
                    }
                    row.innerHTML = headerHTML + detailsHTML;
                    if(hasPharmacy) {
                        row.querySelector('.location-header').addEventListener('click', () => {
                            const details = row.querySelector('.location-details');
                            const icon = row.querySelector('.fa-chevron-down');
                            if (details.style.maxHeight) {
                                details.style.maxHeight = null;
                                icon.style.transform = 'rotate(0deg)';
                            } else {
                                details.style.maxHeight = details.scrollHeight + "px";
                                icon.style.transform = 'rotate(180deg)';
                            }
                        });
                    }
                    gridContainer.appendChild(row);
                });
            } else {
                 gridContainer.innerHTML = '<p style="text-align:center; color:#999;">Δεν υπάρχουν χωριά.</p>';
            }
        }

        function renderCard(p, container, type) {
            const mapLink = p.map ? p.map : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + " " + p.address + " " + p.area)}`;
            const card = document.createElement('div');
            card.className = 'featured-card';
            if (type === 'day') { card.style.borderTopColor = '#e67e22'; }

            card.innerHTML = `
                <div style="font-size:0.9rem; color:#888; text-transform:uppercase; letter-spacing:1px; margin-bottom:5px;">
                    ${type === 'day' ? 'ANOIXTO EΩΣ 21:00/22:00' : 'ANOIXTO 24ΩΡΟ'}
                </div>
                <h3>${p.name}</h3>
                <div class="address"><i class="fas fa-map-marker-alt"></i> ${p.address}</div>
                <a href="tel:${p.phone}" class="big-phone" style="color:${type === 'day' ? '#e67e22' : '#008542'}">${p.phone}</a>
                <div class="featured-actions">
                    <a href="tel:${p.phone}" class="btn-large btn-call-large" style="background:${type === 'day' ? '#e67e22' : '#008542'}"><i class="fas fa-phone-alt"></i> Κλήση</a>
                    <a href="${mapLink}" target="_blank" class="btn-large btn-map-large"><i class="fas fa-directions"></i> Χάρτης</a>
                </div>`;
            container.appendChild(card);
        }

        renderTabs();
        renderContent();
    }
});
