define(['app'], function (app) {
  app.register.controller('postAdController', function($scope, $location, AdService, notify){
  	$scope.ad = {};

  	$scope.create = function(){
  		AdService.create($scope.ad).success(function(data){
  			$scope.ad = {};
  			notify("Обявата беше създадена успешно");
  			$location.path("/ads/my");
  		});
  	};

  });
});