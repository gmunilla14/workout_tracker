const { Muscle } = require("../models/muscle");
const express = require("express");
const Joi = require("joi");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const muscles = await Muscle.find();

    res.send(muscles);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required().min(1).max(200),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(500).send(error.message);

  const { name } = req.body;

  let muscle = new Muscle({
    name,
  });

  try {
    muscle = await muscle.save();
    res.send(muscle);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

module.exports = router