<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Basic validation
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        http_response_code(400); // Bad Request
        echo "All fields are required. Please fill out the form completely.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400); // Bad Request
        echo "Invalid email address. Please enter a valid email.";
        exit;
    }

    $to = "andreibilanicola@gmail.com"; // Replace with your email address
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $emailBody = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

    // Attempt to send the email
    if (mail($to, $subject, $emailBody, $headers)) {
        echo "Message sent successfully!";
    } else {
        http_response_code(500); // Internal Server Error
        echo "Failed to send the email. Please try again later.";
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo "Invalid request method. Please submit the form using POST.";
}
?>
