const para = document.createElement("p")
const button = document.querySelector("#button")

button.addEventListener("click", () => {
    fetch('expression.txt')
        .then((response) => {
            return response.text();
        })
        .then((result) => {
            console.log(result);
            para.textContent = result;
            document.body.appendChild(para);
        })
        .catch((error) => {
            console.log(error);
        });
});