import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { productRouter } from "./Routes/productRoutes";

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", productRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
