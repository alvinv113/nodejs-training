const express = require("express");
const app = express();
const middleware = require("../middleware/middleware");
const User = require("../model/user");
app.use(middleware);

app.get("/get", (req, res) => {
  res.send("in the router file");
});

app.post("/user", middleware, (req, res) => {
  const user1 = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    profession: req.body.profession,
    password: req.body.password,
  });
  const savedValue = user1.save();
  res.json("Data saved");
});

module.exports = app;
