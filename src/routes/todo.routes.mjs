import express from 'express';
import { createTodoController, getSingleTodoController, getTodoController } from '../controllers/todo.controller.mjs';

const router = express.Router();

router.route("/todos").post(createTodoController);
router.route("/todos").get(getTodoController);
router.route("/todo/:id").get(getSingleTodoController);

export default router;