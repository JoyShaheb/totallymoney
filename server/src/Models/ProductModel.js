import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  apr: {
    type: Number,
    required: false,
  },
  balanceTransfer: {
    type: Number,
    required: false,
  },
  purchaseOffer: {
    type: Number,
    required: false,
  },
  credit: {
    type: Number,
    required: false,
  },
  info: {
    type: String,
    required: false,
  },
});

export const ProductModel = mongoose.model("Product", ProductSchema);
