define(['app'], function (app) {

    app.factory('PetService', function($http){
        return {
           findAllPetKinds : function() {
              return $http.get('/pet');
           }
        }
    });
});
