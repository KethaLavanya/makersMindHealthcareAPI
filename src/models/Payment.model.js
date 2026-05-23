import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema({
  InvoiceID: {
    type: String,
    required: true,
    unique: true,
  },
  PaidDate: {
    type: Date,
    required: true,
  },
  PatientName: {
    type: String,
    enum: [
      "Alberto Ripley",
      "Susan Babin",
      "Martin Lisa",
      "Stella Mary",
      "Coral Lam",
      "Jesus Adams",
      "Ezra Belcher",
      "Glen Lentz",
      "Bernard Griffith",
      "John Elsass",
    ],
    required: true,
  },
  DoctorName: {
    type: String,
    enum: [
      "Dr.Mick Thompson",
      "Dr.Sarah Johnson",
      "Dr.Emily Carter",
      "Dr.David Lee",
      "Dr.Anna Kim",
      "Dr.John Smith",
      "Dr.Lisa White",
      "Dr.Patrica Brown",
      "Dr.Rachel Green",
      "Dr.Michael Smith",
    ],
    required: true,
  },
  TotalAmount: {
    type: Number,
    required: true,
  },
  PaymentMethod: {
    type: String,
    enum: ["PayPal", "Options Enhanced", "Cheque"],
    required: true,
  },
  PaymentStatus: {
    type: String,
    enum: ["Approved", "Options Enhanced", "Pending", "New"],
    required: true,
  },
  OtherInformation: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Payment", paymentSchema);
