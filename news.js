// DataTable function
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
        {data : "title"},
        {data : "actions"}
    ]
});
// Summernote function initial
$(document).ready(function() {
    $('.summernote').summernote({
        placeholder: 'Enter content here...',
        tabsize: 2,
        height: 200,
        dialogsInBody: true,
        tooltip: false
    });
});

// Create New function
$('#savechangesButton').click(function(){
    var title=$('#newtitle').val();
    var description=$('#newdescription').val();
    var content=$('#newcontent').summernote('code');
    console.log(content);
    $.ajax({
        url : 'ajax/set-news-datatable.php?title='+title+'&description='+description+'&content='+content,
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
    $('#CreateNewModal').modal('hide');
    $('#newtitle').val('');
    $('#newdescription').val('');
    $('#NewsTable').DataTable().ajax.reload();
});

// Edit New function
$('#editnewButton').click(function(){

})