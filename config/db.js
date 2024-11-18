import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://robertmatt113:13135589@cluster0.snirm.mongodb.net/food-del" // Cambio de DB
    )
    .then(() => console.log("DB Conected"));
};
