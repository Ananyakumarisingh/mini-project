const mongoose = require("mongoose");
const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    tag: {
      type: String,
      require: true,
      default: "General",
    },
    completed: {
      type: Boolean,
      default: false,
    },
    date:{
      type: String,
      require: true
    }
  },
  { timestamp: true }
);

const TodoModel = mongoose.model("todos", todoSchema);

module.exports = TodoModel;
