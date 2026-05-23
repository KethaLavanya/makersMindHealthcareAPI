import Income from "../models/income.models.js";
import { handleSuccess, handleError } from "../utils/responseHandle.js";

// createincome
const createIncome = async (req, res) => {
  try {
    const { incomename } = req.body;
    const existingUser = await Income.findOne({ incomename });
    if (existingUser) {
      return handleError(res, "income already exists");
    }
    const newincome = new Income(req.body);
    const savedincome = await newincome.save();
    return handleSuccess(res, "income created successfully", 201, savedincome);
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};

// getall
const getIncome = async (req, res) => {
  try {
    const incomeData = await Income.find();
    return handleSuccess(res, "fetched successfully", 201, incomeData);
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};

// updateincome

const updateIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedincome = await Income.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedincome) {
      return handleError(res, "income not found", 404);
    }
    return handleSuccess(
      res,
      "income updated successfully",
      200,
      updatedincome,
    );
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};

const deleteIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedincome = await Income.findByIdAndDelete(id);
    if (!deletedincome) {
      return handleError(res, "income not found", 404);
    }
    return handleSuccess(
      res,
      "income deleted successfully",
      200,
      deletedincome,
    );
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};
export { createIncome, getIncome, updateIncome, deleteIncome };
