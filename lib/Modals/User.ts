import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema, "User");

export default User;
