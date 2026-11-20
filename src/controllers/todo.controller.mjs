import { Todo } from "../models/todo.model.mjs";
import { ApiError } from "../utils/ApiError.mjs";
import { ApiResponse } from "../utils/ApiResponse.mjs";


const createTodoController = async (req, res) => {
    const { title, completed } = req.body;

    if (!title) {
        throw new ApiError(400, "title are required");
    }

    const todo = await Todo.create({
        title,
        completed
    })

    if (!todo) {
        throw new ApiError(500, "todo not created")
    }

    res.status(201).json(
        new ApiResponse(201, {todo})
    )

}

const getTodoController = async (req, res) => {

}

export { createTodoController, getTodoController }