<?php

// if(isset($_POST['action']) && !empty($_POST['action'])) {

//     echo 'Пример 1 - передача завершилась успешно';

// }
// else{
//     echo 'Пример 2 - передача завершилась провалом';

// }
$mailTo = ' krlrmlv@yandex.ru ';

//username, knife_n, message
$phone = htmlspecialchars( strip_tags( $_POST['phone'] ) );//Телефон
$namme = htmlspecialchars( strip_tags( $_POST['namme'] ) );//Имя или e-mail
$message = htmlspecialchars( strip_tags( $_POST['message'] ) );//сообщение
$utmm = htmlspecialchars( strip_tags( $_POST['utmm'] ) );//utm



//Не отправлять если тест
if($phone=='+7 (000) 000-0000' || $phone=='+7 (000) 000-0001' || $detail=='test'){
    return;
}

if(isset($_POST['phone'] ))
{
     if($phone==''){$phone='Телефон : '.$value;}
     else{$phone='Телефон : '.$phone.$value;}     

}
else{$phone = '';}


if(isset($_POST['namme'] ))
{
     if($namme==''){$namme=' <br><br> Имя/e-mail : '.$value;}
     else{$namme=' <br><br> Имя/e-mail : '.$namme.$value;}     

}
else{$namme = '';}


if(isset($_POST['message'] ))
{
     if($message==''){$message=' <br><br> Сообщение : '.$value;}
     else{$message=' <br><br> Сообщение : '.$message.$value;}     

}
else{$message = '';}


if(isset($utmm))
{
    $utmm='<br><br> UTM : '.$utmm;       
}
else{$utmm = '';}

/* if(!(isset($utmm))){
    $utmm='';
}
 */


$sender = base64_encode('+ Заявка с LP Цветочница');
$sender = "=?utf-8?B?{$sender}?=";


$headers = "From: {$sender} <cv@cvetochnica.ru>\r\n".
'Content-Type: text/html; charset=utf-8
Content-Transfer-Encoding: base64
X-Mailer: OrderForm (PHP)';

$subject = base64_encode('+ Заявка с LP Цветочница');
$subject = "=?utf-8?B?{$subject}?=";

if( !empty( $body ) )
    $body = '' . "\r\n" . $body;

/* Делает Имя в скобках
if( !empty( $username ) )
    $username = ' (' . $username . ')';
*/

$body = base64_encode(  $phone . $namme . $message );


    // header("Location: http://kvarky.ru/promo/2019/thank.html");


if( mail($mailTo, $subject, $body, $headers) )
{

    // echo 'Пример 1 - передача завершилась успешно';
    echo '1';
    
//      if($nameform == "formTwo-price")
//      {echo '<script type="text/javascript">window.open("price_no.txt");</script>';
//      }

    // header("Location: http://kvarky.ru/promo/2019/thank.html");
}
else
{
    
    echo '0';
//  header("Location: sendemail.php?send_message=not_ok");
}


?>