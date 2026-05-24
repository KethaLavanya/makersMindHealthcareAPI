import { get } from "mongoose";
import Assets from "../models/Assets.model.js";
import { handleError, handleAccess } from "../utils/responseHandle.js";
const createAssets = async (req, res) => {
  try {
    const {
      AssetName,
      AssetUser,
      PurchaseDate,
      PurchaseForm,
      Manufacturer,
      Model,
      SerialNumber,
      Supllier,
      Condition,
      Warranty,
      Value,
      Status,
      Description,
    } = req.body;
    const assetSchema = await Assets.create({
      AssetName,
      AssetUser,
      PurchaseDate,
      PurchaseForm,
      Manufacturer,
      Model,
      SerialNumber,
      Supllier,
      Condition,
      Warranty,
      Value,
      Status,
      Description,
    });
    return handleSuccess(
      res,
      "Assets are successfully created",
      201,
      assetSchema,
    );
  } catch (error) {
    const errorMessage = error.message;
    return handleError(res, errorMessage, 500);
  }
};

const getAssets = async (req, res) => {
  try {
    const getAssetSchema = await Assets.find();
    return handleSuccess(
      res,
      "All Assets data fetched successfully",
      200,
      getAssetSchema,
    );
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};
const updateAssets = async (req, res) => {
  try {
    const { id } = req.params;
    const existingUser = await Assets.findByIdAndUpdate(id, res.body, {
      new: true,
    });
    if (!existingUser) {
      return handleError(res, "User not found", 404);
    }
    return handleSuccess(
      res,
      "Assete is successfully updated",
      200,
      updateAssets,
    );
  } catch (error) {
    return handleError(res, "Internal Server Error", 500);
  }
};

const deleteAssets = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteExistingUser = await Assets.findByIdAndDelete(id);
    if (!deleteExistingUser) {
      return handleError(res, "User not found", 404);
    }
    return handleSuccess(
      res,
      "Assets is successfully deleted",
      200,
      deleteExistingUser,
    );
  } catch (error) {
    return handleError(res, "Internal Server Error", 500);
  }
};
export { createAssets, getAssets, updateAssets, deleteAssets };
