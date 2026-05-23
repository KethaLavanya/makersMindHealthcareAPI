import { Router } from "express";
import { ExpressValidator } from "express-validator";
import express from "express";
import expenseCategoryValidator from "../validators/expense.validators.js";
import {
  createExpense,
  getExpense,
  updateExpense,
  deleteExpense,
} from "../controllers/expense.controllers.js";
import { validationResult } from "express-validator";

const router = express.Router();
router.post("/createexpense", expenseCategoryValidator, createExpense);
router.get("/allexpense", expenseCategoryValidator, getExpense);
router.put("/updateexpense/:id", expenseCategoryValidator, updateExpense);
router.delete("/deleteexpense/:id", expenseCategoryValidator, deleteExpense);
export default router;
