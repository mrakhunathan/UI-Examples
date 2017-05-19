var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.controller('mgController', function ($scope) {
    $scope.dateNow = (new Date()).toString();
    console.log($scope.dateNow);
    $scope.getDate = function ()
    {
        $scope.myDate = (new Date()).toString();
    };
});
routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/one");
    $stateProvider.state("one", {
        url: "/one",
        views: {
            '': {templateUrl: "Plain.html"},
            'view1': {template: "From a Definite Template"},
            'view2': {
                templateUrl: "One.html"
            },
            'view3': {
                templateUrl: "Two.html"
            }
        }
    });
});