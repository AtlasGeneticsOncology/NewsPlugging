<?php

include 'conexion.php';

$title=$_REQUEST['title'];
$description=$_REQUEST['description'];
$content=$_REQUEST['content'];
$created_at_query="SELECT NOW()";

$created_at=$connection->query($created_at_query);

while($result_created_at=$created_at->fetch_assoc()){
    $date_created_at=$result_created_at['NOW()'];
}


$insert="INSERT INTO news(title, description, content, created_at, idUser) VALUES ('".$title."','".$description."','".$content."','".$date_created_at."','4')";

$querydatabase=$connection->query($insert);