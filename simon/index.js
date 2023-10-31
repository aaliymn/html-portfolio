// Variables

var gamePattern = [];
var buttonColors = ["red", "green", "blue", "yellow"];
var userClickedPattern = [];
var started = false;
var level = 0;

// Button click listener

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id"); //Picks up the ID of the user selected button/color
  userClickedPattern.push(userChosenColor); //Adds it to the array
  playSound(userChosenColor);
  fadeAnimation(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1); //Checks answer

  console.log(userClickedPattern);
});

// Game
function nextSequence() {
  userClickedPattern = []; //Reset user's array
  level++; //Up a level
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4); //Picks up a random number between 0-3
  var randomChosenColor = buttonColors[randomNumber]; //Assigns random number to a color and stores it in a variable
  gamePattern.push(randomChosenColor); //Adds random chosen color to the array
  playSound(randomChosenColor);
  fadeAnimation(randomChosenColor);
  console.log(gamePattern);
}

// Level 0 Starter
$(document).keydown(function () {
  if (!started) {
    nextSequence();
    $("h1").text("Level " + level);
    $("body").css("background-color", "#011f3f");
    started = true;
  }
});

// Answer Check
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    //Check if last item of the user's click is the same as game's pattern;
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      //If user array lenght is same as game's array length
      setTimeout(function () {
        nextSequence(); //Executes next level
      }, 500); //After 0.5s
    }
  } else {
    console.log("failed");
    $("body").css("background-color", "#5e0000");
    $("h1").text("Level " + level + " failed. Press any key to restart.");
    resetGame();
  }
}

// Reset
function resetGame() {
  started = false;
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}

// Sound Player
function playSound(name) {
  var colorSound = new Audio("sounds/" + name + ".mp3");
  colorSound.play();
}

// Animations
function fadeAnimation(color) {
  $("#" + color)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
}
function animatePress(currentColor) {
  var self = $("#" + currentColor);
  self.addClass("pressed");
  setTimeout(function () {
    self.removeClass("pressed");
  }, 100);
}
