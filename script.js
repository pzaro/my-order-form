// --- ΒΑΣΗ ΔΕΔΟΜΕΝΩΝ ΠΕΛΑΤΩΝ (Πλήρης Λίστα) ---
const knownCustomers = {
    "084186015": { eponimia: "PROJECT ΚΑΣΑΠΑΚΗΣ Θ & ΣΙΑ Ο.Ε", doy: "Η ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "2310832124", email: "info@projectk.gr" },
    "999295989": { eponimia: "Α ΓΚΑΙΤΑΤΖΗΣ ΚΑΙ ΣΙΑ Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382099191", email: "gkaitatzisaggelos@yahoo.gr" },
    "128430492": { eponimia: "ΑΓΤΖΙΔΗΣ ΑΝΔΡΕΑΣ ΛΑΖΑΡΟ", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341103050", email: "andreasagtzidis@gmail.com" },
    "802096212": { eponimia: "ΑΝΔΡΗ ΚΛΕΙΔΑΡΑ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "+302391022725", email: "andrykleidara@gmail.com" },
    "151161020": { eponimia: "ΒΕΧΤΣΑΛΗΣ ΣΩΤΗΡΙΟΣ ΧΡΗΣΤΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6985799070", phone: "2381082057", email: "sotirisvechtsalis@hotmail.com" },
    "056068437": { eponimia: "ΓΑΝΑ ΒΑΣΙΛΙΚΗ ΕΥΑΓΓΕΛΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6932473189", phone: "2382082077", email: "vassogana@gmail.com" },
    "041630585": { eponimia: "ΓΕΡΟΝΤΟΠΟΥΛΟΣ ΝΙΚΗΦΟΡΟΣ ΘΕΟΦΙΛΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6942207814", phone: "2551028764", email: "nikigero1@hotmail.com" },
    "061835127": { eponimia: "ΓΙΟΥΡΤΣΟΓΛΟΥ ΧΡΗΣΤΟΣ ΕΥΑΓΓΕΛΟ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6945188398", phone: "2553022922", email: "giourtsoglou@yahoo.gr" },
    "134811951": { eponimia: "ΓΙΟΥΤΙΚΑ ΕΛΕΥΘΕΡΙΑ ΜΑΡΙΑ ΠΑΝΑΓΙΩΤΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382022694", email: "farmgioutikaelma@gmail.com" },
    "107428053": { eponimia: "ΓΩΝΙΑΔΗ ΛΙΑΝΑ ΑΧΙΛΛΕΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381089588", email: "lgfarm15@gmail.com" },
    "137239505": { eponimia: "ΔΑΜΙΑΝΑΚΗΣ ΣΤΑΥΡΟΣ ΓΕΩΡΓΙΟ", doy: "ΗΡΑΚΛΕΙΟΥ", mobile: "", phone: "", email: "depassagepharmacy@gmail.com" },
    "144906695": { eponimia: "ΔΗΜΗΤΡΙΑΔΟΥ ΑΛΕΞΑΝΔΡΑ ΙΩΑΝΝΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381089199", email: "alex+dim.0807@gmail.com" },
    "134848587": { eponimia: "ΔΟΥΛΚΕΡΙΔΗΣ ΚΟΣΜΑΣ ΠΑΝΑΓΙΩΤΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2382042630", email: "kdoulker@hotmail.com" },
    "144429978": { eponimia: "ΕΥΤΥΧΙΔΟΥ ΑΝΑΣΤΑΣΙΑ ΓΕΩΡΓΙΟ", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", phone: "", email: "anastasia.e1988@gmail.com" },
    "141953562": { eponimia: "ΖΑΧΑΡΙΑΔΟΥ ΓΕΩΡΓΙΑ ΜΙΧΑΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382051791", email: "gzahariadou@gmail.com" },
    "141962417": { eponimia: "ΖΕΡΒΟΥ ΦΩΤΕΙΝΗ ΘΕΟΔΩΡΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382022264", email: "fotzervou@gmail.com" },
    "094352564": { eponimia: "ΙΤΧ ΕΛΛΑΣ ΜΟΝΟΠΡΟΣΩΠΗ Α", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", phone: "", email: "" },
    "153360643": { eponimia: "ΚΑΖΑΚΟΥ ΚΩΝΣΤΑΝΤΙΝΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6974171503", phone: "+302551023378", email: "kazakoukonstantina@gmail.com" },
    "105965545": { eponimia: "ΚΑΛΑΙΤΖΙΔΗΣ ΕΥΣΤΑΘΙΟΣ ΦΩΤΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6947438490", phone: "", email: "kalatzidis@gmail.com" },
    "129166674": { eponimia: "ΛΑΠΙΧΟΥ ΚΑΛΛΙΟΠΗ", doy: "ΓΙΑΝΝΙΤΣΑ", mobile: "", phone: "2382028229", email: "popilapi1976@gmail.com" },
    "134887503": { eponimia: "ΚΑΠΝΑ ΖΩΗ ΘΕΟΔΩΡΟ", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "2391021224", email: "zoi526@hotmail.com" },
    "043720722": { eponimia: "ΚΑΡΑΔΗΜΟΥ ΚΩΝΣΤΑΝΤΙΝΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "", email: "karad12@otenet.gr" },
    "999296071": { eponimia: "ΚΑΡΑΟΥΛΑΝΗ ΕΥΑΓΓΕΛΙΑ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382042299", email: "psiamanta@hotmail.com" },
    "107019964": { eponimia: "ΚΑΡΑΤΖΙΔΗΣ ΒΑΣΙΛΕΙΟΣ ΠΑΝΑΓΙΩΤΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2384042170", email: "karatzidis.pharmacy@gmail.com" },
    "997961880": { eponimia: "ΚΑΡΙΠΙΔΟΥ ΧΡΙΣΤΙΝΑ ΚΑΙ ΣΙΑ ΟΜΟΡΡΥΘΜΟΣ ΕΤΑΙΡΕΙ", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341020865", email: "chriskaripidou@gmail.com" },
    "996853821": { eponimia: "ΚΟΙΝΩΝΙΑ ΚΛΗΡΟΝΟΜΩΝ ΔΟΥΛΚΕΡΙΔΗ ΧΑΡΑΛΑΜΠΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381088845", email: "farmakeio.skydra@gmail.com" },
    "121949072": { eponimia: "ΚΟΡΥΦΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ ΙΩΑΝΝΗ", doy: "Δ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "6943106207", phone: "2310525383", email: "aristotelous.pharmacy@gmail.com" },
    "134825144": { eponimia: "ΚΟΥΤΣΟΚΩΣΤΑ ΙΩΑΝΝΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382024141", email: "joannamedicine@gmail.com" },
    "030796217": { eponimia: "ΚΥΡΙΑΚΟΥ ΑΓΛΑΙΑ ΝΙΚΟΛΑΟ", doy: "ΝΕΩΝ ΜΟΥΔΑΝΙΩΝ", mobile: "", phone: "2399021663", email: "kyriakou.agla@gmail.com" },
    "802379525": { eponimia: "ΛΑΝΤΟ ΒΙΛΛΑΣ Ο", doy: "ΡΕΘΥΜΝΟΥ", mobile: "", phone: "", email: "teoreaver@gmail.com" },
    "121428438": { eponimia: "ΛΑΠΠΑ ΑΓΓΕΛΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382061786", email: "ang.lappa@gmail.com" },
    "150095708": { eponimia: "ΜΑΙΝΟΥ ΑΙΚΑΤΕΡΙΝΗ ΧΡΗΣΤΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6989858821", phone: "", email: "katiamainou@yahoo.com" },
    "042643289": { eponimia: "ΜΑΙΝΟΥ ΑΛΕΞΑΝΔΡΑ ΝΙΚΟΛΑΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6977591863", phone: "", email: "mainoualex@gmail.com" },
    "079214571": { eponimia: "ΜΑΝΔΑΛΤΣΗ ΑΙΚΑΤΕΡΙΝΗ ΔΗΜΗΤΡΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6942690321", phone: "2382022735", email: "farmakiomandaltsi@gmail.com" },
    "151162495": { eponimia: "ΜΑΝΘΟΥ ΧΡΗΣΤΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381400770", email: "christosmanthougr@gmail.com" },
    "800414167": { eponimia: "ΜΑΧΜΟΥΡΙΔΟΥ ΚΑΙ ΣΙΑ Ο", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6944258002", phone: "2553024676", email: "www.maxmouridou@hotmail.gr" },
    "999387480": { eponimia: "ΜΗΤΚΑΣ ΑΔΑΜΑΝΤΙΟΣ ΚΑΙ ΣΙΑ Ε", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6945411342", phone: "2551028396", email: "farmakiomitkas@gmail.com" },
    "135001952": { eponimia: "ΜΟΥΛΑ ΕΛΕΥΘΕΡΙΑ ΠΑΝΤΕΛΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2384051111", email: "ele.moula@gmail.com" },
    "801577292": { eponimia: "ΝΙΚΟΛΑΟΣ ΚΟΥΤΣΟΥΜΠΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΤΡΙΠΟΛΗΣ", mobile: "6981203517", phone: "", email: "nickoskoutsou@gmail.com" },
    "123981590": { eponimia: "ΠΑΠΑΓΕΩΡΓΙΟΥ ΜΑΡΙΑ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6972525223", phone: "", email: "alexmeri620@gmail.com" },
    "047862819": { eponimia: "ΠΑΠΑΔΑΚΗΣ ΝΙΚΟΛΑΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΧΑΛΚΙΔΑΣ", mobile: "", phone: "", email: "nikotero@gmail.com" },
    "065747063": { eponimia: "ΠΑΠΑΙΩΑΝΝΟΥ ΕΥΘΥΜΙΑ ΑΝΤΩΝΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6977177896", phone: "", email: "papaioannoue415@gmail.com" },
    "142265310": { eponimia: "ΣΑΠΑΚΟΛΗ ΕΥΑΓΓΕΛΙΑ ΠΕΤΡΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "", email: "sapakoli@hotmail.gr" },
    "141967020": { eponimia: "ΣΔΡΑΥΚΑΚΗΣ ΒΑΣΙΛΕΙΟΣ ΔΗΜΗΤΡΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "+306945015490", phone: "+302381061290", email: "vsdrafk@gmail.com" },
    "802644097": { eponimia: "ΣΥΣΤΕΓΑΖΟΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΕΥΑ ΚΟΤΙΔΟΥ ΠΛΑΤΗΣ ΒΑΣΙΛΕΙΟΣ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΕΙ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2384022908", email: "evakotidou@gmail.com" },
    "081095923": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΑΔΑΜΙΔΗ Α ΑΔΑΜΙΔΟΥ Μ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΙ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6976974411", phone: "2551021444", email: "adamidou.mar@gmail.com" },
    "802744858": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΓΚΑΪΝΤΑΤΖΗΣ ΒΑΣΙΛΕΙΟΣ ΓΚΑΪΝΤΑΤΖΗ ΕΥΔΟΞΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6980289717", phone: "2551024463", email: "gkaintatzi.pharmacy@gmail.com" },
    "800367008": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΘΕΟΔΟΣΙΟΣ ΑΔΑΜΙΔΗΣ ΜΑΡΘΑ ΑΔΑΜΙΔΟΥ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "698306702", phone: "2382062100", email: "adamidis86@gmail.com" },
    "800699181": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ Κ ΓΕΩΡΓΙΑΔΟΥ ΚΑΙ Κ ΚΑΤΣΙΑΝΟΣ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341029949", email: "katsianoskos@gmail.com" },
    "997961412": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΠΑΝΑΓΙΩΤΙΔΟΥ ΑΙΚΑΤΕΡΙΝΗ ΦΡΑΓΓΙΔΟΥ ΝΙΚΟΛΕΤΑ Ο", doy: "ΚΙΛΚΙΣ", mobile: "6986962826", phone: "2341023924", email: "farmakeiofraggidou@gmail.com" },
    "800759157": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΧΡΗΣΤΟΥ ΠΕΛΑΓΙΑ ΚΑΙ ΣΑΡΗΓΚΙΟΛΗΣ ΟΡΕΣΤΗΣ ΙΩΑΝΝΗΣ Ο", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "+302384024298", email: "orestis.sarigkiolis@gmail.com" },
    "800616945": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΨΥΧΟΓΥΟΥ ΑΙΚΑΤΕΡΙΝΗ - ΨΥΧΟΓΥΟΥ ΣΟΦΙΑ -ΧΡΙΣΤΙΝΑ Ο.Ε", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381022232", email: "anaspsi@gmail.com" },
    "802244502": { eponimia: "ΣΦ ΕΛΕΝΗΣ ΜΑΡΙΑΣ ΝΙΚΟΛΑΙΔΟΥ-ΧΡΥΣΟΣΤΟΜΟΥ ΤΖΙΝΤΖΑΡΑ & ΣΙΑ Ο", doy: "Ζ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "", email: "skroutzplus@outlook.com" },
    "152502387": { eponimia: "ΤΖΙΝΕΒΗ ΑΛΙΚΗ ΑΝΔΡΟΝΙΚΗ ΠΑΝΑΓΙΩΤΗ", doy: "ΝΕΩΝ ΜΟΥΔΑΝΙΩΝ", mobile: "6934165285", phone: "2399020050", email: "alicetzi28@gmail.com" },
    "300639167": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΟΥ ΕΛΕΝΗ ΑΡΙΣΤΕΙΔΗ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6940207039", phone: "2553024243", email: "eleni.triantafillidou@gmail.com" },
    "998721309": { eponimia: "ΤΣΙΤΛΑΚΙΔΟΥ Μ ΚΑΙ ΣΙΑ Ο", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381091116", email: "maria_tsitlakidou@hotmail.com" },
    "997687603": { eponimia: "ΤΣΙΤΣΙΟΣ ΑΘΑΝΑΣΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6978762108", phone: "2531022785", email: "pharmthanos@gmail.com" },
    "140820466": { eponimia: "ΤΣΟΝΟΓΛΟΥ ΔΕΣΠΟΙΝΑ ΔΙΟΝΥΣΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382093940", email: "despoinarsonoglou@gmail.com" },
    "165645258": { eponimia: "ΦΑΝΤΙΔΟΥ ΕΙΡΗΝΗ ΛΑΖΑΡΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381089980", email: "fantidou.pharmacy@gmail.com" },
    "047359704": { eponimia: "ΦΑΡΑΚΛΙΩΤΗΣ ΔΗΜΗΤΡΙΟΣ ΘΩΜΑ", doy: "ΧΑΛΚΙΔΑΣ", mobile: "6973747981", phone: "2221060657", email: "farmakeiokamares@gmail.com" },
    "800472889": { eponimia: "ΦΑΡΜΑΚΕΙΑ ΣΠΥΡΙΔΗΣ Δ ΒΑΛΑΣΙΔΟΥ ΙΣ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341023040", email: "dimitris_sp@yahoo.com" },
    "998548940": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΧΤΣΗΣ ΣΤΕΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6948053736", phone: "2551029523", email: "aachtsi@gmail.com" },
    "800339648": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΖΙΟΥΤΑ ΓΕΩΡΓΙΑ ΧΡΙΣΤΙΑΝΑ ΚΑΙ ΣΙΑ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341028777", email: "zioutaxristiana@hotmail.gr" },
    "999228431": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΗΛΙΑ ΧΑΛΙΓΙΑΝΝΗ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6936632283", phone: "2531023758", email: "iliaspharm@yahoo.com" },
    "998720640": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΜΕΡΟΠΗΣ ΜΠΑΧΤΣΕΒΑΝΙΔΟΥ ΚΑΙ ΣΙΑ Ε", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381023080", email: "fiorabach@hotmail.com" },
    "802741555": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΤΣΩΝΗ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6932461323", phone: "2551038473", email: "tsonispharmacy@gmail.com" },
    "800586973": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΦΑΡΜΑΚΗΣ ΙΩΑΝΝΗΣ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6984914098", phone: "+302391091551", email: "farmakisg21@hotmail.gr" },
    "999260690": { eponimia: "ΦΛΩΡΟΣ ΓΕΩΡΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "6944732173", phone: "", email: "florospharmacy@yahoo.gr" },
    "058406703": { eponimia: "ΧΑΤΖΗΣΩΤΗΡΙΟΥ ΠΕΤΡΟΣ ΣΤΕΡΓΙΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6906133900", phone: "2551027333", email: "chazpe@gmail.com" },
    "169699055": { eponimia: "ΧΕΛΗ ΑΝΑΣΤΑΣΙΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6988820879", phone: "2381097677", email: "anasta.cheli10@gmail.com" },
    "159693610": { eponimia: "ΧΡΥΣΟΣΤΟΜΙΔΗΣ ΑΝΤΩΝΙΟΣ ΠΑΡΑΣΚΕΥΑ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382025735", email: "a.chrysostomidis@hotmail.com" },
    "133810643": { eponimia: "ΧΥΤΑ ΕΛΕΝΗ ΔΗΜΗΤΡΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "", email: "elchyt@hotmqil.com" }
};

// --- ΛΙΣΤΑ ΠΡΟΪΟΝΤΩΝ ---
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

// --- ΠΛΗΡΕΙΣ ΠΕΡΙΓΡΑΦΕΣ ΠΡΟΪΟΝΤΩΝ ---
const productDetails = [
    { 
        name: 'Z-DermAspis',
        description: { consumer: `<h3>Καινοτόμο Σπρέι Διπλής Δράσης</h3><p>Το Z-Derm Aspis είναι σχεδιασμένο για να προσφέρει ταυτόχρονα καθαρισμό της επιδερμίδας και αποτελεσματική προστασία από τα έντομα.</p>`, science: `<h3>Αποδεδειγμένη Δράση</h3><p><strong>Αιθυλική Αλκοόλη:</strong> Αντισηπτικό.<br><strong>PMD:</strong> Φυτικό εντομοαπωθητικό.</p>`, bibliography: `<p>[1] WHO Guidelines...</p>` }
    },
    { 
        name: 'ZplastCream 40gr',
        description: { consumer: `<h3>Εξειδικευμένη Αναπλαστική Κρέμα</h3><p>Για την εντατική φροντίδα και ταχεία επούλωση του ταλαιπωρημένου δέρματος.</p>`, science: `<h3>Συστατικά</h3><p>Βαλσαμόχορτο, Αβοκάντο, Ιπποφαές.</p>`, bibliography: `<p>Δεν παρασχέθηκε.</p>` }
    },
    { 
        name: 'ZplastCream 100gr',
        description: { consumer: `<h3>Εξειδικευμένη Αναπλαστική Κρέμα (100gr)</h3><p>Μεγαλύτερη συσκευασία για εκτεταμένη χρήση.</p>`, science: `<h3>Συστατικά</h3><p>Βαλσαμόχορτο, Αβοκάντο, Ιπποφαές.</p>`, bibliography: `<p>Δεν παρασχέθηκε.</p>` }
    },
    { 
        name: 'Bruise Off Bite Out & Pain Free cream',
        description: { consumer: `<h3>Κρέμα με Άρνικα</h3><p>Προσφέρει ανακούφιση από μυϊκές και αρθρικές ενοχλήσεις.</p>`, science: `<h3>Συστατικά</h3><p>Άρνικα, Λινέλαιο, Λεβάντα.</p>`, bibliography: `<p>Lyss, G., et al.</p>` }
    },
    { 
        name: 'Bruise Off Bite Out & Pain Free cream 100ml',
        description: { consumer: `<h3>Κρέμα με Άρνικα (100ml)</h3><p>Προσφέρει ανακούφιση από μυϊκές και αρθρικές ενοχλήσεις. Μεγάλη συσκευασία.</p>`, science: `<h3>Συστατικά</h3><p>Άρνικα, Λινέλαιο, Λεβάντα.</p>`, bibliography: `<p>Lyss, G., et al.</p>` }
    },
    { 
        name: 'Z-boost 30 caps',
        description: { consumer: `<h3>Ενίσχυση Ανοσοποιητικού</h3><p>Προηγμένο συμπλήρωμα διατροφής για την ολιστική ενίσχυση του ανοσοποιητικού.</p>`, science: `<h3>Συστατικά</h3><p>Ψευδάργυρος, Σελήνιο, Q10.</p>`, bibliography: `<p>Hemilä, H. (2017)</p>` }
    },
    { 
        name: 'Z-boost 12 caps',
        description: { consumer: `<h3>Ενίσχυση Ανοσοποιητικού (12 caps)</h3><p>Προηγμένο συμπλήρωμα διατροφής. Συσκευασία ταξιδίου.</p>`, science: `<h3>Συστατικά</h3><p>Ψευδάργυρος, Σελήνιο, Q10.</p>`, bibliography: `<p>Hemilä, H. (2017)</p>` }
    },
    { 
        name: 'Zarkolia Cosmetic pack',
        description: { consumer: `<h3>Ολοκληρωμένη Περιποίηση</h3><p>Σετ τριών προϊόντων για ενυδάτωση και αντιγήρανση.</p>`, science: `<h3>Προϊόντα</h3><p>Revitacell, Hydralia, Eyes.</p>`, bibliography: `<p>-</p>` }
    },
    { 
        name: 'Hydralia Face cream 50ml',
        description: { consumer: `<h3>Βαθιά Ενυδάτωση</h3><p>Κρέμα για την αποκατάσταση της φυσικής ισορροπίας υγρασίας.</p>`, science: `<h3>Συστατικά</h3><p>Υαλουρονικό, Αβοκάντο, Jojoba.</p>`, bibliography: `<p>Bukhari, S. N. A., et al.</p>` }
    },
    { 
        name: 'Revitacell Plus Face cream 50ml',
        description: { consumer: `<h3>Κρέμα Πολλαπλής Δράσης</h3><p>Στοχεύει στα κύρια σημάδια της γήρανσης.</p>`, science: `<h3>Συστατικά</h3><p>Μαστίχα, Ρόδι, Super Berries.</p>`, bibliography: `<p>Lall, N., et al.</p>` }
    },
    { 
        name: 'Revitace Eyes cream Luce 30ml',
        description: { consumer: `<h3>Κρέμα Ματιών</h3><p>Για μαύρους κύκλους και πρήξιμο.</p>`, science: `<h3>Συστατικά</h3><p>Ιπποκαστανιά, Άρνικα, Υαλουρονικό.</p>`, bibliography: `<p>Gallelli, L. (2019)</p>` }
    },
    { 
        name: 'Alveolair Sir',
        description: { consumer: `<h3>Φυσικό Σιρόπι</h3><p>Για την αντιμετώπιση του βήχα.</p>`, science: `<h3>Συστατικά</h3><p>Ευκάλυπτος, Θυμάρι, Αλθέα.</p>`, bibliography: `<p>Sadlon, A. E., et al.</p>` }
    },
    { 
        name: 'NUTRI MX PROBIOTIC PREMIUM', 
        description: { consumer: `<h3>Προβιοτικά</h3><p>Για την υγεία του εντέρου. 18 στελέχη, 10 δις CFU.</p>`, science: `<h3>Δράση</h3><p>Υγεία Γαστρεντερικού, Μικροβίωμα.</p>`, bibliography: `<p>Lee JY, et al.</p>` } 
    },
    { 
        name: 'NUTRI MX MAGNESIUM 1 Τεμ', 
        description: { consumer: `<h3>Μαγνήσιο</h3><p>Για το νευρικό σύστημα και τους μυς.</p>`, science: `<h3>Δράση</h3><p>Συμπαράγοντας σε 300+ αντιδράσεις.</p>`, bibliography: `<p>-</p>` } 
    },
    { 
        name: 'NUTRI MX A-Z', 
        description: { consumer: `<h3>Πολυβιταμίνη</h3><p>Για όλη την οικογένεια.</p>`, science: `<h3>Δράση</h3><p>Κάλυψη διατροφικών κενών.</p>`, bibliography: `<p>-</p>` } 
    },
    { 
        name: 'NUTRI MX OMEGA 3', 
        description: { consumer: `<h3>Ωμέγα 3</h3><p>Για την καρδιά και το δέρμα.</p>`, science: `<h3>Δράση</h3><p>Αντιφλεγμονώδες, Καρδιαγγειακό.</p>`, bibliography: `<p>-</p>` } 
    },
    { 
        name: 'NUTRI MX JOINT', 
        description: { consumer: `<h3>Joint Support</h3><p>Για τις αρθρώσεις.</p>`, science: `<h3>Συστατικά</h3><p>Γλυκοζαμίνη, Χονδροϊτίνη, MSM, Κολλαγόνο.</p>`, bibliography: `<p>Kislingh, et al.</p>` } 
    }
];

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('productModal').innerHTML = `<div class="modal-content"><div class="modal-header"><h2 id="modalProductName"></h2><span class="close-button" onclick="closeProductModal()">&times;</span></div><div class="modal-body"><div class="modal-tabs"><button class="tab-button active" onclick="openTab(event, 'Consumer')">Για το Κοινό</button><button class="tab-button" onclick="openTab(event, 'Science')">Επιστημονικά</button><button class="tab-button" onclick="openTab(event, 'Biblio')">Βιβλιογραφία</button></div><div id="Consumer" class="tab-content" style="display: block;"></div><div id="Science" class="tab-content"></div><div id="Biblio" class="tab-content"></div></div><div class="modal-quick-add"><label for="modalQuantity">Ποσότητα:</label><input type="number" id="modalQuantity" min="1" value="1"><button id="modal-add-button">Ενημέρωση</button></div></div>`;
    document.getElementById('previewModal').innerHTML = `<div class="modal-content"><div class="modal-header"><h2>Προεπισκόπηση</h2><span class="close-button" onclick="closePreviewModal()">&times;</span></div><div class="modal-body"><pre id="previewContent"></pre></div><div class="modal-footer"><button id="saveTxtButton" class="btn" style="background-color:#5cb85c">Αποθήκευση</button><button class="btn" style="background-color:#aaa" onclick="closePreviewModal()">Κλείσιμο</button></div></div>`;
    
    const productButtonsContainer = document.getElementById('productButtonsContainer');
    products.forEach((p, index) => {
        const button = document.createElement('button');
        button.className = 'product-btn';
        button.textContent = p.name;
        button.onclick = () => showProductDetails(index);
        productButtonsContainer.appendChild(button);
    });
    
    const tableBody = document.querySelector('#product-table tbody');
    products.forEach((p, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p.name}</td>
            <td>${p.price.toFixed(2)} €</td>
            <td><input type="number" class="quantity" id="qty-${index}" min="0" data-price="${p.price}" oninput="updateAll()" value="0"></td>
            <td class="gifts">0</td>
            <td class="effective-price normal">${p.price.toFixed(2)} €</td>
            <td class="line-total">0.00 €</td>
        `;
        tableBody.appendChild(row);
    });

    // --- ΑΥΤΟΜΑΤΗ ΑΝΑΖΗΤΗΣΗ ΠΕΛΑΤΗ ΜΕ ΑΦΜ ---
    const afmInput = document.getElementById('afm');
    afmInput.addEventListener('input', function() {
        const afm = this.value.trim();
        if (knownCustomers[afm]) {
            const customer = knownCustomers[afm];
            document.getElementById('eponimia').value = customer.eponimia;
            document.getElementById('doy').value = customer.doy;
            document.getElementById('mobile').value = customer.mobile;
            document.getElementById('phone').value = customer.phone;
            document.getElementById('email').value = customer.email;
        }
    });
    
    updateAll();
});

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) { tabcontent[i].style.display = "none"; }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) { tablinks[i].className = tablinks[i].className.replace(" active", ""); }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function showProductDetails(productIndex){
    const p = productDetails[productIndex];
    const modalProductName = document.getElementById('modalProductName');
    const consumerTab = document.getElementById('Consumer');
    const scienceTab = document.getElementById('Science');
    const biblioTab = document.getElementById('Biblio');
    
    const tableInput = document.getElementById(`qty-${productIndex}`);
    document.getElementById('modalQuantity').value = tableInput.value > 0 ? tableInput.value : 1;

    if(p){
        modalProductName.textContent = products[productIndex].name;
        consumerTab.innerHTML = p.description.consumer || '<p>Δεν υπάρχουν πληροφορίες.</p>';
        scienceTab.innerHTML = p.description.science || '<p>Δεν υπάρχουν πληροφορίες.</p>';
        biblioTab.innerHTML = p.description.bibliography || '<p>Δεν υπάρχουν πληροφορίες.</p>';
    } else {
        modalProductName.textContent = products[productIndex].name;
        consumerTab.innerHTML = `<p>Δεν βρέθηκε αναλυτική περιγραφή για αυτό το προϊόν.</p>`;
        scienceTab.innerHTML = '';
        biblioTab.innerHTML = '';
    }

    const addButton = document.getElementById('modal-add-button');
    const newAddButton = addButton.cloneNode(true);
    addButton.parentNode.replaceChild(newAddButton, addButton);
    
    newAddButton.onclick = () => {
        const quantity = parseInt(document.getElementById('modalQuantity').value) || 0;
        const qtyInput = document.getElementById(`qty-${productIndex}`);
        qtyInput.value = quantity;
        updateAll();
        closeProductModal();
    };

    document.getElementById('productModal').style.display='block';
    document.querySelector('.tab-button').click();
}

function addToOrder(productName, quantity) {
    const tableBody = document.querySelector('#product-table tbody');
    const productData = products.find(p => p.name === productName);
    if (!productData) return;

    let existingRow = null;
    tableBody.querySelectorAll('tr').forEach(row => {
        if (row.cells[0].textContent === productName) {
            existingRow = row;
        }
    });

    if (existingRow) {
        const quantityInput = existingRow.querySelector('.quantity');
        let currentQuantity = parseInt(quantityInput.value) || 0;
        quantityInput.value = currentQuantity + quantity;
    } else {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${productData.name}</td>
            <td><input type="number" class="quantity" min="0" data-price="${productData.price}" oninput="updateAll()" value="${quantity}"></td>
            <td class="gifts">0</td>
            <td class="effective-price normal">${productData.price.toFixed(2)} €</td>
            <td class="line-total">0.00 €</td>
        `;
        tableBody.appendChild(row);
    }
    
    updateAll();
    closeProductModal();
}

function closeProductModal(){document.getElementById('productModal').style.display='none';}
function closePreviewModal(){document.getElementById('previewModal').style.display='none';}

function calculateGifts(quantity){if(quantity<9)return 0;if(quantity>=9&&quantity<18)return 1;if(quantity>=18&&quantity<24)return 3;if(quantity>=24&&quantity<48)return 6;const ratio=15/48;return Math.floor(quantity*ratio);}

function updateAll(){
    let netTotal = 0;
    const rows = document.querySelectorAll('#product-table tbody tr');
    
    rows.forEach(row => {
        const quantityInput = row.querySelector(".quantity");
        const quantity = parseInt(quantityInput.value) || 0;
        
        const price = parseFloat(quantityInput.dataset.price);
        const gifts = calculateGifts(quantity);
        const totalItems = quantity + gifts;
        const lineTotal = quantity * price;
        let effectivePrice = price;
        if (quantity > 0 && totalItems > 0) {
            effectivePrice = lineTotal / totalItems;
        }
        
        const priceCell = row.querySelector(".effective-price");
        priceCell.innerHTML = `${effectivePrice.toFixed(2)} €`;
        if (effectivePrice < price - 0.001) {
            priceCell.classList.add('discounted');
            priceCell.classList.remove('normal');
        } else {
            priceCell.classList.add('normal');
            priceCell.classList.remove('discounted');
        }
        
        row.querySelector(".gifts").textContent = gifts;
        row.querySelector(".line-total").innerHTML = `${lineTotal.toFixed(2)} €`;
        netTotal += lineTotal;
    });

    const vat = netTotal * 0.24;
    const finalTotal = netTotal + vat;

    document.getElementById("net-value").innerHTML = `${netTotal.toFixed(2)} €`;
    document.getElementById("vat-value").innerHTML = `${vat.toFixed(2)} €`;
    document.getElementById("final-total").innerHTML = `${finalTotal.toFixed(2)} €`;
}

function clearForm(){
    document.getElementById("orderForm").reset();
    document.querySelectorAll(".quantity").forEach(q=>{q.value="0"});
    updateAll();
}

function getOrderData(){
    const c={eponimia:document.getElementById("eponimia").value,afm:document.getElementById("afm").value,doy:document.getElementById("doy").value,mobile:document.getElementById("mobile").value,phone:document.getElementById("phone").value,email:document.getElementById("email").value};
    const i=[];
    document.querySelectorAll("#product-table tbody tr").forEach(r=>{
        const q=parseInt(r.querySelector('.quantity').value)||0;
        if (q>0) {
             i.push({
                 name:r.cells[0].textContent,
                 quantity:q,
                 gifts:parseInt(r.querySelector('.gifts').textContent),
                 effectivePrice:r.querySelector('.effective-price').textContent,
                 total:r.querySelector('.line-total').textContent
             });
        }
    });
    return{
        customerData:c,
        items:i,
        totals:{
            net:document.getElementById("net-value").textContent,
            vat:document.getElementById("vat-value").textContent,
            final:document.getElementById("final-total").textContent
        }
    }
}

// --- ΝΕΑ ΣΥΝΑΡΤΗΣΗ EMAIL ΜΕ ΒΕΛΤΙΩΜΕΝΗ ΕΜΦΑΝΙΣΗ ---
function generateEmailBody() {
    const { customerData, items, totals } = getOrderData();
    let body = `Νέα Παραγγελία\n\n`;
    body += `*********************************\n`;
    body += `* ΣΤΟΙΧΕΙΑ ΠΕΛΑΤΗ      *\n`;
    body += `*********************************\n`;
    body += `ΕΠΩΝΥΜΙΑ: ${customerData.eponimia || '-'}\n`;
    body += `ΑΦΜ:      ${customerData.afm || '-'}\n`;
    body += `ΔΟΥ:      ${customerData.doy || '-'}\n`;
    body += `ΚΙΝΗΤΟ:   ${customerData.mobile || '-'}\n`;
    body += `ΣΤΑΘΕΡΟ:  ${customerData.phone || '-'}\n`;
    body += `EMAIL:    ${customerData.email || '-'}\n\n`;

    body += `*********************************\n`;
    body += `* ΠΑΡΑΓΓΕΛΙΑ           *\n`;
    body += `*********************************\n`;
    body += `Είδος                               | Τεμ  | Δώρα\n`;
    body += `---------------------------------------------------\n`;
    
    items.forEach(item => {
        let name = `* ${item.name}`;
        if(name.length > 35) name = name.substring(0, 32) + '...';
        
        let line = name.padEnd(36, ' ') + 
                   `| ${item.quantity.toString().padStart(4)} ` + 
                   `| ${item.gifts.toString().padStart(4)}`;
        body += `${line}\n`;
    });
    
    body += `---------------------------------------------------\n\n`;

    body += `--- ΣΥΝΟΛΑ ---\n`;
    body += `Καθαρή Αξία: ${totals.net}\n`;
    body += `Αξία ΦΠΑ (24%): ${totals.vat}\n`;
    body += `* ΤΕΛΙΚΟ ΠΟΣΟ: ${totals.final} *\n\n`;

    body += `--- ΣΥΝΟΛΙΚΑ ΤΕΜΑΧΙΑ (Ανά Είδος) ---\n`;
    items.forEach(item => {
        const totalPieces = item.quantity + item.gifts;
        body += `- ${item.name}: ${totalPieces} τεμ.\n`;
    });
    body += `\n`;

    body += `--- Στοιχεία Κατάθεσης ---\n`;
    body += `IBAN: GR8901722520005252016160277\n`;
    body += `Τράπεζα: Τράπεζα Πειραιώς\n`;

    return body;
}

function sendEmailViaClient() {
    const { customerData, items } = getOrderData();
    if (items.length === 0) {
        alert("Η παραγγελία είναι κενή.");
        return;
    }
    const body = generateEmailBody();
    const subject = `Νέα Παραγγελία από ${customerData.eponimia || 'Νέος Πελάτης'}`;
    const recipients = "pzaro2010@gmail.com,liapaki2017@gmail.com";
    
    let mailtoLink = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    if (customerData.email) {
        mailtoLink += `&cc=${encodeURIComponent(customerData.email)}`;
    }
    
    window.location.href = mailtoLink;
}

function generateOrderContent(){
    const{customerData:c,items:i,totals:t}=getOrderData();
    const b="\n\nΣΤΟΙΧΕΙΑ ΚΑΤΑΘΕΣΗΣ\n----------------------------------------\nIBAN: GR8901722520005252016160277\nΤράπεζα: Τράπεζα Πειραιώς\n";
    let content="========================================\n      Π Α Ρ Α Γ Γ Ε Λ Ι Α\n========================================\n\n";
    content+="****************************************\n* ΣΤΟΙΧΕΙΑ ΠΕΛΑΤΗ           *\n****************************************\n";
    content+=`ΕΠΩΝΥΜΙΑ: ${c.eponimia||'-'}\nΑΦΜ:      ${c.afm||'-'}\nΔΟΥ:      ${c.doy||'-'}\n`;
    content+=`ΚΙΝΗΤΟ:   ${c.mobile||'-'}\nΣΤΑΘΕΡΟ:  ${c.phone||'-'}\nEMAIL:    ${c.email||'-'}\n\n`;
    content+="ΑΝΑΛΥΣΗ ΠΑΡΑΓΓΕΛΙΑΣ\n-----------------------------------------------------------------\n";
    i.forEach(item=>{
        let qText=item.gifts>0?`${item.quantity} (+${item.gifts} Δώρο)`:`${item.quantity}`;
        content+=`* ${item.name}\n`;
        content+=`  - Ποσότητα:         ${qText}\n`;
        content+=`  - Τελική Τιμή/Τεμ.:  ${item.effectivePrice}\n`;
        content+=`  - Αξία Γραμμής:      ${item.total}\n`;
        content+=`-----------------------------------------------------------------\n`;
    });
    content+="\n\nΣΥΝΟΛΑ\n----------------------------------------\n";
    content+=`Καθαρή Αξία:      ${t.net}\n`;
    content+=`Αξία ΦΠΑ (24%):    ${t.vat}\n`;
    content+=`* ΤΕΛΙΚΟ ΠΟΣΟ:    ${t.final} *\n`;
    content+=`\nΣΥΝΟΛΙΚΑ ΤΕΜΑΧΙΑ\n----------------\n`;
    i.forEach(item => {
        const totalPieces = item.quantity + item.gifts;
        content += `- ${item.name}: ${totalPieces} τεμ.\n`;
    });
    content+=b;
    return content;
}

function previewAndSaveAsTXT(){
    if(getOrderData().items.length===0){
        alert("Η παραγγελία είναι κενή.");
        return;
    }
    const content = generateOrderContent();
    const filename = `Παραγγελία_${getOrderData().customerData.eponimia.replace(/\s/g,'_')||'customer'}.txt`;
    document.getElementById('previewContent').textContent = content;
    document.getElementById('previewModal').style.display='block';
    document.getElementById('saveTxtButton').onclick=()=>saveTextAsFile(content,filename);
}

function saveTextAsFile(text,filename){
    const blob = new Blob([text],{type:'text/plain;charset=utf-8'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closePreviewModal();
}
