import Staff from "../models/staff.model.js";
import { handleError, handleAccess } from "../utils/responseHandle.js";

// create staff
const createStaff = async (req, res) => {
  try {
    const { email, phoneNumber } = req.body;
    const existingEmail = await Staff.findOne({ email });
    if (existingEmail) {
      return handleError(res, "Email already exists", 400);
    }
    const existingPhoneNumber = await Staff.findOne({ phoneNumber });
    if (existingPhoneNumber) {
      return handleError(res, "Phone Number already exists", 400);
    }

    const newStaff = new Staff(req.body);

    const savedStaff = await newStaff.save();
    return handleSuccess(res, "Staff created successfully", 201, savedStaff);
  } catch (error) {
    console.log(error);

    return handleError(res, error.message, 500);
  }
};
// Get all staff
const getAllStaff = async (req, res) => {
  try {
    const staffData = await Staff.find();
    return handleSuccess(
      res,
      "All staff data fetched successfully",
      200,
      staffData,
    );
  } catch (error) {
    console.log(error);
    return handleError(res, "Internal Server Error");
  }
};
// updateStaff
const updateStaff = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedStaff = await Staff.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedStaff) {
      return handleError(res, "Staff not found", 404);
    }
    return handleSuccess(res, "Staff Updated Successfully", 200, updatedStaff);
  } catch (error) {
    console.log(error);

    return handleError(res, error.message, 500);
  }
};
// deleteStaff

const deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStaff = await Staff.findByIdAndDelete(id);
    if (!deletedStaff) {
      return handleError(res, "Staff not found", 404);
    }
    return handleSuccess(res, "Staff deleted Successfully", 200, deletedStaff);
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};
export { createStaff, getAllStaff, updateStaff, deleteStaff };
