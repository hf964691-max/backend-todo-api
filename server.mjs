import app from "./src/app.mjs";
import dotenv from "dotenv";
import connectDB from "./src/config/db.mjs";

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB CONNECTION FAILED !!!", error);
  });
