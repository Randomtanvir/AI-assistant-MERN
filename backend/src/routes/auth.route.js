import express from "express";
import {
  register,
  login,
  refreshToken,
  logout,
} from "../controllers/auth.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/refresh", refreshToken);
router.get("/logout", logout);
router.get("/checker", protectedRoute, (req, res) => {
  res.json({ user: req.user });
});

export default router;
