/* global myApp */
myApp.service('RestCallerService', ['$http', function ($http) {
        this.invokeCountryService = function () {
            var promise = $http({
                method: 'GET',
                url: "http://services.groupkt.com/country/search?text=un",
                headers: {
                    'Content-Type': undefined
                }
            }).then(function (response) {
                return response;
            });
            return promise;
        };
    }]);