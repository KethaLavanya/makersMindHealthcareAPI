import express from "express";

import {
  addEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employee.controller.js";

const router = express.Router();

router.post("/addemployee", addEmployee);

router.get("/getemployees", getEmployees);

router.patch("/updateemployee/:id", updateEmployee);

router.delete("/deleteemployee/:id", deleteEmployee);

export default router;
