async function fetchData(tableau, cle) {
    // On attends que le fetch se termine pour le stocker dans une variable
    const response = await fetch(tableau);
    const data = await response.json();
    console.log(data[cle])
}
  
fetchData('tableau.json', 'name');








registerButton.addEventListener("click", (event) => {
    fetch('inscription.php')
        .then((promise) => {
            console.log(promise.text);
            return promise.text();        // HTML est un texte mais on peut mettre JSON si on récupère un fichier JSON
        })
        .then((content) => {
            document.querySelector('form-container').innerHTML = content;
            let registerForm = document.querySelector('#register-form');


            registerForm.addEventListener('submit', (e) => {
                formData = new FormData(registerForm);

                fetch(inscription.php, {
                    'Content-Type':'multipart-form-data'
                }
            )

        })
    })
})