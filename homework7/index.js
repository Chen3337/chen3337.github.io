const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const pdf = require("html-pdf");
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
    const theHtmls = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <title>profile</title>
    </head>
    <body style="color: white;">
        <div class="container">
            <div class="row" style="background-color: blue; height: 380px;  padding: 100px 40px 0px 40px;">
                <div class="col-12" style="background-color: coral; height: 350px; text-align: center; z-index: 10;">
                    <img src="picofme.jpg" alt="pic of" style="width: 200px; border: 5px solid gold; border-radius: 50%; position: relative; bottom: 30px;">
                    <h2>Hi!</h2>
                    <h2>My name is </h2>
                    <b>Currently @</b>
                    <br>
                    <br>
                    <b><span class="fa fa-map-marker"></span><a style="color:white;" href="https://google.com">location</a>    <span class="fa fa-github"></span><a style="color:white;" href="">GitHub</a>   <span class="fa fa-rss"></span><a style="color:white;" href="">Blog</a></b>
                </div>
            </div>
            <div class="row" style="height: 70px;"><div class="col-12"></div></div>
            <div class="row" style="height: 400px;">
                <div class="col-12" style="text-align: center;">
                    <br>
                    <h2 style="color: black; text-align: center;">bio</h2>
                    <br>
                    <div style="height: 100px; background-color: coral; width: 35%; float: left; margin: 0% 5% 0% 10%; padding-top: 10px;">
                    <h2>Public Repositories</h2>
                    <h2></h2>
                    </div>
                    <div style="height: 100px; background-color: coral; width: 35%; float: left; margin: 0% 10% 0% 5%; padding-top: 10px;">
                    <h2>Followers</h2>
                    <h2></h2>
                    </div>
                    <div style="height: 50px; width: 100%; float: left;"></div>
                    <div style="height: 100px; background-color: coral; width: 35%; float: left; margin: 0% 5% 0% 10%; padding-top: 10px;">
                    <h2>GitHub Stars</h2>
                    <h2></h2>
                    </div>
                    <div style="height: 100px; background-color: coral; width: 35%; float: left; margin: 0% 10% 0% 5%; padding-top: 10px;">
                    <h2>Following</h2>
                    <h2></h2>
                    </div>
                </div>
            </div>
            <div class="row" style="background-color: blue; height: 350px;">
                <div class="col-12"></div>
            </div>
        </div>
    </body>
    </html>`
    fs.writeFile("index.html","theHtmls", function(err){
        return err;
    });
    console.log(userStars.data.length);
    console.log(userData.data);
    // var html = fs.readFileSync('./test/businesscard.html', 'utf8');
    // var options = { format: 'Letter' };
    
    // pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
    //     if (err) return console.log(err);
    //     console.log(res); // { filename: '/app/businesscard.pdf' }
    // });
}
runRunRun();

// https://www.google.com/maps/place/Richmond,%20Virginia

