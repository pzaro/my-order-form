// ============================================================
// ZARKOLIA HEALTH - ROI ENGINE v60.0 Master Logic
// ============================================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMnMtsH8EihoSI4-U2cqz4x3pF6dUqT_WkSWo__WqQFP6D5q8_KCrGWySBaFnqy8dj4w/exec";

document.addEventListener("DOMContentLoaded", () => {
    if (typeof products !== 'undefined') renderOrderSystem();
    initAFMLookup();
});

function updateTotals() {
    let initialNet = 0;
    let totalGiftsCount = 0;

    products.forEach((p, i) => {
        const q = parseInt(document.getElementById(`qty-${i}`).value) || 0;
        let g = q >= 24 ? 6 : (q >= 18 ? 3 : (q >= 9 ? 1 : 0)); //
        totalGiftsCount += g;
        initialNet += q * p.price;
        document.getElementById(`gift-${i}`).textContent = g;
        document.getElementById(`total-${i}`).textContent = (q * p.price).toFixed(2) + " €";
    });

    // 1. ROI Calculation: Volume Discount (1% per 100€) [cite: 2026-01-20]
    let volPerc = Math.min(10, Math.floor(initialNet / 100));
    const volVal = initialNet * (volPerc / 100);

    // 2. ROI Calculation: Cash Discount [cite: 2025-08-13]
    const isCash = Array.from(document.getElementsByName('payment')).find(c => c.checked)?.value === "Αντικαταβολή Μετρητά";
    const cashVal = isCash ? (initialNet - volVal) * 0.02 : 0;

    const finalTotal = (initialNet - volVal - cashVal) * 1.24;

    // Visual Updates [cite: 2026-01-20]
    document.getElementById("final-total").textContent = finalTotal.toFixed(2) + " €";
    document.getElementById("volume-fill").style.width = (volPerc * 10) + "%";
    
    document.getElementById("stat-gifts").querySelector(".stat-value").textContent = totalGiftsCount;
    document.getElementById("stat-cash").querySelector(".stat-value").textContent = isCash ? "2%" : "0%";
    document.getElementById("stat-savings").querySelector(".stat-value").textContent = (volVal + cashVal).toFixed(2) + " €";

    // Dynamic ROI Summary [cite: 2026-01-20]
    document.getElementById("dynamicAnalysis").innerHTML = initialNet > 0 ? 
        `✅ Έκπτωση Τζίρου: <strong>${volPerc}%</strong> | ✅ Επιπλέον Όφελος: <strong>${(volVal + cashVal).toFixed(2)}€</strong>` : "Αναμονή δεδομένων...";
}

// ... syncModalQty, showInfo, initAFMLookup as in v58.0 ...
