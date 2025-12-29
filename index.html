// ============================================================
// ZARKOLIA ORDER APP — ENRICHED PRODUCT INFO (Consumer + HCP)
// - Removed: Evidence grading + Safety/Notes column + bibliography tab content
// - Kept: Consumer + HCP mechanism/role content, modal tabs, all ordering logic
// ============================================================

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
  "800339648": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΖΙΟΥΤΑ ΓΕΩΡΓΙΑ ΧΡΙΣΤΙΑΝΑ ΚΑΙ ΣΙΑ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "", email: "zioutaxristiana@hotmail.gr" },
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
  "997961412": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΠΑΝΑΓΙΩΤΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ  ΦΡΑΓΓΙΔΟΥ ΝΙΚΟΛΕΤΑ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "", email: "farmakeiofraggidou@gmail.com" },
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

// ============================================================
// 3) HELPERS — render HCP mechanism table (no Evidence/Safety)
// ============================================================
function hcpTable(rows) {
  const head = `
    <table class="hcp-table">
      <thead>
        <tr>
          <th>Συστατικό</th>
          <th>Μηχανισμός / Ρόλος</th>
        </tr>
      </thead><tbody>`;
  const body = rows.map(r => `
      <tr>
        <td><strong>${r.ing}</strong>${r.inci ? `<div class="sub">${r.inci}</div>` : ""}</td>
        <td>${r.moa}</td>
      </tr>`).join("");
  return head + body + `</tbody></table>`;
}

function consumerBlock({ title, bullets, howTo, cautions }) {
  return `
    <h3>${title}</h3>
    <ul>${bullets.map(b => `<li>${b}</li>`).join("")}</ul>
    ${howTo ? `<h4>Τρόπος χρήσης</h4><p>${howTo}</p>` : ""}
    ${cautions ? `<h4>Προφυλάξεις</h4><p>${cautions}</p>` : ""}
    <div class="compliance-note">
      <strong>Σημείωση:</strong> Οι περιγραφές για το κοινό αφορούν καλλυντική/διατροφική χρήση και δεν υποκαθιστούν ιατρική συμβουλή.
    </div>
  `;
}

// ============================================================
// 4) PRODUCT DETAILS — Consumer + HCP MoA (no bibliography)
// ============================================================
const productDetails = [
  {
    name: 'Z-DermAspis',
    image: 'images/z-dermaspis.jpg',
    description: {
      consumer: consumerBlock({
        title: "Καθαρισμός & αίσθηση φρεσκάδας — για δραστήριες ημέρες",
        bullets: [
          "Γρήγορος καθαρισμός της επιφάνειας του δέρματος όπου ενδείκνυται.",
          "Με PMD (Citriodora) για λειτουργική «απωθητική» αίσθηση σε εξωτερικές δραστηριότητες.",
          "Κατάλληλο για χρήση πριν/μετά από μετακινήσεις ή υπαίθριες δραστηριότητες."
        ],
        howTo: "Ψέκασε σε χέρια/επιφάνεια δέρματος και άφησε να στεγνώσει. Μην ξεβγάζεις.",
        cautions: "Μακριά από μάτια/βλεννογόνους. Μην εφαρμόζεται σε ερεθισμένο/τραυματισμένο δέρμα. Εύφλεκτο."
      }),
      science: `
        <h3>Επιστημονικά (για Φαρμακοποιούς/Ιατρούς)</h3>
        <p><strong>Στόχος:</strong> λειτουργικός καθαρισμός + οσφρητική «παρέμβαση» έναντι εντόμων.</p>
        ${hcpTable([
          {
            ing: "Alcohol Denat. (~70% v/v)",
            inci: "ALCOHOL DENAT. / ETHANOL",
            moa: "Αποδιάταξη πρωτεϊνών και διαταραχή λιπιδικής μεμβράνης. Λειτουργικός καθαρισμός/υγιεινή επιφάνειας δέρματος."
          },
          {
            ing: "PMD (p-menthane-3,8-diol)",
            inci: "EUCALYPTUS CITRIODORA OIL (hydrated/cyclized) / PMD",
            moa: "Λειτουργική παρέμβαση στα οσφρητικά/χημειοαισθητικά μονοπάτια των εντόμων (σύγχυση σημάτων ξενιστή)."
          }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'ZplastCream 40gr',
    image: 'images/zplast-40.jpg',
    description: {
      consumer: consumerBlock({
        title: "Ενισχυμένη φροντίδα δερματικού φραγμού — καταπράυνση & άνεση",
        bullets: [
          "Καθημερινή περιποίηση για ξηρό/ευαίσθητο δέρμα και περιοχές με τραχύτητα.",
          "Βελτιώνει την αίσθηση άνεσης και την όψη της επιδερμίδας από εξωτερικούς παράγοντες.",
          "Πλούσια υφή που αφήνει προστατευτικό φιλμ."
        ],
        howTo: "Εφάρμοσε 1–3 φορές/ημέρα στις περιοχές που χρειάζονται.",
        cautions: "Μόνο για εξωτερική χρήση. Διακόψτε αν εμφανιστεί ερεθισμός."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          {
            ing: "Hypericum perforatum extract",
            inci: "HYPERICUM PERFORATUM EXTRACT",
            moa: "Αντιοξειδωτικό/καταπραϋντικό προφίλ. Υποστήριξη comfort και οπτικής βελτίωσης της υφής μέσω λειτουργικής ενίσχυσης του δερματικού φραγμού."
          },
          {
            ing: "Chios mastic fractions",
            inci: "PISTACIA LENTISCUS (MASTIC) OIL/EXTRACT",
            moa: "Λιπιδική υποστήριξη και βελτίωση ‘skin feel’. Συνεισφορά σε αίσθηση άνεσης/λείανσης."
          },
          {
            ing: "Calamine",
            inci: "CALAMINE",
            moa: "Ήπιο στυπτικό/καταπραϋντικό προφίλ με επιφανειακή αίσθηση ‘dry-touch’ και comfort."
          }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'ZplastCream 100gr',
    image: 'images/zplast-100.jpg',
    description: {
      consumer: consumerBlock({
        title: "Επαγγελματική φροντίδα (100g) — για εκτεταμένη χρήση",
        bullets: [
          "Μεγάλη συσκευασία για συστηματική καθημερινή περιποίηση.",
          "Για περιοχές με έντονη ξηρότητα/τραχύτητα ή συχνή τριβή.",
          "Βελτιώνει την αίσθηση άνεσης και την όψη της επιδερμίδας."
        ],
        howTo: "Εφάρμοσε σε καθαρό, στεγνό δέρμα 1–3 φορές/ημέρα.",
        cautions: "Μόνο για εξωτερική χρήση. Διακόψτε αν εμφανιστεί ερεθισμός."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          {
            ing: "Sea buckthorn oil (Ω-7 κ.ά.)",
            inci: "HIPPOPHAE RHAMNOIDES OIL",
            moa: "Λιπιδική υποστήριξη φραγμού και μείωση TEWL → βελτίωση ξηρότητας/ελαστικότητας και οπτικής υφής."
          },
          {
            ing: "Calendula extract",
            inci: "CALENDULA OFFICINALIS EXTRACT",
            moa: "Καταπραϋντικό προφίλ και υποστήριξη comfort σε ευαίσθητη επιδερμίδα."
          }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'Bruise Off Bite Out & Pain Free cream',
    image: 'images/bruise-off.jpg',
    description: {
      consumer: consumerBlock({
        title: "Fast-absorbing comfort cream — ιδανική και για μασάζ",
        bullets: [
          "Με ουρία για άμεση αίσθηση ενυδάτωσης και ‘softening’.",
          "Με φυτικά εκχυλίσματα για αίσθηση ανακούφισης/άνεσης μετά από καταπόνηση.",
          "Γρήγορη απορρόφηση, χωρίς λιπαρό τελείωμα."
        ],
        howTo: "Εφάρμοσε και κάνε ήπιο μασάζ μέχρι να απορροφηθεί. Επανέλαβε όπου χρειάζεται.",
        cautions: "Αποφυγή σε ερεθισμένο/τραυματισμένο δέρμα."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          {
            ing: "Urea",
            inci: "UREA",
            moa: "Humectant + dose-dependent keratolytic. Βελτίωση ενυδάτωσης κεράτινης στιβάδας και λειτουργική υποστήριξη ‘skin feel’."
          },
          {
            ing: "Arnica extract",
            inci: "ARNICA MONTANA EXTRACT",
            moa: "Καταπραϋντικό/comfort προφίλ με μηχανισμούς που περιγράφονται προκλινικά σε φλεγμονώδεις οδούς."
          },
          {
            ing: "Oregano oil (carvacrol-rich)",
            inci: "ORIGANUM VULGARE OIL",
            moa: "Sensory warming/counter-irritant προφίλ και βοτανικό ‘comfort’ αποτέλεσμα."
          }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'Bruise Off Bite Out & Pain Free cream 100ml',
    image: 'images/bruise-off-100.jpg',
    description: {
      consumer: consumerBlock({
        title: "Οικογενειακή/επαγγελματική συσκευασία (100ml) — για συχνή χρήση",
        bullets: [
          "Μεγάλη συσκευασία για καθημερινή χρήση ή χρήση μετά από έντονη δραστηριότητα.",
          "Ιδανική για μασάζ αποκατάστασης, με γρήγορη απορρόφηση.",
          "Υποστηρίζει την αίσθηση άνεσης της επιδερμίδας."
        ],
        howTo: "Εφάρμοσε και κάνε μασάζ 1–3 φορές/ημέρα ανάλογα με την ανάγκη.",
        cautions: "Αποφυγή σε βλεννογόνους/μάτια."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          {
            ing: "Urea",
            inci: "UREA",
            moa: "Barrier hydration + smoothing → καλύτερο ‘skin feel’ σε συχνή χρήση/μασάζ."
          },
          {
            ing: "Arnica / Oregano complex",
            inci: "ARNICA MONTANA EXTRACT / ORIGANUM VULGARE OIL",
            moa: "Sensory comfort + βοτανικό προφίλ για αίσθηση άνεσης."
          }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'Z-boost 30 caps',
    image: 'images/zboost-30.jpg',
    description: {
      consumer: consumerBlock({
        title: "Υποστήριξη φυσιολογικών λειτουργιών — για απαιτητικές περιόδους",
        bullets: [
          "Σύνθεση με ψευδάργυρο και επιλεγμένα συστατικά για καθημερινή υποστήριξη.",
          "Κατάλληλο για περιόδους αυξημένων απαιτήσεων, ταξίδια, έντονο πρόγραμμα.",
          "Συμπληρώνει μια ισορροπημένη διατροφή."
        ],
        howTo: "Λήψη σύμφωνα με τις οδηγίες της συσκευασίας.",
        cautions: "Τα συμπληρώματα δεν υποκαθιστούν ισορροπημένη διατροφή."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          { ing: "Zinc (Zn)", inci: "—", moa: "Ρόλος σε έμφυτη/επίκτητη ανοσία και σε ενζυμικά/αντιοξειδωτικά συστήματα." },
          { ing: "N-Acetylcysteine (NAC)", inci: "—", moa: "Πρόδρομος γλουταθειόνης (GSH) και redox υποστήριξη." },
          { ing: "Ginger (Zingiber officinale)", inci: "—", moa: "Βιοδραστικά (gingerols) με δράση σε COX/LOX pathways και αντιοξειδωτικό προφίλ." }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'Z-boost 12 caps',
    image: 'images/zboost-12.jpg',
    description: {
      consumer: consumerBlock({
        title: "Συσκευασία ταχείας χρήσης — για απαιτητικές ημέρες",
        bullets: [
          "Σχεδιασμένο για βραχυχρόνια χρήση σε περιόδους αυξημένων απαιτήσεων.",
          "Πρακτική συσκευασία για ταξίδια/εκτός έδρας.",
          "Συμπληρώνει μια ισορροπημένη διατροφή."
        ],
        howTo: "Λήψη σύμφωνα με τη συσκευασία.",
        cautions: "Μην υπερβαίνετε τη συνιστώμενη ημερήσια δόση."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          { ing: "CoQ10", inci: "—", moa: "Συστατικό μιτοχονδριακής ETC· αντιοξειδωτικό προφίλ." },
          { ing: "Alpha-Lipoic Acid (ALA)", inci: "—", moa: "Redox cycling και υποστήριξη αντιοξειδωτικών συστημάτων." }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'Revitacell Plus Face cream 50ml',
    image: 'images/revitacell.jpg',
    description: {
      consumer: consumerBlock({
        title: "Αντιοξειδωτική προστασία & βελτίωση όψης λεπτών γραμμών",
        bullets: [
          "Καλλυντική φροντίδα αντιοξειδωτικού προφίλ για θαμπή/κουρασμένη όψη.",
          "Συμβάλλει στη λείανση της όψης λεπτών γραμμών και στη βελτίωση της ελαστικότητας.",
          "Πλούσια υφή με μεταξένιο τελείωμα."
        ],
        howTo: "Πρωί/βράδυ σε καθαρό πρόσωπο και λαιμό.",
        cautions: "Αποφυγή επαφής με μάτια."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          { ing: "Mastic fractions", inci: "PISTACIA LENTISCUS (MASTIC) EXTRACT/OIL", moa: "Αντιοξειδωτικό/λιπιδικό support και βελτίωση ‘skin feel’ μέσω barrier optimization." },
          { ing: "Pomegranate seed oil", inci: "PUNICA GRANATUM SEED OIL", moa: "Λιπιδική υποστήριξη + αντιοξειδωτικό προφίλ με στόχο βελτίωση ξηρότητας/elasticity markers." }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'Hydralia Face cream 50ml',
    image: 'images/hydralia.jpg',
    description: {
      consumer: consumerBlock({
        title: "Βαθιά ενυδάτωση & ‘plump’ όψη",
        bullets: [
          "Υαλουρονικό οξύ για άμεση αίσθηση ενυδάτωσης και οπτική λείανση.",
          "Με μαλακτικά λιπίδια που υποστηρίζουν τον δερματικό φραγμό.",
          "Κατάλληλη ως βάση μακιγιάζ."
        ],
        howTo: "Πρωί/βράδυ σε καθαρό δέρμα.",
        cautions: "Αποφυγή επαφής με μάτια."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          { ing: "Hyaluronic acid", inci: "SODIUM HYALURONATE / HYALURONIC ACID", moa: "Film-forming + water-binding → ενυδάτωση και οπτική λείανση." },
          { ing: "Jojoba oil", inci: "SIMMONDSIA CHINENSIS (JOJOBA) SEED OIL", moa: "Wax esters → barrier support και μείωση TEWL χωρίς βαριά αίσθηση." }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'Revitace Eyes cream Luce 30ml',
    image: 'images/eyes.jpg',
    description: {
      consumer: consumerBlock({
        title: "Φωτεινή όψη ματιών — για πρήξιμο & θαμπάδα",
        bullets: [
          "Ανάλαφρη υφή για καθημερινή χρήση.",
          "Συμβάλλει στη βελτίωση της όψης πρηξίματος και στη φωτεινότητα της περιοχής.",
          "Ιδανική για πρωί/βράδυ."
        ],
        howTo: "Ταμποναριστά γύρω από το κόκαλο του ματιού.",
        cautions: "Αποφυγή επαφής με τον οφθαλμό."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          { ing: "Aesculus extract (escin-containing)", inci: "AESCULUS HIPPOCASTANUM EXTRACT", moa: "Microcirculation-comfort προφίλ με στόχο την ‘appearance of puffiness’." },
          { ing: "Arnica extract", inci: "ARNICA MONTANA EXTRACT", moa: "Καταπραϋντικό/comfort προφίλ για την περιοχή." }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'Alveolair Sir',
    image: 'images/alveolair.jpg',
    description: {
      consumer: consumerBlock({
        title: "Φυτικό σιρόπι για άνεση στο λαιμό",
        bullets: [
          "Φυτικά συστατικά για αίσθηση μαλακτικής άνεσης.",
          "Κατάλληλο σε περιόδους που ο λαιμός ‘ταλαιπωρείται’ από εξωτερικούς παράγοντες.",
          "Ευχάριστη γεύση."
        ],
        howTo: "Λήψη σύμφωνα με τη συσκευασία.",
        cautions: "Για παιδιά/εγκυμοσύνη/θηλασμό, τηρείτε τις οδηγίες."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          { ing: "Thymus (θυμάρι)", inci: "—", moa: "Βιοδραστικά με μηχανισμούς που περιγράφονται σε προκλινικά μοντέλα (σπασμολυτικό/comfort προφίλ)." },
          { ing: "Althaea officinalis (mucilage)", inci: "—", moa: "Film-forming/προστατευτικό στρώμα → αίσθηση καταπράυνσης." },
          { ing: "Eucalyptus fractions", inci: "—", moa: "Βοτανικό προφίλ ‘breathing comfort’ ανάλογα με το ρυθμιστικό καθεστώς διάθεσης." }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'NUTRI MX PROBIOTIC PREMIUM',
    image: 'images/probiotic.jpg',
    description: {
      consumer: consumerBlock({
        title: "Πολυστέλεχο προβιοτικό — για ισορροπία εντερικής χλωρίδας",
        bullets: [
          "18 στελέχη προβιοτικών για πολυμορφία χλωρίδας.",
          "Κατάλληλο σε περιόδους διατροφικών αλλαγών.",
          "Συμπληρώνει μια ισορροπημένη διατροφή."
        ],
        howTo: "Λήψη σύμφωνα με τη συσκευασία.",
        cautions: "Τηρείτε τις οδηγίες."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          { ing: "Probiotic strains (18 strains)", inci: "—", moa: "Competitive exclusion, SCFA παραγωγή, υποστήριξη εντερικού φραγμού, ανοσορρύθμιση (γενικό πλαίσιο)." }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'NUTRI MX MAGNESIUM 1 Τεμ',
    image: 'images/magnesium.jpg',
    description: {
      consumer: consumerBlock({
        title: "Μαγνήσιο — για καθημερινή υποστήριξη",
        bullets: [
          "Συμπληρώνει την πρόσληψη μαγνησίου στην καθημερινή διατροφή.",
          "Ιδανικό σε απαιτητικές περιόδους.",
          "Εύκολη ένταξη στη ρουτίνα."
        ],
        howTo: "Λήψη σύμφωνα με τη συσκευασία.",
        cautions: "Τηρείτε τις οδηγίες."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          { ing: "Magnesium (salt)", inci: "—", moa: "ATP biology, νευρομυϊκή διεγερσιμότητα (NMDA modulation), ενζυμική λειτουργία." }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'NUTRI MX A-Z',
    image: 'images/az.jpg',
    description: {
      consumer: consumerBlock({
        title: "Πολυβιταμίνη — καθημερινή κάλυψη μικροθρεπτικών",
        bullets: [
          "Συνδυασμός βιταμινών και μετάλλων για διατροφική υποστήριξη.",
          "Ιδανικό σε περιόδους έντονης καθημερινότητας.",
          "Εύκολη λήψη."
        ],
        howTo: "Λήψη σύμφωνα με τη συσκευασία.",
        cautions: "Τηρείτε τις οδηγίες."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          { ing: "Vitamins & minerals (σύνολο)", inci: "—", moa: "Μεταβολικά μονοπάτια ενέργειας, αντιοξειδωτική υποστήριξη και λειτουργική συμβολή ανά θρεπτικό." }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'NUTRI MX OMEGA 3',
    image: 'images/omega3.jpg',
    description: {
      consumer: consumerBlock({
        title: "Omega-3 — διατροφική υποστήριξη",
        bullets: [
          "Ιχθυέλαιο για καθημερινή πρόσληψη ω-3.",
          "Ιδανικό για άτομα με χαμηλή κατανάλωση λιπαρών ψαριών.",
          "Λήψη με γεύμα για καλύτερη ανοχή."
        ],
        howTo: "Λήψη σύμφωνα με τη συσκευασία.",
        cautions: "Τηρείτε τις οδηγίες."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          { ing: "EPA/DHA", inci: "—", moa: "Ενσωμάτωση σε μεμβράνες, ανταγωνισμός αραχιδονικού οξέος, SPMs (resolvins) — αντιφλεγμονώδες/μεμβρανικό προφίλ." }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'NUTRI MX JOINT',
    image: 'images/joint.jpg',
    description: {
      consumer: consumerBlock({
        title: "Υποστήριξη αρθρώσεων — διατροφική φόρμουλα",
        bullets: [
          "Σύνθεση με δομικά/λειτουργικά συστατικά για υποστήριξη της διατροφής του συνδετικού ιστού.",
          "Κατάλληλο για απαιτητική καθημερινότητα.",
          "Συνδυάζεται με κίνηση και επαρκή ενυδάτωση."
        ],
        howTo: "Λήψη σύμφωνα με τη συσκευασία.",
        cautions: "Τηρείτε τις οδηγίες."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          { ing: "Glucosamine / Chondroitin", inci: "—", moa: "Δομικά των GAGs αρθρικού χόνδρου, υποστήριξη matrix biology." },
          { ing: "MSM", inci: "—", moa: "Πηγή οργανικού θείου για δομικές πρωτεΐνες/κολλαγόνο." },
          { ing: "Collagen type II (εφόσον υπάρχει)", inci: "—", moa: "Διατροφική/λειτουργική υποστήριξη συνδετικού ιστού, εξαρτάται από τύπο και δόση." }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  },

  {
    name: 'Zarkolia Cosmetic pack',
    image: 'images/cosmetic-pack.jpg',
    description: {
      consumer: consumerBlock({
        title: "Πρωτόκολλο 3 βημάτων — ενυδάτωση, λείανση, φωτεινή όψη",
        bullets: [
          "Συνδυάζει Hydralia + Revitacell Plus + Revitace Eyes για ολοκληρωμένη ρουτίνα.",
          "Στόχος: ενυδάτωση, αντιοξειδωτική υποστήριξη, βελτίωση όψης λεπτών γραμμών.",
          "Ιδανικό ως δώρο ή ως ‘reset’ ρουτίνας."
        ],
        howTo: "Πρωί: Hydralia + Eyes. Βράδυ: Revitacell + Eyes.",
        cautions: "Τηρείτε τις οδηγίες χρήσης."
      }),
      science: `
        <h3>Επιστημονικά</h3>
        ${hcpTable([
          { ing: "Hyaluronic Acid (Hydralia)", inci: "SODIUM HYALURONATE", moa: "Water-binding + optical smoothing → ενυδάτωση και λείανση όψης." },
          { ing: "Antioxidant lipids (Revitacell)", inci: "PUNICA GRANATUM SEED OIL / MASTIC", moa: "Barrier optimization + αντιοξειδωτικό προφίλ → βελτίωση ‘skin feel’." },
          { ing: "Eye actives (Eyes Luce)", inci: "AESCULUS / ARNICA", moa: "Microcirculation-comfort και καταπραϋντικό προφίλ για την εμφάνιση πρηξίματος." }
        ])}
      `,
      bibliography: `<p>—</p>`
    }
  }
];

// ============================================================
// 5) UI + LOGIC (MODALS, TOTALS, EMAIL) — unchanged
// ============================================================

// Minimal style for HCP table (removed evidence/safety styles)
(function injectHcpStyles(){
  const css = `
  .hcp-table{width:100%;border-collapse:collapse;margin-top:12px;font-size:14px}
  .hcp-table th,.hcp-table td{border:1px solid #e6e6e6;padding:10px;vertical-align:top}
  .hcp-table th{background:#f7f7f7;text-align:left}
  .hcp-table .sub{font-size:12px;color:#666;margin-top:4px}
  .compliance-note{margin-top:12px;padding:10px;border:1px dashed #cfcfcf;border-radius:10px;background:#fafafa;font-size:13px;color:#333}
  .modal-body h4{margin:12px 0 6px}
  `;
  const s=document.createElement('style'); s.innerHTML=css; document.head.appendChild(s);
})();

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
      <div class="modal-header">
        <h2>${products[index].name}</h2>
        <span class="close-button" onclick="closeProductModal()">&times;</span>
      </div>
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
      <div class="modal-quick-add">
        <label>Ποσότητα:</label>
        <input type="number" id="modalQuantity" value="${tableInput.value > 0 ? tableInput.value : 1}">
        <button onclick="updateFromModal(${index})">Ενημέρωση</button>
      </div>
    </div>`;

  if(p){
    document.getElementById('Consumer').innerHTML = p.description.consumer || "<p>Δεν υπάρχουν πληροφορίες.</p>";
    document.getElementById('Science').innerHTML = p.description.science || "<p>Δεν υπάρχουν επιστημονικές πληροφορίες.</p>";
    document.getElementById('Biblio').innerHTML = "<p>—</p>"; // kept tab, removed content
  } else {
    document.getElementById('Consumer').innerHTML = "<p>Δεν βρέθηκαν λεπτομέρειες προϊόντος.</p>";
    document.getElementById('Science').innerHTML = "<p>—</p>";
    document.getElementById('Biblio').innerHTML = "<p>—</p>";
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

function clearForm(){
  document.getElementById("orderForm").reset();
  document.querySelectorAll(".quantity").forEach(q => q.value="0");
  updateAll();
}
