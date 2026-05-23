import { body } from "express-validator";

const salaryValidator = [
  body("staff").notEmpty().withMessage("Staff is required"),

  body("netSalary")
    .notEmpty()
    .withMessage("Net Salary is required")
    .isNumeric()
    .withMessage("Net Salary must be a number"),

  // Earnings
  body("earnings.basicSalary")
    .notEmpty()
    .withMessage("Basic Salary is required")
    .isNumeric(),

  body("earnings.da").notEmpty().withMessage("DA is required").isNumeric(),

  body("earnings.hra").notEmpty().withMessage("HRA is required").isNumeric(),

  body("earnings.conveyance")
    .notEmpty()
    .withMessage("Conveyance is required")
    .isNumeric(),

  body("earnings.medicalAllowance")
    .notEmpty()
    .withMessage("Medical Allowance is required")
    .isNumeric(),

  body("earnings.others")
    .notEmpty()
    .withMessage("Other earnings are required")
    .isNumeric(),

  // Deductions
  body("deductions.tds").notEmpty().withMessage("TDS is required").isNumeric(),

  body("deductions.esi").notEmpty().withMessage("ESI is required").isNumeric(),

  body("deductions.pf").notEmpty().withMessage("PF is required").isNumeric(),

  body("deductions.profTax")
    .notEmpty()
    .withMessage("Professional Tax is required")
    .isNumeric(),

  body("deductions.labourWelfare")
    .notEmpty()
    .withMessage("Labour Welfare is required")
    .isNumeric(),

  body("deductions.others")
    .notEmpty()
    .withMessage("Other deductions are required")
    .isNumeric(),
];

export default salaryValidator;
