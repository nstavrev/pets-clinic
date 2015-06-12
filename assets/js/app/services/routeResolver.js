'use strict';

define([], function () {

    var routeResolver = function () {

        this.$get = function () {
            return this;
        };

        this.routeConfig = function () {
            var viewsDirectory = '/',
                controllersDirectory = '/js/app/controllers/',

                setBaseDirectories = function (viewsDir, controllersDir) {
                    viewsDirectory = viewsDir;
                    controllersDirectory = controllersDir;
                },

                getViewsDirectory = function () {
                    return viewsDirectory;
                },

                getControllersDirectory = function () {
                    return controllersDirectory;
                };

            return {
                setBaseDirectories: setBaseDirectories,
                getControllersDirectory: getControllersDirectory,
                getViewsDirectory: getViewsDirectory
            };
        }();

        this.route = function (routeConfig) {

            var resolve = function (baseName, controller, path) {
                    if (!path) path = '';
                    var routeDef = {};
                    routeDef.templateUrl = function(params) {
                        if(params){
                            var baseRoute = routeConfig.getViewsDirectory() + baseName + path + "?";
                            var paramKeys = Object.keys(params);
                            paramKeys.forEach(function(key, index){
                                if(index < paramKeys.length - 1){
                                    baseRoute += (key + "=" + params[key] + "&");
                                } else {
                                    baseRoute += (key + "=" + params[key]);
                                }

                            });
                            return baseRoute;
                        }
                        return routeConfig.getViewsDirectory() + baseName + path;
                    };
                    
                    if(controller){
                        routeDef.controller = controller + 'Controller';

                        routeDef.resolve = {
                            load: ['$q', '$rootScope', function ($q, $rootScope) {
                                var dependencies = [routeConfig.getControllersDirectory() + controller + 'Controller.js'];
                                return resolveDependencies($q, $rootScope, dependencies);
                            }]
                        };
                    }

                    return routeDef;
                },

                resolveDependencies = function ($q, $rootScope, dependencies) {
                    var defer = $q.defer();
                    require(dependencies, function () {
                        defer.resolve();
                        $rootScope.$apply()
                    });

                    return defer.promise;
                };

            return {
                resolve: resolve
            }
        }(this.routeConfig);

    };

    var servicesApp = angular.module('routeResolverServices', []);

    //Must be a provider since it will be injected into module.config()
    servicesApp.provider('routeResolver', routeResolver);
});