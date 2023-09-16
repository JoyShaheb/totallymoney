import express from "express";
import { getAllProducts } from "../Controller/productController";

export const productRouter = express.Router();

productRouter.get("/get-all", getAllProducts);
