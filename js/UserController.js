var githubviewer = angular.module('githubviewer');

var UserController = function($scope, github, $routeParams) {
    var onUserComplete = function(response) {
        $scope.user = response.data;
        github.getRepos(response.data).then(onReposComplete, onError);
    };

    var onReposComplete = function(response) {
        $scope.repos = response.data;
    };

    var onError = function(response) {
        $scope.error = "Could not fetch data for " + $scope.username + " !";
    };

    $scope.username = $routeParams.username;
    github.getUser($scope.username).then(onUserComplete, onError);
};

githubviewer.controller('UserController', UserController);