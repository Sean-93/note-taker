const express = require("express");
const path= require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const fs = require("fs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });

  app.post("/api/notes", function(req, res){
    console.log(req.body.title);
    fs.readFile("./db/db.json", function(err, data){
      if (err) throw err;
      let json = JSON.parse(data);
      const newNote = {
        id: Date.now(),
        text: req.body.text,
        title: req.body.title
      }
      json.push(newNote);
      fs.writeFile("./db/db.json", JSON.stringify(json), (err) =>{
        if (err) throw err;
        res.json(json);
      } )
    })
  });

  app.get("/api/notes", function(req, res){
    fs.readFile("./db/db.json", function(err, data){
      if (err) throw err;
      const json = JSON.parse(data);
      res.json(json);
    })
  })

  app.delete("/api/notes/:id", function(req, res){
    const id = req.params.id;
    fs.readFile("./db/db.json", function(err, data){
      if (err) throw err;
      let json = JSON.parse(data);
      const newJson = json.filter((item)=>{
        return item.id != id;
      })
      fs.writeFile("./db/db.json", JSON.stringify(newJson), (err) =>{
        if (err) throw err;
        res.json(newJson);
      });
    })
  })


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });