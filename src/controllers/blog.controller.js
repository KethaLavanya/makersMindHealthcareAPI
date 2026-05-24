import { validationResult } from "express-validator";
import { Blog, BlogCategory, BlogComment } from "../models/blog.model.js";

const createSlug = (text) => text.toLowerCase().trim();

const normalizeTags = (body) => {
  const value = body.tags || body.tag;

  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
};

export const addBlog = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const blog = new Blog({
      ...req.body,
      slug: req.body.slug || createSlug(req.body.title),
      tags: normalizeTags(req.body),
      publishedAt: req.body.status === "published" ? new Date() : undefined,
    });

    await blog.save();

    res.status(201).json({
      success: true,
      message: "Blog added",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const filter = req.query.status ? { status: req.query.status } : {};
    const blogs = await Blog.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Blogs fetched",
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog fetched",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
      tags: normalizeTags(req.body),
    };

    if (req.body.title && !req.body.slug) {
      updateData.slug = createSlug(req.body.title);
    }

    if (req.body.status === "published") {
      updateData.publishedAt = new Date();
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog updated",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addBlogCategory = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const category = new BlogCategory({
      ...req.body,
      slug: req.body.slug || createSlug(req.body.name),
    });

    await category.save();

    res.status(201).json({
      success: true,
      message: "Blog category added",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBlogCategories = async (req, res) => {
  try {
    const categories = await BlogCategory.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Blog categories fetched",
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBlogCategory = async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (req.body.name && !req.body.slug) {
      updateData.slug = createSlug(req.body.name);
    }

    const category = await BlogCategory.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Blog category not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog category updated",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBlogCategory = async (req, res) => {
  try {
    const category = await BlogCategory.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Blog category not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog category deleted",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addBlogComment = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const comment = new BlogComment(req.body);
    await comment.save();

    res.status(201).json({
      success: true,
      message: "Blog comment added",
      data: comment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBlogComments = async (req, res) => {
  try {
    const filter = {};

    if (req.query.blog) {
      filter.blog = req.query.blog;
    }

    if (req.query.status) {
      filter.status = req.query.status;
    }

    const comments = await BlogComment.find(filter)
      .populate("blog", "title slug")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Blog comments fetched",
      data: comments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBlogComment = async (req, res) => {
  try {
    const comment = await BlogComment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Blog comment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog comment updated",
      data: comment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBlogComment = async (req, res) => {
  try {
    const comment = await BlogComment.findByIdAndDelete(req.params.id);

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Blog comment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog comment deleted",
      data: comment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
