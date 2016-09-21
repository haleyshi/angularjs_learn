var github = function($http) {
    var getUser = function(username) {
        return $http.get("https://api.github.com/users/" + username).then(
            function(response) {
                return response.data;
            },
            function(reason) {
                return reason;
            }
        );
    };

    var getRepos = function(user) {
        return $http.get(user.repos_url).then(
            function(response) {
                return response.data;
            },
            function(error) {
                return reason;
            }
        );
    };

    return {
        getUser: getUser,
        getRepos: getRepos
    };
};

var module = angular.module("githubviewer");
module.factory("github", github);