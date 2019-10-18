$("#currentDay").text(moment().format('LL'));
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
var theIDs = [9,10,11,12,13,14,15,16,17];
var thestorage = {
    theHoursText : [{
        9 : ""},
        {10 : ""},
        {11 : ""},
        {12 : ""},
        {13 : ""},
        {14 : ""},
        {15 : ""},
        {16 : ""},
        {17 : ""
        }]
}
colorTheHours();
function colorTheHours(){
    for(i=0; i < theIDs.length; i++){
        if(theIDs[i] < hourOfday){
            $("#" + theIDs[i]).addClass("past");
        }
        else if(theIDs[i] > hourOfday){
            $("#" + theIDs[i]).addClass("future");
        }
        else{
            $("#" + theIDs[i]).addClass("present");
        }
    }
}
$(".saveBtn").on("click", function(event){
    event.stopPropagation();
    var theID = event.target.parentElement.children[1].id;
    var theTextAreaValue = $("#" + theID).children().val();
    console.log(theTextAreaValue);
    

});

