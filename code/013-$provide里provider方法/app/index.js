/**
 * Created by dongs on 1/25/2017.
 */

var app = angular.module('myApp', [], function ($provide) {

    //自定义服务
    $provide.provider('CustomService', function () {
        this.$get = function () {
            return {
                message: 'CustomService Message'
            }
        }
    });
});

app.controller('firstCtrl', function ($scope, CustomService) {
    console.log(CustomService);
});