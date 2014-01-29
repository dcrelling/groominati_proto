groominatiApp.directive('isoRepeat', function () {
    return{
        restrict: 'A',
        template: JST['angular_app/templates/posts_list'](),
        link: function (scope, element, attrs) {

            var isoOptions = {
                animationEngine: 'jquery',
                itemSelector: 'div',
                layoutMode: 'masonry',
                sortAscending: true
            };

            element.isotope(isoOptions);


        }
    };
});