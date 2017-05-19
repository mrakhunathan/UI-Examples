$(document).ready(function () {
    console.log("JQuery Loaded..");
    $("#myButton").click(function () {
        console.log("Button Clicked..");
        $("#uname").text($("#t1").val());
        $("#pwd").text($("#p1").val());
    });
});