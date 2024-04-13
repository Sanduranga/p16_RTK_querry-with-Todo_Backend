const express = require("express");
const app = express();
const cors = require("cors");
const Task = require("./models/todoModel");

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.post("/todo", (req, res) => {
  const user = new Task({
    id: req.body.id,
    task: req.body.task,
  });
  user
    .save()
    .then((response) => res.json({ response }))
    .catch((err) => res.json({ err }));
});

app.get("/todos", (req, res) => {
  Task.find()
    .then((response) => res.json({ response }))
    .catch((err) => res.json({ err }));
});

app.delete("/delete_todo", (req, res) => {
  const id = req.body.id;
  Task.deleteOne({ _id: id })
    .then((response) => res.json({ response }))
    .catch((err) => res.json({ err }));
});

app.put("/update_todo", (req, res) => {
  const { _id, id, task } = req.body;
  Task.findByIdAndUpdate({ _id: _id }, { id: id, task: task })
    .then((response) => res.json({ response }))
    .catch((err) => res.json({ err }));
});

module.exports = app;
