import React from "react";
import LoginForm from "../components/loginPage/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex h-[700px] w-full">
        <div className="w-full hidden md:inline-block">
          <img
            className="h-full"
            src="https://www.shutterstock.com/image-vector/cute-green-robot-waving-hand-600nw-2455346975.jpg"
            alt="leftSideImage"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <div className="md:w-96 w-80 flex flex-col items-center justify-center">
            <h2 className="text-4xl text-gray-900 font-medium">Sign in</h2>
            <p className="text-sm text-gray-500/90 mt-3">
              Welcome back! Please sign in to continue
            </p>

            {/* todo for new google login  */}

            {/* <button
              type="button"
              className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full"
            >
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                alt="googleLogo"
              />
            </button> */}
            {/* 
            <div className="flex items-center gap-4 w-full my-5">
              <div className="w-full h-px bg-gray-300/90"></div>
              <p className="w-full text-nowrap text-sm text-gray-500/90">
                or sign in with email
              </p>
              <div className="w-full h-px bg-gray-300/90"></div>
            </div> */}

            <LoginForm />
            <p className="text-gray-500/90 text-sm mt-4">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-indigo-400 hover:underline"
                href="#"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
