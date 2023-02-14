const body = document.querySelector("body");
const form = document.querySelector("form");
const select_types = document.querySelector("#select_types");
const pokemonType = [];


form.addEventListener("submit", function (query) {
    query.preventDefault();

    const request = new FormData(form);                     // On récupère les données du formulaire dans un formData
    const user_input = [...request];                    // On récupère les donnés de chaque imput séparémment

    fetch("pokemon.json")
        .then((response) => {
            return response.json()
        })
    
        .then((data) => {
            for(let t = 0; t < data.length; t++) {              // On parcours le tableau des pokémons ligne par ligne
                if(data[t].type == user_input[2][1]) {              // Si le type sur la ligne est le même que sur l'input, on display le nom
                    console.log(user_input[2][1])
                    const display_request = document.createElement("p");
                    display_request.innerHTML = String(data[t].name.french);
                    body.appendChild(display_request);
                }

                else if(user_input[2][1] == '--') {             // Si l'input type est vide
                    console.log(user_input[2][1])

                    if(data[t].id == user_input[0][1] || data[t].name.french == user_input[1][1]) {         // On vérifie l'input id et name et on display le nom du pokémon qui correspond
                        const display_request = document.createElement("p");
                        display_request.innerHTML = String(data[t].name.french);
                        body.appendChild(display_request);
                    }
                }
            }
        })
});
