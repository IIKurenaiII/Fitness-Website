<?php
$recipientEmail = 'fetko.yurii@student.uzhnu.edu.ua'; 
$emailSubject = $_POST['emailSubject']; 
$emailBody = $_POST['emailBody']; 

$headers = "From: fetkoura@gmail.com\r\n";
$headers .= "Reply-To: fetkoura@gmail.com\r\n";
$headers .= "Content-Type: text/plain;charset=utf-8\r\n";

if (mail($recipientEmail, $emailSubject, $emailBody, $headers)) {
    echo "Лист відправлено успішно";
} else {
    echo "Не вдалося відправити лист";
}
?>
 