import { Router } from "express";
import { ExpressValidator } from "express-validator";
import express from "express";
import incomeValidator from "../validators/income.validators.js";
import {
  createIncome,
  getIncome,
  updateIncome,
  deleteIncome,
} from "../controllers/income.controllers.js";
import { validationResult } from "express-validator";

const router = express.Router();
router.post("/createincome", incomeValidator, createIncome);
router.get("/allincome", incomeValidator, getIncome);
router.put("/updateincome/:id", incomeValidator, updateIncome);
router.delete("/deleteincome/:id", incomeValidator, deleteIncome);
export default router;
