<?php

$messages = [];

$db_username = 'root';
$db_password = '';
try{
    $conn = new PDO('mysql:host=localhost;dbname=utilisateurs;charset=utf8', $db_username, $db_password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
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
        $_SESSION['firstname'] = $tab['prenom'];
        $_SESSION['lastname'] = $tab['nom'];

        $messages['okConn'] = "You're connected";

    }else{    // If the password do not match, error
        $messages['errorPass'] = 'Wrong password';
    }
}else{    // If the login do not exist, error
    $messages['errorEmail'] = 'Email unknown';

}

$json = json_encode($messages, JSON_PRETTY_PRINT);
echo $json;


?>