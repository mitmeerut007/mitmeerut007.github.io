<?php
session_start();
include 'database.php';

 $username=$_POST['username'];
 $email=$_POST['email'];
 $contact=$_POST['contact'];
$message=$_POST['message'];

$sql="INSERT INTO myuser(Username, Email, Contact, Message) VALUES ('$username','$email','$contact','$message')";

$result=mysqli_query($conn, $sql);

if($result)
    {
        $_SESSION['status'] = "We will contact you soon..!";
        header("Location: index.html");
    }
    else
    {
        $_SESSION['status'] = "Date values Inserting Failed";
        header("Location: index.html");
    }

 
?>