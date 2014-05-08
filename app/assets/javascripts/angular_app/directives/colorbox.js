/**
 * Created by dcrelling on 3/28/14.
 */
groominatiApp.directive('colorBox', ['$rootScope', function ($rootScope) {

    return{
        restrict: 'A',
        link: function (scope, elem, attrs) {

           scope.openColorBox = function(){
               angular.element('a.gallery').colorbox({ opacity: 0.9 , rel:'group1', inline:true, width:"50%"});
           };
        }
    };

}]);