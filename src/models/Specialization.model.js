import mongoose from "mongoose";
const specialSchema = new mongoose.Schema({
  Specialization: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Specialization", specialSchema);
