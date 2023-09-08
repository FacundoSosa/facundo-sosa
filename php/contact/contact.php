<?php
    $reciever = "facundososa676@gmail.com";

    $name = $_POST["name"];
    $subject = "CORREOOOOOOOOO";
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $header = "Te llegó un correo de la web rey";
    $completeMessage = $message . "\nAtentamente: " . $nombre;

    mail($reciever, $subject, $completeMessage, $header);

    echo "<script>alert(Tu mensaje fue enviado exitosamente!)</script>";
    echo "<script>setTimeout(\"location.href="index.html"\", 1000)</script>";
?>