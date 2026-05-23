import { get } from "mongoose";
import Department from "../models/Department.model.js";
import { handleError, handleSuccess } from "../utils/responseHandle.js";
const createDepartment = async (req, res) => {
  try {
    const { DepartmentName, Description } = req.body;
    const departmentSchema = await Department.create({
      DepartmentName,
      Description,
    });
    res.status(201).json({
      success: true,
      message: "Department is successfully created",
      Department,
    });
  } catch (error) {
    const errorMessage = error.message;
    return handleError(res, errorMessage, 500);
  }
};
const getDepartment = async (req, res) => {
  try {
    const getDepartmentSchema = await Department.find();
    return handleSuccess(
      res,
      "All staff data fetched successfully",
      200,
      getDepartmentSchema,
    );
  } catch (error) {
    return handleError(res, error.message, 500);
  }
};
const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const existingUser = await Department.findByIdAndUpdate(id, res.body, {
      new: true,
    });
    if (!existingUser) {
      return handleError(res, "User not found", 404);
    }
    return handleSuccess(
      res,
      "Department is successfully updated",
      200,
      updateDepartment,
    );
  } catch (error) {
    return handleError(res, "Internal Server Error", 500);
  }
};
const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteExistingUser = await Department.findByIdAndDelete(id);
    if (!deleteExistingUser) {
      return handleError(res, "User not found", 404);
    }
    return handleSuccess(
      res,
      "Department is successfully deleted",
      200,
      deleteExistingUser,
    );
  } catch (error) {
    return handleError(res, "Internal Server Error", 500);
  }
};
export { createDepartment, getDepartment, updateDepartment, deleteDepartment };
