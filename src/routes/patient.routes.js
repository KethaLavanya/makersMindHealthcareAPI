import express from "express";

import patientValidator from "../validators/patient.validator.js";

import {
  addPatient,
  deletePatient,
  getPatientById,
  getPatients,
  updatePatient,
} from "../controllers/patient.controllers.js";

const router = express.Router();

router.post("/patients", patientValidator, addPatient);
router.get("/patients", getPatients);
router.get("/patients/:id", getPatientById);
router.patch("/patients/:id", updatePatient);
router.delete("/patients/:id", deletePatient);

export default router;
