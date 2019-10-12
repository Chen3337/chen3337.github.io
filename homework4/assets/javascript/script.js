var headerQuestion = document.getElementById("headertag");
var theRules = document.getElementById("gamerules");
var startBtn = document.getElementById("thestart");
var timerDisplay = document.getElementById("timeleft");
var choiceBox = document.getElementById("choice");
var messageBox = document.getElementById("message");
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
choiceA.className = "btn btn-primary lengthbtn";
choiceB.className = "btn btn-primary lengthbtn";
choiceC.className = "btn btn-primary lengthbtn";
choiceD.className = "btn btn-primary lengthbtn";
var submitScore = document.createElement("button");
submitScore.textContent = "submit";
var inputScore = document.createElement("input");
var aLineBreak = document.createElement("br");
var aBreak = document.createElement("br");
var aBreak1 = document.createElement("br");
var aBreak2 = document.createElement("br");
var onQuestion = 0;
var maxQuestions = 5;
var highscore ={
};
var theFinalScore = 0;
var theName;
// which choice is clicked
choiceBox.addEventListener("click", function (event){
    if(event.target.matches("button")){
        if(event.target.id === "thestart"){
            startTimer();
            theRules.parentElement.removeChild(theRules);
            startBtn.parentElement.removeChild(startBtn);
            questions();
            displayButtons();
        }
        else if(true){
            var getAnswer = checkRightAnswer(onQuestion);
            if (getAnswer === event.target.id){
                theTimeLeft = theTimeLeft + 10;
                messageBox.textContent = "you are right!!";
                messageBox.setAttribute("class", "right");
                questions();
            }
            else if(getAnswer === "1" || getAnswer === "2" || getAnswer === "3" || getAnswer === "4"){
                theTimeLeft = theTimeLeft - 10;
                messageBox.textContent = "you are wrong";
                messageBox.setAttribute("class", "wrong");
                
            }
            onQuestion++;
            if(onQuestion < maxQuestions){
            questions();
            }
            else{
                messageBox.textContent = "";
                theFinalScore = theTimeLeft;
                choiceBox.innerHTML = "your score is " + theFinalScore;
                headerQuestion.textContent = "All Done";
                choiceBox.appendChild(aBreak1);
                choiceBox.appendChild(aBreak);
                choiceBox.appendChild(aBreak2);
                inputScore.setAttribute("placeholder", "enter initial");
                choiceBox.appendChild(inputScore);
                choiceBox.appendChild(submitScore);
                theTimeLeft = 0;
            }
        }
    }
});
// the submit button and store it in the  local
submitScore.addEventListener("click", function(){
    if(JSON.parse(localStorage.getItem("highscore")) === null){
    }
    else{
        highscore = JSON.parse(localStorage.getItem("highscore"));
    }
    theName = inputScore.value;
    highscore[theName] = theFinalScore;
    localStorage.setItem("highscore", JSON.stringify(highscore));
    window.location.href = "highscore.html";

})


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
// change to the question you are on
function questions(){
    headerQuestion.textContent = theQuestions.question[onQuestion].question;
    choiceA.textContent = theQuestions.question[onQuestion].answers[0];
    choiceB.textContent = theQuestions.question[onQuestion].answers[1];
    choiceC.textContent = theQuestions.question[onQuestion].answers[2];
    choiceD.textContent = theQuestions.question[onQuestion].answers[3];
}
// display the buttons and line up to the left
function displayButtons(){
    choiceBox.appendChild(choiceA);
    choiceBox.appendChild(aBreak);
    choiceBox.appendChild(choiceB);
    choiceBox.appendChild(aBreak1);
    choiceBox.appendChild(choiceC);
    choiceBox.appendChild(aBreak2);
    choiceBox.appendChild(choiceD);
    choiceBox.style.textAlign = "left";
}
// x is what question is on starting with 0 this is the right answer to questions
function checkRightAnswer(x){
    var answerList = ["1","4","3","2","3"];
    return answerList[x]
}
