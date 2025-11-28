import React from "react";

const ChatSkeleton = () => {
  return (
    <div className="flex justify-start p-2">
      <div className="inline-flex flex-col bg-linear-to-br from-blue-200 via-sky-300 to-blue-200 backdrop-blur-2xl rounded-xl p-3 space-y-2 shadow animate-pulse lg:min-w-[350px] min-w-[100px]">
        <div className="h-3 bg-white/40 rounded w-5/6"></div>
        <div className="h-3 bg-white/40 rounded w-4/6"></div>
        <div className="h-3 bg-white/40 rounded w-3/6"></div>
      </div>
    </div>
  );
};

export default ChatSkeleton;
