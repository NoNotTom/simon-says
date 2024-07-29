// 1 - Add JS and JQ    v/
// 2 - Plan out animation and sound cues for each colour on CPU and Human turn
// 3 - Build function that initiates on any keydown
// 4 - Relay required sequence to user and track desired outcome (probably going to be using an array of some kind? - pushing latest requirement)
// 5 - Accept user input and check against required result
// 6 - If correct continue cycle 
//     6a - Change H1 to track level
// 7 - If Incorrect fail with screen flash and H1
// 8 - Allow for ability to restart the game again with new keydown

// These arent good for order of process but atleast work for things needed
// Have to start by building out functionality I think
// Use RNG and math.floor to create an array to look up against

//SO FAR
//Press any key intiatiates the first cpu turn
// need to create human turn and then compare Sequence arrays to see if correct or not


var cpuSequence = []
var humanSequence = []
var simon = ["green", "red", "yellow", "blue"]

//Initiate - cpu turn
$(document).on("keydown", function() {
    $("h1").html("Level 1");
    var firstColour = Math.floor(Math.random() * 4)
    // colourSelected(firstColour);
    var cpuColour = simon[firstColour];
    colourSelected(cpuColour);
    cpuSequence.push(cpuColour);
    console.log(cpuSequence);
})

//Select a colour
function colourSelected(key) {
    switch (key) {
        case "green":
            $("#green").addClass("pressed");
            setTimeout (function() {$("#green").removeClass("pressed")}, 100);
            new Audio(src = "./sounds/green.mp3").play();
            break;
        case "red":
            $("#red").addClass("pressed");
            setTimeout (function() {$("#red").removeClass("pressed")}, 100);
            new Audio(src = "./sounds/red.mp3").play();
            break;
        case "yellow":
            $("#yellow").addClass("pressed")
            setTimeout (function() {$("#yellow").removeClass("pressed")}, 100);
            new Audio(src = "./sounds/yellow.mp3").play();
            break;
        case "blue":
            $("#blue").addClass("pressed")
            setTimeout (function() {$("#blue").removeClass("pressed")}, 100);
            new Audio(src = "./sounds/blue.mp3").play();
            break;
        default:
            console.log(key)
            break;
    }
}

//Human Turn
$(".btn").on("click", function(){
    var humanColour = $(this).attr("id");
    colourSelected(humanColour);
    humanSequence.push(humanColour);
    console.log(humanSequence);
    if (cpuSequence !== humanSequence) {
        $("body").addClass("game-over")
        }
    
});
