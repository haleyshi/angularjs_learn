var githubviewer = angular.module('githubviewer');

var UserController = function($scope, github, $routeParams) {
    var onUserComplete = function(data) {
        $scope.user = data;
        github.getRepos(data).then(onReposComplete, onError);
    };

    var onReposComplete = function(data) {
        $scope.repos = data;
    };

    var onError = function(reason) {
        $scope.error = "Could not fetch data for " + $scope.username + " !";
    };

    $scope.username = $routeParams.username;
    github.getUser($scope.username).then(onUserComplete, onError);
};

githubviewer.controller('UserController', UserController);