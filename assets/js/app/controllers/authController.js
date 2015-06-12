define(['app'], function (app) {
    app.controller('authController', function($scope, $location, AuthService){
      console.log("auth controller");

      $scope.login = function(email,password) {	
      		AuthService.login(email,password)
      		.then(
      			function(result){
      				window.location.replace("/");
      			}, 
      			function(error){
      				$scope.errorMsg = "Invalid Username or password";
      			}
      		);
      };

      $scope.signup = function(user) {
      	AuthService.signup(user)
      	.then(
      		function(result){
      			window.location.replace("/");
      		},
      		function(error){
      			$scope.errorMsg = "Invalid data";
      		}
      	);
      };

    });
});