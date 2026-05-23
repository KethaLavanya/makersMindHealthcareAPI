import "dotenv/config";
import app from "./app.js";
import connectDB from "./db.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server is running on PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
