<?php
    require "php-mailer/Exception.php";
    require "php-mailer/PHPMailer.php";
    require "php-mailer/SMTP.php";

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

   
   // Valores enviados desde el formulario  
    $name = $_POST["name"];
    var_dump($name);
    $phone = $_POST["phone"];
    var_dump($phone);
    $email = $_POST["email"];
    var_dump($email);
    $message = $_POST["message"];
    var_dump($message);

    // Datos de la cuenta de correo utilizada para enviar vía SMTP
    $smtpHost = "c1532371.ferozo.com";  // Dominio alternativo brindado en el email de alta 
    $smtpUsuario = "contacto@clasesdeguitarraconfacu.com";  // Mi cuenta de correo
    $smtpClave = "Elfacucarbonero1@";  // Mi contraseña

    // Email donde se enviaran los datos cargados en el formulario de contacto
    $reciever = "contacto@clasesdeguitarraconfacu.com";

    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->Port = 465; 
    $mail->SMTPSecure = 'ssl';
    $mail->IsHTML(true); 
    $mail->CharSet = "utf-8";


    // VALORES A MODIFICAR //
    $mail->Host = $smtpHost; 
    $mail->Username = $smtpUsuario; 
    $mail->Password = $smtpClave;

    $mail->From = "contacto@clasesdeguitarraconfacu.com"; // Email desde donde envío el correo.
    $mail->FromName = $name;
    $mail->AddAddress($reciever); // Esta es la dirección a donde enviamos los datos del formulario

    // Incluimos la dirección de correo del remitente en el cuerpo del mensaje
    $completeMessage = "Correo del remitente: " . $email . "\n" . "Teléfono: " . $phone . "\n" . $message;

    $mail->Subject = "CORREOOOOOOOOO"; // Este es el titulo del email.
    $mail->Body = "{$completeMessage} <br /><br />Atentamente: {$name}<br />"; // Texto del email en formato HTML
    $mail->AltBody = "{$completeMessage} \n\n Atentamente: {$name}"; // Texto sin formato HTML


    // FIN - VALORES A MODIFICAR //

    $estadoEnvio = $mail->Send(); 

    if($estadoEnvio){
        echo "<h4>El correo fue enviado correctamente.</h4>";
    } else {
        echo "Ocurrió un error inesperado. " . $mail->ErrorInfo; 
    }

?>