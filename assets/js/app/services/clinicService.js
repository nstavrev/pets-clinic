define(['app'], function (app) {

    app.factory('ClinicService', function($http){
        return {
        	findClinicByAddress : function(address){
        		return $http.get('/clinic/address/' + address);
        	},
        	findAllClinics : function() {
        		return $http.get('/clinic');
        	}
        }
    });

});
