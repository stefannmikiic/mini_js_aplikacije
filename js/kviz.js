const pitanja = [
    {
        tekst: "Koji je glavni grad Francuske?",
        odgovori: ["Marsej", "Pariz", "Lyon", "Toulouse"],
        tacanOdgovor: 1
    },

    {
        tekst: "Koji je glavni grad Spanije?",
        odgovori: ["Madrid", "Barcelona", "Valencia", "Sevilla"],
        tacanOdgovor: 0
    },

    {
        tekst: "Koji je glavni grad Italije?",
        odgovori: ["Napulj", "Milano", "Rim", "Torino"],
        tacanOdgovor: 2
    },
    {
        tekst: "Koji je glavni grad Madjarske?",
        odgovori: ["Budimpesta", "Budim", "Pesta", "Torino"],
        tacanOdgovor: 0
    },
    {
        tekst: "Koji je glavni grad Srbije?",
        odgovori: ["Krusevac", "Kragujevac", "Beograd", "Kraljevo"],
        tacanOdgovor: 2
    }

    ];

    let indeksPitanja = 0;
    let poeni = 0;

    const pitanjeElement = document.getElementById("pitanje");
    const odgovoriElement = document.getElementById("odgovori");
    const dugmeDalje = document.getElementById("dalje");
    const rezultatElement = document.getElementById("rezultatTekst");
    const rezultat = document.getElementById("rezultat");
    const dugmePocetak = document.getElementById("pocetak");
    const tajmer = document.getElementById("tajmer");
    dugmeDalje.style.display = "none";
    rezultat.style.display = "none"; // Sakrij rezultat

    let vreme = 10;
    let interval;

    function prikaziPitanje() {
    clearInterval(interval); // Očisti prethodni interval
    vreme = 10; // Resetuj vreme
    tajmer.innerHTML = `Preostalo vreme: ${vreme} sekundi`;
    interval = setInterval(() => {
        vreme--;
        tajmer.innerHTML = `Preostalo vreme: ${vreme} sekundi`;
        if (vreme <= 0) {
            clearInterval(interval);
            dugmeDalje.style.display = "block"; // Prikaži dugme "Dalje"
            pitanjeElement.innerHTML = "Vreme je isteklo! Tačan odgovor je: " + pitanja[indeksPitanja].odgovori[pitanja[indeksPitanja].tacanOdgovor];
            odgovoriElement.innerHTML = "";

        }
    }, 1000); // Ažuriraj tajmer svake sekunde
    pitanjeElement.innerHTML = pitanja[indeksPitanja].tekst;
    pitanja[indeksPitanja].odgovori.forEach((odgovor) => {
          const dugme = document.createElement("button");
          dugme.innerHTML = odgovor;

          dugme.addEventListener("click", () => {
            clearInterval(interval); // Zaustavi tajmer kada je odgovor izabran
            if(odgovor == pitanja[indeksPitanja].odgovori[pitanja[indeksPitanja].tacanOdgovor]) {
                poeni++;
                dugme.style.backgroundColor = "green";
                    dugmeDalje.style.display = "block";
            } else{
                dugme.style.backgroundColor = "red";
                dugmeDalje.style.display = "block";
            }
            odgovoriElement.querySelectorAll("button").forEach(btn => {
                btn.disabled = true; // Onemogući ostale dugmiće
            });
    });
          odgovoriElement.appendChild(dugme);
    });
    }
        dugmeDalje.addEventListener("click", () => {
          indeksPitanja++;
          if(indeksPitanja != pitanja.length) {

            odgovoriElement.innerHTML = ""; // Očisti prethodne odgovore
            prikaziPitanje();
            dugmeDalje.style.display = "none"; // Sakrij dugme "Dalje"
          } else {
            rezultat.style.display = "block"; // Prikaži rezultat
            pitanjeElement.innerHTML = "Kviz je završen!";
            odgovoriElement.innerHTML = "";
            rezultatElement.innerHTML = `Osvojili ste ${poeni} poena!`;
            dugmeDalje.style.display = "none"; // Sakrij dugme "Dalje"
            tajmer.innerHTML = ""; // Očisti tajmer
          }
        });

    dugmePocetak.addEventListener("click", () => {
            indeksPitanja = 0;
            poeni = 0;
            rezultat.style.display = "none"; // Sakrij rezultat
            dugmeDalje.style.display = "none"; // Sakrij dugme "Dalje"
            odgovoriElement.innerHTML = ""; // Očisti prethodne odgovore
            prikaziPitanje(); // Prikazivanje prvog pitanja
    });
        prikaziPitanje(); // Prikazivanje prvog pitanja
