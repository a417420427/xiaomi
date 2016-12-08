<?php
	$conn = mysqli_connect('localhost', 'root', '', 'xiaomi') ;
	$result = $conn->query('select user from user') ;
	$arr = array() ;
	if($result->num_rows > 0){
		while($row = mysqli_fetch_array($result)){
			array_push($arr,$row['user']) ;	
		} 
	}
	$js = json_encode($arr);
	echo $js ;

?>