import { body } from "express-validator";
const paymentValidator = [
  body("InvoiceID").notEmpty().withMessage("Invoice ID is required"),
  body("PaidDate").notEmpty().withMessage("Paid Date is required"),
  body("PatientName").notEmpty().withMessage("Patient Name is required"),
  body("DoctorName").notEmpty().withMessage("Doctor Name is required"),
  body("TotalAmount").notEmpty().withMessage("Total Amount is required"),
  body("PaymentMethod").notEmpty().withMessage("Payment Method is required"),
  body("PaymentStatus").notEmpty().withMessage("Payment Status is required"),
  body("OtherInformation")
    .notEmpty()
    .withMessage("Other Information is required"),
];
export default paymentValidator;
