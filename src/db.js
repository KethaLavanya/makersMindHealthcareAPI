import mongoose from "mongoose";
import nodedns from "node:dns";
nodedns.setServers(["8.8.8.8", "8.8.4.4"]);
const connectDB = async () => {
  try {
    const connectionDatabase = await mongoose.connect(process.env.MONGO_DB, {
      dbName: "databaseData",
    });
    console.log("sever connect to database");
    return connectionDatabase;
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
