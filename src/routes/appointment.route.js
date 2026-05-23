import { Router } from "express";
import {
  createAppointment,
  getAppointment,
  updateAppointment,
  deleteAppointment,
} from "../controllers/Appointment.controller.js";
import { ExpressValidator } from "express-validator";
import express from "express";
import appointmentValidator from "../validators/appointment.validator.js";
import validatorResult from "express-validator";
const router = express.Router();
router.post("/appointed", createAppointment);
router.get("/getAllAppointment", getAppointment);
router.put("/updateAppointment/:id", updateAppointment);
router.delete("/deleteAppointment/:id", deleteAppointment);
export default router;
