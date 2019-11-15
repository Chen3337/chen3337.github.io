const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
// fs.writeFile("index.html","hello", function(err){
//     return err;
// });
// inquirer.
//     prompt({
//         type : "input",
//         name : "username",
//         message : "Enter the username"
//     })
//     .then(function(response){
//         runRunRun(response);
        
//     });
// async function apiCalls(response){
//     const queryUrl = `https://api.github.com/users/${response.username}`;
    
//     axios.get(queryUrl)
//     .then(function(res){
//         return res.data;
//     });
// }
// async function apiCall(response){
//     const queryUrlStarred = `https://api.github.com/users/${response.username}/starred`;
//     axios.get(queryUrlStarred)
//     .then(function(res){
//         return res.data.length;
//     });
// }
// // main function
// async function runRunRun(response){
//     const userData = await apiCalls(response);
//     const userStars = await apiCall(response);
//     console.log(userData);
//     console.log(userStars);
// }
async function runRunRun(){
    const userName = await inquirer.
        prompt({
            type : "input",
            name : "username",
            message : "Enter the username"
        });
    const queryUrl = `https://api.github.com/users/${userName.username}`;
    const queryUrlStarred = `https://api.github.com/users/${userName.username}/starred`;
    const userData = await axios.get(queryUrl);
    const userStars = await axios.get(queryUrlStarred);
    console.log(userStars.data.length);
    
        
    
}
runRunRun()

