// ============================================================
// ZARKOLIA HEALTH - THE DEFINITIVE SCIENTIFIC ERP v12.0
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwsisgw1LyWf_M1fMq3A3J2xHge4k5KWqLRti5Y5_-V_rmTHoRKaP1KrhZ2v4yuxxRH1g/exec";

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

// --- 2. ΠΛΗΡΗΣ ΒΑΣΗ ΠΕΛΑΤΩΝ ---
const knownCustomers = {
    "999746768": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΝΔΡΕΑΔΟΥ ΕΥΑΓΓΕΛΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "6936515332", phone: "2384021001", email: "andreadoupharmacy@yahoo.com" },
    "025305198": { eponimia: "ΒΑΡΕΛΑΣ ΜΙΧΑΗΛ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "mixalisvarelas@gmail.com" },
    "999295953": { eponimia: "Συστεγασμένα φαρμακεία Αλ.Γκικας- Αν.Γκικα Ο.Ε", doy: "Γιαννιτσών", email: "anagkika@gmail.com" },
    "107015615": { eponimia: "ΜΑΡΚΟΥ ΜΑΡΙΑ ΓΕΩΡΓΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6974066979", email: "markoummp@gmail.com" },
    "127276450": { eponimia: "ΚΙΟΣΗΣ ΙΩΑΝΝΗΣ ΑΘΑΝΑΣΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6976613377", email: "igiannis@yahoo.com" },
    "028058883": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΗΣ ΛΑΖΑΡΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", email: "trilazar@otenet.gr" },
    "041630585": { eponimia: "ΓΕΡΟΝΤΟΠΟΥΛΟΣ ΝΙΚΗΦΟΡΟΣ ΘΕΟΦΙΛΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", email: "nikigero1@hotmail.com" },
    "042643289": { eponimia: "ΜΑΙΝΟΥ ΑΛΕΞΑΝΔΡΑ ΝΙΚΟΛΑΟ", doy: "ΕΔΕΣΣΑΣ", email: "mainoualex@gmail.com" },
    "056068437": { eponimia: "ΓΑΝΑ ΒΑΣΙΛΙΚΗ ΕΥΑΓΓΕΛΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "vassogana@gmail.com" },
    "058406703": { eponimia: "ΧΑΤΖΗΣΩΤΗΡΙΟΥ ΠΕΤΡΟΣ ΣΤΕΡΓΙΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", email: "chazpe@gmail.com" },
    "061835127": { eponimia: "ΓΙΟΥΡΤΣΟΓΛΟΥ ΧΡΗΣΤΟΣ ΕΥΑΓΓΕΛΟ", doy: "ΟΡΕΣΤΙΑΔΑΣ", email: "giourtsoglou@yahoo.gr" },
    "079214571": { eponimia: "ΜΑΝΔΑΛΤΣΗ ΑΙΚΑΤΕΡΙΝΗ ΔΗΜΗΤΡΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "farmakiomandaltsi@gmail.com" },
    "081095923": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΑΔΑΜΙΔΗ Α ΑΔΑΜΙΔΟΥ Μ ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΙ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", email: "adamidou.mar@gmail.com" },
    "120774602": { eponimia: "ΚΙΤΚΑ ΑΝΑΣΤΑΣΙΑ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "a_kitka@yahoo.gr" },
    "134811951": { eponimia: "ΓΙΟΥΤΙΚΑ ΕΛΕΥΘΕΡΙΑ ΜΑΡΙΑ ΠΑΝΑΓΙΩΤΗ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "farmgioutikaelma@gmail.com" },
    "134825144": { eponimia: "ΚΟΥΤΣΟΚΩΣΤΑ ΙΩΑΝΝΑ ΓΕΩΡΓΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "joannamedicine@gmail.com" },
    "140820466": { eponimia: "ΤΣΟΝΟΓΛΟΥ ΔΕΣΠΟΙΝΑ ΔΙΟΝΥΣΙΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "despoinarsonoglou@gmail.com" },
    "151161020": { eponimia: "ΒΕΧΤΣΑΛΗΣ ΣΩΤΗΡΙΟΣ ΧΡΗΣΤΟ", doy: "ΕΔΕΣΣΑΣ", email: "sotirisvechtsalis@hotmail.com" },
    "800367008": { eponimia: "ΣΥΣΤΕΓΑΣΜΕΝΑ ΦΑΡΜΑΚΕΙΑ ΘΕΟΔΟΣΙΟΣ ΑΔΑμΙΔΗΣ ΜΑΡΘΑ ΑΔΑΜΙΔΟΥ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "adamidis86@gmail.com" },
    "800586973": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΦΑΡΜΑΚΗΣ ΙΩΑΝΝΗΣ ΚΑΙ ΣΙΑ Ο", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "farmakisg21@hotmail.gr" },
    "999295989": { eponimia: "Α ΓΚΑΙΤΑΤΖΗΣ ΚΑΙ ΣΙΑ Ε", doy: "ΓΙΑΝΝΙΤΣΩΝ", email: "gkaitatzisaggelos@yahoo.gr" }
    // (Το σύστημα διατηρεί όλους τους πελάτες στη μνήμη)
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

// --- 4. ΕΠΙΣΤΗΜΟΝΙΚΟ COMPENDIUM & ΕΝΔΕΙΞΕΙΣ ---
const productDetails = {
    "Zplast Total Repair": {
        moa: [
            { ing: "Centella Asiatica", moa: "<strong>SMAD Signaling:</strong> Ενεργοποιεί τη μεταγραφική δράση των ινοβλαστών για παραγωγή Κολλαγόνου Ι." },
            { ing: "Υαλουρονικό (Multi-MW)", moa: "<strong>Scaffold Technology:</strong> Δημιουργεί τρισδιάστατο ικρίωμα για την ιστική ανάπλαση." },
            { ing: "Ιπποφαές (Ω-7)", moa: "Ενισχύει τη λιπιδική μεμβράνη των νέων επιθηλιακών κυττάρων." }
        ],
        cases: "Χειρουργικές τομές, διαβητικά έλκη, εγκαύματα 2ου βαθμού, ουλές ακμής.",
        why: "Παρέχει κλινική αναδόμηση του χορίου σε βάθος, όχι απλή επιφανειακή επούλωση.",
        biblio: ["Bylka W (2013). PubMed:24386321", "Wohlrab J (2018)."],
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zplast%20Total%20Repair.jpeg?raw=true"
    },
    "ZplastCream": {
        moa: [
            { ing: "Μαστίχα & Μέλι", moa: "<strong>TGF-β Induction:</strong> Φυσική διέγερση επούλωσης & αντισηψία." },
            { ing: "Καλαμίνη & Σπαθόλαδο", moa: "<strong>Anti-pruritic:</strong> Άμεση καταστολή κνησμού και ερεθισμού." }
        ],
        cases: "Συγκάματα βρεφών, ερεθισμοί από ήλιο, πρόληψη κατακλίσεων, ξηροδερμία.",
        why: "Ισχυρή προστασία φραγμού με 100% φυτική βάση και αντιφλεγμονώδη δράση.",
        biblio: ["Paraschos S (2012). PubMed:17544358"]
    },
    "Bruise Off": {
        moa: [
            { ing: "Arnica (Helenalin)", moa: "<strong>NF-κB Inhibition:</strong> Διακόπτει τη φλεγμονώδη απόκριση σε μοριακό επίπεδο." },
            { ing: "Urea", moa: "<strong>Penetration Enhancer:</strong> Μαλακώνει την κερατίνη για μέγιστη διείσδυση των ενεργών." }
        ],
        cases: "Μετά από ενέσιμα (Botox/Fillers), αιματώματα, οιδήματα, μυϊκές κακώσεις.",
        why: "Επιταχύνει τη μεταβολική απομάκρυνση του αίματος (μελανιάς) από τον ιστό.",
        biblio: ["Lyss G (1998). PubMed:9531637"]
    },
    "Z-boost": {
        moa: [
            { ing: "Zinc & Gingerols", moa: "<strong>Viral Inhibition:</strong> Αναστολή της RNA πολυμεράσης των ιών." },
            { ing: "NAC", moa: "<strong>GSH Precursor:</strong> Άμεση αύξηση της ενδογενούς γλουταθειόνης." }
        ],
        cases: "Πρόληψη ιώσεων, ανάρρωση, οξειδωτικό στρες, καπνιστές (NAC).",
        why: "Στοχευμένη ενίσχυση του ανοσοποιητικού χωρίς περιττά έκδοχα.",
        biblio: ["Hemilä H (2017). PubMed:28515951"]
    },
    "NUTRI MX PROBIOTIC": {
        moa: [
            { ing: "18 Strains (10B CFU)", moa: "<strong>Competitive Exclusion:</strong> Αποκλεισμός παθογόνων στο εντερικό επιθήλιο." },
            { ing: "SCFA Support", moa: "Ενίσχυση παραγωγής βουτυρικού οξέος για θρέψη κολονοκυττάρων." }
        ],
        cases: "Λήψη αντιβιοτικών, σύνδρομο ευερέθιστου εντέρου (IBS), φουσκώματα.",
        why: "Το πλήρες φάσμα 18 στελεχών εγγυάται την αποκατάσταση της μικροβιακής ισορροπίας.",
        biblio: ["Karamanolis GP (2019). Clinical review."]
    }
};

// --- 5. INITIALIZATION & ERP LOGIC ---
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector('#product-table tbody');
    const btnContainer = document.getElementById('productButtonsContainer');

    products.forEach((p, index) => {
        // Buttons Construction
        const btn = document.createElement('button');
        btn.className = 'product-btn';
        btn.innerHTML = `<strong>${p.name}</strong>`;
        btn.onclick = () => showInfo(p.name, index);
        btnContainer.appendChild(btn);

        // Table Rows
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

    // Lookup Logic
    document.getElementById('afm').addEventListener('input', function() {
        const val = this.value.trim();
        if (knownCustomers[val]) {
            const c = knownCustomers[val];
            document.getElementById('eponimia').value = c.eponimia;
            document.getElementById('doy').value = c.doy || "ΕΔΕΣΣΑΣ";
            document.getElementById('email').value = c.email || "";
            document.getElementById('mobile').value = c.mobile || "";
        }
    });
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
    const vat = finalNet * 0.24;

    document.getElementById("net-value").textContent = initialNet.toFixed(2) + " €";
    document.getElementById("disc-perc").textContent = volPerc;
    document.getElementById("disc-val").textContent = volVal.toFixed(2) + " €";
    document.getElementById("cash-disc-val").textContent = cashVal.toFixed(2) + " €";
    document.getElementById("final-net").textContent = finalNet.toFixed(2) + " €";
    document.getElementById("vat-value").textContent = vat.toFixed(2) + " €";
    document.getElementById("final-total").textContent = (finalNet + vat).toFixed(2) + " €";

    // LIVE ANALYSIS BOX
    const analysis = document.getElementById("dynamicAnalysis");
    if(initialNet > 0) {
        analysis.innerHTML = `
            <p style="margin:5px 0;">📦 <strong>Δώρα:</strong> +${totalGifts} τεμάχια</p>
            <p style="margin:5px 0; color:#34d399;">📉 <strong>Συνολική Έκπτωση:</strong> -${(volVal + cashVal).toFixed(2)} €</p>
            <p style="margin:5px 0; font-size:0.8rem; opacity:0.8;">Μέσο κόστος ανά τεμάχιο: ${(finalNet / (totalItems + totalGifts)).toFixed(2)} €</p>
        `;
    } else {
        analysis.innerHTML = "Ξεκινήστε την παραγγελία...";
    }
}

function showInfo(name, index) {
    let lookup = name.includes("Total Repair") ? "Zplast Total Repair" : (name.includes("Cream") ? "ZplastCream" : (name.includes("Bruise Off") ? "Bruise Off" : (name.includes("Z-boost") ? "Z-boost" : (name.includes("Probiotic") ? "NUTRI MX PROBIOTIC" : name))));
    const p = productDetails[lookup] || { moa: [], cases: "—", rationale: "—", why: "—" };
    const modal = document.getElementById('productModal');
    let imgPath = p.img || `images/${name}.jpg`;

    modal.innerHTML = `
        <div class="modal-content">
            <span style="position:absolute;top:20px;right:25px;cursor:pointer;font-size:2.5rem;" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
            <div style="display:flex; align-items:center; gap:25px; margin-bottom:20px;">
                <img src="${imgPath}" onerror="this.src='https://via.placeholder.com/120?text=ZARKOLIA'" style="width:130px; border-radius:15px; border:1px solid #eee;">
                <div>
                    <h2 style="margin:0; color:var(--emerald-dark);">${name}</h2>
                    <p style="color:var(--slate-light); font-weight:700;">Επαγγελματική Τεκμηρίωση HCP</p>
                </div>
            </div>
            
            <h4 style="margin-bottom:10px; color:var(--slate);">🧬 Μοριακός Μηχανισμός Δράσης</h4>
            ${hcpTable(p.moa || [])}

            <div style="background:#f8fafc; padding:20px; border-radius:15px; margin:20px 0; border:1px solid #eef2f6;">
                <p><strong>📍 Ενδείξεις Φαρμακείου:</strong> ${p.cases}</p>
                <p><strong>💡 Γιατί να το προτείνετε:</strong> ${p.why || p.rationale}</p>
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

    const data = { 
        customer: epo, afm: document.getElementById("afm").value, 
        doy: document.getElementById("doy").value, mobile: document.getElementById("mobile").value, email: document.getElementById("email").value,
        products: itemsForSheet.join(", "), netValue: document.getElementById("final-net").textContent, vat: document.getElementById("vat-value").textContent, total: document.getElementById("final-total").textContent, 
        payment: Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "—", remarks: document.getElementById("remarks").value 
    };

    const btn = document.getElementById("submitBtn");
    btn.disabled = true; btn.textContent = "Αποστολή στο Cloud...";

    try {
        await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
        alert("Η παραγγελία καταχωρήθηκε επιτυχώς!");
        
        const body = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ%0D%0A%0D%0AΠΕΛΑΤΗΣ: ${epo}%0D%0A%0D%0AΠΡΟΪΟΝΤΑ:%0D%0A${emailItems}%0D%0A------------------------%0D%0AΑΝΑΛΥΣΗ:%0D%0AΑρχική: ${document.getElementById("net-value").textContent}%0D%0AΈκπτωση Τζίρου: ${document.getElementById("disc-perc").textContent}% (-${document.getElementById("disc-val").textContent})%0D%0AΈκπτωση Μετρητών: 2% (-${document.getElementById("cash-disc-val").textContent})%0D%0AΚαθαρή Αξία: ${document.getElementById("final-net").textContent}%0D%0AΦΠΑ (24%): ${document.getElementById("vat-value").textContent}%0D%0AΤΕΛΙΚΟ ΠΟΣΟ: ${document.getElementById("final-total").textContent}%0D%0A------------------------%0D%0AΤΡΑΠΕΖΕΣ: EUROBANK / ΠΕΙΡΑΙΩΣ`;
        window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=Order_${encodeURIComponent(epo)}&body=${body}`;
    } catch(e) { alert("Σφάλμα σύνδεσης Cloud."); }
    finally { btn.disabled = false; btn.textContent = "Ολοκλήρωση & Αποθήκευση"; }
}

function clearForm() { if(confirm("Εκκαθάριση φόρμας;")) location.reload(); }
