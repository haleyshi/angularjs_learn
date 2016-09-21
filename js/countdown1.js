var githubviewer = angular.module('githubviewer', []);

var usercontroller = function($scope, $http, $interval) {
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
        if (countdownInterval) {
            $interval.cancel(countdownInterval);
        };
        $http.get("https://api.github.com/users/" + $scope.username).then(onUserComplete, onError);
    };

    var decreamentCountdown = function() {
        $scope.countdown -= 1;

        if ($scope.countdown < 1) {
            $scope.search();
        }
    }

    var countdownInterval = null;
    var startCountdown = function() {
        countdownInterval = $interval(decreamentCountdown, 1000, $scope.countdown);
    }

    $scope.username = "haleyshi";
    $scope.message = "Github Viewer";
    //$scope.repoSortOrder = "-stargazers_count";

    $scope.countdown = 5;
    startCountdown();
};

githubviewer.controller('usercontroller', usercontroller);
//githubviewer.controller('usercontroller', ["$scope", "$http", "$interval", usercontroller]);