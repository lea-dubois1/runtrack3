const updateButton = document.querySelector("#update");
const body = document.querySelector("body");
const table = document.querySelector("#tableBody");

// Actualiser la page si on clique sur le boutton
updateButton.addEventListener("click", () => {
    location.reload();
});

for (let i = 0; i < dataJSON.length; i++) {
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdNom = document.createElement("td");
    const tdPrenom = document.createElement("td");
    const tdMail = document.createElement("td");
    
    table.appendChild(tr);

    tdId.textContent = dataJSON[i]['id'];
    tr.appendChild(tdId);

    tdNom.textContent = dataJSON[i]['nom'];
    tr.appendChild(tdNom);

    tdPrenom.textContent = dataJSON[i]['prenom'];
    tr.appendChild(tdPrenom);

    tdMail.textContent = dataJSON[i]['email'];
    tr.appendChild(tdMail);

}
// console.log(dataJSON[0]['id']);