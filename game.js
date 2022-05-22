var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];
var userClickedPattern = [];
var level = 1;
var i = 0;
var flag=false;

    $(".btn").on("click",function(event){
      var userChoosenColor = event.target.id;
      userClickedPattern.push(userChoosenColor);
      playSound(userChoosenColor);
      animatePress(userChoosenColor);
      checkAnswer(i++);
    });

    $(document).on("keydown",function(e){
        if(flag===false)
        {
          nextSequence();
        }
      });

function checkAnswer(currLevel){
  if(gamePattern[currLevel] === userClickedPattern[currLevel])
  {
    if(currLevel+2==level)
    {
       setTimeout(nextSequence,1000);
    }
  }
  else
  {
    var gameOver = new Audio("sounds/wrong.mp3");
    gameOver.play();
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
    setTimeout(function (){
      $("body").removeClass("game-over");
    },200);
  }
}

function startOver()
{
  gamePattern=[];
  level=1;
  userClickedPattern=[];
  flag=!flag;
}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function () {
    $("#"+currentColor).removeClass("pressed");
  }, 100);
}

function nextSequence(){
  $("h1").text("Level " + level);
  var randomNo = Math.floor(Math.random()*4);
  var randomChooseColor = buttonColors[randomNo];
  $("#" + randomChooseColor).fadeOut(100).fadeIn(100);
  playSound(randomChooseColor);
  gamePattern.push(randomChooseColor);
  userClickedPattern=[];
  i=0;
  level++;
  flag=true;
}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}
