/**
 * Created by luda on 09.07.16.
 */
app.directive("listSheet", function() {
    return {
        templateUrl : "sheet.template.html",
        scope: {
            sheetData: '='
        }
    }
});