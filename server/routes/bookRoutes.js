const express = require("express");
const app = express();
const book = require("../model/book");
const { post, update, remove } = require("../middleware/bookMiddleware");

app.get("/list", async (req, res) => {
  try {
    const getData = await book.find();
    res.send(getData);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/delete/:book_name", remove, async (req, res) => {
  try {
    console.log(req.params);
    const deleteData = await book.deleteOne(req.params);
    res.send("Book data is deleted");
  } catch (error) {
    console.log(error);
  }
});

app.put("/put/", update, async (req, res) => {
  try {
    const { version, released_data, book_name } = req.body;
    const updateBook = await book.updateOne(
      { book_name },
      {
        $set: {
          version,
          released_data,
        },
      }
    );

    console.log(version);
    res.send("updated");
  } catch (error) {
    console.log(error);
  }
});

app.post("/book", post, async (req, res) => {
  try {
    const { book_name, book_author, book_publication, released_data, version } =
      req.body;
    let bookData = new book({
      book_name,
      book_author,
      book_publication,
      released_data,
      version,
    });
    let result = await bookData.save();
    res.send("running successfully");
    // console.log(result);
  } catch (error) {
    console.log(error);
  }

  // res.json(result)
});

module.exports = app;
