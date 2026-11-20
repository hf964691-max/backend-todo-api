import express from "express";
import { ApiResponse } from "./utils/ApiResponse.mjs";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "Server is Running" }));
});

export default app;
