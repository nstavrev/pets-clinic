define(['app'], function (app) {

    app.factory('MessageService', ['$http', function($http){
        return {
        	getMessagesFromMe : function(email) {
        		return $http.get('/message/messagesFromMe?email=' + email);
        	},
        	getMessagesToMe : function() {
        		return $http.get('/message/messagesToMe');
        	},
        	send : function(message) {
                return $http({
                    url : "/message/send",
                    method : "POST",
                    data : message
                });
            }
        }
    }]);

});
