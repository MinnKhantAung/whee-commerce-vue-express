import { Product } from "../models/productModel.js";
import asyncHandler from "express-async-handler";

export const createProduct = asyncHandler(async (req, res) => {
  const { name, code, image } = req.body;
  if (!name || !code || !image)
    return res.status(401).json({ message: "All Fields are Required!" });
  const product = await Product.create({
    name,
    code,
    image,
    userId: req.user.id,
  });
  return res.status(200).json({ product });
});

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products, totalItems: products.length });
});

export const getById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product Not Found!" });
  return res.status(200).json({ product });
});

export const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product Not Found" });
  if (product.userId != req.user.id)
    return res.status(403).json({ message: "You have no Permission!" });
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  return res.status(200).json({ updatedProduct });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product Not Found" });
  if (product.userId != req.user.id)
    return res.status(403).json({ message: "You have no Permission!" });

  const deletedProduct = await Product.deleteOne({ _id: req.params.id });
  return res.status(200).json({ deletedProduct });
});   
