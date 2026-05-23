import mongoose from "mongoose";
const expenseSchema = new mongoose.Schema({
  expensename: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  Purchasedby: {
    type: String,
    required: true,
  },
  Paymentmethod: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Expense", expenseSchema);
