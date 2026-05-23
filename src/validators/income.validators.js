// Income Validator
import { body } from "express-validator";
const incomeValidator = [
  body("incomeName").notEmpty().withMessage("Income Name is required"),

  body("amount")
    .notEmpty()
    .withMessage("Amount is required")
    .isNumeric()
    .withMessage("Amount must be a number"),

  body("date").notEmpty().withMessage("Date is required"),

  body("receivedBy").notEmpty().withMessage("Received By is required"),

  body("paymentMethod").notEmpty().withMessage("Payment Method is required"),

  body("status").notEmpty().withMessage("Status is required"),
];
export default incomeValidator;
