groominatiApp.controller('HomeCtrl', ['$scope', 'Post', function($scope, Post){
    $scope.posts = Post.query();
}]);