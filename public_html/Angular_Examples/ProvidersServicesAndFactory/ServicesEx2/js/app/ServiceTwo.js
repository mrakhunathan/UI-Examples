/* global angularApp */
angularApp.service('ServiceTwo', function () {
    this.myServiceMethodOne = function (arg)
    {
        console.log('myServiceMethodThree..' + arg);
    };

    this.myServiceMethodFour = function (arg1, arg2)
    {
        console.log('myServiceMethodFour..' + arg1 + arg2);
    };
});


