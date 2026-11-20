import { Todo } from "../models/todo.model.mjs";
import { ApiError } from "../utils/ApiError.mjs";


const createTodoController = async (req, res) => {
    const { title, completed } = req.body;

    if (!(title && completed)) {
        throw new ApiError(400, "All fields are required");
    }

    

}

const getTodoController = async (req, res) => {

}

export { createTodoController, getTodoController }