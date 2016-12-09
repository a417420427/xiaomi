<?php
	$conn = mysqli_connect('localhost', 'root', '', 'xiaomi') ;
	$result = $conn->query('select * from user') ;
	$user = array() ;
	$pass = array() ;
	if($result->num_rows > 0){
		while($row = mysqli_fetch_array($result)){
			array_push($user,$row['user']) ;	
			array_push($pass,$row['pass']) ;
		} 
	}
	$userS = json_encode($user);
	$passS = json_encode($pass);
	echo "getUser($userS,$passS)";

?>