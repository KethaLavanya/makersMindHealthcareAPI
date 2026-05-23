import mongoose from "mongoose";
const designSchema = new mongoose.Schema({
  DesignationType: {
    type: String,
    enum: ["Staff", "Doctor"],
    required: true,
  },
  DesignationName: {
    type: String,
    required: true,
  },
  Department: {
    type: String,
    enum: [
      "Nurse",
      "Pharmacist",
      "Receptionist",
      "Technician",
      "Medical Assistant",
    ],
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Designation", designSchema);
