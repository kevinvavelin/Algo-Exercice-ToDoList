console.log("App.js");


const barreDesTaches = document.getElementById("task");
const btnAjouter = document.getElementById("add-button");
const baliseListeDesTaches = document.getElementById("task-list");
console.log(baliseListeDesTaches);

let listeDesTaches = [];
console.log(listeDesTaches);


btnAjouter.addEventListener("click",function () {
    let valeurDeLaBarreDesTaches = barreDesTaches.value;
    console.log(valeurDeLaBarreDesTaches);
    listeDesTaches.push(valeurDeLaBarreDesTaches);
    console.log(listeDesTaches);
    barreDesTaches.value = "";
    ajouterTacheAuHTML(valeurDeLaBarreDesTaches, listeDesTaches.length - 1);
});


function ajouterTacheAuHTML(tache, indexDeMaTache) {
    let elementDeLaListeHTML = document.createElement("li");
    elementDeLaListeHTML.classList.add("list-group-item", "d-flex", "justify-content-center", "align-items-start");
    

    let blocContainerDuNomDeLaTache = document.createElement("div");
    blocContainerDuNomDeLaTache.classList.add("ms-2", "me-auto");
    
    let texteDeLaTache = document.createElement("p");
    texteDeLaTache.className = "fw-bold";
    texteDeLaTache.innerText = tache;

    blocContainerDuNomDeLaTache.appendChild(texteDeLaTache);

    elementDeLaListeHTML.appendChild(blocContainerDuNomDeLaTache);
    

    let blocContainerDuBoutonSupprimer = document.createElement("div");

    let boutonSupprimer = document.createElement("button");
    boutonSupprimer.classList.add("btn", "btn-secondary", "del-btn");
    boutonSupprimer.id = "task-" + indexDeMaTache;
    boutonSupprimer.innerText = "Supprimer";
    boutonSupprimer.addEventListener("click", supprimerMaTache);

    blocContainerDuBoutonSupprimer.appendChild(boutonSupprimer);

    elementDeLaListeHTML.appendChild(blocContainerDuBoutonSupprimer);
    

    baliseListeDesTaches.appendChild(elementDeLaListeHTML);
}

function supprimerMaTache(event) {
    console.log(event.target);
    let idDuBoutonSeparer = event.target.id.split("-");
    console.log(idDuBoutonSeparer);
    let indexDeMonTableauDeTache = parseInt(idDuBoutonSeparer[1]);
    console.log(indexDeMonTableauDeTache);
    listeDesTaches.splice(indexDeMonTableauDeTache, 1);
    console.log(listeDesTaches);
}