/**
 * Created by dongs on 1/25/2017.
 */

var app = angular.module('myApp', []);
app.controller('firstCtrl', function ($scope) {
    $scope.date = new Date();
    /*setInterval(function(){
        // 这里虽然变 但是并没有触发 脏检查
        $scope.date = new Date();
        var i = 0;
        console.log('setInterval start: ', i);
    }, 1000);*/

    setInterval(function(){
        $scope.$apply(function(){
            $scope.date = new Date();
            //....会去触发脏检查
        });
    }, 1000);
});
