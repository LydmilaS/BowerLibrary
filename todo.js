
     'use strict';
      angular
        .module('myApp', ['ngAnimate', 'ngDraggable','ngRoute'])
        .controller('myCtrl', function ($scope) {
  
        $scope.list1 = [
          {'title':'Learn AngularJS', 'logWork': '4часа', 'assessment': '5','done':false},         
          {'title': 'Build an app', 'logWork': '', 'assessment': '', 'done':false}
        ];

        $scope.addTodo = function () {
          $scope.list1.push({'title':$scope.newTodo, 'done':false});
          $scope.newTodo = '';
        };

        $scope.remove = function() { 
          var index = $scope.list1.indexOf(this);
          $scope.list1.splice(index, 1);     
        }
    })