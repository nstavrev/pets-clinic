define(['app'], function (app) {
  app.register.controller('clinicController', function($scope){

      $scope.stores = {
        foo: { position:[41, -87], items: [1,2,3,4]},
        bar:{ position:[41, -83], items: [5,6,7,8]}
      };
      
      $scope.showStore = function(evt, id) {
        $scope.store = $scope.stores[id];
        $scope.showInfoWindow.apply(this, [evt, 'foo']);
      };      
  });
});