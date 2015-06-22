define(['app'], function (app) {
  app.register.controller('appointmentController', function($scope, AppointmentService, ClinicService, notify){

    $scope.appointment = {};

    ClinicService.findAllClinics().success(function(data){
      $scope.clinics = data;
    });

    $(document).ready(function(){
      $("#date").datepicker();
    }); 

    $scope.create = function() {
      AppointmentService.create($scope.appointment).success(function(data){
        notify("Вашият час беше записан успешно");
        $scope.appointment = {};
      });
    };

  });
});