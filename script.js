// ============================================================
// ZARKOLIA HEALTH - THE DEFINITIVE SCIENTIFIC ERP v10.0
// ============================================================

// --- 1. CONFIGURATION (ΣΥΝΔΕΣΗ ΜΕ ΤΟ ΝΕΟ URL) ---
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwsisgw1LyWf_M1fMq3A3J2xHge4k5KWqLRti5Y5_-V_rmTHoRKaP1KrhZ2v4yuxxRH1g/exec";

// --- 2. HELPERS ΓΙΑ ΕΠΙΣΤΗΜΟΝΙΚΗ ΤΕΚΜΗΡΙΩΣΗ ---
function hcpTable(rows) {
    return `<table class="hcp-table"><thead><tr style="background:#f9f9f9;"><th>Συστατικό</th><th>Μηχανισμός Δράσης (MoA)</th></tr></thead><tbody>${rows.map(r => `<tr><td><strong>${r.ing}</strong></td><td>${r.moa}</td></tr>`).join("")}</tbody></table>`;
}

function biblioList(items) {
    return `<div style="margin-top:20px; padding:15px; background:#f0f9ff; border-radius:10px; border-left:4px solid #0284c7;">
        <h4 style="margin:0 0 10px 0;">Επιστημονική Βιβλιογραφία</h4>
        <ul style="margin:0; padding-left:18px; font-size:0.9rem;">${items.map(i => `<li style="margin-bottom:5px;">${i}</li>`).join("")}</ul>
    </div>`;
}

function consumerBlock({ title, bullets, howTo, cautions }) {
    return `<h3>${title}</h3><ul>${bullets.map(b => `<li>${b}</li>`).join("")}</ul>${howTo ? `<h4>Τρόπος χρήσης</h4><p>${howTo}</p>` : ""}${cautions ? `<h4>Προφυλάξεις</h4><p>${cautions}</p>` : ""}`;
}

// --- 3. ΠΛΗΡΗΣ ΒΑΣΗ ΔΕΔΟΜΕΝΩΝ ΠΕΛΑΤΩΝ ---
const knownCustomers = {
    "999746768": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΝΔΡΕΑΔΟΥ ΕΥΑΓΓΕΛΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "6936515332", phone: "2384021001", email: "andreadoupharmacy@yahoo.com" },
    "025305198": { eponimia: "ΒΑΡΕΛΑΣ ΜΙΧΑΗΛ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "mixalisvarelas@gmail.com" },
    "999295953": { eponimia: "Συστεγασμένα φαρμακεία Αλ.Γκικας- Αν.Γκικα Ο.Ε", doy: "Γιαννιτσών", email: "anagkika@gmail.com" },
    "107015615": { eponimia: "ΜΑΡΚΟΥ ΜΑΡΙΑ ΓΕΩΡΓΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6974066979", phone: "2384028060", email: "markoummp@gmail.com" },
    "127276450": { eponimia: "ΚΙΟΣΗΣ ΙΩΑΝΝΗΣ ΑΘΑΝΑΣΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6976613377", phone: "2384025424", email: "igiannis@yahoo.com" },
    "028058883": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΗΣ ΛΑΖΑΡΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", email: "trilazar@otenet.gr" },
    "041630585": { eponimia: "ΓΕΡΟΝΤΟΠΟΥΛΟΣ ΝΙΚΗΦΟΡΟΣ ΘΕΟΦΙΛΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", email: "nikigero1@hotmail.com" },
    "042643289": { eponimia: "ΜΑΙΝΟΥ ΑΛΕΞΑΝΔΡΑ ΝΙΚΟΛΑΟ", doy: "ΕΔΕΣΣΑΣ", email: "mainoualex@gmail.com" },
    "043720722": { eponimia: "ΚΑΡΑΔΗΜΟΥ ΚΩΝΣΤΑΝΤΙΝΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", email: "karad12@otenet.gr" },
    "047359704": { eponimia: "ΦΑΡΑΚΛΙΩΤΗΣ ΔΗΜΗΤΡΙΟΣ ΘΩΜΑ", doy: "ΧΑΛΚΙΔΑΣ", email: "farmakeiokamares@gmail.com" },
    "047862819": { eponimia: "ΠΑΠΑΔΑΚΗΣ ΝΙΚΟΛΑΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΧΑΛΚΙΔΑΣ", email: "nikotero@gmail.com" },
    "056068437": { eponimia: "ΓΑΝΑ ΒΑΣΙΛΙΚΗ ΕΥΑΓΓΕΛΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "vassogana@gmail.com" },
    "058406703": { eponimia: "ΧΑΤΖΗΣΩΤΗΡΙΟΥ ΠΕΤΡΟΣ ΣΤΕΡΓΙΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", email: "chazpe@gmail.com" },
    "061835127": { eponimia: "ΓΙΟΥΡΤΣΟΓΛΟΥ ΧΡΗΣΤΟΣ ΕΥΑΓΓΕΛΟ", doy: "ΟΡΕΣΤΙΑΔΑΣ", email: "giourtsoglou@yahoo.gr" },
    "065747063": { eponimia: "ΠΑΠΑΙΩΑΝΝΟΥ ΕΥΘΥΜΙΑ ΑΝΤΩΝΙΟ", doy: "ΕΔΕΣΣΑΣ", email: "papaioannoue415@gmail.com" },
    "079214571": { eponimia: "ΜΑΝΔΑΛΤΣΗ ΑΙΚΑΤΕΡΙΝΗ ΔΗΜΗΤΡΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "farmakiomandaltsi@gmail.com" },
    "081095923": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΑΔΑΜΙΔΗ Α ΑΔΑΜΙΔΟΥ Μ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΙ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", email: "adamidou.mar@gmail.com" },
    "082988981": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΕΥΑΓΓΕΛΟΣ ΚΥΡΙΑΚΙΔΗΣ ΕΜΜΑΝΟΥ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "vagemm@gmail.com" },
    "084186015": { eponimia: "PROJECT ΚΑΣΑΠΑΚΗΣ Θ & ΣΙΑ Ο.Ε", doy: "Η ΘΕΣΣΑΛΟΝΙΚΗΣ", email: "info@projectk.gr" },
    "095141629": { eponimia: "ΔΟΜΙΚΗ Π ΠΑΥΛΙΔΗΣ Α.Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "g.apostolidis@domiki-pavlides.gr" },
    "120774602": { eponimia: "ΚΙΤΚΑ ΑΝΑΣΤΑΣΙΑ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "a_kitka@yahoo.gr" },
    "121428438": { eponimia: "ΛΑΠΠΑ ΑΓΓΕΛΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "ang.lappa@gmail.com" },
    "121907683": { eponimia: "ΚΟΡΥΦΙΔΟΥ ΑΝΤΩΝΙΑ ΙΩΑΝΝΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "toniakory@hotmail.com" },
    "121949072": { eponimia: "ΚΟΡΥΦΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ ΙΩΑΝΝΗ", doy: "Δ ΘΕΣΣΑΛΟΝΙΚΗΣ", email: "aristotelous.pharmacy@gmail.com" },
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
    "135001952": { eponimia: "ΜΟΥΛΑ ΕΛΕΥΘΕρΙΑ ΠΑΝΤΕΛΗ", doy: "ΕΔΕΣΣΑΣ", email: "ele.moula@gmail.com" },
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
    "169699055": { eponimia: "ΧΕΛΗ ΑΝΑΣΤΑΣΙΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", email: "anasta.cheli10@gmail.com" },
    "300639167": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΟΥ ΕΛΕΝΗ ΑΡΙΣΤΕΙΔΗ", doy: "ΟΡΕΣΤΙΑΔΑΣ", email: "eleni.triantafillidou@gmail.com" },
    "800339648": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΖΙΟΥΤΑ ΓΕΩΡΓΙΑ ΧΡΙΣΤΙΑΝΑ ΚΑΙ ΣΙΑ Ο", doy: "ΚΙΛΚΙΣ", email: "zioutaxristiana@hotmail.gr" },
    "800348196": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΥΓΕΡΙΝΟΥ Θ ΚΑΙ ΣΙΑ Ο", doy: "ΣΕΡΡΩΝ", email: "theoavgerinos90@gmail.com" },
    "800367008": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΘΕΟΔΟΣΙΟΣ ΑΔΑΜΙΔΗΣ ΜΑΡΘΑ ΑΔΑΜΙΔΟΥ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "adamidis86@gmail.com" },
    "800414167": { eponimia: "ΜΑΧΜΟΥΡΙΔΟΥ ΚΑΙ ΣΙΑ Ο", doy: "ΟΡΕΣΤΙΑΔΑΣ", email: "www.maxmouridou@hotmail.gr" },
    "800472889": { eponimia: "ΦΑΡΜΑΚΕΙΑ ΣΠΥΡΙΔΗΣ Δ ΒΑΛΑΣΙΔΟΥ ΙΣ Ο", doy: "ΚΙΛΚΙΣ", email: "dimitris_sp@yahoo.com" },
    "800586973": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΦΑΡΜΑΚΗΣ ΙΩΑΝΝΗΣ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "farmakisg21@hotmail.gr" },
    "800616945": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΨΥΧΟΓΥΟΥ ΑΙΚΑΤΕΡΙΝΗ - ΨΥΧΟΓΥΟΥ ΣΟΦΙΑ Ο.Ε", doy: "ΕΔΕΣΣΑΣ", email: "anaspsi@gmail.com" },
    "800699181": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ Κ ΓΕΩΡΓΙΑΔΟΥ ΚΑΙ Κ ΚΑΤΣΙΑΝΟΣ Ο", doy: "ΚΙΛΚΙΣ", email: "katsianoskos@gmail.com" },
    "800732970": { eponimia: "ΦΡΟΥΤΑ ΜΟΥΤΣΟΓΙΑΝΝΗ", doy: "ΕΔΕΣΣΑΣ", email: "moutsogiannis23@gmail.com" },
    "800759157": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΧΡΗΣΤΟΥ ΠΕΛΑΓΙΑ ΚΑΙ ΣΑρΗΓΚΙΟΛΗΣ Ο", doy: "ΕΔΕΣΣΑΣ", email: "orestis.sarigkiolis@gmail.com" },
    "800972362": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΤΟΠΟΥΖΙΔΗΣ Γ ΚΑΙ ΤΟΠΟΥΖΙΔΗΣ Κ Ο", doy: "ΚΙΛΚΙΣ", email: "e.topouzidou@yahoo.gr" },
    "801577292": { eponimia: "ΝΙΚΟΛΑΟΣ ΚΟΥΤΣΟΥΜΠΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΤΡΙΠΟΛΗΣ", email: "nickoskoutsou@gmail.com" },
    "802096212": { eponimia: "ΑΝΔΡΗ ΚΛΕΙΔΑΡΑ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", email: "andrykleidara@gmail.com" },
    "802196155": { eponimia: "HAPPY HIPPO Ε.Π.Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "eimaiohappyhippo@gmail.com" },
    "802244502": { eponimia: "ΣΦ ΕΛΕΝΗΣ ΜΑΡΙΑΣ ΝΙΚΟΛΑΙΔΟΥ-ΧΡΥΣΟΣΤΟΜΟΥ ΤΖΙΝΤΖΑΡΑ & ΣΙΑ Ο", doy: "Ζ ΘΕΣΣΑΛΟΝΙΚΗΣ", email: "skroutzplus@outlook.com" },
    "802581242": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ Η ΔΗΜΟΚΑ Μ ΜΑΡΓΟΥΤΑ Ο", doy: "ΑΜΠΕΛΟΚΗΠΩΝ", email: "idpharmacy254@gmail.com" },
    "802644097": { eponimia: "ΣΥΣΤΕΓΑΖΟΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΕΥΑ ΚΟΤΙΔΟΥ ΠΛΑΤΗΣ ΒΑΣΙΛΕΙΟΣ Ο.Ε", doy: "ΕΔΕΣΣΑΣ", email: "evakotidou@gmail.com" },
    "802667861": { eponimia: "ΦΑΡΜΑΚΕΙΟ Α ΟΙΚΟΝΟΜΟΠΟΥΛΟΣ Ι ΠΑΠΑΔΟΠΟΥΛΟΣ Ο", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", email: "ioannis.a.papadop@gmail.com" },
    "802741555": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΤΣΩΝΗ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", email: "tsonispharmacy@gmail.com" },
    "802744858": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΓΚΑΪΝΤΑΤΖΗΣ ΒΑΣΙΛΕΙΟΣ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", email: "gkaintatzi.pharmacy@gmail.com" },
    "996853821": { eponimia: "ΚΟΙΝΩΝΙΑ ΚΛΗΡΟΝΟΜΩΝ ΔΟΥΛΚΕΡΙΔΗ ΧΑΡΑΛΑΜΠΟ", doy: "ΕΔΕΣΣΑΣ", email: "farmakeio.skydra@gmail.com" },
    "997687603": { eponimia: "ΤΣΙΤΣΙΟΣ ΑΘΑΝΑΣΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", email: "pharmthanos@gmail.com" },
    "997688685": { eponimia: "ΣΦ ΚΑΛΟΥΔΗ ΚΩΝΣΤΑΝΤΙNIA & ΖΟΥΜΑ ΣΤΑΜΑΤΙΑ Ο.Ε", doy: "ΚΟΜΟΤΗΝΗΣ", email: "stam1213zoum@gmail.com" },
    "997957423": { eponimia: "ΗΛΙΑΣ Θ ΚΑΤρΗΣ Ε", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", email: "iliaskatrispharmacy@gmail.com" },
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
    "999387480": { eponimia: "ΜΗΤΚΑΣ ΑΔΑΜΑΝΤΙΟΣ ΚΑΙ ΣΙΑ Ε", doy: "ΑΛΕΞΑΝΔρΟΥΠΟΛΗΣ", email: "farmakiomitkas@gmail.com" }
};

// --- 4. ΠΡΟΪΟΝΤΑ & ΤΙΜΕΣ ---
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

// --- 5. ΠΛΗΡΕΙΣ ΕΠΙΣΤΗΜΟΝΙΚΕΣ ΠΕΡΙΓΡΑΦΕΣ & ΜΟΑ ---
const productDetails = {
    "Z-DermAspis": {
        science: hcpTable([{ing: "Ethanol 70%", moa: "Denaturation of pathogen proteins and lipid dissolution."}, {ing: "PMD (Citriodora)", moa: "Natural OBP antagonist preventing host detection by insects."}]),
        biblio: biblioList(["Carroll SP (2006). PMD as a repellent. <a href='https://pubmed.ncbi.nlm.nih.gov/16492330/' target='_blank'>PubMed</a>"])
    },
    "ZplastCream": {
        science: `<h3>Σύνθεση v1.0 - Φυσική Επούλωση</h3>` + hcpTable([
            { ing: "Μαστίχα Χίου & Μέλι", moa: "<strong>TGF-β Induction:</strong> Διέγερση ελαστίνης και υγροσκοπική αντισηψία." },
            { ing: "Ιπποφαές & Zea Mais", moa: "Ω-7 Λιπίδια για δομική συνοχή και προστατευτικό φιλμ." },
            { ing: "Καλαμίνη & Σπαθόλαδο", moa: "Anti-pruritic δράση και αναστολή προ-φλεγμονωδών κυτταροκινών." }
        ]),
        biblio: biblioList(["Paraschos S (2012). PubMed:17544358", "Upadhyay NK (2009)."])
    },
    "Zplast Total Repair": {
        science: `<h3>Κλινική Ιστική Αναδόμηση (Advanced)</h3>` + hcpTable([
            { ing: "Centella Asiatica", moa: "<strong>SMAD Signaling Activation:</strong> Επιτάχυνση βιοσύνθεσης Κολλαγόνου Ι & III." },
            { ing: "Υαλουρονικό Οξύ", moa: "<strong>ECM Scaffold Technology:</strong> Παροχή ικριώματος για μετανάστευση ινοβλαστών." },
            { ing: "Sea Buckthorn Oil", moa: "Ω-7 Fatty Acids για άμεση επιθηλιοποίηση." }
        ]),
        biblio: biblioList(["Bylka W (2013). PubMed:24386321", "Wohlrab J (2018)."]),
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zplast%20Total%20Repair.jpeg?raw=true"
    },
    "Bruise Off": {
        science: `<h3>Μοριακό Rationale Αντιφλεγμονώδους Δράσης</h3>` + hcpTable([
            { ing: "Urea (Ουρία)", moa: "Penetration Enhancer: Διάσπαση δεσμών κερατίνης για βαθιά απορρόφηση." },
            { ing: "Arnica (Helenalin)", moa: "<strong>NF-κB Inhibition:</strong> Καταστολή IL-1 και TNF-α." }
        ]),
        biblio: biblioList(["Lyss G (1998). PubMed:9531637", "EMA Herbal Monograph."])
    },
    "Z-boost": {
        science: hcpTable([{ing: "Zinc", moa: "Viral RNA polymerase inhibition."}, {ing: "NAC", moa: "<strong>GSH Precursor:</strong> Glutathione synthesis."}, {ing: "CoQ10", moa: "Mitochondrial ATP support."}]),
        biblio: biblioList(["Hemilä H (2017). PubMed:28515951"])
    },
    "Hydralia Face cream": {
        science: hcpTable([{ing: "LMW Hyaluronic Acid", moa: "Deep dermal hydration."}, {ing: "Jojoba Oil", moa: "Biomimetic barrier lipids."}]),
        biblio: biblioList(["Bukhari SNA (2018). PubMed:30287358"])
    },
    "Revitacell Plus Face cream": {
        science: `<h3>Επιγενετική Αναζωογόνηση</h3>` + hcpTable([{ing: "Mastic Oil", moa: "<strong>Klotho Gene Induction:</strong> Ενεργοποίηση DNA repair."}, {ing: "Punicic Acid (Ω-5)", moa: "MMP-1 inhibition."}]),
        biblio: biblioList(["Lall N (2020). PubMed:32415148"])
    },
    "Revitace Eyes cream": {
        science: hcpTable([{ing: "Escin", moa: "Venotonic profile reducing edema."}, {ing: "Arnica", moa: "Heme degradation support for dark circles."}]),
        biblio: biblioList(["Gallelli L (2019). PubMed:31562234"])
    },
    "NUTRI MX PROBIOTIC": {
        science: `<h3>Μικροβιακή Ομοιόσταση</h3>` + hcpTable([{ing: "18 Strains", moa: "Competitive exclusion and Tregs induction."}, {ing: "Butyrate", moa: "SCFA Production: Colonocyte nutrition."}]),
        biblio: biblioList(["Karamanolis GP (2019)."])
    }
};

// --- 6. INITIALIZATION & ERP LOGIC ---
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector('#product-table tbody');
    const btnContainer = document.getElementById('productButtonsContainer');

    products.forEach((p, index) => {
        const btn = document.createElement('button');
        btn.className = 'product-btn';
        btn.innerHTML = `<strong>${p.name}</strong><br><small>${p.price.toFixed(2)}€</small>`;
        btn.onclick = () => showInfo(p.name);
        btnContainer.appendChild(btn);

        const row = document.createElement('tr');
        row.innerHTML = `<td>${p.name}</td><td>${p.price.toFixed(2)}</td><td><input type="number" id="qty-${index}" min="0" oninput="updateTotals()" value="0" style="width:60px;"></td><td><span id="gift-${index}">0</span></td><td id="eff-${index}">${p.price.toFixed(2)}</td><td id="total-${index}">0.00</td>`;
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

function calculateGifts(q) {
    if (q >= 24) return 6;
    if (q >= 18) return 3;
    if (q >= 9) return 1;
    return 0;
}

function calculateVolumeDiscPerc(net) {
    if (net < 300) return 0;
    if (net < 400) return 3;
    if (net < 500) return 4;
    return Math.min(5 + Math.floor((net - 500) / 100), 10);
}

function updateTotals() { 
    let initialNet = 0;
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        let g = calculateGifts(q);
        const line = q * p.price;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = line.toFixed(2) + " €";
        document.getElementById(`eff-${i}`).textContent = q > 0 ? (line/(q+g)).toFixed(2) + " €" : p.price.toFixed(2) + " €";
        initialNet += line;
    });

    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const volPerc = calculateVolumeDiscPerc(initialNet);
    const volVal = initialNet * (volPerc / 100);
    const cashVal = isCash ? (initialNet - volVal) * 0.02 : 0;
    const finalNet = initialNet - volVal - cashVal;
    const vat = finalNet * 0.24;

    document.getElementById("net-value").textContent = initialNet.toFixed(2) + " €";
    document.getElementById("disc-perc").textContent = volPerc;
    document.getElementById("disc-val").textContent = volVal.toFixed(2) + " €";
    document.getElementById("cash-disc-val").textContent = cashVal.toFixed(2) + " €";
    document.getElementById("final-net").textContent = finalNet.toFixed(2) + " €";
    document.getElementById("vat-value").textContent = vat.toFixed(2) + " €";
    document.getElementById("final-total").textContent = (finalNet + vat).toFixed(2) + " €";
}

function showInfo(name) {
    let lookup = name.includes("Total Repair") ? "Zplast Total Repair" : (name.includes("Cream") ? "ZplastCream" : (name.includes("Bruise Off") ? "Bruise Off" : (name.includes("Z-boost") ? "Z-boost" : name)));
    const p = productDetails[lookup] || { science: "Πληροφορία μη διαθέσιμη", biblio: "" };
    const modal = document.getElementById('productModal');
    let imgPath = p.img ? p.img : `images/${name}.jpg`;

    modal.innerHTML = `<div class="modal-content"><span style="position:absolute;top:20px;right:20px;cursor:pointer;font-size:2.5rem;" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
        <div style="display:flex; align-items:center; gap:25px; margin-bottom:20px;">
            <img src="${imgPath}" onerror="this.src='https://via.placeholder.com/150?text=ZARKOLIA'" style="width:120px; height:120px; object-fit:contain; border-radius:15px;">
            <h2 style="color:var(--emerald-dark); margin:0;">${name}</h2>
        </div>
        ${p.science}${p.biblio}</div>`;
    modal.style.display = 'block';
}

async function processOrder() {
    const epo = document.getElementById("eponimia").value;
    const afm = document.getElementById("afm").value;
    const doy = document.getElementById("doy").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const payment = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "—";
    
    if(!epo) { alert("Παρακαλώ επιλέξτε Πελάτη!"); return; }

    let itemsForSheet = [];
    let emailItems = "";
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        if(q > 0) {
            itemsForSheet.push(`${p.name} (${q})`);
            emailItems += `* ${p.name} | Τεμ: ${q} | Δώρα: ${document.getElementById(`gift-${i}`).textContent}%0D%0A`;
        }
    });

    if(!itemsForSheet.length) { alert("Η παραγγελία είναι άδεια!"); return; }

    const data = { 
        customer: epo, 
        afm: afm, 
        doy: doy,
        mobile: mobile,
        email: email,
        products: itemsForSheet.join(", "), 
        netValue: document.getElementById("final-net").textContent, 
        vat: document.getElementById("vat-value").textContent, 
        total: document.getElementById("final-total").textContent, 
        payment: payment,
        remarks: document.getElementById("remarks").value 
    };

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true; submitBtn.textContent = "Syncing Cloud...";

    try {
        await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
        alert("ΕΠΙΤΥΧΙΑ! Η παραγγελία καταχωρήθηκε και η βάση πελατών ενημερώθηκε.");
        
        const body = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ%0D%0A%0D%0AΠΕΛΑΤΗΣ: ${epo}%0D%0A%0D%0AΠΡΟΪΟΝΤΑ:%0D%0A${emailItems}%0D%0A------------------------%0D%0AΑΝΑΛΥΣΗ ΕΚΠΤΩΣΕΩΝ:%0D%0AΑρχική Αξία: ${document.getElementById("net-value").textContent}%0D%0AΈκπτωση Τζίρου: ${document.getElementById("disc-perc").textContent}% (-${document.getElementById("disc-val").textContent})%0D%0AΈκπτωση Μετρητών: 2% (-${document.getElementById("cash-disc-val").textContent})%0D%0AΚΑΘΑΡΗ ΑΞΙΑ: ${document.getElementById("final-net").textContent}%0D%0AΦΠΑ (24%): ${document.getElementById("vat-value").textContent}%0D%0A------------------------%0D%0AΤΕΛΙΚΟ ΠΟΣΟ: ${document.getElementById("final-total").textContent}%0D%0A------------------------%0D%0AΤΡΑΠΕΖΕΣ:%0D%0AEUROBANK: GR0302607310000970100732761%0D%0AΠΕΙΡΑΙΩΣ: GR8901722520005252016160277`;
        
        window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=Order_${encodeURIComponent(epo)}&body=${body}`;
    } catch(e) { alert("Σφάλμα σύνδεσης."); }
    finally { submitBtn.disabled = false; submitBtn.textContent = "Ολοκλήρωση & Google Sheet"; }
}

function clearForm() { if(confirm("Εκκαθάριση φόρμας;")) location.reload(); }
