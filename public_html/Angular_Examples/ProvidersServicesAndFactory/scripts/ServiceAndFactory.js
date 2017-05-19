var myApp = angular.module('mod1', []);
myApp.service('ServiceName', function () {
    console.log("Service Loaded...");
    this.serviceMethod = function () {
        return "This is a Service..";
    };
});
myApp.provider('providerName', function () {
    console.log("Provider Loaded...");
    this.$get = function () {
        return {
            Hello: function () {
                return "Sample Provider";
            }
        };
    };
});
myApp.factory('FactoryName', function () {
    console.log("Factory Loaded...");
    return{
        methodName: function ()
        {
            return "This is a Factory..";
        }
    };
});
myApp.controller('myController', ['FactoryName', 'ServiceName', function (FactoryName, ServiceName) {
        console.log("myController Loaded...");
        console.log(ServiceName.serviceMethod());
        console.log(FactoryName.methodName());
    }]);