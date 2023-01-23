let registerButton = document.querySelector('#register-button');

registerButton.addEventListener('click', (event) => {
    fetch('inscription.php')
        .then((promise) => {
            if(promise.ok){
                return promise.text;
            }
        })
        .then((content) => {
            document.querySelector('form-container').innerHTML = content;
            let registerForm = document.querySelector('#register-form');

            registerForm.addEventListener('submit', (e) => {
                formData = new FormData(registerForm);
                
            })
        })
})