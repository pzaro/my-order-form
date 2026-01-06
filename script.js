// ============================================================
// ZARKOLIA HEALTH - ΠΛΗΡΕΣ ΚΑΙ ΤΕΛΙΚΟ SCRIPT ΕΦΑρΜΟΓΗΣ
// ============================================================

// --- 1. ΠΛΗΡΗΣ ΒΑΣΗ ΔΕΔΟΜΕΝΩΝ ΠΕΛΑΤΩΝ ---
const knownCustomers = {
    "999746768": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΝΔΡΕΑΔΟΥ ΕΥΑΓΓΕΛΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "6936515332", phone: "2384021001", email: "andreadoupharmacy@yahoo.com" },
    "025305198": { eponimia: "ΒΑΡΕΛΑΣ ΜΙΧΑΗΛ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6937457161", phone: "", email: "mixalisvarelas@gmail.com" },
    "999295953": { eponimia: "Συστεγασμένα φαρμακεία Αλ.Γκικας- Αν.Γκικα Ο.Ε", doy: "Γιαννιτσών", mobile: "6977598429", phone: "2382024813", email: "anagkika@gmail.com" },
    "028058883": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΗΣ ΛΑΖΑΡΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6944581887", phone: "2381041464", email: "trilazar@otenet.gr" },
    "030796217": { eponimia: "ΚΥρΙΑΚΟΥ ΑΓΛΑΙΑ ΝΙΚΟΛΑΟ", doy: "ΝΕΩΝ ΜΟΥΔΑΝΙΩΝ", mobile: "", phone: "2399021663", email: "kyriakou.agla@gmail.com" },
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
    "081095923": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑρΜΑΚΕΙΑ ΑΔΑΜΙΔΗ Α ΑΔΑΜΙΔΟΥ Μ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΙ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6976974411", phone: "2551021444", email: "adamidou.mar@gmail.com" },
    "082988981": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑρΜΑΚΕΙΑ ΕΥΑΓΓΕΛΟΣ ΚΥρΙΑΚΙΔΗΣ ΕΜΜΑΝΟΥ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6977611613", phone: "2382083233", email: "vagemm@gmail.com" },
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
    "127263915": { eponimia: "ΣΙΣΚΟΥ ΜΑρΙΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "", email: "m.siskou@yahoo.gr" },
    "128430492": { eponimia: "ΑΓΤΖΙΔΗΣ ΑΝΔΡΕΑΣ ΛΑΖΑΡΟ", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341103050", email: "andreasagtzidis@gmail.com" },
    "129166674": { eponimia: "ΛΑΠΙΧΟΥ ΚΑΛΛΙΟΠΗ", doy: "ΓΙΑΝΝΙΤΣΑ", mobile: "", phone: "2382028229", email: "popilapi1976@gmail.com" },
    "133810643": { eponimia: "ΧΥΤΑ ΕΛΕΝΗ ΔΗΜΗΤΡΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "", email: "elchyt@hotmqil.com" },
    "134072283": { eponimia: "ΠΑΡΑΣΚΕΥΟΠΟΥΛΟΣ ΙΩΑΝΝΗΣ ΠΑΣΧΑΛΗ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6948270901", phone: "2553023544", email: "paraskevopoulosioannis@hotmail.gr" },
    "134811951": { eponimia: "ΓΙΟΥΤΙΚΑ ΕΛΕΥΘΕΡΙΑ ΜΑΡΙΑ ΠΑΝΑΓΙΩΤΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382022694", email: "farmgioutikaelma@gmail.com" },
    "134825144": { eponimia: "ΚΟΥΤΣΟΚΩΣΤΑ ΙΩΑΝΝΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382024141", email: "joannamedicine@gmail.com" },
    "134842104": { eponimia: "ΒΑΚΙρΤΖΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΑΝΤΩΝΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6978112893", phone: "2382041322", email: "vakostas@outlook.com" },
    "134848587": { eponimia: "ΔΟΥΛΚΕΡΙΔΗΣ ΚΟΣΜΑΣ ΠΑΝΑΓΙΩΤΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2382 042630", email: "kdoulker@hotmail.com" },
    "134887503": { eponimia: "ΚΑΠΝΑ ΖΩΗ ΘΕΟΔΩΡΟ", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "2391021224", email: "zoi526@hotmail.com" },
    "135001952": { eponimia: "ΜΟΥΛΑ ΕΛΕΥΘΕΡΙΑ ΠΑΝΤΕΛΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2384051111", email: "ele.moula@gmail.com" },
    "137239505": { eponimia: "ΔΑΜΙΑΝΑΚΗΣ ΣΤΑΥΡΟΣ ΓΕΩΡΓΙΟ", doy: "ΗΡΑΚΛΕΙΟΥ", mobile: "", phone: "", email: "depassagepharmacy@gmail.com" },
    "140820466": { eponimia: "ΤΣΟΝΟΓΛΟΥ ΔΕΣΠΟΙΝΑ ΔΙΟΝΥΣΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382093940", email: "despoinarsonoglou@gmail.com" },
    "141953562": { eponimia: "ΖΑΧΑρΙΑΔΟΥ ΓΕΩρΓΙΑ ΜΙΧΑΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382051791", email: "gzahariadou@gmail.com" },
    "141962417": { eponimia: "ΖΕΡΒΟΥ ΦΩΤΕΙΝΗ ΘΕΟΔΩΡΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382022264", email: "fotzervou@gmail.com" },
    "141967020": { eponimia: "ΣΔρΑΥΚΑΚΗΣ ΒΑΣΙΛΕΙΟΣ ΔΗΜΗΤΡΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "+306945015490", phone: "+302381061290", email: "vsdrafk@gmail.com" },
    "142265310": { eponimia: "ΣΑΠΑΚΟΛΗ ΕΥΑΓΓΕΛΙΑ ΠΕΤρΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "", email: "sapakoli@hotmail.gr" },
    "144429978": { eponimia: "ΕΥΤΥΧΙΔΟΥ ΑΝΑΣΤΑΣΙΑ ΓΕΩΡΓΙΟ", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", phone: "", email: "anastasia.e1988@gmail.com" },
    "144906695": { eponimia: "ΔΗΜΗΤρΙΑΔΟΥ ΑΛΕΞΑΝΔρΑ ΙΩΑΝΝΗ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381089199", email: "alex+dim.0807@gmail.com" },
    "150095708": { eponimia: "ΜΑΙΝΟΥ ΑΙΚΑΤΕρΙΝΗ ΧρΗΣΤΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6989858821", phone: "", email: "katiamainou@yahoo.com" },
    "151161020": { eponimia: "ΒΕΧΤΣΑΛΗΣ ΣΩΤΗρΙΟΣ ΧρΗΣΤΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6985799070", phone: "2381082057", email: "sotirisvechtsalis@hotmail.com" },
    "151162495": { eponimia: "ΜΑΝΘΟΥ ΧρΗΣΤΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381400770", email: "christosmanthougr@gmail.com" },
    "152502387": { eponimia: "ΤΖΙΝΕΒΗ ΑΛΙΚΗ ΑΝΔρΟΝΙΚΗ ΠΑΝΑΓΙΩΤΗ", doy: "ΝΕΩΝ ΜΟΥΔΑΝΙΩΝ", mobile: "6934165285", phone: "2399 020050", email: "alicetzi28@gmail.com" },
    "153360643": { eponimia: "ΚΑΖΑΚΟΥ ΚΩΝΣΤΑΝΤΙΝΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6974171503", phone: "+302551023378", email: "kazakoukonstantina@gmail.com" },
    "158040138": { eponimia: "ΠΑΠΑΟΡΦΑΝΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΑΝΤΩΝΙΟ", doy: "ΙΖ ΑΘΗΝΩΝ", mobile: "", phone: "", email: "papamymarket@gmail.com" },
    "159693610": { eponimia: "ΧρΥΣΟΣΤΟΜΙΔΗΣ ΑΝΤΩΝΙΟΣ ΠΑρΑΣΚΕΥΑ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382025735", email: "a.chrysostomidis@hotmail.com" },
    "165645258": { eponimia: "ΦΑΝΤΙΔΟΥ ΕΙρΗΝΗ ΛΑΖΑΡΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381089980", email: "fantidou.pharmacy@gmail.com" },
    "169699055": { eponimia: "ΧΕΛΗ ΑΝΑΣΤΑΣΙΑ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "698 882 0879", phone: "2381097677", email: "anasta.cheli10@gmail.com" },
    "300639167": { eponimia: "ΤρΙΑΝΤΑΦΥΛΛΙΔΟΥ ΕΛΕΝΗ ΑρΙΣΤΕΙΔΗ", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6940207039", phone: "2553024243", email: "eleni.triantafillidou@gmail.com" },
    "800339648": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΖΙΟΥΤΑ ΓΕΩρΓΙΑ ΧρΙΣΤΙΑΝΑ ΚΑΙ ΣΙΑ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341028777", email: "zioutaxristiana@hotmail.gr" },
    "800348196": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΥΓΕρΙΝΟΥ Θ ΚΑΙ ΣΙΑ Ο", doy: "ΣΕΡΡΩΝ", mobile: "", phone: "", email: "theoavgerinos90@gmail.com" },
    "800367008": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑρΜΑΚΕΙΑ ΘΕΟΔΟΣΙΟΣ ΑΔΑΜΙΔΗΣ ΜΑΡΘΑ ΑΔΑΜΙΔΟΥ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "698306702", phone: "2382062100", email: "adamidis86@gmail.com" },
    "800414167": { eponimia: "ΜΑΧΜΟΥρΙΔΟΥ ΚΑΙ ΣΙΑ Ο", doy: "ΟΡΕΣΤΙΑΔΑΣ", mobile: "6944258002", phone: "2553024676", email: "www.maxmouridou@hotmail.gr" },
    "800472889": { eponimia: "ΦΑΡΜΑΚΕΙΑ ΣΠΥρΙΔΗΣ Δ ΒΑΛΑΣΙΔΟΥ ΙΣ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341023040", email: "dimitris_sp@yahoo.com" },
    "800586973": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΦΑΡΜΑΚΗΣ ΙΩΑΝΝΗΣ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6984914098", phone: "+30 2391091551", email: "farmakisg21@hotmail.gr" },
    "800616945": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑρΜΑΚΕΙΑ ΨΥΧΟΓΥΟΥ ΑΙΚΑΤΕρΙΝΗ - ΨΥΧΟΓΥΟΥ ΣΟΦΙΑ -ΧρΙΣΤΙΝΑ Ο.Ε", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381022232", email: "anaspsi@gmail.com" },
    "800699181": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑρΜΑΚΕΙΑ Κ ΓΕΩρΓΙΑΔΟΥ ΚΑΙ Κ ΚΑΤΣΙΑΝΟΣ Ο", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341029949", email: "katsianoskos@gmail.com" },
    "800732970": { eponimia: "ΦΡΟΥΤΑ ΜΟΥΤΣΟΓΙΑΝΝ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "", email: "moutsogiannis23@gmail.com" },
    "800759157": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑρΜΑΚΕΙΑ ΧρΗΣΤΟΥ ΠΕΛΑΓΙΑ ΚΑΙ ΣΑΡΗΓΚΙΟΛΗΣ ΟρΕΣΤΗΣ ΙΩΑΝΝΗΣ Ο", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "+302384024298", email: "orestis.sarigkiolis@gmail.com" },
    "800972362": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑρΜΑΚΕΙΑ ΤΟΠΟΥΖΙΔΗΣ Γ ΚΑΙ ΤΟΠΟΥΖΙΔΗΣ Κ Ο", doy: "ΚΙΛΚΙΣ", mobile: "6942717900", phone: "2343022000", email: "e.topouzidou@yahoo.gr" },
    "801577292": { eponimia: "ΝΙΚΟΛΑΟΣ ΚΟΥΤΣΟΥΜΠΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΤρΙΠΟΛΗΣ", mobile: "", phone: "6981203517", email: "nickoskoutsou@gmail.com" },
    "802096212": { eponimia: "ΑΝΔΡΗ ΚΛΕΙΔΑρΑ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "+302391022725", email: "andrykleidara@gmail.com" },
    "802196155": { eponimia: "HAPPY HIPPO Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "", email: "eimaiohappyhippo@gmail.com" },
    "802244502": { eponimia: "ΣΦ ΕΛΕΝΗΣ ΜΑρΙΑΣ  ΝΙΚΟΛΑΙΔΟΥ-ΧρΥΣΟΣΤΟΜΟΥ ΤΖΙΝΤΖΑρΑ & ΣΙΑ Ο", doy: "Ζ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "", phone: "", email: "skroutzplus@outlook.com" },
    "802581242": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑρΜΑΚΕΙΑ Η  ΔΗΜΟΚΑ   Μ  ΜΑΡΓΟΥΤΑ Ο", doy: "ΑΜΠΕΛΟΚΗΠΩΝ", mobile: "", phone: "", email: "idpharmacy254@gmail.com" },
    "802644097": { eponimia: "ΣΥΣΤΕΓΑΖΟΜΕΝΑ ΦΑρΜΑΚΕΙΑ ΕΥΑ ΚΟΤΙΔΟΥ ΠΛΑΤΗΣ ΒΑΣΙΛΕΙΟΣ ΟΜΟρΡΥΘΜΗ ΕΤΑΙΡΕΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2384022908", email: "evakotidou@gmail.com" },
    "802667861": { eponimia: "ΦΑΡΜΑΚΕΙΟ Α ΟΙΚΟΝΟΜΟΠΟΥΛΟΣ Ι ΠΑΠΑΔΟΠΟΥΛΟΣ Ο", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", phone: "", email: "ioannis.a.papadop@gmail.com" },
    "802741555": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΤΣΩΝΗ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6932461323", phone: "2551038473", email: "tsonispharmacy@gmail.com" },
    "802744858": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑρΜΑΚΕΙΑ ΓΚΑΪΝΤΑΤΖΗΣ ΒΑΣΙΛΕΙΟΣ  ΓΚΑΪΝΤΑΤΖΗ ΕΥΔΟΞΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6980289717", phone: "2551024463", email: "gkaintatzi.pharmacy@gmail.com" },
    "996853821": { eponimia: "ΚΟΙΝΩΝΙΑ ΚΛΗρΟΝΟΜΩΝ ΔΟΥΛΚΕρΙΔΗ ΧΑΡΑΛΑΜΠΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381088845", email: "farmakeio.skydra@gmail.com" },
    "997687603": { eponimia: "ΤΣΙΤΣΙΟΣ ΑΘΑΝΑΣΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6978762108", phone: "2531022785", email: "pharmthanos@gmail.com" },
    "997688685": { eponimia: "ΣΦ ΚΑΛΟΥΔΗ ΚΩΝΣΤΑΝΤΙNIA & ΖΟΥΜΑ ΣΤΑΜΑΤΙΑ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΕΙΑ", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "", phone: "", email: "stam1213zoum@gmail.com" },
    "997957423": { eponimia: "ΗΛΙΑΣ Θ ΚΑΤρΗΣ Ε", doy: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ", mobile: "", phone: "", email: "iliaskatrispharmacy@gmail.com" },
    "997961412": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑρΜΑΚΕΙΑ ΠΑΝΑΓΙΩΤΙΔΟΥ ΑΙΚΑΤΕρΙΝΗ  ΦρΑΓΓΙΔΟΥ ΝΙΚΟΛΕΤΑ Ο", doy: "ΚΙΛΚΙΣ", mobile: "6986962826", phone: "2341023924", email: "farmakeiofraggidou@gmail.com" },
    "997961880": { eponimia: "ΚΑρΙΠΙΔΟΥ ΧρΙΣΤΙΝΑ ΚΑΙ ΣΙΑ ΟΜΟΡΡΥΘΜΟΣ ΕΤΑΙΡΕΙΑ", doy: "ΚΙΛΚΙΣ", mobile: "", phone: "2341020865", email: "chriskaripidou@gmail.com" },
    "998392245": { eponimia: "ΦΑΡΜΑΚΑΠΟΘΗΚΕΣ ΑΙΓΑΙΟΥ ΣΥΦΑΚ Α.Ε", doy: "ΦΑΕ ΑΘΗΝΩΝ", mobile: "", phone: "2144160100", email: "pharm.aigaiou@syfak.gr" },
    "998548940": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΧΤΣΗΣ ΣΤΕρΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6948053736", phone: "2551 029523", email: "aachtsi@gmail.com" },
    "998720640": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΜΕρΟΠΗΣ ΜΠΑΧΤΣΕΒΑΝΙΔΟΥ ΚΑΙ ΣΙΑ Ε", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381023080", email: "fiorabach@hotmail.com" },
    "998721309": { eponimia: "ΤΣΙΤΛΑΚΙΔΟΥ Μ ΚΑΙ ΣΙΑ Ο", doy: "ΕΔΕΣΣΑΣ", mobile: "", phone: "2381091116", email: "maria_tsitlakidou@hotmail.com" },
    "999228431": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΗΛΙΑ ΧΑΛΙΓΙΑΝΝΗ ΚΑΙ ΣΙΑ Ο", doy: "ΚΟΜΟΤΗΝΗΣ", mobile: "6936632283", phone: "2531 023758", email: "iliaspharm@yahoo.com" },
    "999260690": { eponimia: "ΦΛΩρΟΣ ΓΕΩρΓΙΟΣ ΚΑΙ ΣΙΑ Ο", doy: "ΙΩΝΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ", mobile: "6944732173", phone: "", email: "florospharmacy@yahoo.gr" },
    "999295989": { eponimia: "Α ΓΚΑΙΤΑΤΖΗΣ ΚΑΙ ΣΙΑ Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382099191", email: "gkaitatzisaggelos@yahoo.gr" },
    "999296071": { eponimia: "ΚΑΡΑΟΥΛΑΝΗ ΕΥΑΓΓΕΛΙΑ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "", phone: "2382 042299", email: "psiamanta@hotmail.com" },
    "999387480": { eponimia: "ΜΗΤΚΑΣ ΑΔΑΜΑΝΤΙΟΣ ΚΑΙ ΣΙΑ Ε", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6945411342", phone: "2551028396", email: "farmakiomitkas@gmail.com" }
};

// --- 2. ΛΙΣΤΑ ΠΡΟΪΟΝΤΩΝ ---
const products = [
    { name: 'Z-DermAspis', price: 5.03 },
    { name: 'ZplastCream 40gr', price: 12.30 },
    { name: 'ZplastCream 100gr', price: 24.79 },
    { name: 'Bruise Off Bite Out & Pain Free cream', price: 5.60 },
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

// --- 3. HELPERS ---
function hcpTable(rows) {
    return `<table class="hcp-table"><thead><tr><th>Συστατικό</th><th>Μηχανισμός / Ρόλος</th></tr></thead><tbody>${rows.map(r => `<tr><td><strong>${r.ing}</strong></td><td>${r.moa}</td></tr>`).join("")}</tbody></table>`;
}

function consumerBlock({ title, bullets, howTo, cautions }) {
    return `<h3>${title}</h3><ul>${bullets.map(b => `<li>${b}</li>`).join("")}</ul>${howTo ? `<h4>Τρόπος χρήσης</h4><p>${howTo}</p>` : ""}${cautions ? `<h4>Προφυλάξεις</h4><p>${cautions}</p>` : ""}<div class="compliance-note">Σημείωση: Οι περιγραφές για το κοινό αφορούν καλλυντική/διατροφική χρήση και δεν υποκαθιστούν ιατρική συμβουλή.</div>`;
}

function biblioList(items) {
    return `<h3>Βιβλιογραφικές Αναφορές</h3><ol>${items.map(i => `<li>${i}</li>`).join("")}</ol>`;
}

// --- 4. ΠΛΗΡΕΙΣ ΠΕΡΙΓΡΑΦΕΣ ΠΡΟΪΟΝΤΩΝ ---
const productDetails = [
    {
        name: 'Z-DermAspis',
        description: {
            consumer: consumerBlock({
                title: "Καθαρισμός & Άνεση στην Καθημερινότητα",
                bullets: ["Σπρέι υψηλής περιεκτικότητας σε αλκοόλη για γρήγορο καθαρισμό.", "Με PMD (citriodora) για λειτουργική απωθητική αίσθηση.", "Ιδανικό για εξωτερικές δραστηριότητες."],
                howTo: "Ψεκάστε στην επιφάνεια του δέρματος και αφήστε να στεγνώσει.",
                cautions: "Μακριά από μάτια. Εύφλεκτο."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"Alcohol denat. ~70%", moa:"Αποδιάταξη πρωτεϊνών και διαταραχή λιπιδικής μεμβράνης μικροοργανισμών."}, {ing:"PMD", moa:"Απωθητικό προφίλ μέσω παρεμβολής σε οσφρητικούς υποδοχείς εντόμων."}])}`,
            bibliography: biblioList(["Carroll SP, Loye J. (2006). PMD botanical mosquito repellent efficacy.", "CDC Guidelines on Repellents (2023)."])
        }
    },
    {
        name: 'ZplastCream 40gr',
        description: {
            consumer: consumerBlock({
                title: "Εντατική Φροντίδα & Καταπράυνση Φραγμού",
                bullets: ["Καθημερινή περιποίηση για ξηρό, ευαίσθητο ή ταλαιπωρημένο δέρμα.", "Υποστηρίζει τη φυσική ανάπλαση και μειώνει το αίσθημα 'τραβήγματος'.", "Πλούσια υφή που προστατεύει από εξωτερικές επιθέσεις."],
                howTo: "Εφαρμόστε 1-3 φορές ημερησίως.",
                cautions: "Μόνο για εξωτερική χρήση."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"Hypericum perforatum", moa:"Αντιοξειδωτική δράση & υποστήριξη επανεπιθηλιοποίησης."}, {ing:"Chios Mastic oil", moa:"Λιπιδική υποστήριξη & comfort επιδερμίδας."}, {ing:"Calamine", moa:"Ήπια στυπτική και καταπραϋντική δράση."}])}`,
            bibliography: biblioList(["Öztürk N, et al. (2007). Hypericum perforatum on skin wounds.", "Paraschos S, et al. (2012). Chios mastic gum properties."])
        }
    },
    {
        name: 'ZplastCream 100gr',
        description: {
            consumer: consumerBlock({
                title: "Εντατική Φροντίδα & Καταπράυνση Φραγμού (100g)",
                bullets: ["Προηγμένη σύνθεση για εκτεταμένη χρήση.", "Υποστηρίζει τη φυσική ανάπλαση της επιδερμίδας.", "Πλούσια υφή που προστατεύει από εξωτερικές επιθέσεις."],
                howTo: "Εφαρμόστε 1-3 φορές ημερησίως.",
                cautions: "Μόνο για εξωτερική χρήση."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"Hypericum & Sea Buckthorn", moa:"Συνέργεια για την αποκατάσταση του λιπιδικού φραγμού (Ω-7)."}, {ing:"Chios Mastic Oil", moa:"Ενεργοποιεί τη σύνθεση κολλαγόνου και προσφέρει άνεση."}])}`,
            bibliography: biblioList(["Upadhyay NK, et al. (2009). Sea buckthorn healing efficacy.", "Paraschos S, et al. (2012)."])
        }
    },
    {
        name: 'Bruise Off Bite Out & Pain Free cream',
        description: {
            consumer: consumerBlock({
                title: "Άμεση Ανακούφιση & Αποσυμφόρηση (50ml)",
                bullets: ["Με Ουρία για ταχεία απορρόφηση και ενυδάτωση.", "Βελτιώνει την όψη μετά από μώλωπες ή έντονη καταπόνηση.", "Απορροφάται γρήγορα, ιδανική για μασάζ."],
                howTo: "Επάλειψη με ελαφρύ μασάζ στην επιβαρυμένη περιοχή.",
                cautions: "Αποφυγή σε ερεθισμένο δέρμα."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"Urea", moa:"Humectant + κερατολυτική δράση. Βελτιώνει τη διείσδυση των δραστικών."}, {ing:"Arnica montana", moa:"Αναστολή NF-κB μονοπατιών (αντιφλεγμονώδη δράση)."}, {ing:"Carvacrol", moa:"Sensory warming sensation και απομάκρυνση φλεγμονωδών παραγόντων."}])}`,
            bibliography: biblioList(["Wohlrab J (2018). Urea in Dermatology.", "Lyss G, et al. (1998). Helenalin mechanism."])
        }
    },
    {
        name: 'Bruise Off Bite Out & Pain Free cream 100ml',
        description: {
            consumer: consumerBlock({
                title: "Άμεση Ανακούφιση & Αποσυμφόρηση (100ml)",
                bullets: ["Με Ουρία για ταχεία απορρόφηση και ενυδάτωση.", "Βελτιώνει την όψη μετά από μώλωπες ή έντονη καταπόνηση.", "Απορροφάται γρήγορα, ιδανική για μασάζ."],
                howTo: "Επάλειψη με ελαφρύ μασάζ στην επιβαρυμένη περιοχή.",
                cautions: "Αποφυγή σε ερεθισμένο δέρμα."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"Urea", moa:"Humectant + κερατολυτική δράση. Βελτιώνει τη διείσδυση των δραστικών."}, {ing:"Arnica montana", moa:"Αναστολή NF-κB μονοπατιών (αντιφλεγμονώδη δράση)."}, {ing:"Carvacrol", moa:"Sensory warming sensation και απομάκρυνση φλεγμονωδών παραγόντων."}])}`,
            bibliography: biblioList(["Wohlrab J (2018). Urea in Dermatology.", "Lyss G, et al. (1998). Helenalin mechanism."])
        }
    },
    {
        name: 'Z-boost 30 caps',
        description: {
            consumer: consumerBlock({
                title: "Ολοκληρωμένη Θωράκιση Ανοσοποιητικού (30 caps)",
                bullets: ["Με Ψευδάργυρο, Ginger και NAC για μέγιστη υποστήριξη.", "Συμβάλλει στη φυσιολογική λειτουργία του ανοσοποιητικού.", "Προστασία από το οξειδωτικό στρες."],
                howTo: "1 κάψουλα ημερησίως μετά το γεύμα.",
                cautions: "Συμπλήρωμα διατροφής· δεν υποκαθιστά μια ισορροπημένη δίαιτα."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"Zinc & Selenium", moa:"Ρύθμιση διαφοροποίησης Τ-λεμφοκυττάρων και ενίσχυση GPx."}, {ing:"Ginger (Gingerols)", moa:"Modulation 5-LOX/COX μονοπατιών."}, {ing:"NAC & CoQ10", moa:"Πρόδρομος GSH και μιτοχονδριακή υποστήριξη."}])}`,
            bibliography: biblioList(["Reg. (EU) 432/2012 (Zinc claims).", "Grzanna R, et al. (2005). Ginger anti-inflammatory actions."])
        }
    },
    {
        name: 'Z-boost 12 caps',
        description: {
            consumer: consumerBlock({
                title: "Άμεση Τόνωση Ανοσοποιητικού (12 caps)",
                bullets: ["Με Ψευδάργυρο, Ginger και NAC για μέγιστη υποστήριξη.", "Συμβάλλει στη φυσιολογική λειτουργία του ανοσοποιητικού.", "Προστασία από το οξειδωτικό στρες."],
                howTo: "1 κάψουλα ημερησίως μετά το γεύμα.",
                cautions: "Συμπλήρωμα διατροφής· δεν υποκαθιστά μια ισορροπημένη δίαιτα."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"Zinc & Selenium", moa:"Ρύθμιση διαφοροποίησης Τ-λεμφοκυττάρων και ενίσχυση GPx."}, {ing:"Ginger (Gingerols)", moa:"Modulation 5-LOX/COX μονοπατιών."}, {ing:"NAC & CoQ10", moa:"Πρόδρομος GSH και μιτοχονδριακή υποστήριξη."}])}`,
            bibliography: biblioList(["Reg. (EU) 432/2012 (Zinc claims).", "Grzanna R, et al. (2005). Ginger anti-inflammatory actions."])
        }
    },
    {
        name: 'Revitacell Plus Face cream 50ml',
        description: {
            consumer: consumerBlock({
                title: "Επιγενετική Αντιγήρανση & Σύσφιξη",
                bullets: ["Ενεργοποιεί την 'πρωτεΐνη Klotho' για κυτταρική μακροζωία.", "Αισθητή μείωση ρυτίδων και βελτίωση ελαστικότητας.", "Πλούσια σε αντιοξειδωτικά λιπίδια."],
                howTo: "Πρωί και βράδυ σε καθαρό πρόσωπο.",
                cautions: "Αποφύγετε την επαφή με μάτια."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"Mastic Gum Extract", moa:"Επάγει την έκφραση της Klotho protein στους ινοβλάστες."}, {ing:"Pomegranate Seed Oil", moa:"Αναστέλλει τις μεταλλοπρωτεϊνάσεις (MMP-1) που αποδομούν το κολλαγόνο."}])}`,
            bibliography: biblioList(["Lall N, et al. (2020). Rejuvenating effect of mastic gum on skin.", "Neha K, et al. (2014). Pomegranate seed oil review."])
        }
    },
    {
        name: 'Hydralia Face cream 50ml',
        description: {
            consumer: consumerBlock({
                title: "Βαθιά Ενυδάτωση & Plumping Effect",
                bullets: ["Συνδυασμός Υαλουρονικού οξέος για 'γέμισμα' λεπτών γραμμών.", "Ενισχύει τη δέσμευση υγρασίας στις βαθύτερες στοιβάδες.", "Ιδανική βάση για μακιγιάζ."],
                howTo: "Πρωί σε καθαρή επιδερμίδα.",
                cautions: "Διακόψτε σε ερεθισμό."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"Sodium Hyaluronate (LMW)", moa:"Το χαμηλού μοριακού βάρους υαλουρονικό διεισδύει βαθύτερα (plumping)."}, {ing:"Jojoba Oil", moa:"Βιομιμητικοί εστέρες κηρού που ενισχύουν τον φραγμό."}])}`,
            bibliography: biblioList(["Bukhari SNA, et al. (2018). Hyaluronic acid in skin rejuvenation.", "Ranzato E, et al. (2011). Jojoba oil properties."])
        }
    },
    {
        name: 'Revitace Eyes cream Luce 30ml',
        description: {
            consumer: consumerBlock({
                title: "Φωτεινό Βλέμμα & Αποσυμφόρηση",
                bullets: ["Στοχευμένη δράση κατά του πρηξίματος και των μαύρων κύκλων.", "Βελτιώνει τη μικροκυκλοφορία στην περιοχή των ματιών.", "Προσφέρει άμεση φωτεινότητα."],
                howTo: "Ταμποναριστά πρωί και βράδυ στην περικογχική περιοχή.",
                cautions: "Οφθαλμολογικά ελεγμένη."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"Escin (Ιπποκαστανιά)", moa:"Venotonic profile: Μειώνει τη διαπερατότητα των τριχοειδών."}, {ing:"Arnica Extract", moa:"Βοηθά στην απορρόφηση των χρωστικών του αίματος (κύκλοι)."}])}`,
            bibliography: biblioList(["Gallelli L (2019). Escin venotonic properties review.", "Sirtori CR (2001). Aescin pharmacology."])
        }
    },
    {
        name: 'Alveolair Sir',
        description: {
            consumer: consumerBlock({
                title: "Φυτική Καταπράυνση & Άνεση Λαιμού",
                bullets: ["Με Θυμάρι, Αλθέα και Ευκάλυπτο.", "Μαλακώνει τον λαιμό και βοηθά στην άνεση της αναπνοής.", "Ευχάριστη γεύση για όλη την οικογένεια."],
                howTo: "Λήψη σύμφωνα με τις οδηγίες της συσκευασίας.",
                cautions: "Συμβουλευτείτε ιατρό αν τα συμπτώματα επιμένουν."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"Thymus (θυμάρι)", moa:"Παρουσιάζει σπασμολυτικό και αντιμικροβιακό προφίλ (Thymol)."}, {ing:"Althaea root", moa:"Πλούσια σε βλέννες που σχηματίζουν προστατευτικό φιλμ στο βλεννογόνο."}, {ing:"Eucalyptus oil", moa:"Βοηθά στην αποσυμφόρηση και στην άνεση της αναπνοής."}])}`,
            bibliography: biblioList(["EMA/HMPC Monographs for Thyme, Althaea and Eucalyptus.", "European Medicines Agency (2016). Herbal monographs."])
        }
    },
    {
        name: 'NUTRI MX PROBIOTIC PREMIUM',
        description: {
            consumer: consumerBlock({
                title: "Ισορροπία Μικροβιώματος & Εντερική Υγεία",
                bullets: ["18 στελέχη προβιοτικών και 10 δις CFU.", "Υποστηρίζει τη φυσιολογική ισορροπία της χλωρίδας.", "Ενίσχυση της πέψης και του ανοσοποιητικού."],
                howTo: "1 κάψουλα ημερησίως.",
                cautions: "Σε ανοσοκαταστολή απαιτείται ιατρική συμβουλή."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"18 Strains (Multi-strain)", moa:"Competitive exclusion παθογόνων και ευρύ φάσμα αποικισμού."}, {ing:"SCFA Production", moa:"Παραγωγή βουτυρικού οξέος για τη θρέψη των κολονοκυττάρων."}])}`,
            bibliography: biblioList(["Lee JY, et al. (2022). The microbiome and gut homeostasis. Science.", "Karamanolis GP (2019). Probiotics in GI health."])
        }
    },
    {
        name: 'NUTRI MX MAGNESIUM 1 Τεμ',
        description: {
            consumer: consumerBlock({
                title: "Μυϊκή Λειτουργία & Μείωση Κόπωσης",
                bullets: ["Μαγνήσιο ενισχυμένο με Βιταμίνη Β6.", "Συμβάλλει στη μείωση της κούρασης και στην υγεία των μυών.", "Υποστήριξη του νευρικού συστήματος."],
                howTo: "1 δισκίο ημερησίως.",
                cautions: "Σε νεφρική ανεπάρκεια απαιτείται ιατρική παρακολούθηση."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"Magnesium Citrate/Oxide", moa:"Συμπαράγοντας σε >300 ενζυμικές αντιδράσεις και ATP synthesis."}, {ing:"NMDA Modulation", moa:"Ρύθμιση νευρομυϊκής διεγερσιμότητας (ανταγωνιστής ασβεστίου)."}])}`,
            bibliography: biblioList(["EFSA Journal 2010;8(10):1807.", "Prasad AS (2008). Magnesium in human health."])
        }
    },
    {
        name: 'NUTRI MX A-Z',
        description: {
            consumer: consumerBlock({
                title: "Πλήρης Πολυβιταμίνη για Τόνωση & Ενέργεια",
                bullets: ["24 βιταμίνες, μέταλλα και ιχνοστοιχεία.", "Κάλυψη διατροφικών κενών και πνευματική απόδοση.", "Ιδανική για περιόδους έντονης σωματικής κόπωσης."],
                howTo: "1 δισκίο ημερησίως μετά το γεύμα.",
                cautions: "Μην υπερβαίνετε τη συνιστώμενη δόση."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"Vitamin Complex", moa:"Διασφάλιση μεταβολικής ομοιόστασης και ενεργειακού κύκλου (Krebs)."}, {ing:"Trace Minerals", moa:"Συμπαράγοντες σε αντιοξειδωτικά ένζυμα (SOD, GPx)."}])}`,
            bibliography: biblioList(["Regulation (EU) 432/2012 for vitamins & minerals claims.", "EFSA DRVs Reference values."])
        }
    },
    {
        name: 'NUTRI MX OMEGA 3',
        description: {
            consumer: consumerBlock({
                title: "Καρδιακή Λειτουργία & Εγκεφαλική Υποστήριξη",
                bullets: ["Υψηλή καθαρότητα EPA/DHA.", "Συμβάλλει στη φυσιολογική λειτουργία της καρδιάς και του εγκεφάλου.", "Υποστήριξη της όρασης."],
                howTo: "1-2 κάψουλες ημερησίως με φαγητό.",
                cautions: "Προσοχή σε αλλεργία ψαριού ή λήψη αντιπηκτικών."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"EPA/DHA", moa:"Ενσωμάτωση σε μεμβράνες και ανταγωνισμός αραχιδονικού οξέος."}, {ing:"Resolvins", moa:"Παραγωγή παραγόντων που τερματίζουν ενεργά τη φλεγμονή."}])}`,
            bibliography: biblioList(["Calder PC (2013). Omega-3 and inflammation.", "Mozaffarian D (2011). Cardiovascular effects of EPA/DHA."])
        }
    },
    {
        name: 'NUTRI MX JOINT',
        description: {
            consumer: consumerBlock({
                title: "Υποστήριξη Αρθρώσεων & Συνδετικού Ιστού",
                bullets: ["Γλυκοζαμίνη, Χονδροϊτίνη, MSM και Κολλαγόνο ΙΙ.", "Υποστηρίζει τη φυσιολογική κίνηση χωρίς πόνο.", "Διατροφική υποστήριξη του χόνδρου."],
                howTo: "1-2 δισκία ημερησίως.",
                cautions: "Προσοχή σε αλλεργία οστρακοειδών."
            }),
            science: `<h3>Επιστημονική Ανάλυση</h3>${hcpTable([{ing:"Glucosamine/Chondroitin", moa:"Δομικοί πρόδρομοι γλυκοζαμινογλυκανών (GAGs) χόνδρου."}, {ing:"Collagen Type II", moa:"Κύρια πρωτεΐνη του αρθρικού χόνδρου για δομική ακεραιότητα."}])}`,
            bibliography: biblioList(["Kislingh (2019). Collagen in joint health.", "Daskalou E (2016). MSM sulfur donation."])
        }
    },
    {
        name: 'Zarkolia Cosmetic pack',
        description: {
            consumer: consumerBlock({
                title: "Ολοκληρωμένο Πρωτόκολλο Αντιγήρανσης",
                bullets: ["Revitacell Plus + Hydralia + Revitace Eyes: Η πλήρης ρουτίνα.", "Συνδυαστική δράση για ενυδάτωση, σύσφιξη και λάμψη.", "Το απόλυτο δώρο για την υγεία της επιδερμίδας."],
                howTo: "Πρωί: Hydralia & Eyes. Βράδυ: Revitacell & Eyes.",
                cautions: "Συνέργεια δραστικών για μέγιστο αποτέλεσμα."
            }),
            science: `<h3>Συνεργιστικό Μοντέλο</h3><p>Ο συνδυασμός επιτυγχάνει ταυτόχρονη ρύθμιση του επιγενετικού ρολογιού (Klotho), της υδροδυναμικής (HA) και της μικροκυκλοφορίας (Escin).</p>${hcpTable([{ing: "Total Routine", moa: "Πολυεπίπεδη στόχευση: Αντιοξείδωση, Φραγμός, Κολλαγόνο, Αποσυμφόρηση."}])}`,
            bibliography: biblioList(["Συνδυασμένη βιβλιογραφία Zarkolia series.", "Lall N (2020) & Bukhari SNA (2018)."])
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
                <td><span id="gift-${index}" class="scale-badge" style="padding:4px 12px; border-width:1px;">0</span></td>
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

// --- 6. ΥΠΟΛΟΓΙΣΜΟΙ ΔΩΡΩΝ & ΣΥΝΟΛΩΝ ---
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
    const netEl = document.getElementById("net-value");
    const vatEl = document.getElementById("vat-value");
    const finalEl = document.getElementById("final-total");
    
    if(netEl) netEl.textContent = net.toFixed(2) + " €";
    if(vatEl) vatEl.textContent = vat.toFixed(2) + " €";
    if(finalEl) finalEl.textContent = (net + vat).toFixed(2) + " €";
}

// --- 7. ΔΙΑΧΕΙΡΙΣΗ MODALS ---
function showProductDetails(index){
    const p = productDetails.find(i => i.name === products[index].name);
    const tableInput = document.getElementById(`qty-${index}`);
    const modal = document.getElementById('productModal');
    if(!modal) return;

    let imgPath = `images/${products[index].name}.jpg`;
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${products[index].name}</h2>
                <span class="close-button" onclick="closeProductModal()">&times;</span>
            </div>
            <img src="${imgPath}" onerror="this.style.display='none'" style="max-width:200px; display:block; margin:15px auto; border-radius:12px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
            <div class="modal-body">
                <div class="modal-tabs">
                    <button class="tab-button active" onclick="openTab(event, 'Consumer')">Για το Κοινό</button>
                    <button class="tab-button" onclick="openTab(event, 'Science')">Επιστημονικά</button>
                    <button class="tab-button" onclick="openTab(event, 'Biblio')">Βιβλιογραφία</button>
                </div>
                <div id="Consumer" class="tab-content" style="display:block">${p ? p.description.consumer : "Πληροφορίες σύντομα..."}</div>
                <div id="Science" class="tab-content">${p ? p.description.science : "—"}</div>
                <div id="Biblio" class="tab-content">${p ? p.description.bibliography : "—"}</div>
            </div>
            <div style="margin-top:20px; text-align:center; padding:15px; border-top:1px solid #eee;">
                <label style="font-weight:bold; margin-right:10px;">Ποσότητα:</label> 
                <input type="number" id="modalQty" value="${tableInput.value}" style="width:70px; padding:10px; border-radius:8px; border:1px solid #ccc;">
                <button class="btn-primary" style="padding:10px 25px; margin-left:10px; border-radius:8px; border:none; background:#059669; color:white; font-weight:bold; cursor:pointer;" onclick="updateFromModal(${index})">Ενημέρωση Ποσότητας</button>
            </div>
        </div>`;
    modal.style.display='block';
}

function updateFromModal(index){
    const qtyInput = document.getElementById(`qty-${index}`);
    const modalQty = document.getElementById('modalQty');
    if (qtyInput && modalQty) {
        qtyInput.value = modalQty.value;
        updateAll(); 
    }
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

// --- 8. ΕΞΑΓΩΓΗ EMAIL & TXT ---
function sendEmailViaClient() {
    const payment = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "Δεν επιλέχθηκε";
    const remarks = document.getElementById("remarks").value || "-";
    const name = document.getElementById("eponimia").value;
    const afm = document.getElementById("afm").value;
    const date = new Date().toLocaleDateString('el-GR');
    const net = document.getElementById("net-value").textContent;
    const vat = document.getElementById("vat-value").textContent;
    const total = document.getElementById("final-total").textContent;

    if(!name) { alert("Παρακαλώ εισάγετε Επωνυμία Πελάτη."); return; }

    const subject = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ ZARKOLIA HEALTH / ${date} / ${name}`;
    let body = `Αντίγραφο Παραγγελίας - Το παρόν δεν αποτελεί παραστατικό αγορών\n\n`;
    body += `ΣΤΟΙΧΕΙΑ ΠΕΛΑΤΗ\n------------------\nΕπωνυμία: ${name}\nΑΦΜ: ${afm}\n\n`;
    body += `ΠΡΟΪΟΝΤΑ & ΔΩΡΑ (Κοστολόγηση)\n---------------------------------------------------\n`;
    document.querySelectorAll("#product-table tbody tr").forEach(r => {
        const q = parseInt(r.querySelector('.quantity').value) || 0;
        if(q > 0) {
            body += `* ${r.cells[0].textContent} | Τεμ: ${q} | Δώρα: ${r.querySelector('.scale-badge').textContent} | Σύνολο: ${r.querySelector('.line-total') ? r.querySelector('.line-total').textContent : '-'}\n`;
        }
    });
    body += `---------------------------------------------------\n\n`;
    body += `ΤΙΜΟΛΟΓΗΣΗ\nΚαθαρή Αξία : ${net}\nΦΠΑ (24%) : ${vat}\nΤΕΛΙΚΟ ΣΥΝΟΛΟ : ${total}\n\n`;
    body += `ΤΡΟΠΟΣ ΠΛΗΡΩΜΗΣ: ${payment}\nΠΑΡΑΤΗΡΗΣΕΙΣ: ${remarks}\n\n`;
    body += `ΣΤΟΙΧΕΙΑ ΚΑΤΑΘΕΣΗΣ\nΤράπεζα Πειραιώς\nIBAN: GR89 0172 2520 0052 5201 6160 277`;

    window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function previewAndSaveAsTXT(){
    const name = document.getElementById("eponimia").value;
    const afm = document.getElementById("afm").value;
    if(!name) { alert("Παρακαλώ εισάγετε Επωνυμία Πελάτη."); return; }
    let content = `ΠΑΡΑΓΓΕΛΙΑ ZARKOLIA HEALTH\nΠΕΛΑΤΗΣ: ${name}\nΑΦΜ: ${afm}\n\nΣΥΝΟΛΟ: ${document.getElementById("final-total").textContent}\nIBAN: GR89 0172 2520 0052 5201 6160 277`;
    const previewEl = document.getElementById('previewContent');
    const modal = document.getElementById('previewModal');
    if(previewEl && modal) {
        previewEl.textContent = content;
        modal.style.display='block';
        document.getElementById('saveTxtButton').onclick = () => {
            const blob = new Blob([content],{type:'text/plain;charset=utf-8'});
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `Order_${name}.txt`;
            link.click();
        };
    }
}

function clearForm(){ if(confirm("Καθαρισμός φόρμας;")) { document.getElementById("orderForm").reset(); updateAll(); } }
