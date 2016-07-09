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
    this.addSheet = function(title, content, time) {
        this.sheets.push(new Sheet(title, content, time));
    };
}

var getColumns = function () {
    var colWithSheets = new Column('In Progress', 'in progress', 88);
    colWithSheets.addSheet('first list title', 'first list content');
    colWithSheets.addSheet('second list title', 'second list content');
    colWithSheets.editable = true;

    return [
        colWithSheets
        , new Column('Ready To Test', 'ready to test', 14)
        , new Column('Tested', 'tested', 67)
    ];
};

