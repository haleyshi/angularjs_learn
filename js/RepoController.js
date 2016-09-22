var githubviewer = angular.module('githubviewer');

var RepoController = function($scope, github, $routeParams) {
    var onRepoDetailsComplete = function(data) {
        $scope.repo = data;
    };

    var onError = function(reason) {
        $scope.error = "Could not fetch data for /" + username + "/" + reponame + " !";
    };

    var username = $routeParams.username;
    var reponame = $routeParams.reponame;
    github.getRepoDetails(username, reponame).then(onRepoDetailsComplete, onError);
};

githubviewer.controller('RepoController', RepoController);