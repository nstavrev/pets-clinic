define(['app'], function (app) {
  app.controller('authController', function($scope, $timeout, $location, AuthService){
    
    AuthService.getCurrentUser().success(function(data){
        $scope.currentUser = data;
    });
      
    $scope.login = function(email,password) {	
          AuthService.login(email,password)
          .then(
                function(result){
                    window.location.replace("/");
                }, 
                function(error){
                    $scope.loginErrorMsg = "Invalid Username or password";
                    $timeout(function(){
                      $scope.loginErrorMsg = undefined;
                    }, 2000);
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
                $scope.signupErrorMsg = "Invalid data";
                $timeout(function(){
                  $scope.signupErrorMsg = undefined;
                }, 2000);
            }
         );
   };

});
});