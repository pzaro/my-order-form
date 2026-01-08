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
    "802244502": { eponimia: "ΣΦ ΕΛΕΝΗΣ ΜΑΡΙΑΣ ΝΙΚΟΛΑΙΔΟΥ-ΧΡΥΣΟΣΤΟΜΟΥ ΤΖΙΝΤΖΑΡΑ & ΣΙΑ Ο", doy: "Ζ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "", email: "skroutzplus@outlook.com" },
    "802581242": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ Η ΔΗΜΟΚΑ Μ ΜΑΡΓΟΥΤΑ Ο", doy: "ΑΜΠΕΛΟΚΗΠΩΝ", mobile: "", phone: "", email: "idpharmacy254@gmail.com" },
    "802644097": { eponimia: "ΣΥΣΤΕΓΑΖΟΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΕΥΑ ΚΟΤΙΔΟΥ ΠΛΑΤΗΣ ΒΑΣΙΛΕΙΟΣ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΕΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2384022908", email: "evakotidou@gmail.com" },
    "802667861": { eponimia: "ΦΑΡΜΑΚΕΙΟ Α ΟΙΚΟΝΟΜΟΠΟΥΛΟΣ Ι ΠΑΠΑΔΟΠΟΥΛΟΣ Ο", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", phone: "", email: "ioannis.a.papadop@gmail.com" },
    "802741555": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΤΣΩΝΗ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6932461323", phone: "2551038473", email: "tsonispharmacy@gmail.com" },
    "802744858": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΓΚΑΪΝΤΑΤΖΗΣ ΒΑΣΙΛΕΙΟΣ ΓΚΑΪΝΤΑΤΖΗ ΕΥΔΟΞΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6980289717", phone: "2551024463", email: "gkaintatzi.pharmacy@gmail.com" },
    "996853821": { eponimia: "ΚΟΙΝΩΝΙΑ ΚΛΗΡΟΝΟΜΩΝ ΔΟΥΛΚΕΡΙΔΗ ΧΑΡΑΛΑΜΠΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381088845", email: "farmakeio.skydra@gmail.com" },
    "997687603": { eponimia: "ΤΣΙΤΣΙΟΣ ΑΘΑΝΑΣΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6978762108", phone: "2531022785", email: "pharmthanos@gmail.com" },
    "997688685": { eponimia: "ΣΦ ΚΑΛΟΥΔΗ ΚΩΝΣΤΑΝΤΙNIA & ΖΟΥΜΑ ΣΤΑΜΑΤΙΑ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΕΙΑ", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "", phone: "", email: "stam1213zoum@gmail.com" },
    "997957423": { eponimia: "ΗΛΙΑΣ Θ ΚΑΤΡΗΣ Ε", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", phone: "", email: "iliaskatrispharmacy@gmail.com" },
    "997961412": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΠΑΝΑΓΙΩΤΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ ΦΡΑΓΓΙΔΟΥ ΝΙΚΟΛΕΤΑ Ο", doy: "ΚΙΛΚΙΣ", mobile: "6986962826", phone: "2341023924", email: "farmakeiofraggidou@gmail.com" },
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

// --- 4. ΠΛΗΡΕΙΣ ΕΠΙΣΤΗΜΟΝΙΚΕΣ ΠΕΡΙΓΡΑΦΕΣ ΠΡΟΪΟΝΤΩΝ (HCP LEVEL) ---
const productDetails = [
    {
        name: 'Z-DermAspis',
        description: {
            consumer: consumerBlock({
                title: "Υγιεινή & Φυσική Απωθητική Ασπίδα",
                bullets: [
                    "**Άμεση Αντισηψία:** 70% v/v αιθυλική αλκοόλη για εξουδετέρωση παθογόνων.",
                    "**Βιολογική Προστασία:** Με PMD (Citriodora), το μοναδικό φυτικό συστατικό εγκεκριμένο από CDC/EPA.",
                    "**Outdoor Specialized:** Ιδανικό για outdoor δραστηριότητες, δεν κολλάει και προσφέρει μακρά προστασία."
                ],
                howTo: "Ψεκάστε ομοιόμορφα και αφήστε να στεγνώσει φυσικά.",
                cautions: "Εύφλεκτο. Αποφύγετε την επαφή με τα μάτια."
            }),
            science: `<h3>Φαρμακολογικό Rationale (MoA)</h3>${hcpTable([
                { ing: "Ethanol (70%)", moa: "Μετουσίωση πρωτεϊνών και λύση λιπιδικής μεμβράνης παθογόνων μικροοργανισμών." },
                { ing: "PMD (p-menthane-3,8-diol)", moa: "Ανταγωνιστής OBPs (Odorant Binding Proteins). Αποκλείει τη χημειοαισθητική ικανότητα των εντόμων να εντοπίζουν τον ξενιστή (CO2/γαλακτικό οξύ)." }
            ])}`,
            bibliography: biblioList(["Carroll SP (2006). PMD mosquito repellent efficacy. J. Am. Mosq. Control Assoc.", "CDC Guidelines (2024). Active ingredients against vector-borne diseases."])
        }
    },
    {
        name: 'ZplastCream 40gr', // Καλύπτει τις συσκευασίες 50ml και 100ml
        description: {
            consumer: consumerBlock({
                title: "Κλινική Επούλωση & Κυτταρική Ανάπλαση",
                bullets: [
                    "**Εξειδικευμένη Αποκατάσταση:** Σχεδιασμένη για πληγές, μετεγχειρητικές τομές και εγκαύματα.",
                    "**Ταχεία Επιθηλιοποίηση:** Επιταχύνει τον πολλαπλασιασμό των κυττάρων και τη σύγκλειση τραυμάτων.",
                    "**Πρόληψη Σημαδιών:** Διασφαλίζει ελαστικότητα και ελαχιστοποιεί τον κίνδυνο ουλών."
                ],
                howTo: "Εφαρμογή 2-3 φορές ημερησίως μέχρι την πλήρη ίαση.",
                cautions: "Μόνο εξωτερική χρήση. Δερματολογικά ελεγμένο."
            }),
            science: `<h3>Μηχανισμός Ιστικής Αναδόμησης</h3>

[Image of skin wound healing process]
${hcpTable([
                { ing: "Centella Asiatica (Triterpenoids)", moa: "<strong>SMAD Signaling Activation:</strong> Διεγείρει τη βιοσύνθεση Κολλαγόνου Τύπου Ι & III. Αυξάνει τον εφελκυσμό του νέου ιστού." },
                { ing: "Hyaluronic Acid", moa: "<strong>ECM Scaffold Technology:</strong> Ρυθμίζει την υδροδυναμική της ECM και παρέχει το ικρίωμα για τη μετανάστευση των ινοβλαστών." },
                { ing: "Hypericum Perforatum", moa: "<strong>Keratinocyte Stimulation:</strong> Η υπερφορίνη διεγείρει τη διαφοροποίηση των κερατινοκυττάρων και προσφέρει αντιφλεγμονώδη δράση." }
            ])}`,
            bibliography: biblioList(["Bylka W, et al. (2013). Centella asiatica in dermatology. PubMed.", "Wohlrab J (2018). HA in modern wound management. J. Dermatol."])
        }
    },
    {
        name: 'Zplast Total Repair 50ml', // Καλύπτει και τα 100ml
        description: {
            consumer: consumerBlock({
                title: "Ολική Αναδόμηση Φραγμού & Εντατική Επούλωση",
                bullets: [
                    "**Lipid Replenishment:** Με Ω-7 και Ω-5 λιπίδια για την αποκατάσταση της δερματικής ακεραιότητας.",
                    "**Anti-Scar Technology:** Ειδικά σχεδιασμένο για την αποφυγή υπερτροφικών ουλών.",
                    "**Deep Repair:** Δρα στα βαθύτερα επίπεδα της επιδερμίδας για ολική επαναφορά."
                ],
                howTo: "Εφαρμόστε 2-3 φορές ημερησίως. Ιδανικό για μετεπεμβατική χρήση (laser, peeling).",
                cautions: "Κατάλληλο για διαβητικό πόδι και χρόνια έλκη."
            }),
            science: `<h3>Μοριακή Ανάλυση Total Repair</h3>${hcpTable([
                { ing: "Sea Buckthorn Oil (Ω-7)", moa: "<strong>Membrane Stabilizer:</strong> Ενσωματώνεται στα φωσφολιπίδια των κυττάρων, ενισχύοντας τη δομική συνοχή του νέου επιθηλίου." },
                { ing: "Chios Mastic Oil", moa: "<strong>TGF-β Induction:</strong> Ενεργοποιεί τον αυξητικό παράγοντα TGF-β, ο οποίος ρυθμίζει τη σύνθεση ελαστίνης." },
                { ing: "Hyaluronic Acid Multi-MW", moa: "<strong>Osmotic Regulation:</strong> Διασφαλίζει moist healing περιβάλλον και αποτρέπει τη νέκρωση των ιστών." }
            ])}`,
            bibliography: biblioList(["Upadhyay NK, et al. (2009). Sea buckthorn facilitates wound healing.", "Paraschos S, et al. (2012). Chios Mastic Gum biological activities."])
        }
    },
    {
        name: 'Bruise Off Bite Out & Pain Free cream', // Καλύπτει 50ml και 100ml
        description: {
            consumer: consumerBlock({
                title: "Αποσυμφόρηση & Αναλγητική Δράση",
                bullets: [
                    "**Άμεση Απορρόφηση:** Εξαφανίζει μελανιές (εκχυμώσεις) και οιδήματα γρήγορα.",
                    "**Penetration Technology:** Η Ουρία επιτρέπει στα δραστικά συστατικά να φτάσουν στο βάθος του μώλωπα.",
                    "**Καταπραϋντική Δράση:** Ιδανικό για τσιμπήματα εντόμων και μυϊκούς πόνους."
                ],
                howTo: "Επάλειψη με ήπιο μασάζ 3-4 φορές ημερησίως.",
                cautions: "Περιέχει Άρνικα. Μην εφαρμόζεται σε ανοιχτές πληγές."
            }),
            science: `<h3>Μοριακή Αντιφλεγμονώδης Στόχευση</h3>${hcpTable([
                { ing: "Urea (Ουρία)", moa: "<strong>Penetration Enhancer:</strong> Διασπά δεσμούς υδρογόνου κερατίνης, αυξάνοντας τη διαδερμική βιοδιαθεσιμότητα των βοτανικών δραστικών." },
                { ing: "Arnica Montana (Helenalin)", moa: "<strong>NF-κB Inhibition:</strong> Καταστέλλει την έκφραση προ-φλεγμονωδών κυτταροκινών (IL-1, TNF-α)." },
                { ing: "Carvacrol", moa: "<strong>TRPV1 Agonist:</strong> Προκαλεί ελεγχόμενη τοπική υπεραιμία για την ταχεία απομάκρυνση του οιδήματος." }
            ])}`,
            bibliography: biblioList(["Wohlrab J (2018). Urea in Dermatology.", "Lyss G, et al. (1998). Helenalin as anti-inflammatory tool."])
        }
    },
    {
        name: 'Z-boost 30 caps', // Καλύπτει και τα 12 caps
        description: {
            consumer: consumerBlock({
                title: "Ολοκληρωμένη Θωράκιση Ανοσοποιητικού",
                bullets: [
                    "**Στοχευμένη Άμυνα:** Ενισχύει τον οργανισμό έναντι ιώσεων και κρυολογήματος.",
                    "**Αντιοξειδωτική Υπεροχή:** Με NAC και Ψευδάργυρο για την εξουδετέρωση ελευθέρων ριζών.",
                    "**Ενεργειακή Τόνωση:** Περιέχει CoQ10 για τη μείωση της κόπωσης."
                ],
                howTo: "1 κάψουλα ημερησίως μετά το γεύμα.",
                cautions: "Συμπλήρωμα διατροφής. Συμβουλευτείτε ιατρό εάν λαμβάνετε φάρμακα."
            }),
            science: `<h3>Ανοσοφαρμακολογική Υποστήριξη</h3>${hcpTable([
                { ing: "Zinc (Ψευδάργυρος)", moa: "<strong>Viral Replication Inhibition:</strong> Αναστέλλει την RNA-εξαρτώμενη RNA πολυμεράση των ιών στο ρινικό επιθήλιο." },
                { ing: "N-Acetylcysteine (NAC)", moa: "<strong>GSH Precursor:</strong> Παρέχει το υπόστρωμα για τη σύνθεση Γλουταθειόνης. Παρουσιάζει βλεννολυτική δράση." },
                { ing: "Gingerols", moa: "<strong>Dual Path Inhibition:</strong> Αναστολή COX-2 και 5-LOX, μειώνοντας τις προ-φλεγμονώδεις προσταγλανδίνες." }
            ])}`,
            bibliography: biblioList(["Hemilä H (2017). Zinc and common cold meta-analysis.", "Grzanna R (2005). Ginger broad anti-inflammatory actions."])
        }
    },
    {
        name: 'Alveolair Sir',
        description: {
            consumer: consumerBlock({
                title: "Φυτική Προστασία & Καταπράυνση Αναπνευστικού",
                bullets: [
                    "**Άμεση Ανακούφιση:** Μαλακώνει τον λαιμό και καταπραΰνει τον ερεθισμένο βλεννογόνο.",
                    "**Φυσική Σύνθεση:** Με Θυμάρι, Αλθέα και Ευκάλυπτο για ολοκληρωμένη δράση.",
                    "**Αποχρεμπτική Δράση:** Βοηθά στην απομάκρυνση των εκκρίσεων και διευκολύνει την αναπνοή."
                ],
                howTo: "10ml, 2-3 φορές ημερησίως ή σύμφωνα με τις οδηγίες του ιατρού.",
                cautions: "Φυλάσσεται μακριά από παιδιά. Μετά το άνοιγμα διατηρείται στο ψυγείο."
            }),
            science: `<h3>Βλεννογονική Προστασία & Βρογχοδιαστολή</h3>${hcpTable([
                { ing: "Althaea officinalis (Root)", moa: "<strong>Mucilage Barrier:</strong> Οι πολυσακχαρίτες (βλέννες) σχηματίζουν ένα προστατευτικό βιο-φιλμ στο φαρυγγικό βλεννογόνο, μειώνοντας τον μηχανικό ερεθισμό." },
                { ing: "Thymus vulgaris (Thymol)", moa: "<strong>Bronchospasmolysis:</strong> Η θυμόλη δρα στους β-2 υποδοχείς των λείων μυϊκών ινών των βρόγχων, προσφέροντας σπασμολυτική και αντιμικροβιακή δράση." },
                { ing: "Eucalyptus Globulus", moa: "<strong>Secretolytic Action:</strong> Ενεργοποιεί το κροσσωτό επιθήλιο (mucociliary clearance), επιταχύνοντας την κάθαρση της βλέννας." }
            ])}`,
            bibliography: biblioList(["EMA/HMPC Monograph on Thymus vulgaris.", "Althaea officinalis: A review of its phytochemistry and pharmacology. Journal of Ethnopharmacology."])
        }
    },
    {
        name: 'NUTRI MX PROBIOTIC PREMIUM',
        description: {
            consumer: consumerBlock({
                title: "Προηγμένη Ισορροπία Μικροβιώματος (18 Στελέχη)",
                bullets: [
                    "**Μέγιστο Φάσμα:** 18 διαφορετικά στελέχη για πλήρη κάλυψη του εντερικού σωλήνα.",
                    "**Υψηλή Συγκέντρωση:** 10 δισεκατομμύρια CFU για εγγυημένο αποικισμό.",
                    "**Ανοσολογική Ενίσχυση:** Ρυθμίζει το 70% του ανοσοποιητικού συστήματος που εδράζεται στο έντερο."
                ],
                howTo: "1 κάψουλα ημερησίως, κατά προτίμηση το πρωί ή 2 ώρες μετά από αντιβίωση.",
                cautions: "Συμπλήρωμα διατροφής. Μην υπερβαίνετε τη δόση."
            }),
            science: `<h3>Μικροβιακή Ομοιόσταση & Ανοσορρύθμιση</h3>${hcpTable([
                { ing: "18 Probiotic Strains", moa: "<strong>Competitive Exclusion:</strong> Κατάληψη θέσεων πρόσδεσης και μείωση του pH του αυλού, εμποδίζοντας την ανάπτυξη παθογόνων." },
                { ing: "SCFA (Butyrate) Production", moa: "<strong>Epithelial Integrity:</strong> Παραγωγή βουτυρικού οξέος που αποτελεί την κύρια πηγή ενέργειας για τα κολονοκύτταρα και ενισχύει τα Tight Junctions." },
                { ing: "Tregs Induction", moa: "<strong>Immune Tolerance:</strong> Αλληλεπίδραση με τα Peyer’s patches για την επαγωγή ρυθμιστικών Τ-κυττάρων (Tregs) και παραγωγή IL-10." }
            ])}`,
            bibliography: biblioList(["Lee JY, et al. (2022). Homeostasis & Probiotics. Science.", "Karamanolis GP (2019). Clinical role of probiotics."])
        }
    },
    {
        name: 'Hydralia Face cream 50ml',
        description: {
            consumer: consumerBlock({
                title: "Βαθιά Ενυδάτωση & Plumping Effect",
                bullets: ["**LMW Υαλουρονικό:** Για εσωτερικό 'γέμισμα' ρυτίδων.", "**Jojoba Oil:** Μιμείται το φυσικό σμήγμα.", "**Αναζωογόνηση:** Επαναφέρει τη φυσική λάμψη."],
                howTo: "Πρωί και βράδυ σε καθαρό πρόσωπο.",
                cautions: "Δερματολογικά ελεγμένη."
            }),
            science: `<h3>Μοριακή Υδροδυναμική</h3>${hcpTable([
                { ing: "Hyaluronic Acid (LMW)", moa: "Διεισδύει κάτω από την κεράτινη, δεσμεύοντας νερό στον χόριο ιστό (Plumping Effect)." },
                { ing: "Jojoba Oil", moa: "Biomimetic Lipids: Ενισχύει τη συνοχή των κερατινοκυττάρων και μειώνει το TEWL." }
            ])}`,
            bibliography: biblioList(["Bukhari SNA (2018). Hyaluronic acid investigation.", "Verdier-Sévrain S (2007). Skin hydration review."])
        }
    },
    {
        name: 'Revitacell Plus Face cream 50ml',
        description: {
            consumer: consumerBlock({
                title: "Επιγενετική Αντιγήρανση & Σύσφιξη",
                bullets: ["**Klotho Protein:** Ενεργοποιεί το 'γονίδιο νεότητας'.", "**Ω-5 Ροδιού:** Ισχυρή προστασία από φωτογήρανση.", "**Premium Αναδόμηση:** Με Μαστιχέλαιο Χίου."],
                howTo: "Βράδυ σε πρόσωπο και λαιμό.",
                cautions: "Ισχυρή αντιγηραντική δράση."
            }),
            science: `<h3>Επιγενετική & Remodeling</h3>${hcpTable([
                { ing: "Mastic Oil fractions", moa: "Επάγει την έκφραση Klotho στους ινοβλάστες, ενισχύοντας τη DNA επιδιόρθωση." },
                { ing: "Punicic Acid (Ω5)", moa: "MMP-1 Inhibition: Αναστέλλει τις μεταλλοπρωτεϊνάσεις που αποδομούν το κολλαγόνο." }
            ])}`,
            bibliography: biblioList(["Lall N, et al. (2020). Mastic gum on fibroblasts.", "Kuro-o M. (2009). Klotho and aging suppressor gene."])
        }
    },
    {
        name: 'Revitace Eyes cream Luce 30ml',
        description: {
            consumer: consumerBlock({
                title: "Φωτεινό Βλέμμα & Κατά των Μαύρων Κύκλων",
                bullets: ["**Luce Tech:** Αντανακλά το φως για ξεκούραστη όψη.", "**Αποσυμφόρηση:** Μειώνει σακούλες και μαύρους κύκλους.", "**Σύσφιξη:** Τονώνει το λεπτό δέρμα των βλεφάρων."],
                howTo: "Ταμποναριστά πρωί και βράδυ.",
                cautions: "Αποφύγετε την επαφή με τον επιπεφυκότα."
            }),
            science: `<h3>Περικογχική Αποκατάσταση</h3>${hcpTable([
                { ing: "Escin (A. Hippocastanum)", moa: "Venotonic: Αυξάνει την τονικότητα τριχοειδών, περιορίζοντας τη διαρροή υγρών (οίδημα)." },
                { ing: "Arnica Extract", moa: "Heme Degradation Support: Επιταχύνει την απορρόφηση των χρωστικών χολερυθρίνης." },
                { ing: "Peptides", moa: "Drainage Activation: Ενεργοποιεί τη λεμφική παροχέτευση της περιοχής." }
            ])}`,
            bibliography: biblioList(["Gallelli L. (2019). Escin review.", "Sirtori CR. (2001). Aescin pharmacology."])
        }
    },
    {
        name: 'NUTRI MX JOINT',
        description: {
            consumer: consumerBlock({
                title: "Δομική Υποστήριξη Αρθρώσεων & Χόνδρων",
                bullets: ["**Θρέψη Χόνδρου:** Γλυκοζαμίνη και Χονδροϊτίνη.", "**Ανάπλαση:** MSM και Κολλαγόνο Τύπου ΙΙ.", "**Κινητικότητα:** Μειώνει τη δυσκαμψία."],
                howTo: "1-2 δισκία ημερησίως.",
                cautions: "Αλλεργία σε οστρακοειδή."
            }),
            science: `<h3>Chondroprotection</h3>${hcpTable([
                { ing: "GAG Precursors", moa: "Υποστρώματα για τη βιοσύνθεση αγρεκάνης στον αρθρικό χόνδρο." },
                { ing: "Native Collagen II", moa: "Oral Tolerance Mechanism: Καταστέλλει την αυτοάνοση φλεγμονή στις αρθρώσεις." }
            ])}`,
            bibliography: biblioList(["Hochberg MC (2016). OA management.", "Lugo JP (2013). UC-II study."])
        }
    },
    {
        name: 'NUTRI MX A-Z',
        description: {
            consumer: consumerBlock({
                title: "Πλήρης Πολυβιταμίνη AZ",
                bullets: ["**24 Συστατικά:** Πλήρης κάλυψη καθημερινών αναγκών.", "**Ενέργεια:** Σύμπλεγμα Β για μεταβολισμό ATP.", "**Άμυνα:** C, D και Ψευδάργυρος."],
                howTo: "1 δισκίο μετά το πρωινό.",
                cautions: "Συμπλήρωμα διατροφής."
            }),
            science: `<h3>Μεταβολική Ομοιόσταση</h3>${hcpTable([
                { ing: "B-Complex", moa: "Co-enzymatic Activity: Απαραίτητες για τον κύκλο του Krebs και την παραγωγή ενέργειας." },
                { ing: "Vitamin C & Zinc", moa: "Immune Support: Ενίσχυση φαγοκυττάρωσης και σταθερότητα DNA." }
            ])}`,
            bibliography: biblioList(["Kennedy DO. (2016). B Vitamins and the Brain.", "EFSA Journal (2010). Vitamin C/Zinc claims."])
        }
    },
    {
        name: 'NUTRI MX OMEGA 3',
        description: {
            consumer: consumerBlock({
                title: "Ωμέγα-3 Υψηλής Καθαρότητας",
                bullets: ["**Καρδιά:** EPA/DHA για φυσιολογική λειτουργία.", "**Εγκέφαλος:** DHA για γνωσιακή υποστήριξη.", "**Όραση:** Διατήρηση υγείας αμφιβληστροειδούς."],
                howTo: "1-2 μαλακές κάψουλες ημερησίως.",
                cautions: "Προσοχή σε αλλεργία στο ψάρι."
            }),
            science: `<h3>Λιπιδική Βιολογία</h3>${hcpTable([
                { ing: "EPA", moa: "Anti-inflammatory: Ανταγωνιστής αραχιδονικού οξέος για τα ένζυμα COX/LOX." },
                { ing: "Resolvins (SPMs)", moa: "Resolution of Inflammation: Ενεργός τερματισμός της φλεγμονώδους απόκρισης." }
            ])}`,
            bibliography: biblioList(["Calder PC. (2013). Omega-3 and inflammation.", "Mozaffarian D (2011). Cardiovascular disease review."])
        }
    },
    {
        name: 'NUTRI MX MAGNESIUM 1 Τεμ',
        description: {
            consumer: consumerBlock({
                title: "Μαγνήσιο & Β6 (Κατά των Κραμπών)",
                bullets: ["**Μυϊκή Χαλάρωση:** Πρόληψη κραμπών και σπασμών.", "**Νευρικό Σύστημα:** Μείωση άγχους και βελτίωση ύπνου.", "**Ενέργεια:** Μείωση κόπωσης."],
                howTo: "1 δισκίο το βράδυ.",
                cautions: "Σε νεφρική ανεπάρκεια ρωτήστε ιατρό."
            }),
            science: `<h3>Νευρομυϊκή Φυσιολογία</h3>${hcpTable([
                { ing: "Magnesium", moa: "NMDA Antagonist: Λειτουργεί ως αναστολέας στον υποδοχέα NMDA, αποτρέποντας την υπερδιέγερση." },
                { ing: "Mg-ATP Complex", moa: "Απαραίτητος συμπαράγοντας για την ενεργό μορφή της μεταβολικής ενέργειας." }
            ])}`,
            bibliography: biblioList(["Prasad AS. (2008). Magnesium in Human Health.", "Pouteau E (2018). Mg + B6 for severe stress."])
        }
    },
    {
        name: 'Zarkolia Cosmetic pack',
        description: {
            consumer: consumerBlock({
                title: "Ολοκληρωμένο Πρωτόκολλο Αντιγήρανσης",
                bullets: ["**24h Routine:** Πλήρης φροντίδα (Hydralia, Revitacell, Eyes).", "**Συνέργεια:** Μέγιστο αποτέλεσμα με συνδυαστική χρήση.", "**Αναδόμηση:** Κάλυψη όλων των αναγκών του δέρματος."],
                howTo: "Πρωί: Hydralia & Eyes. Βράδυ: Revitacell & Eyes.",
                cautions: "Premium Scientific Gift Box."
            }),
            science: `<p>Συνεργιστικό μοντέλο που καλύπτει ταυτόχρονα την υδροδυναμική της ECM, την επιγενετική αναδόμηση και την τριχοειδική παροχέτευση.</p>`,
            bibliography: biblioList(["Integrated scientific references of Zarkolia series."])
        }
    }
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
                <label>Ποσότητα:</label> <input type="number" id="modalQty" value="${tableInput.value}" style="width:70px; padding:10px; border-radius:8px; border:1px solid #ccc;">
                <button class="btn-primary" style="padding:10px 25px; margin-left:10px; border-radius:8px; border:none; background:#059669; color:white; font-weight:bold; cursor:pointer;" onclick="updateFromModal(${index})">Ενημέρωση Φόρμας</button>
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
    const afm = document.getElementById("afm").value;
    if(!name) { alert("Εισάγετε Επωνυμία!"); return; }
    const subject = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ ZARKOLIA HEALTH / ${new Date().toLocaleDateString('el-GR')} / ${name}`;
    let body = `Αντίγραφο Παραγγελίας - Το παρόν δεν αποτελεί παραστατικό αγορών\n\nΠΕΛΑΤΗΣ: ${name}\nΑΦΜ: ${afm}\n\nΠΡΟΪΟΝΤΑ:\n`;
    document.querySelectorAll("#product-table tbody tr").forEach(r => {
        const q = parseInt(r.querySelector('.quantity').value) || 0;
        if(q > 0) body += `* ${r.cells[0].textContent} | Τεμ: ${q} | Δώρα: ${r.querySelector('.badge').textContent}\n`;
    });
    body += `\nΣΥΝΟΛΟ: ${document.getElementById("final-total").textContent}\n\nΠΛΗΡΩΜΗ: ${payment}\nΠΑΡΑΤΗΡΗΣΕΙΣ: ${document.getElementById("remarks").value}\n\nIBAN: GR89 0172 2520 0052 5201 6160 277`;
    window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function previewAndSaveAsTXT(){
    const name = document.getElementById("eponimia").value;
    if(!name) { alert("Εισάγετε Επωνυμία!"); return; }
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
