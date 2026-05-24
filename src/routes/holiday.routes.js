import express from "express";

import {
  addHoliday,
  getHolidays,
  updateHoliday,
  deleteHoliday,
} from "../controllers/holiday.controller.js";

const router = express.Router();

router.post("/addholiday", addHoliday);

router.get("/getholidays", getHolidays);

router.patch("/updateholiday/:id", updateHoliday);

router.delete("/deleteholiday/:id", deleteHoliday);

export default router;
