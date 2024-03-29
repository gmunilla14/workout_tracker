const { Exercise } = require("../models/exercise");
const express = require("express");
const Joi = require("joi");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const exercises = await Exercise.find();

    res.send(exercises);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required().min(1).max(200),
    muscleIDs: Joi.array().items(Joi.string()).required(),
    notes: Joi.string().max(1000)
  }).options({ abortEarly: false });

  const { error } = schema.validate(req.body);
  if (error) return res.status(500).send(error.details[0].message);

  const { name, muscleIDs, notes } = req.body;

  let exercise = new Exercise({
    name,
    muscleIDs,
    notes
  });

  try {
    exercise = await exercise.save();
    res.send(exercise);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

module.exports = router
