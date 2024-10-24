import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://greatstack:33858627@cluster0.1mf2r.mongodb.net/food-del"
    )
    .then(() => console.log("DB Conected"));
};
