import { body, validationResult } from "express-validator";

const userValidator = [
  body("name").optional().notEmpty().withMessage("Name is required"),
  body("phoneNumber")
    .optional()
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone number must be 10 digits")
    .isNumeric()
    .withMessage("only numbers allowed"),
  body("email").isEmail().withMessage("Vaild email required"),
  body("password").isLength({ min: 6 }).withMessage("enter valid Password"),
];
export default userValidator;
