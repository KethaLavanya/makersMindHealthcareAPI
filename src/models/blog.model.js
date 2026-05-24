import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    featureImage: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      default: "draft",
    },

    publishedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const blogCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const blogCommentSchema = new mongoose.Schema(
  {
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    comment: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

export const Blog = mongoose.model("Blog", blogSchema);
export const BlogCategory = mongoose.model("BlogCategory", blogCategorySchema);
export const BlogComment = mongoose.model("BlogComment", blogCommentSchema);
