import mongoose from "mongoose";
const staffSchema = new mongoose.Schema(
  {
    profileImage: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["Admin", "Reception", "Nurse", "Nurse Practitioner"],
      required: true,
    },
    designation: {
      type: String,
      eum: [
        "Admin Officer",
        "Front Officer",
        "Medical Recorder",
        "Billing Executive",
      ],
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: ["O+", "O-", "A+", "A-", "B+", "B-"],
    },
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
    },
    country: {
      type: String,
      enum: ["India", "USA", "Canada", "UK", "Germany"],
    },
    state: {
      type: String,
      enum: ["Telangana", "California", "Ontario", "England", "Bavaria"],
    },
    city: {
      type: String,
      enum: ["Hyderabad", "Los Angeles", "Toronto", "London", "Munich"],
    },
    pincode: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);
export default mongoose.model("Staff", staffSchema);
