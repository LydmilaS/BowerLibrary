/**
 * Created by luda on 09.07.16.
 */
var app = angular.module("myApp", []);
app.controller('mainController', ['$scope', function ($scope) {
    $scope.columns = getColumns();
    
}]);