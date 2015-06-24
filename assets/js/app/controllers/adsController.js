define(['app'], function (app) {
  app.register.controller('adsController', function($scope, $routeParams, AdService){

    $scope.dtOptions = {
      "hasBootstrap":true,
      "oClasses":{
        "sPageButtonActive":"active"
      }
    }

    AdService.findAds($routeParams.my == 'my').success(function(data){
      $scope.ads = data;
    });

  });
});