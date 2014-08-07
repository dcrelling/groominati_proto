groominatiApp.controller('HomeCtrl', ['$scope', 'Post', '$upload', '$modal', function ($scope, Post, $upload, $modal) {
    //$scope.posts = Post.query(); not using this now because we are pre-loading data

    /*this is the function that is called on PostCtrl initialize with ng-init
     * we are pre-loading the data from the home#index.html.erb file via json_for(@posts)
     */

    $scope.setPostsOnInit = function (data) {
        $scope.posts = data;
        $scope.postsIndex = 0;
    },


        $scope.openNewPostModalForm = function () {
            var modalInstance = $modal.open({
                template: JST['angular_app/templates/new_post_modal_form'](),
                controller: 'NewPostModalCtrl',
                resolve: {posts: function () {
                    return $scope.posts;
                }}
            });
        },

        $scope.openImageSliderModalForm = function (index) {
            var modalInstance = $modal.open({
                template: JST['angular_app/templates/image_slider'](),
                controller: 'ImageSliderModalCtrl',
                size: 'sm',
                resolve: {posts: function () {
                    return $scope.posts;
                },
                    index: function () {
                        return index;
                    }}
            });
        }

}]);

