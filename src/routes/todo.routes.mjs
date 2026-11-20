import express from 'express';
import { createTodoController, getTodoController } from '../controllers/todo.controller.mjs';

const router = express.Router();

router.route("/todos").post(createTodoController);
router.route("/todos").get(getTodoController);

export default router;