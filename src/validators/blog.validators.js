import { body } from "express-validator";

const blogValidator = [
  body("title").trim().notEmpty().withMessage("Title required"),

  body("slug")
    .optional({ checkFalsy: true })
    .trim()
    .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .withMessage("Slug must use lowercase letters, numbers, and hyphens"),

  body("category").trim().notEmpty().withMessage("Category required"),

  body("content").trim().notEmpty().withMessage("Content required"),

  body("tag").optional({ checkFalsy: true }).trim(),

  body("tags")
    .optional()
    .custom((value) => Array.isArray(value) || typeof value === "string")
    .withMessage("Tags must be text or an array"),

  body("featureImage").optional({ checkFalsy: true }).trim(),

  body("status")
    .optional()
    .isIn(["draft", "published", "archived"])
    .withMessage("Status must be draft, published, or archived"),
];

export const blogCategoryValidator = [
  body("name").trim().notEmpty().withMessage("Category name required"),

  body("slug")
    .optional({ checkFalsy: true })
    .trim()
    .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .withMessage("Slug must use lowercase letters, numbers, and hyphens"),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("isActive must be true or false")
    .toBoolean(),
];

export const blogCommentValidator = [
  body("blog").isMongoId().withMessage("Valid blog id required"),

  body("name").trim().notEmpty().withMessage("Name required"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email required")
    .isEmail()
    .withMessage("Email must be valid")
    .normalizeEmail(),

  body("comment").trim().notEmpty().withMessage("Comment required"),

  body("status")
    .optional()
    .isIn(["pending", "approved", "rejected"])
    .withMessage("Status must be pending, approved, or rejected"),
];

export default blogValidator;
