const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser"); 
const members = require("./members.json");

// i added some comment 

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }))


app.get("/", function(req,res) {
    res.render("home",{members: members});
});


app.get("/member/:index", function(req,res){
    var index = req.params.index;
    res.render("member",{member: members[index]});
});


app.listen(3000, () => console.log("Server is running."))