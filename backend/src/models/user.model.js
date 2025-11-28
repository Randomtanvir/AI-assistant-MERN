import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    refreshToken: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: "",
    },
    assistantName: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

// Nodemon safe model export
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
