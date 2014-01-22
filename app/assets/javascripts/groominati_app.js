var groominatiApp = angular.module("Groominati", ['ngResource', 'ngRoute']);
groominatiApp.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/', {template: JST['angular_app/templates/posts_list'](), controller: 'HomeCtrl'});
}]);