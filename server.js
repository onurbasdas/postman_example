const { response } = require("express");
var express = require("express");
var bodyParser = require("body-parser");
var _= require("underscore");
var app = express();

app.use(bodyParser.json());


app.get("", function(reg, res){
    res.send("Node.js")
})

app.post("/personel", function(req, res){
    
    let body = _.pick(req.body, "first_name", "last_name", "number","title");
    let id = req.params.id;
    res.send(body);
})
app.put("/personel/:id", function(req, res){
    let body = _.pick(req.body, "first_name", "last_name", "number", "title");
    let id = req.params.id;
    res.send(body.first_name + "id = " + id);
})
app.delete("/personel/:id", function(req, res){
    res.send("Delete isteği gönderildi.")
})

app.listen(3000);