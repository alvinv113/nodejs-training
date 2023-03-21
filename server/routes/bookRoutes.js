const express = require("express");
const app = express();

const { post, update, remove } = require("../middleware/bookMiddleware");
const {  appGet,
  appRemove,
  appPut,
  appPost}= require('../controller/bookController')

app.get("/book*",appGet);

app.delete("/book/:book_name", remove, appRemove);

app.put("/book", update, appPut);

app.post("/book", post,appPost);

module.exports = app;
