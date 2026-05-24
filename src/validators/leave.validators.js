import { body } from "express-validator";

const patientValidator = [
  body("name")
    .notEmpty()
    .withMessage("Patient name is required")
    .isLength({ min: 3 })
    .withMessage("Name must have at least 3 characters"),

  body("age")
    .notEmpty()
    .withMessage("Age is required")
    .isNumeric()
    .withMessage("Age must be a number"),

  body("gender")
    .notEmpty()
    .withMessage("Gender is required")
    .isIn(["Male", "Female", "Other"])
    .withMessage("Gender must be Male, Female or Other"),

  body("phone")
    .notEmpty()
    .withMessage("Phone number is required")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone must be 10 digits"),

  body("address").notEmpty().withMessage("Address is required"),
];

export default patientValidator;
