import { body } from "express-validator";
const specialValidator = [
  body("Specialization").notEmpty().withMessage("Specialization is required"),
  body("Description").notEmpty().withMessage("Description is required"),
];
export default specialValidator;
