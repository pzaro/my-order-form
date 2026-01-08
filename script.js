// CONFIGURATION (REPLACE WITH YOUR URL)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_ACTUAL_ID/exec";

// --- 1. ΠΛΗΡΗΣ ΒΑΣΗ ΠΕΛΑΤΩΝ (80+ ΕΓΓΡΑΦΕΣ) ---
const knownCustomers = {
    "999746768": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΝΔΡΕΑΔΟΥ ΕΥΑΓΓΕΛΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "6936515332", phone: "2384021001", email: "andreadoupharmacy@yahoo.com" },
    "025305198": { eponimia: "ΒΑΡΕΛΑΣ ΜΙΧΑΗΛ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6937457161", phone: "", email: "mixalisvarelas@gmail.com" },
    "999295953": { eponimia: "Συστεγασμένα φαρμακεία Αλ.Γκικας- Αν.Γκικα Ο.Ε", doy: "Γιαννιτσών", mobile: "6977598429", phone: "2382024813", email: "anagkika@gmail.com" },
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
    "096006210": { eponimia: "ΠΡΟΜΗΘΕΥΤΙΚΟΣ ΣΥΝΣΜΟΣ ΦΑΡΠΟΙΩΝ ΑΤΤΙΚΗΣ Π", doy: "ΠΕΡΙΣΤΕΡΙΟΥ", mobile: "", phone: "210 5709400", email: "asaxoni@prosyfape.gr" },
    "105965545": { eponimia: "ΚΑΛΑΙΤΖΙΔΗΣ ΕΥΣΤΑΘΙΟΣ ΦΩΤΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6947438490", phone: "", email: "kalatzidis@gmail.com" },
    "107019964": { eponimia: "ΚΑΡΑΤΖΙΔΗΣ ΒΑΣΙΛΕΙΟΣ ΠΑΝΑΓΙΩΤΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2384042170", email: "karatzidis.pharmacy@gmail.com" },
    "107428053": { eponimia: "ΓΩΝΙΑΔΗ ΛΙΑΝΑ ΑΧΙΛΛΕΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381089588", email: "lgfarm15@gmail.com" },
    "120774602": { eponimia: "ΚΙΤΚΑ ΑΝΑΣΤΑΣΙΑ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6981768828", phone: "2382 063656", email: "a_kitka@yahoo.gr" },
    "121428438": { eponimia: "ΛΑΠΠΑ ΑΓΓΕΛΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382061786", email: "ang.lappa@gmail.com" },
    "121907683": { eponimia: "ΚΟΡΥΦΙΔΟΥ ΑΝΤΩΝΙΑ ΙΩΑΝΝΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6947323318", phone: "", email: "toniakory@hotmail.com" },
    "121949072": { eponimia: "ΚΟΡΥΦΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ ΙΩΑΝΝΗ", doy: "Δ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "6943106207", phone: "2310525383", email: "aristotelous.pharmacy@gmail.com" },
    "123981590": { eponimia: "ΠΑΠΑΓΕΩΡΓΙΟΥ ΜΑΡΙΑ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6972525223", phone: "", email: "alexmeri620@gmail.com" },
    "127263915": { eponimia: "ΣΙΣΚΟΥ ΜΑΡΙΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "", email: "m.siskou@yahoo.gr" },
    "128430492": { eponimia: "ΑΓΤΖΙΔΗΣ ΑΝΔΡΕΑΣ ΛΑΖΑΡΟ", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341103050", email: "andreasagtzidis@gmail.com" },
    "129166674": { eponimia: "ΛΑΠΙΧΟΥ ΚΑΛΛΙΟΠΗ", doy: "ΓΙΑΝΝΙΤΣΑ", mobile: "", phone: "2382028229", email: "popilapi1976@gmail.com" },
    "133810643": { eponimia: "ΧΥΤΑ ΕΛΕΝΗ ΔΗΜΗΤΡΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "", email: "elchyt@hotmqil.com" },
    "134072283": { eponimia: "ΠΑΡΑΣΚΕΥΟΠΟΥΛΟΣ ΙΩΑΝΝΗΣ ΠΑΣΧΑΛΗ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6948270901", phone: "2553023544", email: "paraskevopoulosioannis@hotmail.gr" },
    "134811951": { eponimia: "ΓΙΟΥΤΙΚΑ ΕΛΕΥΘΕΡΙΑ ΜΑΡΙΑ ΠΑΝΑΓΙΩΤΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382022694", email: "farmgioutikaelma@gmail.com" },
    "134825144": { eponimia: "ΚΟΥΤΣΟΚΩΣΤΑ ΙΩΑΝΝΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382024141", email: "joannamedicine@gmail.com" },
    "134842104": { eponimia: "ΒΑΚΙΡΤΖΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΑΝΤΩΝΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6978112893", phone: "2382041322", email: "vakostas@outlook.com" },
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
    "158040138": { eponimia: "ΠΑΠΑΟΡΦΑΝΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΑΝΤΩΝΙΟ", doy: "ΙΖ ΑΘΗΝΩΝ", mobile: "", phone: "", email: "papamymarket@gmail.com" },
    "159693610": { eponimia: "ΧΡΥΣΟΣΤΟΜΙΔΗΣ ΑΝΤΩΝΙΟΣ ΠΑΡΑΣΚΕΥΑ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382025735", email: "a.chrysostomidis@hotmail.com" },
    "165645258": { eponimia: "ΦΑΝΤΙΔΟΥ ΕΙΡΗΝΗ ΛΑΖΑΡΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381089980", email: "fantidou.pharmacy@gmail.com" },
    "169699055": { eponimia: "ΧΕΛΗ ΑΝΑΣΤΑΣΙΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "698 882 0879", phone: "2381097677", email: "anasta.cheli10@gmail.com" },
    "300639167": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΟΥ ΕΛΕΝΗ ΑΡΙΣΤΕΙΔΗ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6940207039", phone: "2553024243", email: "eleni.triantafillidou@gmail.com" },
    "800339648": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΖΙΟΥΤΑ ΓΕΩΡΓΙΑ ΧΡΙΣΤΙΑΝΑ ΚΑΙ ΣΙΑ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341028777", email: "zioutaxristiana@hotmail.gr" },
    "800348196": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΥΓΕΡΙΝΟΥ Θ ΚΑΙ ΣΙΑ Ο", doy: "ΣΕΡΡΩΝ", mobile: "", phone: "", email: "theoavgerinos90@gmail.com" },
    "800367008": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΘΕΟΔΟΣΙΟΣ ΑΔΑΜΙΔΗΣ ΜΑΡΘΑ ΑΔΑΜΙΔΟΥ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "698306702", phone: "2382062100", email: "adamidis86@gmail.com" },
    "800414167": { eponimia: "ΜΑΧΜΟΥΡΙΔΟΥ ΚΑΙ ΣΙΑ Ο", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6944581887", phone: "2553024676", email: "www.maxmouridou@hotmail.gr" },
    "800472889": { eponimia: "ΦΑΡΜΑΚΕΙΑ ΣΠΥΡΙΔΗΣ Δ ΒΑΛΑΣΙΔΟΥ ΙΣ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341023040", email: "dimitris_sp@yahoo.com" },
    "800586973": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΦΑΡΜΑΚΗΣ ΙΩΑΝΝΗΣ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6984914098", phone: "+30 2391091551", email: "farmakisg21@hotmail.gr" },
    "800616945": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΨΥΧΟΓΥΟΥ ΑΙΚΑΤΕΡΙΝΗ - ΨΥΧΟΓΥΟΥ ΣΟΦΙΑ -ΧΡΙΣΤΙΝΑ Ο.Ε", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381022232", email: "anaspsi@gmail.com" },
    "800699181": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ Κ ΓΕΩΡΓΙΑΔΟΥ ΚΑΙ Κ ΚΑΤΣΙΑΝΟΣ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341029949", email: "katsianoskos@gmail.com" },
    "800732970": { eponimia: "ΦΡΟΥΤΑ ΜΟΥΤΣΟΓΙΑΝΝ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "", email: "moutsogiannis23@gmail.com" },
    "800759157": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΧΡΗΣΤΟΥ ΠΕΛΑΓΙΑ ΚΑΙ ΣΑΡΗΓΚΙΟΛΗΣ ΟΡΕΣΤΗΣ ΙΩΑΝΝΗΣ Ο", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "+302384024298", email: "orestis.sarigkiolis@gmail.com" },
    "800972362": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΤΟΠΟΥΖΙΔΗΣ Γ ΚΑΙ ΤΟΠΟΥΖΙΔΗΣ Κ Ο", doy: "ΚΙΛΚΙΣ", mobile: "6942717900", phone: "2343022000", email: "e.topouzidou@yahoo.gr" },
    "801577292": { eponimia: "ΝΙΚΟΛΑΟΣ ΚΟΥΤΣΟΥΜΠΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΤΡΙΠΟΛΗΣ", mobile: "", phone: "6981203517", email: "nickoskoutsou@gmail.com" },
    "802096212": { eponimia: "ΑΝΔΡΗ ΚΛΕΙΔΑΡΑ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "+302391022725", email: "andrykleidara@gmail.com" },
    "802196155": { eponimia: "HAPPY HIPPO Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "", email: "eimaiohappyhippo@gmail.com" },
    "802244502": { eponimia: "ΣΦ ΕΛΕΝΗΣ ΜΑΡΙΑΣ  ΝΙΚΟΛΑΙΔΟΥ-ΧΡΥΣΟΣΤΟΜΟΥ ΤΖΙΝΤΖΑΡΑ & ΣΙΑ Ο", doy: "Ζ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "", email: "skroutzplus@outlook.com" },
    "802581242": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ Η  ΔΗΜΟΚΑ   Μ  ΜΑΡΓΟΥΤΑ Ο", doy: "ΑΜΠΕΛΟΚΗΠΩΝ", mobile: "", phone: "", email: "idpharmacy254@gmail.com" },
    "802644097": { eponimia: "ΣΥΣΤΕΓΑΖΟΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΕΥΑ ΚΟΤΙΔΟΥ ΠΛΑΤΗΣ ΒΑΣΙΛΕΙΟΣ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΕΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2384022908", email: "evakotidou@gmail.com" },
    "802667861": { eponimia: "ΦΑΡΜΑΚΕΙΟ Α ΟΙΚΟΝΟΜΟΠΟΥΛΟΣ Ι ΠΑΠΑΔΟΠΟΥΛΟΣ Ο", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", phone: "", email: "ioannis.a.papadop@gmail.com" },
    "802741555": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΤΣΩΝΗ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6932461323", phone: "2551038473", email: "tsonispharmacy@gmail.com" },
    "802744858": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΓΚΑΪΝΤΑΤΖΗΣ ΒΑΣΙΛΕΙΟΣ  ΓΚΑΪΝΤΑΤΖΗ ΕΥΔΟΞΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6980289717", phone: "2551024463", email: "gkaintatzi.pharmacy@gmail.com" },
    "996853821": { eponimia: "ΚΟΙΝΩΝΙΑ ΚΛΗΡΟΝΟΜΩΝ ΔΟΥΛΚΕΡΙΔΗ ΧΑΡΑΛΑΜΠΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381088845", email: "farmakeio.skydra@gmail.com" },
    "997687603": { eponimia: "ΤΣΙΤΣΙΟΣ ΑΘΑΝΑΣΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6978762108", phone: "2531022785", email: "pharmthanos@gmail.com" },
    "997688685": { eponimia: "ΣΦ ΚΑΛΟΥΔΗ ΚΩΝΣΤΑΝΤΙNIA & ΖΟΥΜΑ ΣΤΑΜΑΤΙΑ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΕΙΑ", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "", phone: "", email: "stam1213zoum@gmail.com" },
    "997957423": { eponimia: "ΗΛΙΑΣ Θ ΚΑΤΡΗΣ Ε", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", phone: "", email: "iliaskatrispharmacy@gmail.com" },
    "997961412": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΠΑΝΑΓΙΩΤΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ  ΦΡΑΓΓΙΔΟΥ ΝΙΚΟΛΕΤΑ Ο", doy: "ΚΙΛΚΙΣ", mobile: "6986962826", phone: "2341023924", email: "farmakeiofraggidou@gmail.com" },
    "997961880": { eponimia: "ΚΑΡΙΠΙΔΟΥ ΧΡΙΣΤΙΝΑ ΚΑΙ ΣΙΑ ΟΜΟΡΡΥΘΜΟΣ ΕΤΑΙΡΕΙΑ", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341020865", email: "chriskaripidou@gmail.com" },
    "998392245": { eponimia: "ΦΑΡΜΑΚΑΠΟΘΗΚΕΣ ΑΙΓΑΙΟΥ ΣΥΦΑΚ Α.Ε", doy: "ΦΑΕ ΑΘΗΝΩΝ", mobile: "", phone: "2144160100", email: "pharm.aigaiou@syfak.gr" },
    "998548940": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΧΤΣΗΣ ΣΤΕΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6948053736", phone: "2551 029523", email: "aachtsi@gmail.com" },
    "998720640": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΜΕΡΟΠΗΣ ΜΠΑΧΤΣΕΒΑΝΙΔΟΥ ΚΑΙ ΣΙΑ Ε", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381023080", email: "fiorabach@hotmail.com" },
    "998721309": { eponimia: "ΤΣΙΤΛΑΚΙΔΟΥ Μ ΚΑΙ ΣΙΑ Ο", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381091116", email: "maria_tsitlakidou@hotmail.com" },
    "999228431": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΗΛΙΑ ΧΑΛΙΓΙΑΝΝΗ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6936632283", phone: "2531 023758", email: "iliaspharm@yahoo.com" },
    "999260690": { eponimia: "ΦΛΩΡΟΣ ΓΕΩΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "6944732173", phone: "", email: "florospharmacy@yahoo.gr" },
    "999295989": { eponimia: "Α ΓΚΑΙΤΑΤΖΗΣ ΚΑΙ ΣΙΑ Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382099191", email: "gkaitatzisaggelos@yahoo.gr" },
    "999296071": { eponimia: "ΚΑΡΑΟΥΛΑΝΗ ΕΥΑΓΓΕΛΙΑ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382 042299", email: "psiamanta@hotmail.com" },
    "999387480": { eponimia: "ΜΗΤΚΑΣ ΑΔΑΜΑΝΤΙΟΣ ΚΑΙ ΣΙΑ Ε", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6945411342", phone: "2551028396", email: "farmakiomitkas@gmail.com" }
};

// --- 2. ΛΙΣΤΑ ΠΡΟΪΟΝΤΩΝ ---
const products = [
    { name: 'Z-DermAspis', price: 5.03 },
    { name: 'Zplast Total Repair 50ml', price: 14.60 },
    { name: 'Zplast Total Repair 100ml', price: 26.80 },
    { name: 'ZplastCream 40gr', price: 12.30 },
    { name: 'ZplastCream 100gr', price: 24.79 },
    { name: 'Bruise Off Bite Out & Pain Free cream', price: 5.26 },
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

// --- 3. HELPERS ---
function hcpTable(rows) {
    return `<table class="hcp-table"><thead><tr><th>Συστατικό</th><th>Όφελος & Μηχανισμός</th></tr></thead><tbody>${rows.map(r => `<tr><td><strong>${r.ing}</strong></td><td>${r.moa}</td></tr>`).join("")}</tbody></table>`;
}

function consumerBlock({ title, bullets, howTo, cautions }) {
    return `<h3>${title}</h3><ul>${bullets.map(b => `<li>${b}</li>`).join("")}</ul>${howTo ? `<h4>Οδηγίες Χρήσης</h4><p>${howTo}</p>` : ""}${cautions ? `<h4>Προφυλάξεις</h4><p>${cautions}</p>` : ""}`;
}

function biblioList(items) {
    return `<h3>Βιβλιογραφία</h3><ol>${items.map(i => `<li>${i}</li>`).join("")}</ol>`;
}

// --- 4. ΠΛΗΡΕΙΣ ΕΠΙΣΤΗΜΟΝΙΚΕΣ ΠΕΡΙΓΡΑΦΕΣ ΠΡΟΪΟΝΤΩΝ ---
const productDetails = [
    {
        name: 'Z-DermAspis',
        description: {
            consumer: consumerBlock({
                title: "Υγιεινή & Φυσική Απωθητική Ασπίδα",
                bullets: ["**Άμεση Αντισηπτική Δράση:** 70% v/v αιθυλική αλκοόλη.", "**Βιολογική Προστασία:** Με PMD (Citriodora).", "**Outdoor Specialized:** Ιδανικό για outdoor δραστηριότητες."],
                howTo: "Ψεκασμός και στέγνωμα.", cautions: "Εύφλεκτο."
            }),
            science: `<h3>Φαρμακολογικό Rationale</h3>${hcpTable([{ing: "Ethanol 70%", moa: "Μετουσίωση πρωτεϊνών και λύση λιπιδικής μεμβράνης παθογόνων."}, {ing: "PMD", moa: "Ανταγωνιστής OBPs εντόμων. Αποκλείει τον εντοπισμό ξενιστή."}])}`,
            bibliography: biblioList(["Carroll SP (2006).", "CDC Guidelines (2024)."])
        }
    },
    {
        name: 'Zplast Total Repair 50ml',
        description: {
            consumer: consumerBlock({
                title: "Ολική Αναδόμηση Φραγμού & Εντατική Επούλωση",
                bullets: ["**Lipid Replenishment:** Ω-7 & Ω-5.", "**Anti-Scar Technology:** Προλαμβάνει χηλοειδή.", "**Deep Repair:** Ολική επαναφορά."],
                howTo: "2-3 φορές ημερησίως.", cautions: "Κατάλληλο για διαβητικό πόδι."
            }),
            science: `<h3>Μοριακή Ανάλυση Total Repair</h3>${hcpTable([{ing: "Sea Buckthorn Oil (Ω-7)", moa: "Ενισχύει τη δομική συνοχή του νέου επιθηλίου."}, {ing: "Chios Mastic Oil", moa: "TGF-β Induction: Ρυθμίζει τη σύνθεση ελαστίνης."}, {ing: "HA Multi-MW", moa: "Osmotic Regulation: Διασφαλίζει moist healing."}])}`,
            bibliography: biblioList(["Upadhyay NK (2009).", "Paraschos S (2012)."])
        }
    },
    {
        name: 'ZplastCream 100gr', // Αντιστοιχεί στη Zplast Cream 50ml βάσει καταλόγου τιμών
        description: {
            consumer: consumerBlock({
                title: "Κλινική Επούλωση & Κυτταρική Ανάπλαση",
                bullets: [
                    "**Εξειδικευμένη Αποκατάσταση:** Σχεδιασμένη για δερματικές λύσεις συνέχειας, μετεγχειρητικές τομές και εγκαύματα.",
                    "**Ταχεία Επιθηλιοποίηση:** Επιταχύνει τον πολλαπλασιασμό των κυττάρων και τη σύγκλειση των πληγών.",
                    "**Προστασία Ιστού:** Δημιουργεί ένα βιοσυμβατό φιλμ που διατηρεί την ελαστικότητα και προλαμβάνει τη δημιουργία ουλών.",
                    "**Premium Φροντίδα:** Ιδανική για ευαίσθητες περιοχές που απαιτούν υψηλό ρυθμό αναδόμησης."
                ],
                howTo: "Εφαρμόστε στην πάσχουσα περιοχή 2-3 φορές ημερησίως μέχρι την πλήρη ίαση.",
                cautions: "Μόνο για εξωτερική χρήση. Δερματολογικά ελεγμένο προϊόν."
            }),
            science: `
                <h3>Φαρμακολογικό Rationale & Μοριακή Δράση</h3>
                <p><strong>Θεραπευτικός Στόχος:</strong> Ενεργοποίηση των ενδογενών μηχανισμών ανάπλασης και δομική ρύθμιση της εξωκυττάριας ουσίας (ECM).</p>
                [Image of skin wound healing process]
                ${hcpTable([
                    {
                        ing: "Centella Asiatica (Triterpenoids)",
                        moa: "<strong>SMAD Signaling:</strong> Τα τριτερπενοειδή διεγείρουν τη βιοσύνθεση Κολλαγόνου Τύπου Ι & III μέσω της οδού SMAD, αυξάνοντας την αντοχή του ιστού στον εφελκυσμό."
                    },
                    {
                        ing: "Hyaluronic Acid",
                        moa: "<strong>Scaffold Technology:</strong> Δημιουργεί το απαραίτητο ικρίωμα για τη μετανάστευση των ινοβλαστών και διασφαλίζει το Moist Wound Healing περιβάλλον."
                    },
                    {
                        ing: "Hypericum Perforatum",
                        moa: "<strong>Keratinocyte Stimulation:</strong> Η υπερφορίνη διεγείρει τον πολλαπλασιασμό των κερατινοκυττάρων και προσφέρει αντιμικροβιακή προστασία ευρέος φάσματος."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Bylka W, et al. (2013). Centella asiatica in dermatology. PubMed: 24386321.",
                "Wohlrab J (2018). Role of HA in modern wound management. J. Dermatol.",
                "Öztürk N (2007). Hypericum in skin wound healing efficacy."
            ])
        }
    },
    {
       name: 'ZplastCream 40gr', // Αντιστοιχεί στη Zplast Cream 50ml βάσει καταλόγου τιμών
        description: {
            consumer: consumerBlock({
                title: "Κλινική Επούλωση & Κυτταρική Ανάπλαση",
                bullets: [
                    "**Εξειδικευμένη Αποκατάσταση:** Σχεδιασμένη για δερματικές λύσεις συνέχειας, μετεγχειρητικές τομές και εγκαύματα.",
                    "**Ταχεία Επιθηλιοποίηση:** Επιταχύνει τον πολλαπλασιασμό των κυττάρων και τη σύγκλειση των πληγών.",
                    "**Προστασία Ιστού:** Δημιουργεί ένα βιοσυμβατό φιλμ που διατηρεί την ελαστικότητα και προλαμβάνει τη δημιουργία ουλών.",
                    "**Premium Φροντίδα:** Ιδανική για ευαίσθητες περιοχές που απαιτούν υψηλό ρυθμό αναδόμησης."
                ],
                howTo: "Εφαρμόστε στην πάσχουσα περιοχή 2-3 φορές ημερησίως μέχρι την πλήρη ίαση.",
                cautions: "Μόνο για εξωτερική χρήση. Δερματολογικά ελεγμένο προϊόν."
            }),
            science: `
                <h3>Φαρμακολογικό Rationale & Μοριακή Δράση</h3>
                <p><strong>Θεραπευτικός Στόχος:</strong> Ενεργοποίηση των ενδογενών μηχανισμών ανάπλασης και δομική ρύθμιση της εξωκυττάριας ουσίας (ECM).</p>
                [Image of skin wound healing process]
                ${hcpTable([
                    {
                        ing: "Centella Asiatica (Triterpenoids)",
                        moa: "<strong>SMAD Signaling:</strong> Τα τριτερπενοειδή διεγείρουν τη βιοσύνθεση Κολλαγόνου Τύπου Ι & III μέσω της οδού SMAD, αυξάνοντας την αντοχή του ιστού στον εφελκυσμό."
                    },
                    {
                        ing: "Hyaluronic Acid",
                        moa: "<strong>Scaffold Technology:</strong> Δημιουργεί το απαραίτητο ικρίωμα για τη μετανάστευση των ινοβλαστών και διασφαλίζει το Moist Wound Healing περιβάλλον."
                    },
                    {
                        ing: "Hypericum Perforatum",
                        moa: "<strong>Keratinocyte Stimulation:</strong> Η υπερφορίνη διεγείρει τον πολλαπλασιασμό των κερατινοκυττάρων και προσφέρει αντιμικροβιακή προστασία ευρέος φάσματος."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Bylka W, et al. (2013). Centella asiatica in dermatology. PubMed: 24386321.",
                "Wohlrab J (2018). Role of HA in modern wound management. J. Dermatol.",
                "Öztürk N (2007). Hypericum in skin wound healing efficacy."
            ])
        }
    },
    {
        name: 'Zplast Total Repair 50ml',
        description: {
            consumer: consumerBlock({
                title: "Ολική Αναδόμηση Φραγμού & Εντατική Επούλωση",
                bullets: [
                    "**Εντατική Δράση:** Ενισχυμένη σύνθεση για την ολική αποκατάσταση του δερματικού φραγμού σε περιπτώσεις έντονων ερεθισμών ή βλαβών.",
                    "**Lipid Replenishment:** Με Ω-7 και Ω-5 λιπίδια που αναπληρώνουν τη χαμένη υγρασία και ελαστικότητα.",
                    "**Anti-Scar Technology:** Προλαμβάνει τη δημιουργία χηλοειδών και υπερτροφικών ουλών.",
                    "**Deep Repair:** Δρα στα βαθύτερα στρώματα της επιδερμίδας για μόνιμο αποτέλεσμα ανάπλασης."
                ],
                howTo: "Εφαρμόστε 2-3 φορές ημερησίως. Ιδανικό για μετεπεμβατική χρήση (laser, peeling).",
                cautions: "Κατάλληλο για διαβητικό πόδι και χρόνια έλκη υπό ιατρική επίβλεψη."
            }),
            science: `
                <h3>Προηγμένη Ιστική Αναδόμηση</h3>
                <p><strong>Στόχος:</strong> Ταυτόχρονη επιδιόρθωση DNA και αναπλήρωση μεμβρανικών λιπιδίων.</p>
                ${hcpTable([
                    {
                        ing: "Sea Buckthorn Oil (Ω-7)",
                        moa: "<strong>Membrane Stabilization:</strong> Το παλμιτολεϊκό οξύ ενσωματώνεται στα φωσφολιπίδια των κυτταρικών μεμβρανών, ενισχύοντας τη δομική συνοχή του νέου ιστού."
                    },
                    {
                        ing: "Chios Mastic Oil",
                        moa: "<strong>TGF-β Induction:</strong> Επάγει την έκφραση του μεταμορφωτικού αυξητικού παράγοντα βήτα, ο οποίος ενορχηστρώνει τη σύνθεση ελαστίνης και κολλαγόνου."
                    },
                    {
                        ing: "Hyaluronic Acid Multi-weight",
                        moa: "<strong>Osmotic Regulation:</strong> Ρυθμίζει την υδροδυναμική ισορροπία της ECM, αποτρέποντας την αφυδάτωση των κερατινοκυττάρων."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Upadhyay NK, et al. (2009). Sea buckthorn oil facilitates wound healing. PubMed.",
                "Paraschos S, et al. (2012). Chios Mastic Gum biological activities.",
                "Schultz GS, et al. (2011). Extracellular matrix and growth factors in healing."
            ])
        }
    },
     {
        name: 'Zplast Total Repair 100ml',
        description: {
            consumer: consumerBlock({
                title: "Ολική Αναδόμηση Φραγμού & Εντατική Επούλωση",
                bullets: [
                    "**Εντατική Δράση:** Ενισχυμένη σύνθεση για την ολική αποκατάσταση του δερματικού φραγμού σε περιπτώσεις έντονων ερεθισμών ή βλαβών.",
                    "**Lipid Replenishment:** Με Ω-7 και Ω-5 λιπίδια που αναπληρώνουν τη χαμένη υγρασία και ελαστικότητα.",
                    "**Anti-Scar Technology:** Προλαμβάνει τη δημιουργία χηλοειδών και υπερτροφικών ουλών.",
                    "**Deep Repair:** Δρα στα βαθύτερα στρώματα της επιδερμίδας για μόνιμο αποτέλεσμα ανάπλασης."
                ],
                howTo: "Εφαρμόστε 2-3 φορές ημερησίως. Ιδανικό για μετεπεμβατική χρήση (laser, peeling).",
                cautions: "Κατάλληλο για διαβητικό πόδι και χρόνια έλκη υπό ιατρική επίβλεψη."
            }),
            science: `
                <h3>Προηγμένη Ιστική Αναδόμηση</h3>
                <p><strong>Στόχος:</strong> Ταυτόχρονη επιδιόρθωση DNA και αναπλήρωση μεμβρανικών λιπιδίων.</p>
                ${hcpTable([
                    {
                        ing: "Sea Buckthorn Oil (Ω-7)",
                        moa: "<strong>Membrane Stabilization:</strong> Το παλμιτολεϊκό οξύ ενσωματώνεται στα φωσφολιπίδια των κυτταρικών μεμβρανών, ενισχύοντας τη δομική συνοχή του νέου ιστού."
                    },
                    {
                        ing: "Chios Mastic Oil",
                        moa: "<strong>TGF-β Induction:</strong> Επάγει την έκφραση του μεταμορφωτικού αυξητικού παράγοντα βήτα, ο οποίος ενορχηστρώνει τη σύνθεση ελαστίνης και κολλαγόνου."
                    },
                    {
                        ing: "Hyaluronic Acid Multi-weight",
                        moa: "<strong>Osmotic Regulation:</strong> Ρυθμίζει την υδροδυναμική ισορροπία της ECM, αποτρέποντας την αφυδάτωση των κερατινοκυττάρων."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Upadhyay NK, et al. (2009). Sea buckthorn oil facilitates wound healing. PubMed.",
                "Paraschos S, et al. (2012). Chios Mastic Gum biological activities.",
                "Schultz GS, et al. (2011). Extracellular matrix and growth factors in healing."
            ])
        }
    },
    {
        name: 'Bruise Off Bite Out & Pain Free cream 50ml', // Αντιστοιχεί στα 50ml
        description: {
            consumer: consumerBlock({
                title: "Άμεση Αποσυμφόρηση & Ανακούφιση από Τραυματισμούς",
                bullets: [
                    "**Τριπλή Στόχευση:** Εξαφανίζει μελανιές (εκχυμώσεις), μειώνει το οίδημα και ανακουφίζει από μυϊκούς πόνους.",
                    "**Βαθιά Διείσδυση:** Η Ουρία μαλακώνει την επιδερμίδα, επιτρέποντας στα δραστικά συστατικά να φτάσουν άμεσα στο αιμάτωμα.",
                    "**Άμεση Δράση:** Ιδανικό για τσιμπήματα εντόμων, διαστρέμματα και μώλωπες μετά από αισθητικές επεμβάσεις.",
                    "**Cooling Effect:** Προσφέρει άμεση αίσθηση ανακούφισης και δροσιάς στην πάσχουσα περιοχή."
                ],
                howTo: "Επάλειψη με ήπιο μασάζ 3-4 φορές ημερησίως μέχρι την απορρόφηση των μελανιών.",
                cautions: "Περιέχει Άρνικα. Μην εφαρμόζεται σε ανοιχτές πληγές ή βλεννογόνους."
            }),
            science: `
                <h3>Μοριακός Μηχανισμός Αντιφλεγμονώδους Δράσης</h3>
                <p><strong>Στόχος:</strong> Αναστολή της φλεγμονώδους εξαγγείωσης και επιτάχυνση της κάθαρσης της αιμοσφαιρίνης.</p>
                
                ${hcpTable([
                    {
                        ing: "Urea (Ουρία)",
                        moa: "<strong>Penetration Enhancer:</strong> Λειτουργεί ως κερατολυτικός φορέας που διασπά τους δεσμούς υδρογόνου, αυξάνοντας τη διαδερμική βιοδιαθεσιμότητα των βοτανικών δραστικών."
                    },
                    {
                        ing: "Arnica Montana (Helenalin)",
                        moa: "<strong>NF-κB Inhibition:</strong> Η ελεναλίνη αναστέλλει τον μεταγραφικό παράγοντα NF-κB, καταστέλλοντας την έκφραση προ-φλεγμονωδών κυτταροκινών (IL-1, TNF-α)."
                    },
                    {
                        ing: "Carvacrol",
                        moa: "<strong>TRPV1 Modulation:</strong> Προκαλεί ελεγχόμενη τοπική υπεραιμία, η οποία επιταχύνει τη μεταβολική απομάκρυνση των προϊόντων της φλεγμονής και του οιδήματος."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Wohlrab J (2018). Urea in Dermatology. PubMed.",
                "Lyss G, et al. (1998). Helenalin as a potent anti-inflammatory tool. Biol Chem.",
                "EMA Assessment Report on Arnica montana L. (2014)."
            ])

        }
    },
    {
        name: 'Bruise Off Bite Out & Pain Free cream 100ml', // Αντιστοιχεί στα 50ml
        description: {
            consumer: consumerBlock({
                title: "Άμεση Αποσυμφόρηση & Ανακούφιση από Τραυματισμούς",
                bullets: [
                    "**Τριπλή Στόχευση:** Εξαφανίζει μελανιές (εκχυμώσεις), μειώνει το οίδημα και ανακουφίζει από μυϊκούς πόνους.",
                    "**Βαθιά Διείσδυση:** Η Ουρία μαλακώνει την επιδερμίδα, επιτρέποντας στα δραστικά συστατικά να φτάσουν άμεσα στο αιμάτωμα.",
                    "**Άμεση Δράση:** Ιδανικό για τσιμπήματα εντόμων, διαστρέμματα και μώλωπες μετά από αισθητικές επεμβάσεις.",
                    "**Cooling Effect:** Προσφέρει άμεση αίσθηση ανακούφισης και δροσιάς στην πάσχουσα περιοχή."
                ],
                howTo: "Επάλειψη με ήπιο μασάζ 3-4 φορές ημερησίως μέχρι την απορρόφηση των μελανιών.",
                cautions: "Περιέχει Άρνικα. Μην εφαρμόζεται σε ανοιχτές πληγές ή βλεννογόνους."
            }),
            science: `
                <h3>Μοριακός Μηχανισμός Αντιφλεγμονώδους Δράσης</h3>
                <p><strong>Στόχος:</strong> Αναστολή της φλεγμονώδους εξαγγείωσης και επιτάχυνση της κάθαρσης της αιμοσφαιρίνης.</p>
                
                ${hcpTable([
                    {
                        ing: "Urea (Ουρία)",
                        moa: "<strong>Penetration Enhancer:</strong> Λειτουργεί ως κερατολυτικός φορέας που διασπά τους δεσμούς υδρογόνου, αυξάνοντας τη διαδερμική βιοδιαθεσιμότητα των βοτανικών δραστικών."
                    },
                    {
                        ing: "Arnica Montana (Helenalin)",
                        moa: "<strong>NF-κB Inhibition:</strong> Η ελεναλίνη αναστέλλει τον μεταγραφικό παράγοντα NF-κB, καταστέλλοντας την έκφραση προ-φλεγμονωδών κυτταροκινών (IL-1, TNF-α)."
                    },
                    {
                        ing: "Carvacrol",
                        moa: "<strong>TRPV1 Modulation:</strong> Προκαλεί ελεγχόμενη τοπική υπεραιμία, η οποία επιταχύνει τη μεταβολική απομάκρυνση των προϊόντων της φλεγμονής και του οιδήματος."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Wohlrab J (2018). Urea in Dermatology. PubMed.",
                "Lyss G, et al. (1998). Helenalin as a potent anti-inflammatory tool. Biol Chem.",
                "EMA Assessment Report on Arnica montana L. (2014)."
            ])

        }
    },
    {
        name: 'Z-boost 30 caps',
        description: {
            consumer: consumerBlock({
                title: "Ολοκληρωμένη Θωράκιση Ανοσοποιητικού & Κυτταρική Ενέργεια",
                bullets: [
                    "**Στοχευμένη Άμυνα:** Ενισχύει το ανοσοποιητικό σύστημα έναντι ιώσεων και κρυολογήματος.",
                    "**Αντιοξειδωτική Προστασία:** Με NAC και Ψευδάργυρο για την εξουδετέρωση ελευθέρων ριζών.",
                    "**Μείωση Κόπωσης:** Περιέχει CoQ10 για την άμεση τόνωση της κυτταρικής ενέργειας.",
                    "**Αναπνευστική Υποστήριξη:** Συμβάλλει στη διατήρηση της υγείας των αεραγωγών και στη μείωση των φλεγμονών."
                ],
                howTo: "1 κάψουλα ημερησίως μετά το γεύμα. Προτείνεται η λήψη κατά την αλλαγή των εποχών.",
                cautions: "Συμπλήρωμα διατροφής. Συμβουλευτείτε τον ιατρό σας εάν λαμβάνετε φαρμακευτική αγωγή."
            }),
            science: `
                <h3>Ανοσοφαρμακολογική Υποστήριξη</h3>
                <p><strong>Στόχος:</strong> Βελτιστοποίηση της Τ-κυτταρικής απόκρισης και ενίσχυση του συστήματος της Γλουταθειόνης.</p>
                
                ${hcpTable([
                    {
                        ing: "Zinc (Ψευδάργυρος)",
                        moa: "<strong>Viral Replication Inhibition:</strong> Αναστέλλει την RNA-εξαρτώμενη RNA πολυμεράση των ιών, εμποδίζοντας τον πολλαπλασιασμό τους στο ρινικό επιθήλιο."
                    },
                    {
                        ing: "N-Acetylcysteine (NAC)",
                        moa: "<strong>GSH Precursor:</strong> Παρέχει το απαραίτητο υπόστρωμα για τη σύνθεση της Γλουταθειόνης (ενδογενές αντιοξειδωτικό) και παρουσιάζει βλεννολυτική δράση."
                    },
                    {
                        ing: "Gingerols (Ginger)",
                        moa: "<strong>Dual Path Inhibition:</strong> Αναστέλλουν ταυτόχρονα τις οδούς COX-2 και 5-LOX, μειώνοντας την παραγωγή προ-φλεγμονωδών προσταγλανδινών."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Hemilä H (2017). Zinc and common cold meta-analysis. PubMed.",
                "Grzanna R (2005). Ginger anti-inflammatory actions review.",
                "Šalamon S (2019). Medical Uses of N-Acetylcysteine."
            ])

        }
    },
    {
        name: 'Z-boost 12 caps',
        description: {
            consumer: consumerBlock({
                title: "Ολοκληρωμένη Θωράκιση Ανοσοποιητικού & Κυτταρική Ενέργεια",
                bullets: [
                    "**Στοχευμένη Άμυνα:** Ενισχύει το ανοσοποιητικό σύστημα έναντι ιώσεων και κρυολογήματος.",
                    "**Αντιοξειδωτική Προστασία:** Με NAC και Ψευδάργυρο για την εξουδετέρωση ελευθέρων ριζών.",
                    "**Μείωση Κόπωσης:** Περιέχει CoQ10 για την άμεση τόνωση της κυτταρικής ενέργειας.",
                    "**Αναπνευστική Υποστήριξη:** Συμβάλλει στη διατήρηση της υγείας των αεραγωγών και στη μείωση των φλεγμονών."
                ],
                howTo: "1 κάψουλα ημερησίως μετά το γεύμα. Προτείνεται η λήψη κατά την αλλαγή των εποχών.",
                cautions: "Συμπλήρωμα διατροφής. Συμβουλευτείτε τον ιατρό σας εάν λαμβάνετε φαρμακευτική αγωγή."
            }),
            science: `
                <h3>Ανοσοφαρμακολογική Υποστήριξη</h3>
                <p><strong>Στόχος:</strong> Βελτιστοποίηση της Τ-κυτταρικής απόκρισης και ενίσχυση του συστήματος της Γλουταθειόνης.</p>
                
                ${hcpTable([
                    {
                        ing: "Zinc (Ψευδάργυρος)",
                        moa: "<strong>Viral Replication Inhibition:</strong> Αναστέλλει την RNA-εξαρτώμενη RNA πολυμεράση των ιών, εμποδίζοντας τον πολλαπλασιασμό τους στο ρινικό επιθήλιο."
                    },
                    {
                        ing: "N-Acetylcysteine (NAC)",
                        moa: "<strong>GSH Precursor:</strong> Παρέχει το απαραίτητο υπόστρωμα για τη σύνθεση της Γλουταθειόνης (ενδογενές αντιοξειδωτικό) και παρουσιάζει βλεννολυτική δράση."
                    },
                    {
                        ing: "Gingerols (Ginger)",
                        moa: "<strong>Dual Path Inhibition:</strong> Αναστέλλουν ταυτόχρονα τις οδούς COX-2 και 5-LOX, μειώνοντας την παραγωγή προ-φλεγμονωδών προσταγλανδινών."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Hemilä H (2017). Zinc and common cold meta-analysis. PubMed.",
                "Grzanna R (2005). Ginger anti-inflammatory actions review.",
                "Šalamon S (2019). Medical Uses of N-Acetylcysteine."
            ])

        }
    },
    {
        name: 'Hydralia Face cream 50ml',
        description: {
            consumer: consumerBlock({
                title: "Βαθιά Ενυδάτωση, Plumping Effect & Προστασία Φραγμού",
                bullets: [
                    "**Τεχνολογία Υαλουρονικού:** Συνδυάζει διαφορετικά μοριακά βάρη για άμεση επιφανειακή ενυδάτωση και εσωτερικό «γέμισμα» (plumping) των λεπτών γραμμών.",
                    "**Βιομιμητική Δράση:** Το έλαιο Jojoba μιμείται το φυσικό σμήγμα του δέρματος, ενισχύοντας τον λιπιδικό φραγμό χωρίς να φράζει τους πόρους.",
                    "**Μεταξένια Υφή:** Απορροφάται άμεσα, αποτελώντας την ιδανική βάση για μακιγιάζ και καθημερινή προστασία από την περιβαλλοντική ξηρότητα.",
                    "**Αναζωογόνηση:** Επαναφέρει την ελαστικότητα και τη φυσική λάμψη στην αφυδατωμένη επιδερμίδα."
                ],
                howTo: "Εφαρμόστε πρωί και βράδυ σε καθαρό πρόσωπο και λαιμό με κυκλικές κινήσεις.",
                cautions: "Δερματολογικά ελεγμένη. Χωρίς parabens. Κατάλληλη για όλους τους τύπους δέρματος, ιδανική για κανονικές και μεικτές επιδερμίδες."
            }),
            science: `
                <h3>Μοριακή Υδροδυναμική & Barrier Optimization</h3>
                <p><strong>Στόχος:</strong> Αποκατάσταση της διαδερμικής απώλειας ύδατος (TEWL) και ρύθμιση της ωσμωτικής ισορροπίας των κερατινοκυττάρων.</p>
                ${hcpTable([
                    {
                        ing: "Hyaluronic Acid (LMW - Low Molecular Weight)",
                        moa: "<strong>Deep Hydration:</strong> Λόγω του μικρού μοριακού μεγέθους, διεισδύει κάτω από την κεράτινη στοιβάδα. Δεσμεύει μόρια νερού στον χόριο ιστό, αυξάνοντας τον όγκο της εξωκυττάριας ουσίας (Plumping Effect)."
                    },
                    {
                        ing: "Jojoba Oil (Simmondsia Chinensis)",
                        moa: "<strong>Biomimetic Lipids:</strong> Πλούσιο σε εστέρες κηρού που προσομοιάζουν στο ανθρώπινο σμήγμα. Ενισχύει τη συνοχή των κερατινοκυττάρων και αποκαθιστά το υδρολιπιδικό φιλμ, μειώνοντας δραστικά το TEWL."
                    },
                    {
                        ing: "Natural Moisturizing Factors (NMFs)",
                        moa: "<strong>Osmotic Balance:</strong> Προσελκύουν και συγκρατούν την υγρασία στο εσωτερικό των κυττάρων, διατηρώντας την ενζυμική δραστηριότητα που είναι απαραίτητη για τη φυσιολογική απολέπιση."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Bukhari SNA, et al. (2018). Hyaluronic acid, a promising skin rejuvenating biomedicine: A review of recent updates and pre-clinical and clinical investigations on cosmetic and therapeutic effects.",
                "Ranzato E, et al. (2011). Jojoba oil: An updated review of its pharmacological and cosmetic properties. Journal of Ethnopharmacology.",
                "Papakonstantinou E, et al. (2012). Hyaluronic acid: A key molecule in skin aging. Dermato-Endocrinology.",
                "Verdier-Sévrain S, et al. (2007). Skin hydration: a review on its molecular mechanisms. Journal of Cosmetic Dermatology."
            ])

        }
    },
    {
       name: 'Revitacell Plus Face cream 50ml',
        description: {
            consumer: consumerBlock({
                title: "Επιγενετική Αντιγήρανση, Σύσφιξη & Ενεργοποίηση Νεότητας",
                bullets: [
                    "**Κυτταρική Επαναφορά:** Ενεργοποιεί την «πρωτεΐνη Klotho», η οποία είναι επιστημονικά αναγνωρισμένη ως η πρωτεΐνη της κυτταρικής μακροζωίας.",
                    "**Αντιοξειδωτική Ασπίδα:** Το έλαιο Ροδιού (Ω-5) προστατεύει το δέρμα από τη φωτογήρανση και τις ελεύθερες ρίζες.",
                    "**Ολική Αναδόμηση:** Βελτιώνει την πυκνότητα του δέρματος, λειαίνει τις βαθιές ρυτίδες και επαναφέρει το περίγραμμα του προσώπου.",
                    "**Premium Φροντίδα:** Ενισχυμένη σύνθεση με Μαστιχέλαιο Χίου για μέγιστη αναπλαστική δράση."
                ],
                howTo: "Εφαρμόστε το βράδυ (ή πρωί και βράδυ για ώριμες επιδερμίδες) σε καθαρό δέρμα. Συνδυάζεται ιδανικά με το Revitace Eyes.",
                cautions: "Ισχυρή αντιγηραντική δράση. Κατάλληλη για ηλικίες 35+ ή δέρματα με ορατά σημάδια κόπωσης και γήρανσης."
            }),
            science: `
                <h3>Επιγενετική & Dermal Remodeling</h3>
                <p><strong>Θεραπευτικό Rationale:</strong> Ρύθμιση της γονιδιακής έκφρασης των ινοβλαστών και προστασία του δομικού κολλαγόνου.</p>
                ${hcpTable([
                    {
                        ing: "Chios Mastic Oil (Lentiscus fractions)",
                        moa: "<strong>Klotho Gene Induction:</strong> Επάγει την έκφραση της πρωτεΐνης Klotho στους ινοβλάστες. Αυτό ενισχύει τους ενδογενείς μηχανισμούς επιδιόρθωσης του DNA και βελτιώνει την κυτταρική αποτοξίνωση (proteasome activity)."
                    },
                    {
                        ing: "Pomegranate Seed Oil (Punicic Acid - Ω5)",
                        moa: "<strong>MMP-1 Inhibition:</strong> Το πουνικικό οξύ αναστέλλει τις μεταλλοπρωτεϊνάσεις (MMPs), τα ένζυμα που αποδομούν το κολλαγόνο και την ελαστίνη κατά τη φωτογήρανση. Δρα ως πανίσχυρος αντιοξειδωτικός ρυθμιστής."
                    },
                    {
                        ing: "Phytosterols & Tocopherols",
                        moa: "<strong>Structural Support:</strong> Ενισχύουν τη βιοσύνθεση των λιπιδίων του μεσοκυττάριου χώρου, αυξάνοντας την πυκνότητα (density) του χορίου και την ελαστικότητα του ιστού."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Lall N, et al. (2020). Rejuvenating effect of mastic gum on human dermal fibroblasts: An epigenetic approach.",
                "Neha K, et al. (2014). Pomegranate seed oil in dermatology: A comprehensive review. Journal of Cosmetic Dermatology.",
                "Heber D, et al. (2007). Pomegranate Ellagitannins: Dermal support and photo-protection mechanisms.",
                "Kuro-o M. (2009). Klotho and aging: Molecular mechanisms of the aging-suppressor gene. Nagoya Journal of Medical Science."
            ])
        }
    },
    {
        name: 'Revitace Eyes cream Luce 30ml',
        description: {
            consumer: consumerBlock({
                title: "Φωτεινό Βλέμμα, Αποσυμφόρηση & Κατά των Μαύρων Κύκλων",
                bullets: [
                    "**Στοχευμένη Δράση:** Μειώνει ορατά το πρήξιμο (σακούλες) και τη χρωματική ένταση των μαύρων κύκλων στην περικογχική περιοχή.",
                    "**Άμεση Φωτεινότητα:** Η τεχνολογία 'Luce' αντανακλά το φως, προσφέροντας ξεκούραστη όψη από την πρώτη εφαρμογή.",
                    "**Σύσφιξη Βλεφάρων:** Βελτιώνει την τονικότητα του λεπτού δέρματος γύρω από τα μάτια, προλαμβάνοντας τη χαλάρωση.",
                    "**Καταπραϋντική Φροντίδα:** Με εκχύλισμα Άρνικας για τη μείωση της τοπικής συμφόρησης."
                ],
                howTo: "Εφαρμόστε μικρή ποσότητα πρωί και βράδυ. Τοποθετήστε ταμποναριστά με το παράμεσο δάχτυλο στο οστό της κόγχης του ματιού (από μέσα προς τα έξω).",
                cautions: "Οφθαλμολογικά ελεγμένη. Αποφύγετε την άμεση επαφή με τον επιπεφυκότα."
            }),
            science: `
                <h3>Μικροκυκλοφορία & Περικογχική Αποκατάσταση</h3>
                <p><strong>Στόχος:</strong> Ενίσχυση του τριχοειδικού δικτύου και απορρόφηση των προϊόντων λύσης της αιμοσφαιρίνης.</p>
                ${hcpTable([
                    {
                        ing: "Escin (Aesculus Hippocastanum)",
                        moa: "<strong>Venotonic Profile:</strong> Η αισκίνη αυξάνει την τονικότητα των τοιχωμάτων των τριχοειδών αγγείων και μειώνει τον αριθμό και τη διάμετρο των πόρων της ενδοθηλιακής μεμβράνης, περιορίζοντας τη διαρροή υγρών (οίδημα)."
                    },
                    {
                        ing: "Arnica Montana Extract",
                        moa: "<strong>Heme Degradation Support:</strong> Βοηθά στην απορρόφηση των χρωστικών του αίματος (χολερυθρίνη) που ευθύνονται για το χαρακτηριστικό σκούρο χρώμα των μαύρων κύκλων."
                    },
                    {
                        ing: "Peptide Complex",
                        moa: "<strong>Drainage Activation:</strong> Ενεργοποιεί τη λεμφική παροχέτευση της περιοχής, μειώνοντας τη συσσώρευση υγρών που προκαλεί το 'puffiness' (πρήξιμο) των βλεφάρων."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Gallelli L. (2019). Escin: a review of its anti-edematous, anti-inflammatory, and venotonic properties. Drug Design, Development and Therapy.",
                "Sirtori CR. (2001). Aescin: pharmacology, pharmacokinetics and therapeutic profile. Pharmacological Research.",
                "MacKay D. (2001). Hemorrhoids and varicose veins: a review of treatment options. Alternative Medicine Review (Arnica/Escin analysis).",
                "Rohdewald P. (2002). A review of the bio-availability and clinical efficacy of Aescin."
            ])

        }
    },
    {
        name: 'Alveolair Sir',
        description: {
            consumer: consumerBlock({
                title: "Φυτική Καταπράυνση Αναπνευστικού",
                bullets: ["**Άμεση Ανακούφιση:** Μαλακώνει τον λαιμό.", "**Φυσική Σύνθεση:** Θυμάρι & Αλθέα.", "**Αποχρεμπτική Δράση:** Καθαρίζει τις εκκρίσεις."],
                howTo: "10ml, 2-3 φορές.", cautions: "Φυλάσσεται στο ψυγείο."
            }),
            science: `<h3>Βλεννογονική Προστασία</h3>${hcpTable([{ing: "Althaea root", moa: "Mucilage Barrier: Προστατευτικό βιο-φιλμ."}, {ing: "Thymol", moa: "Bronchospasmolysis: Σπασμολυτική δράση."}, {ing: "Eucalyptus", moa: "Secretolytic Action: Κάθαρση βλέννας."}])}`,
            bibliography: biblioList(["EMA Monograph on Thymus.", "Althaea review."])
        }
    },
    {
        name: 'NUTRI MX PROBIOTIC PREMIUM',
        description: {
            consumer: consumerBlock({
                title: "Προηγμένη Ισορροπία Μικροβιώματος",
                bullets: ["**18 Στελέχη:** Πλήρες φάσμα.", "**Υψηλή Συγκέντρωση:** 10 δις CFU.", "**Ανοσολογική Ενίσχυση:** Ρύθμιση άμυνας."],
                howTo: "1 κάψουλα ημερησίως.", cautions: "Συμπλήρωμα διατροφής."
            }),
            science: `<h3>Μικροβιακή Ομοιόσταση</h3>${hcpTable([{ing: "18 Strains", moa: "Competitive Exclusion παθογόνων."}, {ing: "SCFA Production", moa: "Butyrate: Θρέψη κολονοκυττάρων."}, {ing: "Tregs Induction", moa: "Immune Tolerance: Μείωση φλεγμονής."}])}`,
            bibliography: biblioList(["Lee JY (2022). Science.", "Karamanolis GP (2019)."])
        }
    },
    {
       name: 'NUTRI MX MAGNESIUM 30 tb',
        description: {
            consumer: consumerBlock({
                title: "Μαγνήσιο & Β6 για Μυϊκή Χαλάρωση & Νευρική Ισορροπία",
                bullets: [
                    "**Κατά των Κραμπών:** Συμβάλλει στη φυσιολογική λειτουργία των μυών και την πρόληψη των μυϊκών σπασμών.",
                    "**Νευρικό Σύστημα:** Βοηθά στη μείωση του άγχους, της ευερεθιστότητας και στη βελτίωση της ποιότητας του ύπνου.",
                    "**Μείωση Κόπωσης:** Η βιταμίνη Β6 ενισχύει την απορρόφηση του μαγνησίου και τη μεταβολική ενέργεια.",
                    "**Ηλεκτρολυτική Ισορροπία:** Απαραίτητο για τη διατήρηση της ομοιόστασης των μετάλλων στον οργανισμό."
                ],
                howTo: "Λαμβάνετε 1 δισκίο ημερησίως, κατά προτίμηση το βράδυ πριν τον ύπνο.",
                cautions: "Συμπλήρωμα διατροφής. Σε περιπτώσεις νεφρικής ανεπάρκειας, η λήψη πρέπει να γίνεται κατόπιν ιατρικής συμβουλής."
            }),
            science: `
                <h3>Νευρομυϊκή Φυσιολογία & NMDA Modulation</h3>
                <p><strong>Στόχος:</strong> Ρύθμιση του διαύλου ασβεστίου και υποστήριξη της μιτοχονδριακής παραγωγής ATP.</p>
                ${hcpTable([
                    {
                        ing: "Magnesium (Citrate/Oxide)",
                        moa: "<strong>NMDA Antagonist:</strong> Το μαγνήσιο λειτουργεί ως φυσικός αναστολέας στον υποδοχέα NMDA, αποτρέποντας την υπερδιέγερση των νευρώνων (excitotoxicity). Ρυθμίζει τη σύσπαση/χάλαση των μυϊκών ινών."
                    },
                    {
                        ing: "Vitamin B6 (Pyridoxine)",
                        moa: "<strong>Magnesium Chaperone:</strong> Ενεργεί ως φορέας που διευκολύνει την είσοδο του μαγνησίου στο εσωτερικό των κυττάρων. Συμμετέχει στη σύνθεση του GABA (κατασταλτικός νευροδιαβιβαστής)."
                    },
                    {
                        ing: "ATP Biology",
                        moa: "<strong>Energy Metabolism:</strong> Το Μαγνήσιο είναι απαραίτητος συμπαράγοντας για το σύμπλοκο Mg-ATP, την ενεργό μορφή της ενέργειας που χρησιμοποιείται σε όλες τις μεταβολικές διεργασίες."
                    }
                ])}
            `,
            bibliography: biblioList([
                "EFSA Journal (2010). Scientific Opinion on the substantiation of health claims related to Magnesium.",
                "Prasad AS. (2008). Magnesium in Human Health. Molecular Medicine.",
                "Pouteau E, et al. (2018). Is Magnesium plus Vitamin B6 better than Magnesium alone for severe stress? A randomized controlled trial. PLoS ONE."
            ])

        }
    },
    {
        name: 'NUTRI MX A-Z 30 tb',
        description: {
            consumer: consumerBlock({
                title: "Πλήρης Πολυβιταμίνη για Τόνωση, Ενέργεια & Μεταβολισμό",
                bullets: [
                    "**24 Βασικά Θρεπτικά Συστατικά:** Πλήρης κάλυψη βιταμινών, μετάλλων και ιχνοστοιχείων για την καθημερινή υποστήριξη του οργανισμού.",
                    "**Ενεργειακή Τόνωση:** Συμβάλλει στη μείωση της κούρασης και της κόπωσης χάρη στο σύμπλεγμα βιταμινών Β.",
                    "**Ενίσχυση Ανοσοποιητικού:** Με βιταμίνες C, D και Ψευδάργυρο για την θωράκιση της φυσικής άμυνας.",
                    "**Πνευματική Διαύγεια:** Υποστηρίζει τη φυσιολογική γνωσιακή λειτουργία και τη συγκέντρωση."
                ],
                howTo: "Λαμβάνετε 1 δισκίο ημερησίως, κατά προτίμηση μετά το πρωινό γεύμα.",
                cautions: "Συμπλήρωμα διατροφής. Να μην υπερβαίνεται η συνιστώμενη δόση. Μακριά από μικρά παιδιά."
            }),
            science: `
                <h3>Μεταβολική Ομοιόσταση & Μικροθρεπτικά</h3>
                <p><strong>Στόχος:</strong> Διασφάλιση των ενζυμικών συμπαραγόντων για τον κύκλο του Krebs και την αντιοξειδωτική άμυνα.</p>
                ${hcpTable([
                    {
                        ing: "B-Complex (B1, B2, B6, B12)",
                        moa: "<strong>Co-enzymatic Activity:</strong> Απαραίτητες για τη μετατροπή των μακροθρεπτικών σε ATP. Ρυθμίζουν τον μεταβολισμό της ομοκυστεΐνης και τη σύνθεση νευροδιαβιβαστών."
                    },
                    {
                        ing: "Vitamin C & Zinc",
                        moa: "<strong>Immune Support:</strong> Η βιταμίνη C ενισχύει τη φαγοκυττάρωση των ουδετεροφίλων. Ο ψευδάργυρος είναι κρίσιμος για τη σταθερότητα των 'zinc fingers' στις πρωτεΐνες μεταγραφής του DNA."
                    },
                    {
                        ing: "Lutein & Trace Elements",
                        moa: "<strong>Oxidative Stress Control:</strong> Η λουτεΐνη προστατεύει την ωχρά κηλίδα από τη φωτοοξείδωση. Το Μαγγάνιο και ο Χαλκός αποτελούν δομικά στοιχεία της υπεροξειδικής δισμουτάσης (SOD)."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Regulation (EU) 432/2012 on permitted health claims for vitamins and minerals.",
                "Kennedy DO. (2016). B Vitamins and the Brain: Mechanisms, Dose and Efficacy. Nutrients.",
                "EFSA Journal (2010). Scientific Opinion on the substantiation of health claims related to Vitamin C and Zinc."
            ])

        }
    },
    {
        name: 'NUTRI MX OMEGA 3 30 tb',
        description: {
            consumer: consumerBlock({
                title: "Υψηλή Καθαρότητα Ωμέγα-3 για Καρδιά, Εγκέφαλο & Όραση",
                bullets: [
                    "**Καρδιαγγειακή Υγεία:** Το EPA και το DHA συμβάλλουν στη φυσιολογική λειτουργία της καρδιάς και τη διατήρηση των τριγλυκεριδίων.",
                    "**Νευρική Υποστήριξη:** Το DHA αποτελεί βασικό δομικό στοιχείο του εγκεφάλου, ενισχύοντας τη μνήμη και τη γνωσιακή λειτουργία.",
                    "**Υγεία των Ματιών:** Συμβάλλει στη διατήρηση της φυσιολογικής όρασης και της υγείας του αμφιβληστροειδούς.",
                    "**Μοριακή Απόσταξη:** Εγγυημένη καθαρότητα από βαρέα μέταλλα και ρύπους."
                ],
                howTo: "Λαμβάνετε 1-2 μαλακές κάψουλες ημερησίως μαζί με το φαγητό για βέλτιστη απορρόφηση.",
                cautions: "Συμπλήρωμα διατροφής. Προσοχή σε άτομα με αλλεργία στο ψάρι. Συμβουλευτείτε ιατρό αν λαμβάνετε αντιπηκτικά."
            }),
            science: `
                <h3>Λιπιδική Βιολογία & Φλεγμονώδης Επίλυση</h3>
                <p><strong>Στόχος:</strong> Ρύθμιση της ρευστότητας των κυτταρικών μεμβρανών και παραγωγή προ-επιλυτικών διαμεσολαβητών.</p>
                ${hcpTable([
                    {
                        ing: "EPA (Eicosapentaenoic Acid)",
                        moa: "<strong>Anti-inflammatory Substrate:</strong> Ανταγωνίζεται το αραχιδονικό οξύ (AA) για τα ένζυμα COX και LOX, οδηγώντας στην παραγωγή λιγότερο φλεγμονωδών προσταγλανδινών (σειρά 3) και λευκοτριενίων (σειρά 5)."
                    },
                    {
                        ing: "DHA (Docosahexaenoic Acid)",
                        moa: "<strong>Neuroprotection:</strong> Αποτελεί το 40% των πολυακόρεστων λιπαρών οξέων στον εγκέφαλο. Ρυθμίζει τη συναπτική διαβίβαση και τη λειτουργία των φωτοϋποδοχέων."
                    },
                    {
                        ing: "Specialized Pro-resolving Mediators (SPMs)",
                        moa: "<strong>Resolution of Inflammation:</strong> Το EPA και το DHA αποτελούν πρόδρομα μόρια για τις ρεσολβίνες (Resolvins), οι οποίες δίνουν το σήμα για τον ενεργό τερματισμό της φλεγμονής."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Calder PC. (2013). Omega-3 fatty acids and inflammatory processes. British Journal of Clinical Pharmacology.",
                "Mozaffarian D & Wu JH. (2011). Omega-3 fatty acids and cardiovascular disease. Journal of the American College of Cardiology.",
                "Swanson D, et al. (2012). Omega-3 Fatty Acids EPA and DHA: Health Benefits Throughout Life. Advances in Nutrition."
            ])

        }
    },
    {
         name: 'NUTRI MX JOINT 30 tb',
        description: {
            consumer: consumerBlock({
                title: "Ολοκληρωμένη Δομική Υποστήριξη Αρθρώσεων & Χόνδρων",
                bullets: [
                    "**Στοχευμένη Θρέψη:** Συνδυάζει Γλυκοζαμίνη και Χονδροϊτίνη για τη διατήρηση της ακεραιότητας και της λίπανσης των αρθρώσεων.",
                    "**Αναγεννητική Δράση:** Το MSM και το Κολλαγόνο Τύπου ΙΙ ενισχύουν τη σταθερότητα του συνδετικού ιστού και των τενόντων.",
                    "**Μείωση Δυσκαμψίας:** Συμβάλλει στην ομαλή κίνηση και στην προστασία των αρθρώσεων από την καθημερινή καταπόνηση.",
                    "**Ιδανικό για Αθλητές:** Απαραίτητο για άτομα με έντονη φυσική δραστηριότητα ή εκφυλιστικές αλλοιώσεις (οστεοαρθρίτιδα)."
                ],
                howTo: "Λαμβάνετε 1-2 δισκία ημερησίως, κατά προτίμηση μαζί με τα γεύματα. Συνιστάται η συστηματική λήψη για τουλάχιστον 3 μήνες.",
                cautions: "Περιέχει συστατικά από οστρακοειδή (αλλεργιογόνο). Συμβουλευτείτε ιατρό εάν λαμβάνετε αντιπηκτική αγωγή."
            }),
            science: `
                <h3>Βιοχημεία του Χόνδρου & Chondroprotection</h3>
                <p><strong>Στόχος:</strong> Αναστολή των καταβολικών ενζύμων και διέγερση της σύνθεσης της εξωκυττάριας ουσίας (ECM) του χόνδρου.</p>
                ${hcpTable([
                    {
                        ing: "Glucosamine & Chondroitin Sulfate",
                        moa: "<strong>GAG Precursors:</strong> Λειτουργούν ως υποστρώματα για τη βιοσύνθεση γλυκοζαμινογλυκανών και αγρεκάνης. Η χονδροϊτίνη αναστέλλει την ελαστάση και τη λευκοκυτταρική εστεράση, προστατεύοντας το αρθρικό υγρό."
                    },
                    {
                        ing: "Native Collagen Type II",
                        moa: "<strong>Oral Tolerance Mechanism:</strong> Αλληλεπιδρά με τις πλάκες Peyer στο έντερο, επάγοντας ρυθμιστικά Τ-κύτταρα (Tregs) που καταστέλλουν την αυτοάνοση φλεγμονώδη απόκριση στον αρθρικό χόνδρο."
                    },
                    {
                        ing: "MSM (Methylsulfonylmethane)",
                        moa: "<strong>Sulfur Bioavailability:</strong> Παρέχει οργανικό θείο για τη σταθεροποίηση των δισουλφιδικών δεσμών στις ίνες κολλαγόνου, ενώ μειώνει την παραγωγή ελευθέρων ριζών (ROS) στα χονδροκύτταρα."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Hochberg MC, et al. (2016). Combined chondroitin sulfate and glucosamine for painful knee osteoarthritis. Annals of the Rheumatic Diseases.",
                "Lugo JP, et al. (2013). Undenatured type II collagen (UC-II®) for joint support. J Int Soc Sports Nutr.",
                "Butawan M, et al. (2017). Methylsulfonylmethane: Applications and Safety. Nutrients.",
                "EFSA Panel on Dietetic Products (NDA). Scientific Opinion on Glucosamine and joint health."
            ])

        }
    },
    {
        name: 'Zarkolia Cosmetic pack',
        description: {
            consumer: consumerBlock({
                title: "Ολοκληρωμένο Πρωτόκολλο Αντιγήρανσης & Αναδόμησης",
                bullets: [
                    "**Συνδυαστική Υπεροχή:** Περιλαμβάνει Hydralia Face, Revitacell Plus και Revitace Eyes για μια πλήρη 24ωρη ρουτίνα φροντίδας.",
                    "**Στάδιο 1 (Hydralia):** Πρωινή ενυδάτωση, προστασία φραγμού και plumping effect για όλη την ημέρα.",
                    "**Στάδιο 2 (Revitacell):** Βραδινή επιγενετική αναδόμηση, ενεργοποίηση του Klotho και λείανση ρυτίδων κατά τη διάρκεια του ύπνου.",
                    "**Στάδιο 3 (Eyes Luce):** 24ωρη φροντίδα ματιών για φωτεινότητα, αποσυμφόρηση και καταπολέμηση μαύρων κύκλων."
                ],
                howTo: "**Πρωί:** Καθαρισμός ➜ Revitace Eyes ➜ Hydralia Face. **Βράδυ:** Καθαρισμός ➜ Revitace Eyes ➜ Revitacell Plus.",
                cautions: "Το απόλυτο επιστημονικό δώρο για την υγεία της επιδερμίδας. Συνέργεια δραστικών για μέγιστο κλινικό αποτέλεσμα."
            }),
            science: `
                <h3>Συνεργιστικό Μοντέλο Δερμοκοσμητικής Παρέμβασης</h3>
                <p><strong>Rationale:</strong> Ο συνδυασμός των τριών σκευασμάτων εξασφαλίζει την κάλυψη όλων των αναγκών της εξωκυττάριας ουσίας και του κυτταρικού μεταβολισμού.</p>
                ${hcpTable([
                    {
                        ing: "Hydration (Hydralia)",
                        moa: "Ρύθμιση ωσμωτικής πίεσης και άμεση πλήρωση του υδρολιπιδικού φραγμού."
                    },
                    {
                        ing: "Epigenetics (Revitacell)",
                        moa: "Ενεργοποίηση γονιδιακών μονοπατιών επιδιόρθωσης (Klotho) και αναστολή ενζυμικής αποδόμησης (MMPs)."
                    },
                    {
                        ing: "Microcirculation (Eyes Luce)",
                        moa: "Βελτίωση της τριχοειδικής κυκλοφορίας και μείωση της περικογχικής κατακράτησης υγρών."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Συνδυασμένη βιβλιογραφία των μεμονωμένων προϊόντων (Lall N, Bukhari SNA, Gallelli L).",
                "Farris PK. (2014). Cosmeceuticals and Cosmetic Practice: A multi-modal approach to skin aging.",
                "Rinnerthaler M, et al. (2015). Oxidative stress in aging human skin. Biomolecules."
            ])

        }
    }
];

// --- 5. INITIALIZATION & ERP LOGIC ---
document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector('#product-table tbody');
    if(tableBody) {
        products.forEach((p, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `<td><strong>${p.name}</strong></td><td>${p.price.toFixed(2)} €</td><td><input type="number" class="quantity" id="qty-${index}" min="0" data-price="${p.price}" oninput="updateAll()" value="0"></td><td><span id="gift-${index}">0</span></td><td id="effective-${index}">${p.price.toFixed(2)} €</td><td id="total-${index}" style="font-weight:700;">0.00 €</td>`;
            tableBody.appendChild(row);
        });
    }

    const btnContainer = document.getElementById('productButtonsContainer');
    if(btnContainer) {
        products.forEach((p, index) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.onclick = () => showProductDetails(index);
            card.innerHTML = `
                <img src="images/${p.name}.jpg" onerror="this.src='https://via.placeholder.com/200x160?text=${encodeURIComponent(p.name)}'">
                <div class="product-title">${p.name}</div>
                <div class="product-price">${p.price.toFixed(2)} €</div>
            `;
            btnContainer.appendChild(card);
        });
    }

    const afmInput = document.getElementById('afm');
    if(afmInput) {
        afmInput.addEventListener('input', function() {
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
    }
    updateAll();
});

function calculateGifts(q){
    if(q < 9) return 0; if(q < 18) return 1; if(q < 24) return 3; if(q < 48) return 6;
    return Math.floor(q / 48) * 15;
}

function updateAll(){
    let net = 0;
    const rows = document.querySelectorAll('#product-table tbody tr');
    rows.forEach((row, index) => {
        const qInput = row.querySelector(".quantity"), q = parseInt(qInput.value) || 0, p = parseFloat(qInput.dataset.price);
        const gifts = calculateGifts(q), lineTotal = q * p;
        document.getElementById(`gift-${index}`).textContent = gifts;
        document.getElementById(`effective-${index}`).textContent = (q > 0 ? (lineTotal / (q + gifts)).toFixed(2) : p.toFixed(2)) + " €";
        document.getElementById(`total-${index}`).textContent = lineTotal.toFixed(2) + " €";
        net += lineTotal;
    });
    const vat = net * 0.24;
    document.getElementById("net-value").textContent = net.toFixed(2) + " €";
    document.getElementById("vat-value").textContent = vat.toFixed(2) + " €";
    document.getElementById("final-total").textContent = (net + vat).toFixed(2) + " €";
}

function showProductDetails(index){
    const p = productDetails.find(i => i.name === products[index].name);
    const tableInput = document.getElementById(`qty-${index}`);
    const modal = document.getElementById('productModal');
    if(!modal) return;
    modal.innerHTML = `<div class="modal-content"><span class="close-button" onclick="closeProductModal()">&times;</span><h2>${products[index].name}</h2><div class="modal-tabs"><button class="tab-button active" onclick="openTab(event, 'Consumer')">Για το Κοινό</button><button class="tab-button" onclick="openTab(event, 'Science')">Επιστημονικά</button><button class="tab-button" onclick="openTab(event, 'Biblio')">Βιβλιογραφία</button></div><div id="Consumer" class="tab-content" style="display:block">${p ? p.description.consumer : "—"}</div><div id="Science" class="tab-content">${p ? p.description.science : "—"}</div><div id="Biblio" class="tab-content">${p ? p.description.bibliography : "—"}</div><div style="margin-top:20px; text-align:center;"><label>Ποσότητα:</label> <input type="number" id="modalQty" value="${tableInput.value}" style="width:70px; padding:10px;"> <button class="btn-primary" onclick="updateFromModal(${index})">Ενημέρωση Φόρμας</button></div></div>`;
    modal.style.display='block';
}

function updateFromModal(index){
    const qtyInput = document.getElementById(`qty-${index}`);
    const modalQty = document.getElementById('modalQty');
    if (qtyInput && modalQty) { qtyInput.value = modalQty.value; updateAll(); }
    closeProductModal();
}

function closeProductModal(){ document.getElementById('productModal').style.display='none'; }

function openTab(evt, name) {
    let i, tabcontent = document.getElementsByClassName("tab-content"), tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none";
    for (i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "");
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

async function processOrder() {
    const eponimia = document.getElementById("eponimia").value;
    const afm = document.getElementById("afm").value;
    const payment = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "—";
    const remarks = document.getElementById("remarks").value;
    const submitBtn = document.getElementById("submitBtn");
    let productsList = [];
    document.querySelectorAll("#product-table tbody tr").forEach(r => {
        const q = parseInt(r.querySelector('.quantity').value) || 0;
        if(q > 0) productsList.push(`${r.cells[0].textContent} (${q})`);
    });
    if(!eponimia || productsList.length === 0) { alert("Συμπληρώστε επωνυμία και προϊόντα!"); return; }
    const orderData = { customer: eponimia, afm: afm, products: productsList.join(", "), netValue: document.getElementById("net-value").textContent, vat: document.getElementById("vat-value").textContent, total: document.getElementById("final-total").textContent, payment: payment, remarks: remarks };
    submitBtn.disabled = true; submitBtn.textContent = "Αποστολή...";
    try {
        await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(orderData) });
        alert("Η παραγγελία καταχωρήθηκε επιτυχώς!");
    } catch (error) {
        alert("Σφάλμα σύνδεσης. Χρησιμοποιήστε το Backup Email.");
    } finally {
        submitBtn.disabled = false; submitBtn.textContent = "Ολοκλήρωση & Cloud Sync";
    }
}

function sendEmailViaClient() {
    const name = document.getElementById("eponimia").value;
    const subject = `ΠΑΡΑΓΓΕΛΙΑ ZARKOLIA HEALTH / ${name}`;
    let body = `ΠΕΛΑΤΗΣ: ${name}\nΣΥΝΟΛΟ: ${document.getElementById("final-total").textContent}`;
    window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function clearForm(){ if(confirm("Καθαρισμός;")) { document.getElementById("orderForm").reset(); updateAll(); } }
