import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  res.send("getUser");
};

export const createUser = async (req, res) => {
    console.log(req);
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Missing Required Fields!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  res.status(201).json({ user, message: "User is created!" });
};

export const updateUser = async (req, res) => {
  res.send("updateUser");
};

export const deleteUser = async (req, res) => {
  res.send("deleteUser");
};
