import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { handleError, handleAccess } from "../utils/responseHandle.js";
import createJwtToken from "../middlewares/authMiddlewares.js";
import asyncHandler from "../utils/asyncHandle.js";
import { MongoCryptKMSRequestNetworkTimeoutError } from "mongodb";

const userCreate = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const existingUser = await User.findOne({
      $or: [{ email: email }, { phoneNumber: phoneNumber }],
    });
    if (existingUser) {
      return handleError(res, "User already exists", 400);
    }
    const user = await User.create({
      name,
      email,
      phoneNumber,
      password,
    });
    return handleSuccess(res, "User created successfully", 200, user);
  } catch (error) {
    return handleError(res, error.message, 500);
  }
};

// updateStaff
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return handleError(res, "User not found", 404);
    }
    return handleSuccess(res, "User Updated Successfully", 200, updatedUser);
  } catch (error) {
    console.log(error);

    return handleError(res, error.message, 500);
  }
};

// deleteUser
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return handleError(res, "Staff not found", 404);
    }
    return handleSuccess(res, "Staff deleted Successfully", 200, deletedUser);
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};

// loginUser
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return handleError(res, "user not found", 404);
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return handleError(res, "Invalid password", 400);
  }
  const token = createJwtToken(user);
  return handleSuccess(res, "Login Successfully", 200, { user, token });
});
export { userCreate, updateUser, deleteUser, loginUser };
