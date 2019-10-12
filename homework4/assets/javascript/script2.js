var highscore = JSON.parse(localStorage.getItem("highscore"));
var clearBtn = document.getElementById("clearbtn");
var homeBtn = document.getElementById("backbtn");

clearBtn.addEventListener("click", function(){
    highscore = {};
    localStorage.setItem("highscore", JSON.stringify(highscore));

});

homeBtn.addEventListener("click", function(){
    window.location.href = "index.html";

});

function addscores(){

};
S