const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

const studentRoutes = require("./routes/stuentRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/student", studentRoutes);
app.use("/admin", adminRoutes);

mongoose
  .connect(process.env.DB_URL)
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log("SERVER STARTED IN PORT: " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
