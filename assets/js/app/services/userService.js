define(['app'], function (app) {
    app.factory('UserService', function($http){
        return {
            getUserAccount : function() {
                return $http.get('/user/account');
            },
            editAccount : function(user) {
            	return $http({
            		url : '/user/editAccount',
            		method : "POST",
            		data : user
            	});
            }
        }
    });
});
