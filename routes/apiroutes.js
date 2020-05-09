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

// router.get("/api/workouts", (req, res) => {
//     workoutdata.find()
//       .then(dbWorkouts => {
//         res.json(dbWorkouts);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
//   router.get("/api/workouts/range", (req, res) => {
//     Workout.find({}).limit(7)
//       .then(dbWorkouts => {
//         console.log(dbWorkouts)
//         res.json(dbWorkouts);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
//   router.delete("/api/workouts", ({ body }, res) => {
//     Workout.findByIdAndDelete(body.id)
//       .then(() => {
//         res.json(true);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });



module.exports = app;
// exercises

