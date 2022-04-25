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
    $(".summernote").summernote('code', '');
    $(".summernote").summernote({focus: true});
    $('#NewsTable').DataTable().ajax.reload();
});

// Edit New function
$(document).ready(function(){
    // Function Click Edit Button
    $('body').on('click', '.dropdown-menu a', function(){
      editnewnum=$(this).attr('editnewnum');
    //   console.log(editnewnum);
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
                success : function(data){
                    // old_data
                    editnewnum=data[0].idNew;
                    old_title=data[0].title;
                    old_description=data[0].description;
                    old_content=data[0].content;

                    // Show old data in Edit Modal
                    $('#editnewcontent').summernote('code', '');
                    $('#editnewcontent').summernote({focus: true});
                    $('#editnewtitle').val(old_title);
                    $('#editnewdescription').val(old_description);
                    $('#editnewcontent').summernote('pasteHTML', old_content);

                    // Delete var editnewnum when close modal
                    $('#closeedit').click(editnewnum,function(){
                        console.log('Cerrar');
                        editnewnum=null;
                        return;
                    });

                    // Update New
                    $('#editchangesButton').click(editnewnum,function(){
                        console.log(editnewnum);

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
                        editnewnum=null;
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
                success : function (data){
                    // delete new data
                    delete_title=data[0].title;

                    // Show delete new data in Delete Modal
                    $('#delete_id').html(delete_title);

                    // Delete New
                    $('#deletechangesButton').click(function(){
                        deletenewnum=data[0].idNew;
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