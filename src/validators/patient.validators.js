import { body } from "express-validator";

const patientValidator = [
  body("fullName").trim().notEmpty().withMessage("Full name required"),

  body("age")
    .isInt({ min: 0 })
    .withMessage("Age must be a valid positive number")
    .toInt(),

  body("gender")
    .isIn(["Male", "Female", "Other"])
    .withMessage("Gender must be Male, Female, or Other"),

  body("bloodGroup").trim().notEmpty().withMessage("Blood group required"),

  body("phoneNumber")
    .trim()
    .notEmpty()
    .withMessage("Phone number required")
    .isMobilePhone("any")
    .withMessage("Phone number must be valid"),

  body("email")
    .optional({ checkFalsy: true })
    .isEmail()
    .withMessage("Email must be valid")
    .normalizeEmail(),

  body("address").trim().notEmpty().withMessage("Address required"),

  body("diseaseDetails")
    .trim()
    .notEmpty()
    .withMessage("Disease details required"),
];

export default patientValidator;
