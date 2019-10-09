var headerQuestion = document.getElementById("headertag");
var theRules = document.getElementById("gamerules");
var startBtn = document.getElementById("thestart");
var timerDisplay = document.getElementById("timeleft");
var choiceBox = document.getElementById("choice");
var howManyQuestions = 5;
var theTimeLeft = 0;
var choiceA = document.createElement("button");
var choiceB = document.createElement("button");
var choiceC = document.createElement("button");
var choiceD = document.createElement("button");
choiceA.id = "1";
choiceB.id = "2";
choiceC.id = "3";
choiceD.id = "4";
//  in the index page when the start button click it would remove the rules and the start button. then go to the first question
startBtn.addEventListener("click", function(){
    theRules.parentElement.removeChild(theRules);
    startBtn.parentElement.removeChild(startBtn);
    startTimer();
    questions(question1);
    displayButtons();

});
// which choice is clicked
choiceBox.addEventListener("click", function (event){
    if(event.target.matches("button")){
        
    }
});

// this sets up the timer
function startTimer(){
    theTimeLeft = howManyQuestions * 15;
    var timer = setInterval(function() {
        if(theTimeLeft < 0){
            theTimeLeft = 0;
            timerDisplay.textContent = theTimeLeft;
            clearInterval(timer);
        }
        else{
            theTimeLeft--;
            timerDisplay.textContent = theTimeLeft;
        }
    }, 1000);
}
// display the question
function questions(x){
    headerQuestion.textContent = x[0];
    choiceA.textContent = x[1];
    choiceB.textContent = x[2];
    choiceC.textContent = x[3];
    choiceD.textContent = x[4];
}
// display the buttons and line up to the left
function displayButtons(){
    var aBreak = document.createElement("br");
    var aBreak1 = document.createElement("br");
    var aBreak2 = document.createElement("br");
    choiceBox.appendChild(choiceA);
    choiceBox.appendChild(aBreak);
    choiceBox.appendChild(choiceB);
    choiceBox.appendChild(aBreak1);
    choiceBox.appendChild(choiceC);
    choiceBox.appendChild(aBreak2);
    choiceBox.appendChild(choiceD);
    choiceBox.style.textAlign = "left";

}
