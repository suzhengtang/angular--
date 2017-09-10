/**
 * Created by Administrator on 2017/9/9.
 */
angular.module('app').service('sztHttp',['$http',function ($http) {
    this.getData = function (success,error) {
        $http({
            url: 'http://localhost/api/home.php',
            method: 'jsonp'
        }).then(function (res) {
            success(res);
        }).catch(function (err) {
            error(err);
        })
    }
}]);