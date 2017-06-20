<?php


	$conn=new mysqli("pstud0.mt.haw-hamburg.de","aca083","aca083","aca083");
	//mysqli_select_db("rdb-test");
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	//echo "Connected successfully";

	
?>