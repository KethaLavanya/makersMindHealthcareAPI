import { Router } from "express";
import {
  createPayment,
  getPayment,
  updatePayment,
  deletePayment,
} from "../controllers/Payment.controller.js";
import { ExpressValidator } from "express-validator";
import express from "express";
import paymentValidator from "../validators/Payment.validator.js";
import validatorResult from "express-validator";
const router = express.Router();
router.post("/PaymentAppointed", paymentValidator, createPayment);
router.get("/getAllPayments", paymentValidator, getPayment);
router.put("/updatePayment/:id", paymentValidator, updatePayment);
router.delete("/deletePayment/:id", paymentValidator, deletePayment);
export default router;
