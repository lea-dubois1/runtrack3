const textarea = document.querySelector("#keylogger");

document.addEventListener("keydown", (e) => {

    // A chaque touche qu'on appuie, on rajoute la lettre au content du text area
    textarea.value = textarea.value + e.key;

});