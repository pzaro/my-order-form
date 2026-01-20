// ============================================================
// ZARKOLIA HEALTH - THE DEFINITIVE SCIENTIFIC ERP v7.0
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzD1c9wID4goOn4LhZT8dc3E4kaDcWddmu6QR36x5I1uGYQdLc9bk31W1FVkNvQo_aJzg/exec";

// --- 1. HELPERS ΓΙΑ ΕΠΙΣΤΗΜΟΝΙΚΗ ΤΕΚΜΗΡΙΩΣΗ ---
function hcpTable(rows) {
    return `<table class="hcp-table"><thead><tr style="background:#f9f9f9;"><th>Συστατικό</th><th>Μηχανισμός Δράσης (MoA)</th></tr></thead><tbody>${rows.map(r => `<tr><td><strong>${r.ing}</strong></td><td>${r.moa}</td></tr>`).join("")}</tbody></table>`;
}

function biblioList(items) {
    return `<div style="margin-top:25px; padding:20px; background:#f8fafc; border-radius:15px; border-left:5px solid var(--emerald);">
        <h4 style="margin:0 0 10px 0;">Επιστημονική Βιβλιογραφία</h4>
        <ul style="margin:0; padding-left:20px;">${items.map(i => `<li style="margin-bottom:8px;">${i}</li>`).join("")}</ul>
    </div>`;
}

// --- 2. ΠΛΗΡΗΣ ΒΑΣΗ ΠΕΛΑΤΩΝ (80+ ΕΓΓΡΑΦΕΣ) ---
const knownCustomers = {
    "999746768": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΝΔΡΕΑΔΟΥ ΕΥΑΓΓΕΛΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "6936515332", phone: "2384021001", email: "andreadoupharmacy@yahoo.com" },
    "025305198": { eponimia: "ΒΑΡΕΛΑΣ ΜΙΧΑΗΛ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6937457161", phone: "", email: "mixalisvarelas@gmail.com" },
    "999295953": { eponimia: "Συστεγασμένα φαρμακεία Αλ.Γκικας- Αν.Γκικα Ο.Ε", doy: "Γιαννιτσών", mobile: "6977598429", phone: "2382024813", email: "anagkika@gmail.com" },
    "107015615": { eponimia: "ΜΑΡΚΟΥ ΜΑΡΙΑ ΓΕΩΡΓΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6974066979", phone: "2384028060", email: "markoummp@gmail.com" },
    "127276450": { eponimia: "ΚΙΟΣΗΣ ΙΩΑΝΝΗΣ ΑΘΑΝΑΣΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6976613377", phone: "2384025424", email: "igiannis@yahoo.com" },
    "028058883": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΗΣ ΛΑΖΑΡΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6944581887", phone: "2381041464", email: "trilazar@otenet.gr" },
    "030796217": { eponimia: "ΚΥρΙΑΚΟΥ ΑΓΛΑΙΑ ΝΙΚΟΛΑΟ", doy: "ΝΕΩΝ ΜΟΥΔΑΝΙΩΝ", mobile: "", phone: "2399021663", email: "kyriakou.agla@gmail.com" },
    "041630585": { eponimia: "ΓΕΡΟΝΤΟΠΟΥΛΟΣ ΝΙΚΗΦΟΡΟΣ ΘΕΟΦΙΛΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6942207814", phone: "2551028764", email: "nikigero1@hotmail.com" },
    "042643289": { eponimia: "ΜΑΙΝΟΥ ΑΛΕΞΑΝΔΡΑ ΝΙΚΟΛΑΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6977591863", phone: "", email: "mainoualex@gmail.com" },
    "043720722": { eponimia: "ΚΑΡΑΔΗΜΟΥ ΚΩΝΣΤΑΝΤΙΝΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "", email: "karad12@otenet.gr" },
    "047359704": { eponimia: "ΦΑΡΑΚΛΙΩΤΗΣ ΔΗΜΗΤΡΙΟΣ ΘΩΜΑ", doy: "ΧΑΛΚΙΔΑΣ", mobile: "6973747981", phone: "2221060657", email: "farmakeiokamares@gmail.com" },
    "047862819": { eponimia: "ΠΑΠΑΔΑΚΗΣ ΝΙΚΟΛΑΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΧΑΛΚΙΔΑΣ", mobile: "", phone: "", email: "nikotero@gmail.com" },
    "056068437": { eponimia: "ΓΑΝΑ ΒΑΣΙΛΙΚΗ ΕΥΑΓΓΕΛΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6932473189", phone: "2382082077", email: "vassogana@gmail.com" },
    "058406703": { eponimia: "ΧΑΤΖΗΣΩΤΗΡΙΟΥ ΠΕΤΡΟΣ ΣΤΕΡΓΙΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6906133900", phone: "2551027333", email: "chazpe@gmail.com" },
    "061835127": { eponimia: "ΓΙΟΥρΤΣΟΓΛΟΥ ΧΡΗΣΤΟΣ ΕΥΑΓΓΕΛΟ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6945188398", phone: "2553022922", email: "giourtsoglou@yahoo.gr" },
    "065747063": { eponimia: "ΠΑΠΑΙΩΑΝΝΟΥ ΕΥΘΥΜΙΑ ΑΝΤΩΝΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6977177896", phone: "", email: "papaioannoue415@gmail.com" },
    "079214571": { eponimia: "ΜΑΝΔΑΛΤΣΗ ΑΙΚΑΤΕΡΙΝΗ ΔΗΜΗΤΡΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6942690321", phone: "2382022735", email: "farmakiomandaltsi@gmail.com" },
    "081095923": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΑΔΑΜΙΔΗ Α ΑΔΑΜΙΔΟΥ Μ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΙ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6976974411", phone: "2551021444", email: "adamidou.mar@gmail.com" },
    "082988981": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΕΥΑΓΓΕΛΟΣ ΚΥΡΙΑΚΙΔΗΣ ΕΜΜΑΝΟΥ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6977611613", phone: "2382083233", email: "vagemm@gmail.com" },
    "084186015": { eponimia: "PROJECT ΚΑΣΑΠΑΚΗΣ Θ & ΣΙΑ Ο.Ε", doy: "Η ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "2310832124", email: "info@projectk.gr" },
    "095141629": { eponimia: "ΔΟΜΙΚΗ Π ΠΑΥΛΙΔΗΣ Α.Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6979794428", phone: "2382099599", email: "g.apostolidis@domiki-pavlides.gr" },
    "120774602": { eponimia: "ΚΙΤΚΑ ΑΝΑΣΤΑΣΙΑ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6981768828", phone: "2382 063656", email: "a_kitka@yahoo.gr" },
    "121428438": { eponimia: "ΛΑΠΠΑ ΑΓΓΕΛΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382061786", email: "ang.lappa@gmail.com" },
    "121907683": { eponimia: "ΚΟΡΥΦΙΔΟΥ ΑΝΤΩΝΙΑ ΙΩΑΝΝΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6947323318", phone: "", email: "toniakory@hotmail.com" },
    "121949072": { eponimia: "ΚΟΡΥΦΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ ΙΩΑΝΝΗ", doy: "Δ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "6943106207", phone: "2310525383", email: "aristotelous.pharmacy@gmail.com" },
    "123981590": { eponimia: "ΠΑΠΑΓΕΩΡΓΙΟΥ ΜΑΡΙΑ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6972525223", phone: "", email: "alexmeri620@gmail.com" },
    "127263915": { eponimia: "ΣΙΣΚΟΥ ΜΑΡΙΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "", email: "m.siskou@yahoo.gr" },
    "128430492": { eponimia: "ΑΓΤΖΙΔΗΣ ΑΝΔΡΕΑΣ ΛΑΖΑΡΟ", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341103050", email: "andreasagtzidis@gmail.com" },
    "129166674": { eponimia: "ΛΑΠΙΧΟΥ ΚΑΛΛΙΟΠΗ", doy: "ΓΙΑΝΝΙΤΣΑ", mobile: "", phone: "2382028229", email: "popilapi1976@gmail.com" },
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
    "800348196": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΥΓΕΡΙΝΟΥ Θ ΚΑΙ ΣΙΑ Ο", doy: "ΣΕΡΡΩΝ", mobile: "", phone: "", email: "theoavgerinos90@gmail.com" },
    "800367008": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΘΕΟΔΟΣΙΟΣ ΑΔΑΜΙΔΗΣ ΜΑρΘΑ ΑΔΑΜΙΔΟΥ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "698306702", phone: "2382062100", email: "adamidis86@gmail.com" },
    "800414167": { eponimia: "ΜΑΧΜΟΥΡΙΔΟΥ ΚΑΙ ΣΙΑ Ο", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6944581887", phone: "2553024676", email: "www.maxmouridou@hotmail.gr" },
    "800472889": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΣΠΥΡΙΔΗΣ Δ ΒΑΛΑΣΙΔΟΥ ΙΣ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341023040", email: "dimitris_sp@yahoo.com" },
    "800586973": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΦΑΡΜΑΚΗΣ ΙΩΑΝΝΗΣ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6984914098", phone: "+30 2391091551", email: "farmakisg21@hotmail.gr" },
    "800616945": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΨΥΧΟΓΥΟΥ ΑΙΚΑΤΕΡΙΝΗ - ΨΥΧΟΓΥΟΥ ΣΟΦΙΑ -ΧΡΙΣΤΙΝΑ Ο.Ε", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381022232", email: "anaspsi@gmail.com" },
    "800699181": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ Κ ΓΕΩΡΓΙΑΔΟΥ ΚΑΙ Κ ΚΑΤΣΙΑΝΟΣ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341029949", email: "katsianoskos@gmail.com" },
    "800759157": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΧΡΗΣΤΟΥ ΠΕΛΑΓΙΑ ΚΑΙ ΣΑΡΗΓΚΙΟΛΗΣ ΟΡΕΣΤΗΣ ΙΩΑΝΝΗΣ Ο", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "+302384024298", email: "orestis.sarigkiolis@gmail.com" },
    "800972362": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑρΜΑΚΕΙΑ ΤΟΠΟΥΖΙΔΗΣ Γ ΚΑΙ ΤΟΠΟΥΖΙΔΗΣ Κ Ο", doy: "ΚΙΛΚΙΣ", mobile: "6942717900", phone: "2343022000", email: "e.topouzidou@yahoo.gr" },
    "802096212": { eponimia: "ΑΝΔΡΗ ΚΛΕΙΔΑΡΑ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "+302391022725", email: "andrykleidara@gmail.com" },
    "802196155": { eponimia: "HAPPY HIPPO Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "", email: "eimaiohappyhippo@gmail.com" },
    "802644097": { eponimia: "ΣΥΣΤΕΓΑΖΟΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΕΥΑ ΚΟΤΙΔΟΥ ΠΛΑΤΗΣ ΒΑΣΙΛΕΙΟΣ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΕΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2384022908", email: "evakotidou@gmail.com" },
    "802741555": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΤΣΩΝΗ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6932461323", phone: "2551038473", email: "tsonispharmacy@gmail.com" },
    "802744858": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΓΚΑΪΝΤΑΤΖΗΣ ΒΑΣΙΛΕΙΟΣ  ΓΚΑΪΝΤΑΤΖΗ ΕΥΔΟΞΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6980289717", phone: "2551024463", email: "gkaintatzi.pharmacy@gmail.com" },
    "997687603": { eponimia: "ΤΣΙΤΣΙΟΣ ΑΘΑΝΑΣΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6978762108", phone: "2531022785", email: "pharmthanos@gmail.com" },
    "997688685": { eponimia: "ΣΦ ΚΑΛΟΥΔΗ ΚΩΝΣΤΑΝΤΙNIA & ΖΟΥΜΑ ΣΤΑΜΑΤΙΑ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΕΙΑ", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "", phone: "", email: "stam1213zoum@gmail.com" },
    "997961412": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΠΑΝΑΓΙΩΤΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ  ΦΡΑΓΓΙΔΟΥ ΝΙΚΟΛΕΤΑ Ο", doy: "ΚΙΛΚΙΣ", mobile: "6986962826", phone: "2341023924", email: "farmakeiofraggidou@gmail.com" },
    "997961880": { eponimia: "ΚΑΡΙΠΙΔΟΥ ΧΡΙΣΤΙΝΑ ΚΑΙ ΣΙΑ ΟΜΟΡΡΥΘΜΟΣ ΕΤΑΙΡΕΙΑ", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341020865", email: "chriskaripidou@gmail.com" },
    "998548940": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΧΤΣΗΣ ΣΤΕΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6948053736", phone: "2551 029523", email: "aachtsi@gmail.com" },
    "998720640": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΜΕΡΟΠΗΣ ΜΠΑΧΤΣΕΒΑΝΙΔΟΥ ΚΑΙ ΣΙΑ Ε", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381023080", email: "fiorabach@hotmail.com" },
    "998721309": { eponimia: "ΤΣΙΤΛΑΚΙΔΟΥ Μ ΚΑΙ ΣΙΑ Ο", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381091116", email: "maria_tsitlakidou@hotmail.com" },
    "999228431": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΗΛΙΑ ΧΑΛΙΓΙΑΝΝΗ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6936632283", phone: "2531 023758", email: "iliaspharm@yahoo.com" },
    "999260690": { eponimia: "ΦΛΩΡΟΣ ΓΕΩΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "6944732173", phone: "", email: "florospharmacy@yahoo.gr" },
    "999295989": { eponimia: "Α ΓΚΑΙΤΑΤΖΗΣ ΚΑΙ ΣΙΑ Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382099191", email: "gkaitatzisaggelos@yahoo.gr" },
    "999296071": { eponimia: "ΚΑΡΑΟΥΛΑΝΗ ΕΥΑΓΓΕΛΙΑ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382 042299", email: "psiamanta@hotmail.com" },
    "999387480": { eponimia: "ΜΗΤΚΑΣ ΑΔΑΜΑΝΤΙΟΣ ΚΑΙ ΣΙΑ Ε", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6945411342", phone: "2551028396", email: "farmakiomitkas@gmail.com" }
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

// --- 4. ΕΠΙΣΤΗΜΟΝΙΚΕΣ ΠΕΡΙΓΡΑΦΕΣ ---
const productDetails = [
    {
        name: 'Z-DermAspis',
        description: {
            consumer: consumerBlock({ title: "Φυσική Απωθητική Ασπίδα", bullets: ["70% v/v αιθυλική αλκοόλη.", "PMD (Citriodora).", "Προστασία 12h."] }),
            science: `<h3>Φαρμακολογικό Rationale</h3>` + hcpTable([{ing: "Ethanol 70%", moa: "Μετουσίωση πρωτεϊνών παθογόνων."}, {ing: "PMD", moa: "Ανταγωνιστής OBPs εντόμων."}]),
            bibliography: biblioList(["Carroll SP (2006). PMD Repellent. <a href='https://pubmed.ncbi.nlm.nih.gov/16492330/' target='_blank'>PubMed Link</a>"])
        }
    },
    {
        name: 'ZplastCream',
        description: {
            consumer: consumerBlock({ title: "Δερματική Ανάπλαση & Προστασία", bullets: ["Μαστίχα Χίου, Μέλι, Αβοκάντο, Ιπποφαές.", "Σπαθόλαδο, Καλαμίνη, Θυμάρι, Zea Mais.", "Προστασία φραγμού."] }),
            science: `<h3>Μηχανισμός v1.0</h3>` + hcpTable([{ing: "Μαστίχα Χίου", moa: "<strong>TGF-β Induction:</strong> Ενεργοποιεί την επούλωση."}, {ing: "Ιπποφαές (Ω-7)", moa: "Ταχεία επιθηλιοποίηση."}, {ing: "Καλαμίνη", moa: "Anti-pruritic: Μείωση ερεθισμών."}]),
            bibliography: biblioList(["Paraschos S (2012). Mastic oil. <a href='https://pubmed.ncbi.nlm.nih.gov/17544358/' target='_blank'>Source</a>"])
        }
    },
    {
        name: 'Zplast Total Repair',
        description: {
            consumer: consumerBlock({ title: "Εντατική Ιστική Αναδόμηση", bullets: ["Βάση Zplast + Centella Asiatica + Υαλουρονικό.", "SMAD Signaling: Βιοσύνθεση Κολλαγόνου.", "ECM Scaffold: Βαθιά αναδόμηση ιστού."] }),
            science: `<h3>Μοριακό Rationale</h3>

[Image of skin wound healing process]
` + hcpTable([{ing: "Centella Asiatica", moa: "<strong>SMAD Signaling:</strong> Διέγερση Κολλαγόνου Ι & III."}, {ing: "Υαλουρονικό Οξύ", moa: "<strong>ECM Scaffold:</strong> Μετανάστευση ινοβλαστών."}, {ing: "Σπαθόλαδο (Hypericin)", moa: "Αντιφλεγμονώδης δράση."}]),
            bibliography: biblioList(["Bylka W (2013). Centella dermatology. <a href='https://pubmed.ncbi.nlm.nih.gov/24386321/' target='_blank'>PubMed</a>"]),
            customImage: "https://github.com/pzaro/my-order-form/blob/main/images/Zplast%20Total%20Repair.jpeg?raw=true"
        }
    },
    {
        name: 'Bruise Off',
        description: {
            consumer: consumerBlock({ title: "Άμεση Αποσυμφόρηση & Ανακούφιση", bullets: ["Ουρία & Άρνικα (Helenalin).", "Μείωση μελανιών & οιδήματος.", "Αναλγητική δράση."] }),
            science: `<h3>Pathway Analysis</h3>` + hcpTable([{ing: "Urea", moa: "Penetration Enhancer."}, {ing: "Arnica (Helenalin)", moa: "<strong>NF-κB Inhibition:</strong> Καταστολή κυτταροκινών."}, {ing: "Carvacrol", moa: "TRPV1 Agonist: Τοπική υπεραιμία."}]),
            bibliography: biblioList(["Lyss G (1998). Helenalin MoA. <a href='https://pubmed.ncbi.nlm.nih.gov/9531637/' target='_blank'>PubMed</a>"])
        }
    },
    {
        name: 'Z-boost',
        description: {
            consumer: consumerBlock({ title: "Θωράκιση Ανοσοποιητικού & Ενέργεια", bullets: ["Zinc, NAC, Gingerols.", "CoQ10: Κυτταρική ενέργεια.", "Αντιοξειδωτική Προστασία."] }),
            science: `<h3>Ανοσοφαρμακολογική Υποστήριξη</h3>` + hcpTable([{ing: "Zinc", moa: "Viral Replication Inhibition."}, {ing: "NAC", moa: "<strong>GSH Precursor:</strong> Σύνθεση Γλουταθειόνης."}, {ing: "Gingerols", moa: "COX-2 & 5-LOX Inhibition."}]),
            bibliography: biblioList(["Hemilä H (2017). Zinc and Colds. <a href='https://pubmed.ncbi.nlm.nih.gov/28515951/' target='_blank'>Source</a>"])
        }
    },
    {
        name: 'Hydralia Face cream 50ml',
        description: {
            consumer: consumerBlock({ title: "Βαθιά Ενυδάτωση & Plumping", bullets: ["LMW Υαλουρονικό.", "Έλαιο Jojoba.", "Φυσική Λάμψη."] }),
            science: `<h3>Υδροδυναμική</h3>` + hcpTable([{ing: "HA (LMW)", moa: "Δεσμεύει νερό στον χόριο ιστό."}, {ing: "Jojoba Oil", moa: "Biomimetic Lipids: Μείωση TEWL."}]),
            bibliography: biblioList(["Bukhari SNA (2018). HA Review. <a href='https://pubmed.ncbi.nlm.nih.gov/30287358/' target='_blank'>PubMed</a>"])
        }
    },
    {
        name: 'Revitacell Plus Face cream 50ml',
        description: {
            consumer: consumerBlock({ title: "Επιγενετική Αντιγήρανση", bullets: ["Ενεργοποίηση Klotho protein.", "Ω-5 από έλαιο Ροδιού.", "Μαστιχέλαιο Χίου."] }),
            science: `<h3>Dermal Remodeling</h3>` + hcpTable([{ing: "Mastic Oil", moa: "<strong>Klotho Gene Induction:</strong> DNA repair."}, {ing: "Punicic Acid", moa: "MMP-1 Inhibition: Προστασία κολλαγόνου."}]),
            bibliography: biblioList(["Lall N (2020). Epigenetic aging. <a href='https://pubmed.ncbi.nlm.nih.gov/32415148/' target='_blank'>PubMed</a>"])
        }
    },
    {
        name: 'Revitace Eyes cream Luce 30ml',
        description: {
            consumer: consumerBlock({ title: "Φωτεινό Βλέμμα & Αποσυμφόρηση", bullets: ["Κατά των μαύρων κύκλων.", "Escin Venotonic.", "Luce Tech Φωτεινότητα."] }),
            science: `<h3>Μικροκυκλοφορία</h3>` + hcpTable([{ing: "Escin", moa: "Μειώνει τη διαρροή υγρών."}, {ing: "Arnica Extract", moa: "Heme Degradation Support."}]),
            bibliography: biblioList(["Gallelli L (2019). Escin review. <a href='https://pubmed.ncbi.nlm.nih.gov/31562234/' target='_blank'>Source</a>"])
        }
    },
    {
        name: 'Alveolair Sir',
        description: {
            consumer: consumerBlock({ title: "Φυτική Προστασία Αναπνευστικού", bullets: ["Θυμάρι & Αλθέα.", "Secretolytic Action.", "Μαλακώνει τον λαιμό."] }),
            science: `<h3>Secretolysis</h3>` + hcpTable([{ing: "Althaea root", moa: "Mucilage Barrier."}, {ing: "Thymol", moa: "Bronchospasmolysis."}]),
            bibliography: biblioList(["EMA Monograph. <a href='https://www.ema.europa.eu/en/medicines/herbal/thymi-herba' target='_blank'>EMA Link</a>"])
        }
    },
    {
        name: 'NUTRI MX PROBIOTIC PREMIUM',
        description: {
            consumer: consumerBlock({ title: "Προηγμένη Ισορροπία Μικροβιώματος", bullets: ["18 Στελέχη.", "10 δις CFU.", "Ενίσχυση Tregs."] }),
            science: `<h3>Μικροβιακή Ομοιόσταση</h3>` + hcpTable([{ing: "Butyrate", moa: "SCFA Production: Θρέψη κολονοκυττάρων."}, {ing: "18 Strains", moa: "Competitive Exclusion παθογόνων."}]),
            bibliography: biblioList(["Karamanolis GP (2019). Probiotics review. <a href='https://pubmed.ncbi.nlm.nih.gov/29962534/' target='_blank'>PubMed</a>"])
        }
    },
    {
        name: 'NUTRI MX MAGNESIUM 1 Τεμ',
        description: {
            consumer: consumerBlock({ title: "Νευρομυϊκή Χαλάρωση", bullets: ["Μαγνήσιο & Β6.", "Πρόληψη κραμπών.", "Μείωση άγχους."] }),
            science: `<h3>NMDA Modulation</h3>` + hcpTable([{ing: "Magnesium", moa: "NMDA Antagonist."}, {ing: "Vit B6", moa: "Magnesium Chaperone."}]),
            bibliography: biblioList(["EFSA Journal (2010). <a href='https://efsa.onlinelibrary.wiley.com/doi/abs/10.2903/j.efsa.2010.1807' target='_blank'>EFSA Link</a>"])
        }
    },
    {
        name: 'NUTRI MX A-Z',
        description: {
            consumer: consumerBlock({ title: "Πλήρης Πολυβιταμίνη AZ", bullets: ["24 Συστατικά.", "Μεταβολική Τόνωση.", "Άμυνα C, D & Zinc."] }),
            science: `<h3>Μεταβολική Ομοιόσταση</h3>` + hcpTable([{ing: "B-Complex", moa: "ATP σύνθεση."}, {ing: "Vit C & Zinc", moa: "DNA Stability."}]),
            bibliography: biblioList(["Kennedy DO (2016). Brain nutrients. <a href='https://pubmed.ncbi.nlm.nih.gov/26828517/' target='_blank'>Source</a>"])
        }
    },
    {
        name: 'NUTRI MX OMEGA 3',
        description: {
            consumer: consumerBlock({ title: "Ωμέγα-3 Υψηλής Καθαρότητας", bullets: ["EPA/DHA.", "Καρδιαγγειακή Υγεία.", "Νευρική Υποστήριξη."] }),
            science: `<h3>Λιπιδική Βιολογία</h3>` + hcpTable([{ing: "EPA", moa: "Anti-inflammatory Substrate."}, {ing: "Resolvins", moa: "Resolution of inflammation."}]),
            bibliography: biblioList(["Calder PC (2013). Omega-3 facts. <a href='https://pubmed.ncbi.nlm.nih.gov/23011457/' target='_blank'>Source</a>"])
        }
    },
    {
        name: 'NUTRI MX JOINT',
        description: {
            consumer: consumerBlock({ title: "Δομική Υποστήριξη Αρθρώσεων", bullets: ["Γλυκοζαμίνη & Χονδροϊτίνη.", "Κολλαγόνο ΙΙ.", "MSM Thio-bridge."] }),
            science: `<h3>Chondroprotection</h3>` + hcpTable([{ing: "GAG Precursors", moa: "Βιοσύνθεση αγρεκάνης."}, {ing: "Native Collagen II", moa: "Oral Tolerance Mechanism."}]),
            bibliography: biblioList(["Hochberg MC (2016). Joint health. <a href='https://pubmed.ncbi.nlm.nih.gov/26767434/' target='_blank'>PubMed</a>"])
        }
    }
];

// --- 5. INITIALIZATION & LOGIC ---
document.addEventListener("DOMContentLoaded", () => {
    const btnContainer = document.getElementById('productButtonsContainer');
    const tableBody = document.querySelector('#product-table tbody');

    products.forEach((p, index) => {
        const btn = document.createElement('button');
        btn.className = 'product-btn';
        btn.innerHTML = `<strong>${p.name}</strong><br><span style="color:var(--emerald-dark);">${p.price.toFixed(2)} €</span>`;
        btn.onclick = () => showInfo(p.name);
        btnContainer.appendChild(btn);

        const row = document.createElement('tr');
        row.innerHTML = `<td>${p.name}</td><td>${p.price.toFixed(2)}</td><td><input type="number" id="qty-${index}" min="0" oninput="updateTotals()" value="0"></td><td><span id="gift-${index}">0</span></td><td id="eff-${index}">${p.price.toFixed(2)}</td><td id="total-${index}">0.00</td>`;
        tableBody.appendChild(row);
    });

    document.getElementById('afm').addEventListener('input', function() {
        const val = this.value.trim();
        if (knownCustomers[val]) {
            const c = knownCustomers[val];
            document.getElementById('eponimia').value = c.eponimia;
            document.getElementById('doy').value = c.doy || "ΕΔΕΣΣΑΣ";
            document.getElementById('mobile').value = c.mobile || "";
            document.getElementById('email').value = c.email || "";
        }
    });
});

// Υπολογισμός Δώρων (9+1, 18+3, 24+6)
function calculateGifts(q) {
    if (q >= 24) return 6;
    if (q >= 18) return 3;
    if (q >= 9) return 1;
    return 0;
}

// Υπολογισμός Έκπτωσης Τζίρου
function calculateVolumeDiscountPerc(net) {
    if (net < 300) return 0;
    if (net < 400) return 3;
    if (net < 500) return 4;
    let extra = Math.floor((net - 500) / 100);
    return Math.min(5 + extra, 10);
}

function updateTotals() { 
    let initialNet = 0;
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        const g = calculateGifts(q);
        const line = q * p.price;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = line.toFixed(2) + " €";
        document.getElementById(`eff-${i}`).textContent = q > 0 ? (line / (q + g)).toFixed(2) + " €" : p.price.toFixed(2) + " €";
        initialNet += line;
    });

    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const volDiscPerc = calculateVolumeDiscountPerc(initialNet);
    const volDiscVal = initialNet * (volDiscPerc / 100);
    
    // Έκπτωση Μετρητών 2% επί της καθαρής αξίας μετά την έκπτωση τζίρου
    const cashDiscVal = isCash ? (initialNet - volDiscVal) * 0.02 : 0;
    
    const finalNet = initialNet - volDiscVal - cashDiscVal;
    const vat = finalNet * 0.24;

    document.getElementById("net-value").textContent = initialNet.toFixed(2) + " €";
    document.getElementById("disc-perc").textContent = volDiscPerc;
    document.getElementById("disc-val").textContent = volDiscVal.toFixed(2) + " €";
    document.getElementById("cash-disc-val").textContent = cashDiscVal.toFixed(2) + " €";
    document.getElementById("final-net").textContent = finalNet.toFixed(2) + " €";
    document.getElementById("vat-value").textContent = vat.toFixed(2) + " €";
    document.getElementById("final-total").textContent = (finalNet + vat).toFixed(2) + " €";
}

function showInfo(name) {
    let lookup = name.includes("Total Repair") ? "Zplast Total Repair" : (name.includes("Cream") ? "ZplastCream" : (name.includes("Bruise Off") ? "Bruise Off" : (name.includes("Z-boost") ? "Z-boost" : name)));
    const p = productDetails.find(item => item.name === lookup) || { science: "—", biblio: "—" };
    const modal = document.getElementById('productModal');
    let img = p.customImage ? p.customImage : `images/${name}.jpg`;

    modal.innerHTML = `<div class="modal-content"><span style="position:absolute;top:20px;right:20px;cursor:pointer;font-size:2.5rem;" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
        <div style="display:flex; align-items:center; gap:25px; margin-bottom:20px;">
            <img src="${img}" onerror="this.src='https://via.placeholder.com/120?text=ZARKOLIA'" style="width:120px; height:120px; object-fit:contain; border-radius:15px; border:1px solid #eee;">
            <h2 style="color:var(--emerald-dark); margin:0;">${name}</h2>
        </div>
        ${p.description ? p.description.consumer : ""}
        <hr style="margin:25px 0; border:0; border-top:1px solid #f1f5f9;">
        ${p.science}${p.biblio}</div>`;
    modal.style.display = 'block';
}

async function processOrder() {
    const eponimia = document.getElementById("eponimia").value;
    const payment = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "—";
    const submitBtn = document.getElementById("submitBtn");

    if(!eponimia) { alert("Επιλέξτε Πελάτη!"); return; }

    let itemsForSheet = [];
    let itemsForEmail = "";
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        if(q > 0) {
            itemsForSheet.push(`${p.name} (${q})`);
            itemsForEmail += `* ${p.name} | Τεμ: ${q} | Δώρα: ${document.getElementById(`gift-${i}`).textContent}%0D%0A`;
        }
    });

    const orderData = { 
        customer: eponimia, 
        afm: document.getElementById("afm").value, 
        products: itemsForSheet.join(", "), 
        netValue: document.getElementById("final-net").textContent, 
        vat: document.getElementById("vat-value").textContent, 
        total: document.getElementById("final-total").textContent, 
        payment: payment, 
        remarks: document.getElementById("remarks").value 
    };

    try {
        await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(orderData) });
        alert("Η παραγγελία καταχωρήθηκε στο Google Sheet!");
        
        // EMAIL BODY WITH DETAILED ANALYSIS
        const body = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ%0D%0A%0D%0AΠΕΛΑΤΗΣ: ${eponimia}%0D%0A%0D%0AΠΡΟΪΟΝΤΑ:%0D%0A${itemsForEmail}%0D%0A------------------------%0D%0AΑΝΑΛΥΣΗ ΕΚΠΤΩΣΕΩΝ:%0D%0AΑρχική Αξία: ${document.getElementById("net-value").textContent}%0D%0AΈκπτωση Τζίρου: ${document.getElementById("disc-perc").textContent}% (-${document.getElementById("disc-val").textContent})%0D%0AΈκπτωση Μετρητών: 2% (-${document.getElementById("cash-disc-val").textContent})%0D%0AΚΑΘΑΡΗ ΑΞΙΑ: ${document.getElementById("final-net").textContent}%0D%0AΦΠΑ (24%): ${document.getElementById("vat-value").textContent}%0D%0A------------------------%0D%0AΤΕΛΙΚΟ ΠΟΣΟ: ${document.getElementById("final-total").textContent}%0D%0A------------------------%0D%0AΤΡΑΠΕΖΕΣ:%0D%0AEUROBANK: GR0302607310000970100732761%0D%0AΠΕΙΡΑΙΩΣ: GR8901722520005252016160277`;
        
        window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=Order_${encodeURIComponent(eponimia)}&body=${body}`;
    } catch(e) { alert("Σφάλμα σύνδεσης."); }
}

function clearForm() { if(confirm("Εκκαθάριση;")) location.reload(); }
