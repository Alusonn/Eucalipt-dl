import { Router } from "express";
import { deleteProduct, getProducts, createProduct, updateProduct } from "../controllers/products";

const router = Router();

router.get("/products", getProducts);

router.post("/products", createProduct);

router.put("/products", updateProduct);

router.delete("/products", deleteProduct);


export default router;
