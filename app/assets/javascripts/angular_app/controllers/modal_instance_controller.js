/**
 * Created by dcrelling on 3/6/14.
 */


groominatiApp.controller ("ModalInstanceCtrl", ['$scope', '$modalInstance', '$upload', 'posts', function ($scope, $modalInstance, $upload, posts) {

    $scope.posts = posts;

    $scope.onFileSelect = function ($files) {
        //$files: an array of files selected, each file has name, size, and type.
        //TODO: we are uploading only one file so don't need this for loop
        $scope.post = {};
        for (var i = 0; i < $files.length; i++) {
            var asset = $files[i];
            $scope.post.asset = asset;
        }
    };

    $scope.newPost = function () {
        //var newPost = Post.save({content: $scope.post.content, asset: "dang"});
        //var newPost = Post.save({content: $scope.post.content});
        //$scope.posts.push(newPost);
        //TODO: need to check if there is a file in scope, if not do try to upload a file just push the content
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

            file: $scope.post.asset,
            fileFormDataName: 'asset'

            //for progress and success to work I think we need to use the shim
            //TODO: need to use the shim to get the progress and success to work need this so that when done we push the new image to the post array
        }).then(function (response) {
                $scope.posts.push(response.data);
            }, function (error){
                //TODO: need some error handling here
            }, function (evt) {
                //$scope.progress[index] = parseInt(100.0 * evt.loaded / evt.total);
                //TODO: need to handle progress update
            });
    };


        $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
