define(['app'], function (app) {
  app.register.controller('editAdController', function($scope, $routeParams, notify, AdService){

  	AdService.findMyAdById($routeParams.id).success(function(data){
  		$scope.ad = data;
  		console.log(data);
  	});

  	$scope.edit = function() {
      AdService.edit($scope.ad).success(function(data){
      	notify("Обявата беше редактирана успешно");
      });
    };

  });
});