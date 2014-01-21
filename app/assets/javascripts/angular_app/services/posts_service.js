groominatiApp.factory('Post', ['$resource', function ($resource) {

    return $resource('/posts/:postId', {postId: '@id'});
}]);