define(['app'], function (app) {
  app.register.controller('messageController', function($scope, MessageService){
    console.log('messageController');
    MessageService.getMessagesToMe().success(function(data){
    	$scope.messages = data;
    });
  });
});