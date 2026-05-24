import Expense from "../models/expense.models.js";
import { handleAccess, handleError } from "../utils/responseHandle.js";

// createexpense
const createExpense = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await Expense.findOne({ email });
    if (existingUser) {
      return handleError(res, "expense already exists");
    }
    const newexpense = new Expense(req.body);
    const savedexpense = await newexpense.save();
    return handleSuccess(
      res,
      "expense created successfully",
      201,
      savedexpense,
    );
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};

// getall
const getExpense = async (req, res) => {
  try {
    const expenseData = await Expense.find();
    return handleSuccess(res, "fetched successfully", 200, expenseData);
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};

// updateexpense

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedexpense = await Expense.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedexpense) {
      return handleError(res, "expense not found", 404);
    }
    return handleSuccess(
      res,
      "expense updated successfully",
      200,
      updatedexpense,
    );
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedexpense = await Expense.findByIdAndDelete(id);
    if (!deletedexpense) {
      return handleError(res, "expense not found", 404);
    }
    return handleSuccess(
      res,
      "expense deleted successfully",
      200,
      deletedexpense,
    );
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};
export { createExpense, getExpense, updateExpense, deleteExpense };
