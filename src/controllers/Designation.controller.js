import { get } from "mongoose";
import Designation from "../models/Designation.model.js";
import { handleError, handleSuccess } from "../utils/responseHandle.js";

const createDesignation = async (req, res) => {
  try {
    const { DesignationType, DesignationName, Department, Description } =
      req.body;
    const designationSchema = await Designation.create({
      DesignationType,
      DesignationName,
      Department,
      Description,
    });
    return handleSuccess(
      res,
      "Designation is successfully created",
      201,
      designationSchema,
    );
  } catch (error) {
    const errorMessage = error.message;
    return handleError(res, errorMessage, 500);
  }
};

const getDesignation = async (req, res) => {
  try {
    const getDesignationSchema = await Designation.find();
    return handleSuccess(
      res,
      "All Designation data fetched successfully",
      200,
      getDesignationSchema,
    );
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};

const updateDesignation = async (req, res) => {
  try {
    const { id } = req.params;
    const existingUser = await Designation.findByIdAndUpdate(id, res.body, {
      new: true,
    });
    if (!existingUser) {
      return handleError(res, "User not found", 404);
    }
    return handleSuccess(
      res,
      "Designation is successfully updated",
      200,
      updateDesignation,
    );
  } catch (error) {
    return handleError(res, "Internal Server Error", 500);
  }
};

const deleteDesignation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteExistingUser = await Designation.findByIdAndDelete(id);
    if (!deleteExistingUser) {
      return handleError(res, "User not found", 404);
    }
    return handleSuccess(
      res,
      "Designation is successfully deleted",
      200,
      deleteExistingUser,
    );
  } catch (error) {
    return handleError(res, "Internal Server Error", 500);
  }
};
export {
  createDesignation,
  getDesignation,
  updateDesignation,
  deleteDesignation,
};
