const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook
} = require("../controllers/bookController");

router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.post("/books", createBook);     // Admin
router.put("/books/:id", updateBook);  // Admin

module.exports = router;
