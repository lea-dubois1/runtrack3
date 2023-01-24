const size1 = window.matchMedia("(max-width: 767px)");
const size2 = window.matchMedia("(min-width: 768px) and (max-width: 1599px)");
const size3 = window.matchMedia("(min-width: 1600px)");
const section = document.querySelector(".section");

window.addEventListener("resize", () => {

    if (window.size1.matches) {

        document.body.style.display = "flex";
        document.body.style.flexDirection = "column";
        section.style.width = "90vw";
        
    } else if (window.size2.matches) {
        
        document.body.style.display = "flex";
        section.style.width = "47vw";

    } else if (window.size3.matches) {
        
        document.body.style.backgroundColor = "#ffca4b";

    } else {

        document.body.style.backgroundColor = "#88c1d0";

    }

});