groominatiApp.controller ("ImageSliderModalCtrl", ['$scope', '$modalInstance', 'posts', 'index', function ($scope, $modalInstance, posts, index) {

    $scope.posts = posts;
    $scope.index = index;

    /*
    $scope.next = function () {
        $scope.index < $scope.posts.length - 1 ? $scope.index++ : $scope.index = 0;
    };

    $scope.prev = function () {
        $scope.index > 0 ? $scope.index-- : $scope.index = $scope.posts.length - 1;
    };

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.$watch('index', function () {
        $scope.posts.forEach(function (post) {
            post.visible = false; // make every image invisible
        });

        $scope.posts[$scope.index].visible = true; // make the current image visible
    })
    */
}]);
