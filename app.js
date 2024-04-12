const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/todoModel");

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

module.exports = app;
