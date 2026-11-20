import { Todo } from "../models/todo.model.mjs";
import { ApiError } from "../utils/ApiError.mjs";
import { ApiResponse } from "../utils/ApiResponse.mjs";

const createTodoController = async (req, res) => {
  const { title, completed = false } = req.body;

  if (!title) {
    throw new ApiError(400, "title are required");
  }

  const todo = await Todo.create({
    title,
    completed,
  });

  if (!todo) {
    throw new ApiError(500, "todo not created");
  }

  res.status(201).json(new ApiResponse(201, { todo }));
};

const getTodoController = async (_, res) => {
  const todos = await Todo.find({});
  res.status(200).json(new ApiResponse(200, { todos }));
};

const getSingleTodoController = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new ApiError(400, "Please enter a Todo Id");
  }
  const todo = await Todo.findById(id);
  if (!todo) {
    throw new ApiError(404, "Todo not found");
  }
  res.status(200).json(
    new ApiResponse(200, todo)
  )
};

const updateTodoController = async (req, res) => {};

const deleteTodoController = async (req, res) => {};

export {
  createTodoController,
  getTodoController,
  getSingleTodoController,
  updateTodoController,
  deleteTodoController,
};
