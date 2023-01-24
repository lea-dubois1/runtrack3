const size1 = window.matchMedia("(max-width: 1280px)");
const size2 = window.matchMedia("(min-width: 1280px) and (max-width: 1680px)");
const size3 = window.matchMedia("(min-width: 1680px) and (max-width: 1920px)");

window.addEventListener("resize", () => {

    if (window.size1.matches) {

        document.body.style.backgroundColor = "#ffffff";
        
    } else if (window.size2.matches) {
        
        document.body.style.backgroundColor = "#275fa0";

    } else if (window.size3.matches) {
        
        document.body.style.backgroundColor = "#ffca4b";

    } else {

        document.body.style.backgroundColor = "#88c1d0";

    }

});