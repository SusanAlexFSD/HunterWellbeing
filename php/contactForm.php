<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require '../vendor/autoload.php'; // Adjust path if necessary

$mail = new PHPMailer(true);

$mail->SMTPDebug = 2; // Enable verbose debug output
$mail->Debugoutput = 'html'; // Output errors in a readable format

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $service = htmlspecialchars($_POST['service']);
    $message = htmlspecialchars($_POST['message']);

    // SMTP configuration
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.office365.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'hunterwellbeing@outlook.com'; // Replace with your Outlook email
        $mail->Password = 'your-app-password-here'; // Use the app password here
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email settings
        $mail->setFrom('hunterwellbeing@outlook.com', 'Kerry');
        $mail->addAddress('hunterwellbeing@outlook.com', 'Hunter Wellbeing');
        $mail->addReplyTo($email, $name);

        $mail->isHTML(false);
        $mail->Subject = "Contact Form Submission: $service";
        $mail->Body = "Name: $name\nPhone: $phone\nEmail: $email\nService: $service\nMessage:\n$message";

        $mail->send();
        echo "Thank you for contacting us! Your message has been sent.";
    } catch (Exception $e) {
        echo "Error: Unable to send email. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Error: Invalid request method.";
}

