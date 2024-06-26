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
    .then((response) => res.json(response))
    .catch((err) => res.json({ err }));
});

app.get("/todos", (req, res) => {
  Task.find()
    .then((response) => res.json(response))
    .catch((err) => res.json({ err }));
});

app.delete("/delete_todo/:_id", (req, res) => {
  const _id = req.params._id;
  Task.deleteOne({ _id: _id })
    .then((response) => res.json({ response }))
    .catch((err) => res.json({ err }));
});

app.put("/update_todo/:_id", (req, res) => {
  const _id = req.params._id;
  const { id, task } = req.body;
  console.log(id, task);
  Task.findByIdAndUpdate({ _id: _id }, { id: id, task: task })
    .then((response) => res.json({ response }))
    .catch((err) => res.json({ err }));
});

module.exports = app;
