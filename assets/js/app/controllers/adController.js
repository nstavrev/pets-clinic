define(['app'], function (app) {
  app.register.controller('adController', function($scope, $routeParams, AdService){

  	AdService.findAdById($routeParams.id)
  	.then(
  		function(result){
  			$scope.ad = result.data;
  		},
  		function(error) {
  			$scope.notFound = true;
  		}
  	);

  });
});