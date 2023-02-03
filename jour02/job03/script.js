document.addEventListener("DOMContentLoaded", function() {

const num = document.querySelector("#compteur");
const btn = document.querySelector("#button");

function addone()
{
    btn.addEventListener("click", () => {
        // Changer la string en int
        number = parseInt(num.textContent) + 1;

        // Puis changer le contenu du compteur
        num.textContent = number;
    })
}

addone();

})
