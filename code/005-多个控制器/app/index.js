/**
 * Created by dongs on 1/25/2017.
 */

var app = angular.module('myApp', []);
app.controller('firstCtrl', function ($scope) {
    $scope.name = '张三';
    console.log($scope);
});

app.controller('secondCtrl', function($scope){
    $scope.name = '李四';
    console.log($scope);
});