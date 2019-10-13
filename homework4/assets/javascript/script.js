var headerQuestion = document.getElementById("headertag");
var timerDisplay = document.getElementById("timeleft");
var choiceBox = document.getElementById("choice");
var messageBox = document.getElementById("message");
var theTimeLeft = 0;
var choiceA = makeABtn("1", "btn btn-primary lengthbtn");
var choiceB = makeABtn("2", "btn btn-primary lengthbtn");
var choiceC = makeABtn("3", "btn btn-primary lengthbtn");
var choiceD = makeABtn("4", "btn btn-primary lengthbtn");
var submitScore = document.createElement("button");
submitScore.textContent = "submit";
var inputScore = document.createElement("input");
var onQuestion = 0;
var maxQuestions = 5;
var highscore ={
};
var theFinalScore = 0;
var theName;
var timer;
// which choice is clicked
choiceBox.addEventListener("click", function (event){
    if(event.target.matches("button")){
        if(event.target.id === "thestart"){
            startTimer();
            choiceBox.textContent = "";
            questions();
            displayButtons();
        }
        else if(true){
            var getAnswer = checkRightAnswer(onQuestion);
            if (getAnswer === event.target.id){
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
                youAreDone()
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
    theName = inputScore.value.trim();
    highscore[theName] = theFinalScore;
    localStorage.setItem("highscore", JSON.stringify(highscore));
    window.location.href = "highscore.html";
})
// this sets up the timer
function startTimer(){
    theTimeLeft = 75;
    timer = setInterval(function() {
        if(theTimeLeft < 1){
            youAreDone();
            timerDisplay.textContent = theTimeLeft;
            
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
    choiceBox.appendChild(makeABreak());
    choiceBox.appendChild(choiceB);
    choiceBox.appendChild(makeABreak());
    choiceBox.appendChild(choiceC);
    choiceBox.appendChild(makeABreak());
    choiceBox.appendChild(choiceD);
    choiceBox.style.textAlign = "left";
}
// x is what question is on starting with 0 this is the right answer to questions
function checkRightAnswer(x){
    var answerList = ["1","4","3","2","3"];
    return answerList[x]
}
// making a br element
function makeABreak(){
    var abreak = document.createElement("br");
    return abreak;
}
// the submit score page
function youAreDone(){
    clearInterval(timer);
    messageBox.textContent = "";
    theFinalScore = theTimeLeft;
    choiceBox.innerHTML = "your score is " + theFinalScore;
    headerQuestion.textContent = "All Done";
    choiceBox.appendChild(makeABreak());
    choiceBox.appendChild(makeABreak());
    choiceBox.appendChild(makeABreak());
    inputScore.setAttribute("placeholder", "enter initial");
    choiceBox.appendChild(inputScore);
    choiceBox.appendChild(submitScore);
    timerDisplay.textContent = theTimeLeft;
}
// making a button
function makeABtn(id, classes){
    var newBtn = document.createElement("button");
    newBtn.id = id;
    newBtn.className = classes;
    return newBtn;
}