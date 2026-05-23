import express from "express";
import cors from "cors";
import staffRouter from "./routes/staff.routes.js";
import patientRoutes from "./routes/patient.routes.js";
import userRoutes from "./routes/user.routes.js";
import AppointmentRouter from "./routes/appointment.route.js";
import departmentRouter from "./routes/Department.route.js";
import InvoiceRouter from "./routes/Invoice.route.js";
import PaymentRouter from "./routes/Payment.route.js";
import SpecializationRouter from "./routes/Specialization.route.js";
import AssetsRouter from "./routes/Assets.route.js";
import DesignationRouter from "./routes/Designation.route.js";
import router from "./routes/expense.routes.js";
import routerSalary from "./routes/salary.routes.js";
import routerincome from "./routes/income.routes.js";
import routercategory from "./routes/category.routes.js";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use("/api/staff", staffRouter);
app.use("/api/patient", patientRoutes);
app.use("/api/user", userRoutes);
app.use("/api/appointment", AppointmentRouter);
app.use("/api/department", departmentRouter);
app.use("/api/invoice", InvoiceRouter);
app.use("/api/payment", PaymentRouter);
app.use("/api/specialization", SpecializationRouter);
app.use("/api/assets", AssetsRouter);
app.use("/api/designation", DesignationRouter);
app.use("/api/expense", router);
app.use("/api/salary", routerSalary);
app.use("/api/income", routerincome);
app.use("/api/category", routercategory);
export default app;
