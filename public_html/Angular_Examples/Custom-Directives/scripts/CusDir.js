var cusDirApp = angular.module('customDir', []);
//Create a Directive with camel case convention 
//(1st char of 1st word should be small, 1st char of 2nd word should be Capital)
cusDirApp.directive('bottleNeck', function () {
    return {
        link: function () {
            console.log('test');
        },
        template: 'A: {{myObject.a}} B: {{myObject.b}} ,C: {{myObject.c}}'
                //template: 'my-customer.html' Imstead you can point to any HTML as well
    };
});

cusDirApp.controller('myBController', function ($scope) {
    $scope.myObject = {
        a: 'MyName',
        b: 'SomeValue',
        c: 123.345
    };
});