import { body } from "express-validator";

const staffValidator = [
  // Name
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters"),

  // Role
  body("role").notEmpty().withMessage("Role is required"),

  // Designation
  body("designation").notEmpty().withMessage("Designation is required"),

  // Phone Number
  body("phoneNumber")
    .notEmpty()
    .withMessage("Phone Number is required")
    .isMobilePhone()
    .withMessage("Invalid phone number"),

  // Email
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email"),

  // DOB
  body("dob").notEmpty().withMessage("Date of Birth is required"),

  // Gender
  body("gender").notEmpty().withMessage("Gender is required"),

  // Blood Group
  body("bloodGroup").notEmpty().withMessage("Blood Group is required"),

  // Address 1
  body("address1").notEmpty().withMessage("Address1 is required"),

  // Country
  body("country").notEmpty().withMessage("Country is required"),

  // State
  body("state").notEmpty().withMessage("State is required"),

  // City
  body("city").notEmpty().withMessage("City is required"),

  // Pincode
  body("pincode")
    .notEmpty()
    .withMessage("Pincode is required")
    .isPostalCode("IN")
    .withMessage("Invalid pincode"),
];

export default staffValidator;
