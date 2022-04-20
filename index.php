<!DOCTYPE html>
<html lang="en">
<head>
    <title>NewsPlugging</title>
    <meta charset="utf-8"/>

    <!-- DataTable CSS -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.css">

    <!-- Bootstrap Summernote CSS -->
    <link rel="stylesheet" type="text/css" href="news.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.css" rel="stylesheet">

    <!-- Jquery Summernote JS -->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.js"></script>

    
</head>
<body>

    <!-- Table News -->
    <div id="table-container">
        <button type="button" class="btn btn-secondary btn-lg" id="CreateNew" data-toggle="modal" data-target="#CreateNewModal">Create New</button>
        <table id="NewsTable" class="display table table table-striped table-bordered" style="width:100%">
            <thead>
                <tr>
                    <th>title</th>
                    <th>Actions</th>
                </tr>
            </thead>
        </table>
    </div>

    <!-- Create New Modal -->
    <div class="modal fade" id="CreateNewModal" tabindex="-1" role="dialog" aria-labelledby="CreateNewModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="ModalTitle">Create New</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="allform">
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" placeholder="Enter title here..." id="newtitle">
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea class="form-control" rows="3" placeholder="Enter description here..." id="newdescription"></textarea>
                        </div>
                        <div id="Content">
                            <label>Content</label>
                            <div class="summernote" id="newcontent"></div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <input type="submit" class="btn btn-primary" id="savechangesButton" value="Save changes"></input>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit New Modal -->
    <div class="modal fade" id="EditNewModal" tabindex="-1" role="dialog" aria-labelledby="EditNewModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="ModalTitle">Edit New</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="allform">
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" placeholder="Enter title here..." id="editnewtitle">
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea class="form-control" rows="3" placeholder="Enter description here..." id="editnewdescription"></textarea>
                        </div>
                        <div id="ContentEdit">
                            <label>Content</label>
                            <div class="summernote" id="editnewcontent"></div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <input type="submit" class="btn btn-primary" id="editchangesButton" value="Save changes"></input>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap DataTable JS -->
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.js"></script>
    <script type="text/javascript" src="news.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>