var userClickedPattern=[];
var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];
var randomNumber
var level=1;
$(document).keypress(function(){
    if(gamePattern.length===0){
        $("#level-title").text("level "+level);
        setTimeout(nextSequence,1000);
    }
});


function nextSequence(){
    $("#level-title").text("level "+level);
    randomNumber=Math.round(Math.random()*3);
    gamePattern.push(buttonColors[randomNumber]);  
    animatePress(buttonColors[randomNumber]);
    playSound(buttonColors[randomNumber]);
    level=level+1;
}
// nextSequence(false);
document.addEventListener("click", function(event){
    var id=event.target.id;
    if(id==="red"||id==="green"||id==="yellow"||id==="blue"){
        userClickedPattern.push(id);
        playSound(id);
        animatePress(id);
        checkAnswer(userClickedPattern.length-1);
    }
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
         if(userClickedPattern.length===gamePattern.length){
            userClickedPattern=[];
            setTimeout(nextSequence,1000);
    }
    }else{
        $("h1").text("you lost game will restart in 3 seconds");
        $("body").addClass("game-over");
        gamePattern=[];
        userClickedPattern=[];
        level=1;
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 3000);
        setTimeout(nextSequence,4000);
    }
   
}
function playSound(name){
    var name=new Audio("./sounds/" + name+".mp3");
    name.play();
}
function animatePress(currentColor){
    $("#"+currentColor).fadeTo("fast", 0);
    $("#"+currentColor).fadeTo("fast",1);
}
