/**
 * Created by Administrator on 2017/9/8.
 */
(function (angular) {
    //创建模块
    var app = angular.module('app',['ui.router']);
    //创建控制器
    app.controller('AppController',['$scope',function ($scope) {
        $scope.title = 'webApp';

        // $scope.$on('tabberChange',function (e,obj) {
        //     // alert(obj.type);
        //     var title = "首页";
        //     switch (obj.type){
        //         case 'home':
        //             title = "首页";
        //             break;
        //         case 'shop':
        //             title = "购物";
        //             break;
        //         case 'hot':
        //             title = "热点";
        //             break;
        //         case 'me':
        //             title = "我的";
        //             break;
        //     }
        //
        //     $scope.$broadcast('changeTitle',{title:title});
        // })
        $scope.type = 'home';//默认为首页

        $scope.tabberChange = function (type) {
            $scope.type = type;
            var title = "首页";
            switch (type){
                case 'home':
                    title = "首页";
                    break;
                case 'shop':
                    title = "购物";
                    break;
                case 'hot':
                    title = "热点";
                    break;
                case 'me':
                    title = "我的";
                    break;
            }
            $scope.$broadcast('changeTitle',{title:title});
        }
    }]);
    //绑定模块
    //绑定控制器


})(angular);