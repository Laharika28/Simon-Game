var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];
var userClickedPattern = [];

$(".btn").click(function(event){
  var userChoosenColor = event.target.id;
  userClickedPattern.push(userChoosenColor);
  playSound(userChoosenColor);
  animatePress(userChoosenColor);
});

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function () {
    $("#"+currentColor).removeClass("pressed");
  }, 100);
}

function nextSequence(){
  var randomNo = Math.floor(Math.random()*4);
  var randomChooseColor = buttonColors[randomNo];
  $("#" + randomChooseColor).fadeOut(100).fadeIn(100);
  playSound(randomChooseColor);
}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}
