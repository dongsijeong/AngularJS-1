/**
 * Created by dongs on 1/25/2017.
 */

var app = angular.module('myApp', []);
app.factory('Data', function () {
    //this.$get = function(){}
    return {
        message: '共享数据'
    };
});
app.controller('firstCtrl', function ($scope, Data) {
    $scope.data = Data;
});

app.controller('secondCtrl', function($scope, Data){
    $scope.Data = Data;
});