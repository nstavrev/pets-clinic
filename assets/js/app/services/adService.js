define(['app'], function (app) {

    app.factory('AdService', function($http){
        return {
          findAdById : function(id){
            return $http.get('/ad/?id=' + id);
          },
          create : function(ad) {
            return $http({
              url : "/ad/create",
              method : "POST",
              data : ad
            });
          }
        }
    });
});
