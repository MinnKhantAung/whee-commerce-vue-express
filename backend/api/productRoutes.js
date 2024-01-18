import express from "express";
import {
  createProduct,
  deleteProduct,
  getById,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";
import { ValidToken } from "../middlewares/ValidationHandler.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", ValidToken, getById);
router.post("/", ValidToken, createProduct);
router.put("/:id", ValidToken, updateProduct);
router.delete("/:id", ValidToken, deleteProduct);

export const productRoutes = router;
