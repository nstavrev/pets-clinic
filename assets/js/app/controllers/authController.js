define(['app'], function (app) {
  app.controller('authController', function($scope, $timeout, $window, $location, $routeParams, AuthService){
    
    $scope.$on('$routeChangeSuccess', function () {
      $scope.showLoginBtn = $location.path() !== '/auth';
    });

    AuthService.getCurrentUser().success(function(data){
        $scope.currentUser = data;
    });
      
    $scope.login = function(email,password) {	
          AuthService.login(email,password)
          .then(
                function(result){
                    $window.location.reload();
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