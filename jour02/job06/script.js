// On cible le body
const body = document.querySelector("#body");

// On crée des éléments pour les ajouter dans le body
const title1 = document.createElement("h1")
title1.textContent = "Ceci est un titre";

const para1 = document.createElement("p")
para1.textContent = "Ceci est un paragraphe";

const para2 = document.createElement("p")
para2.textContent = "Ceci est un autre paragraphe";

const footer1 = document.createElement("footer")
footer1.textContent = "Ceci est un footer";

let ok = 0;

document.addEventListener("keydown", (e) => {

    if (e.key !== 'undefined' && e.key == "a") {
        console.log("ok");
        ok = 1;
        return ok;
    }

    console.log(ok);

});

document.addEventListener("keydown", (h) => {

    if (h.key !== 'undefined' && h.key == "z" && ok == 1) {
        console.log("no");
        ok = 2;
        return ok;
    }

    console.log(ok);

});

document.addEventListener("keydown", (i) => {

    if (i.key !== 'undefined' && i.key == "e" && ok == 2) {
        console.log("pas");
        ok = 3;
        return ok;
    }

    console.log(ok);

});

document.addEventListener("keydown", (j) => {

    if (j.key !== 'undefined' && j.key == "r" && ok == 3) {
        console.log("az");
        ok = 4;
        console.log("Ca marche");
    }

    console.log(ok);

});