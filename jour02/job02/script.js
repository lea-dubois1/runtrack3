document.addEventListener("DOMContentLoaded", function() {

const art = document.querySelector("#citation");
const text = document.createElement("p");
const btn = document.querySelector("#button");

text.textContent = "L'important n'est pas la chute mais l'atterrissage";
art.appendChild(text);

function showhide(element)
{
    btn.addEventListener("click", () => {
        if (window.getComputedStyle(element).display != "none") {
            element.style.display = "none";
            button.textContent = "show";
        } else {
            element.style.display = "block";
            button.textContent = "hide";
        }
    })
}

showhide(art);

})
