import { z } from "zod";

// Schema for POST /todos (creating a todo)
export const createTodoSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(3, "Title must be at least 3 characters")
    .trim(),
  completed: z.boolean().optional().default(false),
});

// Schema for PATCH /todos/:id (updating a todo)
export const updateTodoSchema = z
  .object({
    title: z
      .string()
      .min(3, "Title must be at least 3 characters")
      .trim()
      .optional(),
    completed: z.boolean().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field (title or completed) must be provided",
  });
