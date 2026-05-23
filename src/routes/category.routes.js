import { Router } from "express";
import { ExpressValidator } from "express-validator";
import express from "express";
import categoryValidator from "../validators/category.validators.js";
import {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controllers.js";
import { validationResult } from "express-validator";

const router = express.Router();
router.post("/createcategory", categoryValidator, createCategory);
router.get("/allcategory", categoryValidator, getCategory);
router.put("/updatecategory/:id", categoryValidator, updateCategory);
router.delete("/deletecategory/:id", categoryValidator, deleteCategory);
export default router;
