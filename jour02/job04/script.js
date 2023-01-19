const textarea = document.querySelector("#keylogger");

document.addEventListener("keydown", (e) => {

    textarea.value = textarea.value + e.key;

});