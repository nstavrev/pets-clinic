define(['app'], function (app) {

    app.factory('AppointmentService',['$http',function($http){
        return {
          create : function(appointment) {
            return $http({
              url : "/appointment/create",
              method : "POST",
              data : appointment
            });
          }
        }
    }]);
});
