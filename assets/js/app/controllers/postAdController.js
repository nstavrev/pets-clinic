define(['app'], function (app) {
  app.register.controller('postAdController', function($scope, AdService, notify){
  	$scope.ad = {};

  	$scope.create = function(){
  		AdService.create($scope.ad).success(function(data){
  			$scope.ad = {};
  			notify("Обявата беше създадена успешно");
  		});
  	};

  });
});