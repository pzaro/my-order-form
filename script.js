// ============================================================
// ZARKOLIA HEALTH - THE COMPLETE SCIENTIFIC COMPENDIUM
// ============================================================

// --- 1. ΠΛΗΡΗΣ ΒΑΣΗ ΔΕΔΟΜΕΝΩΝ ΠΕΛΑΤΩΝ (80+ ΕΓΓΡΑΦΕΣ) ---
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

// --- 2. ΛΙΣΤΑ ΠΡΟΪΟΝΤΩΝ & ΤΙΜΩΝ ---
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

// --- 3. HELPERS ΓΙΑ MODALS ---
function hcpTable(rows) {
    return `<table class="hcp-table"><thead><tr><th>Συστατικό</th><th>Όφελος & Μηχανισμός Δράσης</th></tr></thead><tbody>${rows.map(r => `<tr><td><strong>${r.ing}</strong></td><td>${r.moa}</td></tr>`).join("")}</tbody></table>`;
}

function consumerBlock({ title, bullets, howTo, cautions }) {
    return `<h3>${title}</h3><ul>${bullets.map(b => `<li>${b}</li>`).join("")}</ul>${howTo ? `<h4>Τρόπος χρήσης</h4><p>${howTo}</p>` : ""}${cautions ? `<h4>Προφυλάξεις</h4><p>${cautions}</p>` : ""}`;
}

function biblioList(items) {
    return `<h3>Βιβλιογραφική Τεκμηρίωση</h3><ol>${items.map(i => `<li>${i}</li>`).join("")}</ol>`;
}

// --- 4. ΠΛΗΡΕΙΣ ΕΠΙΣΤΗΜΟΝΙΚΕΣ ΠΕΡΙΓΡΑΦΕΣ ΠΡΟΪΟΝΤΩΝ ---
const productDetails = [
   {
    name: 'Z-DermAspis',
    description: {
        consumer: consumerBlock({
            title: "Ολοκληρωμένη Υγιεινή Επιφάνειας & Βιολογική Ασπίδα Προστασίας",
            bullets: [
                "**Άμεση Αντισηπτική Δράση:** Υψηλή περιεκτικότητα σε αιθυλική αλκοόλη (70% v/v) για τον αποτελεσματικό καθαρισμό των χεριών και του δέρματος.",
                "**Φυσική Απωθητική Τεχνολογία:** Με PMD (εκχύλισμα Eucalyptus Citriodora), το μοναδικό φυτικό συστατικό εγκεκριμένο από διεθνείς οργανισμούς για την προστασία από έντομα.",
                "**Outdoor Specialized:** Ιδανικό για αθλητές, περιπατητές και παιδιά σε εξωτερικούς χώρους, προσφέροντας διπλή θωράκιση χωρίς να κολλάει.",
                "**Φιλικό προς το Δέρμα:** Σχεδιασμένο για συχνή χρήση χωρίς να ξηραίνει την επιδερμίδα."
            ],
            howTo: "Ψεκάστε ομοιόμορφα στις εκτεθειμένες περιοχές του δέρματος και στα χέρια. Απλώστε καλά και αφήστε να στεγνώσει φυσικά. Επαναλάβετε ανάλογα με την ένταση της δραστηριότητας.",
            cautions: "Εύφλεκτο προϊόν. Αποφύγετε την επαφή με τα μάτια και τους βλεννογόνους. Να μην εφαρμόζεται σε ανοιχτές πληγές ή ερεθισμένο δέρμα. Μακριά από παιδιά."
        }),
        science: `
            <h3>Φαρμακολογική Προσέγγιση & Μηχανισμός Δράσης (MoA)</h3>
            <p><strong>Στόχος:</strong> Ταυτόχρονη εξουδετέρωση μικροβιακού φορτίου και οσφρητικός αποκλεισμός παρασίτων/διαβιβαστών.</p>
            ${hcpTable([
                {
                    ing: "Ethanol (Alcohol Denat. 70% v/v)",
                    moa: "Προκαλεί άμεση μετουσίωση των πρωτεϊνών του κυτταροπλάσματος και λύση της λιπιδικής μεμβράνης των παθογόνων. Η συγκέντρωση 70% θεωρείται η βέλτιστη για τη μέγιστη μικροβιοκτόνο δράση."
                },
                {
                    ing: "PMD (p-menthane-3,8-diol)",
                    moa: "Λειτουργεί ως ανταγωνιστής στις πρωτεΐνες δέσμευσης οσμών (OBPs) των εντόμων. Αποκλείει τους χημειοαισθητήρες τους, εμποδίζοντας τον εντοπισμό του ανθρώπινου γαλακτικού οξέος και του CO2 (σήματα ξενιστή)."
                }
            ])}
        `,
        bibliography: biblioList([
            "Carroll SP, Loye J. (2006). PMD botanical mosquito repellent efficacy. J. Am. Mosq. Control Assoc.",
            "CDC Guidelines (2024). Active ingredients for use against skin-borne diseases.",
            "EPA (Environmental Protection Agency). Registration and efficacy data for p-menthane-3,8-diol.",
            "World Health Organization (WHO). Alcohol-based handrub formulations for clinical antisepsis."
        ])
    }
},
    {
        name: 'Zplast Total Repair 50ml',
        description: {
            consumer: consumerBlock({
                title: "Ολική Ανάπλαση & Κλινική Επούλωση Ιστών",
                bullets: [
                    "**Εξειδικευμένη Αποκατάσταση:** Σχεδιασμένη για δερματικές λύσεις συνέχειας, μετεγχειρητικές τομές, θερμικά/ηλιακά εγκαύματα και ουλές.",
                    "**Ταχεία Σύγκλειση:** Επιταχύνει τον πολλαπλασιασμό των κυττάρων και τη δημιουργία νέου, υγιούς ιστού.",
                    "**Πρόληψη Σημαδιών:** Διασφαλίζει τη μέγιστη ελαστικότητα της επιδερμίδας, ελαχιστοποιώντας τον κίνδυνο σχηματισμού χηλοειδών (ουλών).",
                    "**Προστατευτικό Φράγμα:** Δημιουργεί ένα βιοσυμβατό φιλμ που προστατεύει την πληγή από μολύνσεις και εξωτερικούς ερεθισμούς."
                ],
                howTo: "Εφαρμόστε επαρκή ποσότητα στην πάσχουσα περιοχή 2-3 φορές ημερησίως μέχρι την πλήρη ίαση. Σε μετεγχειρητικές ουλές, συνεχίστε τη χρήση για 3 μήνες.",
                cautions: "Μόνο για εξωτερική χρήση. Κατάλληλο για χρήση σε διαβητικό πόδι και ευαίσθητες περιοχές. Να μη χρησιμοποιείται σε μολυσμένα τραύματα χωρίς ιατρική συμβουλή."
            }),
            science: `
                <h3>Φαρμακολογικό Rationale & Κλινικά Οφέλη</h3>
                <p><strong>Θεραπευτικός Στόχος:</strong> Ενεργοποίηση των ενδογενών μηχανισμών ανάπλασης και ρύθμιση του εξωκυττάριου ικριώματος (ECM).</p>
                ${hcpTable([
                    {
                        ing: "Centella Asiatica (Triterpenoids)",
                        moa: "Ενεργοποιεί το μονοπάτι σηματοδότησης SMAD, διεγείροντας άμεσα τη βιοσύνθεση Κολλαγόνου Τύπου Ι. Αυξάνει τον εφελκυσμό (tensile strength) του νέου ιστού και προάγει την αγγειογένεση."
                    },
                    {
                        ing: "Hyaluronic Acid (Multi-weight)",
                        moa: "Διασφαλίζει το 'Moist Wound Healing' περιβάλλον. Λειτουργεί ως δομικό ικρίωμα (scaffold) για τη μετανάστευση των ινοβλαστών και ρυθμίζει την υδροδυναμική της εξωκυττάριας ουσίας (ECM)."
                    },
                    {
                        ing: "Hypericum Perforatum (Hyperforin)",
                        moa: "Διεγείρει τον πολλαπλασιασμό των κερατινοκυττάρων και παρουσιάζει ισχυρή αντιφλεγμονώδη δράση, μειώνοντας το τοπικό οίδημα και τον πόνο κατά τη φάση της φλεγμονής."
                    },
                    {
                        ing: "Sea Buckthorn Oil (Ω-7)",
                        moa: "Πλούσιο σε παλμιτολεϊκό οξύ (Ω-7), το οποίο αποτελεί βασικό δομικό συστατικό των κυτταρικών μεμβρανών. Αναπληρώνει τα ελλείποντα λιπίδια και επιταχύνει την επιθηλιοποίηση."
                    },
                    {
                        ing: "Chios Mastic Oil",
                        moa: "Επάγει την έκφραση του TGF-β (Transforming Growth Factor beta), ο οποίος είναι ο κύριος ρυθμιστής της αναδόμησης του δέρματος και της σύνθεσης ελαστίνης."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Bylka W, et al. (2013). Centella asiatica in cosmetology. Postepy Dermatol Alergol. PubMed: 24386321.",
                "Winter GD (1962). Formation of the scab and the rate of epithelization of superficial wounds. Nature.",
                "Wohlrab J (2018). Role of Hyaluronic Acid in modern wound management. Journal of Dermatology.",
                "Öztürk N, et al. (2007). Hypericum perforatum and its role in skin wound healing efficacy.",
                "Paraschos S, et al. (2012). Chios Mastic Gum: A review of its biological and pharmacological activities.",
                "Upadhyay NK, et al. (2009). Sea buckthorn (Hippophae rhamnoides L.) oil facilitates wound healing in rats."
            ])
        }
    },
    {
        name: 'Zplast Total Repair 100ml',
        description: {
            consumer: consumerBlock({
                title: "Ολική Ανάπλαση & Κλινική Επούλωση Ιστών (Professional Size)",
                bullets: [
                    "**Επαγγελματική Φροντίδα:** Συσκευασία 100ml σχεδιασμένη για μεγάλες επιφάνειες δέρματος και παρατεταμένη χρήση.",
                    "**Κλινική Αποκατάσταση:** Εξειδικευμένη για μετεγχειρητικές τομές, εκτεταμένα θερμικά/ηλιακά εγκαύματα και ουλές.",
                    "**Ταχεία Επιθηλιοποίηση:** Επιταχύνει δραστικά τον πολλαπλασιασμό των κυττάρων και τη δημιουργία νέου, υγιούς ιστού.",
                    "**Πλήρης Αναδόμηση:** Αποκαθιστά την ακεραιότητα του δερματικού φραγμού και προστατεύει την πληγή από εξωτερικές μολύνσεις."
                ],
                howTo: "Εφαρμόστε επαρκή ποσότητα στην πάσχουσα περιοχή 2-3 φορές ημερησίως μέχρι την πλήρη ίαση. Ιδανικό για χρήση σε μεγάλες περιοχές ή χρόνια δερματικά προβλήματα.",
                cautions: "Μόνο για εξωτερική χρήση. Δερματολογικά ελεγμένο για χρήση σε ευαίσθητο δέρμα, διαβητικό πόδι και μετεγχειρητικές ουλές."
            }),
            science: `
                <h3>Φαρμακολογικό Rationale & Μοριακή Ανάλυση</h3>
                <p><strong>Θεραπευτικός Στόχος:</strong> Βελτιστοποίηση της αναγεννητικής ικανότητας του δέρματος και δομική σταθεροποίηση του εξωκυττάριου ικριώματος (ECM).</p>
                ${hcpTable([
                    {
                        ing: "Centella Asiatica (Triterpenoids)",
                        moa: "Ενεργοποιεί το μονοπάτι σηματοδότησης SMAD, διεγείροντας άμεσα τη βιοσύνθεση Κολλαγόνου Τύπου Ι & III. Αυξάνει τον εφελκυσμό (tensile strength) του νέου ιστού και προάγει την αγγειογένεση."
                    },
                    {
                        ing: "Hyaluronic Acid (Multi-weight)",
                        moa: "Διασφαλίζει το 'Moist Wound Healing' περιβάλλον. Λειτουργεί ως scaffold (ικρίωμα) για τη μετανάστευση των ινοβλαστών και ρυθμίζει την υδροδυναμική ισορροπία της εξωκυττάριας ουσίας (ECM)."
                    },
                    {
                        ing: "Hypericum Perforatum (Hyperforin)",
                        moa: "Διεγείρει τον πολλαπλασιασμό των κερατινοκυττάρων και παρουσιάζει ισχυρή αντιφλεγμονώδη δράση, μειώνοντας το τοπικό οίδημα και τον πόνο κατά τη φάση της φλεγμονής."
                    },
                    {
                        ing: "Sea Buckthorn Oil (Ω-7)",
                        moa: "Πλούσιο σε παλμιτολεϊκό οξύ (Ω-7), δομικό συστατικό των κυτταρικών μεμβρανών. Αναπληρώνει τα ελλείποντα λιπίδια και επιταχύνει την επιθηλιοποίηση."
                    },
                    {
                        ing: "Chios Mastic Oil",
                        moa: "Επάγει την έκφραση του TGF-β (Transforming Growth Factor beta), ο οποίος είναι ο κύριος ρυθμιστής της αναδόμησης του δέρματος και της σύνθεσης ελαστίνης."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Bylka W, et al. (2013). Centella asiatica in cosmetology. Postepy Dermatol Alergol. PubMed: 24386321.",
                "Wohlrab J (2018). Role of Hyaluronic Acid in modern wound management. Journal of Dermatology.",
                "Öztürk N, et al. (2007). Hypericum perforatum and its role in skin wound healing efficacy.",
                "Upadhyay NK, et al. (2009). Sea buckthorn (Hippophae rhamnoides L.) oil facilitates wound healing in rats.",
                "Paraschos S, et al. (2012). Chios Mastic Gum: Biological and pharmacological activities review.",
                "Winter GD (1962). Formation of the scab and the rate of epithelization of superficial wounds. Nature."
            ])
        }
    },
{
        name: 'Bruise Off Bite Out & Pain Free cream',
        description: {
            consumer: consumerBlock({
                title: "Άμεση Αποκατάσταση, Αποσυμφόρηση & Αναλγησία",
                bullets: [
                    "**Τριπλή Δράση:** Εξειδικευμένη σύνθεση για την ταχεία απορρόφηση εκχυμώσεων (μελανιές), τη μείωση του οιδήματος (πρήξιμο) και την ανακούφιση από μυϊκούς πόνους.",
                    "**Τεχνολογία Ταχείας Διείσδυσης:** Η υψηλή περιεκτικότητα σε Ουρία μαλακώνει την επιδερμίδα, επιτρέποντας στα δραστικά συστατικά να δράσουν άμεσα στο σημείο του τραυματισμού.",
                    "**Ανακουφιστικό Μασάζ:** Ιδανικό για χρήση μετά από αθλητικές κακώσεις, διαστρέμματα ή αισθητικές επεμβάσεις (ενέσιμα) για την πρόληψη και αντιμετώπιση μωλώπων.",
                    "**Άμεση Καταπράυνση:** Προσφέρει γρήγορη ανακούφιση από τον κνησμό και τον ερεθισμό που προκαλούν τα τσιμπήματα εντόμων."
                ],
                howTo: "Εφαρμόστε στην πάσχουσα περιοχή 3-4 φορές ημερησίως, κάνοντας ελαφρύ μασάζ μέχρι την πλήρη απορρόφηση. Μην ξεπλένετε την περιοχή.",
                cautions: "Περιέχει Άρνικα. Να μην εφαρμόζεται σε ανοιχτές πληγές, βλεννογόνους ή κοντά στα μάτια. Σε περίπτωση κύησης ή θηλασμού, συμβουλευτείτε τον ιατρό σας."
            }),
            science: `
                <h3>Φαρμακολογική Ανάλυση & Μοριακή Δράση</h3>
                <p><strong>Κλινικές Ενδείξεις:</strong> Μετατραυματικές εκχυμώσεις, μετεπεμβατικά οιδήματα, μυαλγίες, τσιμπήματα υμενόπτερων, τοπική φλεγμονή.</p>
                
                ${hcpTable([
                    {
                        ing: "Urea (Ουρία)",
                        moa: "<strong>Penetration Enhancer:</strong> Διασπά τους δεσμούς υδρογόνου των πρωτεϊνών της κερατίνης (keratolytic action). Αυξάνει τη διαδερμική βιοδιαθεσιμότητα των βοτανικών δραστικών, επιτρέποντας τη δράση τους σε βαθύτερα υποδόρια στρώματα."
                    },
                    {
                        ing: "Arnica Montana (Helenalin)",
                        moa: "<strong>Αναστολή NF-κB:</strong> Η ελεναλίνη παρεμβαίνει στον μεταγραφικό παράγοντα Nuclear Factor-kappa B, καταστέλλοντας την έκφραση προ-φλεγμονωδών κυτταροκινών και ενζύμων (COX-2, iNOS), περιορίζοντας έτσι τη δημιουργία αιματώματος."
                    },
                    {
                        ing: "Carvacrol (Origanum Vulgare)",
                        moa: "<strong>TRPV1 Agonist:</strong> Προκαλεί ελεγχόμενη τοπική υπεραιμία (αγγειοδιαστολή). Η αυξημένη αιμάτωση επιταχύνει τη μεταβολική απομάκρυνση των προϊόντων της φλεγμονής και την απορρόφηση του οιδήματος."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Wohlrab J. (2018). The Role of Urea in Dermatological Therapy. Dermatologic Therapy.",
                "Lyss G, et al. (1998). Helenalin, an anti-inflammatory sesquiterpene lactone from Arnica, selectively inhibits transcription factor NF-kappaB. Biological Chemistry.",
                "Klaas CA, et al. (2002). Studies on the anti-inflammatory activity of phytopharmaceuticals prepared from Arnica flowers. Planta Medica.",
                "Suntres ZE. (2011). Role of Oregano Oil and Carvacrol in Health and Disease. Critical Reviews in Food Science and Nutrition.",
                "European Medicines Agency (EMA). Assessment report on Arnica montana L., flos."
            ])
        }
    },
{
        name: 'Z-boost 30 caps',
        description: {
            consumer: consumerBlock({
                title: "Ολοκληρωμένη Θωράκιση Ανοσοποιητικού & Κυτταρική Προστασία",
                bullets: [
                    "**Στοχευμένη Άμυνα:** Εξειδικευμένη σύνθεση για την ενίσχυση του ανοσοποιητικού συστήματος έναντι ιογενών και βακτηριακών λοιμώξεων.",
                    "**Αντιοξειδωτική Υπεροχή:** Με NAC και Ψευδάργυρο για την προστασία των κυττάρων από το οξειδωτικό στρες και την κυτταρική κόπωση.",
                    "**Φυσική Αντιφλεγμονώδης Δράση:** Περιέχει Ginger (Τζίντζερ) που συμβάλλει στη διαχείριση της φλεγμονώδους απόκρισης του οργανισμού.",
                    "**Τόνωση & Ζωτικότητα:** Ιδανικό για περιόδους έντονης σωματικής καταπόνησης, αλλαγής εποχών ή ανάρρωσης."
                ],
                howTo: "Λαμβάνετε 1 κάψουλα ημερησίως, κατά προτίμηση μετά το πρωινό γεύμα με ένα ποτήρι νερό.",
                cautions: "Συμπλήρωμα διατροφής. Να μην υπερβαίνεται η συνιστώμενη ημερήσια δόση. Δεν υποκαθιστά μια ισορροπημένη δίαιτα. Συμβουλευτείτε τον ιατρό σας σε περίπτωση κύησης ή λήψης φαρμακευτικής αγωγής."
            }),
            science: `
                <h3>Ανοσοφαρμακολογική Προσέγγιση & Κλινικό Όφελος</h3>
                <p><strong>Θεραπευτικός Στόχος:</strong> Βελτιστοποίηση της έμφυτης και επίκτητης ανοσολογικής απόκρισης και ενίσχυση του ενδογενούς αντιοξειδωτικού ικριώματος.</p>
                ${hcpTable([
                    {
                        ing: "Zinc & Selenium (Ψευδάργυρος & Σελήνιο)",
                        moa: "<strong>Ανοσορρύθμιση:</strong> Απαραίτητα για τη διαφοροποίηση των Τ-λεμφοκυττάρων και τη λειτουργία της θυμουλίνης. Ο Ψευδάργυρος αναστέλλει τον πολλαπλασιασμό των ιών μέσω παρεμβολής στην RNA-εξαρτώμενη RNA πολυμεράση."
                    },
                    {
                        ing: "Ginger (Zingiber officinale - Gingerols)",
                        moa: "<strong>Dual Pathway Inhibition:</strong> Οι τζιντζερόλες αναστέλλουν ταυτόχρονα τα ένζυμα 5-LOX (λιποξυγενάση) και COX (κυκλοοξυγενάση), μειώνοντας τη βιοσύνθεση προ-φλεγμονωδών λευκοτριενίων και προσταγλανδινών."
                    },
                    {
                        ing: "N-Acetylcysteine (NAC)",
                        moa: "<strong>GSH Precursor & Mucolytic:</strong> Λειτουργεί ως άμεσος πρόδρομος της L-κυστεΐνης για τη σύνθεση της γλουταθειόνης (GSH). Παρουσιάζει βλεννολυτική δράση διασπώντας τους δισουλφιδικούς δεσμούς των βλεννοπρωτεϊνών στο αναπνευστικό."
                    },
                    {
                        ing: "CoQ10 (Συνένζυμο Q10)",
                        moa: "<strong>Bioenergetic Support:</strong> Κεντρικός μεταφορέας ηλεκτρονίων στη μιτοχονδριακή αναπνευστική αλυσίδα. Διασφαλίζει την παραγωγή ATP στα ανοσοκύτταρα, τα οποία έχουν υψηλές ενεργειακές απαιτήσεις κατά την οξεία φάση λοίμωξης."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Hemilä H. (2017). Zinc intake and the common cold: a meta-analysis. Open Forum Infectious Diseases.",
                "Grzanna R, et al. (2005). Ginger—An Herbal Medicinal Product with Broad Anti-Inflammatory Actions. Journal of Medicinal Food.",
                "Prasad AS. (2008). Zinc in Human Health: Effect of Zinc on Immune Cells. Molecular Medicine.",
                "Šalamon S, et al. (2019). Medical Uses of N-Acetylcysteine: From Molecular Mechanisms to Clinical Applications. ACS Chemical Neuroscience.",
                "Saini R. (2011). Coenzyme Q10: The essential nutrient. Journal of Pharmacy and Bioallied Sciences.",
                "EFSA Panel on Dietetic Products, Nutrition and Allergies (NDA). Scientific Opinion on the substantiation of health claims related to Zinc and function of the immune system."
            ])
        }
    },
{
        name: 'NUTRI MX PROBIOTIC PREMIUM',
        description: {
            consumer: consumerBlock({
                title: "Προηγμένη Φόρμουλα 18 Στελεχών για την Εντερική Μικροχλωρίδα",
                bullets: [
                    "**Μέγιστη Πολυμορφία:** Περιέχει 18 διαφορετικά στελέχη φιλικών βακτηρίων για την πλήρη κάλυψη του εντερικού σωλήνα.",
                    "**Υψηλή Συγκέντρωση:** 10 δισεκατομμύρια ζώντα κύτταρα (CFU) ανά κάψουλα, διασφαλίζοντας τον επαρκή αποικισμό του εντέρου.",
                    "**Πεπτική & Ανοσολογική Υποστήριξη:** Συμβάλλει στην ομαλή πέψη, τη μείωση του τυμπανισμού και την ενίσχυση της φυσικής άμυνας του οργανισμού.",
                    "**Απαραίτητο με την Αντιβίωση:** Ιδανικό για την πρόληψη της διάρροιας που σχετίζεται με τη λήψη αντιβιοτικών και την ταχεία αποκατάσταση της χλωρίδας."
                ],
                howTo: "Λαμβάνετε 1 κάψουλα ημερησίως, κατά προτίμηση το πρωί ή 2 ώρες μετά τη λήψη αντιβίωσης. Συνοδεύεται από ένα ποτήρι νερό σε θερμοκρασία δωματίου.",
                cautions: "Συμπλήρωμα διατροφής. Σε περιπτώσεις σοβαρής ανοσοκαταστολής ή πρόσφατης χειρουργικής επέμβασης στο γαστρεντερικό, συμβουλευτείτε τον θεράποντα ιατρό σας."
            }),
            science: `
                <h3>Μικροβιακή Ομοιόσταση & Φαρμακολογικό Rationale</h3>
                <p><strong>Κλινικές Ενδείξεις:</strong> Δυσβίωση, σύνδρομο ευερέθιστου εντέρου (IBS), πρόληψη AAD (Antibiotic-Associated Diarrhea), υποστήριξη ανοσοποιητικού.</p>
                
                
                
                ${hcpTable([
                    {
                        ing: "18 Probiotic Strains (Multi-strain Complex)",
                        moa: "<strong>Competitive Exclusion:</strong> Τα στελέχη (Lactobacillus, Bifidobacterium κ.ά.) καταλαμβάνουν τις θέσεις πρόσδεσης στο εντερικό επιθήλιο, εμποδίζοντας τον αποικισμό από παθογόνα. Ρυθμίζουν το pH του αυλού, καθιστώντας το περιβάλλον αφιλόξενο για επιβλαβή βακτήρια."
                    },
                    {
                        ing: "Short-Chain Fatty Acids (SCFA) Production",
                        moa: "<strong>Epithelial Integrity:</strong> Τα προβιοτικά στελέχη ζυμώνουν τις φυτικές ίνες παράγοντας SCFA (κυρίως βουτυρικό οξύ). Το βουτυρικό αποτελεί την κύρια πηγή ενέργειας για τα κολονοκύτταρα, ενισχύει τις στενές συνδέσεις (tight junctions) και μειώνει την εντερική διαπερατότητα."
                    },
                    {
                        ing: "Tregs Induction & Immunomodulation",
                        moa: "<strong>Ανοσορρύθμιση:</strong> Η αλληλεπίδραση των προβιοτικών με τα κύτταρα Peyer’s patches επάγει τη διαφοροποίηση των ρυθμιστικών Τ-κυττάρων (Tregs). Αυτό οδηγεί σε παραγωγή IL-10 (αντιφλεγμονώδης κυτταροκίνη), μειώνοντας τη συστηματική και τοπική φλεγμονή."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Lee JY, et al. (2022). Microbiota-derived lactate promotes immune homeostasis and barrier function. Science.",
                "Karamanolis GP, et al. (2019). The clinical role of probiotics in gastrointestinal disorders. Hellenic Journal of Gastroenterology.",
                "Hill C, et al. (2014). Expert consensus document: The International Scientific Association for Probiotics and Prebiotics (ISAPP) consensus statement on the scope and appropriate use of the term probiotic. Nature Reviews Gastroenterology & Hepatology.",
                "Markowiak P & Śliżewska K. (2017). Effects of Probiotics, Prebiotics, and Synbiotics on Human Health. Nutrients.",
                "O'Callaghan A & van Sinderen D. (2016). Bifidobacteria and Their Role as Members of the Human Gut Microbiota. Frontiers in Microbiology.",
                "EFSA Panel on Dietetic Products, Nutrition and Allergies (NDA). Guidance on the scientific requirements for health claims related to gut and immune function."
            ])
        }
    },
    {
        name: 'NUTRI MX JOINT',
        description: {
            consumer: consumerBlock({
                title: "Ολοκληρωμένη Φόρμουλα Δομικής Υποστήριξης Αρθρώσεων",
                bullets: [
                    "**Στοχευμένη Θρέψη Χόνδρου:** Συνδυάζει τα βασικά δομικά συστατικά (Γλυκοζαμίνη, Χονδροϊτίνη) για τη διατήρηση της ακεραιότητας των αρθρώσεων.",
                    "**Βελτίωση Κινητικότητας:** Συμβάλλει στη μείωση της δυσκαμψίας και στην ομαλή λειτουργία των αρθρώσεων υπό καταπόνηση.",
                    "**Προστασία & Ανάπλαση:** Το MSM και το Κολλαγόνο Τύπου ΙΙ ενισχύουν τη σταθερότητα του συνδετικού ιστού και των τενόντων.",
                    "**Ιδανικό για Αθλητές & Ηλικιωμένους:** Απαραίτητο για άτομα με έντονη σωματική δραστηριότητα ή εκφυλιστικές αλλοιώσεις (οστεοαρθρίτιδα)."
                ],
                howTo: "Λαμβάνετε 1-2 δισκία ημερησίως, κατά προτίμηση μαζί με τα γεύματα. Προτείνεται η λήψη για διάστημα τουλάχιστον 3 μηνών για τη μεγιστοποίηση του αποτελέσματος.",
                cautions: "Συμπλήρωμα διατροφής. Περιέχει συστατικά προερχόμενα από οστρακοειδή· να αποφεύγεται σε περιπτώσεις σχετικής αλλεργίας. Συμβουλευτείτε τον ιατρό σας εάν λαμβάνετε αντιπηκτική αγωγή (π.χ. βαρφαρίνη)."
            }),
            science: `
                <h3>Βιοχημεία του Χόνδρου & Φαρμακολογικό Rationale</h3>
                <p><strong>Θεραπευτικός Στόχος:</strong> Μείωση του ρυθμού αποδόμησης του χόνδρου (chondroprotection) και ρύθμιση της ενδοαρθρικής φλεγμονώδους απόκρισης.</p>
                ${hcpTable([
                    {
                        ing: "Glucosamine & Chondroitin Sulfate",
                        moa: "<strong>GAG Precursors:</strong> Λειτουργούν ως υποστρώματα για τη βιοσύνθεση των γλυκοζαμινογλυκανών και των πρωτεογλυκανών (όπως η αγρεκάνη). Η Χονδροϊτίνη αναστέλλει τα ένζυμα ελαστάση και υαλουρονιδάση, προστατεύοντας το αρθρικό υγρό."
                    },
                    {
                        ing: "MSM (Methylsulfonylmethane)",
                        moa: "<strong>Sulfur Donor:</strong> Παρέχει οργανικό θείο απαραίτητο για το σχηματισμό δισουλφιδικών δεσμών στις ίνες κολλαγόνου. Παρουσιάζει αντιοξειδωτική δράση μειώνοντας την παραγωγή ελευθέρων ριζών (ROS) στα χονδροκύτταρα."
                    },
                    {
                        ing: "Native Collagen Type II",
                        moa: "<strong>Oral Tolerance:</strong> Δρα μέσω του μηχανισμού της «στοματικής ανοχής». Αλληλεπιδρά με τα κύτταρα των πλακών Peyer στο έντερο, επάγοντας ρυθμιστικά Τ-κύτταρα (Tregs) που μεταναστεύουν στην άρθρωση και αναστέλλουν την αυτοάνοση αποδόμηση του κολλαγόνου."
                    },
                    {
                        ing: "Manganese (Μαγγάνιο)",
                        moa: "<strong>Enzymatic Cofactor:</strong> Απαραίτητος συμπαράγοντας για το ένζυμο γλυκοζυλοτρανσφεράση, το οποίο είναι κλειδί για το σχηματισμό των πολυσακχαριδικών αλυσίδων του χόνδρου."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Hochberg MC, et al. (2016). Combined chondroitin sulfate and glucosamine for painful knee osteoarthritis. Annals of the Rheumatic Diseases.",
                "Lugo JP, et al. (2013). Undenatured type II collagen (UC-II®) for joint support: a randomized, double-blind, placebo-controlled study in healthy volunteers. J Int Soc Sports Nutr.",
                "Butawan M, et al. (2017). Methylsulfonylmethane: Applications and Safety of a Novel Dietary Supplement. Nutrients.",
                "Bishnoi M, et al. (2016). Chondroitin sulphate: a focus on osteoarthritis. Glycoconjugate Journal.",
                "EFSA Panel on Dietetic Products, Nutrition and Allergies (NDA). Scientific Opinion on the substantiation of health claims related to glucosamine and maintenance of normal joints.",
                "Henrotin Y, et al. (2014). Is there any scientific evidence for the use of glucosamine in the management of osteoarthritis? Arthritis Research & Therapy."
            ])
        }
    },
    
    {
        name: 'Zplast Cream 50ml',
        description: {
            consumer: consumerBlock({
                title: "Ολική Ανάπλαση & Κλινική Επούλωση Ιστών",
                bullets: [
                    "**Εξειδικευμένη Αποκατάσταση:** Ιδανική για δερματικές λύσεις συνέχειας, μετεγχειρητικές τομές, θερμικά/ηλιακά εγκαύματα και ουλές.",
                    "**Ταχεία Σύγκλειση:** Επιταχύνει τον πολλαπλασιασμό των κυττάρων και τη δημιουργία νέου, υγιούς δερματικού ιστού.",
                    "**Πρόληψη Σημαδιών:** Διασφαλίζει τη μέγιστη ελαστικότητα της επιδερμίδας, ελαχιστοποιώντας την πιθανότητα σχηματισμού χηλοειδών.",
                    "**Προστατευτικό Φράγμα:** Δημιουργεί ένα βιοσυμβατό φιλμ που προστατεύει την περιοχή από εξωγενείς μολύνσεις και ερεθισμούς."
                ],
                howTo: "Εφαρμόστε επαρκή ποσότητα στην πάσχουσα περιοχή 2-3 φορές ημερησίως μέχρι την πλήρη αποκατάσταση. Σε περιπτώσεις ουλών, συνιστάται η χρήση για τουλάχιστον 8-12 εβδομάδες.",
                cautions: "Μόνο για εξωτερική χρήση. Κατάλληλο για χρήση σε ευαίσθητο δέρμα και περιοχές που απαιτούν υψηλή αναπλαστική ικανότητα."
            }),
            science: `
                <h3>Φαρμακολογικό Rationale & Μοριακή Ανάλυση</h3>
                <p><strong>Θεραπευτικός Στόχος:</strong> Ενεργοποίηση των ενδογενών μηχανισμών ανάπλασης και δομική ρύθμιση της εξωκυττάριας ουσίας (ECM).</p>
                ${hcpTable([
                    {
                        ing: "Centella Asiatica (Triterpenoids)",
                        moa: "<strong>SMAD Signaling Activation:</strong> Τα τριτερπενοειδή (ασιατικοσίδη) διεγείρουν τη βιοσύνθεση Κολλαγόνου Τύπου Ι και III. Αυξάνουν την αντοχή του ιστού στον εφελκυσμό (tensile strength) και προάγουν την αγγειογένεση στην περιοχή του τραύματος."
                    },
                    {
                        ing: "Hyaluronic Acid (Multi-weight)",
                        moa: "<strong>ECM Scaffold Technology:</strong> Ρυθμίζει την υδροδυναμική ισορροπία της εξωκυττάριας ουσίας. Λειτουργεί ως δομικό ικρίωμα για τη μετανάστευση των ινοβλαστών, διασφαλίζοντας το απαραίτητο υγρό περιβάλλον για την επούλωση (moist wound healing)."
                    },
                    {
                        ing: "Hypericum Perforatum (Hyperforin)",
                        moa: "<strong>Keratinocyte Proliferation:</strong> Η υπερφορίνη διεγείρει τον πολλαπλασιασμό των κερατινοκυττάρων. Παρουσιάζει ισχυρή αντιφλεγμονώδη δράση, μειώνοντας το τοπικό οίδημα και τη δυσφορία κατά την παραγωγική φάση της επούλωσης."
                    },
                    {
                        ing: "Chios Mastic Oil",
                        moa: "<strong>TGF-β Induction:</strong> Επάγει την έκφραση του μεταμορφωτικού αυξητικού παράγοντα βήτα (TGF-β), ο οποίος είναι ο κύριος ενορχηστρωτής της αναδόμησης του δερματικού ιστού και της σύνθεσης ελαστίνης."
                    },
                    {
                        ing: "Sea Buckthorn Oil (Ω-7)",
                        moa: "<strong>Barrier Restoration:</strong> Πλούσιο σε παλμιτολεϊκό οξύ (Ω-7), το οποίο είναι δομικό συστατικό των κυτταρικών μεμβρανών του δέρματος. Αναπληρώνει τα ελλείποντα λιπίδια και βελτιώνει την ελαστικότητα του νέου επιθηλίου."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Bylka W, et al. (2013). Centella asiatica in cosmetology. Postepy Dermatol Alergol. PubMed: 24386321.",
                "Wohlrab J (2018). Role of Hyaluronic Acid in modern wound management. Journal of Dermatology & Dermatologic Surgery.",
                "Öztürk N, et al. (2007). Effects of Hypericum perforatum L. extract on dermal fibroblasts and wound healing.",
                "Paraschos S, et al. (2012). Chios Mastic Gum: Biological and pharmacological activities review.",
                "Upadhyay NK, et al. (2009). Sea buckthorn (Hippophae rhamnoides L.) oil facilitates wound healing in rats.",
                "Winter GD (1962). Formation of the scab and the rate of epithelization of superficial wounds. Nature."
            ])
        }
    },
    
  {
        name: 'Zplast Cream 100ml',
        description: {
            consumer: consumerBlock({
                title: "Ολική Ανάπλαση & Κλινική Επούλωση Ιστών (Professional Size)",
                bullets: [
                    "**Επαγγελματική Φροντίδα:** Συσκευασία 100ml σχεδιασμένη για μεγάλες επιφάνειες δέρματος και παρατεταμένη κλινική χρήση.",
                    "**Κλινική Αποκατάσταση:** Εξειδικευμένη για εκτεταμένες δερματικές βλάβες, μετεγχειρητικές τομές, ηλιακά/θερμικά εγκαύματα και χρόνια ξηρότητα.",
                    "**Ταχεία Επιθηλιοποίηση:** Επιταχύνει τον πολλαπλασιασμό των κυττάρων, μειώνοντας σημαντικά τον χρόνο σύγκλεισης των τραυμάτων.",
                    "**Αποκατάσταση Φραγμού:** Αναδομεί το λιπιδικό στρώμα της επιδερμίδας και προστατεύει από δευτερογενείς μολύνσεις."
                ],
                howTo: "Εφαρμόστε επαρκή ποσότητα στην πάσχουσα περιοχή 2-3 φορές ημερησίως. Για τη διαχείριση εκτεταμένων ουλών ή μετεγχειρητικών τομών, η εφαρμογή πρέπει να είναι συστηματική για τουλάχιστον 3 μήνες.",
                cautions: "Μόνο για εξωτερική χρήση. Δερματολογικά ελεγμένο. Ιδανικό για χρήση σε μεγάλες περιοχές σώματος και σε περιπτώσεις που απαιτείται υψηλός ρυθμός ιστικής ανάπλασης."
            }),
            science: `
                <h3>Φαρμακολογικό Rationale & Μηχανισμοί Ιστικής Αναδόμησης</h3>
                <p><strong>Θεραπευτικός Στόχος:</strong> Ταχεία επιθηλιοποίηση μέσω SMAD signaling και δομική υποστήριξη του ικριώματος της εξωκυττάριας ουσίας (ECM).</p>
                ${hcpTable([
                    {
                        ing: "Centella Asiatica (Triterpenoids)",
                        moa: "<strong>SMAD Signaling Pathway:</strong> Τα τριτερπενοειδή (Asiaticoside, Madecassoside) επάγουν τη φωσφορυλίωση των SMAD2/3, διεγείροντας τη βιοσύνθεση Κολλαγόνου Τύπου Ι & III. Αυξάνουν την αντοχή του ιστού στον εφελκυσμό (tensile strength) και προάγουν τη μετανάστευση των ινοβλαστών."
                    },
                    {
                        ing: "Hyaluronic Acid (High & Low MW)",
                        moa: "<strong>ECM Scaffold Technology:</strong> Το υαλουρονικό οξύ ρυθμίζει την υδροδυναμική και την ωσμωτική ισορροπία της ECM. Λειτουργεί ως φυσικό 'scaffold' για τη μετανάστευση και τον πολλαπλασιασμό των κυττάρων, διασφαλίζοντας το απαραίτητο υγρό περιβάλλον (moist healing) που αποτρέπει τη νέκρωση των ιστών."
                    },
                    {
                        ing: "Hypericum Perforatum (Hyperforin)",
                        moa: "<strong>Keratinocyte Stimulation:</strong> Η υπερφορίνη δρα ως ισχυρός παράγοντας διαφοροποίησης των κερατινοκυττάρων. Παρουσιάζει κλινικά αποδεδειγμένη αντιφλεγμονώδη και αντιμικροβιακή δράση, μειώνοντας την απελευθέρωση προ-φλεγμονωδών κυτταροκινών (IL-6, TNF-α)."
                    },
                    {
                        ing: "Chios Mastic Oil",
                        moa: "<strong>TGF-β Activation:</strong> Ενεργοποιεί τον μεταμορφωτικό αυξητικό παράγοντα βήτα (TGF-β), ρυθμίζοντας τη σύνθεση ελαστίνης και την αναδιοργάνωση των ινών κολλαγόνου, αποτρέποντας έτσι τον σχηματισμό χηλοειδών και υπερτροφικών ουλών."
                    },
                    {
                        ing: "Sea Buckthorn Oil (Ω-7)",
                        moa: "<strong>Cell Membrane Repair:</strong> Η υψηλή συγκέντρωση σε παλμιτολεϊκό οξύ (Ω-7) παρέχει τα απαραίτητα λιπίδια για την αποκατάσταση των κυτταρικών μεμβρανών που έχουν υποστεί βλάβη, ενισχύοντας τη συνοχή του δερματικού φραγμού."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Bylka W, et al. (2013). Centella asiatica in cosmetology. Postepy Dermatologii i Alergologii. PubMed: 24386321.",
                "Wohlrab J. (2018). Role of Hyaluronic Acid in modern wound management. Journal of Dermatology & Dermatologic Surgery.",
                "Öztürk N, et al. (2007). Effects of Hypericum perforatum L. extract on dermal fibroblasts and wound healing efficacy.",
                "Upadhyay NK, et al. (2009). Sea buckthorn (Hippophae rhamnoides L.) oil facilitates wound healing by regulating oxidative stress and inflammatory response.",
                "Paraschos S, et al. (2012). Chios Mastic Gum: A review of its biological and pharmacological activities.",
                "Schultz GS, et al. (2011). Interactions between extracellular matrix and growth factors in wound healing. Wound Repair and Regeneration."
            ])
        }
    },
    {
        name: 'Bruise Off Bite Out & Pain Free cream 100ml',
        description: {
            consumer: consumerBlock({
                title: "Άμεση Αποσυμφόρηση & Ανακούφιση (Professional Size)",
                bullets: [
                    "**Professional/Family Size:** Συσκευασία 100ml σχεδιασμένη για εκτεταμένη χρήση σε αθλητικές κακώσεις, μετεπεμβατική αποκατάσταση και οικογενειακή φροντίδα.",
                    "**Τεχνολογία Ταχείας Απορρόφησης:** Χάρη στην υψηλή περιεκτικότητα σε Ουρία, τα δραστικά συστατικά διεισδύουν άμεσα στα βαθύτερα στρώματα της επιδερμίδας.",
                    "**Κλινική Δράση:** Εξαφανίζει μελανιές (εκχυμώσεις), μειώνει το οίδημα (πρήξιμο) και ανακουφίζει από τον πόνο τσιμπημάτων και μυϊκών καταπονήσεων.",
                    "**Μη Λιπαρή Υφή:** Απορροφάται πλήρως χωρίς να αφήνει κατάλοιπα, επιτρέποντας την άμεση επαφή με τα ρούχα."
                ],
                howTo: "Εφαρμόστε στην πάσχουσα περιοχή 3-4 φορές ημερησίως με ήπιο μασάζ. Για βέλτιστα αποτελέσματα σε μελανιές, ξεκινήστε την εφαρμογή αμέσως μετά τον τραυματισμό.",
                cautions: "Περιέχει Άρνικα. Μην εφαρμόζεται σε ανοιχτές πληγές, βλεννογόνους ή περιοχές με δερματική λύση συνέχειας. Μακριά από παιδιά."
            }),
            science: `
                <h3>Φαρμακολογικό Rationale & Μοριακή Στόχευση</h3>
                <p><strong>Κλινικές Ενδείξεις:</strong> Μετατραυματικές εκχυμώσεις, μετεπεμβατικά οιδήματα (π.χ. μετά από ενέσιμα fillers/botox), διαστρέμματα, τσιμπήματα υμενόπτερων.</p>
                ${hcpTable([
                    {
                        ing: "Urea (Ουρία)",
                        moa: "<strong>Penetration Enhancer:</strong> Διασπά τους δεσμούς υδρογόνου της κερατίνης, αυξάνοντας τη διαπερατότητα της κεράτινης στοιβάδας. Δρα ως φορέας (carrier) που πολλαπλασιάζει τη βιοδιαθεσιμότητα των βοτανικών δραστικών στο υποδόριο αιμάτωμα."
                    },
                    {
                        ing: "Arnica Montana (Helenalin)",
                        moa: "<strong>Αναστολή NF-κB:</strong> Η ελεναλίνη παρεμβαίνει στον μεταγραφικό παράγοντα Nuclear Factor-kappa B, καταστέλλοντας την έκφραση προ-φλεγμονωδών γονιδίων (COX-2, TNF-α, IL-1β). Μειώνει δραστικά τη μεσολαβούμενη από φλεγμονή εξαγγείωση υγρών."
                    },
                    {
                        ing: "Carvacrol (Origanum Vulgare Oil)",
                        moa: "<strong>TRPV1 Modulation:</strong> Αλληλεπιδρά με τους υποδοχείς πόνου TRPV1, προκαλώντας ελεγχόμενη τοπική υπεραιμία. Η αύξηση της μικροκυκλοφορίας επιταχύνει τη μεταβολική απομάκρυνση των προϊόντων της λύσης των ερυθροκυττάρων (χολερυθρίνη, χολοπράσινη)."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Wohlrab J. (2018). The Role of Urea in Dermatological Therapy. Dermatologic Therapy. PubMed: 30112773.",
                "Lyss G, et al. (1998). Helenalin, an anti-inflammatory sesquiterpene lactone from Arnica, selectively inhibits transcription factor NF-kappaB. Biological Chemistry.",
                "Klaas CA, et al. (2002). Studies on the anti-inflammatory activity of phytopharmaceuticals from Arnica flowers. Planta Medica.",
                "Suntres ZE. (2011). Role of Oregano Oil and Carvacrol in Health and Disease. Critical Reviews in Food Science and Nutrition.",
                "EMA Assessment Report (2014). Arnica montana L., flos - reduction of post-traumatic edema and ecchymosis."
            ])
        }
    },
    {
        name: 'Z-boost 12 caps',
        description: {
            consumer: consumerBlock({
                title: "Άμεση Θωράκιση & Τόνωση Ανοσοποιητικού (Acute Support)",
                bullets: [
                    "**Συσκευασία Ταχείας Δράσης:** Ιδανική για την άμεση υποστήριξη του οργανισμού με την εμφάνιση των πρώτων συμπτωμάτων ιώσεων ή κρυολογήματος.",
                    "**Στοχευμένη Σύνθεση:** Συνδυάζει Ψευδάργυρο, Ginger (Τζίντζερ) και NAC για τη μέγιστη προστασία του ανώτερου αναπνευστικού συστήματος.",
                    "**Κυτταρική Ενέργεια:** Περιέχει Συνένζυμο Q10 για την άμεση τόνωση και τη μείωση του αισθήματος κόπωσης που συνοδεύει τις εποχικές λοιμώξεις.",
                    "**Travel Friendly:** Πρακτική συσκευασία 12 καψουλών, ιδανική για ταξίδια ή για τη διατήρηση της άμυνας σε περιόδους έντονης σωματικής πίεσης."
                ],
                howTo: "Λαμβάνετε 1 κάψουλα ημερησίως μετά το γεύμα. Σε περιόδους έντονης καταπόνησης, η λήψη μπορεί να ξεκινήσει αμέσως για την ταχύτερη ανάκαμψη του οργανισμού.",
                cautions: "Συμπλήρωμα διατροφής. Να μην υπερβαίνεται η συνιστώμενη δόση. Δεν αντικαθιστά την ισορροπημένη διατροφή. Φυλάσσεται μακριά από παιδιά σε δροσερό και ξηρό μέρος."
            }),
            science: `
                <h3>Ανοσοφαρμακολογικό Rationale & Κλινικά Οφέλη</h3>
                <p><strong>Θεραπευτικός Στόχος:</strong> Ταχεία ενεργοποίηση των μηχανισμών μη-ειδικής ανοσίας και περιορισμός του οξειδωτικού φορτίου των ιστών.</p>
                ${hcpTable([
                    {
                        ing: "Zinc (Ψευδάργυρος - Bioavailable Form)",
                        moa: "<strong>Viral Replication Inhibition:</strong> Ο ελεύθερος ιοντικός ψευδάργυρος αναστέλλει την RNA-εξαρτώμενη RNA πολυμεράση των ιών. Ρυθμίζει τη δραστηριότητα της θυμουλίνης, προάγοντας την ωρίμανση και διαφοροποίηση των Τ-λεμφοκυττάρων (CD4+/CD8+)."
                    },
                    {
                        ing: "Gingerols (Zingiber officinale)",
                        moa: "<strong>Cytokine Regulation:</strong> Αναστέλλουν τη δράση των ενζύμων COX-1, COX-2 και 5-LOX. Αυτή η τριπλή αναστολή μειώνει τα επίπεδα προ-φλεγμονωδών προσταγλανδινών και λευκοτριενίων, προσφέροντας φυσική αποσυμφορητική και αναλγητική δράση."
                    },
                    {
                        ing: "N-Acetylcysteine (NAC)",
                        moa: "<strong>GSH & Mucolytic Action:</strong> Λειτουργεί ως το περιοριστικό υπόστρωμα για τη σύνθεση της Γλουταθειόνης (GSH). Ταυτόχρονα, διασπά τους δισουλφιδικούς δεσμούς των βλεννοπρωτεϊνών, διευκολύνοντας την κάθαρση των αεραγωγών."
                    },
                    {
                        ing: "Selenium & CoQ10",
                        moa: "<strong>Redox Homeostasis:</strong> Το Σελήνιο είναι απαραίτητο δομικό στοιχείο της υπεροξειδάσης της γλουταθειόνης (GPx). Το CoQ10 σταθεροποιεί τη μιτοχονδριακή μεμβράνη των ανοσοκυττάρων, διασφαλίζοντας την ενεργειακή τους επάρκεια (ATP) κατά την ανοσολογική απόκριση."
                    }
                ])}
            `,
            bibliography: biblioList([
                "Hemilä H. (2017). Zinc intake and the common cold: a meta-analysis. Open Forum Infectious Diseases. PubMed: 28405611.",
                "Grzanna R, et al. (2005). Ginger—An Herbal Medicinal Product with Broad Anti-Inflammatory Actions. Journal of Medicinal Food.",
                "Prasad AS. (2008). Zinc in Human Health: Effect of Zinc on Immune Cells. Molecular Medicine.",
                "Šalamon S, et al. (2019). Medical Uses of N-Acetylcysteine: From Molecular Mechanisms to Clinical Applications. ACS Chemical Neuroscience.",
                "EFSA Panel on Dietetic Products (NDA). Scientific Opinion on the substantiation of health claims related to Selenium and function of the immune system.",
                "Read SA, et al. (2019). The Role of Zinc in Antiviral Immunity. Advances in Nutrition."
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
    },
];

// --- 5. ΑΡΧΙΚΟΠΟΙΗΣΗ ΕΦΑΡΜΟΓΗΣ ---
document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector('#product-table tbody');
    if(tableBody) {
        products.forEach((p, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><strong>${p.name}</strong></td>
                <td>${p.price.toFixed(2)} €</td>
                <td><input type="number" class="quantity" id="qty-${index}" min="0" data-price="${p.price}" oninput="updateAll()" value="0"></td>
                <td><span id="gift-${index}" class="badge">0</span></td>
                <td id="effective-${index}">${p.price.toFixed(2)} €</td>
                <td id="total-${index}" style="font-weight:700;">0.00 €</td>`;
            tableBody.appendChild(row);
        });
    }

    const btnContainer = document.getElementById('productButtonsContainer');
    if(btnContainer) {
        products.forEach((p, index) => {
            const btn = document.createElement('button');
            btn.className = 'product-btn'; btn.textContent = p.name;
            btn.onclick = () => showProductDetails(index);
            btnContainer.appendChild(btn);
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

// --- 6. ΛΟΓΙΚΗ ΥΠΟΛΟΓΙΣΜΩΝ ---
function calculateGifts(q){
    if(q < 9) return 0;
    if(q < 18) return 1;
    if(q < 24) return 3;
    if(q < 48) return 6;
    return Math.floor(q / 48) * 15;
}

function updateAll(){
    let net = 0;
    const rows = document.querySelectorAll('#product-table tbody tr');
    rows.forEach((row, index) => {
        const qInput = row.querySelector(".quantity"), q = parseInt(qInput.value) || 0, p = parseFloat(qInput.dataset.price);
        const gifts = calculateGifts(q), lineTotal = q * p;
        const giftEl = document.getElementById(`gift-${index}`);
        const effEl = document.getElementById(`effective-${index}`);
        const totalEl = document.getElementById(`total-${index}`);
        if(giftEl) giftEl.textContent = gifts;
        if(effEl) effEl.textContent = (q > 0 ? (lineTotal / (q + gifts)).toFixed(2) : p.toFixed(2)) + " €";
        if(totalEl) totalEl.textContent = lineTotal.toFixed(2) + " €";
        net += lineTotal;
    });
    const vat = net * 0.24;
    document.getElementById("net-value").textContent = net.toFixed(2) + " €";
    document.getElementById("vat-value").textContent = vat.toFixed(2) + " €";
    document.getElementById("final-total").textContent = (net + vat).toFixed(2) + " €";
}

// --- 7. ΔΙΑΧΕΙΡΙΣΗ MODALS ---
function showProductDetails(index){
    const p = productDetails.find(i => i.name === products[index].name);
    const tableInput = document.getElementById(`qty-${index}`);
    const modal = document.getElementById('productModal');
    if(!modal) return;
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header"><h2>${products[index].name}</h2><span class="close-button" onclick="closeProductModal()">&times;</span></div>
            <div class="modal-body">
                <div class="modal-tabs">
                    <button class="tab-button active" onclick="openTab(event, 'Consumer')">Για το Κοινό</button>
                    <button class="tab-button" onclick="openTab(event, 'Science')">Επιστημονικά</button>
                    <button class="tab-button" onclick="openTab(event, 'Biblio')">Βιβλιογραφία</button>
                </div>
                <div id="Consumer" class="tab-content" style="display:block">${p ? p.description.consumer : "—"}</div>
                <div id="Science" class="tab-content">${p ? p.description.science : "—"}</div>
                <div id="Biblio" class="tab-content">${p ? p.description.bibliography : "—"}</div>
            </div>
            <div style="margin-top:20px; text-align:center;">
                <label>Ποσότητα:</label> <input type="number" id="modalQty" value="${tableInput.value}" style="width:70px; padding:10px;">
                <button class="btn-primary" onclick="updateFromModal(${index})">Ενημέρωση Φόρμας</button>
            </div>
        </div>`;
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

// --- 8. ΕΞΑΓΩΓΗ ΠΑΡΑΓΓΕΛΙΑΣ ---
function sendEmailViaClient() {
    const payment = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "Δεν επιλέχθηκε";
    const name = document.getElementById("eponimia").value;
    const subject = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ ZARKOLIA HEALTH / ${new Date().toLocaleDateString('el-GR')} / ${name}`;
    let body = `Αντίγραφο Παραγγελίας - Το παρόν δεν αποτελεί παραστατικό αγορών\n\nΠΕΛΑΤΗΣ: ${name}\n\nΠΡΟΪΟΝΤΑ:\n`;
    document.querySelectorAll("#product-table tbody tr").forEach(r => {
        const q = parseInt(r.querySelector('.quantity').value) || 0;
        if(q > 0) body += `* ${r.cells[0].textContent} | Τεμ: ${q} | Δώρα: ${r.querySelector('.badge').textContent}\n`;
    });
    body += `\nΣΥΝΟΛΟ: ${document.getElementById("final-total").textContent}\n\nΠΛΗΡΩΜΗ: ${payment}\nIBAN: GR89 0172 2520 0052 5201 6160 277`;
    window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function previewAndSaveAsTXT(){
    const name = document.getElementById("eponimia").value;
    let content = `ΠΑΡΑΓΓΕΛΙΑ ZARKOLIA HEALTH\nΠΕΛΑΤΗΣ: ${name}\nΣΥΝΟΛΟ: ${document.getElementById("final-total").textContent}\nIBAN: GR89 0172 2520 0052 5201 6160 277`;
    document.getElementById('previewContent').textContent = content;
    document.getElementById('previewModal').style.display='block';
    document.getElementById('saveTxtButton').onclick = () => {
        const blob = new Blob([content],{type:'text/plain;charset=utf-8'});
        const link = document.createElement('a'); link.href = URL.createObjectURL(blob);
        link.download = `Order_${name}.txt`; link.click();
    };
}

function clearForm(){ if(confirm("Καθαρισμός;")) { document.getElementById("orderForm").reset(); updateAll(); } }
