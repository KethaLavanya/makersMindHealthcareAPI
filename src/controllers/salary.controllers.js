import Salary from "../models/salary.models.js";
import { handleSuccess, handleError } from "../utils/responseHandle.js";

// createSalary
const createSalary = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await Salary.findOne({ email });
    if (existingUser) {
      return handleError(res, "Salary already exists");
    }
    const newsalary = new Salary(req.body);
    const savedSalary = await newsalary.save();
    return handleSuccess(res, "Salary created successfully", 201, savedSalary);
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};

// getall
const getSalary = async (req, res) => {
  try {
    const SalaryData = await Salary.find();
    return handleSuccess(res, "fetched successfully", 200, SalaryData);
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};

// updateSalary

const updateSalary = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSalary = await Salary.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedSalary) {
      return handleError(res, "Salary not found", 404);
    }
    return handleSuccess(
      res,
      "Salary updated successfully",
      200,
      updatedSalary,
    );
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};

const deleteSalary = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSalary = await Salary.findByIdAndDelete(id);
    if (!deletedSalary) {
      return handleError(res, "Salary not found", 404);
    }
    return handleSuccess(
      res,
      "Salary deleted successfully",
      200,
      deletedSalary,
    );
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};
export { createSalary, getSalary, updateSalary, deleteSalary };
