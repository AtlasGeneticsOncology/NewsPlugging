<?php

include 'conexion.php';

header('Content-Type: application/json; charset=utf-8');

$query = "SELECT * FROM news";

$news = array();

$querydatabase = $connection->query($query);

$cont=0;

while($row = $querydatabase->fetch_assoc()){
    //$news[]=$row;
    $news[$cont]['idNew']=$row['idNew'];
    $news[$cont]['title']=$row['title'];
    $news[$cont]['description']=$row['description'];
    $news[$cont]['content']=$row['content'];
    $news[$cont]['created_at']=$row['created_at'];
    $news[$cont]['updated_at']=$row['updated_at'];
    $news[$cont]['idUser']=$row['idUser'];
    $news[$cont]['actions']='
    <div class="dropdown show" style="text-align:center;">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Actions
        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Read</a>
            <a class="dropdown-item" href="#">Edit</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Delete</a>
        </div>
  </div>';
    $cont++;
}

echo json_encode($news);

