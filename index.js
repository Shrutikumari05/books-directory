const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connectDB = require("./src/db/dbconfig");

require("dotenv").config();

PORT = process.env.PORT || 9000;

const app = express();
app.use(bodyParser.json());

const bookRouter = require("./src/routes/books.routes");
app.use("/book", bookRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection error", err);
  });
