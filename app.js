/**
 * 
 */

function appCtrl($scope, $http) {

    $http.get('api/apps.json').success(function(data) {
        $scope.apps = data;
    });
    $scope.order = 'title';

    $scope.reset = function() {
    }

}
