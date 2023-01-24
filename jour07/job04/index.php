<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Document</title>
</head>
<body>

    <header class="bg-lime-200 p-5">
        <nav>
            <ul class="flex justify-around">
                <li><a href="index.php">Accueil</a></li>
                <li><a href="index.php">Incription</a></li>
                <li><a href="index.php">Connection</a></li>
                <li><a href="index.php">Rechercher</a></li>
            </ul>
        </nav>
    </header>

    <main class="bg-lime-50 flex justify-center">

        <form action="">

            <div class="gap-3">

                <legend class="my-3 mt-7">Selectinner une civilité:</legend>
                
                <input type="radio" name="civilite" id="madame" value="madame">
                <label for="madame">Madame</label><br>

                <input type="radio" name="civilite" id="monsieur" value="monsieur">
                <label for="monsieur">Monsieur</label><br>

                <input type="radio" name="civilite" id="autre" value="autre">
                <label for="autre">Autre</label><br><br>

            </div>

            <div>

                <input type="text" name="prenom" id="prenom" placeholder="Prénom" class="mb-3"><br>

                <input type="text" name="nom" id="nom" placeholder="Nom" class="mb-3"><br>

                <input type="text" name="adresse" id="adresse" placeholder="Adresse" class="mb-3"><br>

                <input type="email" name="mail" id="mail" placeholder="Email" class="mb-3"><br>

                <input type="password" name="password" id="password" placeholder="Mot de passe" class="mb-3"><br>

                <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirmez mot de passe" class="mb-3"><br><br>

            </div>

            <div class="gap-3">

                <legend class="my-3">Quelles sont vos passions?</legend>

                <input type="checkbox" name="informatique" id="informatique" value="informatique">
                <label for="informatique">Informatique</label><br>

                <input type="checkbox" name="voyages" id="voyages" value="voyages">
                <label for="voyages">Voyages</label><br>

                <input type="checkbox" name="sport" id="sport" value="sport">
                <label for="sport">Sport</label><br>

                <input type="checkbox" name="lecture" id="lecture" value="lecture">
                <label for="lecture">Lecture</label><br><br>

            </div>

            <div class="flex space-x-2 justify-center">
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-lime-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-8"
                >Click me</button>
            </div>

        </form>

    </main>

    <footer class="bg-lime-900 p-5">
        <ul class="flex justify-around">
            <li><a href="index.php">Accueil</a></li>
            <li><a href="index.php">Incription</a></li>
            <li><a href="index.php">Connection</a></li>
            <li><a href="index.php">Rechercher</a></li>
        </ul>
    </footer>
    
</body>
</html>