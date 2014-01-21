groominatiApp.controller('HomeCtrl', ['$scope', 'Posts', function($scope, Posts){
    $scope.posts = Posts.getAllPosts();
}]);