/**
 * Created by Administrator on 2017/9/8.
 */
angular.module('app').directive('tabber',function () {
   return{
       restrict: 'EA',
       templateUrl: '../views/tabber.html',
       // controller: function ($scope) {
       //     $scope.tabberChange = function (type) {
       //         // alert(type);
       //         $scope.$emit('tabberChange',{type:type});
       //     }
       // }
   }
});