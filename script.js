// ============================================================
// ZARKOLIA HEALTH - ULTIMATE SCIENTIFIC ERP & LIVE CRM v21.0
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzhRjz4gwRHrsM-G7NIdf03fZMW4QfVvX8CFJn7DIMnkjZ9IxB-nEOe4g3xQ2fDaFHVkQ/exec";

// --- 1. HELPERS ΓΙΑ ΕΠΙΣΤΗΜΟΝΙΚΗ ΤΕΚΜΗΡΙΩΣΗ ---
function hcpTable(rows) {
    return `<table class="hcp-table"><thead><tr style="background:#f9f9f9;"><th>Συστατικό</th><th>Μοριακός Μηχανισμός (MoA)</th></tr></thead><tbody>${rows.map(r => `<tr><td><strong>${r.ing}</strong></td><td>${r.moa}</td></tr>`).join("")}</tbody></table>`;
}

function biblioList(items) {
    return `<div style="margin-top:20px; padding:15px; background:#f0f9ff; border-radius:10px; border-left:4px solid #0284c7;">
        <h4 style="margin:0 0 10px 0;">Επιστημονική Βιβλιογραφία (HCP Only)</h4>
        <ul style="margin:0; padding-left:18px; font-size:0.85rem;">${items.map(i => `<li style="margin-bottom:5px;">${i}</li>`).join("")}</ul>
    </div>`;
}

// --- 2. ΠΛΗΡΗΣ ΒΑΣΗ ΠΕΛΑΤΩΝ (88 ΕΓΓΡΑΦΕΣ ΓΙΑ OFFLINE LOOKUP) ---
const knownCustomers = {
    "999746768": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΝΔΡΕΑΔΟΥ ΕΥΑΓΓΕΛΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "6936515332", phone: "2384021001", email: "andreadoupharmacy@yahoo.com" },
    "025305198": { eponimia: "ΒΑΡΕΛΑΣ ΜΙΧΑΗΛ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6937457161", email: "mixalisvarelas@gmail.com" },
    "999295953": { eponimia: "Συστεγασμένα φαρμακεία Αλ.Γκικας- Αν.Γκικα Ο.Ε", doy: "Γιαννιτσών", mobile: "6977598429", email: "anagkika@gmail.com" },
    "107015615": { eponimia: "ΜΑΡΚΟΥ ΜΑΡΙΑ ΓΕΩΡΓΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6974066979", email: "markoummp@gmail.com" },
    "127276450": { eponimia: "ΚΙΟΣΗΣ ΙΩΑΝΝΗΣ ΑΘΑΝΑΣΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6976613377", email: "igiannis@yahoo.com" },
    "028058883": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΗΣ ΛΑΖΑΡΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", email: "trilazar@otenet.gr" },
    "030796217": { eponimia: "ΚΥΡΙΑΚΟΥ ΑΓΛΑΙΑ ΝΙΚΟΛΑΟ", doy: "ΝΕΩΝ ΜΟΥΔΑΝΙΩΝ", phone: "2399021663", email: "kyriakou.agla@gmail.com" },
    "041630585": { eponimia: "ΓΕΡΟΝΤΟΠΟΥΛΟΣ ΝΙΚΗΦΟΡΟΣ ΘΕΟΦΙΛΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", phone: "2551028764", email: "nikigero1@hotmail.com" },
    "042643289": { eponimia: "ΜΑΙΝΟΥ ΑΛΕΞΑΝΔΡΑ ΝΙΚΟΛΑΟ", doy: "ΕΔΕΣΣΑΣ", email: "mainoualex@gmail.com" },
    "043720722": { eponimia: "ΚΑΡΑΔΗΜΟΥ ΚΩΝΣΤΑΝΤΙΝΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", email: "karad12@otenet.gr" },
    "047359704": { eponimia: "ΦΑΡΑΚΛΙΩΤΗΣ ΔΗΜΗΤΡΙΟΣ ΘΩΜΑ", doy: "ΧΑΛΚΙΔΑΣ", email: "farmakeiokamares@gmail.com" },
    "047862819": { eponimia: "ΠΑΠΑΔΑΚΗΣ ΝΙΚΟΛΑΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΧΑΛΚΙΔΑΣ", email: "nikotero@gmail.com" },
    "056068437": { eponimia: "ΓΑΝΑ ΒΑΣΙΛΙΚΗ ΕΥΑΓΓΕΛΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "vassogana@gmail.com" },
    "058406703": { eponimia: "ΧΑΤΖΗΣΩΤΗΡΙΟΥ ΠΕΤΡΟΣ ΣΤΕΡΓΙΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6906133900", email: "chazpe@gmail.com" },
    "061835127": { eponimia: "ΓΙΟΥΡΤΣΟΓΛΟΥ ΧΡΗΣΤΟΣ ΕΥΑΓΓΕΛΟ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6945188398", email: "giourtsoglou@yahoo.gr" },
    "065747063": { eponimia: "ΠΑΠΑΙΩΑΝΝΟΥ ΕΥΘΥΜΙΑ ΑΝΤΩΝΙΟ", doy: "ΕΔΕΣΣΑΣ", email: "papaioannoue415@gmail.com" },
    "079214571": { eponimia: "ΜΑΝΔΑΛΤΣΗ ΑΙΚΑΤΕΡΙΝΗ ΔΗΜΗΤΡΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "farmakiomandaltsi@gmail.com" },
    "081095923": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΑΔΑΜΙΔΗ Α ΑΔΑΜΙΔΟΥ Μ Ο.Ε", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", email: "adamidou.mar@gmail.com" },
    "082988981": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΕΥΑΓΓΕΛΟΣ ΚΥΡΙΑΚΙΔΗΣ ΕΜΜΑΝΟΥ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "vagemm@gmail.com" },
    "084186015": { eponimia: "PROJECT ΚΑΣΑΠΑΚΗΣ Θ & ΣΙΑ Ο.Ε", doy: "Η ΘΕΣΣΑΛΟΝΙΚΗΣ", email: "info@projectk.gr" },
    "095141629": { eponimia: "ΔΟΜΙΚΗ Π ΠΑΥΛΙΔΗΣ Α.Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "g.apostolidis@domiki-pavlides.gr" },
    "120774602": { eponimia: "ΚΙΤΚΑ ΑΝΑΣΤΑΣΙΑ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "a_kitka@yahoo.gr" },
    "121428438": { eponimia: "ΛΑΠΠΑ ΑΓΓΕΛΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "ang.lappa@gmail.com" },
    "121907683": { eponimia: "ΚΟΡΥΦΙΔΟΥ ΑΝΤΩΝΙΑ ΙΩΑΝΝΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "toniakory@hotmail.com" },
    "121949072": { eponimia: "ΚΟΡΥΦΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ ΙΩΑΝΝΗ", doy: "Δ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "6943106207", email: "aristotelous.pharmacy@gmail.com" },
    "123981590": { eponimia: "ΠΑΠΑΓΕΩΡΓΙΟΥ ΜΑΡΙΑ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "alexmeri620@gmail.com" },
    "127263915": { eponimia: "ΣΙΣΚΟΥ ΜΑΡΙΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", email: "m.siskou@yahoo.gr" },
    "128430492": { eponimia: "ΑΓΤΖΙΔΗΣ ΑΝΔΡΕΑΣ ΛΑΖΑΡΟ", doy: "ΚΙΛΚΙΣ", email: "andreasagtzidis@gmail.com" },
    "129166674": { eponimia: "ΛΑΠΙΧΟΥ ΚΑΛΛΙΟΠΗ", doy: "ΓΙΑΝΝΙΤΣΑ", email: "popilapi1976@gmail.com" },
    "133810643": { eponimia: "ΧΥΤΑ ΕΛΕΝΗ ΔΗΜΗΤΡΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "elchyt@hotmqil.com" },
    "134072283": { eponimia: "ΠΑΡΑΣΚΕΥΟΠΟΥΛΟΣ ΙΩΑΝΝΗΣ ΠΑΣΧΑΛΗ", doy: "ΟΡΕΣΤΙΑΔΑΣ", email: "paraskevopoulosioannis@hotmail.gr" },
    "134811951": { eponimia: "ΓΙΟΥΤΙΚΑ ΕΛΕΥΘΕΡΙΑ ΜΑΡΙΑ ΠΑΝΑΓΙΩΤΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "farmgioutikaelma@gmail.com" },
    "134825144": { eponimia: "ΚΟΥΤΣΟΚΩΣΤΑ ΙΩΑΝΝΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "joannamedicine@gmail.com" },
    "134842104": { eponimia: "ΒΑΚΙΡΤΖΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΑΝΤΩΝΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "vakostas@outlook.com" },
    "134848587": { eponimia: "ΔΟΥΛΚΕΡΙΔΗΣ ΚΟΣΜΑΣ ΠΑΝΑΓΙΩΤΗ", doy: "ΕΔΕΣΣΑΣ", email: "kdoulker@hotmail.com" },
    "134887503": { eponimia: "ΚΑΠΝΑ ΖΩΗ ΘΕΟΔΩΡΟ", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", email: "zoi526@hotmail.com" },
    "135001952": { eponimia: "ΜΟΥΛΑ ΕΛΕΥΘΕΡΙΑ ΠΑΝΤΕΛΗ", doy: "ΕΔΕΣΣΑΣ", email: "ele.moula@gmail.com" },
    "137239505": { eponimia: "ΔΑΜΙΑΝΑΚΗΣ ΣΤΑΥΡΟΣ ΓΕΩΡΓΙΟ", doy: "ΗΡΑΚΛΕΙΟΥ", email: "depassagepharmacy@gmail.com" },
    "140820466": { eponimia: "ΤΣΟΝΟΓΛΟΥ ΔΕΣΠΟΙΝΑ ΔΙΟΝΥΣΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "despoinarsonoglou@gmail.com" },
    "141953562": { eponimia: "ΖΑΧΑΡΙΑΔΟΥ ΓΕΩΡΓΙΑ ΜΙΧΑΗΛ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "gzahariadou@gmail.com" },
    "141962417": { eponimia: "ΖΕΡΒΟΥ ΦΩΤΕΙΝΗ ΘΕΟΔΩΡΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "fotzervou@gmail.com" },
    "141967020": { eponimia: "ΣΔΡΑΥΚΑΚΗΣ ΒΑΣΙΛΕΙΟΣ ΔΗΜΗΤΡΙΟ", doy: "ΕΔΕΣΣΑΣ", email: "vsdrafk@gmail.com" },
    "142265310": { eponimia: "ΣΑΠΑΚΟΛΗ ΕΥΑΓΓΕΛΙΑ ΠΕΤΡΟ", doy: "ΕΔΕΣΣΑΣ", email: "sapakoli@hotmail.gr" },
    "144429978": { eponimia: "ΕΥΤΥΧΙΔΟΥ ΑΝΑΣΤΑΣΙΑ ΓΕΩΡΓΙΟ", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", email: "anastasia.e1988@gmail.com" },
    "144906695": { eponimia: "ΔΗΜΗΤΡΙΑΔΟΥ ΑΛΕΞΑΝΔΡΑ ΙΩΑΝΝΗ", doy: "ΕΔΕΣΣΑΣ", email: "alex+dim.0807@gmail.com" },
    "150095708": { eponimia: "ΜΑΙΝΟΥ ΑΙΚΑΤΕΡΙΝΗ ΧΡΗΣΤΟ", doy: "ΕΔΕΣΣΑΣ", email: "katiamainou@yahoo.com" },
    "151161020": { eponimia: "ΒΕΧΤΣΑΛΗΣ ΣΩΤΗΡΙΟΣ ΧΡΗΣΤΟ", doy: "ΕΔΕΣΣΑΣ", email: "sotirisvechtsalis@hotmail.com" },
    "151162495": { eponimia: "ΜΑΝΘΟΥ ΧΡΗΣΤΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", email: "christosmanthougr@gmail.com" },
    "152502387": { eponimia: "ΤΖΙΝΕΒΗ ΑΛΙΚΗ ΑΝΔΡΟΝΙΚΗ ΠΑΝΑΓΙΩΤΗ", doy: "ΝΕΩΝ ΜΟΥΔΑΝΙΩΝ", email: "alicetzi28@gmail.com" },
    "153360643": { eponimia: "ΚΑΖΑΚΟΥ ΚΩΝΣΤΑΝΤΙΝΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", email: "kazakoukonstantina@gmail.com" },
    "158040138": { eponimia: "ΠΑΠΑΟΡΦΑΝΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΑΝΤΩΝΙΟ", doy: "ΙΖ ΑΘΗΝΩΝ", email: "papamymarket@gmail.com" },
    "159693610": { eponimia: "ΧΡΥΣΟΣΤΟΜΙΔΗΣ ΑΝΤΩΝΙΟΣ ΠΑΡΑΣΚΕΥΑ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "a.chrysostomidis@hotmail.com" },
    "165645258": { eponimia: "ΦΑΝΤΙΔΟΥ ΕΙΡΗΝΗ ΛΑΖΑΡΟ", doy: "ΕΔΕΣΣΑΣ", email: "fantidou.pharmacy@gmail.com" },
    "169699055": { eponimia: "ΧΕΛΗ ΑΝΑΣΤΑΣΙΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6988820879", email: "anasta.cheli10@gmail.com" },
    "300639167": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΟΥ ΕΛΕΝΗ ΑΡΙΣΤΕΙΔΗ", doy: "ΟΡΕΣΤΙΑΔΑΣ", email: "eleni.triantafillidou@gmail.com" },
    "800339648": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΖΙΟΥΤΑ ΓΕΩΡΓΙΑ ΧΡΙΣΤΙΑΝΑ ΚΑΙ ΣΙΑ Ο", doy: "ΚΙΛΚΙΣ", email: "zioutaxristiana@hotmail.gr" },
    "800348196": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΥΓΕΡΙΝΟΥ Θ ΚΑΙ ΣΙΑ Ο", doy: "ΣΕΡΡΩΝ", email: "theoavgerinos90@gmail.com" },
    "800367008": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΘΕΟΔΟΣΙΟΣ ΑΔΑΜΙΔΗΣ ΜΑΡΘΑ ΑΔΑΜΙΔΟΥ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "adamidis86@gmail.com" },
    "800414167": { eponimia: "ΜΑΧΜΟΥΡΙΔΟΥ ΚΑΙ ΣΙΑ Ο", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6944581887", email: "www.maxmouridou@hotmail.gr" },
    "800472889": { eponimia: "ΦΑΡΜΑΚΕΙΑ ΣΠΥΡΙΔΗΣ Δ ΒΑΛΑΣΙΔΟΥ ΙΣ Ο", doy: "ΚΙΛΚΙΣ", email: "dimitris_sp@yahoo.com" },
    "800586973": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΦΑΡΜΑΚΗΣ ΙΩΑΝΝΗΣ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "farmakisg21@hotmail.gr" },
    "800616945": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΨΥΧΟΓΥΟΥ ΑΙΚΑΤΕΡΙΝΗ Ο.Ε", doy: "ΕΔΕΣΣΑΣ", email: "anaspsi@gmail.com" },
    "800699181": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ Κ ΓΕΩΡΓΙΑΔΟΥ ΚΑΙ Κ ΚΑΤΣΙΑΝΟΣ Ο", doy: "ΚΙΛΚΙΣ", email: "katsianoskos@gmail.com" },
    "800732970": { eponimia: "ΦΡΟΥΤΑ ΜΟΥΤΣΟΓΙΑΝΝΗ", doy: "ΕΔΕΣΣΑΣ", email: "moutsogiannis23@gmail.com" },
    "800759157": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΧΡΗΣΤΟΥ ΠΕΛΑΓΙΑ Ο", doy: "ΕΔΕΣΣΑΣ", email: "orestis.sarigkiolis@gmail.com" },
    "800972362": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΤΟΠΟΥΖΙΔΗΣ Γ ΚΑΙ ΤΟΠΟΥΖΙΔΗΣ Κ Ο", doy: "ΚΙΛΚΙΣ", email: "e.topouzidou@yahoo.gr" },
    "801577292": { eponimia: "ΝΙΚΟΛΑΟΣ ΚΟΥΤΣΟΥΜΠΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΤΡΙΠΟΛΗΣ", email: "nickoskoutsou@gmail.com" },
    "802096212": { eponimia: "ΑΝΔΡΗ ΚΛΕΙΔΑΡΑ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", email: "andrykleidara@gmail.com" },
    "802196155": { eponimia: "HAPPY HIPPO Ε.Π.Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "eimaiohappyhippo@gmail.com" },
    "802244502": { eponimia: "ΣΦ ΕΛΕΝΗΣ ΜΑΡΙΑΣ ΝΙΚΟΛΑΙΔΟΥ-ΧΡΥΣΟΣΤΟΜΟΥ Ο", doy: "Ζ ΘΕΣΣΑΛΟΝΙΚΗΣ", email: "skroutzplus@outlook.com" },
    "802581242": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ Η ΔΗΜΟΚΑ Μ ΜΑΡΓΟΥΤΑ Ο", doy: "ΑΜΠΕΛΟΚΗΠΩΝ", email: "idpharmacy254@gmail.com" },
    "802644097": { eponimia: "ΣΥΣΤΕΓΑΖΟΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΕΥΑ ΚΟΤΙΔΟΥ Ο.Ε", doy: "ΕΔΕΣΣΑΣ", email: "evakotidou@gmail.com" },
    "802667861": { eponimia: "ΦΑΡΜΑΚΕΙΟ Α ΟΙΚΟΝΟΜΟΠΟΥΛΟΣ Ο", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", email: "ioannis.a.papadop@gmail.com" },
    "802741555": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΤΣΩΝΗ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", email: "tsonispharmacy@gmail.com" },
    "802744858": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΓΚΑΪΝΤΑΤΖΗΣ ΒΑΣΙΛΕΙΟΣ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", email: "gkaintatzi.pharmacy@gmail.com" },
    "996853821": { eponimia: "ΚΟΙΝΩΝΙΑ ΚΛΗΡΟΝΟΜΩΝ ΔΟΥΛΚΕΡΙΔΗ ΧΑΡΑΛΑΜΠΟ", doy: "ΕΔΕΣΣΑΣ", email: "farmakeio.skydra@gmail.com" },
    "997687603": { eponimia: "ΤΣΙΤΣΙΟΣ ΑΘΑΝΑΣΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", email: "pharmthanos@gmail.com" },
    "997688685": { eponimia: "ΣΦ ΚΑΛΟΥΔΗ ΚΩΝΣΤΑΝΤΙNIA Ο.Ε", doy: "ΚΟΜΟΤΗΝΗΣ", email: "stam1213zoum@gmail.com" },
    "997957423": { eponimia: "ΗΛΙΑΣ Θ ΚΑΤΡΗΣ Ε", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", email: "iliaskatrispharmacy@gmail.com" },
    "997961412": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΠΑΝΑΓΙΩΤΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ Ο", doy: "ΚΙΛΚΙΣ", email: "farmakeiofraggidou@gmail.com" },
    "997961880": { eponimia: "ΚΑΡΙΠΙΔΟΥ ΧΡΙΣΤΙΝΑ ΚΑΙ ΣΙΑ Ο", doy: "ΚΙΛΚΙΣ", email: "chriskaripidou@gmail.com" },
    "998392245": { eponimia: "ΦΑΡΜΑΚΑΠΟΘΗΚΕΣ ΑΙΓΑΙΟΥ ΣΥΦΑΚ Α.Ε", doy: "ΦΑΕ ΑΘΗΝΩΝ", email: "pharm.aigaiou@syfak.gr" },
    "998548940": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΧΤΣΗΣ ΣΤΕΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", email: "aachtsi@gmail.com" },
    "998720640": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΜΕΡΟΠΗΣ ΜΠΑΧΤΣΕΒΑΝΙΔΟΥ ΚΑΙ ΣΙΑ Ε", doy: "ΕΔΕΣΣΑΣ", email: "fiorabach@hotmail.com" },
    "998721309": { eponimia: "ΤΣΙΤΛΑΚΙΔΟΥ Μ ΚΑΙ ΣΙΑ Ο", doy: "ΕΔΕΣΣΑΣ", email: "maria_tsitlakidou@hotmail.com" },
    "999228431": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΗΛΙΑ ΧΑΛΙΓΙΑΝΝΗ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", email: "iliaspharm@yahoo.com" },
    "999260690": { eponimia: "ΦΛΩΡΟΣ ΓΕΩΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", email: "florospharmacy@yahoo.gr" },
    "999295989": { eponimia: "Α ΓΚΑΙΤΑΤΖΗΣ ΚΑΙ ΣΙΑ Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "gkaitatzisaggelos@yahoo.gr" },
    "999296071": { eponimia: "ΚΑΡΑΟΥΛΑΝΗ ΕΥΑΓΓΕΛΙΑ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "psiamanta@hotmail.com" },
    "999387480": { eponimia: "ΜΗΤΚΑΣ ΑΔΑΜΑΝΤΙΟΣ ΚΑΙ ΣΙΑ Ε", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", email: "farmakiomitkas@gmail.com" }
};

// --- 3. ΛΙΣΤΑ ΠΡΟΪΟΝΤΩΝ & ΤΙΜΩΝ ---
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

// --- 4. ΠΛΗΡΕΣ ΕΠΙΣΤΗΜΟΝΙΚΟ COMPENDIUM (HCP GRADE) ---
const productDetails = {
    "Z-DermAspis": {
        moa: [
            { ing: "Ethanol 70% v/v", moa: "Άμεση μετουσίωση πρωτεϊνών του καψιδίου των ιών και λύση της λιπιδικής μεμβράνης των βακτηρίων." },
            { ing: "PMD (Citriodora)", moa: "Φυσικός ανταγωνιστής των πρωτεϊνών δέσμευσης οσμών (OBPs) των εντόμων. Αποκλείει τον εντοπισμό του ξενιστή (άνθρωπος) για 12 ώρες." }
        ],
        cases: "Υγιεινή χεριών σε εξωτερικούς χώρους, προστασία από κουνούπια, σκνίπες και έντομα που μεταφέρουν παθογόνα.",
        rationale: "Μοναδικό σκεύασμα Dual-Action. Παρέχει ταυτόχρονη αντισηψία και απώθηση, εξοικονομώντας χρόνο και κόστος στον καταναλωτή.",
        biblio: ["Carroll SP (2006). PMD as a repellent. <a href='https://pubmed.ncbi.nlm.nih.gov/16492330/' target='_blank'>PubMed:16492330</a>"]
    },
    "Zplast Total Repair": {
        moa: [
            { ing: "Centella Asiatica", moa: "<strong>SMAD Signaling:</strong> Ενεργοποιεί το μονοπάτι TGF-β/SMAD, αυξάνοντας την παραγωγή Κολλαγόνου Ι & III και ελαστίνης κατά 40%." },
            { ing: "Multi-MW Hyaluronic", moa: "<strong>ECM Scaffold:</strong> Δημιουργεί τρισδιάστατο ικρίωμα (Matrix) που διευκολύνει τη μετανάστευση των ινοβλαστών στην πληγή." },
            { ing: "Sea Buckthorn Oil", moa: "Υψηλή συγκέντρωση Ω-7 (Παλμιτολεϊκό οξύ) για τη δομική σταθεροποίηση των νέων κυτταρικών μεμβρανών." }
        ],
        cases: "Μετεγχειρητικές τομές, διαβητικά έλκη, εγκαύματα 2ου βαθμού, βαθιές ραγάδες, ουλές ακμής, δερματικά μοσχεύματα.",
        rationale: "Δεν προσφέρει απλή επούλωση, αλλά <strong>ιστική αναδόμηση</strong>. Αποτρέπει το σχηματισμό υπερτροφικών ουσιών και χηλοειδών.",
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zplast%20Total%20Repair.jpeg?raw=true",
        biblio: ["Bylka W (2013). Centella in dermatology. <a href='https://pubmed.ncbi.nlm.nih.gov/24386321/' target='_blank'>PubMed:24386321</a>", "Wohlrab J (2018). Clinical review of wound healing."]
    },
    "ZplastCream": {
        moa: [
            { ing: "Μαστίχα Χίου & Μέλι", moa: "<strong>TGF-β Induction:</strong> Φυσική διέγερση της ανάπλασης και δημιουργία υγροσκοπικού αντισηπτικού φιλμ." },
            { ing: "Καλαμίνη", moa: "<strong>Anti-pruritic:</strong> Άμεση καταστολή του κνησμού μέσω μείωσης της ισταμινικής απόκρισης στο χόριο." },
            { ing: "Σπαθόλαδο", moa: "Υπερφορίνη & Υπερικίνη για ισχυρή καταστολή των ελεύθερων ριζών και αντιφλεγμονώδη δράση." }
        ],
        cases: "Συγκάματα βρεφών, ερεθισμοί μετά από έκθεση στον ήλιο, πρόληψη κατακλίσεων σε κλινήρεις ασθενείς, ξηροδερμία.",
        rationale: "100% φυτική ασπίδα προστασίας φραγμού. Ιδανικό για καθημερινή χρήση σε ευαίσθητα δέρματα (παιδιατρική/γηριατρική).",
        biblio: ["Paraschos S (2012). Mastic oil review. <a href='https://pubmed.ncbi.nlm.nih.gov/17544358/' target='_blank'>PubMed:17544358</a>"]
    },
    "Bruise Off": {
        moa: [
            { ing: "Arnica (Helenalin)", moa: "<strong>NF-κB Inhibition:</strong> Διακόπτει τη φλεγμονή στη ρίζα της, αναστέλλοντας τη μεταγραφή προ-φλεγμονωδών κυτταροκινών (IL-1, TNF-α)." },
            { ing: "Urea (Ουρία)", moa: "<strong>Penetration Enhancer:</strong> Διασπά τους δεσμούς κερατίνης, επιτρέποντας στα δραστικά συστατικά να φτάσουν άμεσα στο αιμάτωμα." },
            { ing: "Carvacrol", moa: "Ενεργοποιεί τους TRPV1 υποδοχείς προκαλώντας τοπική υπεραιμία για ταχύτερη απορρόφηση του οιδήματος." }
        ],
        cases: "Μελανιές μετά από Fillers, Botox ή Μεσοθεραπεία, μετατραυματικά αιματώματα, οιδήματα, μυϊκοί πόνοι.",
        rationale: "Η Helenalin είναι το πιο ισχυρό φυσικό αντιφλεγμονώδες. Επιταχύνει τον μεταβολισμό του αίματος στον ιστό κατά 3 φορές.",
        biblio: ["Lyss G (1998). Helenalin mechanism. <a href='https://pubmed.ncbi.nlm.nih.gov/9531637/' target='_blank'>PubMed:9531637</a>"]
    },
    "Z-boost": {
        moa: [
            { ing: "Zinc (Ψευδάργυρος)", moa: "Άμεση αναστολή της <strong>RNA πολυμεράσης</strong>, εμποδίζοντας τον πολλαπλασιασμό των ιών στο ρινοφάρυγγα." },
            { ing: "NAC (N-Acetyl-Cysteine)", moa: "<strong>GSH Precursor:</strong> Παρέχει το αμινοξύ κυστεΐνη για τη σύνθεση της Γλουταθειόνης, του ισχυρότερου ενδογενούς αντιοξειδωτικού." },
            { ing: "CoQ10 & Gingerols", moa: "Ενίσχυση της μιτοχονδριακής παραγωγής ATP και διπλή αναστολή των μονοπατιών COX-2 και 5-LOX." }
        ],
        cases: "Πρόληψη γρίπης/ιώσεων, ανάρρωση από Covid-19, οξειδωτικό στρες, υποστήριξη πνευμονικής λειτουργίας σε καπνιστές.",
        rationale: "Ολιστική θωράκιση χωρίς έκδοχα (sugar-free, gluten-free). Προσεγγίζει το ανοσοποιητικό από το επίπεδο του DNA και της ενέργειας.",
        biblio: ["Hemilä H (2017). Zinc and Colds. <a href='https://pubmed.ncbi.nlm.nih.gov/28515951/' target='_blank'>PubMed:28515951</a>"]
    },
    "Hydralia Face cream": {
        moa: [
            { ing: "LMW Hyaluronic Acid", moa: "Χαμηλού μοριακού βάρους υαλουρονικό που διεισδύει στη βασική στοιβάδα, συγκρατώντας την υγρασία στον χόριο ιστό." },
            { ing: "Jojoba Oil", moa: "Βιομιμητικά λιπίδια που αναπληρώνουν το σμήγμα, μειώνοντας τη διαδερμική απώλεια ύδατος (TEWL)." }
        ],
        cases: "Αφυδατωμένο δέρμα, θαμπή όψη, Plumping Effect (γέμισμα λεπτών γραμμών), μετά από δερματολογικά peelings.",
        rationale: "Ρυθμίζει την υδροδυναμική ισορροπία της επιδερμίδας για άμεση οπτική βελτίωση και βαθιά θρέψη.",
        biblio: ["Bukhari SNA (2018). HA Review. <a href='https://pubmed.ncbi.nlm.nih.gov/30287358/' target='_blank'>PubMed:30287358</a>"]
    },
    "Revitacell Plus": {
        moa: [
            { ing: "Mastic Oil", moa: "<strong>Klotho Gene Induction:</strong> Ενεργοποιεί το γονίδιο Klotho (πρωτεΐνη μακροζωίας), αυξάνοντας τη βιωσιμότητα των ινοβλαστών." },
            { ing: "Ω-5 (Punicic Acid)", moa: "Προστατεύει το κολλαγόνο από την αποδόμηση των μεταλλοπρωτεϊνασών (MMP-1)." }
        ],
        cases: "Ώριμο δέρμα (45+), απώλεια ελαστικότητας, φωτογήρανση, ανάγκη για επιγενετική αντιγήρανση.",
        rationale: "Δεν καλύπτει τις ρυτίδες, αλλά επανεκπαιδεύει τα κύτταρα να λειτουργούν ως νεανικά κύτταρα.",
        biblio: ["Lall N (2020). Epigenetic aging. <a href='https://pubmed.ncbi.nlm.nih.gov/32415148/' target='_blank'>PubMed:32415148</a>"]
    },
    "NUTRI MX PROBIOTIC PREMIUM": {
        moa: [
            { ing: "18 Strains (10B CFU)", moa: "<strong>Competitive Exclusion:</strong> Καταλαμβάνουν τους υποδοχείς στο εντερικό επιθήλιο, εμποδίζοντας την προσκόλληση παθογόνων." },
            { ing: "Butyrate Synthesis", moa: "Ενισχύει την παραγωγή λιπαρών οξέων βραχείας αλύσου (SCFA) για τη θρέψη των κολονοκυττάρων." }
        ],
        cases: "Μετά από αντιβιοτική θεραπεία, σύνδρομο ευερέθιστου εντέρου (IBS), φουσκώματα, ενίσχυση Tregs για αυτοάνοσα.",
        rationale: "Η υψηλότερη ποικιλομορφία στελεχών στην αγορά (18 στελέχη) διασφαλίζει την ολική επαναφορά του μικροβιώματος.",
        biblio: ["Karamanolis GP (2019). Clinical review on probiotics."]
    },
    "NUTRI MX JOINT": {
        moa: [
            { ing: "Collagen II & MSM", moa: "Παροχή δομικού υλικού για το εξωκυττάριο ικρίωμα του χόνδρου. Το MSM προσφέρει θειούχους δεσμούς για τη συνοχή του συνδετικού ιστού." },
            { ing: "Glucosamine/Chondroitin", moa: "<strong>GAG Precursors:</strong> Διεγείρουν τη βιοσύνθεση γλυκοζαμινογλυκανών και αγρεκάνης." }
        ],
        cases: "Οστεοαρθρίτιδα, αθλητές (πρόληψη φθοράς), δυσκαμψία αρθρώσεων, αποκατάσταση τραυματισμών.",
        rationale: "Τριπλή δράση: Λίπανση, αναδόμηση χόνδρου και μείωση της φλεγμονής χωρίς παρενέργειες ΜΣΑΦ.",
        biblio: ["Lugo JP (2013). Native Collagen II. <a href='https://pubmed.ncbi.nlm.nih.gov/24153020/' target='_blank'>PubMed:24153020</a>"]
    },
    "Alveolair Sir": {
        moa: [
            { ing: "Thymus & Althaea", moa: "<strong>Secretolytic:</strong> Ρευστοποιεί τη βλέννα και δημιουργεί προστατευτικό βιο-φιλμ στο βλεννογόνο του λαιμού." },
            { ing: "Eucalyptus & Pine", moa: "<strong>Bronchospasmolysis:</strong> Χαλαρώνει τους λείους μύες των βρόγχων, διευκολύνοντας την αναπνοή." }
        ],
        cases: "Παραγωγικός και ξηρός βήχος, βρογχική αποσυμφόρηση, πονόλαιμος, κρυολόγημα.",
        rationale: "Φυτική προσέγγιση που συνδυάζει την αποβολή των εκκρίσεων με την άμεση ανακούφιση του ερεθισμένου βλεννογόνου.",
        biblio: ["EMA Herbal Monograph on Thymus vulgaris."]
    },
    "NUTRI MX OMEGA 3": {
        moa: [
            { ing: "EPA/DHA (High Purity)", moa: "<strong>Resolvins/Protectins:</strong> Μετατρέπονται σε ενεργούς μεταβολίτες που επιλύουν τη φλεγμονή στο καρδιαγγειακό και νευρικό σύστημα." }
        ],
        cases: "Υπερτριγλυκεριδαιμία, καρδιαγγειακή προστασία, βελτίωση γνωστικής λειτουργίας, ξηροφθαλμία.",
        rationale: "Μοριακή απόσταξη (Molecular Distillation) που εγγυάται μηδενικά βαρέα μέταλλα και μέγιστη απορρόφηση.",
        biblio: ["Calder PC (2013). Omega-3 logic. <a href='https://pubmed.ncbi.nlm.nih.gov/23011457/' target='_blank'>PubMed:23011457</a>"]
    },
    "NUTRI MX MAGNESIUM": {
        moa: [
            { ing: "Magnesium & B6", moa: "<strong>NMDA Modulation:</strong> Ρυθμίζει τη δίοδο ιόντων ασβεστίου στους νευρώνες, προκαλώντας μυϊκή και νευρική χαλάρωση." }
        ],
        cases: "Νυχτερινές κράμπες, έντονο άγχος, αϋπνία, ημικρανίες, προεμμηνορροϊκό σύνδρομο (PMS).",
        rationale: "Συνδυασμός με Β6 για μέγιστη ενδοκυττάρια βιοδιαθεσιμότητα του μαγνησίου.",
        biblio: ["EFSA Journal (2010). Magnesium and muscle function."]
    }
};
// --- 5. CRM LOOKUP LOGIC (LIVE AUTO-HYDRATION) ---
async function lookupCustomer(afm) {
    // 1. Έλεγχος στη στατική λίστα (Ταχύτητα)
    if (knownCustomers[afm]) return knownCustomers[afm];
    
    // 2. Έλεγχος στο Google Sheet (Live CRM)
    try {
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?afm=${afm}`);
        const data = await response.json();
        if (!data.notfound) return data;
    } catch (e) { console.error("Cloud Lookup Error", e); }
    
    return null;
}

// --- 6. INITIALIZATION & ERP LOGIC ---
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

    // Δυναμικό Lookup ΑΦΜ
    document.getElementById('afm').addEventListener('input', async function() {
        const val = this.value.trim();
        if (val.length >= 9) {
            const c = await lookupCustomer(val);
            if (c) {
                document.getElementById('eponimia').value = c.eponimia;
                document.getElementById('doy').value = c.doy || "ΕΔΕΣΣΑΣ";
                document.getElementById('mobile').value = c.mobile || "";
                document.getElementById('phone').value = c.phone || "";
                document.getElementById('email').value = c.email || "";
            }
        }
    });
    updateTotals();
});

// Εμπορική Πολιτική (9+1, 18+3, 24+6)
function calculateGifts(q) {
    if (q >= 24) return 6; if (q >= 18) return 3; if (q >= 9) return 1; return 0;
}

// Υπολογισμός Έκπτωσης Τζίρου (3-10%)
function calculateVolumeDiscountPerc(net) {
    if (net < 300) return 0;
    if (net < 400) return 3;
    if (net < 500) return 4;
    let extra = Math.floor((net - 500) / 100);
    return Math.min(5 + extra, 10);
}

function updateTotals() { 
    let initialNet = 0; let totalGifts = 0; let totalItems = 0;
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        let g = calculateGifts(q);
        const line = q * p.price;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = line.toFixed(2) + " €";
        document.getElementById(`eff-${i}`).textContent = q > 0 ? (line/(q+g)).toFixed(2) : p.price.toFixed(2);
        initialNet += line; totalGifts += g; totalItems += q;
    });

    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const volPerc = calculateVolumeDiscountPerc(initialNet);
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

    // LIVE ANALYSIS BOX
    const analysis = document.getElementById("dynamicAnalysis");
    if(initialNet > 0) {
        analysis.innerHTML = `
            <p>🎁 <strong>Συνολικά Δώρα:</strong> ${totalGifts} τεμ.</p>
            <p>📉 <strong>Έκπτωση Τζίρου:</strong> ${volPerc}% (-${volVal.toFixed(2)}€)</p>
            ${isCash ? `<p>💰 <strong>Έκπτωση Μετρητών:</strong> 2% (-${cashVal.toFixed(2)}€)</p>` : ''}
            <p style="color:#34d399; font-weight:800; border-top:1px solid #444; padding-top:10px; font-size:1.1rem;">
                🚀 Συνολικό Όφελος: ~${(volVal + cashVal + (totalGifts * 8)).toFixed(2)} €
            </p>
        `;
    } else { analysis.innerHTML = "Ξεκινήστε την παραγγελία..."; }
}

// --- 7. MODAL SYSTEM (HCP HUB) ---
function showInfo(name, index) {
    let lookup = Object.keys(productDetails).find(key => name.includes(key)) || name;
    const p = productDetails[lookup] || { moa: [], cases: "—", rationale: "—" };
    const modal = document.getElementById('productModal');
    let imgPath = p.img || `images/${name}.jpg`;

    modal.innerHTML = `
        <div class="modal-content">
            <span style="position:absolute;top:20px;right:25px;cursor:pointer;font-size:2.5rem;" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
            <div style="display:flex; align-items:center; gap:25px; margin-bottom:20px;">
                <img src="${imgPath}" onerror="this.src='https://via.placeholder.com/130?text=ZARKOLIA'" style="width:130px; border-radius:15px; border:1px solid #eee;">
                <div>
                    <h2 style="margin:0; color:var(--emerald-dark);">${name}</h2>
                    <p style="color:var(--slate-light); font-weight:700;">HCP Scientific Compendium</p>
                </div>
            </div>
            <h4>🧬 Μοριακός Μηχανισμός Δράσης</h4>
            ${hcpTable(p.moa || [])}
            <div style="background:#f8fafc; padding:20px; border-radius:15px; margin:20px 0; border:1px solid #eef2f6;">
                <p><strong>📍 Ενδείξεις:</strong> ${p.cases}</p>
                <p><strong>💡 Γιατί λειτουργεί:</strong> ${p.rationale || "Εξειδικευμένη φόρμουλα Zarkolia Health"}</p>
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

// --- 8. SYNC & EMAIL ---
async function processOrder() {
    const epo = document.getElementById("eponimia").value;
    const afm = document.getElementById("afm").value;
    if(!epo) { alert("Παρακαλώ επιλέξτε Πελάτη!"); return; }

    let itemsForSheet = []; let emailItems = "";
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
        products: itemsForSheet.join(", "), netValue: document.getElementById("final-net").textContent, vat: document.getElementById("vat-value").textContent, total: document.getElementById("final-total").textContent, 
        payment: Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "—", remarks: document.getElementById("remarks").value 
    };

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true; submitBtn.textContent = "Syncing Cloud...";

    try {
        await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
        alert("ΕΠΙΤΥΧΙΑ! Η παραγγελία και ο νέος πελάτης αποθηκεύτηκαν.");
        const body = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ%0D%0A%0D%0AΠΕΛΑΤΗΣ: ${epo}%0D%0A%0D%0AΠΡΟΪΟΝΤΑ:%0D%0A${emailItems}%0D%0A------------------------%0D%0AΑΝΑΛΥΣΗ ΕΚΠΤΩΣΕΩΝ:%0D%0AΑρχική Αξία: ${document.getElementById("net-value").textContent}%0D%0AΈκπτωση Τζίρου: ${document.getElementById("disc-perc").textContent}% (-${document.getElementById("disc-val").textContent})%0D%0AΈκπτωση Μετρητών: 2% (-${document.getElementById("cash-disc-val").textContent})%0D%0AΚΑΘΑΡΗ ΑΞΙΑ: ${document.getElementById("final-net").textContent}%0D%0AΦΠΑ (24%): ${document.getElementById("vat-value").textContent}%0D%0A------------------------%0D%0AΤΕΛΙΚΟ ΠΟΣΟ: ${document.getElementById("final-total").textContent}%0D%0A------------------------%0D%0AΤΡΑΠΕΖΕΣ: EUROBANK / ΠΕΙΡΑΙΩΣ`;
        window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=Order_${encodeURIComponent(epo)}&body=${body}`;
    } catch(e) { alert("Σφάλμα σύνδεσης Cloud."); }
    finally { submitBtn.disabled = false; submitBtn.textContent = "Ολοκλήρωση & Αποθήκευση"; }
}

function clearForm() { if(confirm("Εκκαθάριση φόρμας;")) location.reload(); }
