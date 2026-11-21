import express from "express";
import { ApiResponse } from "./utils/ApiResponse.mjs";

const app = express();

app.use(express.json())

app.get("/health", (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "Server is Running" }));
});

// routes import
import TodoRouter from "./routes/todo.routes.mjs";

// routes declaration
app.use("/api/v1", TodoRouter)

export default app;
