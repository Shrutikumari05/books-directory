
const mongoose = require("mongoose");

const collectionUrl = process.env.MONGODB_URI + process.env.DB_NAME;

require("dotenv").config();

const connectDB = async () => {
  try {
    // await mongoose.connect(collectionUrl);
     await mongoose.connect("mongodb://127.0.0.1:27017/BookData");
    console.log("Connected to mongoDb");
  } catch (error) {
    console.log("Mongodb connection error", error);
    process.exit(1);
  }
};

module.exports = connectDB;