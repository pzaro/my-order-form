// ============================================================
// ZARKOLIA HEALTH - FINAL ERP & SCIENTIFIC COMPENDIUM
// ============================================================

// --- 1. CONFIGURATION (GOOGLE SHEETS) ---
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzD1c9wID4goOn4LhZT8dc3E4kaDcWddmu6QR36x5I1uGYQdLc9bk31W1FVkNvQo_aJzg/exec";

// --- 2. HELPERS ΓΙΑ MODALS & ΠΙΝΑΚΕΣ ---
function hcpTable(rows) {
    return `<table class="hcp-table"><thead><tr><th>Συστατικό</th><th>Όφελος & Μηχανισμός</th></tr></thead><tbody>${rows.map(r => `<tr><td><strong>${r.ing}</strong></td><td>${r.moa}</td></tr>`).join("")}</tbody></table>`;
}

function consumerBlock({ title, bullets, howTo, cautions }) {
    return `<h3>${title}</h3><ul>${bullets.map(b => `<li>${b}</li>`).join("")}</ul>${howTo ? `<h4>Τρόπος χρήσης</h4><p>${howTo}</p>` : ""}${cautions ? `<h4>Προφυλάξεις</h4><p>${cautions}</p>` : ""}`;
}

function biblioList(items) {
    return `<h3>Βιβλιογραφική Τεκμηρίωση</h3><ol>${items.map(i => `<li>${i}</li>`).join("")}</ol>`;
}

// --- 3. ΠΛΗΡΗΣ ΒΑΣΗ ΔΕΔΟΜΕΝΩΝ ΠΕΛΑΤΩΝ ---
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
    "094352564": { eponimia: "ΙΤΧ ΕΛΛΑΣ ΜΟΝΟΠρΟΣΩΠΗ Α", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", phone: "", email: "" },
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
    "802244502": { eponimia: "ΣΦ ΕΛΕΝΗΣ ΜΑΡΙΑΣ  ΝΙΚΟΛΑΙΔΟΥ-ΧρΥΣΟΣΤΟΜΟΥ ΤΖΙΝΤΖΑΡΑ & ΣΙΑ Ο", doy: "Ζ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "", email: "skroutzplus@outlook.com" },
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
    "107015615": { eponimia: "ΜΑΡΚΟΥ ΜΑΡΙΑ ΓΕΩΡΓΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6974066979", phone: "2384028060", email: "markoummp@gmail.com" },
    "127276450": { eponimia: "ΚΙΟΣΗΣ ΙΩΑΝΝΗΣ ΑΘΑΝΑΣΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6976613377", phone: "2384025424", email: "igiannis@yahoo.com" },
    "999387480": { eponimia: "ΜΗΤΚΑΣ ΑΔΑΜΑΝΤΙΟΣ ΚΑΙ ΣΙΑ Ε", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6945411342", phone: "2551028396", email: "farmakiomitkas@gmail.com" }
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

// --- 5. ΕΠΙΣΤΗΜΟΝΙΚΕΣ ΠΕΡΙΓΡΑΦΕΣ ---
const productDetails = [
    { name: 'Z-DermAspis', description: { consumer: consumerBlock({ title: "Υγιεινή & Φυσική Απωθητική Ασπίδα", bullets: ["70% v/v αιθυλική αλκοόλη.", "PMD (Citriodora)."] }), science: `<h3>Rationale</h3>${hcpTable([{ing: "Ethanol", moa: "Μετουσίωση πρωτεϊνών παθογόνων."}])}`, bibliography: biblioList(["Carroll (2006)."]) } },
    { name: 'ZplastCream 40gr', description: { consumer: consumerBlock({ title: "Κλινική Επούλωση & Κυτταρική Ανάπλαση", bullets: ["Εξειδικευμένη για πληγές και τομές.", "SMAD Signaling."] }), science: `<h3>Rationale</h3>${hcpTable([{ing: "Centella Asiatica", moa: "SMAD Signaling: Βιοσύνθεση Κολλαγόνου Ι & III."}])}`, bibliography: biblioList(["Bylka W (2013)."]) } },
    { name: 'ZplastCream 100gr', description: { consumer: consumerBlock({ title: "Κλινική Επούλωση & Κυτταρική Ανάπλαση", bullets: ["Εξειδικευμένη για πληγές και τομές.", "SMAD Signaling."] }), science: `<h3>Rationale</h3>${hcpTable([{ing: "Centella Asiatica", moa: "SMAD Signaling: Βιοσύνθεση Κολλαγόνου Ι & III."}])}`, bibliography: biblioList(["Bylka W (2013)."]) } },
    { name: 'Zplast Total Repair 50ml', description: { consumer: consumerBlock({ title: "Ολική Αναδόμηση Φραγμού", bullets: ["Lipid Replenishment.", "Ω-7 & Ω-5 λιπίδια."] }), science: `<h3>Rationale</h3>${hcpTable([{ing: "Sea Buckthorn Oil", moa: "Membrane Stabilizer: Δομική συνοχή νέου επιθηλίου."}])}`, bibliography: biblioList(["Upadhyay NK (2009)."]) } },
    { name: 'Zplast Total Repair 100ml', description: { consumer: consumerBlock({ title: "Ολική Αναδόμηση Φραγμού", bullets: ["Lipid Replenishment.", "Ω-7 & Ω-5 λιπίδια."] }), science: `<h3>Rationale</h3>${hcpTable([{ing: "Sea Buckthorn Oil", moa: "Membrane Stabilizer: Δομική συνοχή νέου επιθηλίου."}])}`, bibliography: biblioList(["Upadhyay NK (2009)."]) } },
    { name: 'Hydralia Face cream 50ml', description: { consumer: "<h3>Deep Hydration</h3>", science: "<h3>Υδροδυναμική</h3>", bibliography: "" } },
    { name: 'Revitacell Plus Face cream 50ml', description: { consumer: "<h3>Klotho Activation</h3>", science: "<h3>Επιγενετική</h3>", bibliography: "" } },
    { name: 'Revitace Eyes cream Luce 30ml', description: { consumer: "<h3>Microcirculation</h3>", science: "<h3>Μικροκυκλοφορία</h3>", bibliography: "" } },
    { name: 'Alveolair Sir', description: { consumer: "<h3>Secretolysis</h3>", science: "<h3>Αναπνευστικό</h3>", bibliography: "" } },
    { name: 'NUTRI MX PROBIOTIC PREMIUM', description: { consumer: "<h3>Μικροβίωμα</h3>", science: "<h3>Homeostasis</h3>", bibliography: "" } },
    { name: 'NUTRI MX MAGNESIUM 1 Τεμ', description: { consumer: "<h3>Energy & Relax</h3>", science: "<h3>Νευρομυϊκή</h3>", bibliography: "" } },
    { name: 'NUTRI MX A-Z', description: { consumer: "<h3>Multivitamin</h3>", science: "<h3>Μεταβολισμός</h3>", bibliography: "" } },
    { name: 'NUTRI MX OMEGA 3', description: { consumer: "<h3>Lipid Biology</h3>", science: "<h3>Resolvins</h3>", bibliography: "" } },
    { name: 'NUTRI MX JOINT', description: { consumer: "<h3>Chondroprotection</h3>", science: "<h3>Χόνδρος</h3>", bibliography: "" } },
    { name: 'Bruise Off Bite Out & Pain Free cream 50ml', description: { consumer: "<h3>Αποσυμφόρηση</h3>", science: "<h3>NF-kB Pathway</h3>", bibliography: "" } },
    { name: 'Bruise Off Bite Out & Pain Free cream 100ml', description: { consumer: "<h3>Αποσυμφόρηση</h3>", science: "<h3>NF-kB Pathway</h3>", bibliography: "" } },
    { name: 'Z-boost 30 caps', description: { consumer: "<h3>Immune Boost</h3>", science: "<h3>Viral Inhibition</h3>", bibliography: "" } },
    { name: 'Z-boost 12 caps', description: { consumer: "<h3>Immune Boost</h3>", science: "<h3>Viral Inhibition</h3>", bibliography: "" } },
    { name: 'Zarkolia Cosmetic pack', description: { consumer: "<h3>Synergy Pack</h3>", science: "<h3>Tri-modal intervention</h3>", bibliography: "" } }
];

// --- 6. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", function() {
    const btnContainer = document.getElementById('productButtonsContainer');
    const tableBody = document.querySelector('#product-table tbody');

    products.forEach((p, index) => {
        // Κατάλογος Κουμπιών
        const btn = document.createElement('button');
        btn.className = 'product-btn';
        btn.innerHTML = `<strong>${p.name}</strong><br><span style="color:var(--emerald-dark);">${p.price.toFixed(2)} €</span>`;
        btn.onclick = () => showInfo(p.name);
        btnContainer.appendChild(btn);

        // Γραμμές Πίνακα
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

    // AFM Search Logic (CORRECTED)
    const afmInput = document.getElementById('afm');
    afmInput.addEventListener('input', function() {
        const val = this.value.trim();
        if (knownCustomers[val]) {
            const c = knownCustomers[val];
            document.getElementById('eponimia').value = c.eponimia;
            document.getElementById('doy').value = c.doy;
            document.getElementById('mobile').value = c.mobile;
            document.getElementById('email').value = c.email;
        }
    });
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
    document.getElementById("net-value").textContent = net.toFixed(2) + " €";
    document.getElementById("vat-value").textContent = (net * 0.24).toFixed(2) + " €";
    document.getElementById("final-total").textContent = (net * 1.24).toFixed(2) + " €";
}

function showInfo(name) {
    const p = productDetails.find(item => item.name === name);
    const modal = document.getElementById('productModal');
    modal.innerHTML = `<div class="modal-content"><span style="position:absolute;top:20px;right:20px;cursor:pointer;font-size:2.5rem;color:#aaa;" onclick="this.parentElement.parentElement.style.display='none'">&times;</span><h2 style="color:var(--emerald-dark);">${name}</h2>${p ? p.description.consumer + '<hr>' + p.description.science + p.description.bibliography : "Πληροφορία μη διαθέσιμη"}</div>`;
    modal.style.display = 'block';
}

// --- 7. SYNC & EMAIL LOGIC ---
async function processOrder() {
    const eponimia = document.getElementById("eponimia").value;
    const afm = document.getElementById("afm").value;
    const payment = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "Δεν επιλέχθηκε";
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

    const orderData = { customer: eponimia, afm: afm, products: productsForSheet.join(", "), netValue: document.getElementById("net-value").textContent, vat: document.getElementById("vat-value").textContent, total: document.getElementById("final-total").textContent, payment: payment, remarks: document.getElementById("remarks").value };

    submitBtn.disabled = true;
    submitBtn.textContent = "Αποστολή στο Cloud...";

    try {
        await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(orderData) });
        alert("ΕΠΙΤΥΧΙΑ! Η παραγγελία καταχωρήθηκε.");
        
        // EMAIL LAUNCH
        const subject = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ ZARKOLIA HEALTH / ${eponimia}`;
        const body = `Αντίγραφο Παραγγελίας - ZARKOLIA HEALTH%0D%0A%0D%0AΠΕΛΑΤΗΣ: ${eponimia}%0D%0A%0D%0AΠΡΟΪΟΝΤΑ:%0D%0A${productsForEmail}%0D%0AΣΥΝΟΛΟ: ${document.getElementById("final-total").textContent}%0D%0A%0D%0AΠΛΗΡΩΜΗ: ${payment}%0D%0AIBAN ΠΕΙΡΑΙΩΣ: GR89 0172 2520 0052 5201 6160 277`;
        window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    } catch (e) { alert("Σφάλμα Cloud."); }
    finally { submitBtn.disabled = false; submitBtn.textContent = "Ολοκλήρωση & Google Sheet"; }
}

function clearForm() { if(confirm("Εκκαθάριση φόρμας;")) location.reload(); }
