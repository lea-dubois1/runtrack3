<?php

$db_username = 'root';
$db_password = '';

// On essaie de se connecter
try{

    $conn = new PDO('mysql:host=localhost;dbname=utilisateurs;charset=utf8', $db_username, $db_password);

    // On définit le mode d'erreur de PDO sur Exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // echo "You are connected to the database <br>";
}

// On capture les exceptions si une exception est lancée
catch(PDOException $e){

    // et on affiche les informations relatives à celle-ci
    echo "Error : " . $e->getMessage() . "<br>";

}


// Récupérer les data de tous les users
$sql = "SELECT * FROM utilisateurs";
$req = $conn->prepare($sql);
$req->execute();
$tab = $req->fetchAll(PDO::FETCH_ASSOC);
$id = $tab[0]['id'];

// Encoder les data en JSON
$json = json_encode($tab, JSON_PRETTY_PRINT);
// echo 'json :<br>'.PHP_EOL;
// var_dump($json);

// echo '<br>'.PHP_EOL;
// echo 'décodage du json : <br>'.PHP_EOL;
// print_r(json_decode($json, true));
?>


<script>
    const dataJSON = <?php echo $json; ?>;
</script>




<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js" defer></script>
    <title>Document</title>
</head>
<body>

    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Mail</th>
            </tr>
        </thead>

        <tbody id="tableBody">

        </tbody>
    </table>

    <button id="update">Update</button>
</body>
</html>