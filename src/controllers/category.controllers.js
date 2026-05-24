import Category from "../models/category.models.js";
import { handleAccess, handleError } from "../utils/responseHandle.js";

// Create Category
const createCategory = async (req, res) => {
  try {
    const { email } = req.body;

    const existingCategory = await Category.findOne({ email });

    if (existingCategory) {
      return handleError(res, "Category already exists", 400);
    }

    const newCategory = new Category(req.body);

    const savedCategory = await newCategory.save();

    return handleSuccess(
      res,
      "Category created successfully",
      201,
      savedCategory,
    );
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};

// Get All Categories
const getCategory = async (req, res) => {
  try {
    const categoryData = await Category.find();

    return handleSuccess(res, "Fetched successfully", 200, categoryData);
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};

// Update Category
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedCategory) {
      return handleError(res, "Category not found", 404);
    }

    return handleSuccess(
      res,
      "Category updated successfully",
      200,
      updatedCategory,
    );
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};

// Delete Category
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return handleError(res, "Category not found", 404);
    }

    return handleSuccess(
      res,
      "Category deleted successfully",
      200,
      deletedCategory,
    );
  } catch (error) {
    console.log(error);
    return handleError(res, error.message, 500);
  }
};

export { createCategory, getCategory, updateCategory, deleteCategory };
