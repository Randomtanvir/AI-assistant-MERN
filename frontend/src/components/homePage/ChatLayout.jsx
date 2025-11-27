import React, { useState } from "react";
import { Menu } from "lucide-react";

export default function ChatLayout() {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  return (
    <div className="w-full h-[88vh] bg-gray-100 relative flex flex-col lg:grid lg:grid-cols-12 gap-2 p-2">
      {/* BACKDROP */}
      {showLeft && (
        <div
          onClick={() => setShowLeft(false)}
          className="lg:hidden fixed inset-0 bg-black/40 z-10"
        />
      )}

      {showRight && (
        <div
          onClick={() => setShowRight(false)}
          className="lg:hidden fixed inset-0 bg-black/40 z-10"
        />
      )}

      {/* Mobile Top Bar */}
      <div className="lg:hidden flex justify-between items-center p-3 bg-white shadow rounded-xl mb-2 relative z-20">
        <button
          onClick={() => {
            setShowLeft(!showLeft);
            setShowRight(false);
          }}
          className="p-2 rounded-xl bg-gray-200"
        >
          <Menu />
        </button>
        <h2 className="text-lg font-bold">Chat</h2>
        <button
          onClick={() => {
            setShowRight(!showRight);
            setShowLeft(false);
          }}
          className="p-2 rounded-xl bg-gray-200"
        >
          <Menu />
        </button>
      </div>

      {/* Left Sidebar */}
      <div
        className={`bg-white rounded-2xl shadow p-4 overflow-y-auto transition-all duration-300
        lg:static lg:block lg:col-span-2 z-20
        ${showLeft ? "fixed left-0 top-0 w-64 h-full" : "hidden lg:block"}`}
      >
        <h2 className="text-xl font-semibold mb-4">History</h2>
        <ul className="space-y-2">
          <li className="p-2 bg-gray-200 rounded-xl">Chat 1</li>
          <li className="p-2 bg-gray-200 rounded-xl">Chat 2</li>
          <li className="p-2 bg-gray-200 rounded-xl">Chat 3</li>
        </ul>
      </div>

      {/* Middle Chat */}
      <div className="bg-white rounded-2xl shadow flex flex-col col-span-12 lg:col-span-7 h-full z-0">
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="mb-3 p-3 bg-gray-200 rounded-xl w-max max-w-[80%]">
            Hello!
          </div>
          <div className="mb-3 p-3 bg-blue-200 rounded-xl w-max max-w-[80%] ml-auto">
            Hi! How can I help?
          </div>
        </div>
        <div className="p-4 border-t flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-3 border rounded-xl focus:outline-none"
          />
          <button className="px-6 py-3 bg-blue-500 text-white rounded-xl">
            Send
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`bg-white rounded-2xl shadow p-4 overflow-y-auto transition-all duration-300
        lg:static lg:block lg:col-span-3 z-20
        ${showRight ? "fixed right-0 top-0 w-64 h-full" : "hidden lg:block"}`}
      >
        <h2 className="text-xl font-semibold mb-4">Other</h2>
        <p className="text-gray-600">Place anything you want here.</p>
      </div>
    </div>
  );
}
