/**
 * Created by luda on 09.07.16.
 */
function Sheet(title, content, time) {
    this.title = title;
    this.content = content;
    this.time = time;
    this.sheetEditable = false;
}

function Column(title) {
    this.title = title;
    this.sheets = [];
    this.editable = false;
    this.visibleSheets = true;
    this.addSheet = function(title, content, time) {
        this.sheets.push(new Sheet(title, content, time));
    };

    this.removeAllSheets = function () {
        var confirmDelete = window.confirm('Remove all?');
        if(confirmDelete){
            this.sheets = [];
        }
    }
}

var getColumns = function () {
    var colWithSheets = new Column('In Progress');
    colWithSheets.addSheet('first list title', 'first list content', 25);
    colWithSheets.addSheet('second list title', 'second list content', 87);
    colWithSheets.editable = true;

    return [
        colWithSheets
        , new Column('Ready To Test')
        , new Column('Tested')
    ];
};

var getTrash = function () {
    var trash = new Column('Trash');
    return trash;
};