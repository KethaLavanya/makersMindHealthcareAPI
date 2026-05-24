import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema(
  {
    employeeName: String,

    days: Number,

    status: String,
  },
  { timestamps: true },
);

export default mongoose.model("Leave", leaveSchema);
