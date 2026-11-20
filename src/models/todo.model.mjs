import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required for creating a Todo"],
            trim: true
        },
        completed: {
            type: Boolean,
            required: true,
            default: false
        },
    },
    { timestamps: true }
)

export const Todo = mongoose.model("Todo", todoSchema);