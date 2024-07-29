//necessary arrays
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomNumber = undefined;
var currentLevel = 0;

// level tracker
var level = 0;


// when function is called select aa random number, to select a random colour and trigger that colours effect
function nextSequence () {
    randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    colourSelected(randomChosenColour);
    level++;
    $("h1").html("Level " + level);
}

//what has been clicked by the user
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    colourSelected(userChosenColour);
    var index = buttonColours.indexOf(userChosenColour);
    checkAnswer(index);
  });


//trigger the colour that is pressed and relay that to the user
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

//Start the game - this can only be called once (if need to restart would need to reset executed to false)
var executed = false
var firstRun = $(document).on("keydown", function() {
    // $("h1").html("Level 1");
    if (executed === false) {
        nextSequence()
        currentLevel = 0;
};
    executed = true;
})


// Answer Checker - Attempt 2
function checkAnswer(currentValue) {
var colourJustClicked = buttonColours[currentValue]
    if (colourJustClicked === gamePattern[currentLevel]) {

}   if (colourJustClicked !== gamePattern[currentLevel]) {  
    // console.log("gamePattern " + gamePattern);
    // console.log("userClickedPattern " + userClickedPattern);
        gameOver();
}    if (userClickedPattern.length === gamePattern.length && level !== 0){
       setTimeout (function (){
        // console.log("gamePattern " + gamePattern);
        // console.log("userClickedPattern " + userClickedPattern);
        currentLevel = 0;
        userClickedPattern = [];
        nextSequence();
}, 1000); 
}
currentLevel++;
}

//Game over Function
function gameOver() {
    $("body").addClass("game-over");
    $("h1").html("Game Over, Press Any Key to Restart");
    new Audio("./sounds/wrong.mp3").play()
    setTimeout (function (){
        $("body").removeClass("game-over")
    }, 200)
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    currentLevel = 0;
    executed = false;
}

