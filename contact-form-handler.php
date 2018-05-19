<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $mailTo = "jake.long112358@gmail.com";
  $headers = "From: ".$visitor_email;
  $body = "You have recieved an e-mail from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $body, $headers);
  header("Location: index.php?mailsend");
}

?>
