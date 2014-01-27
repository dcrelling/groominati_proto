groominatiApp.controller('HomeCtrl', ['$scope', 'Post', '$upload', function($scope, Post, $upload){
    $scope.posts = Post.query();

    $scope.newPost = function(){
       //var newPost = Post.save({content: $scope.post.content, asset: "dang"});
        var newPost = Post.save({content: $scope.post.content});
       $scope.posts.push(newPost);
    };

    $scope.onFileSelect = function($files) {
        //$files: an array of files selected, each file has name, size, and type.
        for (var i = 0; i < $files.length; i++) {
            var asset = $files[i];

            $scope.upload = $upload.upload({
                url: '/posts', //url of the REST end point
                method: 'POST',
                // headers: {'headerKey': 'headerValue'}, withCredential: true,
                data: {content: $scope.post.content},

                // file: $files, //upload multiple files, this feature only works in HTML5 FromData browsers
                /* set file formData name for 'Content-Desposition' header. Default: 'file' */
                //fileFormDataName: myFile, //OR for HTML5 multiple upload only a list: ['name1', 'name2', ...]
                /* customize how data is added to formData. See #40#issuecomment-28612000 for example */
                /*
                formDataAppender: function(formData, key, val){
                },*/

                file: asset,
                fileFormDataName: 'asset'

            //for progress and success to work I think we need to use the shim
            }).progress(function(evt) {
                    console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
                }).success(function(data, status, headers, config) {
                    // file is uploaded successfully
                    console.log(data);
                });
            //.error(...)
            //.then(success, error, progress);

        }
    };
}]);