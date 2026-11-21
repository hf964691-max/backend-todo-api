import express from "express";
import {
  createTodoController,
  getTodoController,
  getSingleTodoController,
  updateTodoController,
  deleteTodoController,
} from "../controllers/todo.controller.mjs";
import { validate } from "../middlewares/validate.middleware.mjs";
import {
  createTodoSchema,
  updateTodoSchema,
} from "../validators/todo.validator.mjs";

const router = express.Router();

// Validation runs BEFORE the controller — the controller never sees bad data.
router.post("/todos", validate(createTodoSchema), createTodoController);
router.get("/todos", getTodoController);
router.get("/todos/:id", getSingleTodoController);
router.patch("/todos/:id", validate(updateTodoSchema), updateTodoController);
router.delete("/todos/:id", deleteTodoController);

export default router;
