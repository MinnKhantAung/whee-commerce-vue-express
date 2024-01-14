import { User } from "../models/userModel.js";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  res.send("getUser");
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(401).json({ message: "All Fields are Required!" });
  const avalibleUser = await User.findOne({ email });
  if (!avalibleUser)
    return res.status(400).json({ message: "Email have been registered!" });
  const hashedPassword = bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (!user) return res.status(500).json({ message: "Something is wrong!" });
  return res.status(201).josn({ message: "User is created!" });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(401).json({ message: "All fields are Required!" });
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accesstoken = jwt.sign(
      {
        user: {
          name: user.name,
          email: user.email,
          id: user.id,
        },
      },
      process.env.SECRECT_KEY,
      { expiresIn: "10m" }
    );
    return res.status(200).json({accesstoken, user})
  }else{
    return res.status(401).json({message: "Email or Password is Invalid!"})
  }
};

export const createUser = async (req, res) => {
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
