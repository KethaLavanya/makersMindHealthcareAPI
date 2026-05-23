import { Router } from "express";
import {
  createDesignation,
  getDesignation,
  updateDesignation,
  deleteDesignation,
} from "../controllers/Designation.controller.js";
import { ExpressValidator } from "express-validator";
import express from "express";
import designValidator from "../validators/Designation.validator.js";
import validatorResult from "express-validator";
const router = express.Router();
router.post("/Designation-Appointed", designValidator, createDesignation);
router.get("/getAll-Designation", designValidator, getDesignation);
router.put("/update-Designation/:id", designValidator, updateDesignation);
router.delete("/delete-Designation/:id", designValidator, deleteDesignation);
export default router;
