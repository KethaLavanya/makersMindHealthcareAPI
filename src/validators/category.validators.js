import { body } from "express-validator";

// Expense Validator
const expenseValidator = [
  body("expenseName").notEmpty().withMessage("Expense Name is required"),

  body("category").notEmpty().withMessage("Category is required"),

  body("amount")
    .notEmpty()
    .withMessage("Amount is required")
    .isNumeric()
    .withMessage("Amount must be a number"),

  body("date").notEmpty().withMessage("Date is required"),

  body("purchasedBy").notEmpty().withMessage("Purchased By is required"),

  body("paymentMethod").notEmpty().withMessage("Payment Method is required"),

  body("status").notEmpty().withMessage("Status is required"),
];

export default expenseValidator;
