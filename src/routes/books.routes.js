const express = require("express");
const router = express.Router();
const {
  createBook,
  getAllbooks,
  getBookByNAme,
  getAllAuthorNames,
  getAllGenres,
  getBooksByGenre,
  deleteBook,
} = require("../controllers/book.controller");

router.post("/createBook", createBook);
router.get("/allBook", getAllbooks);
router.get("/:name", getBookByNAme);
router.delete("/:id", deleteBook);

router.get("/authors/name", getAllAuthorNames);
router.get("/genre/list", getAllGenres);
router.get("/genre/:genre", getBooksByGenre);


module.exports = router;
