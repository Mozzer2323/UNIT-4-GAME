
var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function () {

    $(".crystals").empty();

    var images = []

    random_result = Math.floor(Math.random() * 69 ) + 30;

    $("#result").html('Random Result: ' + random_result);

    for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
            crtstal.attr({
                "class": 'crystal',
                "data-random": random
            });


        $(".crystals").appened(crystal);


}
