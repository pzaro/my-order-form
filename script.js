// ============================================================
// ZARKOLIA HEALTH - THE DEFINITIVE SCIENTIFIC ERP v13.0
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwsisgw1LyWf_M1fMq3A3J2xHge4k5KWqLRti5Y5_-V_rmTHoRKaP1KrhZ2v4yuxxRH1g/exec";

// --- 1. HELPERS ΓΙΑ ΕΠΙΣΤΗΜΟΝΙΚΗ ΤΕΚΜΗΡΙΩΣΗ ---
function hcpTable(rows) {
    return `<table class="hcp-table"><thead><tr style="background:#f9f9f9;"><th>Συστατικό</th><th>Μοριακός Μηχανισμός (MoA)</th></tr></thead><tbody>${rows.map(r => `<tr><td><strong>${r.ing}</strong></td><td>${r.moa}</td></tr>`).join("")}</tbody></table>`;
}

function biblioList(items) {
    return `<div style="margin-top:20px; padding:15px; background:#f0f9ff; border-radius:10px; border-left:4px solid #0284c7;">
        <h4 style="margin:0 0 10px 0;">Επιστημονική Βιβλιογραφία</h4>
        <ul style="margin:0; padding-left:18px; font-size:0.85rem;">${items.map(i => `<li style="margin-bottom:5px;">${i}</li>`).join("")}</ul>
    </div>`;
}

// --- 2. ΠΛΗΡΗΣ ΒΑΣΗ ΠΕΛΑΤΩΝ (88 ΕΓΓΡΑΦΕΣ) ---
const knownCustomers = {
    "999746768": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΝΔΡΕΑΔΟΥ ΕΥΑΓΓΕΛΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "6936515332", phone: "2384021001", email: "andreadoupharmacy@yahoo.com" },
    "025305198": { eponimia: "ΒΑΡΕΛΑΣ ΜΙΧΑΗΛ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6937457161", email: "mixalisvarelas@gmail.com" },
    "999295953": { eponimia: "Συστεγασμένα φαρμακεία Αλ.Γκικας- Αν.Γκικα Ο.Ε", doy: "Γιαννιτσών", mobile: "6977598429", email: "anagkika@gmail.com" },
    "028058883": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΗΣ ΛΑΖΑΡΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6944581887", email: "trilazar@otenet.gr" },
    "030796217": { eponimia: "ΚΥΡΙΑΚΟΥ ΑΓΛΑΙΑ ΝΙΚΟΛΑΟ", doy: "ΝΕΩΝ ΜΟΥΔΑΝΙΩΝ", phone: "2399021663", email: "kyriakou.agla@gmail.com" },
    "041630585": { eponimia: "ΓΕΡΟΝΤΟΠΟΥΛΟΣ ΝΙΚΗΦΟΡΟΣ ΘΕΟΦΙΛΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6942207814", email: "nikigero1@hotmail.com" },
    "042643289": { eponimia: "ΜΑΙΝΟΥ ΑΛΕΞΑΝΔΡΑ ΝΙΚΟΛΑΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6977591863", email: "mainoualex@gmail.com" },
    "043720722": { eponimia: "ΚΑΡΑΔΗΜΟΥ ΚΩΝΣΤΑΝΤΙΝΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", email: "karad12@otenet.gr" },
    "047359704": { eponimia: "ΦΑΡΑΚΛΙΩΤΗΣ ΔΗΜΗΤΡΙΟΣ ΘΩΜΑ", doy: "ΧΑΛΚΙΔΑΣ", mobile: "6973747981", email: "farmakeiokamares@gmail.com" },
    "047862819": { eponimia: "ΠΑΠΑΔΑΚΗΣ ΝΙΚΟΛΑΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΧΑΛΚΙΔΑΣ", email: "nikotero@gmail.com" },
    "056068437": { eponimia: "ΓΑΝΑ ΒΑΣΙΛΙΚΗ ΕΥΑΓΓΕΛΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6932473189", email: "vassogana@gmail.com" },
    "058406703": { eponimia: "ΧΑΤΖΗΣΩΤΗΡΙΟΥ ΠΕΤΡΟΣ ΣΤΕΡΓΙΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6906133900", email: "chazpe@gmail.com" },
    "061835127": { eponimia: "ΓΙΟΥΡΤΣΟΓΛΟΥ ΧΡΗΣΤΟΣ ΕΥΑΓΓΕΛΟ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6945188398", email: "giourtsoglou@yahoo.gr" },
    "065747063": { eponimia: "ΠΑΠΑΙΩΑΝΝΟΥ ΕΥΘΥΜΙΑ ΑΝΤΩΝΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6977177896", email: "papaioannoue415@gmail.com" },
    "079214571": { eponimia: "ΜΑΝΔΑΛΤΣΗ ΑΙΚΑΤΕΡΙΝΗ ΔΗΜΗΤΡΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "farmakiomandaltsi@gmail.com" },
    "081095923": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΑΔΑΜΙΔΗ Α ΑΔΑΜΙΔΟΥ Μ Ο.Ε", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6976974411", email: "adamidou.mar@gmail.com" },
    "082988981": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΕΥΑΓΓΕΛΟΣ ΚΥΡΙΑΚΙΔΗΣ ΕΜΜΑΝΟΥ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "vagemm@gmail.com" },
    "084186015": { eponimia: "PROJECT ΚΑΣΑΠΑΚΗΣ Θ & ΣΙΑ Ο.Ε", doy: "Η ΘΕΣΣΑΛΟΝΙΚΗΣ", phone: "2310832124", email: "info@projectk.gr" },
    "094352564": { eponimia: "ΙΤΧ ΕΛΛΑΣ ΜΟΝΟΠΡΟΣΩΠΗ Α.Ε", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ" },
    "095141629": { eponimia: "ΔΟΜΙΚΗ Π ΠΑΥΛΙΔΗΣ Α.Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6979794428", email: "g.apostolidis@domiki-pavlides.gr" },
    "096006210": { eponimia: "ΠΡΟΜΗΘΕΥΤΙΚΟΣ ΣΥΝΣΜΟΣ ΦΑΡΠΟΙΩΝ ΑΤΤΙΚΗΣ Π", doy: "ΠΕΡΙΣΤΕΡΙΟΥ", phone: "210 5709400", email: "asaxoni@prosyfape.gr" },
    "105965545": { eponimia: "ΚΑΛΑΙΤΖΙΔΗΣ ΕΥΣΤΑΘΙΟΣ ΦΩΤΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6947438490", email: "kalatzidis@gmail.com" },
    "107019964": { eponimia: "ΚΑΡΑΤΖΙΔΗΣ ΒΑΣΙΛΕΙΟΣ ΠΑΝΑΓΙΩΤΗ", doy: "ΕΔΕΣΣΑΣ", phone: "2384042170", email: "karatzidis.pharmacy@gmail.com" },
    "107428053": { eponimia: "ΓΩΝΙΑΔΗ ΛΙΑΝΑ ΑΧΙΛΛΕΑ", doy: "ΕΔΕΣΣΑΣ", email: "lgfarm15@gmail.com" },
    "120774602": { eponimia: "ΚΙΤΚΑ ΑΝΑΣΤΑΣΙΑ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6981768828", email: "a_kitka@yahoo.gr" },
    "121428438": { eponimia: "ΛΑΠΠΑ ΑΓΓΕΛΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "ang.lappa@gmail.com" },
    "121907683": { eponimia: "ΚΟΡΥΦΙΔΟΥ ΑΝΤΩΝΙΑ ΙΩΑΝΝΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6947323318", email: "toniakory@hotmail.com" },
    "121949072": { eponimia: "ΚΟΡΥΦΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ ΙΩΑΝΝΗ", doy: "Δ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "6943106207", email: "aristotelous.pharmacy@gmail.com" },
    "123981590": { eponimia: "ΠΑΠΑΓΕΩΡΓΙΟΥ ΜΑΡΙΑ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6972525223", email: "alexmeri620@gmail.com" },
    "127263915": { eponimia: "ΣΙΣΚΟΥ ΜΑΡΙΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", email: "m.siskou@yahoo.gr" },
    "128430492": { eponimia: "ΑΓΤΖΙΔΗΣ ΑΝΔΡΕΑΣ ΛΑΖΑΡΟ", doy: "ΚΙΛΚΙΣ", email: "andreasagtzidis@gmail.com" },
    "129166674": { eponimia: "ΛΑΠΙΧΟΥ ΚΑΛΛΙΟΠΗ", doy: "ΓΙΑΝΝΙΤΣΑ", email: "popilapi1976@gmail.com" },
    "133810643": { eponimia: "ΧΥΤΑ ΕΛΕΝΗ ΔΗΜΗΤΡΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "elchyt@hotmqil.com" },
    "134072283": { eponimia: "ΠΑΡΑΣΚΕΥΟΠΟΥΛΟΣ ΙΩΑΝΝΗΣ ΠΑΣΧΑΛΗ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6948270901", email: "paraskevopoulosioannis@hotmail.gr" },
    "134811951": { eponimia: "ΓΙΟΥΤΙΚΑ ΕΛΕΥΘΕΡΙΑ ΜΑΡΙΑ ΠΑΝΑΓΙΩΤΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "farmgioutikaelma@gmail.com" },
    "134825144": { eponimia: "ΚΟΥΤΣΟΚΩΣΤΑ ΙΩΑΝΝΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "joannamedicine@gmail.com" },
    "134842104": { eponimia: "ΒΑΚΙΡΤΖΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΑΝΤΩΝΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6978112893", email: "vakostas@outlook.com" },
    "134848587": { eponimia: "ΔΟΥΛΚΕΡΙΔΗΣ ΚΟΣΜΑΣ ΠΑΝΑΓΙΩΤΗ", doy: "ΕΔΕΣΣΑΣ", email: "kdoulker@hotmail.com" },
    "134887503": { eponimia: "ΚΑΠΝΑ ΖΩΗ ΘΕΟΔΩΡΟ", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", email: "zoi526@hotmail.com" },
    "135001952": { eponimia: "ΜΟΥΛΑ ΕΛΕΥΘΕΡΙΑ ΠΑΝΤΕΛΗ", doy: "ΕΔΕΣΣΑΣ", email: "ele.moula@gmail.com" },
    "137239505": { eponimia: "ΔΑΜΙΑΝΑΚΗΣ ΣΤΑΥΡΟΣ ΓΕΩΡΓΙΟ", doy: "ΗΡΑΚΛΕΙΟΥ", email: "depassagepharmacy@gmail.com" },
    "140820466": { eponimia: "ΤΣΟΝΟΓΛΟΥ ΔΕΣΠΟΙΝΑ ΔΙΟΝΥΣΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "despoinarsonoglou@gmail.com" },
    "141953562": { eponimia: "ΖΑΧΑΡΙΑΔΟΥ ΓΕΩΡΓΙΑ ΜΙΧΑΗΛ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "gzahariadou@gmail.com" },
    "141962417": { eponimia: "ΖΕΡΒΟΥ ΦΩΤΕΙΝΗ ΘΕΟΔΩΡΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "fotzervou@gmail.com" },
    "141967020": { eponimia: "ΣΔΡΑΥΚΑΚΗΣ ΒΑΣΙΛΕΙΟΣ ΔΗΜΗΤΡΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "+306945015490", email: "vsdrafk@gmail.com" },
    "142265310": { eponimia: "ΣΑΠΑΚΟΛΗ ΕΥΑΓΓΕΛΙΑ ΠΕΤΡΟ", doy: "ΕΔΕΣΣΑΣ", email: "sapakoli@hotmail.gr" },
    "144429978": { eponimia: "ΕΥΤΥΧΙΔΟΥ ΑΝΑΣΤΑΣΙΑ ΓΕΩΡΓΙΟ", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", email: "anastasia.e1988@gmail.com" },
    "144906695": { eponimia: "ΔΗΜΗΤΡΙΑΔΟΥ ΑΛΕΞΑΝΔΡΑ ΙΩΑΝΝΗ", doy: "ΕΔΕΣΣΑΣ", email: "alex+dim.0807@gmail.com" },
    "150095708": { eponimia: "ΜΑΙΝΟΥ ΑΙΚΑΤΕΡΙΝΗ ΧΡΗΣΤΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6989858821", email: "katiamainou@yahoo.com" },
    "151161020": { eponimia: "ΒΕΧΤΣΑΛΗΣ ΣΩΤΗΡΙΟΣ ΧΡΗΣΤΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6985799070", email: "sotirisvechtsalis@hotmail.com" },
    "151162495": { eponimia: "ΜΑΝΘΟΥ ΧΡΗΣΤΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", email: "christosmanthougr@gmail.com" },
    "152502387": { eponimia: "ΤΖΙΝΕΒΗ ΑΛΙΚΗ ΑΝΔΡΟΝΙΚΗ ΠΑΝΑΓΙΩΤΗ", doy: "ΝΕΩΝ ΜΟΥΔΑΝΙΩΝ", mobile: "6934165285", email: "alicetzi28@gmail.com" },
    "153360643": { eponimia: "ΚΑΖΑΚΟΥ ΚΩΝΣΤΑΝΤΙΝΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6974171503", email: "kazakoukonstantina@gmail.com" },
    "158040138": { eponimia: "ΠΑΠΑΟΡΦΑΝΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΑΝΤΩΝΙΟ", doy: "ΙΖ ΑΘΗΝΩΝ", email: "papamymarket@gmail.com" },
    "159693610": { eponimia: "ΧΡΥΣΟΣΤΟΜΙΔΗΣ ΑΝΤΩΝΙΟΣ ΠΑΡΑΣΚΕΥΑ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "a.chrysostomidis@hotmail.com" },
    "165645258": { eponimia: "ΦΑΝΤΙΔΟΥ ΕΙΡΗΝΗ ΛΑΖΑΡΟ", doy: "ΕΔΕΣΣΑΣ", email: "fantidou.pharmacy@gmail.com" },
    "169699055": { eponimia: "ΧΕΛΗ ΑΝΑΣΤΑΣΙΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6988820879", email: "anasta.cheli10@gmail.com" },
    "300639167": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΟΥ ΕΛΕΝΗ ΑΡΙΣΤΕΙΔΗ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6940207039", email: "eleni.triantafillidou@gmail.com" },
    "800339648": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΖΙΟΥΤΑ ΓΕΩΡΓΙΑ ΧΡΙΣΤΙΑΝΑ ΚΑΙ ΣΙΑ Ο", doy: "ΚΙΛΚΙΣ", email: "zioutaxristiana@hotmail.gr" },
    "800348196": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΥΓΕΡΙΝΟΥ Θ ΚΑΙ ΣΙΑ Ο", doy: "ΣΕΡΡΩΝ", email: "theoavgerinos90@gmail.com" },
    "800367008": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΘΕΟΔΟΣΙΟΣ ΑΔΑΜΙΔΗΣ ΜΑΡΘΑ ΑΔΑΜΙΔΟΥ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", phone: "2382062100", email: "adamidis86@gmail.com" },
    "800414167": { eponimia: "ΜΑΧΜΟΥΡΙΔΟΥ ΚΑΙ ΣΙΑ Ο", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6944581887", email: "www.maxmouridou@hotmail.gr" },
    "800472889": { eponimia: "ΦΑΡΜΑΚΕΙΑ ΣΠΥΡΙΔΗΣ Δ ΒΑΛΑΣΙΔΟΥ ΙΣ Ο", doy: "ΚΙΛΚΙΣ", email: "dimitris_sp@yahoo.com" },
    "800586973": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΦΑΡΜΑΚΗΣ ΙΩΑΝΝΗΣ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6984914098", email: "farmakisg21@hotmail.gr" },
    "800616945": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΨΥΧΟΓΥΟΥ ΑΙΚΑΤΕΡΙΝΗ Ο.Ε", doy: "ΕΔΕΣΣΑΣ", email: "anaspsi@gmail.com" },
    "800699181": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ Κ ΓΕΩΡΓΙΑΔΟΥ ΚΑΙ Κ ΚΑΤΣΙΑΝΟΣ Ο", doy: "ΚΙΛΚΙΣ", email: "katsianoskos@gmail.com" },
    "800732970": { eponimia: "ΦΡΟΥΤΑ ΜΟΥΤΣΟΓΙΑΝΝΗ", doy: "ΕΔΕΣΣΑΣ", email: "moutsogiannis23@gmail.com" },
    "800759157": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΧΡΗΣΤΟΥ ΠΕΛΑΓΙΑ Ο", doy: "ΕΔΕΣΣΑΣ", email: "orestis.sarigkiolis@gmail.com" },
    "800972362": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΤΟΠΟΥΖΙΔΗΣ Γ ΚΑΙ ΤΟΠΟΥΖΙΔΗΣ Κ Ο", doy: "ΚΙΛΚΙΣ", mobile: "6942717900", email: "e.topouzidou@yahoo.gr" },
    "801577292": { eponimia: "ΝΙΚΟΛΑΟΣ ΚΟΥΤΣΟΥΜΠΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΤΡΙΠΟΛΗΣ", mobile: "6981203517", email: "nickoskoutsou@gmail.com" },
    "802096212": { eponimia: "ΑΝΔΡΗ ΚΛΕΙΔΑΡΑ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", email: "andrykleidara@gmail.com" },
    "802196155": { eponimia: "HAPPY HIPPO Ε.Π.Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "eimaiohappyhippo@gmail.com" },
    "802244502": { eponimia: "ΣΦ ΕΛΕΝΗΣ ΜΑΡΙΑΣ ΝΙΚΟΛΑΙΔΟΥ-ΧΡΥΣΟΣΤΟΜΟΥ Ο", doy: "Ζ ΘΕΣΣΑΛΟΝΙΚΗΣ", email: "skroutzplus@outlook.com" },
    "802581242": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ Η ΔΗΜΟΚΑ Μ ΜΑΡΓΟΥΤΑ Ο", doy: "ΑΜΠΕΛΟΚΗΠΩΝ", email: "idpharmacy254@gmail.com" },
    "802644097": { eponimia: "ΣΥΣΤΕΓΑΖΟΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΕΥΑ ΚΟΤΙΔΟΥ Ο.Ε", doy: "ΕΔΕΣΣΑΣ", email: "evakotidou@gmail.com" },
    "802667861": { eponimia: "ΦΑΡΜΑΚΕΙΟ Α ΟΙΚΟΝΟΜΟΠΟΥΛΟΣ Ο", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", email: "ioannis.a.papadop@gmail.com" },
    "802741555": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΤΣΩΝΗ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6932461323", email: "tsonispharmacy@gmail.com" },
    "802744858": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΓΚΑΪΝΤΑΤΖΗΣ ΒΑΣΙΛΕΙΟΣ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", email: "gkaintatzi.pharmacy@gmail.com" },
    "996853821": { eponimia: "ΚΟΙΝΩΝΙΑ ΚΛΗΡΟΝΟΜΩΝ ΔΟΥΛΚΕΡΙΔΗ ΧΑΡΑΛΑΜΠΟ", doy: "ΕΔΕΣΣΑΣ", email: "farmakeio.skydra@gmail.com" },
    "997687603": { eponimia: "ΤΣΙΤΣΙΟΣ ΑΘΑΝΑΣΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6978762108", email: "pharmthanos@gmail.com" },
    "997688685": { eponimia: "ΣΦ ΚΑΛΟΥΔΗ ΚΩΝΣΤΑΝΤΙNIA Ο.Ε", doy: "ΚΟΜΟΤΗΝΗΣ", email: "stam1213zoum@gmail.com" },
    "997957423": { eponimia: "ΗΛΙΑΣ Θ ΚΑΤΡΗΣ Ε", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", email: "iliaskatrispharmacy@gmail.com" },
    "997961412": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΠΑΝΑΓΙΩΤΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ Ο", doy: "ΚΙΛΚΙΣ", mobile: "6986962826", email: "farmakeiofraggidou@gmail.com" },
    "997961880": { eponimia: "ΚΑΡΙΠΙΔΟΥ ΧΡΙΣΤΙΝΑ ΚΑΙ ΣΙΑ Ο", doy: "ΚΙΛΚΙΣ", email: "chriskaripidou@gmail.com" },
    "998392245": { eponimia: "ΦΑΡΜΑΚΑΠΟΘΗΚΕΣ ΑΙΓΑΙΟΥ ΣΥΦΑΚ Α.Ε", doy: "ΦΑΕ ΑΘΗΝΩΝ", email: "pharm.aigaiou@syfak.gr" },
    "998548940": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΧΤΣΗΣ ΣΤΕΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6948053736", email: "aachtsi@gmail.com" },
    "998720640": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΜΕΡΟΠΗΣ ΜΠΑΧΤΣΕΒΑΝΙΔΟΥ ΚΑΙ ΣΙΑ Ε", doy: "ΕΔΕΣΣΑΣ", email: "fiorabach@hotmail.com" },
    "998721309": { eponimia: "ΤΣΙΤΛΑΚΙΔΟΥ Μ ΚΑΙ ΣΙΑ Ο", doy: "ΕΔΕΣΣΑΣ", email: "maria_tsitlakidou@hotmail.com" },
    "999228431": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΗΛΙΑ ΧΑΛΙΓΙΑΝΝΗ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6936632283", email: "iliaspharm@yahoo.com" },
    "999260690": { eponimia: "ΦΛΩΡΟΣ ΓΕΩΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "6944732173", email: "florospharmacy@yahoo.gr" },
    "999295989": { eponimia: "Α ΓΚΑΙΤΑΤΖΗΣ ΚΑΙ ΣΙΑ Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "gkaitatzisaggelos@yahoo.gr" },
    "999296071": { eponimia: "ΚΑΡΑΟΥΛΑΝΗ ΕΥΑΓΓΕΛΙΑ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "psiamanta@hotmail.com" },
    "999387480": { eponimia: "ΜΗΤΚΑΣ ΑΔΑΜΑΝΤΙΟΣ ΚΑΙ ΣΙΑ Ε", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6945411342", email: "farmakiomitkas@gmail.com" },
    "107015615": { eponimia: "ΜΑΡΚΟΥ ΜΑΡΙΑ ΓΕΩΡΓΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6974066979", email: "markoummp@gmail.com" },
    "127276450": { eponimia: "ΚΙΟΣΗΣ ΙΩΑΝΝΗΣ ΑΘΑΝΑΣΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6976613377", email: "igiannis@yahoo.com" }
};

// --- 3. ΠΡΟΪΟΝΤΑ & ΤΙΜΕΣ ---
const products = [
    { name: 'Z-DermAspis', price: 5.03 },
    { name: 'Zplast Total Repair 50ml', price: 14.60 },
    { name: 'Zplast Total Repair 100ml', price: 26.80 },
    { name: 'ZplastCream 40gr', price: 12.30 },
    { name: 'ZplastCream 100gr', price: 24.79 },
    { name: 'Bruise Off Bite Out & Pain Free cream 50ml', price: 5.60 },
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

// --- 3. ΠΛΗΡΕΣ ΕΠΙΣΤΗΜΟΝΙΚΟ COMPENDIUM ---
const productDetails = {
    "Zplast Total Repair": {
        moa: [
            { ing: "Centella Asiatica", moa: "<strong>SMAD Signaling:</strong> Ενεργοποιεί τη βιοσύνθεση Κολλαγόνου Ι & III για δομική αναδόμηση." },
            { ing: "Υαλουρονικό Multi-MW", moa: "<strong>ECM Scaffold:</strong> Δημιουργεί το ικρίωμα για τη μετανάστευση των ινοβλαστών." },
            { ing: "Ιπποφαές (Ω-7)", moa: "Επιταχύνει την επιθηλιοποίηση μέσω λιπιδικής σταθεροποίησης των κυτταρικών μεμβρανών." }
        ],
        cases: "Χειρουργικές τομές, εγκαύματα 2ου βαθμού, διαβητικά έλκη, βαθιές ραγάδες, ουλές ακμής.",
        rationale: "Κλινική επούλωση σε επίπεδο χορίου. Όχι απλή ενυδάτωση, αλλά ολική ανακατασκευή ιστού.",
        biblio: ["Bylka W (2013). PubMed: 24386321", "Wohlrab J (2018)."],
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zplast%20Total%20Repair.jpeg?raw=true"
    },
    "ZplastCream": {
        moa: [
            { ing: "Μαστίχα & Μέλι", moa: "<strong>TGF-β Induction:</strong> Φυσική διέγερση επούλωσης και αντισηπτική δράση." },
            { ing: "Καλαμίνη", moa: "<strong>Anti-pruritic:</strong> Άμεση καταστολή κνησμού και δερματικού ερεθισμού." },
            { ing: "Σπαθόλαδο", moa: "Υπερφορίνη για ισχυρή καταπραϋντική και αντιφλεγμονώδη δράση." }
        ],
        cases: "Συγκάματα βρεφών, ερεθισμοί από ήλιο, πρόληψη κατακλίσεων, καθημερινή προστασία φραγμού.",
        rationale: "100% φυτική ασπίδα προστασίας για το ευαίσθητο και ταλαιπωρημένο δέρμα.",
        biblio: ["Paraschos S (2012). PubMed: 17544358"]
    },
    "Bruise Off": {
        moa: [
            { ing: "Arnica (Helenalin)", moa: "<strong>NF-κB Inhibition:</strong> Διακόπτει τη φλεγμονή στη ρίζα της, αναστέλλοντας τις κυτταροκίνες." },
            { ing: "Urea", moa: "<strong>Penetration Enhancer:</strong> Διασπά τους δεσμούς κερατίνης για να φτάσουν τα ενεργά συστατικά στο αίμα." }
        ],
        cases: "Μελανιές μετά από Fillers/Botox, αιματώματα, οιδήματα από χτυπήματα, μυϊκές θλάσεις.",
        rationale: "Μοριακή αποσυμφόρηση του ιστού. Επιταχύνει τη μεταβολική απορρόφηση του εγκλωβισμένου αίματος.",
        biblio: ["Lyss G (1998). PubMed: 9531637"]
    },
    "Z-boost": {
        moa: [
            { ing: "Zinc & Gingerols", moa: "<strong>Viral Replication Inhibition:</strong> Αναστολή της RNA πολυμεράσης των ιών." },
            { ing: "NAC", moa: "<strong>GSH Precursor:</strong> Άμεσο υπόστρωμα για τη σύνθεση Γλουταθειόνης (Redox)." }
        ],
        cases: "Πρόληψη γρίπης, ανάρρωση από ιώσεις, οξειδωτικό στρες, υποστήριξη καπνιστών.",
        rationale: "Ολοκληρωμένη θωράκιση χωρίς έκδοχα που επιβαρύνουν τον οργανισμό.",
        biblio: ["Hemilä H (2017). PubMed: 28515951"]
    },
    "Hydralia Face cream": {
        moa: [
            { ing: "LMW Hyaluronic", moa: "Διεισδύει στον χόριο ιστό, συγκρατώντας 1000 φορές το βάρος του σε νερό." },
            { ing: "Jojoba Oil", moa: "Βιομιμητικό έλαιο που αποκαθιστά τη λιπιδική στοιβάδα του φραγμού." }
        ],
        cases: "Αφυδατωμένη επιδερμίδα, μετά από χημικά peeling, θαμπή όψη, Plumping effect.",
        rationale: "Ρύθμιση της υδροδυναμικής του δέρματος για άμεση λάμψη και σφριγηλότητα.",
        biblio: ["Bukhari SNA (2018). PubMed: 30287358"]
    },
    "Revitacell Plus": {
        moa: [
            { ing: "Mastic Oil", moa: "<strong>Klotho Gene Induction:</strong> Ενεργοποιεί την πρωτεΐνη της νεότητας στους ινοβλάστες." },
            { ing: "Punicic Acid (Ω-5)", moa: "Ισχυρό αντιοξειδωτικό που προστατεύει το κολλαγόνο από τη φωτογήρανση." }
        ],
        cases: "Ώριμα δέρματα, απώλεια οβάλ, βαθιές ρυτίδες, επιγενετική αντιγήρανση.",
        rationale: "Επαναπρογραμματισμός της κυτταρικής λειτουργίας για αναστροφή των σημαδιών του χρόνου.",
        biblio: ["Lall N (2020). PubMed: 32415148"]
    },
    "NUTRI MX PROBIOTIC": {
        moa: [
            { ing: "18 Strains (10B CFU)", moa: "<strong>Competitive Exclusion:</strong> Αποκλεισμός παθογόνων και αποκατάσταση εντερικού φραγμού." },
            { ing: "Butyrate Production", moa: "Παραγωγή SCFAs για τη θρέψη του παχέος εντέρου." }
        ],
        cases: "Λήψη αντιβίωσης, IBS (Ευερέθιστο Έντερο), φουσκώματα, ενίσχυση ανοσοποιητικού.",
        rationale: "Το πληρέστερο φάσμα στελεχών για την ολική επαναφορά του μικροβιώματος.",
        biblio: ["Karamanolis GP (2019). Clinical Review."]
    },
    "NUTRI MX JOINT": {
        moa: [
            { ing: "Collagen II & MSM", moa: "<strong>Chondroprotection:</strong> Παροχή δομικών υλικών για την ECM του χόνδρου." },
            { ing: "Glucosamine/Chondroitin", moa: "<strong>GAG Precursors:</strong> Διέγερση σύνθεσης αγρεκάνης." }
        ],
        cases: "Οστεοαρθρίτιδα, αθλητές, δυσκαμψία αρθρώσεων, αποκατάσταση τραυματισμών.",
        rationale: "Δομική υποστήριξη και λίπανση των αρθρώσεων για βελτίωση της κινητικότητας."
    }
};

// --- 4. INITIALIZATION & ERP LOGIC ---
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector('#product-table tbody');
    const btnContainer = document.getElementById('productButtonsContainer');

    products.forEach((p, index) => {
        const btn = document.createElement('button');
        btn.className = 'product-btn';
        btn.innerHTML = `<strong>${p.name}</strong>`;
        btn.onclick = () => showInfo(p.name, index);
        btnContainer.appendChild(btn);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p.name}</td>
            <td>${p.price.toFixed(2)}</td>
            <td><input type="number" id="qty-${index}" min="0" oninput="updateTotals()" value="0" style="width:65px;"></td>
            <td><span id="gift-${index}">0</span></td>
            <td id="eff-${index}">${p.price.toFixed(2)}</td>
            <td id="total-${index}">0.00</td>`;
        tableBody.appendChild(row);
    });

    document.getElementById('afm').addEventListener('input', function() {
        const c = knownCustomers[this.value.trim()];
        if (c) {
            document.getElementById('eponimia').value = c.eponimia;
            document.getElementById('doy').value = c.doy || "ΕΔΕΣΣΑΣ";
            document.getElementById('mobile').value = c.mobile || "";
            document.getElementById('phone').value = c.phone || "";
            document.getElementById('email').value = c.email || "";
        }
    });
    updateTotals();
});

function calculateGifts(q) {
    if (q >= 24) return 6; if (q >= 18) return 3; if (q >= 9) return 1; return 0;
}

function calculateVolumeDisc(net) {
    if (net < 300) return 0;
    if (net < 400) return 3;
    if (net < 500) return 4;
    return Math.min(5 + Math.floor((net - 500) / 100), 10);
}

function updateTotals() { 
    let initialNet = 0;
    let totalItems = 0;
    let totalGifts = 0;

    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        let g = calculateGifts(q);
        const line = q * p.price;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = line.toFixed(2) + " €";
        document.getElementById(`eff-${i}`).textContent = q > 0 ? (line/(q+g)).toFixed(2) : p.price.toFixed(2);
        initialNet += line;
        totalItems += q;
        totalGifts += g;
    });

    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const volPerc = calculateVolumeDisc(initialNet);
    const volVal = initialNet * (volPerc / 100);
    const cashVal = isCash ? (initialNet - volVal) * 0.02 : 0;
    const finalNet = initialNet - volVal - cashVal;

    document.getElementById("net-value").textContent = initialNet.toFixed(2) + " €";
    document.getElementById("disc-perc").textContent = volPerc;
    document.getElementById("disc-val").textContent = volVal.toFixed(2) + " €";
    document.getElementById("cash-disc-val").textContent = cashVal.toFixed(2) + " €";
    document.getElementById("final-net").textContent = finalNet.toFixed(2) + " €";
    document.getElementById("vat-value").textContent = (finalNet * 0.24).toFixed(2) + " €";
    document.getElementById("final-total").textContent = (finalNet * 1.24).toFixed(2) + " €";

    const analysis = document.getElementById("dynamicAnalysis");
    if(initialNet > 0) {
        analysis.innerHTML = `
            <p>🎁 <strong>Συνολικά Δώρα:</strong> ${totalGifts} τεμ.</p>
            <p>📉 <strong>Κέρδος από Εκπτώσεις:</strong> ${(volVal + cashVal).toFixed(2)} €</p>
            <p style="color:#34d399; font-weight:800; font-size:1.2rem;">🚀 Καθαρό Όφελος: ~${(volVal + cashVal + (totalGifts * 8)).toFixed(2)} €</p>
        `;
    } else {
        analysis.innerHTML = "Ξεκινήστε την παραγγελία για ανάλυση κέρδους...";
    }
}

function showInfo(name, index) {
    let lookup = name.includes("Total Repair") ? "Zplast Total Repair" : (name.includes("Cream") ? "ZplastCream" : (name.includes("Bruise Off") ? "Bruise Off" : (name.includes("Z-boost") ? "Z-boost" : (name.includes("Probiotic") ? "NUTRI MX PROBIOTIC" : (name.includes("Hydralia") ? "Hydralia Face cream" : (name.includes("Revitacell") ? "Revitacell Plus" : (name.includes("Joint") ? "NUTRI MX JOINT" : name)))))));
    const p = productDetails[lookup] || { moa: [], cases: "—", rationale: "—" };
    const modal = document.getElementById('productModal');
    let imgPath = p.img || `images/${name}.jpg`;

    modal.innerHTML = `
        <div class="modal-content">
            <span style="position:absolute;top:20px;right:25px;cursor:pointer;font-size:2.5rem;" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
            <div style="display:flex; align-items:center; gap:25px; margin-bottom:20px;">
                <img src="${imgPath}" onerror="this.src='https://via.placeholder.com/130?text=ZARKOLIA'" style="width:130px; border-radius:15px; border:1px solid #eee; background:#fff;">
                <div>
                    <h2 style="margin:0; color:var(--emerald-dark);">${name}</h2>
                    <p style="color:var(--slate-light); font-weight:700; margin-top:5px;">HCP Scientific Compendium</p>
                </div>
            </div>
            
            <h4 style="margin-bottom:10px; color:var(--slate);">🧬 Μοριακός Μηχανισμός Δράσης (MoA)</h4>
            ${hcpTable(p.moa || [])}

            <div style="background:#f8fafc; padding:20px; border-radius:15px; margin:20px 0; border:1px solid #eef2f6;">
                <p><strong>📍 Ενδείξεις Φαρμακείου:</strong> ${p.cases}</p>
                <p><strong>💡 Γιατί λειτουργεί:</strong> ${p.rationale}</p>
            </div>

            ${p.biblio ? biblioList(p.biblio) : ""}

            <div style="margin-top:25px; padding:20px; border:2px solid var(--emerald-light); border-radius:18px; display:flex; justify-content:space-between; align-items:center; background:var(--emerald-light);">
                <strong>Προσθήκη στην παραγγελία:</strong>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="number" id="modal-qty" value="${document.getElementById(`qty-${index}`).value}" style="width:70px; padding:12px; border-radius:10px; border:1px solid #ccc;">
                    <button onclick="updateFromModal(${index})" style="background:var(--emerald-dark); color:#fff; border:none; padding:12px 25px; border-radius:10px; font-weight:800; cursor:pointer;">ΕΝΗΜΕΡΩΣΗ</button>
                </div>
            </div>
        </div>`;
    modal.style.display = 'block';
}

function updateFromModal(index) {
    document.getElementById(`qty-${index}`).value = document.getElementById('modal-qty').value;
    updateTotals();
    document.getElementById('productModal').style.display = 'none';
}

async function processOrder() {
    const epo = document.getElementById("eponimia").value;
    const afm = document.getElementById("afm").value;
    if(!epo) { alert("Επιλέξτε Πελάτη!"); return; }

    let itemsForSheet = [];
    let emailItems = "";
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        const g = document.getElementById(`gift-${i}`).textContent;
        if(q > 0) {
            itemsForSheet.push(`${p.name} (${q})`);
            emailItems += `* ${p.name} | Τεμ: ${q} | Δώρα: ${g}%0D%0A`;
        }
    });

    const data = { 
        customer: epo, afm: afm, doy: document.getElementById("doy").value,
        mobile: document.getElementById("mobile").value, phone: document.getElementById("phone").value, email: document.getElementById("email").value,
        products: itemsForSheet.join(", "), netValue: document.getElementById("final-net").textContent, 
        vat: document.getElementById("vat-value").textContent, total: document.getElementById("final-total").textContent, 
        payment: Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "—",
        remarks: document.getElementById("remarks").value 
    };

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true; submitBtn.textContent = "Syncing Cloud...";

    try {
        await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
        alert("ΕΠΙΤΥΧΙΑ! Η παραγγελία καταχωρήθηκε και η βάση ενημερώθηκε.");
        
        const body = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ%0D%0A%0D%0AΠΕΛΑΤΗΣ: ${epo}%0D%0A%0D%0AΠΡΟΪΟΝΤΑ:%0D%0A${emailItems}%0D%0A------------------------%0D%0AΑΝΑΛΥΣΗ ΕΚΠΤΩΣΕΩΝ:%0D%0AΑρχική: ${document.getElementById("net-value").textContent}%0D%0AΈκπτωση Τζίρου: ${document.getElementById("disc-perc").textContent}% (-${document.getElementById("disc-val").textContent})%0D%0AΈκπτωση Μετρητών: 2% (-${document.getElementById("cash-disc-val").textContent})%0D%0AΚΑΘΑΡΗ ΑΞΙΑ: ${document.getElementById("final-net").textContent}%0D%0AΦΠΑ (24%): ${document.getElementById("vat-value").textContent}%0D%0A------------------------%0D%0AΤΕΛΙΚΟ ΠΟΣΟ: ${document.getElementById("final-total").textContent}%0D%0A------------------------%0D%0AΤΡΑΠΕΖΕΣ:%0D%0AEUROBANK: GR0302607310000970100732761%0D%0AΠΕΙΡΑΙΩΣ: GR8901722520005252016160277`;
        
        window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=Order_${encodeURIComponent(epo)}&body=${body}`;
    } catch(e) { alert("Σφάλμα σύνδεσης Cloud."); }
    finally { submitBtn.disabled = false; submitBtn.textContent = "Ολοκλήρωση & Αποθήκευση"; }
}

function clearForm() { if(confirm("Εκκαθάριση φόρμας;")) location.reload(); }
