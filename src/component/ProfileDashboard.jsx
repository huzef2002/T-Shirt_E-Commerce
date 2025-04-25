// src/ProfileDashboard.js
import React, { useState } from "react";

// Menu items for the sidebar
const menuItems = [
  "My Account",
  "Wishlist",
  "Orders",
  "Wallet",
  "Logout"
];

// Content for each section in the dashboard
const contentMap = {
  "My Account": <p>This is your account info.</p>,
  Wishlist: <p>These are your saved t-shirts.</p>,
  Orders: <p>Here’s your order history.</p>,
  Wallet: <p>Your wallet balance and transactions.</p>,
  Logout: <p>You’ve been logged out (simulate action).</p>
};

// ProfileDashboard Component
export default function ProfileDashboard() {
  const [selected, setSelected] = useState("My Account"); // State to track selected section
  const [userName, setUserName] = useState("John Doe");  // Default username (can be dynamic)

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Content on the left */}
      <div className="flex-1 p-8">
        <h3 className="text-2xl font-semibold mb-4">{selected}</h3>
        <div className="bg-white p-6 rounded-xl shadow-md">
          {contentMap[selected]}
        </div>
      </div>

      {/* Sidebar on the right */}
      <div className="w-64 bg-white shadow-lg p-4">
        <h2 className="text-xl font-bold mb-6">Hi, {userName}</h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer px-4 py-2 rounded-lg ${
                selected === item ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setSelected(item)} // Change content when item is clicked
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
