// On définit la fonction qui va insérer le <p>
function expression() {
    const p = document.createElement("p");         // On créé l'élément p qui contiendra l'expression

    fetch("expression.txt")                             // On lance la requête fetch 
        .then(response => response.text())                  // Première promesse qui contient notre réponse 
        .then(data => {                                     // Seconde promesse qui contient le contenu du fichier
            p.textContent = data                                // On ajoute à <p> le contenu du fichier
        });

        body = document.querySelector("body");          // On cible le body
        body.append(p);                                 // On y insert l'élément <p>
}

const button = document.querySelector("#button");       // On cible le bouton
button.addEventListener("click", expression);           // On écoute le bouton au click, et on fait appel à la fonction