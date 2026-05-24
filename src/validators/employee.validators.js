import { body } from "express-validator";

const employeeValidator = [
  body("name").notEmpty().withMessage("Employee name is required"),

  body("department").notEmpty().withMessage("Department is required"),

  body("salary")
    .notEmpty()
    .withMessage("Salary is required")
    .isNumeric()
    .withMessage("Salary must be a number"),
];

export default employeeValidator;
