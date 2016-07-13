'use strict';

app.controller('LoginCtrl', function ($scope, $state, AuthFactory, $log) {
    $scope.submitLogin = function() {
        return AuthFactory.submitLogin($scope.email, $scope.password)
        .then(function (user){
        return $state.go('stories');
      }).catch($log.error)
    }
})
