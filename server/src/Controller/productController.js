import { ProductModel } from "../Models/ProductModel";

export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};