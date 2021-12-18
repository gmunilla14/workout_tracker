const mongoose = require("mongoose");

const muscleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200,
  },
});

const Muscle = mongoose.model("Muscle", muscleSchema);
exports.Muscle = Muscle;
