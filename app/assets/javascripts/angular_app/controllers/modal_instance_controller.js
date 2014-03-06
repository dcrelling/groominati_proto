/**
 * Created by dcrelling on 3/6/14.
 */

groominatiApp.controller ("ModalInstanceCtrl", ['$scope', '$modalInstance', function ($scope, $modalInstance) {

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
