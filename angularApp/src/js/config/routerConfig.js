/**
 * Created by Administrator on 2017/9/8.
 */
angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home',{
        url: '/',
        views: {
            home: {
                templateUrl: '../views/home.html',
                controller: 'homeController'
            },
            shop: {
                templateUrl: '../views/shop.html',
                controller: 'shopController'
            },
            hot: {
                templateUrl: '../views/hot.html',
                controller: 'hotController'
            },
            me: {
                templateUrl: '../views/me.html',
                controller: 'meController'
            }
        }
    });
    $urlRouterProvider.otherwise('/');
}]);