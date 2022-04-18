<?php

include 'conexion.php';

header('Content-Type: application/json; charset=utf-8');

$query = "SELECT * FROM news";

$news = array();

$querydatabase = $connection->query($query);

while($row = $querydatabase->fetch_assoc()){
    $news[]=$row;
}

echo json_encode($news);
