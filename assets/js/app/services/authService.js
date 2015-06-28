define(['app'], function (app) {

    app.factory('AuthService',['$http', function($http){

        return {
           getCurrentUser : function(){
            return $http.get('/currentUser');
           },
           login : function(email, password){
      			return $http({
      				url : '/login',
      				method : 'POST',
      				data : {
      					email : email,
      					password : password
      				}
      			})
      		},
      		signup : function(user) {
      			return $http({
      				url : '/signup',
      				method : 'POST',
      				data : user
      			});
      		}
        }
    }]);
});
