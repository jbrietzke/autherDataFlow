app.controller('AuthCtrl', function($scope, $state, AuthFactory, $log){
  $scope.logout = function(){
    return AuthFactory.logout()
    .then(function(){
      console.log("We are in the AuthCtrl going");
     $state.go('login');
   })
  .catch($log.error)
  }
});
