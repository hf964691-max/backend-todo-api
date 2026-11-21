import express from "express";
import { ApiResponse } from "./utils/ApiResponse.mjs";
import { errorHandler } from "./middlewares/error.middleware.mjs";

const app = express();

app.use(express.json())

app.get("/health", (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "Server is Running" }));
});

// routes import
import TodoRouter from "./routes/todo.routes.mjs";

// routes declaration
app.use("/api/v1", TodoRouter)

// Last middleware
app.use(errorHandler);

export default app;
