document.addEventListener("DOMContentLoaded", function() {

const btn = document.querySelector("#button")
const art = document.querySelector("#citation")

function citation(art)
{
    btn.addEventListener("click", () => {
        console.log(art.textContent)
    })
}

citation(art)

})
