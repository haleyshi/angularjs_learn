var githubviewer = angular.module('githubviewer', []);

var usercontroller = function($scope, github, $interval, $log, $anchorScroll, $location) {
    var onUserComplete = function(data) {
        $scope.user = data;
        github.getRepos(data).then(onReposComplete, onError);
    };

    var onReposComplete = function(data) {
        $scope.repos = data;
        $location.hash("userDetails");
        $anchorScroll();
    };

    var onError = function(reason) {
        $log.info(reason);
        $scope.error = "Could not fetch data for " + $scope.username + " !";
    };

    $scope.search = function() {
        if (countdownInterval) {
            $interval.cancel(countdownInterval);
        };
        github.getUser($scope.username).then(onUserComplete, onError);
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