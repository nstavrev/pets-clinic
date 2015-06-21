define(['app'], function (app) {
	app.register.controller('userController', function($scope, $location, UserService, PetService, notify){

		PetService.findAllPetKinds().success(function(data){
			$scope.pets = data;
		});

		UserService.getUserAccount().success(function(data){
			$scope.user = data;
		});

		$scope.editAccount = function() {
			UserService.editAccount($scope.user).success(function(data){
				notify("Вашият профил беше обновен успешно");
				$location.path('/profile');
			});	
		};

	});
});