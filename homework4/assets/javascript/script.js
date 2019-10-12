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
var submitScore = document.createElement("button");
submitScore.textContent = "submit";
var inputScore = document.createElement("input");
var aLineBreak = document.createElement("br");
var aBreak = document.createElement("br");
var aBreak1 = document.createElement("br");
var aBreak2 = document.createElement("br");
choiceA.id = "1";
choiceB.id = "2";
choiceC.id = "3";
choiceD.id = "4";
var onQuestion = 0;
var maxQuestions = 5;
// which choice is clicked
choiceBox.addEventListener("click", function (event){
    if(event.target.matches("button")){
        if(event.target.id === "thestart"){
            startTimer();
            theRules.parentElement.removeChild(theRules);
            startBtn.parentElement.removeChild(startBtn);
            questions(question0);
            displayButtons();
        }
        else if(true){
            var getAnswer = checkRightAnswer(onQuestion);
            if (getAnswer === event.target.id){
                theTimeLeft = theTimeLeft + 10;
                changeQuestion();
            }
            else if(getAnswer === "1" || getAnswer === "2" || getAnswer === "3" || getAnswer === "4"){
                theTimeLeft = theTimeLeft - 10;

            }
            onQuestion++;
            if(onQuestion < maxQuestions){
            changeQuestion();
            }
            else{
                choiceBox.innerHTML = "your score is " + theTimeLeft;
                headerQuestion.textContent = "All Done";
                choiceBox.appendChild(aBreak1);
                choiceBox.appendChild(aBreak);
                choiceBox.appendChild(aBreak2);
                choiceBox.appendChild(inputScore);
                choiceBox.appendChild(submitScore);
                theTimeLeft = 0;
            }
        }
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

function changeQuestion(){
    if(onQuestion === 1){
        questions(question1);
    }
    if(onQuestion === 2){
        questions(question2);
    }
    if(onQuestion === 3){
        questions(question3);
    }
    if(onQuestion === 4){
        questions(question4);
    }
}