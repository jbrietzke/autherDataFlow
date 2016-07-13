'use strict';

app.controller('SignupCtrl', function ($scope, $state, AuthFactory, $log) {
    $scope.submitSignup = function() {
        return AuthFactory.submitSignup($scope.email, $scope.password)
        .then(function (user){
        return $state.go('stories');
      }).catch($log.error)
    }
})
