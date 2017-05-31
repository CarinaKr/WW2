<?php

	$conn=new mysqli("localhost","root","C_sharp3306","rdb-test");
	//mysqli_select_db("rdb-test");
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	//echo "Connected successfully";

	
?>