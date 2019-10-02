

var howManyChar = prompt("how many characters do you want.(8-128)");
howManyChar = parseInt(howManyChar);
checkNumbers(howManyChar);
var specialChar = confirm("do you want special characters?");
var numberChar = confirm("do you want numbers?");
var upperCaseLetter = confirm("do you want upper case letter?");
var lowerCaseLetter = confirm("do you want lower case letter?");
var thisIsThePassword = "";
var whichFuntionNumbers = 0;
var password = {
    special : [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"],
    number : ["0","1","2","3","4","5","6","7","8","9"],
    letters : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    randomSpecial : function (){
        thisIsThePassword = thisIsThePassword + this.special[Math.floor(Math.random() * this.special.length)];
    },
    randomNumbers : function(){
        thisIsThePassword = thisIsThePassword + this.number[Math.floor(Math.random() * this.number.length)];
    },
    randomUpperCase : function(){
        thisIsThePassword = thisIsThePassword + this.letters[Math.floor(Math.random() * this.letters.length)];
    },
    randomLowerCase : function (){
        thisIsThePassword = thisIsThePassword + this.letters[Math.floor(Math.random() * this.letters.length)].toLowerCase();
    }
}
function checkNumbers(x){
    x = parseInt(x);
    for(i = 0; i < 10; i++){
        if(x < 129 && x > 7){
            i = 10;
        }
        else{
            x = prompt("please enter many characters do you want.(8-128)");
        }
    }
}


function creatOneTypeOfChar(x){
    for(i=0; i < howManyChar; i++){
        if(x === 1){
            password.randomSpecial();
        }
        if(x === 10){
            password.randomNumbers();
        }
        if(x === 100){
            password.randomUpperCase();
        }
        if(x === 1000){
            password.randomLowerCase();
        }
    }
}
function creatTwoTypeOfChar(){

}

function whichFunctionToUse(){
    if(specialChar === true){
        whichFuntionNumbers = whichFuntionNumbers + 1;
    }
    if(numberChar === true){
        whichFuntionNumbers = whichFuntionNumbers + 10;
    }
    if(upperCaseLetter === true){
        whichFuntionNumbers = whichFuntionNumbers + 100;
    }
    if(lowerCaseLetter === true){
        whichFuntionNumbers = whichFuntionNumbers + 1000;
    }
}

// when button click display the password
function displayPassword(){
document.getElementById("password").innerHTML = thisIsThePassword;

}
function run(x){
    
    if(x === 1 || x === 10 || x === 100 || x === 1000){
        creatOneTypeOfChar(x);
    }
    displayPassword();
}
whichFunctionToUse();
// document.getElementById("generate").onclick = run(whichFuntionNumbers);