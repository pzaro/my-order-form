// Λίστα προϊόντων
const products = [
    {
        name: "Bruise Off Bite Out & Pain Free cream",
        price: 12.90,
        descriptions: {
            consumer: "Ανακουφιστική κρέμα για μώλωπες, τσιμπήματα και τοπικό πόνο.",
            science: "Συνδυασμός φυτικών εκχυλισμάτων με αντιφλεγμονώδη δράση.",
            bibliography: "Μελέτη: Smith et al., 2021, Journal of Dermatology."
        }
    },
    {
        name: "Vitamin C 1000mg",
        price: 9.50,
        descriptions: {
            consumer: "Ισχυρό αντιοξειδωτικό για ενίσχυση του ανοσοποιητικού.",
            science: "Η βιταμίνη C συμμετέχει στη σύνθεση κολλαγόνου.",
            bibliography: "NIH Fact Sheet on Vitamin C, 2023."
        }
    },
    {
        name: "Omega 3 Fish Oil",
        price: 15.00,
        descriptions: {
            consumer: "Συμπλήρωμα για καρδιαγγειακή υγεία.",
            science: "EPA & DHA βελτιώνουν τη λιπιδαιμική ισορροπία.",
            bibliography: "Calder, 2020, Nutrients."
        }
    }
];

// Προσθήκη προϊόντων στη σελίδα
const container = document.getElementById("products-container");
products.forEach((p, index) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
        <h3>${p.name}</h3>
        <p>Τιμή: ${p.price.toFixed(2)} €</p>
        <input type="number" min="0" value="0" data-index="${index}">
        <button type="button" class="info-btn" data-index="${index}">Πληροφορίες</button>
    `;
    container.appendChild(div);
});

// Υπολογισμός συνολικού ποσού
const inputs = document.querySelectorAll("input[type='number']");
inputs.forEach(input => {
    input.addEventListener("input", updateSummary);
});

function updateSummary() {
    let total = 0;
    inputs.forEach(input => {
        const qty = parseInt(input.value) || 0;
        const index = input.dataset.index;
        total += qty * products[index].price;
    });

    const vat = total * 0.24;
    const final = total + vat;

    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("vat").textContent = vat.toFixed(2);
    document.getElementById("final").textContent = final.toFixed(2);

    let gift = "Κανένα";
    if (final >= 50 && final < 100) gift = "Δώρο: Vitamin C 1000mg";
    else if (final >= 100) gift = "Δώρο: Omega 3 Fish Oil";

    document.getElementById("gift").textContent = gift;
}

// Modal περιγραφών
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const tabs = document.querySelectorAll(".tablink");
const contents = document.querySelectorAll(".tab");

document.querySelectorAll(".info-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const index = btn.dataset.index;
        const product = products[index];
        modalTitle.textContent = product.name;
        document.getElementById("consumer").textContent = product.descriptions.consumer;
        document.getElementById("science").textContent = product.descriptions.science;
        document.getElementById("bibliography").textContent = product.descriptions.bibliography;
        modal.style.display = "flex";
    });
});

document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});

// Εξαγωγή σε TXT
document.getElementById("export-txt").addEventListener("click", () => {
    let text = "Παραγγελία:\n";
    inputs.forEach(input => {
        const qty = parseInt(input.value) || 0;
        if (qty > 0) {
            const p = products[input.dataset.index];
            text += `${p.name} x${qty} = ${(qty * p.price).toFixed(2)} €\n`;
        }
    });
    text += `\nΣύνολο: ${document.getElementById("total").textContent} €`;
    text += `\nΦΠΑ: ${document.getElementById("vat").textContent} €`;
    text += `\nΤελικό: ${document.getElementById("final").textContent} €`;
    text += `\nΔώρο: ${document.getElementById("gift").textContent}`;

    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "order.txt";
    link.click();
});

// Αποστολή email
document.getElementById("send-email").addEventListener("click", () => {
    let body = "Παραγγελία:%0D%0A";
    inputs.forEach(input => {
        const qty = parseInt(input.value) || 0;
        if (qty > 0) {
            const p = products[input.dataset.index];
            body += `${p.name} x${qty} = ${(qty * p.price).toFixed(2)} €%0D%0A`;
        }
    });
    body += `%0D%0AΣύνολο: ${document.getElementById("total").textContent} €`;
    body += `%0D%0AΦΠΑ: ${document.getElementById("vat").textContent} €`;
    body += `%0D%0ΑΤελικό: ${document.getElementById("final").textContent} €`;
    body += `%0D%0ΑΔώρο: ${document.getElementById("gift").textContent}`;

    window.location.href = `mailto:?subject=Παραγγελία&body=${body}`;
});
