var githubviewer = angular.module('githubviewer', []);

var usercontroller = function($scope, $http) {
  var onUserComplete = function(response) {
    $scope.user = response.data;
    $http.get($scope.user.repos_url).then(onReposComplete, onError);
  };

  var onReposComplete = function(response) {
    $scope.repos = response.data;
  };

  var onError = function(reason) {
    console.log(reason);
    $scope.error = "Could not fetch data for " + $scope.username + " !";
  };

  $scope.search = function() {
    $http.get("https://api.github.com/users/" + $scope.username).then(onUserComplete, onError);
  };

  $scope.username = "haleyshi";
  $scope.message = "Github Viewer";
  //$scope.repoSortOrder = "-stargazers_count";
};

githubviewer.controller('usercontroller', usercontroller);
//githubviewer.controller('usercontroller', ["$scope", "$http", usercontroller]);
