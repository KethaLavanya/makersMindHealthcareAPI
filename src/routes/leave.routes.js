import express from "express";

import {
  addLeave,
  getLeaves,
  updateLeave,
  deleteLeave,
} from "../controllers/leave.controller.js";

const router = express.Router();

router.post("/addleave", addLeave);

router.get("/getleaves", getLeaves);

router.patch("/updateleave/:id", updateLeave);

router.delete("/deleteleave/:id", deleteLeave);

export default router;
