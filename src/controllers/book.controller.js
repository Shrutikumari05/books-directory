const Book = require("../models/book.models");


const createBook = async (req, res) => {
  try {
    const { title, author, genre, description } = req.body;
    const newBook = new Book({ title, author, genre, description });
    const saved = await newBook.save();
    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllbooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const getBookByNAme = async (req, res) => {
  try {
    const name = req.params.name;
    const book = await Book.findOne({ title: name });
    if (!book) {
      res.status(404).json({ message: "book not found" });
      return;
    }
    res.status(500).json(book);
  } catch (err) {
    res.status(205).json({ error: err.message });
  }
};


const getAllAuthorNames = async (req, res) => {
  try {
    const authorNames = await Book.distinct("author.name");
    res.status(200).json({ authorNames });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching author names" });
  }
};

// const getAllGenre = async (req, res) => {
//   try {
//     const genreNames = await Book.distinct("genre.name");
//     res.status(200).json({ genreNames });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error fetching author names" });
//   }
// };

const getAllGenres = async (req, res) => {
  try {
    // Use `.distinct()` to get unique genre names
    const genres = await Book.distinct("genre.name");

    res.status(200).json({ genres });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching genres" });
  }
};



module.exports = {
  getAllbooks,
  createBook,
  getBookByNAme,
  getAllAuthorNames,getAllGenres,
};
