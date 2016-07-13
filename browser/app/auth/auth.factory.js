'use strict';

app.factory('AuthFactory', function($http, $state){

  var Auth = {};
  // Login.url = '/login';

  Auth.submitLogin = function(email, password) {
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

  Auth.submitSignup = function(email, password) {
      return $http({
          method: 'POST',
          url: '/api/users',
          data: {
            email: email,
            password: password
          }
      }).then(function(res){
        return res.data;
      })
  }


  Auth.logout = function(){
    console.log("hello");
    return $http({
      method: 'GET',
      url: '/api/users/logout'
    })

  }




  return Auth;
})
