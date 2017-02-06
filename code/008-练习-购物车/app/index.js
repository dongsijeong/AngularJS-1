var cartApp = angular.module('cartApp', []);

cartApp.controller('cartCtrl', function($scope){
    $scope.cart = [
        {
            id: 1000,
            name: 'iphone5s',
            quantity: '3',
            price: 4300
        },
        {
            id: 33000,
            name: 'iphone6s',
            quantity: '20',
            price: 6300
        },
        {
            id: 232,
            name: 'iphone7',
            quantity: '23',
            price: 6500
        },
        {
            id: 5444,
            name: 'iphone7s',
            quantity: '10',
            price: 6900
        }
    ];
});