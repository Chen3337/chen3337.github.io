var howManyChar = prompt("how many characters do you want.(8-128)");
howManyChar = parseInt(howManyChar);
// check if it is in the right range of character
checkNumbers(howManyChar);
var specialChar = confirm("do you want special characters?");
var numberChar = confirm("do you want numbers?");
var upperCaseLetter = confirm("do you want upper case letter?");
var lowerCaseLetter = confirm("do you want lower case letter?");
var thisIsThePassword = "";
var passwordCharacters = [];
var password = {
    special : [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"],
    number : ["0","1","2","3","4","5","6","7","8","9"],
    upperLetters : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    lowerLetters : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
}
if(specialChar){
    passwordCharacters = passwordCharacters.concat(password.special);
}
if(numberChar){
    passwordCharacters = passwordCharacters.concat(password.number);
}
if(lowerCaseLetter){
    passwordCharacters = passwordCharacters.concat(password.upperLetters);
}
if(upperCaseLetter){
    passwordCharacters = passwordCharacters.concat(password.lowerLetters);
}

// this function keeps asking for the right numbers 8-128 char
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
// when button click display the password
function displayPassword(){
    document.getElementById("password").innerHTML = thisIsThePassword;
    
    
}
// this give out this password
function creatPassword(){
    for(i = 0; i < howManyChar; i++){
        var randNumber = Math.floor(Math.random() * passwordCharacters.length);
        thisIsThePassword = thisIsThePassword + passwordCharacters[randNumber];
    }
}
// starts when button is clicked
function run(){
    thisIsThePassword = "";
    creatPassword();
    displayPassword();
}

// copy to clipbroad
function copyPassword(){
    // var input = document.createElement('input');
    // input.setAttribute('value', thisIsThePassword);
    // document.body.appendChild(input);
    // input.select();
    // var result = document.execCommand('copy');
    // document.body.removeChild(input)
    // return result;
    
    
    var input = document.getElementById("password");
    input.select();
    var result = document.execCommand('copy');
    return result;
}
