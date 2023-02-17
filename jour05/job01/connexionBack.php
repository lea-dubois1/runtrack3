<?php

$messages = [];

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
    echo "Error : " . $e->getMessage();

}

$sql = "SELECT * FROM utilisateurs WHERE email=:email";
        
// Check if the username is already present or not in our Database.
$req = $conn->prepare($sql);
$req->execute(array(':email' => $_POST['email']));
$row = $req->rowCount();

if($row == 1){    // If the email exist in the data base, continue

    $tab = $req->fetch(PDO::FETCH_ASSOC);
    $dataPass = $tab['password'];
    $id = $tab['id'];

    if(password_verify($_POST['password'],$dataPass)){    // Check if the password existe in the database and decript it

        $_SESSION['id'] = $id;
        $_SESSION['password'] = $dataPass;
        $_SESSION['email'] = $tab['email'];
        $_SESSION['firstname'] = $tab['firstname'];
        $_SESSION['lastname'] = $tab['lastname'];

        $okConn = 'You\'re connected';
        $messages['okConn'] = $okConn;

        header('Location: index.php');

    }else{    // If the password do not match, error
        $errorPass = 'Wrong password';
        $messages['errorPass'] = $errorPass;
    }
}else{    // If the login do not exist, error
    $errorEmail = 'Email unknown.';
    $messages['errorEmail'] = $errorEmail;

}

$json = json_encode($messages, JSON_PRETTY_PRINT);
echo $json;


?>