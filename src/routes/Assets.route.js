import { Router } from "express";
import {
  createAssets,
  getAssets,
  updateAssets,
  deleteAssets,
} from "../controllers/Assets.controller.js";
import { ExpressValidator } from "express-validator";
import express from "express";
import AssetValidator from "../validators/Assets.validator.js";
import validatorResult from "express-validator";
const router = express.Router();
router.post("/Assets-Appointed", AssetValidator, createAssets);
router.get("/getAll-Assets", AssetValidator, getAssets);
router.put("/update-Assets/:id", AssetValidator, updateAssets);
router.delete("/delete-Assets/:id", AssetValidator, deleteAssets);
export default router;
