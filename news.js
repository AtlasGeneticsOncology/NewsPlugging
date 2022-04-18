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
        {data : "idUser"}
    ]
});
