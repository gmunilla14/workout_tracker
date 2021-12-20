const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    planID: {
        type: String,
        required: true,
        maxlength: 200
    },
    startTime: Number,
    endTime: Number,
    sets: [
        {
            number: {
                type: Number,
                required: true,
                min: 0,
                max: 100
            },
            type: {
                type: String, 
                maxlength: 50,
                required: true
            },
            startTime: Number,
            endTime: Number,
            exerciseID: {
                type: String,
                maxlength: 1000
            },
            weight: Number,
            reps: Number
        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);
exports.Workout = Workout;