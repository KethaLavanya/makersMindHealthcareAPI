import { Router } from "express";
import {
  createInvoice,
  getInvoice,
  updateInvoice,
  deleteInvoice,
} from "../controllers/Invoice.controller.js";
import { ExpressValidator } from "express-validator";
import express from "express";
import Invoice from "../validators/Invoice.validator.js";
import validatorResult from "express-validator";
const router = express.Router();
router.post("/InvoiceAppointed", createInvoice);
router.get("/getAllInvoice", getInvoice);
router.put("/updateInvoice/:id", updateInvoice);
router.delete("/deleteInvoice/:id", deleteInvoice);
export default router;
