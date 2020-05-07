var app = require("express").Router()
var db = require("../models/table")

app.post("/api/workouts", function (req, res) {
    console.log("body", req.body)
    db.create({}).then(function(datarespose){
        console.log("data response", datarespose)
        res.json(datarespose)
})
})

app.get("/api/workouts", function (req, res) {
    db.find({})
    .then(function(records){
        console.log("data get cloud", records)
        res.json(records)
    })
})

app.put("/api/workouts/:id", function (req, res) {
    db.findByIdAndUpdate(req.params.id,{$push:{exercises:req.body}},
        {new:true})
    .then(function(records){
        console.log("put data", records)
        res.json(records)
    })
})

module.exports = app;
// exercises

