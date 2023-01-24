<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <header>
        <nav>
            <ul>
                <li><a href="index.php">Accueil</a></li>
                <li><a href="index.php">Incription</a></li>
                <li><a href="index.php">Connection</a></li>
                <li><a href="index.php">Rechercher</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <form action="">
                <legend>Selectinner une civilité:</legend>
                
                <input type="radio" name="civilite" id="madame" value="madame">
                <label for="madame">Madame</label><br>

                <input type="radio" name="civilite" id="monsieur" value="monsieur">
                <label for="monsieur">Monsieur</label><br>

                <input type="radio" name="civilite" id="autre" value="autre">
                <label for="autre">Autre</label><br><br>

                <input type="text" name="prenom" id="prenom" placeholder="Prénom"><br>

                <input type="text" name="nom" id="nom" placeholder="Nom"><br>

                <input type="text" name="adresse" id="adresse" placeholder="Adresse"><br>

                <input type="email" name="mail" id="mail" placeholder="Email"><br>

                <input type="password" name="password" id="password" placeholder="Mot de passe"><br>

                <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirmez le mot de passe"><br><br>

                <legend>Quelles sont vos passions?</legend>

                <input type="checkbox" name="informatique" id="informatique" value="informatique">
                <label for="informatique">Informatique</label><br>

                <input type="checkbox" name="voyages" id="voyages" value="voyages">
                <label for="voyages">Voyages</label><br>

                <input type="checkbox" name="sport" id="sport" value="sport">
                <label for="sport">Sport</label><br>

                <input type="checkbox" name="lecture" id="lecture" value="lecture">
                <label for="lecture">Lecture</label><br><br>

                <button type="submit">Envoyer</button>
        </form>
    </main>

    <footer>
        <ul>
            <li><a href="index.php">Accueil</a></li>
            <li><a href="index.php">Incription</a></li>
            <li><a href="index.php">Connection</a></li>
            <li><a href="index.php">Rechercher</a></li>
        </ul>
    </footer>
    
</body>
</html>