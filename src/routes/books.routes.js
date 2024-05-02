const express = require("express");
const router = express.Router();
const {
  createBook,
  getAllbooks,
  getBookByNAme,
  getAllAuthorNames,
  getAllGenres,
} = require("../controllers/book.controller");

router.post("/createBook", createBook);
router.get("/allBook", getAllbooks);
router.get("/:name", getBookByNAme);
router.get("/authors/name", getAllAuthorNames);
router.get("/genre/list", getAllGenres);

module.exports = router;
