const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const workoutdata = new Schema(
    {
        day: {
        type: Date,
        default: Date.now()
        },
        exercises:[{
            type: {
                type: String
            },
            name:{
                type: String
            },
            duration:{
                type: Number
            },
            weight:{
                type: Number
            },
            reps:{
                type: Number
            },
            sets:{
                type: Number
            },
            distance:{
                type: Number
            },
        }]
    }
)

const Newtable = mongoose.model("Newtable", workoutdata)

module.exports = Newtable;