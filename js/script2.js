var app = angular.module('MainApp', []);
app.controller('MainController', function($scope) {
  var person = {
    firstName: "GUOHUANG",
    lastName: "SHI",
    imageSrc: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAa4AAAAJGVmN2RjYWFkLWU2MDMtNDkwMS05ZDA3LWIwYjY4YTdhMmIwMQ.jpg"
  };
  $scope.message = "Big Boss";
  $scope.person = person;
});
