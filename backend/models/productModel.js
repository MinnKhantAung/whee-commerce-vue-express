import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Product = mongoose.model("Product", productSchema);
