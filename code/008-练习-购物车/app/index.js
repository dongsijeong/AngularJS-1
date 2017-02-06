var cartApp = angular.module('cartApp', []);

cartApp.controller('cartCtrl', function($scope){
    $scope.cart = [
        {
            id: 1000,
            name: 'iphone5s',
            quantity: 3,
            price: 4300
        },
        {
            id: 33000,
            name: 'iphone6s',
            quantity: 20,
            price: 6300
        },
        {
            id: 232,
            name: 'iphone7',
            quantity: 23,
            price: 6500
        },
        {
            id: 5444,
            name: 'iphone7s',
            quantity: 10,
            price: 6900
        }
    ];
    /**
    * 计算购物总价
    * */
    $scope.totalPrice = function(){
        var total = 0;
        angular.forEach($scope.cart, function(item){
            total += item.quantity * item.price;
        });
        return total;
    }
    /**
     *计算总购买数
     */
    $scope.totalQuantity = function(){
        var total = 0;
        angular.forEach($scope.cart, function(item){
            total += parseInt(item.quantity);
        });
        return total;
    }
    /**
     * 找一个元素的索引
     */
    var findIndex = function (id) {
        var index = -1;
        angular.forEach($scope.cart, function (item, key) {
            if(id == item.id){
                index = key;
                return;
            }
        });
        return index;
    }
    /**
     * 移除一项
     */
    $scope.remove = function(id){

        var index = findIndex(id);
        if (index != -1){
            $scope.cart.splice(index, 1);
        }
    }
    /**
     * 为某个产品添加数量
     */
    $scope.add = function (id) {
        var index = findIndex(id);
        if (index != -1){
            ++$scope.cart[index].quantity;
        }
    }
    /**
     * 为某个产品减少数量
     */
    $scope.reduce = function (id) {
        var index = findIndex(id);
        if (index != -1){
            var item = $scope.cart[index];
            if (item.quantity > 1){
                --item.quantity;
            }else{
                var returnKey = confirm("从购物车内删除该产品！");
                if (returnKey){
                    $scope.remove(id);
                }
            }
        }
    }
});