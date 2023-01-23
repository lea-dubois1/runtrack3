const link = document.querySelector("#link");

window.addEventListener("resize", () => {

    if (window.innerWidth <= 1280) {

        link.href = "style4.css";
        
    } else if (window.innerWidth <= 1680 && window.innerWidth >= 1280) {
        
        link.href = "style3.css";

    } else if (window.innerWidth <= 1920 && window.innerWidth >= 1680) {
        
        link.href = "style2.css";

    } else {

        link.href = "style1.css";

    }

});