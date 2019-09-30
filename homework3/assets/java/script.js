
var howManyChar = prompt("how many characters do you want.(8-128)");
howManyChar = parseInt(howManyChar);
checkNumbers(howManyChar);
var specialChar = confirm("do you want special characters?");
var numberChar = confirm("do you want numbers?");
var upperCaseLetter = confirm("do you want upper case letter?");
var lowerCaseLetter = confirm("do you want lower case letter?");
var password = {
    special : [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"],
    number : ["0","1","2","3","4","5","6","7","8","9"],
    letters : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
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

