define(['app'], function (app) {
    app.factory('UserService',['$http', function($http){
        return {
            getUserAccount : function() {
                return $http.get('/user/account');
            },
            getFriendAccount : function(email) {
                return $http.get('/user/friend?email=' + email);
            },
            editAccount : function(user) {
            	return $http({
            		url : '/user/editAccount',
            		method : "POST",
            		data : user
            	});
            }
        }
    }]);
});
