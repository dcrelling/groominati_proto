groominatiApp.directive('isoRepeat', function ($timeout) {
    return{
        restrict: 'A',
        template: JST['angular_app/templates/posts_list'](),
        link: function (scope, element, attrs) {

           $timeout(function () {
                var isoOptions = {
                    animationEngine: 'jquery',
                    itemSelector: '.item',
                    layoutMode: 'masonry',
                    sortAscending: true
                };
                element.isotope(isoOptions);
           }, 250);
        }
    };
});