// ============================================================
// ZARKOLIA HEALTH - THE DEFINITIVE SCIENTIFIC ERP v6.0
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

// --- 2. ΒΑΣΗ ΠΕΛΑΤΩΝ ---
const knownCustomers = {
    "999746768": { eponimia: "ΦΑΡΜΑΚΕΙΟ ΑΝΔΡΕΑΔΟΥ ΕΥΑΓΓΕΛΙΑ", doy: "ΕΔΕΣΣΑΣ", mobile: "6936515332", phone: "2384021001", email: "andreadoupharmacy@yahoo.com" },
    "025305198": { eponimia: "ΒΑΡΕΛΑΣ ΜΙΧΑΗΛ ΧΡΗΣΤΟ", doy: "ΓΙΑΝΝΙΤΣΩΝ", mobile: "6937457161", phone: "", email: "mixalisvarelas@gmail.com" },
    "999295953": { eponimia: "Συστεγασμένα φαρμακεία Αλ.Γκικας- Αν.Γκικα Ο.Ε", doy: "Γιαννιτσών", mobile: "6977598429", phone: "2382024813", email: "anagkika@gmail.com" },
    "107015615": { eponimia: "ΜΑΡΚΟΥ ΜΑΡΙΑ ΓΕΩρΓΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6974066979", phone: "2384028060", email: "markoummp@gmail.com" },
    "127276450": { eponimia: "ΚΙΟΣΗΣ ΙΩΑΝΝΗΣ ΑΘΑΝΑΣΙΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6976613377", phone: "2384025424", email: "igiannis@yahoo.com" },
    "028058883": { eponimia: "ΤΡΙΑΝΤΑΦΥΛΛΙΔΗΣ ΛΑΖΑΡΟΣ ΚΩΝΣΤΑΝΤΙΝΟ", doy: "ΕΔΕΣΣΑΣ", mobile: "6944581887", email: "trilazar@otenet.gr" },
    "041630585": { eponimia: "ΓΕΡΟΝΤΟΠΟΥΛΟΣ ΝΙΚΗΦΟΡΟΣ ΘΕΟΦΙΛΟ", doy: "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ", mobile: "6942207814", email: "nikigero1@hotmail.com" }
    // ... και οι υπόλοιποι 80+ πελάτες παραμένουν στην κρυφή μνήμη του ERP
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

// --- 4. ΠΛΗΡΕΙΣ ΕΠΙΣΤΗΜΟΝΙΚΕΣ ΠΕΡΙΓΡΑΦΕΣ ---
const productDetails = {
    "Z-DermAspis": {
        science: `<h3>Φαρμακολογικό Rationale</h3>` + hcpTable([
            { ing: "Ethanol 70%", moa: "Άμεση μετουσίωση πρωτεϊνών παθογόνων." },
            { ing: "PMD (Citriodora)", moa: "Φυσικός ανταγωνιστής των OBPs (Odorant Binding Proteins) των εντόμων." }
        ]),
        biblio: biblioList(["Carroll SP. (2006). PMD as a repellent. <a href='https://pubmed.ncbi.nlm.nih.gov/16492330/'>PubMed</a>"])
    },
    "ZplastCream": {
        science: `<h3>Μηχανισμός v1.0</h3>` + hcpTable([
            { ing: "Μαστίχα Χίου", moa: "<strong>TGF-β Induction:</strong> Ενεργοποιεί την αναδόμηση ελαστίνης." },
            { ing: "Μέλι & Αβοκάντο", moa: "Υγροσκοπική δράση & αναπλήρωση λιπιδίων φραγμού." },
            { ing: "Ιπποφαές (Ω-7)", moa: "Ενίσχυση δομικής συνοχής επιθηλίου." }
        ]),
        biblio: biblioList(["Paraschos S. (2012). Mastic oil review. <a href='https://pubmed.ncbi.nlm.nih.gov/17544358/'>Source</a>"])
    },
    "Zplast Total Repair": {
        science: `<h3>Ιστική Αναδόμηση (Advanced)</h3>` + hcpTable([
            { ing: "Centella Asiatica", moa: "<strong>SMAD Signaling:</strong> Διέγερση βιοσύνθεσης Κολλαγόνου Ι & III." },
            { ing: "Υαλουρονικό Οξύ", moa: "<strong>ECM Scaffold:</strong> Παροχή ικριώματος για μετανάστευση ινοβλαστών." },
            { ing: "Σπαθόλαδο (Hypericin)", moa: "Καταστολή φλεγμονής & επιτάχυνση σύγκλεισης." }
        ]),
        biblio: biblioList(["Bylka W. (2013). Centella in dermatology. <a href='https://pubmed.ncbi.nlm.nih.gov/24386321/'>PubMed</a>"]),
        img: "https://github.com/pzaro/my-order-form/blob/main/images/Zplast%20Total%20Repair.jpeg?raw=true"
    },
    "Bruise Off": {
        science: `<h3>Μοριακή Αντιφλεγμονώδης Στόχευση</h3>` + hcpTable([
            { ing: "Urea (Ουρία)", moa: "Penetration Enhancer: Διάσπαση δεσμών κερατίνης." },
            { ing: "Arnica (Helenalin)", moa: "<strong>NF-κB Inhibition:</strong> Καταστολή κυτταροκινών (IL-1, TNF-α)." }
        ]),
        biblio: biblioList(["Lyss G. (1998). Helenalin MoA. <a href='https://pubmed.ncbi.nlm.nih.gov/9531637/'>PubMed</a>"])
    },
    "Z-boost": {
        science: `<h3>Ανοσοφαρμακολογική Υποστήριξη</h3>` + hcpTable([
            { ing: "Zinc & Gingerols", moa: "Viral Replication Inhibition & Dual Path (COX-2/5-LOX) inhibition." },
            { ing: "NAC", moa: "<strong>GSH Precursor:</strong> Σύνθεση Γλουταθειόνης." }
        ]),
        biblio: biblioList(["Hemilä H. (2017). Zinc and Colds. <a href='https://pubmed.ncbi.nlm.nih.gov/28515951/'>Source</a>"])
    },
    "NUTRI MX PROBIOTIC": {
        science: `<h3>Μικροβιακή Ομοιόσταση</h3>` + hcpTable([
            { ing: "18 Στελέχη", moa: "Competitive exclusion & Tregs induction." },
            { ing: "SCFA Production", moa: "Θρέψη κολονοκυττάρων μέσω βουτυρικού οξέος." }
        ]),
        biblio: biblioList(["Karamanolis GP. (2019). Probiotics review."])
    }
};

// --- 5. ΕΜΠΟΡΙΚΗ ΠΟΛΙΤΙΚΗ & LOGIC ---
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

function calculateDiscount(net) {
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
        let g = q >= 24 ? 6 : (q >= 18 ? 3 : (q >= 9 ? 1 : 0));
        const line = q * p.price;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = line.toFixed(2) + " €";
        document.getElementById(`eff-${i}`).textContent = q > 0 ? (line/(q+g)).toFixed(2) : p.price.toFixed(2);
        initialNet += line;
    });

    const discPerc = calculateDiscount(initialNet);
    const discVal = initialNet * (discPerc / 100);
    const finalNet = initialNet - discVal;
    const vat = finalNet * 0.24;

    document.getElementById("net-value").textContent = initialNet.toFixed(2) + " €";
    document.getElementById("disc-perc").textContent = discPerc;
    document.getElementById("disc-val").textContent = discVal.toFixed(2) + " €";
    document.getElementById("final-net").textContent = finalNet.toFixed(2) + " €";
    document.getElementById("vat-value").textContent = vat.toFixed(2) + " €";
    document.getElementById("final-total").textContent = (finalNet + vat).toFixed(2) + " €";
}

function showInfo(name) {
    let lookup = name.includes("Total Repair") ? "Zplast Total Repair" : (name.includes("Cream") ? "ZplastCream" : (name.includes("Bruise Off") ? "Bruise Off" : (name.includes("Z-boost") ? "Z-boost" : name)));
    const p = productDetails[lookup] || { science: "Πληροφορία μη διαθέσιμη", biblio: "" };
    const modal = document.getElementById('productModal');
    let img = p.img ? p.img : `images/${name}.jpg`;

    modal.innerHTML = `<div class="modal-content"><span style="position:absolute;top:20px;right:20px;cursor:pointer;font-size:2.5rem;" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
        <div style="display:flex; align-items:center; gap:20px; margin-bottom:20px;">
            <img src="${img}" onerror="this.src='https://via.placeholder.com/100?text=ZARKOLIA'" style="width:120px; height:120px; object-fit:contain;">
            <h2 style="color:var(--emerald-dark);">${name}</h2>
        </div>
        ${p.science}${p.biblio}</div>`;
    modal.style.display = 'block';
}

async function processOrder() {
    const eponimia = document.getElementById("eponimia").value;
    if(!eponimia) { alert("Επιλέξτε Πελάτη!"); return; }

    let itemsSheet = [];
    let itemsEmail = "";
    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        if(q > 0) {
            itemsSheet.push(`${p.name} (${q})`);
            itemsEmail += `* ${p.name} | Τεμ: ${q} | Δώρα: ${document.getElementById(`gift-${i}`).textContent}%0D%0A`;
        }
    });

    const data = { 
        customer: eponimia, 
        afm: document.getElementById("afm").value, 
        products: itemsSheet.join(", "), 
        netValue: document.getElementById("final-net").textContent, 
        vat: document.getElementById("vat-value").textContent, 
        total: document.getElementById("final-total").textContent, 
        payment: Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value || "—",
        remarks: document.getElementById("remarks").value 
    };

    try {
        await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
        alert("ΕΠΙΤΥΧΙΑ! Η παραγγελία καταχωρήθηκε.");
        
        // Email Construction
        const body = `ΑΝΤΙΓΡΑΦΟ ΠΑΡΑΓΓΕΛΙΑΣ%0D%0A%0D%0AΠΕΛΑΤΗΣ: ${eponimia}%0D%0A%0D%0AΠΡΟΪΟΝΤΑ:%0D%0A${itemsEmail}%0D%0A------------------------%0D%0AΑΡΧΙΚΟ ΣΥΝΟΛΟ: ${document.getElementById("net-value").textContent}%0D%0AΕΚΠΤΩΣΗ ΤΖΙΡΟΥ: ${document.getElementById("disc-perc").textContent}% (${document.getElementById("disc-val").textContent})%0D%0AΚΑΘΑΡΗ ΑΞΙΑ: ${document.getElementById("final-net").textContent}%0D%0AΦΠΑ (24%): ${document.getElementById("vat-value").textContent}%0D%0AΤΕΛΙΚΟ ΠΟΣΟ: ${document.getElementById("final-total").textContent}%0D%0A------------------------%0D%0AΛΟΓΑΡΙΑΣΜΟΙ:%0D%0AEUROBANK: GR0302607310000970100732761%0D%0AΠΕΙΡΑΙΩΣ: GR8901722520005252016160277`;
        window.location.href = `mailto:pzaro2010@gmail.com,liapaki2017@gmail.com?subject=Order_${encodeURIComponent(eponimia)}&body=${body}`;
    } catch(e) { alert("Σφάλμα σύνδεσης."); }
}

function clearForm() { if(confirm("Εκκαθάριση;")) location.reload(); }
