<?php
	require_once('query/message.php');

	$msg = $_POST;
	$name = $msg['name'];
	$password = $msg['password'];
	$mail = $msg['email'];
	$key = $msg['key'];
	
	if (!checkName($name))
		$error = $err['invalidName'];
	else if (!checkPwd($password))
		$error = $err['invalidPwd'];
	else if (!checkEmail($mail))
		$error = $err['wrongEmailFormat'];
	else if (getUserByName($name))
		$error = $err['sameName'];
	else if (getUserByEmail($mail))
		$error = $err['sameEmail'];
	
	$kmail = checkKey($key);
	if ($kmail == $mail . '&')
		$admin = 1;
	else if ($kmail == $mail)
		$admin = 0;
	else $error = $err['invalidKey'];

	if (!isset($error))
	{
		$pwd_enc = dc_encrypt($password, $key_pwd);

		mysql_query(
			"INSERT INTO `users` (`name`,`mail`,`password`,`reg_time`,`admin`)
			VALUES ('$name','$mail','$pwd_enc',NOW(),$admin)"
		) or $error = $err['insertError'];
	}

	if (isset($error))
		require_once('template/register.php');
	else
	{
		$hint = $tip['finishRegister'];
		require_once('template/login.php');
	}
?>
