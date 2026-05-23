import { body } from "express-validator";
const invoiceValidator = [
  body("PatientName").notEmpty().withMessage("Patient Name is required"),
  body("Email").notEmpty().withMessage("Email is required"),
  body("Department").notEmpty().withMessage("Department is required"),
  body("TAX").notEmpty().withMessage("TAX is required"),
  body("InvoiceDate").notEmpty().withMessage("Invoice Date is required"),
  body("DueDate").notEmpty().withMessage("Due Date is required"),
  body("PatientAdress").notEmpty().withMessage("Patient Adress is required"),
  body("BillingAddress").notEmpty().withMessage("Billing Address is required"),
  body("PaymentMethod").notEmpty().withMessage("Payment Method is required"),
  body("PaymentStatus").notEmpty().withMessage("Payment Status is required"),
  body("Items").notEmpty().withMessage("Items is required"),
  body("Description").notEmpty().withMessage("Description is required"),
  body("UnitCost").notEmpty().withMessage("Unit Cost is required"),
  body("Qyt").notEmpty().withMessage("Qyt is required"),
  body("Ammount").notEmpty().withMessage("Amount is required"),
  body("Discount").notEmpty().withMessage("Discount is required"),
  body("OtherInformation")
    .notEmpty()
    .withMessage("Other Information is required"),
];
export default invoiceValidator;
