// Λίστα προϊόντων για τον πίνακα παραγγελιών
const products=[{name:'Z-DermAspis',price:5.03},{name:'ZplastCream 40gr',price:12.3},{name:'ZplastCream 100gr',price:24.79},{name:'Bruise Off Bite Out & Pain Free cream',price:5.26},{name:'Z-boost 30 caps',price:14.93},{name:'Z-boost 12 caps',price:6.99},{name:'Zarkolia Cosmetic pack',price:23.89},{name:'Hydralia Face cream 50ml',price:8.9},{name:'Revitacell + Face cream 50ml',price:10.69},{name:'Revitace Eyes cream Luce 30ml',price:10.1},{name:'Alveolair Sir',price:7.65}];

// Αντικείμενο με τις πλήρεις, διορθωμένες περιγραφές
const productDetails = {
    'Z-DermAspis': {
        consumer: `<h3>Καινοτόμο Σπρέι Διπλής Δράσης</h3><p>Το Z-Derm Aspis είναι σχεδιασμένο για να προσφέρει ταυτόχρονα καθαρισμό της επιδερμίδας και αποτελεσματική προστασία από τα έντομα. Η μοναδική του φόρμουλα συνδυάζει την αντισηπτική δράση της αλκοόλης με ένα ισχυρό μείγμα φυσικών αιθέριων ελαίων, δημιουργώντας μια προστατευτική ασπίδα ενάντια στα κουνούπια. Ενσωματώνει ενυδατικούς παράγοντες όπως η Αλόη και η Γλυκερίνη για να διατηρεί την ισορροπία υγρασίας του δέρματος.</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Αιθυλική Αλκοόλη (Alcohol Denat.):</strong> Ταχείας δράσης και ευρέος φάσματος αντισηπτικό. Εξουδετερώνει βακτήρια, μύκητες και ιούς [1].</p><p><strong>Αιθέριο Έλαιο Ευκαλύπτου Citriodora (PMD):</strong> Το μόνο φυτικής προέλευσης συστατικό που συνιστάται από διεθνείς οργανισμούς υγείας (CDC) για την προστασία από τα κουνούπια, με αποτελεσματικότητα συγκρίσιμη με χαμηλές συγκεντρώσεις DEET [2, 3].</p><p><strong>Αιθέριο Έλαιο Σιτρονέλλας:</strong> Γνωστό φυσικό εντομοαπωθητικό που καλύπτει τις οσμές του ανθρώπινου σώματος [4].</p><p><strong>Αιθέριο Έλαιο Γερανιού:</strong> Πλούσιο σε γερανιόλη, ένα ισχυρό απωθητικό ευρέος φάσματος [5].</p><p><strong>Αλόη & Γλυκερίνη:</strong> Αντισταθμίζουν την αφυδατική δράση της αλκοόλης, προσφέροντας ενυδάτωση και καταπράυνση [6].</p>`,
        bibliography: `<ol><li>World Health Organization (WHO). (2009). WHO Guidelines on Hand Hygiene in Health Care.</li><li>Centers for Disease Control and Prevention (CDC). (2023). Repellents: Protection against Mosquitoes, Ticks, and Other Arthropods.</li><li>Carroll, S. P., & Loye, J. (2006). PMD, a registered botanical mosquito repellent...</li><li>Kongkaew, C., et al. (2011). Effectiveness of citronella preparations in preventing mosquito bites...</li><li>Müller, G. C., et al. (2009). Efficacy of the botanical repellents geraniol, linalool, and citronella...</li><li>Surjushe, A., Vasani, R., & Saple, D. G. (2008). Aloe vera: a short review.</li></ol>`
    },
    'ZplastCream 40gr': {
        consumer: `<h3>Εξειδικευμένη Αναπλαστική Κρέμα</h3><p>Η Zplast Cream είναι σχεδιασμένη για την εντατική φροντίδα και ταχεία επούλωση του ταλαιπωρημένου δέρματος. Η σύνθεσή της, βασισμένη σε μέλι, μαστίχα Χίου, ιπποφαές, και ελληνικά βότανα, προάγει ενεργά την ανάπλαση των ιστών σε πληγές, εγκαύματα και ουλές. Προσφέρει άμεση καταπράυνση από τον κνησμό και τη φλεγμονή.</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Βαλσαμόχορτο:</strong> Επιταχύνει την επιθηλιοποίηση και την επούλωση.</p><p><strong>Έλαιο Αβοκάντο:</strong> Αυξάνει τη σύνθεση κολλαγόνου και μειώνει τη φλεγμονή.</p><p><strong>Ιπποφαές:</strong> Ενισχύει την αναγέννηση των ιστών και βελτιώνει την ελαστικότητα του δέρματος.</p><p><strong>Καλαμίνη:</strong> Παρέχει άμεση ανακούφιση από τον κνησμό και δρα ως ήπιο στυπτικό και αντισηπτικό.</p><p><strong>Καλέντουλα:</strong> Προάγει τον σχηματισμό κοκκιώδους ιστού και την αγγειογένεση.</p><p><strong>Μαστίχα Χίου:</strong> Καταπολεμά παθογόνα του δέρματος και προάγει τον πολλαπλασιασμό των ινοβλαστών.</p><p><strong>Μέλι:</strong> Δημιουργεί ένα ιδανικό περιβάλλον για ανάπλαση και προσφέρει ήπια αντισηπτική δράση.</p><p><strong>Θυμάρι:</strong> Προστατεύει την πληγή από επιμολύνσεις.</p>`,
        bibliography: `<p>Η βιβλιογραφία για το Zplast Cream δεν παρασχέθηκε.</p>`
    },
    'ZplastCream 100gr': {
        consumer: `<h3>Εξειδικευμένη Αναπλαστική Κρέμα (100gr)</h3><p>Η Zplast Cream είναι σχεδιασμένη για την εντατική φροντίδα και ταχεία επούλωση του ταλαιπωρημένου δέρματος. Η σύνθεσή της, βασισμένη σε μέλι, μαστίχα Χίου, ιπποφαές, και ελληνικά βότανα, προάγει ενεργά την ανάπλαση των ιστών σε πληγές, εγκαύματα και ουλές. Η μεγαλύτερη συσκευασία είναι ιδανική για εκτεταμένη χρήση.</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Βαλσαμόχορτο:</strong> Επιταχύνει την επιθηλιοποίηση.</p><p><strong>Έλαιο Αβοκάντο:</strong> Αυξάνει τη σύνθεση κολλαγόνου.</p><p><strong>Ιπποφαές:</strong> Ενισχύει την αναγέννηση των ιστών.</p><p><strong>Καλαμίνη:</strong> Παρέχει άμεση ανακούφιση από τον κνησμό.</p><p><strong>Καλέντουλα:</strong> Προάγει τον σχηματισμό κοκκιώδους ιστού.</p><p><strong>Μαστίχα Χίου:</strong> Καταπολεμά παθογόνα του δέρματος.</p><p><strong>Μέλι:</strong> Δημιουργεί ιδανικό περιβάλλον για ανάπλαση.</p><p><strong>Θυμάρι:</strong> Προστατεύει από επιμολύνσεις.</p>`,
        bibliography: `<p>Η βιβλιογραφία για το Zplast Cream δεν παρασχέθηκε.</p>`
    },
    'Bruise Off Bite Out & Pain Free cream': {
        consumer: `<h3>Κρέμα με Άρνικα & Αιθέρια Έλαια</h3><p>Προσφέρει στοχευμένη ανακούφιση από μυϊκές και αρθρικές ενοχλήσεις. Ο συνδυασμός από εκχύλισμα Άρνικας και αιθέρια έλαια δρα για τη μείωση της φλεγμονής, την ανακούφιση από τον πόνο και την επιτάχυνση της απορρόφησης των μωλώπων και του οιδήματος.</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Άρνικα:</strong> Αποτελεσματική στη μείωση του πόνου, της δυσκαμψίας και του οιδήματος μετά από τραυματισμούς [1, 2].</p><p><strong>Λινέλαιο:</strong> Πλούσιο σε ωμέγα-3 (ALA), ασκεί αντιφλεγμονώδη δράση [3].</p><p><strong>Αιθέριο Έλαιο Λεβάντας:</strong> Συμβάλλει στη μυϊκή χαλάρωση και την τοπική ανακούφιση [4].</p><p><strong>Αιθέριο Έλαιο Μελισσόχορτου:</strong> Καταπραΰνει τους ερεθισμούς και μειώνει το οίδημα [5].</p><p><strong>Ριγανέλαιο:</strong> Βελτιώνει την τοπική κυκλοφορία και βοηθά στην ανακούφιση από μυϊκούς πόνους [6].</p>`,
        bibliography: `<ol><li>Lyss, G., et al. (1998). Helenalin, an anti-inflammatory sesquiterpene lactone...</li><li>Smith, A. G., et al. (2021). The effects of Arnica D30 in a marathon setting...</li><li>Lin, T. K., et al. (2017). Anti-inflammatory and skin barrier repair effects...</li><li>Nasiri, A., & Mahmodi, M. A. (2018). Aromatherapy massage with lavender...</li><li>Bounihi, A., et al. (2013). The antioxidant and analgesic effects of Melissa officinalis L...</li><li>Lima, M. D. S., et al. (2013). Anti-inflammatory and antinocicpetive effects of carvacrol...</li><li>Kriplani, P., et al. (2017). Arnica montana L. - a plant of healing...</li></ol>`
    },
    'Z-boost 30 caps': {
        consumer: `<h3>Ενίσχυση του Ανοσοποιητικού Συστήματος</h3><p>Το Zarkolia Z-Boost είναι ένα προηγμένο συμπλήρωμα διατροφής για την ολιστική ενίσχυση και θωράκιση του ανοσοποιητικού. Η φόρμουλα συνδυάζει ισχυρά αντιοξειδωτικά για να ενδυναμώσει τη φυσική άμυνα, να υποστηρίξει την παραγωγή ενέργειας και να συμβάλλει στη μείωση του χρόνου ανάρρωσης.</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Ψευδάργυρος (Zinc):</strong> Μειώνει τη διάρκεια και τη σοβαρότητα των λοιμώξεων του ανώτερου αναπνευστικού [1].</p><p><strong>Σελήνιο (Selenium):</strong> Προστατεύει τα κύτταρα του ανοσοποιητικού από την οξειδωτική βλάβη [2].</p><p><strong>Συνένζυμο Q10:</strong> Θεμελιώδες για την παραγωγή ενέργειας (ATP) [3].</p><p><strong>Άλφα-λιποϊκό οξύ (ALA):</strong> Αναγεννά τις βιταμίνες C και E [4].</p><p><strong>Ν-ακετυλοκυστεΐνη (NAC):</strong> Πρόδρομη ουσία της γλουταθειόνης [5].</p>`,
        bibliography: `<ol><li>Hemilä, H. (2017). Zinc lozenges and the common cold...</li><li>Hoffmann, P. R., & Berry, M. J. (2008). The influence of selenium on immune responses...</li><li>Saini, R. (2011). Coenzyme Q10: The essential nutrient...</li><li>Packer, L., et al. (1995). alpha-Lipoic acid as a biological antioxidant...</li><li>Aldini, G., et al. (2018). N-Acetylcysteine as an antioxidant...</li><li>Prasad, A. S. (2008). Zinc in human health...</li></ol>`
    },
    'Z-boost 12 caps': {
        consumer: `<h3>Ενίσχυση του Ανοσοποιητικού (12 caps)</h3><p>Το Zarkolia Z-Boost είναι ένα προηγμένο συμπλήρωμα διατροφής για την ολιστική ενίσχυση του ανοσοποιητικού. Η συσκευασία των 12 καψουλών είναι ιδανική για περιοδική ή βραχυπρόθεσμη ενίσχυση.</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Ψευδάργυρος (Zinc):</strong> Μειώνει τη διάρκεια και τη σοβαρότητα των λοιμώξεων [1].</p><p><strong>Σελήνιο (Selenium):</strong> Προστατεύει τα κύτταρα από την οξειδωτική βλάβη [2].</p><p><strong>Συνένζυμο Q10:</strong> Θεμελιώδες για την παραγωγή ενέργειας [3].</p><p><strong>Άλφα-λιποϊκό οξύ (ALA):</strong> Αναγεννά τις βιταμίνες C και E [4].</p><p><strong>Ν-ακετυλοκυστεΐνη (NAC):</strong> Πρόδρομη ουσία της γλουταθειόνης [5].</p>`,
        bibliography: `<ol><li>Hemilä, H. (2017). Zinc lozenges and the common cold...</li><li>Hoffmann, P. R., & Berry, M. J. (2008). The influence of selenium...</li><li>Saini, R. (2011). Coenzyme Q10...</li><li>Packer, L., et al. (1995). alpha-Lipoic acid...</li><li>Aldini, G., et al. (2018). N-Acetylcysteine...</li><li>Prasad, A. S. (2008). Zinc in human health...</li></ol>`
    },
    'Zarkolia Cosmetic pack': {
        consumer: `<h3>Ολοκληρωμένη Προσέγγιση στην Περιποίηση</h3><p>Η σειρά περιποίησης προσώπου της Zarkolia αποτελεί ένα ολοκληρωμένο πρωτόκολλο φροντίδας, αποτελούμενο από τρία εξειδικευμένα προϊόντα που δρουν συνεργατικά: την αντιρυτιδική Revitacell Plus, την υπερ-ενυδατική Hydralia και τη στοχευμένη κρέμα ματιών Revitacell Eyes. Προσφέρει ένα ολιστικό αποτέλεσμα για μια επιδερμίδα που ακτινοβολεί υγεία, νεανικότητα και λάμψη.</p>`,
        science: `<h3>Τα 3 Βήματα της Περιποίησης Zarkolia</h3><p><strong>1. Revitacell Plus Face Cream:</strong> Αντιγηραντική δράση με Μαστίχα Χίου που ενισχύει την "πρωτεΐνη της νεότητας" Klotho.</p><p><strong>2. Hydralia Face Cream:</strong> Βαθιά ενυδάτωση με Υαλουρονικό Οξύ που "γεμίζει" τις λεπτές γραμμές.</p><p><strong>3. Revitacell Eyes Cream:</strong> Στοχευμένη λύση για μαύρους κύκλους και πρήξιμο με Ιπποκαστανιά και Άρνικα.</p>`,
        bibliography: `<p>Παρακαλώ ανατρέξτε στη βιβλιογραφία των επιμέρους προϊόντων.</p>`
    },
    'Hydralia Face cream 50ml': {
        consumer: `<h3>Βαθιά, Μακράς Διάρκειας Ενυδάτωση</h3><p>Η κρέμα προσώπου Hydralia αποκαθιστά τη φυσική ισορροπία υγρασίας της επιδερμίδας. Ενισχύει τον δερματικό φραγμό και προστατεύει από την απώλεια νερού, αναζωογονώντας το κουρασμένο και αφυδατωμένο δέρμα και αφήνοντάς το απαλό, ελαστικό και ορατά πιο λαμπερό.</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Υαλουρονικό Οξύ:</strong> Αυξάνει δραματικά την ενυδάτωση και βελτιώνει τη σφριγηλότητα [1].</p><p><strong>Έλαιο Αβοκάντο:</strong> Ενισχύει τη λειτουργία του δερματικού φραγμού [2].</p><p><strong>Έλαιο Jojoba:</strong> Διεγείρει τη σύνθεση κολλαγόνου [3].</p><p><strong>Έλαιο Αμυγδάλου:</strong> Μειώνει τους ερεθισμούς [4].</p><p><strong>Γλυκερίνη:</strong> Ισχυρός υγροσκοπικός παράγοντας [5].</p>`,
        bibliography: `<ol><li>Bukhari, S. N. A., et al. (2018). Hyaluronic acid...</li><li>Lin, T. K., et al. (2017). Anti-Inflammatory and Skin Barrier Repair Effects...</li><li>Ranzato, E., et al. (2011). Wound healing properties of jojoba...</li><li>Ahmad, Z. (2010). The uses and properties of almond oil...</li><li>Fluhr, J. W., et al. (2008). Glycerol and the skin...</li></ol>`
    },
    'Revitacell + Face cream 50ml': {
        consumer: `<h3>Κρέμα Πολλαπλής Δράσης για Ολική Επανόρθωση</h3><p>Η Revitacell Plus στοχεύει στα κύρια σημάδια της γήρανσης. Συνδυάζει ισχυρά αντιοξειδωτικά με παράγοντες βαθιάς ενυδάτωσης για να προστατεύσει το δέρμα από το περιβαλλοντικό στρες και να μειώσει την εμφάνιση των ρυτίδων. Προσφέρει ορατό αποτέλεσμα lifting.</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Μαστίχα Χίου:</strong> Ενισχύει τη σύνθεση της πρωτεΐνης Klotho (πρωτεΐνη νεότητας) [1].</p><p><strong>Έλαιο Ροδιού:</strong> Προστατεύει από την UV ακτινοβολία και προάγει την ανάπλαση [2].</p><p><strong>Σύμπλεγμα Super Berries:</strong> Παρέχει κορυφαία αντιοξειδωτική προστασία [3].</p><p><strong>Υαλουρονικό Οξύ:</strong> "Γεμίζει" τις λεπτές γραμμές [4].</p><p><strong>Αλόη:</strong> Διεγείρει την παραγωγή κολλαγόνου και ελαστίνης [5].</p>`,
        bibliography: `<ol><li>Lall, N., et al. (2020). Rejuvenating effect of mastic gum...</li><li>Neha, K., et al. (2014). Pomegranate seed oil...</li><li>Petroni, K., et al. (2017). Plant Polyphenols...</li><li>Papakonstantinou, E., et al. (2012). Hyaluronic acid...</li><li>Surjushe, A., et al. (2008). Aloe vera: a short review...</li></ol>`
    },
    'Revitace Eyes cream Luce 30ml': {
        consumer: `<h3>Επανορθωτική Κρέμα για την Περιοχή των Ματιών</h3><p>Μια σύνθεση πολλαπλής δράσης, σχεδιασμένη για να καταπολεμά τα κύρια σημάδια της κούρασης και της γήρανσης. Μειώνει την εμφάνιση των μαύρων κύκλων, περιορίζει το πρήξιμο, «γεμίζει» τις λεπτές γραμμές και βελτιώνει τη σφριγηλότητα του δέρματος.</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Ιπποκαστανιά:</strong> Η αισκίνη που περιέχει ενισχύει τα τοιχώματα των τριχοειδών αγγείων, μειώνοντας το οίδημα [1, 5].</p><p><strong>Άρνικα:</strong> Βοηθά στην ταχύτερη απορρόφηση των μικρο-μωλώπων που συμβάλλουν στους μαύρους κύκλους [2].</p><p><strong>Υαλουρονικό Οξύ:</strong> Προσφέρει άμεση και βαθιά ενυδάτωση, "γεμίζοντας" τις λεπτές γραμμές [3].</p><p><strong>Φυσικά Έλαια (Jojoba & Almond):</strong> Ενισχύουν τον λιπιδικό φραγμό και βελτιώνουν την ελαστικότητα [4].</p>`,
        bibliography: `<ol><li>Gallelli, L. (2019). Escin: a review of its anti-edematous...</li><li>Kriplani, P., et al. (2017). Arnica montana L. - a plant of healing...</li><li>Papakonstantinou, E., et al. (2012). Hyaluronic acid...</li><li>Lin, T. K., et al. (2017). Anti-Inflammatory and Skin Barrier Repair Effects...</li><li>Sirtori, C. R. (2001). Aescin: pharmacology...</li></ol>`
    },
    'Alveolair Sir': {
        consumer: `<h3>Φυσικό Σιρόπι για το Βήχα</h3><p>Το φυτικό αυτό σιρόπι προσφέρει μια ολοκληρωμένη, φυσική προσέγγιση για την αντιμετώπιση τόσο του ξηρού όσο και του παραγωγικού βήχα. Η σύνθεσή του δρα συνεργατικά για να καταπραΰνει τον ερεθισμένο λαιμό, να μαλακώνει τους αεραγωγούς και να ενισχύει τη φυσική άμυνα του οργανισμού.</p>`,
        science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Ευκάλυπτος:</strong> Εγκεκριμένο από τον EMA ως αποχρεμπτικό [1].</p><p><strong>Θυμάρι:</strong> Έχει αποχρεμπτική, βρογχοδιασταλτική και αντιμικροβιακή δράση [2].</p><p><strong>Αλθέα:</strong> Ανακουφίζει από τον ξηρό, ερεθιστικό βήχα [3].</p><p><strong>Κράνι:</strong> Πηγή βιταμίνης C με αντιοξειδωτικές ιδιότητες [4].</p><p><strong>Ιπποφαές:</strong> Ισχυρό τονωτικό του ανοσοποιητικού [5].</p>`,
        bibliography: `<ol><li>Sadlon, A. E., & Lamson, D. W. (2010). Eucalyptus oil...</li><li>Kemmerich, B., et al. (2007). Thyme herb...</li><li>EMA. (2016). Althaea officinalis L., radix...</li><li>Tural, S., & Koca, I. (2008). Cornelian cherry...</li><li>Olas, B. (2018). Sea buckthorn...</li><li>Graca, J., et al. (2022). Thymus vulgaris L...</li></ol>`
    }
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('productModal').innerHTML = `<div class="modal-content"><div class="modal-header"><h2 id="modalProductName"></h2><span class="close-button" onclick="closeProductModal()">&times;</span></div><div class="modal-body"><div class="modal-tabs"><button class="tab-button active" onclick="openTab(event, 'Consumer')">Για το Κοινό</button><button class="tab-button" onclick="openTab(event, 'Science')">Επιστημονικά</button><button class="tab-button" onclick="openTab(event, 'Biblio')">Βιβλιογραφία</button></div><div id="Consumer" class="tab-content" style="display: block;"></div><div id="Science" class="tab-content"></div><div id="Biblio" class="tab-content"></div></div></div>`;
    document.getElementById('previewModal').innerHTML = `<div class="modal-content"><div class="modal-header"><h2>Προεπισκόπηση</h2><span class="close-button" onclick="closePreviewModal()">&times;</span></div><div class="modal-body"><pre id="previewContent"></pre></div><div class="modal-footer"><button id="saveTxtButton" class="btn" style="background-color:#5cb85c">Αποθήκευση</button><button class="btn" style="background-color:#aaa" onclick="closePreviewModal()">Κλείσιμο</button></div></div>`;
    
    const productButtonsContainer = document.getElementById('productButtonsContainer');
    products.forEach(p => {
        const button = document.createElement('button');
        button.className = 'product-btn';
        button.textContent = p.name;
        button.onclick = () => showProductDetails(p.name);
        productButtonsContainer.appendChild(button);
    });
    
    const tableBody=document.querySelector('#product-table tbody');
    products.forEach(p=>{const r=document.createElement('tr');r.innerHTML=`<td>${p.name}</td><td>${p.price.toFixed(2)} €</td><td><input type="number" class="quantity" min="0" data-price="${p.price}" oninput="updateAll()" value="0"></td><td class="gifts">0</td><td class="effective-price normal">${p.price.toFixed(2)} €</td><td class="line-total">0.00 €</td>`;tableBody.appendChild(r);});
    
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

function showProductDetails(productName){
    const p = productDetails[productName];
    const modalProductName = document.getElementById('modalProductName');
    const consumerTab = document.getElementById('Consumer');
    const scienceTab = document.getElementById('Science');
    const biblioTab = document.getElementById('Biblio');

    if(p){
        modalProductName.textContent = productName;
        consumerTab.innerHTML = p.description.consumer || '<p>Δεν υπάρχουν πληροφορίες.</p>';
        scienceTab.innerHTML = p.description.science || '<p>Δεν υπάρχουν πληροφορίες.</p>';
        biblioTab.innerHTML = p.description.bibliography || '<p>Δεν υπάρχουν πληροφορίες.</p>';
    } else {
        modalProductName.textContent = productName;
        consumerTab.innerHTML = `<p>Δεν βρέθηκε αναλυτική περιγραφή για αυτό το προϊόν.</p>`;
        scienceTab.innerHTML = '';
        biblioTab.innerHTML = '';
    }
    document.getElementById('productModal').style.display='block';
    document.querySelector('.tab-button').click();
}
function closeProductModal(){document.getElementById('productModal').style.display='none';}
function closePreviewModal(){document.getElementById('previewModal').style.display='none';}

function calculateGifts(quantity){if(quantity<9)return 0;if(quantity>=9&&quantity<18)return 1;if(quantity>=18&&quantity<24)return 3;if(quantity>=24&&quantity<48)return 6;const ratio=15/48;return Math.floor(quantity*ratio);}
function updateAll(){let t=0;document.querySelectorAll("#product-table tbody tr").forEach(r=>{const q=r.querySelector(".quantity"),p=parseInt(q.value)||0,d=parseFloat(q.dataset.price),g=calculateGifts(p),a=p+g,l=p*d;let e=d;p>0&&a>0&&(e=l/a);const pc=r.querySelector(".effective-price");pc.innerHTML=`${e.toFixed(2)} €`;if(e<d-0.001){pc.classList.add('discounted');pc.classList.remove('normal');}else{pc.classList.add('normal');pc.classList.remove('discounted');}r.querySelector(".gifts").textContent=g;r.querySelector(".line-total").innerHTML=`${l.toFixed(2)} €`;t+=l;});const v=t*0.24,f=t+v;document.getElementById("net-value").innerHTML=`${t.toFixed(2)} €`;document.getElementById("vat-value").innerHTML=`${v.toFixed(2)} €`;document.getElementById("final-total").innerHTML=`${f.toFixed(2)} €`;}
function getOrderData(){const c={eponimia:document.getElementById("eponimia").value,afm:document.getElementById("afm").value,doy:document.getElementById("doy").value,mobile:document.getElementById("mobile").value,phone:document.getElementById("phone").value,email:document.getElementById("email").value};const i=[];document.querySelectorAll("#product-table tbody tr").forEach(r=>{const q=parseInt(r.querySelector('.quantity').value)||0;q>0&&i.push({name:r.cells[0].textContent,quantity:q,gifts:parseInt(r.querySelector('.gifts').textContent),effectivePrice:r.querySelector('.effective-price').textContent,total:r.querySelector('.line-total').textContent});});return{customerData:c,items:i,totals:{net:document.getElementById("net-value").textContent,vat:document.getElementById("vat-value").textContent,final:document.getElementById("final-total").textContent}}}
function generateOrderContent(){const{customerData:c,items:i,totals:t}=getOrderData();const b="\n\nΣΤΟΙΧΕΙΑ ΚΑΤΑΘΕΣΗΣ\n----------------------------------------\nIBAN: GR8901722520005252016160277\nΤράπεζα: Τράπεζα Πειραιώς\n";let content="========================================\n      Π Α Ρ Α Γ Γ Ε Λ Ι Α\n========================================\n\n";content+="ΣΤΟΙΧΕΙΑ ΠΕΛΑΤΗ\n----------------------------------------\n";content+=`Επωνυμία: ${c.eponimia}\nΑΦΜ: ${c.afm}\nΔΟΥ: ${c.doy}\n`;content+=`Email: ${c.email}\nΤηλ: ${c.mobile} / ${c.phone}\n\n`;content+="ΑΝΑΛΥΣΗ ΠΑΡΑΓΓΕΛΙΑΣ\n------------------------------------------------------------------------\n";i.forEach(item=>{let qText=item.gifts>0?`${item.quantity} (+${item.gifts} Δώρο)`:`${item.quantity}`;content+=`${item.name}\n`;content+=`  └─ Ποσότητα: ${qText.padEnd(15)} | Τελ. Τιμή/Τεμ.: ${item.effectivePrice.padEnd(12)} | Σύνολο: ${item.total.padStart(8)}\n\n`;});content+="------------------------------------------------------------------------\n\n";content+="ΣΥΝΟΛΑ\n----------------------------------------\n";content+=`Καθαρή Αξία:${''.padStart(15)} ${t.net}\n`;content+=`Αξία ΦΠΑ (24%):${''.padStart(11)} ${t.vat}\n`;content+=`ΤΕΛΙΚΟ ΠΟΣΟ:${''.padStart(14)} ${t.final}\n`;content+=b;return content;}
function sendEmailViaClient(){const{customerData:c,items:i}=getOrderData();if(i.length===0){alert("Η παραγγελία είναι κενή.");return}const body=generateOrderContent();const subject=`Νέα Παραγγελία από ${c.eponimia||'Νέος Πελάτης'}`;let mailtoLink=`mailto:pzaro2010@gmail.com,liapaki2017@gmail.com`;c.email&&(mailtoLink+=`?cc=${c.email}`);mailtoLink+=`&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;window.location.href=mailtoLink;}
function previewAndSaveAsTXT(){if(getOrderData().items.length===0){alert("Η παραγγελία είναι κενή.");return}const content=generateOrderContent();const filename=`Παραγγελία_${getOrderData().customerData.eponimia.replace(/\s/g,'_')||'customer'}.txt`;document.getElementById('previewContent').textContent=content;document.getElementById('previewModal').style.display='block';document.getElementById('saveTxtButton').onclick=()=>saveTextAsFile(content,filename);}
function saveTextAsFile(text,filename){const blob=new Blob([text],{type:'text/plain;charset=utf-8'});const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download=filename;document.body.appendChild(link);link.click();document.body.removeChild(link);closePreviewModal();}
function clearForm(){document.getElementById("orderForm").reset();document.querySelectorAll(".quantity").forEach(q=>{q.value="0"});updateAll();}
