import { Router } from "express";
import {
  deleteProduct,
  getProducts,
  createProduct,
  updateProduct,
  getProduct,
} from "../controllers/products";
import fileUpload from "express-fileupload";

const router = Router();

router.get("/adminApi/products", getProducts);

router.post(
  "/adminApi/products",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  createProduct
);

router.put("/adminApi/products/:id", updateProduct);

router.delete("/adminApi/products/:id", deleteProduct);

router.get("/adminApi/products/:id", getProduct);

export default router;
