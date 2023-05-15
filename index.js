var userClickedPattern=[];
var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];
var randomNumber
var level=0;
$(document).keypress(function(){
    console.log(gamePattern.length);
    if(gamePattern.length===0){
        $("#level-title").text("level "+level);
        setTimeout(nextSequence(true),1000);
    }
});



function nextSequence(isStart){
    randomNumber=Math.round(Math.random()*3);
    gamePattern.push(buttonColors[randomNumber]);
    console.log(buttonColors[randomNumber])
    if (isStart){
        animatePress("#" + buttonColors[randomNumber]);
        playSound(new Audio(buttonColors[randomNumber] + ".mp3"));
    }
    handleClick(buttonColors[randomNumber]);
    level=level+1;
}
// nextSequence(false);
document.addEventListener("click", function(event){
    var id=event.target.id;
    if(id==="red"||id==="green"||id==="yellow"||id==="blue"){
        userClickedPattern.push(event.target.id);
        handleClick(event.target.id);
        checkAnswer(userClickedPattern.length);
    }
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        

    }else{
        $("h1").text("you lost game will restart in 3 seconds");

        setTimeout(nextSequence(true),3000);
    }
    if(userClickedPattern.length===gamePattern.length){
        userClickedPattern=[];
        nextSequence(false);
    }
}
var userClickedPattern=[];
var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];
var randomNumber
var level=1;
$(document).keypress(function(){
    console.log(gamePattern.length);
    if(gamePattern.length==0){
        $("#level-title").text("level "+level);
        setTimeout(nextSequence,1000);
    }
});



function nextSequence(){
    randomNumber=Math.round(Math.random()*3);
    gamePattern.push(buttonColors[randomNumber]);
    $("#level-title").text("level "+level);
        animatePress("#" + buttonColors[randomNumber]);
        var audio=new Audio(buttonColors[randomNumber] + ".mp3")
        audio.play();   
        level=level+1;
}
// nextSequence(false);
document.addEventListener("click", function(event){
    var userChosenColor=event.target.id;
    if(userChosenColor=="red"||userChosenColor=="green"||userChosenColor==="yellow"||userChosenColor==="blue"){
        userClickedPattern.push(event.target.id);
        playSound(userChosenColor+".mp3");
        animatePress("#"+userChosenColor);
        
        checkAnswer(userClickedPattern.length-1);
    }
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length){
        userClickedPattern=[];
        console.log(userClickedPattern);
        setTimeout(nextSequence,1000);
    }}else{
        
        $("body").addClass("game-over");
        $("h1").text("you lost game will restart in 3 seconds");
        var audio=new Audio("wrong.mp3");
        audio.play();    
        setTimeout(function(){
            $("body").removeClass("game-over");
        },3000);
        setTimeout(nextSequence,3000);
        gamePattern.length=0;
        level=1;
        userClickedPattern=[];
    }
}
function playSound(name){
    var name=new Audio(name);
    name.play();
}
function animatePress(currentColor){
    $(currentColor).fadeTo("fast", 0.01);
    $(currentColor).fadeTo("fast",1);
}
    
}
function playSound(name){
    name.play();
}
function animatePress(currentColor){
    $(currentColor).fadeTo("fast", 0.01);
    $(currentColor).fadeTo("fast",1);
}
