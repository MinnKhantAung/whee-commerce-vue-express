import express from "express";
import { configDotenv } from "dotenv";
import { registerRoute } from "./routes/index.js";
import { connectDb } from "./config/connectDb.js";

configDotenv();
connectDb();
const app = express();

// Use the body parser middleware before your route handler
app.use(express.json());

const port = process.env.PORT;
registerRoute(app);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
