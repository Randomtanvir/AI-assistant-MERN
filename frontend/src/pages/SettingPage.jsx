import React from "react";
import AIImageGallery from "../components/settingPage/AIImageGallery";
import useAuth from "../hooks/useAuth";
import { logoutUser } from "../services/authService";

const SettingPage = () => {
  const { logout } = useAuth();
  const handaleLogout = async () => {
    logout();
    await logoutUser();
  };
  return (
    <div className="relative">
      <button
        onClick={handaleLogout}
        className="bg-red-500 text-white px-3 py-2 absolute top-5 right-5 hover:bg-red-700 rounded-sm cursor-pointer"
      >
        Logout
      </button>
      <AIImageGallery />
    </div>
  );
};

export default SettingPage;
