var myApp = angular.module('JSonSample', []);
myApp.controller('JSonSampleController', function ($scope) {
    console.log('JSonSampleController');
    $scope.myObj = {};

    $scope.myObj.countries = [];
    var countryOne = {};
    countryOne.name = 'India';
    countryOne.shortName = 'IN';
    countryOne.states = [];
    countryOne.states.push('TamilNadu');
    countryOne.states.push('Kerala');
    countryOne.states.push('Karnataka');

    var countryTwo = {};
    countryTwo.name = 'United States Of America';
    countryTwo.shortName = 'US';
    countryTwo.states = [];
    countryTwo.states.push('Alabama');
    countryTwo.states.push('Indiana');
    countryTwo.states.push('Lowa');
    countryTwo.states.push('Kansas');

    var countryThree = {};
    countryThree.name = 'Australia';
    countryThree.shortName = 'Aus';
    countryThree.states = [];
    countryThree.states.push('New South Wales');
    countryThree.states.push('Queensland');

    $scope.myObj.countries.push(countryOne);
    $scope.myObj.countries.push(countryTwo);
    $scope.myObj.countries.push(countryThree);
    console.log($scope.myObj);
});