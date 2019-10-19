// this gets the day
$("#currentDay").text(moment().format('LL'));
// the ids of the divs
var theIDs = [9,10,11,12,13,14,15,16,17];
// the localstorage object
var thestorage = {
    theHoursText : ["","","","","","","","",""]
}
// gets information from the localstorage if there is any
if(JSON.parse(localStorage.getItem("thestorage")) === null){
}
else{
    thestorage = JSON.parse(localStorage.getItem("thestorage"));
    for(i=0; i < thestorage.theHoursText.length;i++){
        var thisNumber = i + 9;
        var theTextBox = $("#" + thisNumber).children();
        theTextBox.text(thestorage.theHoursText[i]);
    }
}
// this will find out if in past present or the future and add the class to change the color
function colorTheHours(){
    var theHourTime = theHour();
    for(i=0; i < theIDs.length; i++){
        if(theIDs[i] < theHourTime){
            $("#" + theIDs[i]).addClass("past");
        }
        else if(theIDs[i] > theHourTime){
            $("#" + theIDs[i]).addClass("future");
        }
        else{
            $("#" + theIDs[i]).addClass("present");
        }
    }
}
// get the hour of the day by 24 hours
function theHour(){
    var hourOfday = moment().format('h');
    hourOfday = parseInt(hourOfday);
    var amOrpm = moment().format('a');
    if(amOrpm === "pm"){
        hourOfday = hourOfday + 12;
        if(hourOfday === 24){
            hourOfday = 12;
        }
    }
    else if(hourOfday === 12){
        hourOfday = 0;
    }
    return hourOfday;
}
// when click on it will save it to the localstorage so it will not be lose
$(".saveBtn").on("click", function(event){
    event.stopPropagation();
    var theID = event.target.parentElement.children[1].id;
    var theTextAreaValue = $("#" + theID).children().val();
    thestorage.theHoursText[(theID - 9)] = theTextAreaValue;
    localStorage.setItem("thestorage", JSON.stringify(thestorage));
});
colorTheHours();
// checks the hour and change if needed
var thetimeinterval = setInterval(colorTheHours,60000);

