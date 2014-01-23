groominatiApp.controller('HomeCtrl', ['$scope', 'Post', function($scope, Post){
    $scope.posts = Post.query();

    $scope.newPost = function(){
       //alert($scope.post.content);
       Post.save({content: $scope.post.content});
    };
}]);