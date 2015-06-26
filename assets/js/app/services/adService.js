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
          findMyAdById : function(id) {
            return $http.get('/ad/myAd/' + id);
          },
          create : function(ad) {
            return $http({
              url : "/ad/create", 
              method : "POST",
              data : ad
            });
          },
          edit : function(ad){
            return $http({
              url : "/ad/edit",
              method : "POST",
              data : ad
            });
          },
          remove : function(id){
            return $http({
              url : "/ad/remove?id=" + id,
              method : "DELETE"
            });
          }
        }
    });
});
