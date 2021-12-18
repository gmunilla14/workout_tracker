const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const planRoutes = require("./routes/planRoutes");
const exerciseRoutes = require('./routes/exerciseRoutes')

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/plans", planRoutes);
app.use('/api/exercises', exerciseRoutes)

const connection_string = process.env.CONNECT_STRING;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection established");
  })
  .catch((err) => {
    console.log(err);
  });
