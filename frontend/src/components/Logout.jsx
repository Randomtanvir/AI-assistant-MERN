import React from "react";
import useAuth from "../hooks/useAuth";
import { logoutUser } from "../services/authService";
import { LogOut } from "lucide-react";

const Logout = () => {
  const { logout } = useAuth();
  const handaleLogout = async () => {
    logout();
    await logoutUser();
  };
  return (
    <button
      onClick={handaleLogout}
      className="absolute top-5 right-5 flex items-center gap-2 px-4 py-2 bg-red-500/90 backdrop-blur-sm text-white font-semibold rounded-lg shadow-lg hover:bg-red-600/90 hover:scale-105 transition transform"
    >
      <LogOut className="w-5 h-5" />
      Logout
    </button>
  );
};

export default Logout;
