'use strict';

app.controller('LoginCtrl', function ($scope, $state, Login) {
    // $scope.email =
    // $scope.password =
    $scope.submitLogin = function() {
        console.log('no name', $scope.email)
        console.log('no fear', $scope.password)
        return Login.submitLogin($scope.email, $scope.password)
        .then(function (user){
        return $state.go('users');
      })
    }
})
