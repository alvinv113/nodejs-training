const express = require("express");
const app = express();
const dotenv = require("dotenv"); // it takes the path
const bodyParser = require("body-parser");

dotenv.config({ path: "./.env" });
const port = process.env.PORT || 5399;
require("./db/connection");

// to understand the json request
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get all routes from the routes folder and the its file
app.use(require("./routes/bookRoutes"));
app.use(require("./routes/user"))

app.listen(port, () => {
  console.log("server is running on port :", port);
});
