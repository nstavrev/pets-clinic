define(['app'], function (app) {

    app.factory('AuthService', function($http){

        return {
           login : function(email, password){
      			return $http({
      				url : '/login',
      				method : 'POST',
      				data : {
      					email : email,
      					password : password
      				}
      			})
      		}
        }
    });
});
