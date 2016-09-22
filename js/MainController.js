var githubviewer = angular.module('githubviewer');

var MainController = function($scope, $interval, $location) {
    $scope.search = function() {
        if (countdownInterval) {
            $interval.cancel(countdownInterval);
        };
        $location.path("/user/" + $scope.username);
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

    $scope.countdown = 15;
    startCountdown();
};

githubviewer.controller('MainController', MainController);