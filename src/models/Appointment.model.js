import mangoose from "mongoose";
const appointmentSchema = new mangoose.Schema({
  AppointmentID: {
    type: String,
    required: true,
    unique: true,
  },
  Patient: {
    type: String,
    enum: [
      "Alberto Ripley",
      "Susan Babin",
      "Martin Lisa",
      "Stella Mary",
      "Coral Lam",
      "Jesus Adams",
      "Ezra  Belcher",
      "Unit Manager",
      "Bernard Griffith",
    ],
    required: true,
  },
  Department: {
    type: String,
    enum: [
      "General Madicine",
      "Pediatrics",
      "Gynacology",
      "Cardiology",
      "Orthopedics",
      "Dermatology",
      "ENT",
      "Neurology",
    ],
    required: true,
  },
  Doctor: {
    type: String,
    enum: [
      "Dr.Mick Thompson",
      "Dr.Sarah Johnson",
      "Dr.Emily Carter",
      "Dr.David Lee",
      "Dr.Anna Kim",
      "Dr.John Smith",
      "Dr.Lisa White",
      "Dr.Patrica Brown",
    ],
    required: true,
  },
  AppointmentType: {
    type: String,
    enum: ["In-Person", "Online"],
    required: true,
  },
  DateOfAppointment: {
    type: Date,
    required: true,
  },
  Time: {
    type: String,
    required: true,
  },
  AppointmentReason: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    enum: ["Checked-Out", "Checked-In", "Cancelled", "Schedule", "Confirmed"],
    required: true,
  },
});
export default mangoose.model("AppointmentSchema", appointmentSchema);
