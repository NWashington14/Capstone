import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  store: { // can be used to compare item prices between stores
    type: String, // Kroger, Walmart, etc.
    required: true
  },
  brand: { // Not completely necessary but can be added if you want for further filtering
    type: String, // Kroger, Great Value, Nestle, etc.
    required: true
  },
  item: {
    type: String, // Milk, Bread, Eggs, etc.
    required: true
  },
  inventory: { // either this or inStock can be used
    type: String, // High, Low, Out
    required: true
  },
  price: {
    type: String, // 1.99, 5.99, etc.
    required: true
  }
});

const Product = mongoose.model("Product", productSchema);

export default Product;
