var app = require("express").Router()
var path = require("path")
app.get("/exercise",(req, res)=> {
    res.sendfile(path.join(__dirname, "../public/exercise.html"))
})
app.get("/stats",(req, res)=> {
    res.sendfile(path.join(__dirname, "../public/stats.html"))
})
app.get("/",(req, res)=> {
    res.sendfile(path.join(__dirname, "../public/index.html"))
})



module.exports = app;
