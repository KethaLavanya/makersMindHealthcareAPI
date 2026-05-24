import mongoose from "mongoose";

const holidaySchema = new mongoose.Schema(
  {
    holidayName: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      default: "Active",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Holiday", holidaySchema);
