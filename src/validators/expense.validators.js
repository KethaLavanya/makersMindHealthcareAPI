// Expense Category Validator
import { body } from "express-validator";
const expenseCategoryValidator = [
  body("categoryName").notEmpty().withMessage("Category Name is required"),

  body("description").notEmpty().withMessage("Description is required"),
];
export default expenseCategoryValidator;
