import {
  loginUser,
  refreshTokenService,
  registerUser,
  updateUser,
} from "../services/auth.service.js";

export const register = async (req, res) => {
  try {
    const { user, accessToken, refreshToken } = await registerUser(req.body);

    // Send Access Token as Cookie
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    res.json({
      success: true,
      message: "Registration successful",
      refreshToken,
      user,
    });
  } catch (err) {
    console.log("tanir");
    res.status(400).json({ success: false, message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { user, accessToken, refreshToken } = await loginUser(req.body);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    res.json({
      success: true,
      message: "Login successful",
      refreshToken,
      user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const oldRefreshToken = req.headers.authorization?.split(" ")[1];

    const { newAccessToken, newRefreshToken } = await refreshTokenService(
      oldRefreshToken
    );

    // new cookie
    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    res.json({
      success: true,
      newRefreshToken,
    });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie("accessToken");
  res.json({ success: true, message: "Logged out" });
};

export const update = async (req, res) => {
  try {
    const { user } = await updateUser(req);

    res.json({
      success: true,
      message: "Update successful",
      user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
