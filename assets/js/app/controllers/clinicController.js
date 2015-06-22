define(['app'], function (app) {
  app.register.controller('clinicController', function($scope, ClinicService){

      $scope.search = function(address) {
        ClinicService.findClinicByAddress(address).success(function(data){
          $scope.clinics = data;
        });
      };

  });
});