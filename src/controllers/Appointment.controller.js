import { get } from "mongoose";
import Appointment from "../models/Appointment.model.js";
import { handleError, handleSuccess } from "../utils/responseHandle.js";
const createAppointment = async (req, res) => {
  try {
    const {
      AppointmentID,
      Patient,
      Department,
      Doctor,
      AppointmentType,
      DateOfAppointment,
      Time,
      AppointmentReason,
      Status,
    } = req.body;
    const AppointmentSchema = await Appointment.create({
      AppointmentID,
      Patient,
      Department,
      Doctor,
      AppointmentType,
      DateOfAppointment,
      Time,
      AppointmentReason,
      Status,
    });
    res.status(201).json({
      success: true,
      message: "Appointment is successfully created",
      Appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
const getAppointment = async (req, res) => {
  try {
    const getAppointmentSchema = await Appointment.find();
    return handleSuccess(
      res,
      "All staff data fetched successfully",
      200,
      getAppointmentSchema,
    );
  } catch (error) {
    return handleError(res, error.message, 500);
  }
};
const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const existingUser = await Appointment.findByIdAndUpdate(id, res.body, {
      new: true,
    });
    if (!existingUser) {
      return handleError(res, "User not found", 404);
    }
    return handleSuccess(
      res,
      "Appointment is successfully updated",
      200,
      updateAppointment,
    );
  } catch (error) {
    return handleError(res, "Internal Server Error", 500);
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteExistingUser = await Appointment.findByIdAndDelete(id);
    if (!deleteExistingUser) {
      return handleError(res, "User not found", 404);
    }
    return handleSuccess(
      res,
      "Appointment is successfully deleted",
      200,
      deleteExistingUser,
    );
  } catch (error) {
    return handleError(res, "Internal Server Error", 500);
  }
};
export {
  createAppointment,
  getAppointment,
  updateAppointment,
  deleteAppointment,
};
