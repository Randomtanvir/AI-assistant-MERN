import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateTokens.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { comparePassword } from "../utils/index.js";
import { uploadImageInCloudinary } from "../utils/cloudinary.js";

export const registerUser = async ({ fullName, email, password }) => {
  const exists = await User.findOne({ email });
  if (exists) throw new Error("Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = {
    fullName,
    email,
    password: hashedPassword,
  };
  const user = await User.create(newUser);

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  user.refreshToken = refreshToken;
  await user.save();

  return { user, accessToken, refreshToken };
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) throw new Error("Invalid credentials");

  const match = await comparePassword(user.password, password);
  if (!match) throw new Error("Invalid credentials");

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  user.refreshToken = refreshToken;
  await user.save();

  // Remove password before returning
  const safeUser = user.toObject();
  delete safeUser.password;

  return { user: safeUser, accessToken, refreshToken };
};

export const refreshTokenService = async (oldToken) => {
  const user = await User.findOne({ refreshToken: oldToken });

  if (!user) throw new Error("Invalid refresh token");

  const newAccessToken = generateAccessToken(user);
  const newRefreshToken = generateRefreshToken(user);

  user.refreshToken = newRefreshToken;
  await user.save();

  return { newAccessToken, newRefreshToken };
};

export const updateUser = async (req) => {
  try {
    const { assistantName, image } = req.body;
    const file = req.file;
    const id = req.user.id;

    let updateData = {};

    // assistant name update
    if (assistantName) {
      updateData.assistantName = assistantName;
    }

    // if file uploaded -> upload to cloudinary
    if (file) {
      const upload = await uploadImageInCloudinary(file);
      updateData.image = upload.secure_url;
    }

    // if only string url provided
    if (image && !file) {
      updateData.image = image;
    }

    // Update user directly in MongoDB (more efficient)
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true, // return updated document
      runValidators: true,
    }).select("-password -refreshToken"); // hide sensitive fields

    if (!updatedUser) throw new Error("User not found");

    return {
      user: updatedUser,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message || "User update failed");
  }
};
