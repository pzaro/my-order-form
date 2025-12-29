// --- 1. ΠΛΗΡΗΣ ΒΑΣΗ ΔΕΔΟΜΕΝΩΝ ΠΕΛΑΤΩΝ ---
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
    "800414167": { eponimia: "ΜΑΧΜΟΥΡΙΔΟΥ ΚΑΙ ΣΙΑ Ο", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6944258002", phone: "2553024676", email: "www.maxmouridou@hotmail.gr" },
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
    "997688685": { eponimia: "ΣΦ ΚΑΛΟΥΔΗ ΚΩΝΣΤΑΝΤΙΝΙΑ & ΖΟΥΜΑ ΣΤΑΜΑΤΙΑ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΕΙΑ", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "", phone: "", email: "stam1213zoum@gmail.com" },
    "997957423": { eponimia: "ΗΛΙΑΣ Θ ΚΑΤΡΗΣ Ε", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", phone: "", email: "iliaskatrispharmacy@gmail.com" },
    "997961412": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΠΑΝΑΓΙΩΤΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ  ΦΡΑΓΓΙΔΟΥ ΝΙΚΟΛΕΤΑ Ο", doy: "ΚΙΛΚΙΣ", mobile: "6986962826", phone: "2341023924", email: "farmakeiofraggidou@gmail.com" },
    "997961880": { eponimia: "ΚΑΡΙΠΙΔΟΥ ΧΡΙΣΤΙΝΑ ΚΑΙ ΣΙΑ ΟΜΟΡΡΥΘΜΟΣ ΕΤΑΙΡΕΙΑ", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341020865", email: "chriskaripidou@gmail.com" },
    "998392245": { eponimia: "ΦΑΡΜΑΚΑΠΟΘΗΚΕΣ ΑΙΓΑΙΟΥ ΣΥΦΑΚ Α.Ε", doy: "ΦΑΕ ΑΘΗΝΩΝ", mobile: "", phone: "2144160100", email: "pharm.aigaiou@syfak.gr" },
    "998548940": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΧΤΣΗΣ ΣΤΕΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6948053736", phone: "2551 029523", email: "aachtsi@gmail.com" },
    "998720640": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΜΕΡΟΠΗΣ ΜΠΑΧΤΣΕΒΑΝΙΔΟΥ ΚΑΙ ΣΙΑ Ε", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381023080", email: "fiorabach@hotmail.com" },
    "998721309": { eponimia: "ΤΣΙΤΛΑΚΙΔΟΥ Μ ΚΑΙ ΣΙΑ Ο", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381091116", email: "maria_tsitlakidou@hotmail.com" },
    "999228431": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΗΛΙΑ ΧΑΛΙΓΙΑΝΝΗ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6936632283", phone: "2531 023758", email: "iliaspharm@yahoo.com" },
    "999260690": { eponimia: "ΦΛΩΡΟΣ ΓΕΩΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "6944732173", phone: "", email: "florospharmacy@yahoo.gr" },
    "999295953": { eponimia: "Συστεγασμένα φαρμακεία Αλ.Γκικας- Αν.Γκικα Ο.Ε", doy: "Γιαννιτσών", mobile: "6977598429", phone: "2382024813", email: "anagkika@gmail.com" },
    "999295989": { eponimia: "Α ΓΚΑΙΤΑΤΖΗΣ ΚΑΙ ΣΙΑ Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382099191", email: "gkaitatzisaggelos@yahoo.gr" },
    "999296071": { eponimia: "ΚΑΡΑΟΥΛΑΝΗ ΕΥΑΓΓΕΛΙΑ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382 042299", email: "psiamanta@hotmail.com" },
    "999387480": { eponimia: "ΜΗΤΚΑΣ ΑΔΑΜΑΝΤΙΟΣ ΚΑΙ ΣΙΑ Ε", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6945411342", phone: "2551028396", email: "farmakiomitkas@gmail.com" },
    "999746768": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΝΔΡΕΑΔΟΥ ΕΥΑΓΓΕΛΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "6936515332", phone: "2384021001", email: "andreadoupharmacy@yahoo.com" }
};

// --- 2. ΛΙΣΤΑ ΠΡΟΪΟΝΤΩΝ & ΤΙΜΩΝ ---
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

// --- 3. ΠΛΗΡΕΙΣ ΕΠΙΣΤΗΜΟΝΙΚΕΣ ΠΕΡΙΓΡΑΦΕΣ ---
// --- ΠΛΗΡΗΣ ΕΠΙΣΤΗΜΟΝΙΚΗ ΑΝΑΛΥΣΗ ΠΡΟΪΟΝΤΩΝ ---
const productDetails = [
    {
        name: 'Z-DermAspis',
        image: 'images/z-dermaspis.jpg',
        description: {
            consumer: `<h3>Καθαρισμός & Φυσική Προστασία</h3><p>Ένα πρωτοποριακό σπρέι που προσφέρει διπλή δράση: βαθύ καθαρισμό ενώ ταυτόχρονα δημιουργεί μια φυσική ασπίδα προστασίας από τα έντομα. Ιδανικό για παιδιά και ενήλικες, καθώς δεν περιέχει DEET.</p>`,
            science: `<h3>Φαρμακολογικός Μηχανισμός</h3><p><strong>Alcohol Denat (70%):</strong> Δρα ως ευρέος φάσματος αντισηπτικό προκαλώντας μετουσίωση των πρωτεϊνών του κυτταροπλάσματος των μικροοργανισμών.<br><strong>PMD (Citriodora Oil):</strong> Η δραστική ουσία p-menthane-3,8-diol είναι ο μοναδικός φυτικός παράγοντας εγκεκριμένος από το CDC. Δρα παρεμβαίνοντας στις <strong>πρωτεΐνες δέσμευσης οσμών (OBPs)</strong> των εντόμων, εμποδίζοντας τον εντοπισμό των πτητικών ενώσεων του ξενιστή (γαλακτικό οξύ, CO2).</p>`,
            bibliography: `<p>1. Carroll SP, Loye J. PMD botanical mosquito repellent efficacy. J Am Mosq Control Assoc. 2006.<br>2. CDC Guidelines on Insect Repellents (2023).</p>`
        }
    },
    {
        name: 'ZplastCream 40gr',
        image: 'images/zplast-40.jpg',
        description: {
            consumer: `<h3>Εντατική Ανάπλαση & Επούλωση</h3><p>Εξειδικευμένη κρέμα για πληγές, εγκαύματα και ερεθισμούς. Καταπραΰνει άμεσα, εμποδίζει τις μολύνσεις και προάγει την ταχεία αναδόμηση του δέρματος χωρίς σημάδια.</p>`,
            science: `<h3>Μοριακός Μηχανισμός Επούλωσης</h3><p><strong>Hypericum Perforatum (Υπερφορίνη):</strong> Διεγείρει τον πολλαπλασιασμό των κερατινοκυττάρων και των ινοβλαστών, επιταχύνοντας τη σύγκλειση των πληγών.<br><strong>Chios Mastic Oil:</strong> Ενεργοποιεί τη σύνθεση κολλαγόνου μέσω της οδού TGF-β και παρουσιάζει ισχυρή αντιμικροβιακή δράση κατά του S. aureus.<br><strong>Calamine:</strong> Δρα ως ήπιο στυπτικό και αντιφλεγμονώδες, καταστέλλοντας την τοπική απελευθέρωση ισταμίνης.</p>`,
            bibliography: `<p>1. Öztürk N, et al. Hypericum perforatum on skin wounds. J Ethnopharmacol. 2007.<br>2. Paraschos S, et al. Chios mastic gum: antimicrobial properties. 2012.</p>`
        }
    },
    {
        name: 'ZplastCream 100gr',
        image: 'images/zplast-100.jpg',
        description: {
            consumer: `<h3>Επαγγελματική Φροντίδα Ανάπλασης (100gr)</h3><p>Η ίδια ισχυρή επουλωτική σύνθεση σε μεγάλη συσκευασία για εκτεταμένη χρήση σε μεγάλες επιφάνειες δέρματος ή χρόνια προβλήματα ερεθισμών.</p>`,
            science: `<h3>Συνεργιστική Δράση</h3><p>Περιλαμβάνει <strong>Ιπποφαές (Ω-7)</strong> για την ενίσχυση του επιδερμικού φραγμού και <strong>Καλέντουλα</strong> που προάγει την αγγειογένεση στην περιοχή του τραύματος, διασφαλίζοντας την οξυγόνωση των νέων ιστών.</p>`,
            bibliography: `<p>1. Upadhyay NK, et al. Healing efficacy of Hippophae rhamnoides. 2009.<br>2. Leach MJ. Calendula officinalis and wound healing. 2008.</p>`
        }
    },
    {
        name: 'Bruise Off Bite Out & Pain Free cream',
        image: 'images/bruise-off.jpg',
        description: {
            consumer: `<h3>Άμεση Απορρόφηση Μωλώπων & Πόνου</h3><p>Η λύση για μελανιές, πρήξιμο και μυϊκούς πόνους. Χάρη στην <strong>Ουρία</strong>, τα δραστικά συστατικά (Άρνικα, Ριγανέλαιο) απορροφώνται αμέσως, προσφέροντας γρήγορη ανακούφιση και ορατή μείωση του αιματώματος.</p>`,
            science: `<h3>Φαρμακοδυναμική Μηχανισμού</h3><p><strong>Urea (Ουρία):</strong> Λειτουργεί ως ισχυρός ενισχυτής διείσδυσης (penetration enhancer), διασπώντας τους δεσμούς υδρογόνου της κερατίνης ώστε τα τερπένια να φτάσουν στον υποδόριο ιστό.<br><strong>Arnica Montana (Helenalin):</strong> Η ελεναλίνη αναστέλλει τον μεταγραφικό παράγοντα <strong>NF-kB</strong>, εμποδίζοντας τη γονιδιακή έκφραση των ενζύμων COX-2 (φλεγμονή).<br><strong>Carvacrol (Ριγανέλαιο):</strong> Αγωνιστής των υποδοχέων <strong>TRPV1</strong>, προκαλώντας ελεγχόμενη υπεραιμία που απομακρύνει τα μεταβολικά παραπροϊόντα της φλεγμονής.</p>`,
            bibliography: `<p>1. Lyss G, et al. Helenalin mechanism. Biol. Chem. 1998.<br>2. Wohlrab J. Urea in Dermatology. Dermatol Clin. 2018.</p>`
        }
    },
    {
        name: 'Bruise Off Bite Out & Pain Free cream 100ml',
        image: 'images/bruise-off-100.jpg',
        description: {
            consumer: `<h3>Ολοκληρωμένη Λύση για Μυϊκούς Πόνους (100ml)</h3><p>Μεγάλη συσκευασία για συστηματική χρήση σε αθλητές ή άτομα με χρόνια μυοσκελετική καταπόνηση. Ιδανική για μασάζ αποκατάστασης.</p>`,
            science: `<h3>Βιοδιαθεσιμότητα</h3><p>Η φαρμακοτεχνική μορφή εξασφαλίζει παρατεταμένη αποδέσμευση των δραστικών συστατικών (Άρνικα, Λεβάντα, Λινέλαιο) στους ιστούς, μειώνοντας το οξειδωτικό στρες στην περιοχή του τραύματος.</p>`,
            bibliography: `<p>Nasiri A, et al. (2018). Essential oils in pain management.</p>`
        }
    },
    {
        name: 'Z-boost 30 caps',
        image: 'images/zboost-30.jpg',
        description: {
            consumer: `<h3>Ολιστική Θωράκιση με Ginger</h3><p>Προηγμένο συμπλήρωμα για την ενίσχυση του ανοσοποιητικού. Το <strong>Ginger</strong> προσφέρει ισχυρή αντιφλεγμονώδη προστασία, ενώ ο Ψευδάργυρος και η NAC θωρακίζουν το αναπνευστικό σύστημα.</p>`,
            science: `<h3>Μοριακή Ανοσοενίσχυση</h3><p><strong>Zingiber officinale (Ginger):</strong> Οι τζιντζερόλες αναστέλλουν τη δράση των ενζύμων COX και LOX, μειώνοντας τη σύνθεση προσταγλανδινών και λευκοτριενίων.<br><strong>Zinc (Ψευδάργυρος):</strong> Απαραίτητος για τη δράση της <strong>θυμουλίνης</strong>, ρυθμίζοντας τη διαφοροποίηση των Τ-λεμφοκυττάρων.<br><strong>N-Acetylcysteine (NAC):</strong> Πρόδρομος της γλουταθειόνης (GSH). Παρουσιάζει βλεννολυτική δράση διασπώντας τους δισουλφιδικούς δεσμούς των βλεννοπρωτεϊνών.</p>`,
            bibliography: `<p>1. Grzanna R, et al. (2005). Ginger—an herbal medicinal product with broad anti-inflammatory actions.<br>2. Hemilä H. (2017). Zinc and the common cold. JRSM Open.</p>`
        }
    },
    {
        name: 'Z-boost 12 caps',
        image: 'images/zboost-12.jpg',
        description: {
            consumer: `<h3>Άμεση Τόνωση & Προστασία (Συσκευασία Ταχείας Δράσης)</h3><p>Σχεδιασμένο για τις πρώτες ημέρες των συμπτωμάτων. Βοηθά το σώμα να ανταπεξέλθει γρήγορα στην κόπωση και τις ιώσεις.</p>`,
            science: `<h3>Αντιοξειδωτική Δράση</h3><p>Περιέχει <strong>CoQ10</strong> και <strong>ALA</strong>, τα οποία βελτιώνουν τη μιτοχονδριακή λειτουργία των λευκοκυττάρων, παρέχοντας την απαραίτητη ενέργεια για την ταχεία ανοσολογική απόκριση.</p>`,
            bibliography: `<p>Saini R. (2011). Coenzyme Q10: The essential nutrient.</p>`
        }
    },
    {
        name: 'Revitacell Plus Face cream 50ml',
        image: 'images/revitacell.jpg',
        description: {
            consumer: `<h3>Επιγενετική Αντιγήρανση & lifting</h3><p>Προηγμένη κρέμα που ενεργοποιεί την "πρωτεΐνη της νεότητας" στο δέρμα σας. Μειώνει τις βαθιές ρυτίδες, προσφέρει σύσφιξη και προστατεύει από την οξείδωση και τη ρύπανση.</p>`,
            science: `<h3>Μοριακή Δράση (Klotho Protein)</h3><p><strong>Mastic Gum Extract:</strong> Αυξάνει την έκφραση της πρωτεΐνης <strong>Klotho</strong> στα κύτταρα της επιδερμίδας, καθυστερώντας την κυτταρική γήρανση.<br><strong>Pomegranate Seed Oil:</strong> Πλούσιο σε πουνικικό οξύ (Ω-5), αναστέλλει τα ένζυμα μεταλλοπρωτεϊνάσης (MMP-1) που αποδομούν το κολλαγόνο.</p>`,
            bibliography: `<p>1. Lall N, et al. (2020). Rejuvenating effect of mastic gum on skin.<br>2. Neha K, et al. (2014). Pomegranate seed oil review.</p>`
        }
    },
    {
        name: 'Hydralia Face cream 50ml',
        image: 'images/hydralia.jpg',
        description: {
            consumer: `<h3>Βαθιά Ενυδάτωση & Λάμψη</h3><p>Κρέμα προσώπου που αποκαθιστά την υγρασία στις βαθύτερες στοιβάδες. Χαρίζει απαλή υφή, φωτεινότητα και ελαστικότητα στην επιδερμίδα.</p>`,
            science: `<h3>Υδροδυναμική του Δέρματος</h3><p><strong>Hyaluronic Acid (LMW):</strong> Το χαμηλού μοριακού βάρους υαλουρονικό διεισδύει βαθιά, δεσμεύοντας μόρια νερού εκ των έσω.<br><strong>Jojoba Oil:</strong> Λειτουργεί ως βιομιμητικό του ανθρώπινου σμήγματος, αποκαθιστώντας τον υδρολιπιδικό φραγμό χωρίς να φράζει τους πόρους.</p>`,
            bibliography: `<p>Bukhari SNA, et al. (2018). Hyaluronic acid: A rejuvenating biomedicine.</p>`
        }
    },
    {
        name: 'Revitace Eyes cream Luce 30ml',
        image: 'images/eyes.jpg',
        description: {
            consumer: `<h3>Ξεκούραστο Βλέμμα χωρίς Μαύρους Κύκλους</h3><p>Στοχευμένη φροντίδα για την περιοχή των ματιών. Μειώνει ορατά το πρήξιμο (σακούλες), αποχρωματίζει τους μαύρους κύκλους και φωτίζει το βλέμμα.</p>`,
            science: `<h3>Μικροκυκλοφορία & Αποσυμφόρηση</h3><p><strong>Aesculus Hippocastanum (Escin):</strong> Η αισκίνη μειώνει τη διαπερατότητα των τριχοειδών αγγείων, προλαμβάνοντας το οίδημα.<br><strong>Arnica Extract:</strong> Επιταχύνει την απομάκρυνση των χρωστικών του αίματος που ευθύνονται για τον σκούρο κύκλο κάτω από τα μάτια.</p>`,
            bibliography: `<p>Gallelli L. (2019). Escin: a review of its venotonic properties.</p>`
        }
    },
    {
        name: 'Alveolair Sir',
        image: 'images/alveolair.jpg',
        description: {
            consumer: `<h3>Φυσική Ανακούφιση για τον Βήχα</h3><p>Φυτικό σιρόπι που μαλακώνει τον λαιμό και βοηθά στην απελευθέρωση της αναπνοής. Κατάλληλο για ξηρό και παραγωγικό βήχα.</p>`,
            science: `<h3>Συνεργιστική Φυτοθεραπεία</h3><p><strong>Eucalyptus Globulus (Cineole):</strong> Παρουσιάζει ισχυρή βλεννολυτική και αντιφλεγμονώδη δράση.<br><strong>Thymus Vulgaris (Thymol):</strong> Χαλαρώνει τους λείους μύες των βρόγχων (σπασμολυτική δράση).<br><strong>Althaea Officinalis:</strong> Οι βλεννοπολυσακχαρίτες της σχηματίζουν ένα προστατευτικό στρώμα στο βλεννογόνο, καταστέλλοντας τον ερεθισμό.</p>`,
            bibliography: `<p>EMA (2016). Herbal monograph on Althaea officinalis & Thymus vulgaris.</p>`
        }
    },
    {
        name: 'NUTRI MX PROBIOTIC PREMIUM',
        image: 'images/probiotic.jpg',
        description: {
            consumer: `<h3>18 Στελέχη για την Εντερική Υγεία</h3><p>Υψηλής συγκέντρωσης προβιοτικά (10 δις CFU) για την αποκατάσταση της χλωρίδας και την ενίσχυση του ανοσοποιητικού από το έντερο.</p>`,
            science: `<h3>Μικροβίωμα & Ανοσολογία</h3><p><strong>18 Στελέχη:</strong> Διασφαλίζουν πολυμορφία στον αποικισμό. Παράγουν <strong>Λιπαρά Οξέα Βραχείας Αλύσου (SCFA)</strong>, τα οποία τρέφουν τα κολονοκύτταρα και ρυθμίζουν τη δράση των κυττάρων <strong>Tregs</strong>, μειώνοντας τη συστηματική φλεγμονή.</p>`,
            bibliography: `<p>1. Lee JY, et al. The microbiome and gut homeostasis. Science. 2022.<br>2. Karamanolis GP. Προβιοτικά και Γαστρεντερικό. 2019.</p>`
        }
    },
    {
        name: 'NUTRI MX MAGNESIUM 1 Τεμ',
        image: 'images/magnesium.jpg',
        description: {
            consumer: `<h3>Μυϊκή Χαλάρωση & Ψυχική Ηρεμία</h3><p>Μαγνήσιο ενισχυμένο με Βιταμίνη Β6. Σταματά τις κράμπες, μειώνει την κόπωση και βοηθά στον ποιοτικό ύπνο ρυθμίζοντας το νευρικό σύστημα.</p>`,
            science: `<h3>Βιοχημικός Ρόλος</h3><p><strong>Magnesium Citrate/Oxide:</strong> Συμπαράγοντας σε >300 ενζυμικές αντιδράσεις (ATP synthesis).<br><strong>Νευρομυϊκός Μηχανισμός:</strong> Λειτουργεί ως φυσικός ανταγωνιστής του ασβεστίου στις συνάψεις, μπλοκάροντας τους υποδοχείς NMDA και αποτρέποντας την υπερδιέγερση των μυϊκών ινών.</p>`,
            bibliography: `<p>Prasad AS. Magnesium in human health. 2008. RDA Guidelines.</p>`
        }
    },
    {
        name: 'NUTRI MX JOINT',
        image: 'images/joint.jpg',
        description: {
            consumer: `<h3>Υποστήριξη Αρθρώσεων & Χόνδρων</h3><p>Ολοκληρωμένη φόρμουλα που "λιπαίνει" τους χόνδρους, μειώνει τη φλεγμονή και βοηθά στην αποκατάσταση της κίνησης χωρίς πόνο.</p>`,
            science: `<h3>Αναγέννηση Συνδετικού Ιστού</h3><p><strong>Glucosamine & Chondroitin:</strong> Δομικά συστατικά των γλυκοζαμινογλυκανών του αρθρικού χόνδρου.<br><strong>MSM:</strong> Παρέχει οργανικό θείο για τον σχηματισμό δισουλφιδικών δεσμών στις ίνες κολλαγόνου.<br><strong>Collagen Type II:</strong> Ειδικό κολλαγόνο που απορροφά τους κραδασμούς στις αρθρικές επιφάνειες.</p>`,
            bibliography: `<p>1. Kislingh. Role of collagen in joint health. 2019.<br>2. Daskalou E. MSM as a source of sulfur. 2016.</p>`
        }
    },
    {
        name: 'NUTRI MX A-Z',
        image: 'images/az.jpg',
        description: {
            consumer: `<h3>Πολυβιταμίνη για Πλήρη Κάλυψη</h3><p>Πλήρες φάσμα 24 βιταμινών και μετάλλων για τόνωση, ενέργεια και κάλυψη διατροφικών κενών σε περιόδους έντονης κόπωσης.</p>`,
            science: `<h3>Μεταβολική Ομοιόσταση</h3><p>Σχεδιασμένο βάσει των ημερήσιων αναγκών (RDA) για τη διασφάλιση της ομαλής λειτουργίας όλων των μεταβολικών μονοπατιών και την προστασία από το οξειδωτικό στρες.</p>`,
            bibliography: `<p>EFSA Journal. Dietary Reference Values for nutrients.</p>`
        }
    },
    {
        name: 'NUTRI MX OMEGA 3',
        image: 'images/omega3.jpg',
        description: {
            consumer: `<h3>Καρδιακή Υγεία & Μνήμη</h3><p>Υψηλής καθαρότητας ιχθυέλαιο. Προστατεύει την καρδιά, ρυθμίζει τα τριγλυκερίδια και ενισχύει τη μνήμη και τη συγκέντρωση.</p>`,
            science: `<h3>EPA/DHA & Φλεγμονή</h3><p>Τα EPA/DHA ενσωματώνονται στις κυτταρικές μεμβράνες και δρουν ως ανταγωνιστές του αραχιδονικού οξέος, οδηγώντας στη σύνθεση <strong>ρεσολβινών</strong> που τερματίζουν ενεργά τη διαδικασία της φλεγμονής.</p>`,
            bibliography: `<p>Calder PC. Omega-3 fatty acids and inflammatory processes. 2013.</p>`
        }
    },
    {
        name: 'Zarkolia Cosmetic pack',
        image: 'images/cosmetic-pack.jpg',
        description: {
            consumer: `<h3>Σετ Ολοκληρωμένης Αντιγήρανσης</h3><p>Ολοκληρωμένο πρωτόκολλο περιποίησης που συνδυάζει Revitacell Plus, Hydralia και Revitace Eyes για ολική επαναφορά της επιδερμίδας.</p>`,
            science: `<h3>Συνεργιστικό Πρωτόκολλο</h3><p>Επιτυγχάνει 1. Βαθιά ενυδάτωση (Υαλουρονικό), 2. Αντιοξειδωτική θωράκιση (Ρόδι/Berries) και 3. Επιγενετική αναζωογόνηση μέσω της ενεργοποίησης της πρωτεΐνης Klotho.</p>`,
            bibliography: `<p>Συνδυασμένη βιβλιογραφία Revitacell, Hydralia και Revitace Eyes.</p>`
        }
    }
];

// --- 4. ΛΕΙΤΟΥΡΓΙΚΟΤΗΤΑ (MODALS, ΣΥΝΟΛΑ, EMAIL) ---
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
    let img = p && p.image ? `<img src="${p.image}" style="max-width:200px; display:block; margin:10px auto; border-radius:8px; border:1px solid #eee;">` : "";
    
    document.getElementById('productModal').innerHTML = `
        <div class="modal-content">
            <div class="modal-header"><h2>${products[index].name}</h2><span class="close-button" onclick="closeProductModal()">&times;</span></div>
            ${img}
            <div class="modal-body">
                <div class="modal-tabs">
                    <button class="tab-button active" onclick="openTab(event, 'Consumer')">Για το Κοινό</button>
                    <button class="tab-button" onclick="openTab(event, 'Science')">Επιστημονικά</button>
                    <button class="tab-button" onclick="openTab(event, 'Biblio')">Βιβλιογραφία</button>
                </div>
                <div id="Consumer" class="tab-content" style="display:block"></div>
                <div id="Science" class="tab-content"></div>
                <div id="Biblio" class="tab-content"></div>
            </div>
            <div class="modal-quick-add"><label>Ποσότητα:</label><input type="number" id="modalQuantity" value="${tableInput.value > 0 ? tableInput.value : 1}"><button onclick="updateFromModal(${index})">Ενημέρωση</button></div>
        </div>`;
    
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
    
    body += `ΠΡΟΪΟΝΤΑ & ΔΩΡΑ (Κοστολόγηση)\n---------------------------------------------------\n`;
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
    body += `ΤΕΛΙΚΟ ΣΥΝΟΛΟ : ${total}\n\n`;

    body += `ΤΡΟΠΟΣ ΠΛΗΡΩΜΗΣ: ${payment}\n`;
    body += `ΠΑΡΑΤΗΡΗΣΕΙΣ: ${remarks}\n\n`;
    
    body += `ΣΤΟΙΧΕΙΑ ΚΑΤΑΘΕΣΗΣ\nIBAN: GR8901722520005252016160277\nΤράπεζα Πειραιώς`;

    window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function previewAndSaveAsTXT(){
    const name = document.getElementById("eponimia").value;
    let content = `ΠΑΡΑΓΓΕΛΙΑ ZARKOLIA HEALTH\nΠΕΛΑΤΗΣ: ${name}\n\n`;
    document.querySelectorAll("#product-table tbody tr").forEach(r => {
        const q = parseInt(r.querySelector('.quantity').value) || 0;
        if(q > 0) content += `- ${r.cells[0].textContent}: ${q} τεμ. (+${r.querySelector('.gifts').textContent} δώρα) | ${r.querySelector('.line-total').textContent}\n`;
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
