import React from "react";
import { logoutUser } from "../services/authService";
import useAuth from "../hooks/useAuth";
import ChatLayout from "../components/homePage/ChatLayout";

const HomePage = () => {
  const { logout } = useAuth();
  const handaleLogout = async () => {
    logout();
    await logoutUser();
  };
  return (
    <>
      <section className="min-h-screen bg-linear-to-br from-blue-200 via-sky-300 to-blue-200 backdrop-blur-lg">
        <div className="container mx-auto p-10">
          <h2 className="pt-4 font-bold">AI Apps---2</h2>
          <button
            onClick={handaleLogout}
            className="bg-red-500 text-white px-3 py-2"
          >
            Logout
          </button>
          <ChatLayout />
        </div>
      </section>
    </>
  );
};

export default HomePage;
