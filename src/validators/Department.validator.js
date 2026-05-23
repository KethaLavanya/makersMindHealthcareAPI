import { body } from "express-validator";
const departmentValidator = [
  body("DepartmentName").notEmpty().withMessage("Department Name is required"),
  body("Description").notEmpty().withMessage("Description is required"),
];
export default departmentValidator;
