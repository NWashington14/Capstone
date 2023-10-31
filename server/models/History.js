import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
  item: {
    type: String, // Milk, Bread, Eggs, etc.
    required: true
  }
});

const History = mongoose.model("History", historySchema);

export default History;
