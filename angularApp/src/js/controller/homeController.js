/**
 * Created by Administrator on 2017/9/8.
 */
angular.module('app').controller('homeController',['$scope','sztHttp',function ($scope,sztHttp) {
    sztHttp.getData(function (res) {
        console.log(res);
    },function (err) {
        console.log(err);
    })
}]);