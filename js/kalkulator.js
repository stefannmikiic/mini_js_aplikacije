const ekran = document.getElementById("ekran");

let dugmici = document.querySelectorAll("#dugmici button");

dugmici.forEach(dugme => {
    dugme.addEventListener("click", () => {
        if(dugme.innerHTML === "C") {
            ekran.value = "";
        } else if(dugme.innerHTML === "=") {
            try {
                ekran.value = eval(ekran.value);

            } catch (error) {
                ekran.value = "";
                alert("Neispravna operacija!");
            }
        }
        else{
                ekran.value += dugme.innerHTML;
                
        }
      
    });
    
});