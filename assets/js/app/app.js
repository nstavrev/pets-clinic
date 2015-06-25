'use strict';

define(['services/routeResolver'], function () {

    var app = angular.module('pets-clinic', ['routeResolverServices','ngRoute', 'cgNotify', 'datatables','datatables.bootstrap','ngMap']);

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
                .when('/', route.resolve('home', 'home'))
                .when('/profile', route.resolve('user', 'user', '/profile'))
                .when('/editProfile', route.resolve('user', 'user', '/editProfile'))
                .when('/signup', route.resolve('signup'))
                .when('/auth', route.resolve('auth'))
                .when('/clinics', route.resolve('clinic', 'clinic','/clinics'))
                .when('/appointment', route.resolve('appointment', 'appointment', '/appointment'))
                .when('/ad/:id', route.resolve('ad', 'ad', '/ad'))
                .when('/ad/:id/edit',route.resolve('ad', 'editAd', '/editAd'))
                .when('/postAd', route.resolve('ad','postAd','/postAd'))
                .when('/ads', route.resolve('ad','ads','/ads'))
                .when('/ads/:my', route.resolve('ad','ads','/ads'))
        }]);
    
    app.filter('cmdate', [
        '$filter', function($filter) {
            return function(input, format) {
                return $filter('date')(new Date(input), format);
            };
        }
    ]);

    return app;
});
