define(['app'], function (app) {
  app.register.controller('editAdController', function($scope, $location, $routeParams, notify, AdService){

  	AdService.findMyAdById($routeParams.id).success(function(data){
  		$scope.ad = data;
  		console.log(data);
  	});

  	$scope.edit = function() {
      AdService.edit($scope.ad).success(function(data){
      	notify("Обявата беше редактирана успешно");
        $location.path("/ads/my");
      });
    };

    $scope.delete = function() {
      AdService.remove($scope.ad.id).success(function(data){
        notify("Обявата беше изтрита успешно");
        $location.path("/ads/my");
      });
    };

  });
});