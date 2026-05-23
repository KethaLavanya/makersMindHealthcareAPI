import { body } from "express-validator";
const assetValidator = [
  body("AssetName").notEmpty().withMessage("Asset Name is Required"),
  body("AssetUser").notEmpty().withMessage("Asset User is Required"),
  body("PurchaseDate").notEmpty().withMessage("Purchase Date is Required"),
  body("PurchaseForm").notEmpty().withMessage("Purchase Form is Required"),
  body("Manufacturer").notEmpty().withMessage("Manufacturer is Required"),
  body("Model").notEmpty().withMessage("Model is Required"),
  body("SerialNumber").notEmpty().withMessage("Serial Number is Required"),
  body("Supllier").notEmpty().withMessage("Supllier is Required"),
  body("Condition").notEmpty().withMessage("Condition is Required"),
  body("Warranty").notEmpty().withMessage("Warranty is Required"),
  body("Value").notEmpty().withMessage("Value is Required"),
  body("Status").notEmpty().withMessage("Status is Required"),
  body("Description").notEmpty().withMessage("Description is Required"),
];
export default assetValidator;
