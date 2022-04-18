<!DOCTYPE html>
<html lang="en">
<head>
    <title>NewsPlugging</title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.css">
    <link rel="stylesheet" type="text/css" href="news.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    
</head>
<body onload="load()">
    <div id="table-container">
        <table id="NewsTable" class="display" style="width:100%">
            <thead>
                <tr>
                    <th>idNew</th>
                    <th>title</th>
                    <th>description</th>
                    <th>content</th>
                    <th>created_at</th>
                    <th>updated_at</th>
                    <th>idUser</th>
                </tr>
            </thead>
        </table>
    </div>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.js"></script>
    <script type="text/javascript" src="news.js"></script>
</body>

</html>