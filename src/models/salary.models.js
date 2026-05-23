import mongoose from "mongoose";
const salarySchema = new mongoose.Schema(
  {
    staff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
      required: true,
    },

    netSalary: {
      type: Number,
      required: true,
      default: 0,
    },

    earnings: {
      basicSalary: {
        type: Number,
        required: true,
        default: 0,
      },

      da: {
        type: Number,
        required: true,
        default: 0,
      },

      hra: {
        type: Number,
        required: true,
        default: 0,
      },

      conveyance: {
        type: Number,
        required: true,
        default: 0,
      },

      medicalAllowance: {
        type: Number,
        required: true,
        default: 0,
      },

      others: {
        type: Number,
        required: true,
        default: 0,
      },
    },

    deductions: {
      tds: {
        type: Number,
        required: true,
        default: 0,
      },

      esi: {
        type: Number,
        default: 0,
      },

      pf: {
        type: Number,
        required: true,
        default: 0,
      },

      profTax: {
        type: Number,
        required: true,
        default: 0,
      },

      labourWelfare: {
        type: Number,
        required: true,
        default: 0,
      },

      others: {
        type: Number,
        required: true,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  },
);

const Salary = mongoose.model("Salary", salarySchema);
export default Salary;
