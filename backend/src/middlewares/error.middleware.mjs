import { ApiError } from "../utils/ApiError.mjs";

export const errorHandler = (err, req, res, next) => {
  // If it's one of our ApiErrors, use its status and message
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  // Otherwise, it's an unexpected error
  console.error("UNEXPECTED ERROR:", err);
  return res.status(500).json({
    status: 500,
    message: err.message || "Internal Server Error",
  });
};
