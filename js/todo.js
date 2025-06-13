const submitElement = document.getElementById('taskSubmit');

let taskovi = JSON.parse(localStorage.getItem("taskovi")) || []; 




function sacuvajTaskove() {
    const taskoviJSON = JSON.stringify(taskovi);
    localStorage.setItem("taskovi", taskoviJSON);
}



function dodajTask() {
    const nazivElement = document.getElementById('taskNaziv');
    const opisElement = document.getElementById('taskOpis');
    const rokElement = document.getElementById('taskRok');

    const naziv = nazivElement.value.trim();
    const opis = opisElement.value.trim();
    const rok = rokElement.value.trim();

    if (naziv === '' || opis === '' || rok === '') {
        alert('Molimo unesite sve podatke.');
        return;
    }

    let task = {
        naziv: naziv,
        opis: opis,
        rok: rok,
        status: 'planirano',
    };

    taskovi.push(task);
    sacuvajTaskove();
    console.log(taskovi);

}

function promeniStatus(index){
    
   let trenutniTask = taskovi[index];
   trenutniTask.innerHTML = "";
   if(trenutniTask.status === "planirano"){
        trenutniTask.status = "utoku";
   }
   else if(trenutniTask.status === "utoku"){
        trenutniTask.status = "zavrseno";
   }
   else if(trenutniTask.status === "zavrseno"){
    alert("Task je vec zavrsen!");
    
   }

   razvrstajTaskove();
}

function obrisiTask(index){
    taskovi.splice(index,1);
    sacuvajTaskove();
    razvrstajTaskove();
}

function razvrstajTaskove(){
    const divPlanirano = document.getElementById('planirano');
    const divZavrseno = document.getElementById('zavrseno');
    const divUToku = document.getElementById('utoku');

    divPlanirano.innerHTML = "";
    divUToku.innerHTML = "";
    divZavrseno.innerHTML = "";

    taskovi.forEach( (task,index) => {

        const taskElement = document.createElement('div');
        
        taskElement.classList.add('task');
        taskElement.addEventListener("click",() => {promeniStatus(index)});
        taskElement.innerHTML = `
            <h3>${task.naziv}</h3>
            <p class="opisTaska">${task.opis}</p>
            <p class="RokTaska">Rok: ${task.rok}</p>
            <button class = "obrisiBTN">Obrisi </button>
        `;
        taskElement.querySelector(".obrisiBTN").addEventListener("click", () => {obrisiTask(index)});

        if(task.status === 'planirano') {
            divPlanirano.appendChild(taskElement);
        }
        else if(task.status === 'zavrseno') {
            divZavrseno.appendChild(taskElement);
        }
        else if(task.status === 'utoku') {
            divUToku.appendChild(taskElement);
        }
    });
}




submitElement.addEventListener('click', dodajTask);

razvrstajTaskove();

