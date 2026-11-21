import mongoose from "mongoose";
import { Todo } from "../models/todo.model.mjs";
import { ApiError } from "../utils/ApiError.mjs";
import { ApiResponse } from "../utils/ApiResponse.mjs";

const createTodoController = async (req, res, next) => {
  try {
    // req.body is already validated & cleaned by middleware ✅
    const todo = await Todo.create(req.body);
    res.status(201).json(new ApiResponse(201, { todo }, "Todo created Successfully"));
  } catch (error) {
    next(error); // 👈 IMPORTANT: pass the error!
  }
};

const getTodoController = async (req, res, next) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(new ApiResponse(200, { todos }));
  } catch (error) {
    next(error);
  }
};

const getSingleTodoController = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new ApiError(400, "Invalid todo ID");
    }
    const todo = await Todo.findById(id);
    if (!todo) {
      throw new ApiError(404, "Todo not found");
    }
    res.status(200).json(new ApiResponse(200, todo));
  } catch (error) {
    next(error);
  }
};

const updateTodoController = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new ApiError(400, "Invalid todo ID");
    }
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedTodo) {
      throw new ApiError(404, "Todo not found");
    }
    res.status(200).json(new ApiResponse(200, updatedTodo));
  } catch (error) {
    next(error);
  }
};

const deleteTodoController = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new ApiError(400, "Invalid todo ID");
    }
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      throw new ApiError(404, "Todo not found");
    }
    res.status(200).json(new ApiResponse(200, deletedTodo, "Todo deleted Successfully"));
  } catch (error) {
    next(error);
  }
};

export {
  createTodoController,
  getTodoController,
  getSingleTodoController,
  updateTodoController,
  deleteTodoController,
};