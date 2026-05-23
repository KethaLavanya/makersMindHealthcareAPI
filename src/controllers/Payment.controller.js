import { get } from "mongoose";
import Payment from "../models/Payment.model.js";
import { handleError, handleSuccess } from "../utils/responseHandle.js";
const createPayment = async (req, res) => {
  try {
    const {
      InvoiceID,
      PaidDate,
      PatientName,
      DoctorName,
      TotalAmount,
      PaymentMethod,
      PaymentStatus,
      OtherInformation,
    } = req.body;
    const newPayment = new Payment({
      InvoiceID,
      PaidDate,
      PatientName,
      DoctorName,
      TotalAmount,
      PaymentMethod,
      PaymentStatus,
      OtherInformation,
    });
    const savedPayment = await newPayment.save();
    return handleSuccess(
      res,
      "Payment is successfully created",
      201,
      newPayment,
    );
  } catch (error) {
    const errorMessage = error.message;
    return handleError(res, errorMessage, 500);
  }
};

const getPayment = async (req, res) => {
  try {
    const getPaymentSchema = await Payment.find();
    return handleSuccess(
      res,
      "All payment data fetched successfully",
      200,
      getPaymentSchema,
    );
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};
const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const existingUser = await Payment.findByIdAndUpdate(id, res.body, {
      new: true,
    });
    if (!existingUser) {
      return handleError(res, "User not found", 404);
    }
    return handleSuccess(
      res,
      "Payment is successfully updated",
      200,
      updatePayment,
    );
  } catch (error) {
    return handleError(res, "Internal Server Error", 500);
  }
};
const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteExistingUser = await Payment.findByIdAndDelete(id);
    if (!deleteExistingUser) {
      return handleError(res, "User not found", 404);
    }
    return handleSuccess(
      res,
      "Payment is successfully deleted",
      200,
      deleteExistingUser,
    );
  } catch (error) {
    return handleError(res, "Internal Server Error", 500);
  }
};
export { createPayment, getPayment, updatePayment, deletePayment };
