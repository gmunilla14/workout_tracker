const express = require("express");
const { Workout } = require("../models/workout");
const Joi = require("joi");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const workouts = await Workout.find();

    res.send(workouts);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const schema = Joi.object({
    planID: Joi.string().required().max(200),
    startTime: Joi.number(),
    endTime: Joi.number(),
    sets: Joi.array().items(
      Joi.object({
        type: Joi.string().required(),
        startTime: Joi.number(),
        endTime: Joi.number(),
        exerciseID: Joi.string().max(1000),
        weight: Joi.number(),
        reps: Joi.number(),
      })
    ),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(500).send(error.details[0].message);

  const { planID, startTime, endTime, sets } = req.body;

  let workout = new Workout({
    planID,
    startTime,
    endTime,
    sets,
  });

  try {
    workout = await workout.save();
    res.send(workout);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

module.exports = router
