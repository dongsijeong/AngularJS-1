/**
 * Created by dongs on 1/25/2017.
 */

var app = angular.module('myApp', []);
app.controller('firstCtrl', function ($scope) {
    $scope.name = '张三';
    $scope.data = {
        name: "李四",
        count: 10
    };
    $scope.count = 0;

    // 监听一个model 当一个model每次改变时 都会触发第2个函数
    $scope.$watch('name', function(newValue, oldValue){
        console.log(newValue,oldValue);
        ++$scope.count;

        if($scope.count > 20){
            $scope.name = 'name变化大于5次了！';
        }
    });

    $scope.$watch('data', function(){

    }, true);

});