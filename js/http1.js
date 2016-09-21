var githubviewer = angular.module('githubviewer', []);

var usercontroller = function($scope, $http) {
  var onUserComplete = function(response) {
    $scope.user = response.data;
  };

  var onError = function(reason) {
    $scope.error = reason;
  };

  $http.get("https://api.github.com/users/haleyshi").then(onUserComplete, onError);

  $scope.message = "Big Boss!!!";
};

githubviewer.controller('usercontroller', usercontroller);
//githubviewer.controller('usercontroller', ["$scope", "$http", usercontroller]);
