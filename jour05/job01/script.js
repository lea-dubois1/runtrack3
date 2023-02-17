const registerButton = document.getElementById('register-submit');
const inscriptionButton = document.getElementById('switchInscription');
const connexionButton = document.getElementById('switchConnexion');

//Si on click sur le boutton inscription sur la home page
inscriptionButton.addEventListener('click', ()=>{

    //call the php inscription file
    fetch('inscription.php')
    .then((promise)=>{
        return promise.text();
    })
    .then((content)=>{
        form = document.getElementById('form');
        form.innerHTML = content;

        registerForm.addEventListener('submit', (e) => {

            e.preventDefault();
            const formData = new FormData(signinForm);

            console.log(formData)

            formData.forEach((value, key) => {
                console.log(key + ':' + value);
            });

            fetch("inscriptionBack.php", {
                method: "POST",
                body: formData,
            })
            .then(response => response.text())
            .then(response => console.log(response))
            .catch(error => alert("Erreur : " + error));
        
        })
    })

})


connexionButton.addEventListener('click', ()=>{


    fetch('connexion.php')
    .then((promise)=>{
        return promise.text();
    })
    .then((content)=>{
        form = document.getElementById('form');
        form.innerHTML = content;

        signinForm.addEventListener('submit', (e) => {

            e.preventDefault();
            const formData = new FormData(signinForm);

            console.log(formData)

            formData.forEach((value, key) => {
                console.log(key + ':' + value);
            });

            fetch("connexionBack.php", {
                method: "POST",
                body: formData,
            })
            .then(response => {
                return response.json();
            })
            .then(message => {
                const dataJSON = message;
                console.log(dataJSON);

                if(dataJSON['errorPass']) {
                    const errorPassDiv = document.getElementById('errorPass');
                    const paraErrorPass = document.createElement("p");
                    paraErrorPass.textContent = dataJSON['errorPass'];
                    errorPassDiv.appendChild(paraErrorPass);
                }else if(dataJSON['errorEmail']) {
                    const errorEmailDiv = document.getElementById('errorEmail');
                    const paraErrorEmail = document.createElement("p");
                    paraErrorEmail.textContent = dataJSON['errorEmail'];
                    errorEmailDiv.appendChild(paraErrorEmail);
                }
            })
            .catch(error => alert("Error : " + error));
        
        })

    })

})