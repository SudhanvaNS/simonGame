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
function handleClick(buttonPressed, isStart){
    switch(buttonPressed){
        case "red":     $("#red").click(function(e){
                        var audio=new Audio("red.mp3");
                        playSound(audio);
                        animatePress("#red");
                        });
                        break;
        case "green":   $("#green").click(function(e){
                        var audio=new Audio("green.mp3");
                        playSound(audio);
                        animatePress("#green");
                        }); 
                        break;
        case "yellow":  var audio=new Audio("yellow.mp3");
                        playSound(audio);
                        animatePress("#yellow");
                        break;
        case "blue":    $("#blue").click(function(e){
                        var audio=new Audio("blue.mp3");
                        playSound(audio);
                        animatePress("#blue");
                        });
                        break;  
    }
    
}
function playSound(name){
    name.play();
}
function animatePress(currentColor){
    $(currentColor).fadeTo("fast", 0.01);
    $(currentColor).fadeTo("fast",1);
}