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
// --- ΠΛΗΡΕΙΣ EVIDENCE-BASED ΠΕΡΙΓΡΑΦΕΣ ΠΡΟΪΟΝΤΩΝ ---
const productDetails = [
    {
        name: 'Z-DermAspis',
        image: 'images/z-dermaspis.jpg',
        description: {
            consumer: `<h3>Καθαρισμός & Άνεση</h3><p>Σπρέι υψηλής περιεκτικότητας σε αλκοόλη για γρήγορο καθαρισμό του δέρματος και άμεση αίσθηση φρεσκάδας. Η προσθήκη <strong>PMD (citriodora)</strong> συμβάλλει στη δημιουργία ενός «απωθητικού προφίλ» έναντι των εντόμων, καθιστώντας το ιδανικό για όλες τις εξωτερικές δραστηριότητες.</p><p><em>*Αποφύγετε την επαφή με μάτια και ερεθισμένο δέρμα. Εύφλεκτο προϊόν.</em></p>`,
            science: `<h3>Μηχανισμός Δράσης ανά Συστατικό</h3>
                <ul>
                    <li><strong>Alcohol denat. (~70% v/v):</strong> Προκαλεί αποδιάταξη των πρωτεϊνών και διαταραχή της λιπιδικής μεμβράνης των μικροοργανισμών. Προσφέρει ισχυρή αντισηπτική δράση καθαρισμού.</li>
                    <li><strong>PMD (p-menthane-3,8-diol) από Eucalyptus citriodora:</strong> Παρεμβαίνει στους οσφρητικούς και χημειοαισθητικούς μηχανισμούς των εντόμων, προκαλώντας λειτουργική σύγχυση (confusion) ως προς τον εντοπισμό του ξενιστή.</li>
                </ul>`,
            bibliography: `<p>Carroll SP & Loye J (2006). PMD botanical mosquito repellent efficacy. J Am Mosq Control Assoc. | Eur-Lex: Biocidal Products Regulation (BPR).</p>`
        }
    },
    {
        name: 'ZplastCream 40gr',
        image: 'images/zplast-40.jpg',
        description: {
            consumer: `<h3>Ενισχυμένη Φροντίδα Δερματικού Φραγμού</h3><p>Κρέμα καθημερινής χρήσης για το ξηρό, ευαίσθητο ή ταλαιπωρημένο δέρμα. Συμβάλλει στην καταπράυνση και τη βελτίωση της όψης της επιδερμίδας, υποστηρίζοντας τη φυσική αποκατάσταση του φραγμού. Ιδανική για σημεία με τραχύτητα ή αίσθημα δυσφορίας ("τράβηγμα").</p>`,
            science: `<h3>Φαρμακολογική Προσέγγιση</h3>
                <ul>
                    <li><strong>Hypericum perforatum (Hyperforin-rich):</strong> Παρουσιάζει αντιφλεγμονώδη και αντιοξειδωτική δράση, υποστηρίζοντας την επανεπιθηλιοποίηση της επιδερμίδας.</li>
                    <li><strong>Chios Mastic oil:</strong> Προσφέρει αντιοξειδωτική προστασία και ήπια αντιμικροβιακή δραστηριότητα, ενισχύοντας το δερματικό comfort.</li>
                    <li><strong>Calamine (ZnO + Fe2O3):</strong> Ήπια στυπτική και καταπραϋντική δράση, μειώνει τον επιφανειακό ερεθισμό και την υγρασία (wetness).</li>
                </ul>`,
            bibliography: `<p>Öztürk N, et al. (2007). Hypericum perforatum on skin wounds. J Ethnopharmacol. | Paraschos S, et al. (2012). Chios mastic gum properties.</p>`
        }
    },
    {
        name: 'ZplastCream 100gr',
        image: 'images/zplast-100.jpg',
        description: {
            consumer: `<h3>Ολοκληρωμένη Προστασία & Ανάπλαση (100g)</h3><p>Η ενισχυμένη σύνθεση σε μεγάλη συσκευασία για εκτεταμένες περιοχές. Ιδανική για την αντιμετώπιση της έντονης ξηρότητας και τη βελτίωση της ελαστικότητας του δέρματος μετά από εξωτερικές επιβαρύνσεις (κρύο, τριβή).</p>`,
            science: `<h3>Συνεργιστική Δράση Λιπιδίων</h3>
                <ul>
                    <li><strong>Sea buckthorn oil (ω-7):</strong> Παρέχει απαραίτητα λιπαρά οξέα για την ενίσχυση του λιπιδικού φραγμού και της ελαστικότητας.</li>
                    <li><strong>Calendula:</strong> Προσφέρει υψηλό καταπραϋντικό προφίλ σε ερεθισμένες περιοχές.</li>
                    <li><strong>Honey & Thyme:</strong> Συμβάλλουν στην αντιοξειδωτική θωράκιση της περιοχής.</li>
                </ul>`,
            bibliography: `<p>Upadhyay NK, et al. (2009). Sea buckthorn healing efficacy. | Leach MJ (2008). Calendula officinalis clinical review.</p>`
        }
    },
    {
        name: 'Bruise Off Bite Out & Pain Free cream',
        image: 'images/bruise-off.jpg',
        description: {
            consumer: `<h3>Ανακούφιση Επιβαρυμένης Επιδερμίδας</h3><p>Comfort gel-cream με ουρία και φυτικά εκχυλίσματα. Προσφέρει άμεση αίσθηση ανακούφισης σε περιοχές που νιώθετε «βαρύ» το δέρμα μετά από έντονη δραστηριότητα ή τοπικούς ερεθισμούς. Απορροφάται γρήγορα και είναι ιδανική για μασάζ.</p>`,
            science: `<h3>Μηχανισμός Δράσης Διείσδυσης</h3>
                <ul>
                    <li><strong>Urea:</strong> Δρα ως humectant και ήπιο κερατολυτικό, βελτιώνοντας την ενυδάτωση της κεράτινης στιβάδας και διευκολύνοντας τη διείσδυση (penetration support) των υπόλοιπων δραστικών.</li>
                    <li><strong>Arnica montana:</strong> Αντιφλεγμονώδης δράση μέσω αναστολής των NF-κB μονοπατιών, βελτιώνοντας την όψη των εκχυμώσεων (μωλώπων).</li>
                    <li><strong>Origanum vulgare oil (Carvacrol):</strong> Προκαλεί τοπικό αισθητηριακό warming (counter-irritant) και βελτιώνει την τοπική μικροκυκλοφορία.</li>
                </ul>`,
            bibliography: `<p>Lyss G, et al. (1998). Helenalin mechanism. | Wohlrab J (2018). Urea in Dermatology. Dermatol Clin.</p>`
        }
    },
    {
        name: 'Z-boost 30 caps',
        image: 'images/zboost.jpg',
        description: {
            consumer: `<h3>Υποστήριξη Ανοσοποιητικού & Τόνωση</h3><p>Εξειδικευμένο συμπλήρωμα διατροφής με Ψευδάργυρο που συμβάλλει στη φυσιολογική λειτουργία του ανοσοποιητικού συστήματος. Ιδανικό για περιόδους με αυξημένες απαιτήσεις του οργανισμού.</p>`,
            science: `<h3>Μοριακή Υποστήριξη</h3>
                <ul>
                    <li><strong>Zinc (Gluconate/Citrate):</strong> Κεντρικός ρόλος στην έμφυτη και επίκτητη ανοσία, στη δραστηριότητα της θυμουλίνης και στη διατήρηση της ακεραιότητας του επιθηλίου.</li>
                    <li><strong>N-Acetylcysteine (NAC):</strong> Πρόδρομος γλουταθειόνης για redox support. Σε φαρμακολογικό επίπεδο παρουσιάζει βλεννολυτική δράση.</li>
                    <li><strong>Ginger (Zingiber officinale):</strong> Τροποποίηση των μονοπατιών 5-LOX/COX για αντιφλεγμονώδη σηματοδότηση.</li>
                    <li><strong>CoQ10 & ALA:</strong> Υποστήριξη της μιτοχονδριακής αλυσίδας μεταφοράς ηλεκτρονίων και ανακύκλωση αντιοξειδωτικών.</li>
                </ul>`,
            bibliography: `<p>Regulation (EU) 432/2012 (Zinc claims). | Grzanna R, et al. (2005). Ginger anti-inflammatory actions.</p>`
        }
    },
    {
        name: 'Revitacell Plus Face cream 50ml',
        image: 'images/revitacell.jpg',
        description: {
            consumer: `<h3>Αντιοξειδωτική Προστασία & Λείανση</h3><p>Κρέμα προσώπου με ισχυρά αντιοξειδωτικά λιπιδικά συστατικά. Συμβάλλει στη λείανση των λεπτών γραμμών και των ρυτίδων, βελτιώνοντας την ελαστικότητα και τη φωτεινότητα της κουρασμένης επιδερμίδας.</p>`,
            science: `<h3>Κυτταρική Προστασία</h3>
                <ul>
                    <li><strong>Mastic fractions:</strong> Ισχυρή αντιοξειδωτική δράση και υποστήριξη του δερματικού comfort.</li>
                    <li><strong>Pomegranate seed oil (Punicic acid):</strong> Λιπιδικό support που βελτιώνει την ξηρότητα και προστατεύει από το οξειδωτικό στρες.</li>
                </ul>`,
            bibliography: `<p>Lall N, et al. (2020). Rejuvenating effect of mastic gum on skin. | Neha K, et al. (2014). Pomegranate seed oil review.</p>`
        }
    },
    {
        name: 'Hydralia Face cream 50ml',
        image: 'images/hydralia.jpg',
        description: {
            consumer: `<h3>Βαθιά Ενυδάτωση & Plumping Effect</h3><p>Συνδυάζει υαλουρονικό οξύ και βιομιμητικά λιπίδια για άμεση αίσθηση ενυδάτωσης. "Γεμίζει" την επιδερμίδα, χαρίζοντας ελαστικότητα και λεία υφή. Ιδανική και ως βάση μακιγιάζ.</p>`,
            science: `<h3>Υδροδυναμική Επιδερμίδας</h3>
                <ul>
                    <li><strong>Hyaluronic acid (LMW/HMW):</strong> Ο συνδυασμός διαφορετικών μοριακών βαρών εξασφαλίζει επιφανειακό φιλμ προστασίας (HMW) και βαθύτερη ενυδάτωση (LMW).</li>
                    <li><strong>Jojoba oil:</strong> Περιέχει εστέρες κηρού βιομιμητικούς του ανθρώπινου σμήγματος, μειώνοντας τη διαδερμική απώλεια νερού (TEWL).</li>
                </ul>`,
            bibliography: `<p>Bukhari SNA, et al. (2018). Hyaluronic acid in skin rejuvenation. | Ranzato E, et al. (2011). Jojoba oil properties.</p>`
        }
    },
    {
        name: 'Revitace Eyes cream Luce 30ml',
        image: 'images/eyes.jpg',
        description: {
            consumer: `<h3>Ξεκούραστο & Φωτεινό Βλέμμα</h3><p>Εξειδικευμένη κρέμα ματιών που βελτιώνει την όψη του πρηξίματος και των μαύρων κύκλων. Με απαλή υφή που απορροφάται άμεσα, προσφέρει φωτεινότητα στην περιοχή κάτω από τα μάτια.</p>`,
            science: `<h3>Μικροκυκλοφορία Περιοχής</h3>
                <ul>
                    <li><strong>Aesculus hippocastanum (Escin):</strong> Venotonic προφίλ που συμβάλλει στη μείωση της εμφάνισης οιδήματος (puffiness) και στη σταθερότητα των τριχοειδών.</li>
                    <li><strong>Arnica extract:</strong> Βοηθά στη βελτίωση της όψης των δυσχρωμιών στην περιοχή των ματιών.</li>
                </ul>`,
            bibliography: `<p>Gallelli L (2019). Escin venotonic properties review. | Sirtori CR (2001). Aescin pharmacology.</p>`
        }
    },
    {
        name: 'Alveolair Sir',
        image: 'images/alveolair.jpg',
        description: {
            consumer: `<h3>Φυσική Καταπράυνση Λαιμού</h3><p>Φυτικό σιρόπι με θυμάρι και ευκάλυπτο που μαλακώνει και ηρεμεί τον ερεθισμένο λαιμό. Η σύνθεσή του βοηθά στην άνεση της αναπνοής και στην ενυδάτωση των βλεννογόνων.</p>`,
            science: `<h3>Βοτανική Τεκμηρίωση (EMA/HMPC)</h3>
                <ul>
                    <li><strong>Thyme (Thymus spp.):</strong> Αναγνωρισμένο ως αποχρεμπτικό σε περιπτώσεις παραγωγικού βήχα που σχετίζεται με κρυολόγημα.</li>
                    <li><strong>Marshmallow root (Althaea officinalis):</strong> Περιέχει βλέννες που σχηματίζουν προστατευτικό στρώμα, καταπραΰνοντας τον ερεθισμό του φάρυγγα και τον ξηρό βήχα.</li>
                    <li><strong>Eucalyptus oil:</strong> Παραδοσιακή χρήση για την ανακούφιση του βήχα και της ρινικής συμφόρησης.</li>
                </ul>`,
            bibliography: `<p>European Medicines Agency (EMA/HMPC Monographs) για Thyme, Althaea and Eucalyptus.</p>`
        }
    },
    {
        name: 'NUTRI MX PROBIOTIC PREMIUM',
        image: 'images/probiotic.jpg',
        description: {
            consumer: `<h3>Ισορροπία Εντερικής Χλωρίδας</h3><p>Συμπλήρωμα με 18 στελέχη προβιοτικών και 10 δις CFU. Υποστηρίζει τη φυσιολογική ισορροπία του μικροβιώματος, απαραίτητη για την πέψη και τη συνολική ευεξία.</p>`,
            science: `<h3>Μικροβίωμα & Φραγμός</h3>
                <ul>
                    <li><strong>Multi-strain formula:</strong> Ο συνδυασμός 18 στελεχών προσφέρει ευρύ φάσμα αποικισμού.</li>
                    <li><strong>MoA:</strong> Δράση μέσω ανταγωνιστικού αποκλεισμού παθογόνων, παραγωγής SCFA (Short Chain Fatty Acids) και ενίσχυσης του επιθηλιακού φραγμού.</li>
                </ul>`,
            bibliography: `<p>Lee JY, et al. (2022). Science. | Karamanolis GP (2019). Probiotics in GI health.</p>`
        }
    },
    {
        name: 'NUTRI MX MAGNESIUM 1 Τεμ',
        image: 'images/magnesium.jpg',
        description: {
            consumer: `<h3>Μυϊκή Λειτουργία & Μείωση Κόπωσης</h3><p>Υψηλής ποιότητας Μαγνήσιο που συμβάλλει στη μείωση της κούρασης, στη φυσιολογική λειτουργία των μυών και στη λειτουργία του νευρικού συστήματος (βάσει Κανονισμού 432/2012).</p>`,
            science: `<h3>Νευρομυϊκή Ρύθμιση</h3>
                <ul>
                    <li><strong>Magnesium (Citrate/Oxide):</strong> Ρυθμιστής των υποδοχέων NMDA και της νευρομυϊκής διεγερσιμότητας. Συμπαράγοντας σε πάνω από 300 ενζυμικές αντιδράσεις (ATP).</li>
                </ul>`,
            bibliography: `<p>EFSA Journal 2010;8(10):1807 | Regulation (EU) 432/2012.</p>`
        }
    },
    {
        name: 'NUTRI MX JOINT',
        image: 'images/joint.jpg',
        description: {
            consumer: `<h3>Υποστήριξη Συνδετικού Ιστού</h3><p>Συνδυασμός Γλυκοζαμίνης, Χονδροϊτίνης, MSM και Κολλαγόνου ΙΙ. Σχεδιασμένο για την υποστήριξη της φυσιολογικής λειτουργίας των αρθρώσεων και του συνδετικού ιστού.</p>`,
            science: `<h3>Δομικά Συστατικά Χόνδρου</h3>
                <ul>
                    <li><strong>Glucosamine/Chondroitin:</strong> Δομικοί πρόδρομοι των γλυκοζαμινογλυκανών (GAGs).</li>
                    <li><strong>MSM:</strong> Οργανική πηγή θείου, απαραίτητη για τη σύνθεση κολλαγόνου.</li>
                    <li><strong>Collagen Type II:</strong> Κύρια πρωτεΐνη του αρθρικού χόνδρου.</li>
                </ul>`,
            bibliography: `<p>Kislingh (2019). Collagen in joint health. | Daskalou E (2016). MSM sulfur donation.</p>`
        }
    },
    {
        name: 'NUTRI MX A-Z',
        image: 'images/az.jpg',
        description: {
            consumer: `<h3>Πλήρης Τόνωση & Ενέργεια</h3><p>Πολυβιταμίνη AZ για την κάλυψη των καθημερινών αναγκών σε βιταμίνες και μέταλλα. Συμβάλλει στη μείωση της κόπωσης, στην ενίσχυση του ανοσοποιητικού και στην πνευματική απόδοση.</p>`,
            science: `<h3>Μεταβολική Ομοιόσταση</h3>
                <ul>
                    <li><strong>Complete Micronutrient Profile:</strong> Διασφαλίζει τη λειτουργία των ενζυμικών συστημάτων που εμπλέκονται στον ενεργειακό μεταβολισμό και την αντιοξειδωτική άμυνα.</li>
                </ul>`,
            bibliography: `<p>Regulation (EU) 432/2012 for vitamins & minerals claims.</p>`
        }
    },
    {
        name: 'NUTRI MX OMEGA 3',
        image: 'images/omega3.jpg',
        description: {
            consumer: `<h3>Καρδιακή Λειτουργία & Αντιφλεγμονώδης Προστασία</h3><p>Υψηλής καθαρότητας Ωμέγα-3 λιπαρά οξέα (EPA/DHA). Συμβάλλουν στη φυσιολογική λειτουργία της καρδιάς και στη διατήρηση της φυσιολογικής όρασης και εγκεφαλικής λειτουργίας.</p>`,
            science: `<h3>Lipid Mediators</h3>
                <ul>
                    <li><strong>EPA/DHA:</strong> Ενσωμάτωση στις κυτταρικές μεμβράνες και παραγωγή resolvins/protectins που συμβάλλουν στον τερματισμό της φλεγμονώδους διαδικασίας.</li>
                </ul>`,
            bibliography: `<p>Calder PC (2013). Omega-3 and inflammation. | Mozaffarian D (2011). Cardiovascular effects.</p>`
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
