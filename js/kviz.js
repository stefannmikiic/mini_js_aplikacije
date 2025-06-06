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
    }
    ];

    let indeksPitanja = 0;
    let poeni = 0;

    const pitanjeElement = document.getElementById("pitanje");
    const odgovoriElement = document.getElementById("odgovori");
    const dugmeDalje = document.getElementById("dalje");
    const rezultatElement = document.getElementById("rezultat");

    dugmeDalje.style.display = "none";
    pitanjeElement.innerHTML= pitanja[indeksPitanja].tekst;
    pitanja[indeksPitanja].odgovori.forEach((odgovor) => {
       const dugme = document.createElement("button");
       dugme.innerHTML = odgovor;
         dugme.addEventListener("click", () => {
              if (pitanja[indeksPitanja].odgovori.indexOf(odgovor) === pitanja[indeksPitanja].tacanOdgovor) {
                poeni++;
                dugme.style.backgroundColor = "green";
                dugmeDalje.style.display = "block";
                
              }else{
                dugme.style.backgroundColor = "red";
                dugmeDalje.style.display = "block";
              }
              
                });
         odgovoriElement.appendChild(dugme);
         });