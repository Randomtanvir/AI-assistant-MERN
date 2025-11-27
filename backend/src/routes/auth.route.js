import express from "express";
import {
  register,
  login,
  refreshToken,
  logout,
  update,
} from "../controllers/auth.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { uploadSingleImage } from "../middleware/uploadImage.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/refresh", refreshToken);
router.get("/logout", logout);
router.patch("/update", uploadSingleImage("image"), update);

export default router;
