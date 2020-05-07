var express = require("express");
var mongoose = require("mongoose");
var PORT = process.env.PORT|| 8080;
var app = express();
var apirouts = require("./routes/apiroutes");
var htmlrouts = require("./routes/htmlroutes");
app.use(express.urlencoded({extended : true}));
app.use(express.json())
app.use(express.static("public"))
app.use(apirouts)
app.use(htmlrouts)
mongoose.connect("mongodb://localhost/FitnessTracker", {
    useNewUrlParser : true, 
    useFindAndModify : false
})







app.listen(PORT, function()
    {
console.log("App is listening on port", PORT)
    })