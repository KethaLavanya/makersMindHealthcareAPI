import { get } from "mongoose";
import Invoice from "../models/Invoice.model.js";
import { handleError, handleAccess } from "../utils/responseHandle.js";
const createInvoice = async (req, res) => {
  try {
    const {
      PatientName,
      Email,
      Department,
      TAX,
      InvoiceDate,
      DueDate,
      PatientAdress,
      BillingAddress,
      PaymentMethod,
      PaymentStatus,
      Item,
      Description,
      UnitCost,
      Qyt,
      Amount,
      Discount,
      OtherInformation,
    } = req.body;
    const invoiceSchema = await Invoice.create({
      PatientName,
      Email,
      Department,
      TAX,
      InvoiceDate,
      DueDate,
      PatientAdress,
      BillingAddress,
      PaymentMethod,
      PaymentStatus,
      Item,
      Description,
      UnitCost,
      Qyt,
      Amount,
      Discount,
      OtherInformation,
    });
    res.status(201).json({
      success: true,
      message: "Invoice is successfully created",
      invoiceSchema,
    });
  } catch (error) {
    const errorMessage = error.message;
    return handleError(res, errorMessage, 500);
  }
};

const getInvoice = async (req, res) => {
  try {
    const getInvoiceSchema = await Invoice.find();
    return handleSuccess(
      res,
      "All staff data fetched successfully",
      200,
      getInvoiceSchema,
    );
  } catch (error) {
    return handleError(res, error.message, 500);
  }
};

const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const existingUser = await Invoice.findByIdAndUpdate(id, res.body, {
      new: true,
    });
    if (!existingUser) {
      return handleError(res, "User not found", 404);
    }
    return handleSuccess(
      res,
      "Invoice is successfully updated",
      200,
      updateInvoice,
    );
  } catch (error) {
    return handleError(res, "Internal Server Error", 500);
  }
};
const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteExistingUser = await Invoice.findByIdAndDelete(id);
    if (!deleteExistingUser) {
      return handleError(res, "User not found", 404);
    }
    return handleSuccess(
      res,
      "Invoice is successfully deleted",
      200,
      deleteExistingUser,
    );
  } catch (error) {
    return handleError(res, "Internal Server Error", 500);
  }
};
export { createInvoice, getInvoice, updateInvoice, deleteInvoice };
