var highscore = JSON.parse(localStorage.getItem("highscore"));
var clearBtn = document.getElementById("clearbtn");
var homeBtn = document.getElementById("backbtn");
var theScoreDiv = document.getElementById("score");

clearBtn.addEventListener("click", function(){
    highscore = {

    };
    localStorage.setItem("highscore", JSON.stringify(highscore));

});

homeBtn.addEventListener("click", function(){
    window.location.href = "index.html";

});

function addscores(){
    var size = Object.keys(highscore).length;
    theScoreDiv.textContent = size;
};
