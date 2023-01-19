const body = document.querySelector("#body");
const button = document.querySelector("#button");

// const para1 = document.createElement("p")
// para1.textContent = "Les logiciels et les cathédrales, c'est un epu la même chose - d'abord on les construits, ensuite on prie.";

$(button).click(() => {
    $(body).html("Les logiciels et les cathédrales, c'est un epu la même chose - d'abord on les construits, ensuite on prie.")
})