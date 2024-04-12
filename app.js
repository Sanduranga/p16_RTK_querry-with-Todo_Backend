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

app.post("/todo", (req, res) => {
  const user = new User({
    id: req.body.id,
    task: req.body.task,
  });
  user
    .save()
    .then((responce) => res.json({ responce }))
    .catch((err) => res.json({ err }));
});

app.get("/todos", (req, res) => {
  User.find()
    .then((responce) => res.json({ responce }))
    .catch((err) => res.json({ err }));
});

module.exports = app;
