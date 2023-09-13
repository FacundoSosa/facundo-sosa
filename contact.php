<?php
/* echo "console.log('Anda')";
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require "./php-mailer/Exception.php";
    require "./php-mailer/PHPMailer.php";
    require "./php-mailer/SMTP.php"; */

    
    $reciever = "facundososa676@gmail.com";
    
    $name = $_POST["name"];
    $subject = "CORREOOOOOOOOO";
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $header = "Te llegó un correo de la web rey";
    $completeMessage = $message . "\nAtentamente: " . $nombre . $email . $phone;
    
    /* $oMail = new PHPMailer();
    $oMail->isSMTP();
    $oMail->Host="smtp-relay.gmail.com";
    $oMail->Port="25";
    $oMail->SMTPSecure="tls";
    $oMail->SMTPAuth=true;
    $oMail->Username=$reciever;
    $oMail->Password="elfacucarbonero";
    $oMail->setFrom($email, $name);
    $oMail->msgHTML($message);
    $oMail->addAddress($reciever);

    if(!$oMail->send())
        echo $oMail->ErrorInfo; */

    mail($reciever, $subject, $completeMessage, $header)

?>