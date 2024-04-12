const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todo = new Schema({
  id: Number,
  task: String,
});

const todoModel = mongoose.model("todoTasks", todo);

module.exports = todoModel;
