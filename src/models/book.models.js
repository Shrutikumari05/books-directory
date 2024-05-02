const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    name: {
      type: String,
      required: true,
    },
  },
  genre: {
    name: {
      type: String,
      required: true,
    },
  },
  description: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

//type: mongoose.Schema.Types.ObjectId,
// ref: "Author",
