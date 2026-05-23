import { body } from "express-validator";
const appointmentValidator = [
  body("AppointmentID").notEmpty().withMessage("Appointment ID is required"),
  body("Patient").notEmpty().withMessage("Patient is required"),
  body("Department").notEmpty().withMessage("Department is required"),
  body("Doctor").notEmpty().withMessage("Doctor is required"),
  body("AppointmentType")
    .notEmpty()
    .withMessage("Appointment Type is required"),
  body("DateOfAppointment")
    .notEmpty()
    .withMessage("Date Of Appointment is required"),
  body("Time").notEmpty().withMessage("Time is required"),
  body("AppointmentReason")
    .notEmpty()
    .withMessage("Appointment Reason is required"),
  body("Status").notEmpty().withMessage("Status is required"),
];
export default appointmentValidator;
