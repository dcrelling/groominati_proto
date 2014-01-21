groominatiApp.factory('Posts', ['$resource', function ($resource) {

    return {
        getAllPosts: function () {
            var Posts = $resource('/posts');
            return Posts.query();
        },

        deletePost: function () {

        },

        newPost: function () {

        }
    };


}]);