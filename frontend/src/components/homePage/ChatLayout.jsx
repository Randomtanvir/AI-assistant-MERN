import React, { useState } from "react";
import { ArrowLeft, Cross, Crosshair, Menu, X } from "lucide-react";
import Logout from "../Logout";
import ChatSkeleton from "../ChatSkeleton";

export default function ChatLayout() {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  return (
    <div className="w-full h-[88vh] relative flex flex-col lg:grid lg:grid-cols-12 gap-2 p-2 bg-linear-to-r from-green-400/10 via-blue-200/10 to-purple-400/10">
      {/* BACKDROP */}
      {showLeft && (
        <div
          onClick={() => setShowLeft(false)}
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-3xl z-10"
        />
      )}
      {showRight && (
        <div
          onClick={() => setShowRight(false)}
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-10"
        />
      )}

      {/* Mobile Top Bar */}
      <div className="lg:hidden flex justify-between items-center p-3 bg-white/20 backdrop-blur-xl shadow rounded-xl mb-2 relative z-20">
        <button
          onClick={() => {
            setShowLeft(!showLeft);
            setShowRight(false);
          }}
          className="p-2 rounded-xl bg-white/30 backdrop-blur-sm"
        >
          <Menu />
        </button>
        <h2 className="text-lg font-bold text-white">Chat</h2>
        <button
          onClick={() => {
            setShowRight(!showRight);
            setShowLeft(false);
          }}
          className="p-2 rounded-xl bg-white/30 backdrop-blur-sm"
        >
          <Menu />
        </button>
      </div>

      {/* Left Sidebar */}
      <div
        className={`bg-white/20 backdrop-blur-xl rounded-2xl shadow p-4 overflow-y-auto transition-all duration-300
        lg:static lg:block lg:col-span-2 z-20
        ${showLeft ? "fixed left-0 top-0 w-64 h-full" : "hidden lg:block"}`}
      >
        <h2 className="text-xl font-semibold mb-4 text-white">History</h2>
        <ul className="space-y-2">
          <li className="p-2 bg-white/30 rounded-xl text-gray-900 hover:bg-white/50 transition">
            Chat 1
          </li>
          <li className="p-2 bg-white/30 rounded-xl text-gray-900 hover:bg-white/50 transition">
            Chat 2
          </li>
          <li className="p-2 bg-white/30 rounded-xl text-gray-900 hover:bg-white/50 transition">
            Chat 3
          </li>
        </ul>
      </div>

      {/* Middle Chat */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow flex flex-col col-span-12 lg:col-span-7 h-full z-0">
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {/* Left chat bubble */}
          <div className="p-3 bg-white/40 text-gray-900 rounded-xl w-max max-w-[80%] shadow">
            Hello!
          </div>
          {/* Right chat bubble */}
          <div className="p-3 bg-green-500/70 text-white rounded-xl w-max max-w-[80%] ml-auto shadow">
            Hi! How can I help?
          </div>
          <div className="p-3 bg-white/40 text-gray-900 rounded-xl w-max max-w-[80%] shadow">
            <ChatSkeleton />
          </div>
          <div className="p-3 bg-white/40 text-gray-900 rounded-xl w-max max-w-[80%] shadow">
            <ChatSkeleton />
          </div>
          <div className="p-3 bg-green-500/70 text-white rounded-xl w-max max-w-[80%] ml-auto shadow">
            Modern glassy chat UI 😎
          </div>
          <div className="p-3 bg-green-500/70 text-white rounded-xl w-max max-w-[80%] ml-auto shadow">
            Modern glassy chat UI 😎
          </div>
        </div>
        <div className="p-4 border-t flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Type here..."
            className="flex-1 min-w-[120px] p-3 border border-white/40 rounded-xl focus:outline-none bg-white/20 backdrop-blur-sm text-gray-900 placeholder-gray-500"
          />
          <button className="shrink-0 px-4 py-3 bg-green-500/80 text-white rounded-xl hover:bg-green-600 transition w-full sm:w-auto">
            Send
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`bg-white/20 mb-6 backdrop-blur-xl rounded-2xl shadow p-4 overflow-y-auto transition-all duration-300
        lg:static lg:block lg:col-span-3 z-20
        ${showRight ? "fixed right-0 top-0 w-full h-full" : "hidden lg:block"}`}
      >
        <button
          onClick={() => setShowRight(false)}
          className="flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-sm text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-green-500 hover:text-white hover:scale-105 transition transform lg:hidden"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="text-black lg:mt-16 mt-10">
          Place anything you want here.
        </div>
        <Logout />
      </div>
    </div>
  );
}
