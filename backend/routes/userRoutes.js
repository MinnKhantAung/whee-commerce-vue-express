import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/user", createUser);
router.get("/users/:id", getUsers);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export const userRouter = router;
