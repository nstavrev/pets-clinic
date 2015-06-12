require.config({
    baseUrl: '/js/app',
    urlArgs: 'v=1.0'
});

require(
    [  
        'app',
        'services/authService',
        'controllers/authController'
    ],
    function () {
        angular.bootstrap(document, ['pets-clinic']);
    });
	
