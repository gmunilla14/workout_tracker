const { Plan } = require("../models/plan");
const express = require("express");
const Joi = require("joi");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const plans = await Plan.find();

    res.send(plans);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(1).max(100).required(),
    creatorID: Joi.string().required(),
    sets: Joi.array().items(
      Joi.object({
        type: Joi.string().required(),
        plannedWeight: Joi.number(),
        plannedReps: Joi.number(),
        exerciseID: Joi.string(),
        plannedDuration: Joi.number(),
        exerciseID: Joi.string()
      })
    ),
  }).options({ abortEarly: false });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, creatorID, sets } = req.body;

  let plan = new Plan({
    name,
    creatorID,
    sets,
  });

  try {
    plan = await plan.save();
    res.send(plan);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
});

module.exports = router;
