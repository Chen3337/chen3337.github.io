const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
const fs = require("fs")
const axios = require("axios")
fs.writeFile("index.html","hello", function(err){
    return err;
});
axios.get(queryUrl)
    .then()