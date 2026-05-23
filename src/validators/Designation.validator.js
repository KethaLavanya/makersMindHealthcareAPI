import { body } from "express-validator";
const designValidator = [
  body("DesignationType")
    .notEmpty()
    .withMessage("Designation Type is required"),
  body("DesignationName")
    .notEmpty()
    .withMessage("Designation Name is required"),
  body("Department").notEmpty().withMessage("Department is required"),
  body("Description").notEmpty().withMessage("Description is required"),
];
export default designValidator;
