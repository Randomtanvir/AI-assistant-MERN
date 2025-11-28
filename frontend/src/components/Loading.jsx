import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div
        className={`w-12 h-12 border-8 border-green-500 border-t-green-200 rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Loading;
