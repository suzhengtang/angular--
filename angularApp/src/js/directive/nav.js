/**
 * Created by Administrator on 2017/9/8.
 */
angular.module('app').directive('nav',function () {
    return{
        restrict: 'EA',
        templateUrl: '../../views/nav.html',
        link:function ($scope,ele,attr) {
            $scope.$on('changeTitle',function (e,obj) {
                ele.find('span').html(obj.title);
            })
        }
    }
});