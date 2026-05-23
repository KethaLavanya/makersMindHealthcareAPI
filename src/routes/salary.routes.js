import { Router } from "express";
import { ExpressValidator } from "express-validator";
import express from "express";
import SalaryValidator from "../validators/salary.validators.js";
import {
  createSalary,
  getSalary,
  updateSalary,
  deleteSalary,
} from "../controllers/salary.controllers.js";
import { validationResult } from "express-validator";
import salaryValidator from "../validators/salary.validators.js";

const router = express.Router();
router.post("/createsalary", salaryValidator, createSalary);
router.get("/allsalary", salaryValidator, getSalary);
router.put("/updatesalary/:id", salaryValidator, updateSalary);
router.delete("/deletesalary/:id", salaryValidator, deleteSalary);
export default router;
