import app from "./src/app.mjs";
import dotenv from 'dotenv/config';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
