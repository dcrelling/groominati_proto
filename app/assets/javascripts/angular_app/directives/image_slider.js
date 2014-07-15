groominatiApp.directive('imageSlider', function () {

    return{
        restrict: 'AE',
        replace: 'true',
        transclude: true,
        scope: {
            posts: '=',
            clickIndex: '=',
            show: '='
        },
        link: function (scope, elem, attrs) {

            scope.currentIndex = 0; // Initially the index is at the first post
            scope.dialogStyle = {};
            scope.slideOptions = attrs.slideOptions;
            if (attrs.width)
                scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                scope.dialogStyle.height = attrs.height;

            scope.hideModal = function() {
                scope.show = false;
            };


            scope.next = function () {
                scope.currentIndex < scope.posts.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
            };

            scope.prev = function () {
                scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.posts.length - 1;
            };

            scope.$watch('currentIndex', function () {
                scope.posts.forEach(function (post) {
                    post.visible = false; // make every image invisible
                });

                scope.posts[scope.currentIndex].visible = true; // make the current image visible
            });

            scope.$watch('clickIndex', function(newValue) {
                scope.currentIndex = newValue;
            });


        },
        template: JST['angular_app/templates/image_slider']()

    };

});