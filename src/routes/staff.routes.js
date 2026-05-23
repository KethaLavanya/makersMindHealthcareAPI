import { Router } from "express";
import { ExpressValidator } from "express-validator";
import express from "express";
import staffValidator from "../validators/staff.validator.js";
import {
  createStaff,
  getAllStaff,
  updateStaff,
  deleteStaff,
} from "../controllers/staff.controllers.js";
import { validationResult } from "express-validator";

const router = express.Router();
router.post("/createStaff", staffValidator, createStaff);
router.get("/allStaff", staffValidator, getAllStaff);
router.put("/updateStaff/:id", staffValidator, updateStaff);
router.delete("/deleteStaff/:id", staffValidator, deleteStaff);
export default router;
