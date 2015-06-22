define(['app'], function (app) {

    app.factory('AppointmentService', function($http){
        return {
          create : function(appointment) {
            return $http({
              url : "/appointment/create",
              method : "POST",
              data : appointment
            });
          }
        }
    });
});
