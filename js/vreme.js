const polje = document.querySelector("#grad");
const btn = document.querySelector("#proveriVreme");
const apiKey = "c8871ce6591f570cefcabeae69e9d114";

btn.addEventListener("click", function() {
    const grad = polje.value.trim();
    if (grad === "" || !grad) {
        alert("Molimo unesite naziv grada.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${grad}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Grad nije pronađen");
            }
            return response.json();
        })
        .then(data => {
            const temperatura = data.main.temp;
            const opis = data.weather[0].description;
            const rezultatDiv = document.querySelector("#rezultat");
            rezultatDiv.innerHTML = `Trenutna temperatura u ${grad} je ${temperatura}°C sa ${opis}.`;
        })
        .catch(error => {
            console.error("Greška:", error);
        });
});