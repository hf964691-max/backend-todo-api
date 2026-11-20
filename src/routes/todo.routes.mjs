import express from "express";
import {
  createTodoController,
  deleteTodoController,
  getSingleTodoController,
  getTodoController,
  updateTodoController,
} from "../controllers/todo.controller.mjs";

const router = express.Router();

router.route("/todos").post(createTodoController);
router.route("/todos").get(getTodoController);
router.route("/todo/:id").get(getSingleTodoController);
router.route("/todos/:id").patch(updateTodoController);
router.route("/todos/:id").delete(deleteTodoController);

export default router;
