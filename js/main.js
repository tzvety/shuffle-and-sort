var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function display(arr) {
    var output = "";
    for (var i = 0; i < arr.length; i++) {
        output += '<div class="card-' + cards[i] + '"><div></div></div>';
    }
    $(".cards").html(output);
    $(".cards div").hide();
    $(".cards div:nth-child(odd)").fadeIn("slow");
    $(".cards div:nth-child(even)").fadeIn("fast");
}

$(document).ready(function() {
    display(cards);

    $("#shuffle").on("click", function() {
        mixed = cards.sort(function() { return .5 - Math.random() });
        display(mixed);
    });

    $("#sorted").on("click", function() {
        display(cards.sort());
    });

});