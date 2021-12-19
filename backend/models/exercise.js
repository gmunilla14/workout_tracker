const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  muscleIDs: [String],
  notes: String
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
exports.Exercise = Exercise;
