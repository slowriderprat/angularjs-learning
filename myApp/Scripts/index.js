var myApp = angular
    .module('myModule', ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when(
                "/home", {
                templateUrl: "Templates/home.html",
                controller: "homeController"
            }).when(
                "/test", {
                templateUrl: "Templates/test.html",
                controller: "testController"
            }).otherwise({
                redirectTo: "/home"
            })
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            });
    })