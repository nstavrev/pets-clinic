define(['app'], function (app) {
	app.register.controller('sendMessageController', function($scope, $routeParams, UserService, MessageService){
		$scope.message = {
		};

		UserService.getFriendAccount($routeParams.email).success(function(data){
			$scope.message.to = data;
		});

		function loadMessages(){
			MessageService.getMessagesFromMe($routeParams.email).success(function(data){
				$scope.messages = data;
			});
		}
		loadMessages();

		$scope.send = function() {
			MessageService.send($scope.message).success(function(data){
				$scope.message.text = "";
				loadMessages();
			});
		}
	});
});