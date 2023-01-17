document.addEventListener("DOMContentLoaded", function() {

const num = document.querySelector("#compteur");
const btn = document.querySelector("#button");

function addone()
{
    btn.addEventListener("click", () => {
        number = parseInt(num.textContent) + 1;
        num.textContent = number;
    })
}

addone();

})
