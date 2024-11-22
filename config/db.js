import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  await mongoose
    .connect(
      process.env.MONGO_URI_SECRET // Cambio de DB
    )
    .then(() => console.log("DB Conected"));
};
