
'use strict';
angular
    .module('myApp', ['ngAnimate', 'dndLists','ngRoute'])
    .controller('myCtrl', ['$scope', function ($scope) {


        $scope.list = [
            {'title':'Learn AngularJS', 'logWork': '4часа', 'assessment': '5','done':false},
            {'title': 'Build an app', 'logWork': '', 'assessment': '', 'done':false}
        ];

        
        $scope.addTodo = function () {
            $scope.list.push({'title':$scope.newTodo, 'done':false});
            $scope.newTodo = '';
        };

        $scope.remove = function() {
            $scope.list.splice(this.$index, 1);
        }

    }]);