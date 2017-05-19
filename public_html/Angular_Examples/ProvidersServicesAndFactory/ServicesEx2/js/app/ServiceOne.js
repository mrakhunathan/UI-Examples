/* global angularApp */
angularApp.service('ServiceOne', function () {
    this.myServiceMethodOne = function ()
    {
        console.log('myServiceMethodOne..');
    };

    this.myServiceMethodTwo = function ()
    {
        console.log('myServiceMethodTwo..');
    };
});


