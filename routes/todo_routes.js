const controller = require("../controller/todo.controller");
const express = require("express");
const authenticator = require("../middlewares/authenticator.middleware");
const todoRouter = express.Router();

todoRouter.get("/fetch", authenticator, controller.fetchTodo);
todoRouter.post("/add", authenticator, controller.addTodo);
todoRouter.delete("/delete/:id", authenticator, controller.deleteTodo);
todoRouter.patch("/update/:id", authenticator, controller.updateTodo);

module.exports = todoRouter;
