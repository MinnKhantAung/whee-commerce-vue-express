import express from "express";
import { configDotenv } from "dotenv";
import { registerRoute } from "./api/index.js";
import { connectDb } from "./config/connectDb.js";
import cors from "cors";

configDotenv();
connectDb();
const app = express();

// Use the body parser middleware before your route handler
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

registerRoute(app);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
