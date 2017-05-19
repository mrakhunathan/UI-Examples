var myApp = angular.module('ModuleX', []);
myApp.controller('XController', ['RestCallerService', '$scope', function (RestCallerService, $scope) {
        $scope.getCountries = function ()
        {
            RestCallerService.invokeCountryService().then(function (d) {
                console.log(d);
                $scope.serviceResponse = d.data.RestResponse.result;

                $scope.tableHeaders = [];
                for (var k in $scope.serviceResponse[0])
                    $scope.tableHeaders.push(k);
            });
        };
    }]);
