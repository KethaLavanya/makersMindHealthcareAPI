import mongoose from "mongoose";

const generatePatientId = () => {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const random = Math.floor(100000 + Math.random() * 900000);

  return `PAT-${date}-${random}`;
};

const patientSchema = new mongoose.Schema(
  {
    patientId: {
      type: String,
      unique: true,
      default: generatePatientId,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    bloodGroup: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    email: {
      type: String,
      lowercase: true,
    },

    address: {
      type: String,
      required: true,
    },

    diseaseDetails: {
      type: String,
      required: true,
    },

    admissionDate: {
      type: Date,
    },

    dischargeDate: {
      type: Date,
    },

    assignedDoctor: {
      type: String,
    },

    department: {
      type: String,
    },

    bedNumber: {
      type: String,
    },

    wardType: {
      type: String,

      enum: ["ICU", "Emergency"],
    },
  },

  {
    timestamps: true,
  },
);

export default mongoose.model("Patient", patientSchema);
