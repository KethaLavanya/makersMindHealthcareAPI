import express from "express";
import {
  addBlog,
  addBlogCategory,
  addBlogComment,
  deleteBlog,
  deleteBlogCategory,
  deleteBlogComment,
  getBlogBySlug,
  getBlogCategories,
  getBlogComments,
  getBlogs,
  updateBlog,
  updateBlogCategory,
  updateBlogComment,
} from "../controllers/blog.controller.js";
import blogValidator, {
  blogCategoryValidator,
  blogCommentValidator,
} from "../validators/blog.validators.js";

const router = express.Router();

router.post("/blogs", blogValidator, addBlog);
router.get("/blogs", getBlogs);
router.get("/blogs/:slug", getBlogBySlug);
router.patch("/blogs/:id", updateBlog);
router.delete("/blogs/:id", deleteBlog);

router.post("/blog-categories", blogCategoryValidator, addBlogCategory);
router.get("/blog-categories", getBlogCategories);
router.patch("/blog-categories/:id", updateBlogCategory);
router.delete("/blog-categories/:id", deleteBlogCategory);

router.post("/blog-comments", blogCommentValidator, addBlogComment);
router.get("/blog-comments", getBlogComments);
router.patch("/blog-comments/:id", updateBlogComment);
router.delete("/blog-comments/:id", deleteBlogComment);

export default router;
