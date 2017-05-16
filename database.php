<?php

	$conn=new mysqli(<servername>,<user>,,<passwort>,<datenbank name>);
	//mysqli_select_db("rdb-test");
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	//echo "Connected successfully";

	
?>