var app = angular.module('MainApp', []);
app.controller('MainController', function($scope, $http) {
  var onUserComplete = function(response) {
    $scope.user = response.data;
  };

  var onError = function(reason) {
    $scope.error = reason;
  };

  $http.get("https://api.github.com/users/haleyshi").then(onUserComplete, onError);

  $scope.message = "Big Boss";
});
