/**
 * 
 */

function appCtrl($scope, $http) {

    $http.get('api/apps.json')
        .success(function(data) {
            $scope.apps = data;
        })
        .error(function() { 
            $scope.error = true; 
        }
    );

}
