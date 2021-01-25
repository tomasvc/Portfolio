<?php

if($_POST) {
    $user_name = "";
    $user_email = "";
    $user_messasge = "";
    $email_title = "";
    $email_body = "<div>";

    $recipient = "tomas.v0147@gmail.com";

    if(isset($_POST['user_name'])) {
        $user_name = filter_var($_POST['user_name'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                            <label><b>User Name:</b></label>&nbsp;</span>".$user_name."</span>
                        </div>";
    }

    if(isset($_POST['user_email'])) {
        $user_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['user_email']);
        $user_email = filter_var($user_email, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
                            <label><b>User Email:</b></label>&nbsp;<span>".$user_email."</span>
                        </div>";
    }

    if(isset($_POST['email_title'])) {
        $email_title = filter_var($user_email, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
                            <label><b>Email title:</b></label>&nbsp;<span>".$email_title."</span>
                        </div>";
    }

    if(isset($_POST['user_message'])) {
        $user_message = htmlspecialchars($_POST['user_message']);
        $email_body .= "<div>
                            <label><b>User message:</b></label>
                            <div>".$user_message."</div>
                        </div>";
    }

    $email_body .= "</div>";

    $headers = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $user_email . "\r\n";

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With');

    if(mail($recipient, $email_title, $email_body, $headers)) {
        echo "<p>Thanks for contacting me, $user_name. I'll reply to you as soon as I can.</p>";
    } else {
        echo "<p>Something went wrong</p>";
    }
}

?>