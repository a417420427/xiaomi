<?php
	
	//获取表格数据
	$user = $_GET['user'];
    $pass = $_GET['pass'];
    $phone = $_GET['phone'];
	
	//连接数据库
	$conn = mysqli_connect('localhost', 'root', '', 'xiaomi') ;
	$conn->query('insert into user user value pine22222');
	if($conn->connect_error){
		 die("连接失败:" . $conn->connect_error);
	}
	
	// 获取数据库内容
	$result = $conn->query("select * from user;") ;
	
	
	if($result->num_rows > 0){
		while($row = $result->fetch_assoc()){
			$arr = $row ;
		}
	}
	//获取id 最大值
	$id = $arr['id']+1;
	
	//输入命令
	$sql = 'insert into user(id,user,pass,phone) values('.$id.',"'.$user.'","'.$pass.'",'.$phone.');' ;
	
	//强表单信息输入数据库
	$conn->query($sql) ;
	
	//注册成功
	echo "注册成功！";
	//header('Location: ../login.html') ;
	
	//跳转到登录界面
	echo "<meta http-equiv='refresh' content='5;url=../login.html' >" ;

?>