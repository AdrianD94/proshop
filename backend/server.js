import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

const app = express();

connectDb();

dotenv.config();

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.status(200).json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
