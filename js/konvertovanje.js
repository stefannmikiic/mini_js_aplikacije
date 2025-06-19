const dugmeLevoElement = document.getElementById("levoDugme");
const dugmeDesnoElement = document.getElementById("desnoDugme");
const inputElement = document.getElementById("vrednost");
const rezultatDivElement = document.getElementById("rezultat");

dugmeLevoElement.addEventListener("click", () => {
    const vrednost = parseFloat(inputElement.value);
    if (!isNaN(vrednost)) {
        const konvertovanaVrednost = (vrednost - 32) * 5 / 9;
        rezultatDivElement.innerHTML = konvertovanaVrednost.toFixed(2);
    } else {
        alert("Unesite validnu vrednost u Farenhajtima.");
    }
});

dugmeDesnoElement.addEventListener("click", () => {
    const vrednost = parseFloat(inputElement.value);
    if (!isNaN(vrednost)) {
        const konvertovanaVrednost = (vrednost * 9 / 5) + 32;
        rezultatDivElement.innerHTML = konvertovanaVrednost.toFixed(2);
    } else {
        alert("Unesite validnu vrednost u Celzijusima.");
    }
});