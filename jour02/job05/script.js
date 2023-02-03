// On fixe la largeur du footer sur 0px pour le rendre invisible au chargement de la page
document.querySelector("footer").style.width = "0px";

window.onload = () => {         // Commencer après que la page entière ainsi que tous ses éléments on été chargés
        
    // On ecoute le scroll
    window.addEventListener("scroll",() => {
        // On calcule la hauteur du document
        let hauteur = document.documentElement.scrollHeight - window.innerHeight;
        // On calcule la largeur de la fenêtre
        let largeur = document.documentElement.clientWidth;
        // On récupère la position verticale
        let position = window.scrollY;
        // On calcul la largeur de la barre
        let barre = position / hauteur * largeur;

        // On modifie la largeur du footer
        document.querySelector("footer").style.width = barre+"px";

        console.log(position);
    });
};
