// --- 1. ΒΑΣΗ ΔΕΔΟΜΕΝΩΝ ΠΕΛΑΤΩΝ ---
const knownCustomers = {
    "025305198": { eponimia: "ΒΑΡΕΛΑΣ ΜΙΧΑΗΛ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6937457161", phone: "", email: "mixalisvarelas@gmail.com" },
    "028058883": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΗΣ ΛΑΖΑΡΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6944581887", phone: "2381041464", email: "trilazar@otenet.gr" },
    "030796217": { eponimia: "ΚΥΡΙΑΚΟΥ ΑΓΛΑΙΑ ΝΙΚΟΛΑΟ", doy: "ΝΕΩΝ ΜΟΥΔΑΝΙΩΝ", mobile: "", phone: "2399021663", email: "kyriakou.agla@gmail.com" },
    "041630585": { eponimia: "ΓΕΡΟΝΤΟΠΟΥΛΟΣ ΝΙΚΗΦΟΡΟΣ ΘΕΟΦΙΛΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6942207814", phone: "2551028764", email: "nikigero1@hotmail.com" },
    "042643289": { eponimia: "ΜΑΙΝΟΥ ΑΛΕΞΑΝΔΡΑ ΝΙΚΟΛΑΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6977591863", phone: "", email: "mainoualex@gmail.com" },
    "043720722": { eponimia: "ΚΑΡΑΔΗΜΟΥ ΚΩΝΣΤΑΝΤΙΝΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "", email: "karad12@otenet.gr" },
    "047359704": { eponimia: "ΦΑΡΑΚΛΙΩΤΗΣ ΔΗΜΗΤΡΙΟΣ ΘΩΜΑ", doy: "ΧΑΛΚΙΔΑΣ", mobile: "6973747981", phone: "2221060657", email: "farmakeiokamares@gmail.com" },
    "047862819": { eponimia: "ΠΑΠΑΔΑΚΗΣ ΝΙΚΟΛΑΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΧΑΛΚΙΔΑΣ", mobile: "", phone: "", email: "nikotero@gmail.com" },
    "056068437": { eponimia: "ΓΑΝΑ ΒΑΣΙΛΙΚΗ ΕΥΑΓΓΕΛΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6932473189", phone: "2382082077", email: "vassogana@gmail.com" },
    "058406703": { eponimia: "ΧΑΤΖΗΣΩΤΗΡΙΟΥ ΠΕΤΡΟΣ ΣΤΕΡΓΙΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6906133900", phone: "2551027333", email: "chazpe@gmail.com" },
    "061835127": { eponimia: "ΓΙΟΥΡΤΣΟΓΛΟΥ ΧΡΗΣΤΟΣ ΕΥΑΓΓΕΛΟ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6945188398", phone: "2553022922", email: "giourtsoglou@yahoo.gr" },
    "065747063": { eponimia: "ΠΑΠΑΙΩΑΝΝΟΥ ΕΥΘΥΜΙΑ ΑΝΤΩΝΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6977177896", phone: "", email: "papaioannoue415@gmail.com" },
    "079214571": { eponimia: "ΜΑΝΔΑΛΤΣΗ ΑΙΚΑΤΕΡΙΝΗ ΔΗΜΗΤΡΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6942690321", phone: "2382022735", email: "farmakiomandaltsi@gmail.com" },
    "081095923": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΑΔΑΜΙΔΗ Α ΑΔΑΜΙΔΟΥ Μ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΙ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6976974411", phone: "2551021444", email: "adamidou.mar@gmail.com" },
    "082988981": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΕΥΑΓΓΕΛΟΣ ΚΥΡΙΑΚΙΔΗΣ ΕΜΜΑΝΟΥ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6977611613", phone: "2382083233", email: "vagemm@gmail.com" },
    "084186015": { eponimia: "PROJECT ΚΑΣΑΠΑΚΗΣ Θ & ΣΙΑ Ο.Ε", doy: "Η ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "2310832124", email: "info@projectk.gr" },
    "094352564": { eponimia: "ΙΤΧ ΕΛΛΑΣ ΜΟΝΟΠΡΟΣΩΠΗ Α", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", phone: "", email: "" },
    "095141629": { eponimia: "ΔΟΜΙΚΗ Π ΠΑΥΛΙΔΗΣ Α.Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6979794428", phone: "2382099599", email: "g.apostolidis@domiki-pavlides.gr" },
    "105965545": { eponimia: "ΚΑΛΑΙΤΖΙΔΗΣ ΕΥΣΤΑΘΙΟΣ ΦΩΤΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6947438490", phone: "", email: "kalatzidis@gmail.com" },
    "107019964": { eponimia: "ΚΑΡΑΤΖΙΔΗΣ ΒΑΣΙΛΕΙΟΣ ΠΑΝΑΓΙΩΤΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2384042170", email: "karatzidis.pharmacy@gmail.com" },
    "107428053": { eponimia: "ΓΩΝΙΑΔΗ ΛΙΑΝΑ ΑΧΙΛΛΕΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381089588", email: "lgfarm15@gmail.com" },
    "120774602": { eponimia: "ΚΙΤΚΑ ΑΝΑΣΤΑΣΙΑ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6981768828", phone: "2382 063656", email: "a_kitka@yahoo.gr" },
    "121428438": { eponimia: "ΛΑΠΠΑ ΑΓΓΕΛΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382061786", email: "ang.lappa@gmail.com" },
    "121907683": { eponimia: "ΚΟΡΥΦΙΔΟΥ ΑΝΤΩΝΙΑ ΙΩΑΝΝΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6947323318", phone: "", email: "toniakory@hotmail.com" },
    "121949072": { eponimia: "ΚΟΡΥΦΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ ΙΩΑΝΝΗ", doy: "Δ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "6943106207", phone: "2310525383", email: "aristotelous.pharmacy@gmail.com" },
    "123981590": { eponimia: "ΠΑΠΑΓΕΩΡΓΙΟΥ ΜΑΡΙΑ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6972525223", phone: "", email: "alexmeri620@gmail.com" },
    "128430492": { eponimia: "ΑΓΤΖΙΔΗΣ ΑΝΔΡΕΑΣ ΛΑΖΑΡΟ", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341103050", email: "andreasagtzidis@gmail.com" },
    "129166674": { eponimia: "ΛΑΠΙΧΟΥ ΚΑΛΛΙΟΠΗ", doy: "ΓΙΑΝΝΙΤΣΑ", mobile: "", phone: "2382028229", email: "popilapi1976@gmail.com" },
    "133810643": { eponimia: "ΧΥΤΑ ΕΛΕΝΗ ΔΗΜΗΤΡΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "", email: "elchyt@hotmqil.com" },
    "134811951": { eponimia: "ΓΙΟΥΤΙΚΑ ΕΛΕΥΘΕΡΙΑ ΜΑΡΙΑ ΠΑΝΑΓΙΩΤΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382022694", email: "farmgioutikaelma@gmail.com" },
    "134825144": { eponimia: "ΚΟΥΤΣΟΚΩΣΤΑ ΙΩΑΝΝΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382024141", email: "joannamedicine@gmail.com" },
    "134848587": { eponimia: "ΔΟΥΛΚΕΡΙΔΗΣ ΚΟΣΜΑΣ ΠΑΝΑΓΙΩΤΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2382 042630", email: "kdoulker@hotmail.com" },
    "134887503": { eponimia: "ΚΑΠΝΑ ΖΩΗ ΘΕΟΔΩΡΟ", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "2391021224", email: "zoi526@hotmail.com" },
    "135001952": { eponimia: "ΜΟΥΛΑ ΕΛΕΥΘΕΡΙΑ ΠΑΝΤΕΛΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2384051111", email: "ele.moula@gmail.com" },
    "137239505": { eponimia: "ΔΑΜΙΑΝΑΚΗΣ ΣΤΑΥΡΟΣ ΓΕΩΡΓΙΟ", doy: "ΗΡΑΚΛΕΙΟΥ", mobile: "", phone: "", email: "depassagepharmacy@gmail.com" },
    "140820466": { eponimia: "ΤΣΟΝΟΓΛΟΥ ΔΕΣΠΟΙΝΑ ΔΙΟΝΥΣΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382093940", email: "despoinarsonoglou@gmail.com" },
    "141953562": { eponimia: "ΖΑΧΑΡΙΑΔΟΥ ΓΕΩΡΓΙΑ ΜΙΧΑΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382051791", email: "gzahariadou@gmail.com" },
    "141962417": { eponimia: "ΖΕΡΒΟΥ ΦΩΤΕΙΝΗ ΘΕΟΔΩΡΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382022264", email: "fotzervou@gmail.com" },
    "141967020": { eponimia: "ΣΔΡΑΥΚΑΚΗΣ ΒΑΣΙΛΕΙΟΣ ΔΗΜΗΤΡΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "+306945015490", phone: "+302381061290", email: "vsdrafk@gmail.com" },
    "142265310": { eponimia: "ΣΑΠΑΚΟΛΗ ΕΥΑΓΓΕΛΙΑ ΠΕΤΡΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "", email: "sapakoli@hotmail.gr" },
    "144429978": { eponimia: "ΕΥΤΥΧΙΔΟΥ ΑΝΑΣΤΑΣΙΑ ΓΕΩΡΓΙΟ", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", phone: "", email: "anastasia.e1988@gmail.com" },
    "144906695": { eponimia: "ΔΗΜΗΤΡΙΑΔΟΥ ΑΛΕΞΑΝΔΡΑ ΙΩΑΝΝΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381089199", email: "alex+dim.0807@gmail.com" },
    "150095708": { eponimia: "ΜΑΙΝΟΥ ΑΙΚΑΤΕΡΙΝΗ ΧΡΗΣΤΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6989858821", phone: "", email: "katiamainou@yahoo.com" },
    "151161020": { eponimia: "ΒΕΧΤΣΑΛΗΣ ΣΩΤΗΡΙΟΣ ΧΡΗΣΤΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6985799070", phone: "2381082057", email: "sotirisvechtsalis@hotmail.com" },
    "151162495": { eponimia: "ΜΑΝΘΟΥ ΧΡΗΣΤΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381400770", email: "christosmanthougr@gmail.com" },
    "152502387": { eponimia: "ΤΖΙΝΕΒΗ ΑΛΙΚΗ ΑΝΔΡΟΝΙΚΗ ΠΑΝΑΓΙΩΤΗ", doy: "ΝΕΩΝ ΜΟΥΔΑΝΙΩΝ", mobile: "6934165285", phone: "2399 020050", email: "alicetzi28@gmail.com" },
    "153360643": { eponimia: "ΚΑΖΑΚΟΥ ΚΩΝΣΤΑΝΤΙΝΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6974171503", phone: "+302551023378", email: "kazakoukonstantina@gmail.com" },
    "159693610": { eponimia: "ΧΡΥΣΟΣΤΟΜΙΔΗΣ ΑΝΤΩΝΙΟΣ ΠΑΡΑΣΚΕΥΑ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382025735", email: "a.chrysostomidis@hotmail.com" },
    "165645258": { eponimia: "ΦΑΝΤΙΔΟΥ ΕΙΡΗΝΗ ΛΑΖΑΡΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381089980", email: "fantidou.pharmacy@gmail.com" },
    "169699055": { eponimia: "ΧΕΛΗ ΑΝΑΣΤΑΣΙΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "698 882 0879", phone: "2381097677", email: "anasta.cheli10@gmail.com" },
    "300639167": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΟΥ ΕΛΕΝΗ ΑΡΙΣΤΕΙΔΗ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6940207039", phone: "2553024243", email: "eleni.triantafillidou@gmail.com" },
    "800339648": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΖΙΟΥΤΑ ΓΕΩΡΓΙΑ ΧΡΙΣΤΙΑΝΑ ΚΑΙ ΣΙΑ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341028777", email: "zioutaxristiana@hotmail.gr" },
    "800367008": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΘΕΟΔΟΣΙΟΣ ΑΔΑΜΙΔΗΣ ΜΑΡΘΑ ΑΔΑΜΙΔΟΥ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "698306702", phone: "2382062100", email: "adamidis86@gmail.com" },
    "800414167": { eponimia: "ΜΑΧΜΟΥΡΙΔΟΥ ΚΑΙ ΣΙΑ Ο", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6944258002", phone: "2553024676", email: "www.maxmouridou@hotmail.gr" },
    "800472889": { eponimia: "ΦΑΡΜΑΚΕΙΑ ΣΠΥΡΙΔΗΣ Δ ΒΑΛΑΣΙΔΟΥ ΙΣ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341023040", email: "dimitris_sp@yahoo.com" },
    "800586973": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΦΑΡΜΑΚΗΣ ΙΩΑΝΝΗΣ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6984914098", phone: "+30 2391091551", email: "farmakisg21@hotmail.gr" },
    "800616945": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΨΥΧΟΓΥΟΥ ΑΙΚΑΤΕΡΙΝΗ - ΨΥΧΟΓΥΟΥ ΣΟΦΙΑ -ΧΡΙΣΤΙΝΑ Ο.Ε", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381022232", email: "anaspsi@gmail.com" },
    "800699181": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ Κ ΓΕΩΡΓΙΑΔΟΥ ΚΑΙ Κ ΚΑΤΣΙΑΝΟΣ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341029949", email: "katsianoskos@gmail.com" },
    "800759157": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΧΡΗΣΤΟΥ ΠΕΛΑΓΙΑ ΚΑΙ ΣΑΡΗΓΚΙΟΛΗΣ ΟΡΕΣΤΗΣ ΙΩΑΝΝΗΣ Ο", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "+302384024298", email: "orestis.sarigkiolis@gmail.com" },
    "801577292": { eponimia: "ΝΙΚΟΛΑΟΣ ΚΟΥΤΣΟΥΜΠΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΤΡΙΠΟΛΗΣ", mobile: "6981203517", phone: "", email: "nickoskoutsou@gmail.com" },
    "802096212": { eponimia: "ΑΝΔΡΗ ΚΛΕΙΔΑΡΑ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "+302391022725", email: "andrykleidara@gmail.com" },
    "802244502": { eponimia: "ΣΦ ΕΛΕΝΗΣ ΜΑΡΙΑΣ ΝΙΚΟΛΑΙΔΟΥ-ΧΡΥΣΟΣΤΟΜΟΥ ΤΖΙΝΤΖΑΡΑ & ΣΙΑ Ο", doy: "Ζ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "", email: "skroutzplus@outlook.com" },
    "802379525": { eponimia: "ΛΑΝΤΟ ΒΙΛΛΑΣ Ο", doy: "ΡΕΘΥΜΝΟΥ", mobile: "", phone: "", email: "teoreaver@gmail.com" },
    "802644097": { eponimia: "ΣΥΣΤΕΓΑΖΟΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΕΥΑ ΚΟΤΙΔΟΥ ΠΛΑΤΗΣ ΒΑΣΙΛΕΙΟΣ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΕΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2384022908", email: "evakotidou@gmail.com" },
    "802741555": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΤΣΩΝΗ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6932461323", phone: "2551038473", email: "tsonispharmacy@gmail.com" },
    "802744858": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΓΚΑΪΝΤΑΤΖΗΣ ΒΑΣΙΛΕΙΟΣ ΓΚΑΪΝΤΑΤΖΗ ΕΥΔΟΞΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6980289717", phone: "2551024463", email: "gkaintatzi.pharmacy@gmail.com" },
    "996853821": { eponimia: "ΚΟΙΝΩΝΙΑ ΚΛΗΡΟΝΟΜΩΝ ΔΟΥΛΚΕΡΙΔΗ ΧΑΡΑΛΑΜΠΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381088845", email: "farmakeio.skydra@gmail.com" },
    "997687603": { eponimia: "ΤΣΙΤΣΙΟΣ ΑΘΑΝΑΣΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6978762108", phone: "2531022785", email: "pharmthanos@gmail.com" },
    "997961412": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΠΑΝΑΓΙΩΤΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ ΦΡΑΓΓΙΔΟΥ ΝΙΚΟΛΕΤΑ Ο", doy: "ΚΙΛΚΙΣ", mobile: "6986962826", phone: "2341023924", email: "farmakeiofraggidou@gmail.com" },
    "997961880": { eponimia: "ΚΑΡΙΠΙΔΟΥ ΧΡΙΣΤΙΝΑ ΚΑΙ ΣΙΑ ΟΜΟΡΡΥΘΜΟΣ ΕΤΑΙΡΕΙΑ", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341020865", email: "chriskaripidou@gmail.com" },
    "998548940": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΧΤΣΗΣ ΣΤΕΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6948053736", phone: "2551029523", email: "aachtsi@gmail.com" },
    "998720640": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΜΕΡΟΠΗΣ ΜΠΑΧΤΣΕΒΑΝΙΔΟΥ ΚΑΙ ΣΙΑ Ε", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381023080", email: "fiorabach@hotmail.com" },
    "998721309": { eponimia: "ΤΣΙΤΛΑΚΙΔΟΥ Μ ΚΑΙ ΣΙΑ Ο", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381091116", email: "maria_tsitlakidou@hotmail.com" },
    "999228431": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΗΛΙΑ ΧΑΛΙΓΙΑΝΝΗ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6936632283", phone: "2531023758", email: "iliaspharm@yahoo.com" },
    "999260690": { eponimia: "ΦΛΩΡΟΣ ΓΕΩΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "6944732173", phone: "", email: "florospharmacy@yahoo.gr" },
    "999295953": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΑΛ.ΓΚΙΚΑΣ- ΑΝ.ΓΚΙΚΑ Ο.Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6977598429", phone: "2382024813", email: "anagkika@gmail.com" },
    "999295989": { eponimia: "Α ΓΚΑΙΤΑΤΖΗΣ ΚΑΙ ΣΙΑ Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382099191", email: "gkaitatzisaggelos@yahoo.gr" },
    "999296071": { eponimia: "ΚΑΡΑΟΥΛΑΝΗ ΕΥΑΓΓΕΛΙΑ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382042299", email: "psiamanta@hotmail.com" },
    "999387480": { eponimia: "ΜΗΤΚΑΣ ΑΔΑΜΑΝΤΙΟΣ ΚΑΙ ΣΙΑ Ε", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6945411342", phone: "2551028396", email: "farmakiomitkas@gmail.com" },
    "999746768": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΝΔΡΕΑΔΟΥ ΕΥΑΓΓΕΛΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "6936515332", phone: "2384021001", email: "andreadoupharmacy@yahoo.com" }
};

// --- 2. ΛΙΣΤΑ ΠΡΟΪΟΝΤΩΝ ---
const products = [
    { name: 'Z-DermAspis', price: 5.03 },
    { name: 'ZplastCream 40gr', price: 12.30 },
    { name: 'ZplastCream 100gr', price: 24.79 },
    { name: 'Bruise Off Bite Out & Pain Free cream', price: 5.26 },
    { name: 'Bruise Off Bite Out & Pain Free cream 100ml', price: 9.50 },
    { name: 'Z-boost 30 caps', price: 14.93 },
    { name: 'Z-boost 12 caps', price: 6.99 },
    { name: 'Zarkolia Cosmetic pack', price: 23.89 },
    { name: 'Hydralia Face cream 50ml', price: 8.90 },
    { name: 'Revitacell Plus Face cream 50ml', price: 10.69 },
    { name: 'Revitace Eyes cream Luce 30ml', price: 10.10 },
    { name: 'Alveolair Sir', price: 7.65 },
    { name: 'NUTRI MX PROBIOTIC PREMIUM', price: 8.96 },
    { name: 'NUTRI MX MAGNESIUM 1 Τεμ', price: 5.98 },
    { name: 'NUTRI MX A-Z', price: 6.51 },
    { name: 'NUTRI MX OMEGA 3', price: 6.87 },
    { name: 'NUTRI MX JOINT', price: 10.16 }
];

// --- 3. ΠΛΗΡΕΙΣ ΠΕΡΙΓΡΑΦΕΣ & ΕΠΙΣΤΗΜΟΝΙΚΗ ΤΕΚΜΗΡΙΩΣΗ ---
// --- ΠΛΗΡΕΙΣ ΕΠΙΣΤΗΜΟΝΙΚΕΣ ΠΕΡΙΓΡΑΦΕΣ ΠΡΟΪΟΝΤΩΝ ---
const productDetails = [
    {
        name: 'Z-DermAspis',
        description: {
            consumer: `<h3>Καθαρισμός & Φυσική Προστασία</h3><p>Ένα πρωτοποριακό σπρέι που προσφέρει διπλή δράση: βαθύ καθαρισμό των χεριών και του σώματος ενώ ταυτόχρονα δημιουργεί μια φυσική ασπίδα προστασίας από τα έντομα. Ιδανικό για παιδιά και ενήλικες που βρίσκονται σε εξωτερικούς χώρους.</p>`,
            science: `<h3>Φαρμακολογική Προσέγγιση</h3><p><strong>Alcohol Denat (70%):</strong> Δρα ως ευρέος φάσματος αντισηπτικό προκαλώντας μετουσίωση των πρωτεϊνών του κυτταροπλάσματος των μικροοργανισμών.<br><strong>PMD (Citriodora Oil):</strong> Η δραστική ουσία p-menthane-3,8-diol αποτελεί τον μοναδικό φυτικό παράγοντα εγκεκριμένο από το CDC. Μπλοκάρει τους χημειοϋποδοχείς των εντόμων (odorant-binding proteins), καθιστώντας τον ξενιστή "αόρατο".<br><strong>Aloe Barbadensis:</strong> Περιέχει πολυσακχαρίτες που σχηματίζουν προστατευτικό φιλμ, αποτρέποντας τη διαδερμική απώλεια ύδατος (TEWL) που προκαλεί η αλκοόλη.</p>`,
            bibliography: `<ol><li>Carroll, S. P., & Loye, J. (2006). PMD, a registered botanical mosquito repellent.</li><li>CDC (2023). About DEET and other insect repellents.</li><li>WHO Guidelines on Hand Hygiene in Health Care (2009).</li></ol>`
        }
    },
    {
        name: 'ZplastCream 40gr',
        description: {
            consumer: `<h3>Εντατική Ανάπλαση & Καταπράυνση</h3><p>Εξειδικευμένη κρέμα για την ταχεία αποκατάσταση του δέρματος μετά από τραυματισμούς, εγκαύματα ή ερεθισμούς. Βασίζεται σε παραδοσιακά ελληνικά βότανα με αποδεδειγμένη επουλωτική δράση.</p>`,
            science: `<h3>Μοριακός Μηχανισμός Επούλωσης</h3><p><strong>Hypericum Perforatum (Βαλσαμόχορτο):</strong> Η υπερφορίνη και η υπερικίνη διεγείρουν τον πολλαπλασιασμό των κερατινοκυττάρων και των ινοβλαστών, επιταχύνοντας τη σύγκλειση των πληγών.<br><strong>Chios Mastic:</strong> Επάγει την έκφραση αυξητικών παραγόντων και παρουσιάζει ισχυρή αντιβακτηριακή δράση κατά του S. aureus.<br><strong>Calamine:</strong> Δρα ως ήπιο στυπτικό και αντισηπτικό, μειώνοντας το εξίδρωμα και τον κνησμό μέσω της ψυκτικής της δράσης.</p>`,
            bibliography: `<ol><li>Öztürk, N., et al. (2007). Effects of Hypericum perforatum on skin wounds.</li><li>Paraschos, S., et al. (2012). Chios mastic gum: antimicrobial and anti-inflammatory properties.</li><li>Gupta, M., et al. (2014). Zinc therapy in dermatology.</li></ol>`
        }
    },
    {
        name: 'ZplastCream 100gr',
        description: {
            consumer: `<h3>Επαγγελματική Φροντίδα Ανάπλασης (Μεγάλη Συσκευασία)</h3><p>Η ίδια ισχυρή σύνθεση της Zplast σε συσκευασία 100gr για εκτεταμένη χρήση σε μεγάλες επιφάνειες δέρματος ή χρόνια προβλήματα ερεθισμών.</p>`,
            science: `<h3>Συνεργιστική Δράση Συστατικών</h3><p><strong>Hippophae Rhamnoides (Ιπποφαές):</strong> Πλούσιο σε Ω-7 λιπαρά οξέα, δομικά στοιχεία των κυτταρικών μεμβρανών που ενισχύουν τον επιδερμικό φραγμό.<br><strong>Calendula Officinalis:</strong> Προάγει την αγγειογένεση στην περιοχή του τραύματος, διασφαλίζοντας την αιμάτωση και την οξυγόνωση των νέων ιστών.</p>`,
            bibliography: `<ol><li>Upadhyay, N. K., et al. (2009). Healing efficacy of Sea buckthorn (Hippophae rhamnoides).</li><li>Leach, M. J. (2008). Calendula officinalis and wound healing.</li></ol>`
        }
    },
    {
        name: 'Bruise Off Bite Out & Pain Free cream',
        description: {
            consumer: `<h3>Άμεση Ανακούφιση από Πόνους & Χτυπήματα</h3><p>Κρέμα για την αντιμετώπιση μωλώπων (μελανιών), μυϊκών πόνων και διαστρεμμάτων. Ιδανική για αθλητές και καθημερινά ατυχήματα.</p>`,
            science: `<h3>Αντιφλεγμονώδης & Αναλγητικός Μηχανισμός</h3><p><strong>Arnica Montana:</strong> Περιέχει ελεναλίνη, η οποία αναστέλλει τον μεταγραφικό παράγοντα NF-kB, εμποδίζοντας την παραγωγή προ-φλεγμονωδών κυτταροκινών (TNF-α, IL-1).<br><strong>Origanum Vulgare (Carvacrol):</strong> Το καρβακρόλιο προκαλεί τοπική υπεραιμία, βελτιώνοντας τη μικροκυκλοφορία και επιταχύνοντας την απορρόφηση του αιματώματος.<br><strong>Lavandula Angustifolia:</strong> Δρα συνεργιστικά μειώνοντας τη νευρωνική διέγερση και προσφέροντας ήπια αναλγησία.</p>`,
            bibliography: `<ol><li>Lyss, G., et al. (1998). Helenalin: an anti-inflammatory sesquiterpene lactone.</li><li>Smith, A. G., et al. (2021). The effects of Arnica in physical trauma.</li><li>Lima, M. D., et al. (2013). Anti-inflammatory effects of carvacrol.</li></ol>`
        }
    },
    {
        name: 'Bruise Off Bite Out & Pain Free cream 100ml',
        description: {
            consumer: `<h3>Ολοκληρωμένη Λύση για Μυϊκούς Πόνους</h3><p>Μεγάλη συσκευασία 100ml για συστηματική χρήση σε αθλητές ή άτομα με χρόνια μυοσκελετική καταπόνηση.</p>`,
            science: `<h3>Διείσδυση & Δράση</h3><p>Η βάση της κρέμας είναι σχεδιασμένη για μέγιστη διαδερμική απορρόφηση των τερπενίων της Άρνικας και του Ριγανέλαιου, εξασφαλίζοντας δράση στους βαθύτερους ιστούς.</p>`,
            bibliography: `<p>Βασισμένο στις μελέτες των Lyss G. (1998) και Nasiri A. (2018) για την αρωματοθεραπεία και την τοπική αναλγησία.</p>`
        }
    },
    {
        name: 'Z-boost 30 caps',
        description: {
            consumer: `<h3>Ολιστική Θωράκιση του Ανοσοποιητικού</h3><p>Ένας ισχυρός συνδυασμός αντιοξειδωτικών και ιχνοστοιχείων που ενισχύουν τη φυσική άμυνα του οργανισμού ενάντια σε ιώσεις και περιβαλλοντικές επιθέσεις.</p>`,
            science: `<h3>Μοριακή Ανοσοενίσχυση</h3><p><strong>Zinc (Ψευδάργυρος):</strong> Απαραίτητος για τη διαφοροποίηση των Τ-λεμφοκυττάρων και τη δράση της θυμουλίνης. Μειώνει τον χρόνο αντιγραφής των ιών του αναπνευστικού.<br><strong>Selenium:</strong> Συστατικό της υπεροξειδάσης της γλουταθειόνης, προστατεύει τα κύτταρα από την οξειδωτική βλάβη.<br><strong>CoQ10 & ALA:</strong> Βελτιώνουν τη μιτοχονδριακή λειτουργία των λευκοκυττάρων, παρέχοντας την απαραίτητη ενέργεια για την ανοσολογική απόκριση.</p>`,
            bibliography: `<ol><li>Hemilä, H. (2017). Zinc lozenges and the common cold.</li><li>Hoffmann, P. R., et al. (2008). The influence of selenium on immune responses.</li><li>Saini, R. (2011). Coenzyme Q10: The essential nutrient.</li></ol>`
        }
    },
    {
        name: 'Z-boost 12 caps',
        description: {
            consumer: `<h3>Άμεση Τόνωση & Προστασία</h3><p>Συσκευασία ταχείας δράσης (12 κάψουλες) για τις πρώτες ημέρες των συμπτωμάτων ή για σύντομες περιόδους έντονου στρες.</p>`,
            science: `<h3>Συστατικά Ταχείας Ανάκαμψης</h3><p><strong>NAC (N-Acetylcysteine):</strong> Πρόδρομος της γλουταθειόνης με βλεννολυτική δράση, που βοηθά στον καθαρισμό των αεραγωγών και στη μείωση του οξειδωτικού φορτίου.</p>`,
            bibliography: `<ol><li>Aldini, G., et al. (2018). N-Acetylcysteine as an antioxidant and disulphide breaking agent.</li></ol>`
        }
    },
    {
        name: 'Hydralia Face cream 50ml',
        description: {
            consumer: `<h3>Βαθιά Ενυδάτωση & Λάμψη</h3><p>Κρέμα προσώπου που "ξεδιψά" την επιδερμίδα. Αποκαθιστά την υγρασία και χαρίζει απαλή υφή και φωτεινότητα.</p>`,
            science: `<h3>Υδροδυναμική του Δέρματος</h3><p><strong>Hyaluronic Acid (Low Molecular Weight):</strong> Διεισδύει στις βαθύτερες στοιβάδες, δεσμεύοντας έως και 1000 φορές το βάρος του σε νερό, "γεμίζοντας" τις ρυτίδες εκ των έσω.<br><strong>Jojoba Oil:</strong> Λειτουργεί ως βιομιμητικό του ανθρώπινου σμήγματος, ρυθμίζοντας τη λιπαρότητα χωρίς να φράζει τους πόρους.</p>`,
            bibliography: `<ol><li>Bukhari, S. N. A., et al. (2018). Hyaluronic acid: A promising skin rejuvenating biomedicine.</li><li>Ranzato, E., et al. (2011). Wound healing properties of jojoba liquid wax.</li></ol>`
        }
    },
    {
        name: 'Revitacell Plus Face cream 50ml',
        description: {
            consumer: `<h3>Ολική Αντιγήρανση & Σύσφιξη</h3><p>Προηγμένη σύνθεση που στοχεύει στα κύρια σημάδια της γήρανσης: ρυτίδες, χαλάρωση και απώλεια ελαστικότητας.</p>`,
            science: `<h3>Επιγενετική Δράση</h3><p><strong>Mastic Gum (Μαστίχα):</strong> Μελέτες δείχνουν ότι αυξάνει την έκφραση της πρωτεΐνης Klotho ("πρωτεΐνη της νεότητας") στα κύτταρα του δέρματος, καθυστερώντας την κυτταρική γήρανση.<br><strong>Pomegranate Seed Oil:</strong> Πλούσιο σε πουνικικό οξύ (Ω-5), αναστέλλει τη δράση της μεταλλοπρωτεϊνάσης MMP-1 που διασπά το κολλαγόνο.</p>`,
            bibliography: `<ol><li>Lall, N., et al. (2020). Rejuvenating effect of mastic gum on the skin.</li><li>Neha, K., et al. (2014). Pomegranate seed oil: A comprehensive review.</li></ol>`
        }
    },
    {
        name: 'Revitace Eyes cream Luce 30ml',
        description: {
            consumer: `<h3>Ξεκούραστο Βλέμμα χωρίς Μαύρους Κύκλους</h3><p>Στοχευμένη φροντίδα για την ευαίσθητη περιοχή των ματιών. Μειώνει το πρήξιμο (σακούλες) και φωτίζει το βλέμμα.</p>`,
            science: `<h3>Μικροκυκλοφορία & Αποσυμφόρηση</h3><p><strong>Aesculus Hippocastanum (Ιπποκαστανιά):</strong> Η αισκίνη μειώνει τη διαπερατότητα των τριχοειδών αγγείων, προλαμβάνοντας το οίδημα κάτω από τα μάτια.<br><strong>Arnica Extract:</strong> Επιταχύνει την απομάκρυνση των χρωστικών του αίματος που ευθύνονται για τους μαύρους κύκλους.</p>`,
            bibliography: `<ol><li>Gallelli, L. (2019). Escin: a review of its venotonic properties.</li><li>Sirtori, C. R. (2001). Aescin: pharmacology and therapeutic profile.</li></ol>`
        }
    },
    {
        name: 'Alveolair Sir',
        description: {
            consumer: `<h3>Φυσική Ανακούφιση για τον Βήχα</h3><p>Φυτικό σιρόπι που μαλακώνει τον λαιμό και βοηθά στην απελευθέρωση της αναπνοής. Κατάλληλο για ξηρό και παραγωγικό βήχα.</p>`,
            science: `<h3>Συνεργιστική Φυτοθεραπεία</h3><p><strong>Eucalyptus Globulus:</strong> Περιέχει κινεόλη (ευκαλυπτόλη), η οποία παρουσιάζει ισχυρή βλεννολυτική και αντιφλεγμονώδη δράση στους αεραγωγούς.<br><strong>Thymus Vulgaris:</strong> Οι φαινόλες του (θυμόλη) χαλαρώνουν τους λείους μύες των βρόγχων (σπασμολυτική δράση).<br><strong>Althaea Officinalis:</strong> Οι βλεννοπολυσακχαρίτες της σχηματίζουν ένα προστατευτικό στρώμα στο βλεννογόνο του φάρυγγα, καταστέλλοντας τον ερεθισμό του ξηρού βήχα.</p>`,
            bibliography: `<ol><li>Sadlon, A. E., et al. (2010). Immune-modifying and antimicrobial effects of Eucalyptus oil.</li><li>EMA (2016). Herbal monograph on Althaea officinalis.</li></ol>`
        }
    },
    {
        name: 'NUTRI MX PROBIOTIC PREMIUM',
        description: {
            consumer: `<h3>Αποκατάσταση της Εντερικής Υγείας</h3><p>Υψηλής συγκέντρωσης προβιοτικά για την ισορροπία της χλωρίδας του εντέρου. Ιδανικό κατά τη διάρκεια λήψης αντιβίωσης ή για πεπτικά προβλήματα.</p>`,
            science: `<h3>Μικροβίωμα & Ανοσολογία</h3><p><strong>18 Στελέχη / 10B CFU:</strong> Η ποικιλομορφία των στελεχών εξασφαλίζει τον αποικισμό διαφορετικών περιοχών του εντέρου. Δρουν μέσω ανταγωνιστικής αναστολής των παθογόνων και παραγωγής λιπαρών οξέων βραχείας αλύσου (SCFA), τα οποία τρέφουν τα κύτταρα του παχέος εντέρου και ρυθμίζουν το ανοσοποιητικό σύστημα.</p>`,
            bibliography: `<ol><li>Lee JY, et al. (2022). The microbiome and gut homeostasis. Science.</li><li>Karamanolis GP (2019). Προβιοτικά και Γαστρεντερικό. ΕΚΠΑ.</li></ol>`
        }
    },
    {
        name: 'NUTRI MX MAGNESIUM 1 Τεμ',
        description: {
            consumer: `<h3>Μυϊκή Χαλάρωση & Ενέργεια</h3><p>Μαγνήσιο ενισχυμένο με Βιταμίνη Β6. Βοηθά στη μείωση της κούρασης, στις κράμπες και στη σωστή λειτουργία του νευρικού συστήματος.</p>`,
            science: `<h3>Βιοχημικός Ρόλος</h3><p><strong>Magnesium Citrate/Oxide:</strong> Το μαγνήσιο συμμετέχει σε περισσότερες από 300 ενζυμικές αντιδράσεις, συμπεριλαμβανομένης της σύνθεσης ATP (ενέργεια). Λειτουργεί ως φυσικός ανταγωνιστής του ασβεστίου, ρυθμίζοντας τη μυϊκή σύσπαση και αποτρέποντας τη νευρομυϊκή υπερερεθιστότητα (κράμπες). Η Β6 επάγει την ενδοκυττάρια απορρόφηση του μαγνησίου.</p>`,
            bibliography: `<ol><li>Prasad, A. S. (2008). Magnesium in human health.</li><li>RDA Guidelines: Magnesium requirements for adults.</li></ol>`
        }
    },
    {
        name: 'NUTRI MX JOINT',
        description: {
            consumer: `<h3>Υποστήριξη Αρθρώσεων & Χόνδρων</h3><p>Ολοκληρωμένη φόρμουλα για την προστασία των αρθρώσεων. Μειώνει τη φλεγμονή και βοηθά στην ευκαμψία και την κίνηση χωρίς πόνο.</p>`,
            science: `<h3>Αναγέννηση Συνδετικού Ιστού</h3><p><strong>Glucosamine & Chondroitin:</strong> Δομικά συστατικά του αρθρικού χόνδρου που διεγείρουν τη σύνθεση γλυκοζαμινογλυκανών.<br><strong>MSM (Methylsulfonylmethane):</strong> Παρέχει οργανικό θείο, απαραίτητο για τους δισουλφιδικούς δεσμούς του κολλαγόνου, μειώνοντας παράλληλα το οξειδωτικό στρες στις αρθρώσεις.<br><strong>Collagen Type II:</strong> Το κύριο συστατικό του χόνδρου που απορροφά τους κραδασμούς.</p>`,
            bibliography: `<ol><li>Kislingh (2019). Role of peptide fragments of collagen in joint health.</li><li>Daskalou E. (2016). MSM as a source of sulfur.</li></ol>`
        }
    },
    {
        name: 'NUTRI MX A-Z',
        description: {
            consumer: `<h3>Πολυβιταμίνη για Πλήρη Κάλυψη</h3><p>Μία κάψουλα την ημέρα προσφέρει όλες τις απαραίτητες βιταμίνες και μέταλλα για τόνωση, ενέργεια και κάλυψη διατροφικών κενών.</p>`,
            science: `<h3>Θρεπτική Υποστήριξη</h3><p>Σχεδιασμένο με γνώμονα τις ημερήσιες ανάγκες (RDA) για τη διατήρηση της ομοιόστασης του οργανισμού. Περιέχει αντιοξειδωτικά που εξουδετερώνουν τις ελεύθερες ρίζες και μέταλλα που υποστηρίζουν τον μεταβολισμό.</p>`,
            bibliography: `<p>Βασισμένο στα πρότυπα του EFSA (European Food Safety Authority) για τις ημερήσιες προσλήψεις αναφοράς.</p>`
        }
    },
    {
        name: 'NUTRI MX OMEGA 3',
        description: {
            consumer: `<h3>Καρδιακή & Εγκεφαλική Λειτουργία</h3><p>Υψηλής καθαρότητας ιχθυέλαιο πλούσιο σε EPA και DHA. Προστατεύει την καρδιά, τα αγγεία και ενισχύει τη μνήμη και τη συγκέντρωση.</p>`,
            science: `<h3>Λιπιδαιμική Ρύθμιση</h3><p><strong>EPA & DHA:</strong> Ενσωματώνονται στα φωσφολιπίδια των κυτταρικών μεμβρανών, ρυθμίζοντας τη ρευστότητά τους. Μειώνουν τα επίπεδα των τριγλυκεριδίων και παρουσιάζουν ισχυρή αντιφλεγμονώδη δράση μέσω της παραγωγής ρεσολβινών και προτεκτινών.</p>`,
            bibliography: `<ol><li>Mozaffarian, D., et al. (2011). Omega-3 fatty acids and cardiovascular disease.</li><li>Calder, P. C. (2013). Omega-3 fatty acids and inflammatory processes.</li></ol>`
        }
    },
    {
        name: 'Zarkolia Cosmetic pack',
        description: {
            consumer: `<h3>Σετ Ολοκληρωμένης Περιποίησης Προσώπου</h3><p>Ένας συνδυασμός τριών κορυφαίων προϊόντων (Revitacell Plus, Hydralia, Eyes) που καλύπτει όλες τις ανάγκες της επιδερμίδας: καθαρισμό, ενυδάτωση και αντιγήρανση.</p>`,
            science: `<h3>Συνεργιστικό Πρωτόκολλο</h3><p>Η συνδυασμένη χρήση των προϊόντων επιτυγχάνει: 1. Ενυδάτωση (Υαλουρονικό), 2. Προστασία από οξείδωση (Pomegranate/Berries) και 3. Κυτταρική αναζωογόνηση (Klotho protein activation).</p>`,
            bibliography: `<p>Ανατρέξτε στις μελέτες των επιμέρους προϊόντων του πακέτου.</p>`
        }
    }
];
// --- 4. ΛΕΙΤΟΥΡΓΙΚΟΤΗΤΑ ---
document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector('#product-table tbody');
    products.forEach((p, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${p.name}</td><td>${p.price.toFixed(2)} €</td><td><input type="number" class="quantity" id="qty-${index}" min="0" data-price="${p.price}" oninput="updateAll()" value="0"></td><td class="gifts">0</td><td class="effective-price normal">${p.price.toFixed(2)} €</td><td class="line-total">0.00 €</td>`;
        tableBody.appendChild(row);
    });

    const btnContainer = document.getElementById('productButtonsContainer');
    products.forEach((p, index) => {
        const btn = document.createElement('button');
        btn.className = 'product-btn'; btn.textContent = p.name;
        btn.onclick = () => showProductDetails(index);
        btnContainer.appendChild(btn);
    });

    document.getElementById('afm').addEventListener('input', function() {
        const afm = this.value.trim();
        if (knownCustomers[afm]) {
            const c = knownCustomers[afm];
            document.getElementById('eponimia').value = c.eponimia;
            document.getElementById('doy').value = c.doy;
            document.getElementById('mobile').value = c.mobile;
            document.getElementById('phone').value = c.phone;
            document.getElementById('email').value = c.email;
        }
    });
    updateAll();
});

function calculateGifts(q){ if(q<9) return 0; if(q<18) return 1; if(q<24) return 3; if(q<48) return 6; return Math.floor(q*(15/48)); }

function updateAll(){
    let net = 0;
    document.querySelectorAll('#product-table tbody tr').forEach(row => {
        const qInput = row.querySelector(".quantity"), q = parseInt(qInput.value) || 0, p = parseFloat(qInput.dataset.price);
        const gifts = calculateGifts(q), lineTotal = q * p;
        row.querySelector(".gifts").textContent = gifts;
        row.querySelector(".effective-price").textContent = `${(q > 0 ? lineTotal / (q + gifts) : p).toFixed(2)} €`;
        row.querySelector(".line-total").textContent = `${lineTotal.toFixed(2)} €`;
        net += lineTotal;
    });
    const vat = net * 0.24;
    document.getElementById("net-value").textContent = `${net.toFixed(2)} €`;
    document.getElementById("vat-value").textContent = `${vat.toFixed(2)} €`;
    document.getElementById("final-total").textContent = `${(net + vat).toFixed(2)} €`;
}

function showProductDetails(index){
    const p = productDetails.find(i => i.name === products[index].name);
    const tableInput = document.getElementById(`qty-${index}`);
    document.getElementById('productModal').innerHTML = `<div class="modal-content"><div class="modal-header"><h2>${products[index].name}</h2><span class="close-button" onclick="closeProductModal()">&times;</span></div><div class="modal-body"><div class="modal-tabs"><button class="tab-button active" onclick="openTab(event, 'Consumer')">Κοινό</button><button class="tab-button" onclick="openTab(event, 'Science')">Επιστημονικά</button><button class="tab-button" onclick="openTab(event, 'Biblio')">Βιβλιογραφία</button></div><div id="Consumer" class="tab-content" style="display:block"></div><div id="Science" class="tab-content"></div><div id="Biblio" class="tab-content"></div></div><div class="modal-quick-add"><input type="number" id="modalQuantity" value="${tableInput.value > 0 ? tableInput.value : 1}"><button onclick="updateFromModal(${index})">Ενημέρωση</button></div></div>`;
    if(p){
        document.getElementById('Consumer').innerHTML = p.description.consumer;
        document.getElementById('Science').innerHTML = p.description.science;
        document.getElementById('Biblio').innerHTML = p.description.bibliography;
    }
    document.getElementById('productModal').style.display='block';
}

function updateFromModal(index){
    document.getElementById(`qty-${index}`).value = document.getElementById('modalQuantity').value;
    updateAll(); closeProductModal();
}

function closeProductModal(){document.getElementById('productModal').style.display='none';}
function closePreviewModal(){document.getElementById('previewModal').style.display='none';}

function openTab(evt, name) {
    let i, tabcontent = document.getElementsByClassName("tab-content"), tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none";
    for (i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "");
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

function sendEmailViaClient() {
    const payment = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "Δεν επιλέχθηκε";
    const remarks = document.getElementById("remarks").value || "-";
    const name = document.getElementById("eponimia").value;
    const date = new Date().toLocaleDateString('el-GR');
    const net = document.getElementById("net-value").textContent;
    const vat = document.getElementById("vat-value").textContent;
    const total = document.getElementById("final-total").textContent;

    const subject = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ ZARKOLIA HEALTH / ${date} / ${name}`;
    
    let body = `Αντίγραφο Παραγγελίας - Το παρόν δεν αποτελεί παραστατικό αγορών\n\n`;
    body += `ΣΤΟΙΧΕΙΑ ΠΕΛΑΤΗ\n------------------\nΕπωνυμία: ${name}\nΑΦΜ: ${document.getElementById("afm").value}\n\n`;
    
    body += `ΠΡΟΪΟΝΤΑ & ΔΩΡΑ\n---------------------------------------------------\n`;
    document.querySelectorAll("#product-table tbody tr").forEach(r => {
        const q = parseInt(r.querySelector('.quantity').value) || 0;
        if(q > 0) {
            const gifts = r.querySelector('.gifts').textContent;
            const lineTotal = r.querySelector('.line-total').textContent;
            body += `* ${r.cells[0].textContent} | Τεμ: ${q} | Δώρα: ${gifts} | Αξία: ${lineTotal}\n`;
        }
    });
    body += `---------------------------------------------------\n\n`;

    body += `ΤΙΜΟΛΟΓΗΣΗ\n`;
    body += `Καθαρή Αξία : ${net}\n`;
    body += `ΦΠΑ (24%) : ${vat}\n`;
    body += `Τελικό Σύνολο : ${total}\n\n`;

    body += `ΤΡΟΠΟΣ ΠΛΗΡΩΜΗΣ: ${payment}\n`;
    body += `ΠΑΡΑΤΗΡΗΣΕΙΣ: ${remarks}\n\n`;
    
    body += `ΣΤΟΙΧΕΙΑ ΚΑΤΑΘΕΣΗΣ\nIBAN: GR8901722520005252016160277\nΤράπεζα Πειραιώς`;

    window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function previewAndSaveAsTXT(){
    const name = document.getElementById("eponimia").value;
    let content = `ΠΑΡΑΓΓΕΛΙΑ ZARKOLIA HEALTH\n\nΠΕΛΑΤΗΣ: ${name}\n\n`;
    document.querySelectorAll("#product-table tbody tr").forEach(r => {
        const q = parseInt(r.querySelector('.quantity').value) || 0;
        if(q > 0) content += `- ${r.cells[0].textContent}: ${q} τεμ. (+${r.querySelector('.gifts').textContent} δώρα)\n`;
    });
    content += `\nΣΥΝΟΛΟ: ${document.getElementById("final-total").textContent}`;
    
    document.getElementById('previewContent').textContent = content;
    document.getElementById('previewModal').style.display='block';
    document.getElementById('saveTxtButton').onclick = () => {
        const blob = new Blob([content],{type:'text/plain;charset=utf-8'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `Order_${name}.txt`;
        link.click();
    };
}

function clearForm(){ document.getElementById("orderForm").reset(); document.querySelectorAll(".quantity").forEach(q => q.value="0"); updateAll(); }
