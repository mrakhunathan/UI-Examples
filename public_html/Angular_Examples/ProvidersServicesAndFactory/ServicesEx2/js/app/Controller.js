/* global angularApp */
angularApp.controller('myAppController', ['ServiceOne', 'ServiceTwo', '$scope', function (Service1, Service2, $scope) {
        $scope.thisMethodOnClick = function ()
        {
            Service1.myServiceMethodOne();
            Service1.myServiceMethodTwo();
            Service2.myServiceMethodFour($scope.value1, $scope.value2);
            Service2.myServiceMethodOne($scope.value3);
        };
    }]);