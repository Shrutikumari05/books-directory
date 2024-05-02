const Book = require("../models/book.models");
const mongoose = require("mongoose");

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

const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookId);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully", deletedBook });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Author Api

const getAllAuthorNames = async (req, res) => {
  try {
    const authorNames = await Book.distinct("author.name");
    res.status(200).json({ authorNames });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching author names" });
  }
};

//Genre Api
const getAllGenres = async (req, res) => {
  try {
    const genreNames = await Book.distinct("genre.name");
    res.status(200).json({ genreNames });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching author names" });
  }
};

const getBooksByGenre = async (req, res) => {
  try {
    const genre = req.params.genre;
    const books = await Book.find(
      { "genre.name": genre },
      {
        title: 1,
        _id: 0,
      }
    );
    if (!books || books.length === 0) {
      return res
        .status(404)
        .json({ message: "Books not found for this genre" });
    }
    const bookNames = books.map((book) => book.title);
    res.status(200).json({ books: bookNames });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllbooks,
  createBook,
  getBookByNAme,
  getAllAuthorNames,
  getAllGenres,
  getBooksByGenre,
  deleteBook,
};
