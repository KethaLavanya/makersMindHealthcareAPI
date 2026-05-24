import { get } from "mongoose";
import Special from "../models/Specialization.model.js";
import { handleError, handleAccess } from "../utils/responseHandle.js";
const createSpecialization = async (req, res) => {
  try {
    const { Specialization, Description } = req.body;
    const specialSchema = await Special.create({
      Specialization,
      Description,
    });
    return handleSuccess(
      res,
      "Specialization is successfully created",
      201,
      specialSchema,
    );
  } catch (error) {
    const errorMessage = error.message;
    return handleError(res, errorMessage, 500);
  }
};

const getSpecial = async (req, res) => {
  try {
    const getSpecialSchema = await Special.find();
    return handleSuccess(
      res,
      "All Specialized data fetched successfully",
      200,
      getSpecialSchema,
    );
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};
const updateSpecialization = async (req, res) => {
  try {
    const { id } = req.params;
    const existingUser = await Special.findByIdAndUpdate(id, res.body, {
      new: true,
    });
    if (!existingUser) {
      return handleError(res, "User not found", 404);
    }
    return handleSuccess(
      res,
      "Specialization is successfully updated",
      200,
      updateSpecialization,
    );
  } catch (error) {
    return handleError(res, "Internal Server Error", 500);
  }
};

const deleteSpecial = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteExistingUser = await Special.findByIdAndDelete(id);
    if (!deleteExistingUser) {
      return handleError(res, "User not found", 404);
    }
    return handleSuccess(
      res,
      "Specialization is successfully deleted",
      200,
      deleteExistingUser,
    );
  } catch (error) {
    return handleError(res, "Internal Server Error", 500);
  }
};
export {
  createSpecialization,
  getSpecial,
  updateSpecialization,
  deleteSpecial,
};
