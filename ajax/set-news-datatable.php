<?php

include 'conexion.php';

$edit_new_num=$_REQUEST['editnewnum'];

if(empty($edit_new_num)){
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
}
else{

    //Edit News

    $edit_title=$_REQUEST['edittitle'];
    $edit_description=$_REQUEST['editdescription'];
    $edit_content=$_REQUEST['editcontent'];
    $updated_at_query="SELECT NOW()";

    $updated_at=$connection->query($updated_at_query);

    while($result_updated_at=$updated_at->fetch_assoc()){
        $date_updated_at=$result_updated_at['NOW()'];
    }


    $update="UPDATE news SET title='".$edit_title."',description='".$edit_description."',content='".$edit_content."',updated_at='".$date_updated_at."' WHERE idNew='".$edit_new_num."'";

    echo($update);

    $queryeditdatabase=$connection->query($update);
}