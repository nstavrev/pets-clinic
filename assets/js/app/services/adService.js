define(['app'], function (app) {

    app.factory('AdService', function($http){
        return {
          findAds : function(myAds){
            if(myAds){
              return $http.get('/ad/my');
            }
            return $http.get('/ad');
          },
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
