import mongoose from "mongoose";
const incomeSchema = new mongoose.Schema({
  incomename: {
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
  receivedfrom: {
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
export default mongoose.model("Income", incomeSchema);
