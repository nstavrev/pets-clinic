define(['app'], function (app) {

    app.factory('PetService',['$http', function($http){
        return {
           findAllPetKinds : function() {
              return $http.get('/pet');
           }
        }
    }]);
});
