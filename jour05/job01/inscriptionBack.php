<?php

$db_username = 'root';
$db_password = '';
try{
    $conn = new PDO('mysql:host=localhost;dbname=utilisateurs;charset=utf8', $db_username, $db_password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
    echo "Error : " . $e->getMessage();
}



$error = "";
$errorPassword = "";
$errorEmail = "";
$errorNames = "";

$password = $_POST['password'];
$email = $_POST['email'];
$firstname = $_POST['prenom'];
$lastname = $_POST['nom'];
$passwordConfirm = $_POST['passwordConfirm'];

$messages = [];

$sql = "SELECT * FROM utilisateurs WHERE email=:email";

// Check if a line with the same login exist in our Database.
$req = $conn->prepare($sql);
$req->execute(array(':email' => $_POST['email']));
$row = $req->rowCount();

if($row <= 0) {     // If the login do not exist in the Database, we check the passwords

    if(strlen($password) >= 5 && preg_match("/@/", $email) && preg_match("/\./", $email) && strlen($firstname) >= 2 && !preg_match("[\W]", $firstname) && strlen($lastname) >= 2 && !preg_match("[\W]", $lastname)) {

        if($password == $passwordConfirm) {
            
            // Cripting the password
            $hash = password_hash($password, PASSWORD_DEFAULT);

            // Cripting the password
            $hash = password_hash($password, PASSWORD_DEFAULT);
            
            // Add data to the database 
            $sql = "INSERT INTO `utilisateurs` (`password`, `email`, `prenom`, `nom`) VALUES (:pass, :email, :firstname, :lastname)";
            $req = $conn->prepare($sql);
            $req->execute(array(':pass' => $hash,
                                ':email' => $email,
                                ':firstname' => $firstname,
                                ':lastname' => $lastname));

            $messages['okReg'] = 'Your account is now created and you can login';

        }else{ $messages['errorPassMatch'] = 'The passwords do not match'; }

    }else{

        // Password errors
        if(strlen($password) < 5) {

            $messages['errorPassLong'] = "Your password must contain at least 5 caracters";

        }

        // Email errors
        if(!preg_match("/@/", $email) || !preg_match("/\./", $email)) {

            $messages['errorEmailLet'] = "Your email is not valid. It must contain '@' and '.'";

        }

        // First and last name errors
        if(strlen($firstname) < 2 || preg_match("[\W]", $firstname) || strlen($lastname) < 2 || preg_match("[\W]", $lastname)) {

            $messages['errorNames'] = "Your first and last names must contain at least 2 caracters and no specials caracters";

        }

    }
    
}else{ $messages['errorEmailExist'] = 'The email already exist. Please choose another one'; }

$json = json_encode($messages, JSON_PRETTY_PRINT);
echo $json;

?>