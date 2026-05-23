import mongoose from "mongoose";
const invoiceScheme = new mongoose.Schema({
  PatientName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Department: {
    type: String,
    enum: [
      "General Medicine",
      "Pediatrics",
      "Gynecology",
      "Cardiology",
      "Orthopedics",
      "Dermatology",
      "ENT",
      "Neurology",
      "Psychiatry",
      "Pulmonology",
    ],
    required: true,
  },
  TAX: {
    type: String,
    enum: ["GST", "VAT", "Professional", "Income", "VAT"],
    required: true,
  },
  InvoiceDate: {
    type: Date,
    required: true,
  },
  DueDate: {
    type: Date,
    required: true,
  },
  PatientAdress: {
    type: String,
    required: true,
  },
  BillingAddress: {
    type: String,
    required: true,
  },
  PaymentMethod: {
    type: String,
    enum: ["PayPal", "Options Enhanced", "Cheque"],
    required: true,
  },
  PaymentStatus: {
    type: String,
    enum: ["Inporgress", "Completed", "Pending"],
    required: true,
  },
  Item: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  UnitCost: {
    type: String,
    required: true,
  },
  Qyt: {
    type: String,
    required: true,
  },
  Amount: {
    type: String,
    required: true,
  },
  Discount: {
    type: String,
    enum: ["0%", "1%", "2%", "3%", "4%"],
    required: true,
  },
  OtherInformation: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Invoice", invoiceScheme);
