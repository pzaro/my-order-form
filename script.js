// --- 1. CONFIGURATION (GOOGLE SHEETS BRIDGE) ---
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzD1c9wID4goOn4LhZT8dc3E4kaDcWddmu6QR36x5I1uGYQdLc9bk31W1FVkNvQo_aJzg/exec";

// --- 2. HELPERS ΓΙΑ MODALS ---
function hcpTable(rows) {
    return `<table class="hcp-table"><thead><tr style="background:#f9f9f9;"><th>Συστατικό</th><th>Όφελος & Μηχανισμός</th></tr></thead><tbody>${rows.map(r => `<tr><td><strong>${r.ing}</strong></td><td>${r.moa}</td></tr>`).join("")}</tbody></table>`;
}
function biblioList(items) {
    return `<h4 style="margin-top:20px;">Βιβλιογραφική Τεκμηρίωση</h4><ol>${items.map(i => `<li>${i}</li>`).join("")}</ol>`;
}

// --- 3. ΠΛΗΡΗΣ ΒΑΣΗ ΠΕΛΑΤΩΝ (80+ ΕΓΓΡΑΦΕΣ) ---
const knownCustomers = {
    "999746768": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΝΔΡΕΑΔΟΥ ΕΥΑΓΓΕΛΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "6936515332", email: "andreadoupharmacy@yahoo.com" },
    "025305198": { eponimia: "ΒΑΡΕΛΑΣ ΜΙΧΑΗΛ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6937457161", email: "mixalisvarelas@gmail.com" },
    "999295953": { eponimia: "Συστεγασμένα φαρμακεία Αλ.Γκικας- Αν.Γκικα Ο.Ε", doy: "Γιαννιτσών", mobile: "6977598429", email: "anagkika@gmail.com" },
    "028058883": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΗΣ ΛΑΖΑΡΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6944581887", email: "trilazar@otenet.gr" },
    "030796217": { eponimia: "ΚΥΡΙΑΚΟΥ ΑΓΛΑΙΑ ΝΙΚΟΛΑΟ", doy: "ΝΕΩΝ ΜΟΥΔΑΝΙΩΝ", mobile: "", email: "kyriakou.agla@gmail.com" },
    "041630585": { eponimia: "ΓΕΡΟΝΤΟΠΟΥΛΟΣ ΝΙΚΗΦΟΡΟΣ ΘΕΟΦΙΛΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6942207814", email: "nikigero1@hotmail.com" },
    "042643289": { eponimia: "ΜΑΙΝΟΥ ΑΛΕΞΑΝΔΡΑ ΝΙΚΟΛΑΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6977591863", email: "mainoualex@gmail.com" },
    "043720722": { eponimia: "ΚΑΡΑΔΗΜΟΥ ΚΩΝΣΤΑΝΤΙΝΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "karad12@otenet.gr" },
    "047359704": { eponimia: "ΦΑΡΑΚΛΙΩΤΗΣ ΔΗΜΗΤΡΙΟΣ ΘΩΜΑ", doy: "ΧΑΛΚΙΔΑΣ", mobile: "6973747981", email: "farmakeiokamares@gmail.com" },
    "047862819": { eponimia: "ΠΑΠΑΔΑΚΗΣ ΝΙΚΟΛΑΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΧΑΛΚΙΔΑΣ", mobile: "", email: "nikotero@gmail.com" },
    "056068437": { eponimia: "ΓΑΝΑ ΒΑΣΙΛΙΚΗ ΕΥΑΓΓΕΛΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6932473189", email: "vassogana@gmail.com" },
    "058406703": { eponimia: "ΧΑΤΖΗΣΩΤΗΡΙΟΥ ΠΕΤΡΟΣ ΣΤΕρΓΙΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6906133900", email: "chazpe@gmail.com" },
    "061835127": { eponimia: "ΓΙΟΥΡΤΣΟΓΛΟΥ ΧΡΗΣΤΟΣ ΕΥΑΓΓΕΛΟ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6945188398", email: "giourtsoglou@yahoo.gr" },
    "065747063": { eponimia: "ΠΑΠΑΙΩΑΝΝΟΥ ΕΥΘΥΜΙΑ ΑΝΤΩΝΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6977177896", email: "papaioannoue415@gmail.com" },
    "079214571": { eponimia: "ΜΑΝΔΑΛΤΣΗ ΑΙΚΑΤΕΡΙΝΗ ΔΗΜΗΤΡΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6942690321", email: "farmakiomandaltsi@gmail.com" },
    "081095923": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΑΔΑΜΙΔΗ Α ΑΔΑΜΙΔΟΥ Μ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΙ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6976974411", email: "adamidou.mar@gmail.com" },
    "082988981": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑρΜΑΚΕΙΑ ΕΥΑΓΓΕΛΟΣ ΚΥΡΙΑΚΙΔΗΣ ΕΜΜΑΝΟΥ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6977611613", email: "vagemm@gmail.com" },
    "084186015": { eponimia: "PROJECT ΚΑΣΑΠΑΚΗΣ Θ & ΣΙΑ Ο.Ε", doy: "Η ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", email: "info@projectk.gr" },
    "094352564": { eponimia: "ΙΤΧ ΕΛΛΑΣ ΜΟΝΟΠΡΟΣΩΠΗ Α", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", email: "" },
    "095141629": { eponimia: "ΔΟΜΙΚΗ Π ΠΑΥΛΙΔΗΣ Α.Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6979794428", email: "g.apostolidis@domiki-pavlides.gr" },
    "096006210": { eponimia: "ΠΡΟΜΗΘΕΥΤΙΚΟΣ ΣΥΝΣΜΟΣ ΦΑΡΠΟΙΩΝ ΑΤΤΙΚΗΣ Π", doy: "ΠΕΡΙΣΤΕΡΙΟΥ", mobile: "", email: "asaxoni@prosyfape.gr" },
    "105965545": { eponimia: "ΚΑΛΑΙΤΖΙΔΗΣ ΕΥΣΤΑΘΙΟΣ ΦΩΤΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6947438490", email: "kalatzidis@gmail.com" },
    "107019964": { eponimia: "ΚΑΡΑΤΖΙΔΗΣ ΒΑΣΙΛΕΙΟΣ ΠΑΝΑΓΙΩΤΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "karatzidis.pharmacy@gmail.com" },
    "107428053": { eponimia: "ΓΩΝΙΑΔΗ ΛΙΑΝΑ ΑΧΙΛΛΕΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "lgfarm15@gmail.com" },
    "120774602": { eponimia: "ΚΙΤΚΑ ΑΝΑΣΤΑΣΙΑ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6981768828", email: "a_kitka@yahoo.gr" },
    "121428438": { eponimia: "ΛΑΠΠΑ ΑΓΓΕΛΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", email: "ang.lappa@gmail.com" },
    "121907683": { eponimia: "ΚΟΡΥΦΙΔΟΥ ΑΝΤΩΝΙΑ ΙΩΑΝΝΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6947323318", email: "toniakory@hotmail.com" },
    "121949072": { eponimia: "ΚΟΡΥΦΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ ΙΩΑΝΝΗ", doy: "Δ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "6943106207", email: "aristotelous.pharmacy@gmail.com" },
    "123981590": { eponimia: "ΠΑΠΑΓΕΩρΓΙΟΥ ΜΑΡΙΑ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6972525223", email: "alexmeri620@gmail.com" },
    "127263915": { eponimia: "ΣΙΣΚΟΥ ΜΑΡΙΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "m.siskou@yahoo.gr" },
    "128430492": { eponimia: "ΑΓΤΖΙΔΗΣ ΑΝΔΡΕΑΣ ΛΑΖΑΡΟ", doy: "ΚΙΛΚΙΣ", mobile: "", email: "andreasagtzidis@gmail.com" },
    "129166674": { eponimia: "ΛΑΠΙΧΟΥ ΚΑΛΛΙΟΠΗ", doy: "ΓΙΑΝΝΙΤΣΑ", mobile: "", email: "popilapi1976@gmail.com" },
    "133810643": { eponimia: "ΧΥΤΑ ΕΛΕΝΗ ΔΗΜΗΤΡΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", email: "elchyt@hotmqil.com" },
    "134072283": { eponimia: "ΠΑΡΑΣΚΕΥΟΠΟΥΛΟΣ ΙΩΑΝΝΗΣ ΠΑΣΧΑΛΗ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6948270901", email: "paraskevopoulosioannis@hotmail.gr" },
    "134811951": { eponimia: "ΓΙΟΥΤΙΚΑ ΕΛΕΥΘΕΡΙΑ ΜΑΡΙΑ ΠΑΝΑΓΙΩΤΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", email: "farmgioutikaelma@gmail.com" },
    "134825144": { eponimia: "ΚΟΥΤΣΟΚΩΣΤΑ ΙΩΑΝΝΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", email: "joannamedicine@gmail.com" },
    "134842104": { eponimia: "ΒΑΚΙΡΤΖΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΑΝΤΩΝΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6978112893", email: "vakostas@outlook.com" },
    "134848587": { eponimia: "ΔΟΥΛΚΕΡΙΔΗΣ ΚΟΣΜΑΣ ΠΑΝΑΓΙΩΤΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "kdoulker@hotmail.com" },
    "134887503": { eponimia: "ΚΑΠΝΑ ΖΩΗ ΘΕΟΔΩΡΟ", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", email: "zoi526@hotmail.com" },
    "135001952": { eponimia: "ΜΟΥΛΑ ΕΛΕΥΘΕΡΙΑ ΠΑΝΤΕΛΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "ele.moula@gmail.com" },
    "137239505": { eponimia: "ΔΑΜΙΑΝΑΚΗΣ ΣΤΑΥΡΟΣ ΓΕΩΡΓΙΟ", doy: "ΗΡΑΚΛΕΙΟΥ", mobile: "", email: "depassagepharmacy@gmail.com" },
    "140820466": { eponimia: "ΤΣΟΝΟΓΛΟΥ ΔΕΣΠΟΙΝΑ ΔΙΟΝΥΣΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", email: "despoinarsonoglou@gmail.com" },
    "141953562": { eponimia: "ΖΑΧΑΡΙΑΔΟΥ ΓΕΩΡΓΙΑ ΜΙΧΑΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", email: "gzahariadou@gmail.com" },
    "141962417": { eponimia: "ΖΕΡβΟΥ ΦΩΤΕΙΝΗ ΘΕΟΔΩΡΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", email: "fotzervou@gmail.com" },
    "141967020": { eponimia: "ΣΔΡΑΥΚΑΚΗΣ ΒΑΣΙΛΕΙΟΣ ΔΗΜΗΤΡΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "+306945015490", email: "vsdrafk@gmail.com" },
    "142265310": { eponimia: "ΣΑΠΑΚΟΛΗ ΕΥΑΓΓΕΛΙΑ ΠΕΤΡΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "sapakoli@hotmail.gr" },
    "144429978": { eponimia: "ΕΥΤΥΧΙΔΟΥ ΑΝΑΣΤΑΣΙΑ ΓΕΩΡΓΙΟ", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", email: "anastasia.e1988@gmail.com" },
    "144906695": { eponimia: "ΔΗΜΗΤΡΙΑΔΟΥ ΑΛΕΞΑΝΔΡΑ ΙΩΑΝΝΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "alex+dim.0807@gmail.com" },
    "150095708": { eponimia: "ΜΑΙΝΟΥ ΑΙΚΑΤΕΡΙΝΗ ΧΡΗΣΤΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6989858821", email: "katiamainou@yahoo.com" },
    "151161020": { eponimia: "ΒΕΧΤΣΑΛΗΣ ΣΩΤΗΡΙΟΣ ΧΡΗΣΤΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6985799070", email: "sotirisvechtsalis@hotmail.com" },
    "151162495": { eponimia: "ΜΑΝΘΟΥ ΧΡΗΣΤΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "christosmanthougr@gmail.com" },
    "152502387": { eponimia: "ΤΖΙΝΕΒΗ ΑΛΙΚΗ ΑΝΔΡΟΝΙΚΗ ΠΑΝΑΓΙΩΤΗ", doy: "ΝΕΩΝ ΜΟΥΔΑΝΙΩΝ", mobile: "6934165285", email: "alicetzi28@gmail.com" },
    "153360643": { eponimia: "ΚΑΖΑΚΟΥ ΚΩΝΣΤΑΝΤΙΝΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6974171503", email: "kazakoukonstantina@gmail.com" },
    "158040138": { eponimia: "ΠΑΠΑΟΡΦΑΝΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΑΝΤΩΝΙΟ", doy: "ΙΖ ΑΘΗΝΩΝ", mobile: "", email: "papamymarket@gmail.com" },
    "159693610": { eponimia: "ΧΡΥΣΟΣΤΟΜΙΔΗΣ ΑΝΤΩΝΙΟΣ ΠΑΡΑΣΚΕΥΑ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", email: "a.chrysostomidis@hotmail.com" },
    "165645258": { eponimia: "ΦΑΝΤΙΔΟΥ ΕΙΡΗΝΗ ΛΑΖΑΡΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "fantidou.pharmacy@gmail.com" },
    "169699055": { eponimia: "ΧΕΛΗ ΑΝΑΣΤΑΣΙΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "698 882 0879", email: "anasta.cheli10@gmail.com" },
    "300639167": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΟΥ ΕΛΕΝΗ ΑΡΙΣΤΕΙΔΗ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6940207039", email: "eleni.triantafillidou@gmail.com" },
    "800339648": { eponimia: "ΦΑρΜΑΚΕΙΟ ΖΙΟΥΤΑ ΓΕΩΡΓΙΑ ΧΡΙΣΤΙΑΝΑ ΚΑΙ ΣΙΑ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", email: "zioutaxristiana@hotmail.gr" },
    "800348196": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΥΓΕΡΙΝΟΥ Θ ΚΑΙ ΣΙΑ Ο", doy: "ΣΕΡΡΩΝ", mobile: "", email: "theoavgerinos90@gmail.com" },
    "800367008": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΘΕΟΔΟΣΙΟΣ ΑΔΑΜΙΔΗΣ ΜΑΡΘΑ ΑΔΑΜΙΔΟΥ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "698306702", email: "adamidis86@gmail.com" },
    "800414167": { eponimia: "ΜΑΧΜΟΥΡΙΔΟΥ ΚΑΙ ΣΙΑ Ο", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6944581887", email: "www.maxmouridou@hotmail.gr" },
    "800472889": { eponimia: "ΦΑΡΜΑΚΕΙΑ ΣΠΥΡΙΔΗΣ Δ ΒΑΛΑΣΙΔΟΥ ΙΣ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", email: "dimitris_sp@yahoo.com" },
    "800586973": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΦΑΡΜΑΚΗΣ ΙΩΑΝΝΗΣ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6984914098", email: "farmakisg21@hotmail.gr" },
    "800616945": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΨΥΧΟΓΥΟΥ ΑΙΚΑΤΕΡΙΝΗ - ΨΥΧΟΓΥΟΥ ΣΟΦΙΑ -ΧΡΙΣΤΙΝΑ Ο.Ε", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "anaspsi@gmail.com" },
    "800699181": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑρΜΑΚΕΙΑ Κ ΓΕΩΡΓΙΑΔΟΥ ΚΑΙ Κ ΚΑΤΣΙΑΝΟΣ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", email: "katsianoskos@gmail.com" },
    "800732970": { eponimia: "ΦΡΟΥΤΑ ΜΟΥΤΣΟΓΙΑΝΝ", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "moutsogiannis23@gmail.com" },
    "800759157": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑρΜΑΚΕΙΑ ΧΡΗΣΤΟΥ ΠΕΛΑΓΙΑ ΚΑΙ ΣΑΡΗΓΚΙΟΛΗΣ ΟΡΕΣΤΗΣ ΙΩΑΝΝΗΣ Ο", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "orestis.sarigkiolis@gmail.com" },
    "800972362": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΤΟΠΟΥΖΙΔΗΣ Γ ΚΑΙ ΤΟΠΟΥΖΙΔΗΣ Κ Ο", doy: "ΚΙΛΚΙΣ", mobile: "6942717900", email: "e.topouzidou@yahoo.gr" },
    "801577292": { eponimia: "ΝΙΚΟΛΑΟΣ ΚΟΥΤΣΟΥΜΠΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΤΡΙΠΟΛΗΣ", mobile: "", email: "nickoskoutsou@gmail.com" },
    "802096212": { eponimia: "ΑΝΔΡΗ ΚΛΕΙΔΑΡΑ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", email: "andrykleidara@gmail.com" },
    "802196155": { eponimia: "HAPPY HIPPO Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", email: "eimaiohappyhippo@gmail.com" },
    "802244502": { eponimia: "ΣΦ ΕΛΕΝΗΣ ΜΑΡΙΑΣ  ΝΙΚΟΛΑΙΔΟΥ-ΧΡΥΣΟΣΤΟΜΟΥ ΤΖΙΝΤΖΑΡΑ & ΣΙΑ Ο", doy: "Ζ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", email: "skroutzplus@outlook.com" },
    "802581242": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ Η  ΔΗΜΟΚΑ   Μ  ΜΑΡΓΟΥΤΑ Ο", doy: "ΑΜΠΕΛΟΚΗΠΩΝ", mobile: "", email: "idpharmacy254@gmail.com" },
    "802644097": { eponimia: "ΣΥΣΤΕΓΑΖΟΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΕΥΑ ΚΟΤΙΔΟΥ ΠΛΑΤΗΣ ΒΑΣΙΛΕΙΟΣ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΕΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "evakotidou@gmail.com" },
    "802667861": { eponimia: "ΦΑΡΜΑΚΕΙΟ Α ΟΙΚΟΝΟΜΟΠΟΥΛΟΣ Ι ΠΑΠΑΔΟΠΟΥΛΟΣ Ο", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", email: "ioannis.a.papadop@gmail.com" },
    "802741555": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΤΣΩΝΗ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6932461323", email: "tsonispharmacy@gmail.com" },
    "802744858": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΓΚΑΪΝΤΑΤΖΗΣ ΒΑΣΙΛΕΙΟΣ  ΓΚΑΪΝΤΑΤΖΗ ΕΥΔΟΞΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6980289717", email: "gkaintatzi.pharmacy@gmail.com" },
    "996853821": { eponimia: "ΚΟΙΝΩΝΙΑ ΚΛΗΡΟΝΟΜΩΝ ΔΟΥΛΚΕΡΙΔΗ ΧΑΡΑΛΑΜΠΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "farmakeio.skydra@gmail.com" },
    "997687603": { eponimia: "ΤΣΙΤΣΙΟΣ ΑΘΑΝΑΣΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6978762108", email: "pharmthanos@gmail.com" },
    "997688685": { eponimia: "ΣΦ ΚΑΛΟΥΔΗ ΚΩΝΣΤΑΝΤΙNIA & ΖΟΥΜΑ ΣΤΑΜΑΤΙΑ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΕΙΑ", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "", email: "stam1213zoum@gmail.com" },
    "997957423": { eponimia: "ΗΛΙΑΣ Θ ΚΑΤΡΗΣ Ε", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", email: "iliaskatrispharmacy@gmail.com" },
    "997961412": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΠΑΝΑΓΙΩΤΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ  ΦΡΑΓΓΙΔΟΥ ΝΙΚΟΛΕΤΑ Ο", doy: "ΚΙΛΚΙΣ", mobile: "6986962826", email: "farmakeiofraggidou@gmail.com" },
    "997961880": { eponimia: "ΚΑΡΙΠΙΔΟΥ ΧΡΙΣΤΙΝΑ ΚΑΙ ΣΙΑ ΟΜΟΡΡΥΘΜΟΣ ΕΤΑΙΡΕΙΑ", doy: "ΚΙΛΚΙΣ", mobile: "", email: "chriskaripidou@gmail.com" },
    "998392245": { eponimia: "ΦΑΡΜΑΚΑΠΟΘΗΚΕΣ ΑΙΓΑΙΟΥ ΣΥΦΑΚ Α.Ε", doy: "ΦΑΕ ΑΘΗΝΩΝ", mobile: "", email: "pharm.aigaiou@syfak.gr" },
    "998548940": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΧΤΣΗΣ ΣΤΕΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6948053736", email: "aachtsi@gmail.com" },
    "998720640": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΜΕΡΟΠΗΣ ΜΠΑΧΤΣΕΒΑΝΙΔΟΥ ΚΑΙ ΣΙΑ Ε", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "fiorabach@hotmail.com" },
    "998721309": { eponimia: "ΤΣΙΤΛΑΚΙΔΟΥ Μ ΚΑΙ ΣΙΑ Ο", doy: "ΕΔΕΣΣΑΣ", mobile: "", email: "maria_tsitlakidou@hotmail.com" },
    "999228431": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΗΛΙΑ ΧΑΛΙΓΙΑΝΝΗ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6936632283", email: "iliaspharm@yahoo.com" },
    "999260690": { eponimia: "ΦΛΩΡΟΣ ΓΕΩΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "6944732173", email: "florospharmacy@yahoo.gr" },
    "999295989": { eponimia: "Α ΓΚΑΙΤΑΤΖΗΣ ΚΑΙ ΣΙΑ Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", email: "gkaitatzisaggelos@yahoo.gr" },
    "999296071": { eponimia: "ΚΑΡΑΟΥΛΑΝΗ ΕΥΑΓΓΕΛΙΑ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", email: "psiamanta@hotmail.com" },
    "999387480": { eponimia: "ΜΗΤΚΑΣ ΑΔΑΜΑΝΤΙΟΣ ΚΑΙ ΣΙΑ Ε", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6945411342", email: "farmakiomitkas@gmail.com" }
};

// --- 4. ΠΡΟΪΟΝΤΑ ---
const products = [
    { name: 'Z-DermAspis', price: 5.03 },
    { name: 'Zplast Total Repair 50ml', price: 14.60 },
    { name: 'Zplast Total Repair 100ml', price: 26.80 },
    { name: 'ZplastCream 40gr', price: 12.30 },
    { name: 'ZplastCream 100gr', price: 24.79 },
    { name: 'Bruise Off Bite Out & Pain Free cream 50ml', price: 5.26 },
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

// --- 5. ΕΠΙΣΤΗΜΟΝΙΚΕΣ ΠΕΡΙΓΡΑΦΕΣ (ΑΥΤΟΥΣΙΕΣ) ---
const productDetails = [
    {
        name: 'Z-DermAspis',
        description: {
            consumer: consumerBlock({ title: "Υγιεινή & Φυσική Απωθητική Ασπίδα", bullets: ["Άμεση Αντισηπτική Δράση: 70% v/v αιθυλική αλκοόλη.", "Βιολογική Προστασία: Με PMD (Citriodora).", "Outdoor Specialized: Ιδανικό για outdoor δραστηριότητες."] }),
            science: `<h3>Φαρμακολογικό Rationale</h3>${hcpTable([{ing: "Ethanol 70%", moa: "Μετουσίωση πρωτεϊνών και λύση λιπιδικής μεμβράνης παθογόνων."}, {ing: "PMD", moa: "Ανταγωνιστής OBPs εντόμων. Αποκλείει τον εντοπισμό ξενιστή."}])}`,
            bibliography: biblioList(["Carroll SP (2006).", "CDC Guidelines (2024)."])
        }
    },
    {
        name: 'ZplastCream 40gr',
        description: {
            consumer: consumerBlock({ title: "Ολική Αναδόμηση Φραγμού & Εντατική Επούλωση", bullets: ["Lipid Replenishment: Ω-7 & Ω-5.", "Anti-Scar Technology: Προλαμβάνει χηλοειδή.", "Deep Repair: Ολική επαναφορά."] }),
            science: `<h3>Μοριακή Ανάλυση Total Repair</h3>${hcpTable([{ing: "Sea Buckthorn Oil (Ω-7)", moa: "Ενισχύει τη δομική συνοχή του νέου επιθηλίου."}, {ing: "Chios Mastic Oil", moa: "TGF-β Induction: Ρύθμιση σύνθεσης ελαστίνης."}, {ing: "HA Multi-MW", moa: "Osmotic Regulation: Διασφαλίζει moist healing."}])}`,
            bibliography: biblioList(["Upadhyay NK (2009).", "Paraschos S (2012)."])
        }
    },
    {
        name: 'ZplastCream 100gr',
        description: {
            consumer: consumerBlock({ title: "Ολική Αναδόμηση Φραγμού & Εντατική Επούλωση", bullets: ["Lipid Replenishment: Ω-7 & Ω-5.", "Anti-Scar Technology: Προλαμβάνει χηλοειδή.", "Deep Repair: Ολική επαναφορά."] }),
            science: `<h3>Μοριακή Ανάλυση Total Repair</h3>${hcpTable([{ing: "Sea Buckthorn Oil (Ω-7)", moa: "Ενισχύει τη δομική συνοχή του νέου επιθηλίου."}, {ing: "Chios Mastic Oil", moa: "TGF-β Induction: Ρύθμιση σύνθεσης ελαστίνης."}, {ing: "HA Multi-MW", moa: "Osmotic Regulation: Διασφαλίζει moist healing."}])}`,
            bibliography: biblioList(["Upadhyay NK (2009).", "Paraschos S (2012)."])
        }
    },
    {
        name: 'Zplast Total Repair 100ml',
        description: {
            consumer: consumerBlock({ title: "Κλινική Επούλωση & Κυτταρική Ανάπλαση", bullets: ["Εξειδικευμένη Αποκατάσταση: Σχεδιασμένη για πληγές και εγκαύματα.", "Ταχεία Επιθηλιοποίηση: Επιταχύνει τον πολλαπλασιασμό των κυττάρων.", "Προστασία Ιστού: Δημιουργεί ένα βιοσυμβατό φιλμ."] }),
            science: `<h3>Φαρμακολογικό Rationale & Μοριακή Δράση</h3>${hcpTable([{ing: "Centella Asiatica", moa: "SMAD Signaling: Διεγείρει τη βιοσύνθεση Κολλαγόνου Τύπου Ι & III."}, {ing: "Hyaluronic Acid", moa: "Scaffold Technology: Ρυθμίζει την υδροδυναμική της ECM."}, {ing: "Hypericum Perforatum", moa: "Keratinocyte Stimulation: Προσφέρει αντιμικροβιακή προστασία."}])}`,
            bibliography: biblioList(["Bylka W, et al. (2013).", "Wohlrab J (2018).", "Öztürk N (2007)."])
        }
    },
    {
        name: 'Zplast Total Repair 50ml',
        description: {
            consumer: consumerBlock({ title: "Κλινική Επούλωση & Κυτταρική Ανάπλαση", bullets: ["Εξειδικευμένη Αποκατάσταση: Σχεδιασμένη για πληγές και εγκαύματα.", "Ταχεία Επιθηλιοποίηση: Επιταχύνει τον πολλαπλασιασμό των κυττάρων.", "Προστασία Ιστού: Δημιουργεί ένα βιοσυμβατό φιλμ."] }),
            science: `<h3>Φαρμακολογικό Rationale & Μοριακή Δράση</h3>${hcpTable([{ing: "Centella Asiatica", moa: "SMAD Signaling: Διεγείρει τη βιοσύνθεση Κολλαγόνου Τύπου Ι & III."}, {ing: "Hyaluronic Acid", moa: "Scaffold Technology: Ρυθμίζει την υδροδυναμική της ECM."}, {ing: "Hypericum Perforatum", moa: "Keratinocyte Stimulation: Προσφέρει αντιμικροβιακή προστασία."}])}`,
            bibliography: biblioList(["Bylka W, et al. (2013).", "Wohlrab J (2018).", "Öztürk N (2007)."])
        }
    },
    {
        name: 'Bruise Off Bite Out & Pain Free cream 50ml',
        description: {
            consumer: consumerBlock({ title: "Άμεση Αποσυμφόρηση & Ανακούφιση", bullets: ["Τριπλή Στόχευση: Εξαφανίζει μελανιές, οιδήματα και πόνους.", "Βαθιά Διείσδυση: Η Ουρία μαλακώνει την επιδερμίδα.", "Cooling Effect: Άμεση αίσθηση ανακούφισης."] }),
            science: `<h3>Μοριακός Μηχανισμός Αντιφλεγμονώδους Δράσης</h3>${hcpTable([{ing: "Urea", moa: "Penetration Enhancer: Διασπά δεσμούς υδρογόνου κερατίνης."}, {ing: "Arnica (Helenalin)", moa: "NF-κB Inhibition: Καταστέλλει προ-φλεγμονωδών κυτταροκίνες."}, {ing: "Carvacrol", moa: "TRPV1 Agonist: Επιταχύνει τη μεταβολική απομάκρυνση οιδήματος."}])}`,
            bibliography: biblioList(["Wohlrab J (2018).", "Lyss G (1998).", "EMA Report (2014)."])
        }
    },
    {
        name: 'Bruise Off Bite Out & Pain Free cream 100ml',
        description: {
            consumer: consumerBlock({ title: "Άμεση Αποσυμφόρηση & Ανακούφιση", bullets: ["Τριπλή Στόχευση: Εξαφανίζει μελανιές, οιδήματα και πόνους.", "Βαθιά Διείσδυση: Η Ουρία μαλακώνει την επιδερμίδα.", "Cooling Effect: Άμεση αίσθηση ανακούφισης."] }),
            science: `<h3>Μοριακός Μηχανισμός Αντιφλεγμονώδους Δράσης</h3>${hcpTable([{ing: "Urea", moa: "Penetration Enhancer: Διασπά δεσμούς υδρογόνου κερατίνης."}, {ing: "Arnica (Helenalin)", moa: "NF-κB Inhibition: Καταστέλλει προ-φλεγμονωδών κυτταροκίνες."}, {ing: "Carvacrol", moa: "TRPV1 Agonist: Επιταχύνει τη μεταβολική απομάκρυνση οιδήματος."}])}`,
            bibliography: biblioList(["Wohlrab J (2018).", "Lyss G (1998).", "EMA Report (2014)."])
        }
    },
    {
        name: 'Z-boost 30 caps',
        description: {
            consumer: consumerBlock({ title: "Ολοκληρωμένη Θωράκιση Ανοσοποιητικού", bullets: ["Στοχευμένη Άμυνα: Έναντι ιώσεων.", "Αντιοξειδωτική Προστασία: Με NAC και Ψευδάργυρο.", "Μείωση Κόπωσης: Περιέχει CoQ10."] }),
            science: `<h3>Ανοσοφαρμακολογική Υποστήριξη</h3>${hcpTable([{ing: "Zinc", moa: "Viral Replication Inhibition: Αναστέλλει την RNA πολυμεράση των ιών."}, {ing: "NAC", moa: "GSH Precursor: Παρέχει υπόστρωμα για τη σύνθεση Γλουταθειόνης."}, {ing: "Gingerols", moa: "Dual Path Inhibition: Αναστολή COX-2 και 5-LOX."}])}`,
            bibliography: biblioList(["Hemilä H (2017).", "Grzanna R (2005).", "Šalamon S (2019)."])
        }
    },
    {
        name: 'Z-boost 12 caps',
        description: {
            consumer: consumerBlock({ title: "Ολοκληρωμένη Θωράκιση Ανοσοποιητικού", bullets: ["Στοχευμένη Άμυνα: Έναντι ιώσεων.", "Αντιοξειδωτική Προστασία: Με NAC και Ψευδάργυρο.", "Μείωση Κόπωσης: Περιέχει CoQ10."] }),
            science: `<h3>Ανοσοφαρμακολογική Υποστήριξη</h3>${hcpTable([{ing: "Zinc", moa: "Viral Replication Inhibition: Αναστέλλει την RNA πολυμεράση των ιών."}, {ing: "NAC", moa: "GSH Precursor: Παρέχει υπόστρωμα για τη σύνθεση Γλουταθειόνης."}, {ing: "Gingerols", moa: "Dual Path Inhibition: Αναστολή COX-2 και 5-LOX."}])}`,
            bibliography: biblioList(["Hemilä H (2017).", "Grzanna R (2005).", "Šalamon S (2019)."])
        }
    },
    {
        name: 'Hydralia Face cream 50ml',
        description: {
            consumer: consumerBlock({ title: "Βαθιά Ενυδάτωση & Plumping Effect", bullets: ["Τεχνολογία Υαλουρονικού: Πολλαπλά μοριακά βάρη.", "Βιομιμητική Δράση: Jojoba oil.", "Αναζωογόνηση: Φυσική λάμψη."] }),
            science: `<h3>Μοριακή Υδροδυναμική</h3>${hcpTable([{ing: "HA (LMW)", moa: "Deep Hydration: Δεσμεύει νερό στον χόριο ιστό."}, {ing: "Jojoba Oil", moa: "Biomimetic Lipids: Μειώνει το TEWL (διαδερμική απώλεια ύδατος)."}])}`,
            bibliography: biblioList(["Bukhari SNA (2018).", "Ranzato E (2011).", "Papakonstantinou E (2012)."])
        }
    },
    {
        name: 'Revitacell Plus Face cream 50ml',
        description: {
            consumer: consumerBlock({ title: "Επιγενετική Αντιγήρανση & Σύσφιξη", bullets: ["Κυτταρική Επαναφορά: Klotho protein.", "Αντιοξειδωτική Ασπίδα: Ω-5 Ροδιού.", "Premium Φροντίδα: Μαστιχέλαιο Χίου."] }),
            science: `<h3>Επιγενετική & Dermal Remodeling</h3>${hcpTable([{ing: "Mastic Oil", moa: "Klotho Gene Induction: DNA repair ενίσχυση."}, {ing: "Punicic Acid (Ω-5)", moa: "MMP-1 Inhibition: Προστασία κολλαγόνου & ελαστίνης."}])}`,
            bibliography: biblioList(["Lall N (2020).", "Neha K (2014).", "Kuro-o M (2009)."])
        }
    },
    {
        name: 'Revitace Eyes cream Luce 30ml',
        description: {
            consumer: consumerBlock({ title: "Φωτεινό Βλέμμα & Αποσυμφόρηση", bullets: ["Στοχευμένη Δράση: Σακούλες & μαύροι κύκλοι.", "Άμεση Φωτεινότητα: Luce Technology.", "Σύσφιξη Βλεφάρων: Τονώνει το λεπτό δέρμα."] }),
            science: `<h3>Μικροκυκλοφορία & Περικογχική Αποκατάσταση</h3>${hcpTable([{ing: "Escin", moa: "Venotonic Profile: Μειώνει τη διαρροή υγρών (οίδημα)."}, {ing: "Arnica Extract", moa: "Heme Degradation Support: Απορρόφηση χρωστικών μαύρων κύκλων."}, {ing: "Peptides", moa: "Drainage Activation: Μειώνει το puffiness (πρήξιμο)."}])}`,
            bibliography: biblioList(["Gallelli L (2019).", "Sirtori CR (2001).", "Rohdewald P (2002)."])
        }
    },
    {
        name: 'Alveolair Sir',
        description: {
            consumer: consumerBlock({ title: "Φυτική Προστασία Αναπνευστικού", bullets: ["Άμεση Ανακούφιση: Μαλακώνει τον λαιμό.", "Φυσική Σύνθεση: Θυμάρι & Αλθέα.", "Αποχρεμπτική Δράση: Καθαρίζει εκκρίσεις."] }),
            science: `<h3>Βλεννογονική Προστασία</h3>${hcpTable([{ing: "Althaea root", moa: "Mucilage Barrier: Προστατευτικό βιο-φιλμ."}, {ing: "Thymol", moa: "Bronchospasmolysis: Σπασμολυτική δράση βρόγχων."}, {ing: "Eucalyptus", moa: "Secretolytic Action: Κάθαρση βλέννας."}])}`,
            bibliography: biblioList(["EMA Monograph on Thymus.", "Althaea officinalis clinical review."])
        }
    },
    {
        name: 'NUTRI MX PROBIOTIC PREMIUM',
        description: {
            consumer: consumerBlock({ title: "Προηγμένη Ισορροπία Μικροβιώματος", bullets: ["18 Στελέχη: Πλήρες φάσμα.", "Υψηλή Συγκέντρωση: 10 δις CFU.", "Ανοσολογική Ενίσχυση: Ρύθμιση άμυνας εντέρου."] }),
            science: `<h3>Μικροβιακή Ομοιόσταση</h3>${hcpTable([{ing: "18 Strains", moa: "Competitive Exclusion παθογόνων."}, {ing: "SCFA Production", moa: "Butyrate: Θρέψη κολονοκυττάρων."}, {ing: "Tregs Induction", moa: "Immune Tolerance: Μείωση φλεγμονής (IL-10)."}])}`,
            bibliography: biblioList(["Lee JY (2022). Science.", "Karamanolis GP (2019)."])
        }
    },
    {
        name: 'NUTRI MX MAGNESIUM 1 Τεμ',
        description: {
            consumer: consumerBlock({ title: "Μαγνήσιο & Β6 (Κατά των Κραμπών)", bullets: ["Μυϊκή Χαλάρωση: Πρόληψη κραμπών.", "Νευρικό Σύστημα: Μείωση άγχους & βελτίωση ύπνου.", "Ενέργεια: Μείωση κόπωσης."] }),
            science: `<h3>Νευρομυϊκή Φυσιολογία</h3>${hcpTable([{ing: "Magnesium", moa: "NMDA Antagonist: Ρύθμιση διεγερσιμότητας νευρώνων."}, {ing: "Vitamin B6", moa: "Chaperone: Είσοδος Mg στα κύτταρα."}, {ing: "Mg-ATP Complex", moa: "Μεταβολισμός & παραγωγή ενέργειας."}])}`,
            bibliography: biblioList(["EFSA (2010).", "Prasad AS (2008).", "Pouteau E (2018)."])
        }
    },
    {
        name: 'NUTRI MX A-Z',
        description: {
            consumer: consumerBlock({ title: "Πλήρης Πολυβιταμίνη AZ", bullets: ["24 Συστατικά: Πλήρης κάλυψη.", "Ενέργεια: Σύμπλεγμα Β.", "Άμυνα: C, D & Zinc."] }),
            science: `<h3>Μεταβολική Ομοιόσταση</h3>${hcpTable([{ing: "B-Complex", moa: "Co-enzymatic Activity: Μεταβολισμός ATP."}, {ing: "Vitamin C & Zinc", moa: "Immune Support & DNA Stability."}])}`,
            bibliography: biblioList(["Kennedy DO (2016).", "EFSA Journal (2010)."])
        }
    },
    {
        name: 'NUTRI MX OMEGA 3',
        description: {
            consumer: consumerBlock({ title: "Ωμέγα-3 Υψηλής Καθαρότητας", bullets: ["Καρδιά: EPA/DHA για φυσιολογική λειτουργία.", "Εγκέφαλος: DHA για γνωσιακή υποστήριξη.", "Όραση: Διατήρηση υγείας αμφιβληστροειδούς."] }),
            science: `<h3>Λιπιδική Βιολογία</h3>${hcpTable([{ing: "EPA", moa: "Anti-inflammatory: Ανταγωνιστής ΑΑ."}, {ing: "Resolvins", moa: "Resolution: Ενεργός τερματισμός φλεγμονής (SPMs)."}])}`,
            bibliography: biblioList(["Calder PC (2013).", "Mozaffarian D (2011)."])
        }
    },
    {
        name: 'NUTRI MX JOINT',
        description: {
            consumer: consumerBlock({ title: "Δομική Υποστήριξη Αρθρώσεων", bullets: ["Θρέψη: Γλυκοζαμίνη & Χονδροϊτίνη.", "Ανάπλαση: Κολλαγόνο ΙΙ & MSM.", "Κινητικότητα: Μείωση δυσκαμψίας."] }),
            science: `<h3>Chondroprotection</h3>${hcpTable([{ing: "GAG Precursors", moa: "Βιοσύνθεση αγρεκάνης στον χόνδρο."}, {ing: "Native Collagen II", moa: "Oral Tolerance: Καταστολή αυτοανοσίας."}])}`,
            bibliography: biblioList(["Hochberg MC (2016).", "Lugo JP (2013)."])
        }
    },
    {
        name: 'Zarkolia Cosmetic pack',
        description: {
            consumer: consumerBlock({ title: "Ολοκληρωμένο Πρωτόκολλο Αντιγήρανσης", bullets: ["24h Routine: Hydralia, Revitacell, Eyes.", "Συνέργεια: Μέγιστο αποτέλεσμα.", "Αναδόμηση: Πλήρης φροντίδα."] }),
            science: `<p>Συνεργιστικό μοντέλο που καλύπτει ταυτόχρονα την υδροδυναμική της ECM, την επιγενετική αναδόμηση και την τριχοειδική παροχέτευση.</p>`,
            bibliography: biblioList(["Scientific references of Zarkolia series."])
        }
    }
];

// --- 6. INITIALIZATION & ERP LOGIC ---
document.addEventListener("DOMContentLoaded", function() {
    const btnContainer = document.getElementById('productButtonsContainer');
    const tableBody = document.querySelector('#product-table tbody');

    products.forEach((p, index) => {
        const btn = document.createElement('button');
        btn.className = 'product-btn';
        btn.innerHTML = `<strong>${p.name}</strong><br><span style="color:var(--emerald-dark);">${p.price.toFixed(2)} €</span>`;
        btn.onclick = () => showInfo(p.name);
        btnContainer.appendChild(btn);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p.name}</td>
            <td>${p.price.toFixed(2)} €</td>
            <td><input type="number" id="qty-${index}" min="0" oninput="updateTotals()" value="0" style="width:60px;padding:8px;border-radius:10px;border:1px solid #ddd;"></td>
            <td><span id="gift-${index}">0</span></td>
            <td id="eff-${index}">${p.price.toFixed(2)} €</td>
            <td id="total-${index}">0.00 €</td>`;
        tableBody.appendChild(row);
    });

    const afmInput = document.getElementById('afm');
    if(afmInput) {
        afmInput.addEventListener('input', function() {
            const c = knownCustomers[this.value.trim()];
            if (c) {
                document.getElementById('eponimia').value = c.eponimia;
                document.getElementById('doy').value = c.doy;
                document.getElementById('mobile').value = c.mobile;
                document.getElementById('email').value = c.email;
            }
        });
    }
});

function calculateGifts(q) {
    if(q < 9) return 0;
    if(q < 18) return 1;
    if(q < 24) return 3;
    if(q < 48) return 6;
    return Math.floor(q / 48) * 15;
}

function updateTotals() { 
    let net = 0;
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        const g = calculateGifts(q);
        const line = q * p.price;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = line.toFixed(2) + " €";
        document.getElementById(`eff-${i}`).textContent = q > 0 ? (line / (q + g)).toFixed(2) + " €" : p.price.toFixed(2) + " €";
        net += line;
    });
    const vat = net * 0.24;
    document.getElementById("net-value").textContent = net.toFixed(2) + " €";
    document.getElementById("vat-value").textContent = vat.toFixed(2) + " €";
    document.getElementById("final-total").textContent = (net + vat).toFixed(2) + " €";
}

function showInfo(name) {
    const p = productDetails.find(item => item.name === name) || { description: { consumer: "Μη διαθέσιμο", science: "", bibliography: "" } };
    const modal = document.getElementById('productModal');
    modal.innerHTML = `
        <div class="modal-content">
            <span style="position:absolute;top:20px;right:20px;cursor:pointer;font-size:2.5rem;color:#aaa;" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
            <h2 style="color:var(--emerald-dark);">${name}</h2>
            ${p.description.consumer}
            <hr style="margin:20px 0; border:0; border-top:1px solid #eee;">
            ${p.description.science}
            ${p.description.bibliography}
        </div>`;
    modal.style.display = 'block';
}

async function processOrder() {
    const eponimia = document.getElementById("eponimia").value;
    const afm = document.getElementById("afm").value;
    const payment = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "Δεν επιλέχθηκε";
    const remarks = document.getElementById("remarks").value;
    const submitBtn = document.getElementById("submitBtn");

    if(!eponimia) { alert("Παρακαλώ επιλέξτε Πελάτη!"); return; }

    let productsForSheet = [];
    let productsForEmail = "";
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        const g = document.getElementById(`gift-${i}`).textContent;
        if(q > 0) {
            productsForSheet.push(`${p.name} (${q})`);
            productsForEmail += `* ${p.name} | Τεμ: ${q} | Δώρα: ${g}%0D%0A`;
        }
    });

    if(productsForSheet.length === 0) { alert("Η παραγγελία είναι άδεια!"); return; }

    const orderData = { customer: eponimia, afm: afm, products: productsForSheet.join(", "), netValue: document.getElementById("net-value").textContent, vat: document.getElementById("vat-value").textContent, total: document.getElementById("final-total").textContent, payment: payment, remarks: remarks };

    submitBtn.disabled = true;
    submitBtn.textContent = "Cloud Sync...";

    try {
        await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(orderData) });
        alert("ΕΠΙΤΥΧΙΑ! Η παραγγελία καταχωρήθηκε στο Google Sheet.");
        
        const subject = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ ZARKOLIA HEALTH / ${eponimia}`;
        const body = `Αντίγραφο Παραγγελίας - ZARKOLIA HEALTH%0D%0A%0D%0AΠΕΛΑΤΗΣ: ${eponimia}%0D%0A%0D%0AΠΡΟΪΟΝΤΑ:%0D%0A${productsForEmail}%0D%0AΣΥΝΟΛΟ: ${document.getElementById("final-total").textContent}%0D%0A%0D%0AΠΛΗΡΩΜΗ: ${payment}%0D%0AIBAN: GR89 0172 2520 0052 5201 6160 277`;
        
        window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    } catch (error) {
        alert("Σφάλμα Cloud. Θα ανοίξει μόνο το Email.");
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Ολοκλήρωση & Google Sheet";
    }
}

function clearForm() { if(confirm("Εκκαθάριση φόρμας;")) location.reload(); }
