/**
 * ═══════════════════════════════════════════════════════════════════
 * ZARKOLIA HEALTH — BACKEND MASTER (πλήρες, διορθωμένο)
 * ═══════════════════════════════════════════════════════════════════
 *
 * ΟΔΗΓΙΕΣ ΕΓΚΑΤΑΣΤΑΣΗΣ:
 *  1. Άνοιξε το Google Sheet -> Επεκτάσεις -> Apps Script.
 *  2. ΔΙΑΓΡΑΨΕ ΤΑ ΠΑΝΤΑ από το Code.gs (Ctrl+A, Delete).
 *     Αν έχεις προσθέσει και άλλα αρχεία .gs από προηγούμενες
 *     δοκιμές, ΣΒΗΣΕ ΤΑ (δεξί κλικ στο όνομα -> Διαγραφή).
 *     Πρέπει να μείνει ΜΟΝΟ ένα αρχείο.
 *  3. Επικόλλησε ΟΛΟ αυτό το αρχείο.
 *  4. Ctrl+S για αποθήκευση. Το κόκκινο σφάλμα πρέπει να φύγει
 *     και το dropdown συναρτήσεων να γεμίσει.
 *  5. Τρέξε: setupCheck()   -> έλεγχος ότι όλα είναι στη θέση τους.
 *  6. Ανάπτυξη -> Διαχείριση αναπτύξεων -> ✏️ -> Έκδοση: Νέα έκδοση
 *     -> Ανάπτυξη.  (Κρατάει το ίδιο URL.)
 *
 * ═══════════════════════════════════════════════════════════════════
 */


/*** ═══════════════════ CONFIG ═══════════════════ ***/

const ADMIN_PIN = "1234";

// let (όχι const) ώστε να δουλεύει η testDailyReportToMe()
let REPORT_RECIPIENTS = "pzaro2010@gmail.com,zarkolia.gr@gmail.com,liapaki2017@gmail.com";

const ORDER_CC   = "pzaro2010@gmail.com,liapaki2017@gmail.com";  // CC στα email παραγγελίας
const TEST_EMAIL = "pzaro2010@gmail.com";                         // παραλήπτης δοκιμών

const REPORT_HOUR     = 7;   // ώρα ημερήσιου email (24ωρο)
const STOCK_LOW_LIMIT = 5;   // υπόλοιπο <= αυτό -> ⚠️

const VAT_RATE = 0.24;       // ΦΠΑ 24%

/**
 * ΕΛΑΧΙΣΤΗ ΠΑΡΑΓΓΕΛΙΑ (χωρίς ΦΠΑ)
 * MIN_ORDER_BASIS: "netFinal" = καθαρή αξία ΜΕΤΑ τις εκπτώσεις
 *                  "grossNet" = αρχική αξία ΠΡΙΝ τις εκπτώσεις
 * ΠΡΟΣΟΧΗ: οι ίδιες τιμές πρέπει να υπάρχουν και στο index.html.
 */
const MIN_ORDER_NET   = 100;
const MIN_ORDER_BASIS = "netFinal";

// Φύλλα
const FIN_SHEET       = "ΟΙΚΟΝΟΜΙΚΑ";
const INVENTORY_SHEET = "ΑΠΟΓΡΑΦΗ_ΠΕΛΑΤΩΝ";

// Στήλες φύλλου ΟΙΚΟΝΟΜΙΚΑ (1-based)
const FIN_DATE_COL   = 1;    // A = ημερομηνία
const FIN_AMOUNT_COL = 2;    // B = καθαρή αξία (€)
const FIN_VAT_COL    = 3;    // C = ΦΠΑ (€)
const FIN_TOTAL_COL  = 4;    // D = σύνολο με ΦΠΑ (€)

// Στήλες φύλλου "Orders" (0-based) όπως γράφονται από το doPost
const ORD_DATE_COL  = 0;     // A  ημερομηνία
const ORD_AFM_COL   = 2;     // C  ΑΦΜ
const ORD_ITEMS_COL = 7;     // H  itemsSummary
const ORD_NET_COL   = 14;    // O  netFinal   -> ΚΑΘΑΡΗ ΑΞΙΑ (τζίρος)
const ORD_VAT_COL   = 15;    // P  vatAmount  -> ΦΠΑ
const ORD_TOTAL_COL = 16;    // Q  finalTotal -> ΜΕ ΦΠΑ

// Βάση υπολογισμού πωλήσεων στην αναφορά: "net" (τζίρος) ή "gross" (με ΦΠΑ)
const FIN_BASIS = "net";

/**
 * ΠΗΓΕΣ ΕΙΔΗΣΕΩΝ (live ticker)
 * Κάθε πηγή είναι ένα RSS/Atom feed. Αν μία πέσει, οι υπόλοιπες συνεχίζουν.
 * Τρέξε testNewsFeeds() για να δεις ποιες απαντούν ΠΡΑΓΜΑΤΙΚΑ.
 * label = η ετικέτα που εμφανίζεται πριν τον τίτλο στο ticker.
 */
const NEWS_FEEDS = [
  { label: "ΕΟΦ",        url: "https://www.eof.gr/web/guest/home?p_p_id=101&p_p_lifecycle=0&_101_struts_action=%2Fasset_publisher%2Frss" },
  { label: "Υγεία",      url: "https://www.iatronet.gr/rss/eidhseis-ygeias.xml" },
  { label: "Φαρμακείο",  url: "https://www.imerisia.gr/rss/farmakeio" },
  { label: "EMA",        url: "https://www.ema.europa.eu/en/rss/news.xml" },
  { label: "Ειδήσεις",   url: "https://www.naftemporiki.gr/feed/" }
];

const NEWS_MAX_ITEMS   = 18;   // πόσες ειδήσεις συνολικά στο ticker
const NEWS_PER_FEED    = 5;    // μέγιστες ανά πηγή (για ισορροπία)
const NEWS_CACHE_MIN   = 30;   // λεπτά προσωρινής αποθήκευσης
const NEWS_MAX_AGE_DAYS = 10;  // αγνόησε ειδήσεις παλαιότερες από αυτό

/**
 * ΑΝΤΙΣΤΟΙΧΙΣΕΙΣ ΟΝΟΜΑΤΩΝ
 * Όταν το όνομα στο φύλλο "Stock" ΔΙΑΦΕΡΕΙ από το όνομα στο products.js.
 * Μορφή:  'όνομα στο products.js' : 'όνομα στο φύλλο Stock'
 * Χωρίς αυτό, το απόθεμα ΔΕΝ μειώνεται για το συγκεκριμένο προϊόν.
 */
const STOCK_ALIASES = {
  'Zplast Total Repair Cream 30ml': 'Zplast Total Repair 30ml'
};

/**
 * ΚΑΝΟΝΙΚΟΣ ΚΑΤΑΛΟΓΟΣ — πρέπει να ταιριάζει με το products.js
 * (χαρακτήρας προς χαρακτήρα). Χρησιμοποιείται από τον έλεγχο ονομάτων.
 */
const CANONICAL_PRODUCTS = [
  'Z-DermAspis',
  'Zplast Total Repair Cream 30ml',
  'Zplast Total Repair 50ml',
  'Zplast Total Repair 100ml',
  'ZplastCream 40gr',
  'ZplastCream 100gr',
  'Bruise Off cream 50ml',
  'Bruise Off cream 100ml',
  'Z-boost 30 caps',
  'Z-boost 12 caps',
  'Hydralia Face cream 50ml',
  'Revitacell Plus Face cream 50ml',
  'Revitace Eyes cream Luce 30ml',
  'Alveolair Sir',
  'NUTRI MX PROBIOTIC Premium (18 ΠΡΟΒΙΟΤΙΚΑ - 10 Billion CFU) 30 caps',
  'NUTRI MX MAGNESIUM +B6 (200 mg +5mg) 30 tab',
  'NUTRI MX A-Z ΠΟΛΥΒΙΤΑΜΙΝΗ 30 TAB',
  'NUTRI MX OMEGA 3 30 Softgel Caps',
  'NUTRI MX JOINT (GLUCOSAMINE + CHONDROITINE + MSM +COLLAGEN) 30 TAB',
  'NUTRI MX D3 + K2 (4000 IU +100μg) 30 tab',
  'Zarkolia Cosmetic pack'
];

/*** ══════════════════════════════════════════════ ***/


/* ═══════════════════════════════════════════════════════════════
 * WEB APP — ΕΙΣΕΡΧΟΜΕΝΑ ΑΙΤΗΜΑΤΑ
 * ═══════════════════════════════════════════════════════════════ */

function doGet(e) {
  if (!e || !e.parameter) {
    return _json_({ success: false, message: "No parameters." });
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const action = e.parameter.action;

  // ---------- Αναζήτηση πελάτη με ΑΦΜ ----------
  if (action === "lookup") {
    const custSheet = ss.getSheetByName("Customers");
    if (!custSheet) return _json_({ success: false, error: "Δεν βρέθηκε φύλλο Customers" });

    const data = custSheet.getDataRange().getValues();
    const afmInput = _padAfm_(e.parameter.afm);

    for (let i = 1; i < data.length; i++) {
      if (_padAfm_(data[i][1]) === afmInput) {
        return _json_({
          success: true,
          data: {
            eponimia: data[i][0] || "",
            doy:      data[i][2] || "",
            kinito:   data[i][3] || "",
            stathero: data[i][4] || "",
            email:    data[i][5] || ""
          }
        });
      }
    }

    return _json_({ success: false });
  }

  // ---------- Υπόλοιπα αποθήκης ----------
  if (action === "getStock") {
    if (e.parameter.pin !== ADMIN_PIN) {
      return _json_({ success: false, error: "Λάθος PIN" });
    }

    const inventory = {};
    _readStock_(ss).forEach(function (r) { inventory[r.name] = r.qty; });

    // Γεφύρωση αντιστοιχίσεων: εκθέτουμε το απόθεμα και με το όνομα
    // του καταλόγου, ώστε να το βρίσκει το frontend.
    CANONICAL_PRODUCTS.forEach(function (n) {
      if (!(n in inventory)) {
        const alias = STOCK_ALIASES[n];
        if (alias && (alias in inventory)) inventory[n] = inventory[alias];
      }
    });

    return _json_({ success: true, inventory: inventory });
  }

  // ---------- Ειδήσεις για το ticker (δημόσιο, χωρίς PIN) ----------
  if (action === "getNews") {
    return _json_(getNews_());
  }

  // ---------- Αναζήτηση πελάτη με επωνυμία (autocomplete) ----------
  if (action === "searchCustomers") {
    if (e.parameter.pin !== ADMIN_PIN) {
      return _json_({ success: false, error: "Λάθος PIN" });
    }
    return _json_(searchCustomers(e.parameter.q, e.parameter.limit));
  }

  // ---------- Απογραφή πελάτη ----------
  if (action === "getCustomerInventory") {
    if (e.parameter.pin !== ADMIN_PIN) {
      return _json_({ success: false, error: "Λάθος PIN" });
    }
    return _json_(getCustomerInventory(e.parameter.afm));
  }

  return _json_({ success: false, message: "Unknown action" });
}


function doPost(e) {
  let p;
  try {
    p = JSON.parse(e.postData.contents);
  } catch (err) {
    return _json_({ success: false, error: "Μη έγκυρα δεδομένα" });
  }

  // ---------- Αποθήκευση απογραφής ----------
  if (p.action === "saveInventory") {
    return _json_(saveInventory(p));
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ordSheet   = ss.getSheetByName("Orders");
  const custSheet  = ss.getSheetByName("Customers");
  const stockSheet = ss.getSheetByName("Stock");

  if (!ordSheet) return _json_({ success: false, error: "Δεν βρέθηκε φύλλο Orders" });

  const cleanAfm = _padAfm_(p.afm);

  // ---------- ΕΛΕΓΧΟΣ ΕΛΑΧΙΣΤΗΣ ΠΑΡΑΓΓΕΛΙΑΣ ----------
  // Γίνεται ΠΡΙΝ από κάθε εγγραφή, ώστε να μην αφήνει μισοτελειωμένα δεδομένα.
  const preCalc = calculateOrderFinancials_(p);
  const checkAmount = (MIN_ORDER_BASIS === "grossNet") ? preCalc.netInitial : preCalc.netFinal;

  if (checkAmount < MIN_ORDER_NET) {
    return _json_({
      success: false,
      code: "MIN_ORDER",
      amount: Number(checkAmount.toFixed(2)),
      minimum: MIN_ORDER_NET,
      error: "Ελάχιστη παραγγελία " + MIN_ORDER_NET + " € (+ ΦΠΑ). " +
             "Τρέχουσα αξία: " + checkAmount.toFixed(2) + " €."
    });
  }

  // ---------- Καταχώρηση νέου πελάτη ----------
  if (custSheet) {
    const custData = custSheet.getDataRange().getValues();
    let exists = false;

    for (let i = 1; i < custData.length; i++) {
      if (_padAfm_(custData[i][1]) === cleanAfm) { exists = true; break; }
    }

    if (!exists) {
      custSheet.appendRow([
        p.eponimia || "", cleanAfm, p.doy || "",
        p.kinito || "", p.stathero || "", p.email || ""
      ]);
    }
  }

  // ---------- Υπολογισμοί (ήδη έγιναν στον έλεγχο ελαχίστου) ----------
  const calc = preCalc;

  ordSheet.appendRow([
    new Date(),
    p.eponimia || "",
    cleanAfm,
    p.kinito || "",
    p.stathero || "",
    p.email || "",
    p.doy || "",
    calc.itemsSummary,
    calc.giftsSummary,
    calc.mixDiscountSummary,
    Number(calc.netInitial.toFixed(2)),
    Number(calc.mixDiscVal.toFixed(2)),
    Number(calc.volDiscVal.toFixed(2)),
    Number(calc.cashDiscVal.toFixed(2)),
    Number(calc.netFinal.toFixed(2)),
    Number(calc.vatAmount.toFixed(2)),
    Number(calc.finalTotal.toFixed(2)),
    p.payment || "",
    p.remarks || ""
  ]);

  // ---------- Συγχρονισμός ΟΙΚΟΝΟΜΙΚΑ ----------
  appendFinancialRow_(ss, cleanAfm, p, calc);

  // ---------- Μείωση αποθέματος ----------
  const unmatched = [];

  if (stockSheet) {
    const stockData = stockSheet.getDataRange().getValues();

    (p.cart || []).forEach(function (item) {
      const rowIdx = _findStockRow_(stockData, item.name);

      if (rowIdx === -1) {
        unmatched.push(item.name);
        return;
      }

      const gifts   = getGiftQty_(item.qty, item.name);
      const current = _num_(stockData[rowIdx][1]);
      const newQty  = current - (_num_(item.qty) + gifts);

      stockSheet.getRange(rowIdx + 1, 2).setValue(newQty);
      stockData[rowIdx][1] = newQty;   // ώστε δύο γραμμές του ίδιου προϊόντος να μη χαθούν
    });
  }

  if (unmatched.length) {
    console.warn("⚠️ ΔΕΝ ΒΡΕΘΗΚΑΝ ΣΤΟ STOCK: " + unmatched.join(" | "));
    _notifyUnmatched_(unmatched, p.eponimia);
  }

  sendSupremeEmail(p, calc);

  return _json_({ success: true });
}


/* ═══════════════════════════════════════════════════════════════
 * ΒΟΗΘΗΤΙΚΑ
 * ═══════════════════════════════════════════════════════════════ */

/** Τυποποιημένη JSON απόκριση. */
function _json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/** ΑΦΜ 8 ψηφίων -> προσθήκη μηδενικού μπροστά. */
function _padAfm_(v) {
  let s = String(v || "").trim();
  if (s.length === 8) s = "0" + s;
  return s;
}

/**
 * Κανονικοποίηση ελληνικού κειμένου για αναζήτηση:
 * κεφαλαία, χωρίς τόνους/διαλυτικά, ενιαία κενά.
 * "Φαρμακείο Παπαδόπουλος" -> "ΦΑΡΜΑΚΕΙΟ ΠΑΠΑΔΟΠΟΥΛΟΣ"
 */
function _normGreek_(s) {
  let t = String(s || "").toUpperCase();

  try {
    t = t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").normalize("NFC");
  } catch (err) {
    // Εφεδρική αντικατάσταση αν δεν υποστηρίζεται το normalize
    const from = "ΆΈΉΊΪΌΎΫΏ";
    const to   = "ΑΕΗΙΙΟΥΥΩ";
    let out = "";
    for (let i = 0; i < t.length; i++) {
      const idx = from.indexOf(t.charAt(i));
      out += (idx === -1) ? t.charAt(i) : to.charAt(idx);
    }
    t = out;
  }

  return t.replace(/\s+/g, " ").trim();
}

/**
 * Αναζήτηση πελατών με επωνυμία Ή ΑΦΜ.
 * Αγνοεί τόνους και πεζά/κεφαλαία. Προτεραιότητα σε όσους ΑΡΧΙΖΟΥΝ
 * με τον όρο, μετά σε όσους τον περιέχουν.
 */
function searchCustomers(query, limit) {
  const q = _normGreek_(query);
  if (q.length < 2) return { success: true, query: query || "", results: [] };

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Customers");
  if (!sheet) return { success: false, error: "Δεν βρέθηκε φύλλο Customers" };

  const data = sheet.getDataRange().getValues();
  const max = Math.min(Number(limit) || 10, 25);

  const starts = [];
  const contains = [];
  const seen = {};

  for (let i = 1; i < data.length; i++) {
    const name = String(data[i][0] || "").trim();
    const afm  = _padAfm_(data[i][1]);
    if (!name && !afm) continue;

    // Αποφυγή διπλοεγγραφών ίδιου ΑΦΜ
    const key = afm || name;
    if (seen[key]) continue;

    const n = _normGreek_(name);
    const nameHit = n.indexOf(q);
    const afmHit  = afm.indexOf(q);
    if (nameHit === -1 && afmHit === -1) continue;

    seen[key] = true;

    const rec = {
      eponimia: name,
      afm: afm,
      doy:      data[i][2] || "",
      kinito:   data[i][3] || "",
      stathero: data[i][4] || "",
      email:    data[i][5] || ""
    };

    if (nameHit === 0 || afmHit === 0) starts.push(rec);
    else contains.push(rec);

    if (starts.length >= max) break;
  }

  const byName = function (a, b) { return _normGreek_(a.eponimia) < _normGreek_(b.eponimia) ? -1 : 1; };
  starts.sort(byName);
  contains.sort(byName);

  const results = starts.concat(contains).slice(0, max);

  return { success: true, query: query, count: results.length, results: results };
}

/** Μετατρέπει Date / serial number / κείμενο σε Date. Επιστρέφει null αν αποτύχει. */
function _asDate_(v) {
  if (v instanceof Date) return isNaN(v.getTime()) ? null : v;

  if (typeof v === "number" && v > 0) {
    // Serial number Sheets (ημέρες από 30/12/1899). +12h κατά του off-by-one.
    return new Date(Math.round((v - 25569) * 86400000) + 43200000);
  }

  const s = String(v || "").trim();
  if (!s) return null;

  let m = s.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4})/);       // 31/12/2026
  if (m) return new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));

  m = s.match(/^(\d{4})[\/\-.](\d{1,2})[\/\-.](\d{1,2})/);           // 2026-12-31
  if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));

  const d = new Date(s);
  return isNaN(d.getTime()) ? null : d;
}

/** Μετατρέπει "1.234,56 €" / "1234.56" / αριθμό σε Number. */
function _num_(v) {
  if (typeof v === "number") return isNaN(v) ? 0 : v;

  let s = String(v || "").replace(/[^\d,.\-]/g, "").trim();
  if (!s) return 0;

  if (s.indexOf(",") > -1 && s.indexOf(".") > -1) {
    s = s.replace(/\./g, "").replace(",", ".");
  } else if (s.indexOf(",") > -1) {
    s = s.replace(",", ".");
  }

  const n = Number(s);
  return isNaN(n) ? 0 : n;
}

/** True αν η 1η γραμμή μοιάζει με επικεφαλίδα. */
function _hasHeader_(values, dateIdx) {
  if (!values.length) return false;
  return _asDate_(values[0][dateIdx]) === null;
}

/** Αθροίζει πωλήσεις έτους/μήνα. Επιστρέφει { yearSales, monthSales, rows }. */
function _sumSales_(values, dateIdx, amtIdx, year, month) {
  let yearSales = 0, monthSales = 0, rows = 0;
  const start = _hasHeader_(values, dateIdx) ? 1 : 0;

  for (let i = start; i < values.length; i++) {
    const d = _asDate_(values[i][dateIdx]);
    if (!d || d.getFullYear() !== year) continue;

    const amt = _num_(values[i][amtIdx]);
    yearSales += amt;
    rows++;
    if (d.getMonth() === month) monthSales += amt;
  }

  return { yearSales: yearSales, monthSales: monthSales, rows: rows };
}

/** Διαβάζει το φύλλο Stock αγνοώντας τυχόν γραμμή επικεφαλίδων. */
function _readStock_(ss) {
  const sheet = ss.getSheetByName("Stock");
  if (!sheet) return [];

  const data = sheet.getDataRange().getValues();
  const rows = [];

  for (let i = 0; i < data.length; i++) {
    const name = String(data[i][0] || "").trim();
    if (!name) continue;

    // Επικεφαλίδα = 1η γραμμή με μη αριθμητική 2η στήλη
    if (i === 0) {
      const raw = String(data[i][1]).trim();
      const isNumeric = (typeof data[i][1] === "number") ||
                        (raw !== "" && !isNaN(Number(raw.replace(",", "."))));
      if (!isNumeric) continue;
    }

    rows.push({ name: name, qty: _num_(data[i][1]) });
  }

  return rows;
}

/** Ημέρα του έτους, χωρίς επίδραση της ώρας εκτέλεσης. */
function _dayOfYear_(d) {
  const startOfDay  = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const startOfYear = new Date(d.getFullYear(), 0, 1);
  return Math.floor((startOfDay - startOfYear) / 86400000) + 1;
}

/** Κανονικοποίηση ονόματος για σύγκριση. */
function _normName_(s) {
  return String(s || "").toLowerCase().replace(/\s+/g, " ").trim();
}

/**
 * Βρίσκει τη γραμμή του Stock για ένα προϊόν.
 * Σειρά: ακριβής -> αντιστοίχιση (STOCK_ALIASES) -> κανονικοποιημένη.
 * Επιστρέφει index γραμμής ή -1.
 */
function _findStockRow_(stockData, name) {
  const target = String(name || "").trim();

  for (let i = 0; i < stockData.length; i++) {
    if (String(stockData[i][0]).trim() === target) return i;
  }

  const alias = STOCK_ALIASES[target];
  if (alias) {
    for (let i = 0; i < stockData.length; i++) {
      if (String(stockData[i][0]).trim() === alias) return i;
    }
  }

  const norm = _normName_(target);
  for (let i = 0; i < stockData.length; i++) {
    if (_normName_(stockData[i][0]) === norm) return i;
  }

  return -1;
}

/** Ειδοποίηση όταν προϊόν παραγγελίας δεν βρέθηκε στο Stock. */
function _notifyUnmatched_(names, eponimia) {
  try {
    MailApp.sendEmail({
      to: TEST_EMAIL,
      subject: "⚠️ Zarkolia — προϊόν εκτός αποθήκης (αναντιστοιχία ονόματος)",
      htmlBody:
        '<div style="font-family:Arial,sans-serif;padding:16px;">' +
        '<h3 style="color:#dc2626;">Το απόθεμα ΔΕΝ μειώθηκε</h3>' +
        '<p>Παραγγελία: <strong>' + escapeHtml_(eponimia || "-") + '</strong></p>' +
        '<p>Τα παρακάτω ονόματα δεν βρέθηκαν στο φύλλο «Stock»:</p><ul>' +
        names.map(function (n) { return "<li>«" + escapeHtml_(n) + "»</li>"; }).join("") +
        '</ul><p>Διόρθωσε το όνομα στο Sheet ή πρόσθεσέ το στο STOCK_ALIASES.</p></div>'
    });
  } catch (err) {
    console.error("_notifyUnmatched_ failed: " + err);
  }
}

function escapeHtml_(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Μορφοποίηση ευρώ. */
function _eur_(v) {
  return Number(v || 0).toLocaleString("el-GR", {
    minimumFractionDigits: 2, maximumFractionDigits: 2
  }) + " €";
}


/* ═══════════════════════════════════════════════════════════════
 * ΤΡΙΜΗΝΟ / ΦΠΑ
 * ═══════════════════════════════════════════════════════════════ */

const MONTH_SHORT = ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μάι", "Ιουν",
                     "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"];

const QUARTER_LABEL = ["Α΄ Τρίμηνο (Ιαν–Μαρ)", "Β΄ Τρίμηνο (Απρ–Ιουν)",
                       "Γ΄ Τρίμηνο (Ιουλ–Σεπ)", "Δ΄ Τρίμηνο (Οκτ–Δεκ)"];

/**
 * Επιλέγει την πηγή οικονομικών (Orders ή ΟΙΚΟΝΟΜΙΚΑ) — όποια έχει
 * περισσότερες εγγραφές για το έτος — και επιστρέφει τους δείκτες στηλών.
 */
function _financialSource_(ss, year) {
  const candidates = [];

  const ord = ss.getSheetByName("Orders");
  if (ord && ord.getLastRow() > 0) {
    candidates.push({
      source: "Orders",
      values: ord.getDataRange().getValues(),
      dateIdx: ORD_DATE_COL, netIdx: ORD_NET_COL,
      vatIdx: ORD_VAT_COL, grossIdx: ORD_TOTAL_COL
    });
  }

  const fin = ss.getSheetByName(FIN_SHEET);
  if (fin && fin.getLastRow() > 1) {
    candidates.push({
      source: FIN_SHEET,
      values: fin.getDataRange().getValues(),
      dateIdx: FIN_DATE_COL - 1, netIdx: FIN_AMOUNT_COL - 1,
      vatIdx: FIN_VAT_COL - 1, grossIdx: FIN_TOTAL_COL - 1
    });
  }

  let best = null;
  candidates.forEach(function (c) {
    c.rows = _sumSales_(c.values, c.dateIdx, c.netIdx, year, 0).rows;
    if (!best || c.rows > best.rows) best = c;
  });

  return best || {
    source: "—", values: [], dateIdx: 0, netIdx: 1, vatIdx: 2, grossIdx: 3, rows: 0
  };
}

/** Τρίμηνο (0-3) από δείκτη μήνα (0-11). */
function _quarterOf_(monthIdx) {
  return Math.floor(monthIdx / 3);
}

/**
 * Συγκεντρωτικά στοιχεία τριμήνου.
 * Επιστρέφει { net, vat, gross, rows, byMonth[3], estimated }.
 */
function _quarterStats_(src, year, quarter) {
  const firstMonth = quarter * 3;

  const out = {
    net: 0, vat: 0, gross: 0, rows: 0, estimated: false,
    byMonth: [
      { idx: firstMonth,     net: 0, vat: 0 },
      { idx: firstMonth + 1, net: 0, vat: 0 },
      { idx: firstMonth + 2, net: 0, vat: 0 }
    ]
  };

  const start = _hasHeader_(src.values, src.dateIdx) ? 1 : 0;

  for (let i = start; i < src.values.length; i++) {
    const d = _asDate_(src.values[i][src.dateIdx]);
    if (!d || d.getFullYear() !== year) continue;

    const mi = d.getMonth() - firstMonth;
    if (mi < 0 || mi > 2) continue;

    const net = _num_(src.values[i][src.netIdx]);
    let   vat = _num_(src.values[i][src.vatIdx]);

    // Παλιές γραμμές χωρίς στήλη ΦΠΑ -> υπολογισμός από την καθαρή αξία.
    if (!vat && net) { vat = net * VAT_RATE; out.estimated = true; }

    out.net += net;
    out.vat += vat;
    out.rows++;
    out.byMonth[mi].net += net;
    out.byMonth[mi].vat += vat;
  }

  out.gross = out.net + out.vat;
  return out;
}

/** Προθεσμία περιοδικής δήλωσης: τέλος του επόμενου μήνα από τη λήξη του τριμήνου. */
function _quarterDeadline_(year, quarter) {
  return new Date(year, quarter * 3 + 4, 0);
}

/** Το προηγούμενο τρίμηνο (μπορεί να ανήκει στο προηγούμενο έτος). */
function _previousQuarter_(year, quarter) {
  return (quarter === 0)
    ? { year: year - 1, quarter: 3 }
    : { year: year, quarter: quarter - 1 };
}


/* ═══════════════════════════════════════════════════════════════
 * ΟΙΚΟΝΟΜΙΚΟΙ ΥΠΟΛΟΓΙΣΜΟΙ
 * ═══════════════════════════════════════════════════════════════ */

function calculateOrderFinancials_(p) {
  const cart = p.cart || [];

  const mixGroups = [
    {
      title: "Zplast Mix",
      products: [
        'ZplastCream 40gr',
        'ZplastCream 100gr',
        'Zplast Total Repair Cream 30ml',
        'Zplast Total Repair 50ml',
        'Zplast Total Repair 100ml'
      ],
      tiers: [{ minQty: 20, pct: 15 }, { minQty: 10, pct: 10 }]
    },
    {
      title: "Z-boost mix",
      products: ['Z-boost 30 caps', 'Z-boost 12 caps'],
      tiers: [{ minQty: 20, pct: 15 }, { minQty: 10, pct: 10 }]
    },
    {
      title: "Bruise Off mix",
      products: ['Bruise Off cream 50ml', 'Bruise Off cream 100ml'],
      tiers: [{ minQty: 20, pct: 15 }, { minQty: 10, pct: 10 }]
    },
    {
      title: "NUTRI MX mix",
      products: [
        'NUTRI MX PROBIOTIC Premium (18 ΠΡΟΒΙΟΤΙΚΑ - 10 Billion CFU) 30 caps',
        'NUTRI MX MAGNESIUM +B6 (200 mg +5mg) 30 tab',
        'NUTRI MX A-Z ΠΟΛΥΒΙΤΑΜΙΝΗ 30 TAB',
        'NUTRI MX OMEGA 3 30 Softgel Caps',
        'NUTRI MX JOINT (GLUCOSAMINE + CHONDROITINE + MSM +COLLAGEN) 30 TAB',
        'NUTRI MX D3 + K2 (4000 IU +100μg) 30 tab'
      ],
      tiers: [{ minQty: 24, pct: 15 }, { minQty: 15, pct: 10 }]
    }
  ];

  let netInitial = 0;
  const gifts = [];

  cart.forEach(function (item) {
    const qty   = _num_(item.qty);
    const price = _num_(item.price);
    netInitial += qty * price;

    const giftQty = getGiftQty_(qty, item.name);
    if (giftQty > 0) {
      gifts.push({ name: item.name, qty: qty, giftQty: giftQty });
    }
  });

  let mixDiscVal = 0;
  const mixDetails = [];

  mixGroups.forEach(function (group) {
    const groupItems = cart.filter(function (item) {
      return group.products.indexOf(item.name) !== -1;
    });

    if (!groupItems.length) return;

    const totalQty = groupItems.reduce(function (s, item) {
      return s + _num_(item.qty);
    }, 0);

    const subtotal = groupItems.reduce(function (s, item) {
      return s + (_num_(item.qty) * _num_(item.price));
    }, 0);

    let appliedTier = null;
    for (let i = 0; i < group.tiers.length; i++) {
      if (totalQty >= group.tiers[i].minQty) { appliedTier = group.tiers[i]; break; }
    }

    if (appliedTier) {
      const discValue = subtotal * (appliedTier.pct / 100);
      mixDiscVal += discValue;
      mixDetails.push({
        title: group.title, qty: totalQty, subtotal: subtotal,
        pct: appliedTier.pct, value: discValue
      });
    }
  });

  const afterMix    = netInitial - mixDiscVal;
  const volPerc     = afterMix >= 200 ? Math.min(10, Math.floor(afterMix / 100)) : 0;
  const volDiscVal  = afterMix * (volPerc / 100);
  const isCash      = p.payment === "Αντικαταβολή Μετρητά";
  const cashDiscVal = isCash ? (afterMix - volDiscVal) * 0.02 : 0;
  const netFinal    = afterMix - volDiscVal - cashDiscVal;
  const vatAmount   = netFinal * VAT_RATE;
  const finalTotal  = netFinal + vatAmount;

  const itemsSummary = cart.map(function (item) {
    const giftQty = getGiftQty_(item.qty, item.name);
    return item.name + " (" + item.qty + ")" + (giftQty > 0 ? " + ΔΩΡΟ " + giftQty : "");
  }).join(", ");

  const giftsSummary = gifts.length
    ? gifts.map(function (g) { return g.name + ": Δώρο " + g.giftQty + " τεμ"; }).join(" | ")
    : "Χωρίς δώρα";

  const mixDiscountSummary = mixDetails.length
    ? mixDetails.map(function (d) {
        return d.title + ": " + d.qty + " τεμ - " + d.pct + "% = " + d.value.toFixed(2) + " €";
      }).join(" | ")
    : "Χωρίς mix έκπτωση";

  return {
    netInitial: netInitial,
    mixDiscVal: mixDiscVal,
    mixDetails: mixDetails,
    volPerc: volPerc,
    volDiscVal: volDiscVal,
    cashDiscVal: cashDiscVal,
    netFinal: netFinal,
    vatAmount: vatAmount,
    finalTotal: finalTotal,
    gifts: gifts,
    itemsSummary: itemsSummary,
    giftsSummary: giftsSummary,
    mixDiscountSummary: mixDiscountSummary
  };
}


function getGiftQty_(qty, productName) {
  const nutriMX = [
    'NUTRI MX PROBIOTIC Premium (18 ΠΡΟΒΙΟΤΙΚΑ - 10 Billion CFU) 30 caps',
    'NUTRI MX MAGNESIUM +B6 (200 mg +5mg) 30 tab',
    'NUTRI MX A-Z ΠΟΛΥΒΙΤΑΜΙΝΗ 30 TAB',
    'NUTRI MX OMEGA 3 30 Softgel Caps',
    'NUTRI MX JOINT (GLUCOSAMINE + CHONDROITINE + MSM +COLLAGEN) 30 TAB',
    'NUTRI MX D3 + K2 (4000 IU +100μg) 30 tab'
  ];

  if (nutriMX.indexOf(productName) !== -1) return 0;

  const q = _num_(qty);
  if (q >= 24) return 6;
  if (q >= 18) return 3;
  if (q >= 9)  return 1;
  return 0;
}


/** Γράφει κάθε παραγγελία και στο φύλλο ΟΙΚΟΝΟΜΙΚΑ. */
function appendFinancialRow_(ss, cleanAfm, p, calc) {
  try {
    let sheet = ss.getSheetByName(FIN_SHEET);

    if (!sheet) {
      sheet = ss.insertSheet(FIN_SHEET);
      sheet.appendRow(["Ημερομηνία", "Καθαρή Αξία", "ΦΠΑ", "Σύνολο", "ΑΦΜ", "Επωνυμία"]);
      sheet.getRange(1, 1, 1, 6)
           .setFontWeight("bold").setBackground("#4a5d4e").setFontColor("#ffffff");
    }

    sheet.appendRow([
      new Date(),
      Number(calc.netFinal.toFixed(2)),
      Number(calc.vatAmount.toFixed(2)),
      Number(calc.finalTotal.toFixed(2)),
      cleanAfm,
      p.eponimia || ""
    ]);
  } catch (err) {
    // Ποτέ να μη χαθεί παραγγελία επειδή απέτυχε το λογιστικό φύλλο.
    console.error("appendFinancialRow_ failed: " + err);
  }
}


/* ═══════════════════════════════════════════════════════════════
 * EMAIL ΕΠΙΒΕΒΑΙΩΣΗΣ ΠΑΡΑΓΓΕΛΙΑΣ
 * ═══════════════════════════════════════════════════════════════ */

function sendSupremeEmail(p, calc) {
  const cleanAfm = _padAfm_(p.afm);

  let rows = "";
  (p.cart || []).forEach(function (item) {
    const qty   = _num_(item.qty);
    const price = _num_(item.price);
    const g     = getGiftQty_(qty, item.name);

    rows +=
      '<tr>' +
      '<td style="padding:10px;border-bottom:1px solid #eee;">' + escapeHtml_(item.name) + '</td>' +
      '<td style="text-align:center;padding:10px;border-bottom:1px solid #eee;">' + qty + '</td>' +
      '<td style="text-align:center;padding:10px;border-bottom:1px solid #eee;color:#dc2626;font-weight:800;">' +
        (g > 0 ? "+" + g : "-") + '</td>' +
      '<td style="text-align:right;padding:10px;border-bottom:1px solid #eee;">' +
        (qty * price).toFixed(2) + ' €</td>' +
      '</tr>';
  });

  let giftRows = "";
  if (calc.gifts.length) {
    calc.gifts.forEach(function (g) {
      giftRows +=
        '<tr>' +
        '<td style="padding:8px 10px;border-bottom:1px solid #fee2e2;color:#dc2626;font-weight:800;">' +
          escapeHtml_(g.name) + '</td>' +
        '<td style="padding:8px 10px;border-bottom:1px solid #fee2e2;color:#dc2626;font-weight:800;text-align:right;">' +
          'Δώρο ' + g.giftQty + ' τεμ</td>' +
        '</tr>';
    });
  } else {
    giftRows = '<tr><td colspan="2" style="padding:8px 10px;color:#6b7280;">Δεν υπάρχουν δώρα.</td></tr>';
  }

  let mixRows = "";
  if (calc.mixDetails.length) {
    calc.mixDetails.forEach(function (d) {
      mixRows +=
        '<tr>' +
        '<td style="padding:8px 10px;border-bottom:1px solid #dcfce7;">' + escapeHtml_(d.title) + '</td>' +
        '<td style="padding:8px 10px;border-bottom:1px solid #dcfce7;text-align:center;">' + d.qty + '</td>' +
        '<td style="padding:8px 10px;border-bottom:1px solid #dcfce7;text-align:center;">' + d.pct + '%</td>' +
        '<td style="padding:8px 10px;border-bottom:1px solid #dcfce7;text-align:right;color:#059669;font-weight:700;">' +
          '- ' + d.value.toFixed(2) + ' €</td>' +
        '</tr>';
    });
  } else {
    mixRows = '<tr><td colspan="4" style="padding:8px 10px;color:#6b7280;">Δεν υπάρχουν mix εκπτώσεις.</td></tr>';
  }

  const html =
  '<div style="font-family:Arial,sans-serif;max-width:760px;margin:auto;border:1px solid #e2e8f0;border-radius:15px;overflow:hidden;">' +
    '<div style="background:#4a5d4e;color:white;padding:30px;text-align:center;">' +
      '<h1 style="margin:0;">ZARKOLIA HEALTH</h1>' +
      '<div style="opacity:0.9;margin-top:8px;">Επιβεβαίωση Παραγγελίας</div>' +
    '</div>' +

    '<div style="padding:20px;">' +
      '<div style="background:#f8fafc;padding:15px;border-radius:10px;border-left:5px solid #4a5d4e;margin-bottom:20px;">' +
        '<strong>Πελάτης:</strong> ' + escapeHtml_(p.eponimia || "") + '<br>' +
        '<strong>ΑΦΜ:</strong> ' + escapeHtml_(cleanAfm) + '<br>' +
        '<strong>Email:</strong> ' + escapeHtml_(p.email || "") + '<br>' +
        '<strong>Κινητό:</strong> ' + escapeHtml_(p.kinito || "") + '<br>' +
        '<strong>Σταθερό:</strong> ' + escapeHtml_(p.stathero || "") + '<br>' +
        '<strong>ΔΟΥ:</strong> ' + escapeHtml_(p.doy || "") + '<br>' +
        '<strong>Πληρωμή:</strong> ' + escapeHtml_(p.payment || "") +
      '</div>' +

      '<h3 style="margin:0 0 12px 0;color:#111827;">Παραγγελία</h3>' +
      '<table style="width:100%;border-collapse:collapse;margin-bottom:20px;">' +
        '<thead><tr style="background:#f1f5f9;">' +
          '<th style="padding:10px;text-align:left;">Προϊόν</th>' +
          '<th style="padding:10px;text-align:center;">Τεμ.</th>' +
          '<th style="padding:10px;text-align:center;">Δώρα</th>' +
          '<th style="padding:10px;text-align:right;">Αξία</th>' +
        '</tr></thead><tbody>' + rows + '</tbody>' +
      '</table>' +

      '<h3 style="margin:20px 0 10px 0;color:#dc2626;">Δώρα</h3>' +
      '<table style="width:100%;border-collapse:collapse;background:#fef2f2;border-radius:10px;overflow:hidden;margin-bottom:20px;">' +
        giftRows +
      '</table>' +

      '<h3 style="margin:20px 0 10px 0;color:#111827;">Mix Εκπτώσεις</h3>' +
      '<table style="width:100%;border-collapse:collapse;background:#f0fdf4;border-radius:10px;overflow:hidden;margin-bottom:20px;">' +
        '<thead><tr style="background:#dcfce7;">' +
          '<th style="padding:10px;text-align:left;">Κατηγορία</th>' +
          '<th style="padding:10px;text-align:center;">Τεμ.</th>' +
          '<th style="padding:10px;text-align:center;">%</th>' +
          '<th style="padding:10px;text-align:right;">Έκπτωση</th>' +
        '</tr></thead><tbody>' + mixRows + '</tbody>' +
      '</table>' +

      '<div style="background:#f0fff4;padding:20px;border-radius:10px;margin-top:20px;">' +
        '<h3 style="margin-top:0;">Ανάλυση</h3>' +
        '<table style="width:100%;border-collapse:collapse;">' +
          '<tr><td style="padding:6px 0;">Αρχική Αξία:</td>' +
            '<td style="padding:6px 0;text-align:right;">' + calc.netInitial.toFixed(2) + ' €</td></tr>' +
          '<tr><td style="padding:6px 0;">Mix Εκπτώσεις:</td>' +
            '<td style="padding:6px 0;text-align:right;color:#059669;">- ' + calc.mixDiscVal.toFixed(2) + ' €</td></tr>' +
          '<tr><td style="padding:6px 0;">Έκπτωση Τζίρου (' + calc.volPerc + '%):</td>' +
            '<td style="padding:6px 0;text-align:right;color:#059669;">- ' + calc.volDiscVal.toFixed(2) + ' €</td></tr>' +
          '<tr><td style="padding:6px 0;">Έκπτωση Μετρητών:</td>' +
            '<td style="padding:6px 0;text-align:right;color:#059669;">- ' + calc.cashDiscVal.toFixed(2) + ' €</td></tr>' +
          '<tr><td style="padding:6px 0;">Καθαρή Αξία:</td>' +
            '<td style="padding:6px 0;text-align:right;">' + calc.netFinal.toFixed(2) + ' €</td></tr>' +
          '<tr><td style="padding:6px 0;">ΦΠΑ (24%):</td>' +
            '<td style="padding:6px 0;text-align:right;">' + calc.vatAmount.toFixed(2) + ' €</td></tr>' +
          '<tr style="font-size:22px;font-weight:900;color:#4a5d4e;border-top:2px solid #bbf7d0;">' +
            '<td style="padding-top:12px;">ΤΕΛΙΚΟ:</td>' +
            '<td style="padding-top:12px;text-align:right;">' + calc.finalTotal.toFixed(2) + ' €</td></tr>' +
        '</table>' +
      '</div>' +

      '<div style="margin-top:20px;background:#fafafa;padding:15px;border-radius:10px;">' +
        '<strong>Σημειώσεις:</strong><br>' + escapeHtml_(p.remarks || "-") +
      '</div>' +
    '</div>' +
  '</div>';

  MailApp.sendEmail({
    to: p.email,
    cc: ORDER_CC,
    subject: "ΠΑΡΑΓΓΕΛΙΑ ZARKOLIA HEALTH - " + (p.eponimia || "") + " (ΑΦΜ: " + cleanAfm + ")",
    htmlBody: html
  });
}


/* ═══════════════════════════════════════════════════════════════
 * ΗΜΕΡΗΣΙΑ ΑΝΑΦΟΡΑ
 * ═══════════════════════════════════════════════════════════════ */

function sendDailyReport() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tz = ss.getSpreadsheetTimeZone() || "Europe/Athens";
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  // ---------- ΑΠΟΘΗΚΗ ----------
  const stockRows = _readStock_(ss);

  // ---------- ΟΙΚΟΝΟΜΙΚΑ ----------
  const src        = _financialSource_(ss, year);
  const source     = src.source;
  const amtIdx     = (FIN_BASIS === "gross") ? src.grossIdx : src.netIdx;
  const basisLabel = (FIN_BASIS === "gross") ? "με ΦΠΑ" : "καθαρή αξία";

  const result = _sumSales_(src.values, src.dateIdx, amtIdx, year, month);

  // ---------- ΦΠΑ ΤΡΙΜΗΝΟΥ ----------
  const quarter  = _quarterOf_(month);
  const qStats   = _quarterStats_(src, year, quarter);
  const deadline = _quarterDeadline_(year, quarter);
  const daysLeft = Math.ceil((deadline - new Date(year, month, now.getDate())) / 86400000);

  const prev      = _previousQuarter_(year, quarter);
  const prevStats = _quarterStats_(src, prev.year, prev.quarter);

  const dayOfYear     = _dayOfYear_(now);
  const monthsElapsed = month + 1;
  const avgPerDay     = result.yearSales / dayOfYear;
  const avgPerMonth   = result.yearSales / monthsElapsed;

  // ---------- HTML ----------
  let stockHtml = stockRows.map(function (r) {
    const low = r.qty <= STOCK_LOW_LIMIT;
    return '<tr>' +
      '<td style="padding:6px 10px;border-bottom:1px solid #eee;">' + escapeHtml_(r.name) + '</td>' +
      '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;font-weight:700;color:' +
        (low ? '#dc2626' : '#2d3748') + ';">' + r.qty + (low ? ' ⚠️' : '') + '</td>' +
      '</tr>';
  }).join("");

  if (!stockHtml) {
    stockHtml = '<tr><td colspan="2" style="padding:10px;">— Κενό φύλλο «Stock» —</td></tr>';
  }

  const warn = (result.rows === 0)
    ? '<p style="background:#fef2f2;color:#dc2626;padding:10px;border-radius:8px;font-weight:700;">' +
      '⚠️ Καμία καταχώρηση με έγκυρη ημερομηνία για το ' + year + '. ' +
      'Τρέξε τη debugFinancials() για διάγνωση.</p>'
    : '';

  // ---------- HTML: ΦΠΑ ΤΡΙΜΗΝΟΥ ----------
  const qMonthRows = qStats.byMonth.map(function (m) {
    const future = m.idx > month;
    return '<tr' + (future ? ' style="opacity:0.45;"' : '') + '>' +
      '<td style="padding:6px 12px;border-bottom:1px solid #e0e7ff;">' + MONTH_SHORT[m.idx] +
        (m.idx === month ? ' <span style="font-size:11px;color:#6366f1;">(τρέχων)</span>' : '') + '</td>' +
      '<td style="padding:6px 12px;border-bottom:1px solid #e0e7ff;text-align:right;">' + _eur_(m.net) + '</td>' +
      '<td style="padding:6px 12px;border-bottom:1px solid #e0e7ff;text-align:right;font-weight:700;">' + _eur_(m.vat) + '</td>' +
      '</tr>';
  }).join("");

  const prevBlock = prevStats.rows > 0
    ? '<div style="margin-top:12px;padding:10px 12px;background:#f1f5f9;border-radius:8px;font-size:13px;color:#475569;">' +
      'Προηγούμενο: <strong>' + QUARTER_LABEL[prev.quarter] + ' ' + prev.year + '</strong> · ' +
      'καθαρή ' + _eur_(prevStats.net) + ' · ΦΠΑ <strong>' + _eur_(prevStats.vat) + '</strong>' +
      '</div>'
    : '';

  const estNote = qStats.estimated
    ? '<div style="margin-top:10px;font-size:12px;color:#b45309;">' +
      '⚠️ Ορισμένες γραμμές δεν είχαν καταχωρημένο ΦΠΑ — υπολογίστηκε ως ' +
      (VAT_RATE * 100) + '% επί της καθαρής αξίας.</div>'
    : '';

  const vatHtml =
    '<h3 style="color:#4a5d4e;margin-top:28px;">🧾 ΦΠΑ Τριμήνου ' +
      '<span style="font-size:12px;color:#a0aec0;font-weight:400;">' +
      QUARTER_LABEL[quarter] + ' ' + year + '</span></h3>' +

    '<table style="width:100%;border-collapse:collapse;background:#eef2ff;border-radius:10px;overflow:hidden;">' +
      '<tr style="background:#c7d2fe;">' +
        '<th style="padding:8px 12px;text-align:left;">Μήνας</th>' +
        '<th style="padding:8px 12px;text-align:right;">Καθαρή Αξία</th>' +
        '<th style="padding:8px 12px;text-align:right;">ΦΠΑ Εκροών</th>' +
      '</tr>' + qMonthRows +
      '<tr style="background:#c7d2fe;font-weight:900;">' +
        '<td style="padding:10px 12px;">ΣΥΝΟΛΟ ΤΡΙΜΗΝΟΥ</td>' +
        '<td style="padding:10px 12px;text-align:right;">' + _eur_(qStats.net) + '</td>' +
        '<td style="padding:10px 12px;text-align:right;font-size:16px;color:#3730a3;">' + _eur_(qStats.vat) + '</td>' +
      '</tr>' +
    '</table>' +

    '<div style="margin-top:12px;padding:12px;background:' +
      (daysLeft <= 15 ? '#fef3c7' : '#f8fafc') + ';border-radius:8px;font-size:13px;">' +
      '📅 Προθεσμία περιοδικής δήλωσης: <strong>' +
      Utilities.formatDate(deadline, tz, "dd/MM/yyyy") + '</strong>' +
      (daysLeft > 0 ? ' — απομένουν ' + daysLeft + ' ημέρες' : ' — έχει παρέλθει') +
    '</div>' +

    prevBlock + estNote +

    '<div style="margin-top:10px;font-size:12px;color:#94a3b8;line-height:1.5;">' +
      'Το ποσό αφορά <strong>ΦΠΑ εκροών</strong> (πωλήσεις) μόνο. ' +
      'Το αποδοτέο ΦΠΑ προκύπτει μετά την αφαίρεση του ΦΠΑ εισροών, ' +
      'που δεν καταγράφεται σε αυτό το σύστημα.' +
    '</div>';

  const html =
  '<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#2d3748;">' +
    '<h2 style="color:#4a5d4e;border-bottom:3px solid #10b981;padding-bottom:8px;">' +
      'Zarkolia Health — Ημερήσια Αναφορά</h2>' +
    '<p style="color:#718096;">' + Utilities.formatDate(now, tz, "EEEE, dd/MM/yyyy") + '</p>' +
    warn +

    '<h3 style="color:#4a5d4e;margin-top:28px;">📊 Οικονομικά (' + year + ') ' +
      '<span style="font-size:12px;color:#a0aec0;font-weight:400;">πηγή: ' + source +
      ' · ' + basisLabel + ' · ' + result.rows + ' εγγραφές</span></h3>' +
    '<table style="width:100%;border-collapse:collapse;background:#f8faf8;border-radius:10px;">' +
      '<tr><td style="padding:8px 12px;">Πωλήσεις Έτους</td>' +
        '<td style="padding:8px 12px;text-align:right;font-weight:800;">' + _eur_(result.yearSales) + '</td></tr>' +
      '<tr><td style="padding:8px 12px;">Πωλήσεις Μήνα</td>' +
        '<td style="padding:8px 12px;text-align:right;font-weight:800;">' + _eur_(result.monthSales) + '</td></tr>' +
      '<tr><td style="padding:8px 12px;">Μέσος Όρος / Ημέρα</td>' +
        '<td style="padding:8px 12px;text-align:right;">' + _eur_(avgPerDay) + '</td></tr>' +
      '<tr><td style="padding:8px 12px;">Μέσος Όρος / Μήνα</td>' +
        '<td style="padding:8px 12px;text-align:right;">' + _eur_(avgPerMonth) + '</td></tr>' +
    '</table>' +

    vatHtml +

    '<h3 style="color:#4a5d4e;margin-top:28px;">📦 Υπόλοιπα Αποθήκης</h3>' +
    '<table style="width:100%;border-collapse:collapse;">' +
      '<tr style="background:#4a5d4e;color:#fff;">' +
        '<th style="padding:8px 10px;text-align:left;">Προϊόν</th>' +
        '<th style="padding:8px 10px;text-align:right;">Υπόλοιπο</th>' +
      '</tr>' + stockHtml +
    '</table>' +

    '<p style="color:#a0aec0;font-size:12px;margin-top:30px;">' +
      'Αυτόματη αναφορά Zarkolia Health · ⚠️ = υπόλοιπο ≤ ' + STOCK_LOW_LIMIT + '</p>' +
  '</div>';

  MailApp.sendEmail({
    to: REPORT_RECIPIENTS,
    subject: "Zarkolia Health — Ημερήσια Αναφορά " + Utilities.formatDate(now, tz, "dd/MM/yyyy"),
    htmlBody: html
  });
}


/** Τρέξε ΜΙΑ φορά για να στηθεί ο καθημερινός trigger. */
function createDailyTrigger() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === "sendDailyReport") ScriptApp.deleteTrigger(t);
  });

  ScriptApp.newTrigger("sendDailyReport").timeBased().atHour(REPORT_HOUR).everyDays(1).create();
  console.log("✅ Trigger έτοιμο: sendDailyReport, καθημερινά ~" + REPORT_HOUR + ":00");
}


/* ═══════════════════════════════════════════════════════════════
 * ΑΠΟΓΡΑΦΗ ΑΝΑ ΠΕΛΑΤΗ
 * ═══════════════════════════════════════════════════════════════ */

function getCustomerInventory(afm) {
  const target = _padAfm_(afm);
  if (!target) return { success: false, error: "Λείπει το ΑΦΜ" };

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Orders");
  if (!sheet) return { success: false, error: "Δεν βρέθηκε φύλλο Orders" };

  const data = sheet.getDataRange().getValues();
  const year = new Date().getFullYear();
  const monthsElapsed = new Date().getMonth() + 1;
  const totals = {};

  for (let i = 1; i < data.length; i++) {
    if (_padAfm_(data[i][ORD_AFM_COL]) !== target) continue;

    const d = _asDate_(data[i][ORD_DATE_COL]);
    if (d && d.getFullYear() !== year) continue;

    _parseItems(String(data[i][ORD_ITEMS_COL] || "")).forEach(function (it) {
      totals[it.name] = (totals[it.name] || 0) + it.qty;
    });
  }

  const products = Object.keys(totals).map(function (name) {
    return {
      name: name,
      yearQty: totals[name],
      monthlyAvg: Number((totals[name] / monthsElapsed).toFixed(2))
    };
  }).sort(function (a, b) { return b.yearQty - a.yearQty; });

  return {
    success: true, afm: target, year: year,
    products: products, lastInventory: _loadInventory(target)
  };
}


function saveInventory(payload) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(INVENTORY_SHEET);

  const baseHeaders = ["Ημερομηνία", "ΑΦΜ", "Επωνυμία"];

  if (!sheet) {
    sheet = ss.insertSheet(INVENTORY_SHEET);
    sheet.appendRow(baseHeaders);
    sheet.getRange(1, 1, 1, 3)
         .setFontWeight("bold").setBackground("#4a5d4e").setFontColor("#ffffff");
  }

  const afm = _padAfm_(payload.afm);
  const eponimia = payload.eponimia || "";
  const now = new Date();

  const lastCol = sheet.getLastColumn() || 3;
  let headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  if (!headers[0]) headers = baseHeaders.slice();

  const items = (payload && payload.items) || [];
  let headersChanged = false;

  items.forEach(function (it) {
    if (it.current !== "" && it.current !== null && it.current !== undefined) {
      if (headers.indexOf(it.name) === -1) { headers.push(it.name); headersChanged = true; }
    }
  });

  if (headersChanged) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length)
         .setFontWeight("bold").setBackground("#4a5d4e").setFontColor("#ffffff");
  }

  const newRow = new Array(headers.length).fill("");
  newRow[0] = now;
  newRow[1] = afm;
  newRow[2] = eponimia;

  let itemsSaved = 0;
  items.forEach(function (it) {
    if (it.current !== "" && it.current !== null && it.current !== undefined) {
      const colIndex = headers.indexOf(it.name);
      if (colIndex !== -1) { newRow[colIndex] = _num_(it.current); itemsSaved++; }
    }
  });

  if (itemsSaved > 0) {
    sheet.appendRow(newRow);
    return { success: true, saved: itemsSaved };
  }

  return { success: false, error: "Δεν δόθηκαν έγκυρες ποσότητες" };
}


function _loadInventory(afm) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(INVENTORY_SHEET);
  if (!sheet) return {};

  const lastRow = sheet.getLastRow();
  const lastCol = sheet.getLastColumn();
  if (lastRow < 2 || lastCol < 4) return {};

  const data = sheet.getRange(1, 1, lastRow, lastCol).getValues();
  const headers = data[0];
  const cleanAfm = _padAfm_(afm);

  let latestRow = null;
  for (let i = data.length - 1; i >= 1; i--) {
    if (_padAfm_(data[i][1]) === cleanAfm) { latestRow = data[i]; break; }
  }

  const out = {};
  if (latestRow) {
    for (let c = 3; c < headers.length; c++) {
      const val = latestRow[c];
      if (val !== "" && val !== null && val !== undefined) out[headers[c]] = val;
    }
  }

  return out;
}


function _parseItems(str) {
  if (!str) return [];

  return str.split(",").map(function (t) { return t.trim(); })
    .filter(Boolean)
    .map(function (t) {
      const m = t.match(/^(.*?)\s*\((\d+)\)/);
      return m ? { name: m[1].trim(), qty: parseInt(m[2], 10) || 0 } : null;
    })
    .filter(Boolean);
}


/* ═══════════════════════════════════════════════════════════════
 * ΕΙΔΗΣΕΙΣ (live ticker)
 * ═══════════════════════════════════════════════════════════════ */

/**
 * Επιστρέφει τις τελευταίες ειδήσεις από όλες τις πηγές.
 * Χρησιμοποιεί προσωρινή αποθήκευση, ώστε να μη χτυπά τα feeds
 * σε κάθε άνοιγμα της φόρμας.
 */
function getNews_(force) {
  const cache = CacheService.getScriptCache();
  const KEY = "zarkolia_news_v1";

  if (!force) {
    const hit = cache.get(KEY);
    if (hit) {
      try {
        const obj = JSON.parse(hit);
        obj.cached = true;
        return obj;
      } catch (e) { /* χαλασμένο cache -> ξαναδιάβασε */ }
    }
  }

  const items = _fetchAllFeeds_();
  const out = {
    success: true,
    cached: false,
    updated: new Date().toISOString(),
    count: items.length,
    items: items
  };

  try {
    cache.put(KEY, JSON.stringify(out), NEWS_CACHE_MIN * 60);
  } catch (e) {
    console.warn("Δεν αποθηκεύτηκε στο cache: " + e);
  }

  return out;
}


/** Κατεβάζει όλα τα feeds παράλληλα και τα συγχωνεύει. */
function _fetchAllFeeds_() {
  const requests = NEWS_FEEDS.map(function (f) {
    return {
      url: f.url,
      muteHttpExceptions: true,
      followRedirects: true,
      validateHttpsCertificates: true,
      headers: { "User-Agent": "Mozilla/5.0 (compatible; ZarkoliaOrderForm/1.0)" }
    };
  });

  let responses = [];
  try {
    responses = UrlFetchApp.fetchAll(requests);
  } catch (e) {
    console.error("fetchAll απέτυχε: " + e);
    return [];
  }

  const perFeed = [];
  const cutoff = new Date().getTime() - (NEWS_MAX_AGE_DAYS * 86400000);

  responses.forEach(function (res, i) {
    const feed = NEWS_FEEDS[i];
    try {
      if (!res || res.getResponseCode() !== 200) {
        console.warn("Πηγή «" + feed.label + "»: HTTP " +
                     (res ? res.getResponseCode() : "—"));
        perFeed.push([]);
        return;
      }

      const parsed = _parseFeed_(res.getContentText(), feed.label)
        .filter(function (it) { return !it.ts || it.ts >= cutoff; })
        .slice(0, NEWS_PER_FEED);

      perFeed.push(parsed);
    } catch (e) {
      console.warn("Πηγή «" + feed.label + "» απέτυχε: " + e);
      perFeed.push([]);
    }
  });

  // Εναλλάξ από κάθε πηγή, ώστε να μην κυριαρχεί μία.
  const merged = [];
  for (let r = 0; r < NEWS_PER_FEED; r++) {
    for (let f = 0; f < perFeed.length; f++) {
      if (perFeed[f][r]) merged.push(perFeed[f][r]);
      if (merged.length >= NEWS_MAX_ITEMS) return merged;
    }
  }

  return merged;
}


/** Διαβάζει RSS 2.0 ή Atom και επιστρέφει [{label, title, link, ts}]. */
function _parseFeed_(xml, label) {
  const doc = XmlService.parse(xml);
  const root = doc.getRootElement();
  const out = [];

  // ---------- RSS 2.0 ----------
  const channel = root.getChild("channel");
  if (channel) {
    channel.getChildren("item").forEach(function (it) {
      const title = _clean_(it.getChildText("title"));
      if (!title) return;
      out.push({
        label: label,
        title: title,
        link: _clean_(it.getChildText("link")),
        ts: _feedDate_(it.getChildText("pubDate") || it.getChildText("date"))
      });
    });
    return out;
  }

  // ---------- Atom ----------
  const atom = XmlService.getNamespace("http://www.w3.org/2005/Atom");
  let entries = root.getChildren("entry", atom);
  if (!entries.length) entries = root.getChildren("entry");

  entries.forEach(function (en) {
    const title = _clean_(en.getChildText("title", atom) || en.getChildText("title"));
    if (!title) return;

    let link = "";
    const linkEl = en.getChild("link", atom) || en.getChild("link");
    if (linkEl) link = linkEl.getAttribute("href")
      ? linkEl.getAttribute("href").getValue()
      : _clean_(linkEl.getText());

    out.push({
      label: label,
      title: title,
      link: link,
      ts: _feedDate_(en.getChildText("updated", atom) || en.getChildText("published", atom))
    });
  });

  return out;
}


/** Καθαρίζει HTML, CDATA και περιττά κενά από τίτλο feed. */
function _clean_(s) {
  return String(s || "")
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}


/** Ημερομηνία feed -> milliseconds, ή 0 αν δεν διαβάζεται. */
function _feedDate_(s) {
  if (!s) return 0;
  const d = new Date(String(s).trim());
  return isNaN(d.getTime()) ? 0 : d.getTime();
}


/**
 * ΔΙΑΓΝΩΣΤΙΚΟ — ποιες πηγές απαντούν και τι επιστρέφουν.
 * Τρέξε το χειροκίνητα και δες το Αρχείο καταγραφής εκτέλεσης.
 */
function testNewsFeeds() {
  console.log("═══════ ΕΛΕΓΧΟΣ ΠΗΓΩΝ ΕΙΔΗΣΕΩΝ ═══════\n");

  NEWS_FEEDS.forEach(function (f) {
    try {
      const res = UrlFetchApp.fetch(f.url, {
        muteHttpExceptions: true,
        followRedirects: true,
        headers: { "User-Agent": "Mozilla/5.0 (compatible; ZarkoliaOrderForm/1.0)" }
      });

      const code = res.getResponseCode();
      if (code !== 200) {
        console.log("❌ " + f.label + " — HTTP " + code);
        console.log("   " + f.url + "\n");
        return;
      }

      const items = _parseFeed_(res.getContentText(), f.label);
      if (!items.length) {
        console.log("⚠️ " + f.label + " — απαντά, αλλά δεν βρέθηκαν ειδήσεις");
        console.log("   (ίσως δεν είναι RSS/Atom)\n");
        return;
      }

      console.log("✅ " + f.label + " — " + items.length + " ειδήσεις");
      console.log("   τελευταία: " + items[0].title.slice(0, 80));
      console.log("   ημ/νία: " + (items[0].ts ? new Date(items[0].ts) : "—") + "\n");
    } catch (e) {
      console.log("❌ " + f.label + " — σφάλμα: " + e);
      console.log("   " + f.url + "\n");
    }
  });

  const all = _fetchAllFeeds_();
  console.log("───────────────────────────────");
  console.log("ΣΥΝΟΛΟ στο ticker: " + all.length + " ειδήσεις");
  console.log("\nΓια να δεις το τελικό JSON: refreshNews()");
}


/** Αδειάζει το cache και ξαναδιαβάζει τώρα. */
function refreshNews() {
  CacheService.getScriptCache().remove("zarkolia_news_v1");
  const n = getNews_(true);
  console.log("Ανανεώθηκε: " + n.count + " ειδήσεις");
  n.items.forEach(function (it, i) {
    console.log((i + 1) + ". [" + it.label + "] " + it.title.slice(0, 70));
  });
}


/* ═══════════════════════════════════════════════════════════════
 * ΔΙΑΓΝΩΣΤΙΚΑ & ΔΟΚΙΜΕΣ
 * ═══════════════════════════════════════════════════════════════ */

/** ΤΡΕΞΕ ΑΥΤΟ ΠΡΩΤΟ — συνολικός έλεγχος εγκατάστασης. */
function setupCheck() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  console.log("═══════ ΕΛΕΓΧΟΣ ΕΓΚΑΤΑΣΤΑΣΗΣ ═══════");
  console.log("Λογαριασμός: " + Session.getActiveUser().getEmail());
  console.log("Υπόλοιπο email σήμερα: " + MailApp.getRemainingDailyQuota());

  ["Orders", "Customers", "Stock", FIN_SHEET, INVENTORY_SHEET].forEach(function (n) {
    const sh = ss.getSheetByName(n);
    console.log((sh ? "✅" : "❌") + " Φύλλο «" + n + "»" +
                (sh ? " — " + sh.getLastRow() + " γραμμές" : " — ΛΕΙΠΕΙ"));
  });

  const triggers = ScriptApp.getProjectTriggers();
  console.log(triggers.length ? "✅ Triggers: " + triggers.length : "❌ Κανένα trigger — τρέξε createDailyTrigger()");

  console.log("\nΕπόμενα βήματα: checkProductNames() -> debugFinancials() -> testSimpleEmail()");
}


/** Εντοπίζει αναντιστοιχίες ονομάτων καταλόγου <-> Stock <-> Orders. */
function checkProductNames() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const stockNames = _readStock_(ss).map(function (r) { return r.name; });

  console.log("═══════ ΕΛΕΓΧΟΣ ΟΝΟΜΑΤΩΝ ═══════");
  console.log("Κατάλογος: " + CANONICAL_PRODUCTS.length + " | Stock: " + stockNames.length);

  const missing = CANONICAL_PRODUCTS.filter(function (n) {
    if (stockNames.indexOf(n) !== -1) return false;
    const alias = STOCK_ALIASES[n];
    return !(alias && stockNames.indexOf(alias) !== -1);
  });

  if (missing.length) {
    console.log("\n❌ ΕΚΤΟΣ STOCK (το απόθεμα ΔΕΝ θα μειώνεται):");
    missing.forEach(function (n) {
      const near = _closestMatch_(n, stockNames);
      console.log("   • «" + n + "»" + (near ? "\n     ↳ μοιάζει με: «" + near + "»" : ""));
    });
    console.log("\n   Λύση: διόρθωσε το Sheet ή πρόσθεσε στο STOCK_ALIASES.");
  } else {
    console.log("\n✅ Όλα τα προϊόντα αντιστοιχίζονται σωστά.");
  }

  const orphans = stockNames.filter(function (n) {
    if (CANONICAL_PRODUCTS.indexOf(n) !== -1) return false;
    for (const k in STOCK_ALIASES) { if (STOCK_ALIASES[k] === n) return false; }
    return true;
  });

  if (orphans.length) {
    console.log("\n⚠️ ΓΡΑΜΜΕΣ STOCK ΧΩΡΙΣ ΠΡΟΪΟΝ:");
    orphans.forEach(function (n) { console.log("   • «" + n + "»"); });
  }

  console.log("\n═══════ ΤΕΛΟΣ ═══════");
}


/** Πλησιέστερο όνομα βάσει κοινών λέξεων. */
function _closestMatch_(target, candidates) {
  const tw = _normName_(target).split(" ");
  let best = null, bestScore = 0;

  candidates.forEach(function (c) {
    const cw = _normName_(c).split(" ");
    const common = tw.filter(function (w) { return cw.indexOf(w) !== -1; }).length;
    const score = common / Math.max(tw.length, cw.length);
    if (score > bestScore) { bestScore = score; best = c; }
  });

  return bestScore >= 0.5 ? best : null;
}


/** Δείχνει τι ακριβώς διαβάζει η αναφορά από κάθε φύλλο. */
function debugFinancials() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const now = new Date();
  const year = now.getFullYear(), month = now.getMonth();

  console.log("═══════ ΔΙΑΓΝΩΣΗ ΟΙΚΟΝΟΜΙΚΩΝ ═══════");
  console.log("Βάση: " + FIN_BASIS + " | Ημέρα έτους: " + _dayOfYear_(now));

  ["Orders", FIN_SHEET].forEach(function (name) {
    const sh = ss.getSheetByName(name);
    if (!sh) { console.log("\n❌ Δεν υπάρχει φύλλο: " + name); return; }

    const values  = sh.getDataRange().getValues();
    const dateIdx = (name === "Orders") ? ORD_DATE_COL : FIN_DATE_COL - 1;
    const amtIdx  = (name === "Orders")
      ? ((FIN_BASIS === "gross") ? ORD_TOTAL_COL : ORD_NET_COL)
      : FIN_AMOUNT_COL - 1;

    console.log("\n──────── " + name + " ────────");
    console.log("Γραμμές: " + values.length + " | Επικεφαλίδα: " + _hasHeader_(values, dateIdx));

    const sample = values[values.length - 1] || [];
    console.log("Τελευταία -> ημ/νία: " + sample[dateIdx] + " (parsed: " + _asDate_(sample[dateIdx]) + ")");
    console.log("           ποσό: " + sample[amtIdx] + " (parsed: " + _num_(sample[amtIdx]) + ")");

    const r = _sumSales_(values, dateIdx, amtIdx, year, month);
    console.log("Έτος " + year + ": " + r.yearSales.toFixed(2) + " € | Μήνας: " +
                r.monthSales.toFixed(2) + " € | Εγγραφές: " + r.rows);
  });
}


/** Απλή δοκιμή αποστολής. */
function testSimpleEmail() {
  MailApp.sendEmail({
    to: TEST_EMAIL,
    subject: "[TEST] Zarkolia — έλεγχος αποστολής",
    htmlBody: '<div style="font-family:Arial,sans-serif;padding:20px;">' +
              '<h2 style="color:#4a5d4e;">✅ Το backend στέλνει κανονικά</h2>' +
              '<p>' + new Date() + '</p></div>'
  });
  console.log("Στάλθηκε στο " + TEST_EMAIL);
}


/** Ημερήσια αναφορά ΜΟΝΟ στο TEST_EMAIL. */
function testDailyReportToMe() {
  const original = REPORT_RECIPIENTS;
  try {
    REPORT_RECIPIENTS = TEST_EMAIL;
    sendDailyReport();
    console.log("Δοκιμαστική αναφορά -> " + TEST_EMAIL);
  } finally {
    REPORT_RECIPIENTS = original;
  }
}


/** Email παραγγελίας ΧΩΡΙΣ εγγραφή σε φύλλα και ΧΩΡΙΣ μείωση stock. */
function testOrderEmail() {
  const fakeOrder = {
    afm: "123456789",
    eponimia: "ΔΟΚΙΜΑΣΤΙΚΟΣ ΠΕΛΑΤΗΣ",
    email: TEST_EMAIL,
    kinito: "6900000000",
    stathero: "2382000000",
    doy: "ΓΙΑΝΝΙΤΣΩΝ",
    payment: "Αντικαταβολή Μετρητά",
    remarks: "ΔΟΚΙΜΗ — να αγνοηθεί",
    cart: [
      { name: 'ZplastCream 40gr',                 qty: 12, price: 12.30 },
      { name: 'Zplast Total Repair 50ml',         qty: 10, price: 14.60 },
      { name: 'NUTRI MX OMEGA 3 30 Softgel Caps', qty: 15, price: 8.87  }
    ]
  };

  const calc = calculateOrderFinancials_(fakeOrder);

  console.log("─────── ΥΠΟΛΟΓΙΣΜΟΙ ───────");
  console.log("Αρχική αξία:      " + calc.netInitial.toFixed(2) + " €");
  console.log("Mix εκπτώσεις:  - " + calc.mixDiscVal.toFixed(2) + " €");
  console.log("  " + calc.mixDiscountSummary);
  console.log("Έκπτωση τζίρου: - " + calc.volDiscVal.toFixed(2) + " € (" + calc.volPerc + "%)");
  console.log("Έκπτ. μετρητών: - " + calc.cashDiscVal.toFixed(2) + " €");
  console.log("Καθαρή αξία:      " + calc.netFinal.toFixed(2) + " €");
  console.log("ΦΠΑ 24%:          " + calc.vatAmount.toFixed(2) + " €");
  console.log("ΤΕΛΙΚΟ:           " + calc.finalTotal.toFixed(2) + " €");
  console.log("Δώρα: " + calc.giftsSummary);

  sendSupremeEmail(fakeOrder, calc);
  console.log("\n⚠️ Στάλθηκε και CC: " + ORDER_CC);
}


/** Τι triggers είναι ενεργά. */
function checkTriggers() {
  const triggers = ScriptApp.getProjectTriggers();

  if (!triggers.length) {
    console.log("❌ Κανένα trigger. Τρέξε createDailyTrigger().");
    return;
  }

  triggers.forEach(function (t) {
    console.log("• " + t.getHandlerFunction() + " | " + t.getEventType());
  });
  console.log("\nΣημ.: εκτελείται σε παράθυρο ~1 ώρας γύρω από τις " + REPORT_HOUR + ":00.");
}


/** Ανάλυση ΦΠΑ ανά τρίμηνο για όλο το έτος — χωρίς αποστολή email. */
function debugVatQuarters() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const now = new Date();
  const year = now.getFullYear();
  const src = _financialSource_(ss, year);

  console.log("═══════ ΦΠΑ ΑΝΑ ΤΡΙΜΗΝΟ — " + year + " ═══════");
  console.log("Πηγή: " + src.source + " (" + src.rows + " εγγραφές έτους)\n");

  let totalNet = 0, totalVat = 0;

  for (let q = 0; q < 4; q++) {
    const s = _quarterStats_(src, year, q);
    totalNet += s.net;
    totalVat += s.vat;

    console.log(QUARTER_LABEL[q]);
    console.log("  Καθαρή: " + s.net.toFixed(2) + " € | ΦΠΑ: " + s.vat.toFixed(2) +
                " € | Σύνολο: " + s.gross.toFixed(2) + " € | " + s.rows + " εγγραφές" +
                (s.estimated ? "  ⚠️ μερικώς εκτιμώμενο" : ""));

    s.byMonth.forEach(function (m) {
      if (m.net || m.vat) {
        console.log("    " + MONTH_SHORT[m.idx] + ": " + m.net.toFixed(2) +
                    " € / ΦΠΑ " + m.vat.toFixed(2) + " €");
      }
    });

    console.log("  Προθεσμία: " + Utilities.formatDate(
      _quarterDeadline_(year, q), ss.getSpreadsheetTimeZone() || "Europe/Athens", "dd/MM/yyyy") + "\n");
  }

  console.log("───────────────────────────────");
  console.log("ΕΤΟΣ: καθαρή " + totalNet.toFixed(2) + " € | ΦΠΑ εκροών " + totalVat.toFixed(2) + " €");
  console.log("\nΣημ.: ΦΠΑ εκροών μόνο. Το αποδοτέο προκύπτει μετά την αφαίρεση εισροών.");
}


function authMe() {
  MailApp.sendEmail(Session.getActiveUser().getEmail(), "Zarkolia System", "Backend active.");
}