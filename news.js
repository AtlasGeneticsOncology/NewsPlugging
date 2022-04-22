// DataTable function
$('#NewsTable').DataTable( {
    ajax: {
        url : 'ajax/get-news-datatable.php',
        type : 'GET',
        dataType : 'json',
        dataSrc:"",
        error : function (data, error){
            console.log("Error Datatable");
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
    // Inputs values
    var title=$('#newtitle').val();
    var description=$('#newdescription').val();
    var content=$('#newcontent').summernote('code');
    $.ajax({
        url : 'ajax/set-news-datatable.php?title='+title+'&description='+description+'&content='+content,
        type : 'GET',
        dataType : 'json',
        dataSrc:"",
        error : function (){
            console.log("Error Create New");
        }
    })
    // Close Modal, Clean Inputs and Reload Datatable
    $('#CreateNewModal').modal('hide');
    $('#newtitle').val('');
    $('#newdescription').val('');
    $("#newcontent").summernote('code', '');
    $("#newcontent").summernote({focus: true});
    $('#NewsTable').DataTable().ajax.reload();
});

// Edit New function
$(document).ready(function(){
    // Function Click Edit Button
    $('body').on('click', '.dropdown-menu a', function(){
      editnewnum=$(this).attr('editnewnum');
        if(editnewnum==undefined){
            return;
        }
        else{
            $.ajax({
                url : 'ajax/get-news-datatable.php?idNew='+editnewnum,
                type : 'GET',
                dataType : 'json',
                dataSrc:"",
                error : function (){
                    console.log("Error Get New Data");
                },
                complete :  function (data){
                    // old_data
                    old_title=data.responseJSON[0].title;
                    old_description=data.responseJSON[0].description;
                    old_content=data.responseJSON[0].content;

                    // Show old data in Edit Modal
                    $("#editnewcontent").summernote('code', '');
                    $("#editnewcontent").summernote({focus: true});
                    $('#editnewtitle').val(old_title);
                    $('#editnewdescription').val(old_description);
                    $('#editnewcontent').summernote('pasteHTML', old_content);

                    // Update New
                    $('#editchangesButton').click(function(){
                        editnewnum=data.responseJSON[0].idNew;

                        var edit_title=$('#editnewtitle').val();
                        var edit_description=$('#editnewdescription').val();
                        var edit_content=$('#editnewcontent').summernote('code');
                        $.ajax({
                            url : 'ajax/set-news-datatable.php?editnewnum='+editnewnum+'&edittitle='+edit_title+'&editdescription='+edit_description+'&editcontent='+edit_content,
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
                        // Close Edit Modal and Reload Datatable
                        $('#EditNewModal').modal('hide');
                        $('#NewsTable').DataTable().ajax.reload();
                    });
                }
            }) 
      }
    })
  })

// Delete New function

$(document).ready(function(){
    // Function Click Delete Button
    $('body').on('click', '.dropdown-menu a', function(){
      deletenewnum=$(this).attr('deletenewnum');
        if(deletenewnum==undefined){
            return;
        }
        else{
            $.ajax({
                url : 'ajax/get-news-datatable.php?idNew='+deletenewnum,
                type : 'GET',
                dataType : 'json',
                dataSrc:"",
                error : function (){
                    console.log("Error Get New Data");
                },
                complete :  function (data){
                    // delete new data
                    delete_title=data.responseJSON[0].title;

                    // Show delete new data in Delete Modal
                    $('#delete_id').html(delete_title);

                    // Delete New
                    $('#deletechangesButton').click(function(){
                        deletenewnum=data.responseJSON[0].idNew;
                        $.ajax({
                            url : 'ajax/set-news-datatable.php?deletenewnum='+deletenewnum,
                            type : 'GET',
                            dataType : 'json',
                            dataSrc:"",
                            error : function (){
                                console.log("Error Delete New");
                            },
                            complete :  function (data){
                                console.log("Peticion realizada");
                            }
                        })
                        // Close Delete Modal and Reload Datatable
                        $('#DeleteNewModal').modal('hide');
                        $('#NewsTable').DataTable().ajax.reload();
                    });
                }
            }) 
      }
    })
  })