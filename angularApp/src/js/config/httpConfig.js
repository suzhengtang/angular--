/**
 * Created by Administrator on 2017/9/9.
 */
angular.module('app').config(['$sceDelegateProvider',function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://localhost/api/home.php'
    ])
}]);