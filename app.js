/**
 * 
 */


/** Routing **/

var app = angular.module('app', []).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/',           {templateUrl: 'views/apps.html',        controller: AppsCtrl}).
        when('/apps/:name', {templateUrl: 'views/app-details.html', controller: AppDetailCtrl}).
        when('/about',      {templateUrl: 'views/about.html',       controller: AppsCtrl}).
        when('/login',      {templateUrl: 'views/login.html',       controller: AppsCtrl}).
        otherwise({redirectTo: '/'});
}]);

/** Controllers **/

function AppsCtrl($scope, $http, $timeout) {

    // Fetch apps
    $http.get('api/apps.json').success(function(data) {
        $scope.apps = data;
    });

    // Order apps
    $scope.order = 'title';

    $scope.zoom = 64;
    // Reset apps
    $scope.reset = function() {
    }

}

function AppDetailCtrl($scope, $routeParams) {

  $scope.name = $routeParams.name;

}

/** Filters **/

app.filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});
app.filter('i18n', function() {
    return function(input) {
        return input;
    };
});


/** Directives **/

app.directive('formInput', function() {
    return {
        restrict: 'E',
        compile: function(element, attrs)
        {
            var type = attrs.type || 'text';
            var required = attrs.hasOwnProperty('required') ? "required='required'" : "";
            var htmlText = '<div class="control-group">' +
                '<label class="control-label" for="' + attrs.formId + '">' + attrs.label + '</label>' +
                    '<div class="controls">' +
                    '<input type="' + type + '" class="input-xlarge" id="' + attrs.formId + '" name="' + attrs.formId + '" ' + required + '>' +
                    '</div>' +
                '</div>';
            element.replaceWith(htmlText);
        }
    }
})

/**/
i18n = {};
i18n.fr = {
    "About": "À propos"
};
function lang(string) {
    if(!i18n) return string;
    if(!i18n[navigator.language]) return string;
    return i18n[navigator.language][string] ? i18n[navigator.language][string] : string;
}
