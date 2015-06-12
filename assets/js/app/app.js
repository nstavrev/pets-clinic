'use strict';

define(['services/routeResolver'], function () {

    var app = angular.module('pets-clinic', ['routeResolverServices','ngRoute']);

    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider',
        '$compileProvider', '$filterProvider', '$provide','$locationProvider',
        function ($routeProvider, routeResolverProvider, $controllerProvider,
                  $compileProvider, $filterProvider, $provide,$locationProvider) {

            app.register = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            //Define routes - controllers will be loaded dynamically
            var route = routeResolverProvider.route;
            $routeProvider
                .when('/', route.resolve('home'))
                .when('/profile', route.resolve('user'))
                .when('/login', route.resolve('auth'))
        }]);

    return app;
});
