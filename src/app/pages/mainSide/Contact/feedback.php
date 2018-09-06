
<?php
/* Set e-mail recipient */
$to  = "mahmoud.must@hotmail.com";

/* Check all form inputs using check_input function */
$First_Name = check_input( $_POST["Name"] );
$Email    = check_input($_POST["Mail"]);
$PhoneNumber  = check_input($_POST["PhoneNum"]);
$Enquiry = check_input($_POST["Message"]);
$subject = " Contact  for MahmoudIraQi " ;
//qsuburb

/* If e-mail is not valid show error message */
//if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
//{
//    show_error("E-mail address not valid");
//}

/* If URL is not valid set $website to empty */
//if (!preg_match("/^(https?:\/\/+[\w\-]+\.[\w\-]+)/i", $website))
//{
//    $website = '';
//}

/* Let's prepare the message for the e-mail */
$message = "Hello!

Your contact form has been submitted by:

Name: $First_Name
Address: $Email
Phone Number: $PhoneNumber
Enquiry: $Enquiry



End of message
";

/* Send the message using mail() function */
//mail($to, $yourname,$PhoneNumber,$website, $message);
mail($to , $subject , $message);

/* Redirect visitor to the thank you page */
echo(Thanks);
//exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>