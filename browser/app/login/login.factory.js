'use strict';

app.factory('Login', function($http){


  // Login.url = '/login';

  Login.submitLogin = function(email, password) {
      return $http({
          method: 'POST',
          url: '/login',
          data: {
            email: email,
            password: password
          }
      }).then(function(res){
        return res.data;
      })
  }

  return Login;

})
