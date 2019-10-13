var highscore = JSON.parse(localStorage.getItem("highscore"));
var clearBtn = document.getElementById("clearbtn");
var homeBtn = document.getElementById("backbtn");
var theScoreDiv = document.getElementById("score");
// clear button click clear highscore
clearBtn.addEventListener("click", function(){
    highscore = {

    };
    localStorage.setItem("highscore", JSON.stringify(highscore));
    theScoreDiv.innerHTML = "";
});
// goes to index page when clicked
homeBtn.addEventListener("click", function(){
    window.location.href = "index.html";
});
// adds the score to the page
//      get all the scores form the local storage "theValue" sort it so its from biggest to smallest
//      run a for loop for the length of the highscore in the second for loop looks for the "theValue" that is sorted equal to
//      the highscore to compare so we know who the score is and then print in the new div
function addscores(){
    var size = Object.entries(highscore);
    var theValue = Object.values(highscore);
    theValue.sort(function(a, b){return b-a});
    for(i=0; i < size.length; i++){
        var placeNum = 1;
        var newDiv = document.createElement("div");
        newDiv.style.border = "1px solid black";
        for(j=0;j < theValue.length; j++){
            if(theValue[i] === size[j][1]){
                newDiv.textContent = placeNum + ". " + size[j][0] + " - " + theValue[i];
                theScoreDiv.appendChild(newDiv);
            }
        }
        placeNum++;
    }
};
addscores();
