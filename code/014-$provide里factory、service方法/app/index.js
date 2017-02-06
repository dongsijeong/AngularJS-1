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

    //自定义factory
    $provide.factory('CustomFactory', function () {
        return [1,2,3,4,5,6,7,8,9];
    });

    //自定义服务
    $provide.service('CustomService2', function () {
        return ['上海', '北京', '大连'];
    });
});

app.controller('firstCtrl', function ($scope, CustomService, CustomFactory, CustomService2) {
    console.log(CustomService);
    console.log(CustomFactory);
    console.log(CustomService2);
});