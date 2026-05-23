import mongoose from "mongoose";
const assetSchema = new mongoose.Schema({
  AssetName: {
    type: String,
    required: true,
  },
  AssetUser: {
    type: String,
    enum: [
      "Emily Clark",
      "John Carter",
      "Sophia White",
      "Michael Johnson",
      "Olivia Harris",
      "David Anderson",
    ],
    required: true,
  },
  PurchaseDate: {
    type: Date,
    required: true,
  },
  PurchaseForm: {
    type: String,
    required: true,
  },
  Manufacturer: {
    type: String,
    required: true,
  },
  Model: {
    type: String,
    required: true,
  },
  SerialNumber: {
    type: String,
    required: true,
  },
  Supllier: {
    type: String,
    enum: ["New One", "Old One", "Recent One"],
    required: true,
  },
  Condition: {
    type: String,
    enum: ["Good One", "Old One", "Recent One"],
    required: true,
  },
  Warranty: {
    type: String,
    required: true,
  },
  Value: {
    type: Number,
    required: true,
  },
  Status: {
    type: String,
    enum: ["Approved", "Pending"],
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Assets", assetSchema);
