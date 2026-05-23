import { Router } from "express";
import {
  createDepartment,
  getDepartment,
  updateDepartment,
  deleteDepartment,
} from "../controllers/department.controller.js";
import { ExpressValidator } from "express-validator";
import express from "express";
import appointmentValidator from "../validators/appointment.validator.js";
import validatorResult from "express-validator";

const router = express.Router();

router.post("/DepartmentAppointed", createDepartment);
router.get("/getAllDepartment", getDepartment);
router.put("/updateDepartment/:id", updateDepartment);
router.delete("/deleteDepartment/:id", deleteDepartment);
export default router;
