const express = require("express");
const app = express();

const { post, update, remove } = require("../middleware/bookMiddleware");
const {  appGet,
  appRemove,
  appPut,
  appPost}= require('../controller/bookController')

app.get("/list*",appGet);

app.delete("/delete/:book_name", remove, appRemove);

app.put("/put/", update, appPut);

app.post("/book", post,appPost);

module.exports = app;
