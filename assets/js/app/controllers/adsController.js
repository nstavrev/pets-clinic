define(['app'], function (app) {
  app.register.controller('adsController', function($scope, $routeParams, AdService){

    $scope.dtOptions = {
      "hasBootstrap":true,
      "oClasses":{
        "sPageButtonActive":"active"
      }
    }
    
    $scope.my = $routeParams.my == 'my';

    AdService.findAds($scope.my).success(function(data){
      $scope.ads = data;
    });

  });
});