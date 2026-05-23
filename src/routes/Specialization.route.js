import { Router } from "express";
import {
  createSpecialization,
  getSpecial,
  updateSpecialization,
  deleteSpecial,
} from "../controllers/Specialization.controller.js";
import { ExpressValidator } from "express-validator";
import express from "express";
import specialValidator from "../validators/Specialization.validator.js";
import validatorResult from "express-validator";
const router = express.Router();
router.post("/Special-Appointed", specialValidator, createSpecialization);
router.get("/getAll-Specialss", specialValidator, getSpecial);
router.put("/update-Special/:id", specialValidator, updateSpecialization);
router.delete("/delete-Special/:id", specialValidator, deleteSpecial);
export default router;
