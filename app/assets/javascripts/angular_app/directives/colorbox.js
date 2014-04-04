/**
 * Created by dcrelling on 3/28/14.
 */
groominatiApp.directive('colorBox', ['$rootScope', function ($rootScope) {

    return{
        restrict: 'A',
        link: function (scope, elem, attrs) {
           //elem.colorbox(attrs.colorbox);
           angular.element('a.group1').colorbox({ opacity:0.5 , rel:'group1' });
        }
    };

}]);