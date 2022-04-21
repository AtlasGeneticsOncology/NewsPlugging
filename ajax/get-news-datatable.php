<?php

include 'conexion.php';

header('Content-Type: application/json; charset=utf-8');

$query = "SELECT * FROM news";

$news = array();

$idNew=$_REQUEST['idNew'];

if (!empty($idNew)){
    
    $subquery=" WHERE idNew=".$idNew;

    $query .= $subquery;

}

$query_database = $connection->query($query);

$cont=0;
$numnew=1;

while($row = $query_database->fetch_assoc()){
    $id[$cont]=$row['idNew'];
    $news[$cont]['title']=$row['title'];
    $news[$cont]['description']=$row['description'];
    $news[$cont]['content']=$row['content'];
    $news[$cont]['actions']='
    <div class="dropdown show" style="text-align:center;">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Actions
        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Read</a>
            <a class="dropdown-item" href="#" class="editnewButton" data-toggle="modal" data-target="#EditNewModal" editnewnum="'.$id[$cont].'">Edit</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Delete</a>
        </div>
  </div>';
    $cont++;
    $numnew++;
}


echo json_encode($news);

