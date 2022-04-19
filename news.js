$('#NewsTable').DataTable( {
    ajax: {
        url : 'ajax/get-news-datatable.php',
        type : 'GET',
        dataType : 'json',
        dataSrc:"",
        error : function (data, error){
            console.log("Problema");
        },
        complete :  function (data){
            console.log("Peticion realizada");
        }
    },
    columns: [
        {data : "idNew"},
        {data : "title"},
        {data : "description"},
        {data : "content"},
        {data : "created_at"},
        {data : "updated_at"},
        {data : "idUser"},
        {data : "actions"}
    ]
});

$(document).ready(function() {
    $('#summernote').summernote({
        placeholder: 'Enter content here...',
        tabsize: 2,
        height: 200,
        dialogsInBody: true,
        tooltip: false
    });
});

$('#savechangesButton').click(function(){
    var title=$('#newtitle').val();
    var description=$('#newdescription').val();
    $.ajax({
        url : 'ajax/set-news-datatable.php?title='+title+'&description='+description,
        type : 'GET',
        dataType : 'json',
        dataSrc:"",
        error : function (data, error){
            console.log("Problema");
        },
        complete :  function (data){
            console.log("Peticion realizada");
        }
    })

})