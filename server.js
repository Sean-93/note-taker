const express = require("express");
const path= require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/' + '/public/index.html', function(err){
//         console.log(err);
//     });
    
// });
app.listen(8080, function(){
    console.log('app successful!')
    console.log("DIR: ", __dirname);
});
