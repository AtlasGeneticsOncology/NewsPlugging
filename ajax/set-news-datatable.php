<?php

include 'conexion.php';

$title=$_REQUEST['title'];
$description=$_REQUEST['description'];
$content=$_REQUEST['content'];

$insert="INSERT INTO news(title, description, content, created_at, updated_at, idUser) VALUES ('".$title."','".$description."','".$content."','2022-01-18','2022-04-05','4')";

$querydatabase=$connection->query($insert);