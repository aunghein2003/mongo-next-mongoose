import mongoose from "mongoose";

const URI = process.env.DATABASE_URL;
if (!URI) {
  throw new Error("DB URI does not exist");
}

export async function connectDB() {
  await mongoose.connect(URI!);
  console.log("DB connected");
}
