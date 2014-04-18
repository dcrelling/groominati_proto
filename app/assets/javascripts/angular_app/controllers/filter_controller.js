groominatiApp.controller('FilterCtrl', ['$scope', function ($scope) {
    $scope.isFilterCollapsed = true;

    $scope.tagAdded = function (tag) {
        var container = angular.element('#iso-container');
        var formattedFilterTags = $scope.buildTagFilter();
        container.isotope({filter: formattedFilterTags});
    }

    $scope.tagRemoved = function (tag) {
        var container = angular.element('#iso-container');
        if($scope.filterTags.length > 0){
            var formattedFilterTags = $scope.buildTagFilter();
            container.isotope({filter: formattedFilterTags});
        }else {
            container.isotope({filter: "*"});
        }
    }

    $scope.buildTagFilter = function () {
        var formattedFilterTags = "";
        var prepender = ".";
        var appender = ",";
        var count = 0

        angular.forEach($scope.filterTags, function(arrayItem){
            count++;
            formattedFilterTags = formattedFilterTags + prepender + arrayItem.text;
            if($scope.filterTags.length > 1 && count < $scope.filterTags.length){
                formattedFilterTags = formattedFilterTags + appender;
            }
        }, formattedFilterTags);

        return formattedFilterTags;
    }


}]);