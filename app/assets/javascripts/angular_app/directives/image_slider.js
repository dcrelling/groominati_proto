groominatiApp.directive('imageSlider', function () {

    return{
        restrict: 'AE',
        replace: 'true',
        scope: {
            posts: '='
        },
        link: function (scope, elem, attrs) {

            scope.currentIndex = 0; // Initially the index is at the first post

            scope.next = function () {
                scope.currentIndex < scope.posts.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
            };

            scope.prev = function () {
                scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.posts.length - 1;
            };

            scope.$watch('currentIndex', function () {
                scope.images.forEach(function (image) {
                    image.visible = false; // make every image invisible
                });

                scope.images[scope.currentIndex].visible = true; // make the current image visible
            });


        },
        template: JST['angular_app/templates/image_slider']()

    };

});