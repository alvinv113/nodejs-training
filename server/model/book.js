const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

const bookSchema = new mongoose.Schema({
  book_name: {
    type: String,
    required: true,
  },
  book_author: {
    type: String,
    required: true,
  },
  book_publication: {
    type: String,
    required: true,
  },
  released_data: {
    type: String,
    required: true,
  },
  version: {
    type: Number,
    required: true,
  },
});

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
