var colorList = ["red","green","yellow","blue"];

var gamePlay = [];
var userPlay = [];

var play = false;
var level = 0;

$(".btn").click(function(){
    var choseBtn = $(this).text()
    userPlay.push(choseBtn)
    animationBtn(choseBtn)
    checkPattern(userPlay.length-1)
})

$(document).keydown(function() {
    if(!play){
        $("h2").text("Level : "+level)
        setTimeout(function(){
            nextStep()
        },500);
        play = true
    };
});

function nextStep(){
    userPlay = [];
    level++;
    $("h2").text("Level : "+level);
    var randomNum = Math.floor(Math.random()*4);
    var randomColor = colorList[randomNum];
    gamePlay.push(randomColor);
    $("."+randomColor).fadeIn(300).fadeOut(400).fadeIn(300);
}

function checkPattern(pattern){
    if(gamePlay[pattern] === userPlay[pattern]){
        if(gamePlay.length === userPlay.length){
            setTimeout(function(){
                nextStep();
            },1000);
        }
    }else{
        $("body").addClass("gameOver");
        $("h2").text("GAME OVER !! Please Enter Key to Restart Game.")

        setTimeout(function(){
            $("body").removeClass("gameOver");
        },500);
        startAgain();
    }
}

function animationBtn(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function(){
        $("."+currentColor).removeClass("pressed");
    },1000)
}

function startAgain(){
    level = 0
    gamePlay = []
    play = false
}