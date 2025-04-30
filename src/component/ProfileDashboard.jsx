import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// Menu items for the sidebar
const menuItems = [
  "My Profile",
  "Wishlist",
  "Orders",
  "Wallet",
  "Logout"
];

// Content for each section in the dashboard
const contentMap = {
  "My Profile": <p>This is your account info.</p>,
  Wishlist: <p>These are your saved t-shirts.</p>,
  Orders: <p>Here’s your order history.</p>,
  Wallet: <p>Your wallet balance and transactions.</p>,
  Logout: <p>You’ve been logged out (simulate action).</p>
};

export default function ProfileDashboard() {
  const [searchParams] = useSearchParams();
  const [selected, setSelected] = useState("My Profile");
  const [userName, setUserName] = useState("John Doe");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && contentMap[tab]) {
      setSelected(tab);
    }
  }, [searchParams]);

  return (
    <div className="flex min-h-screen bg-black text-gray-100">
      {/* Main content area */}
      <div className="flex-1 p-8">
        <h3 className="text-2xl font-semibold mb-4 text-orange-500">{selected}</h3>
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
          {contentMap[selected]}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-64 bg-gray-950 shadow-lg p-4">
        <h2 className="text-xl font-bold mb-6 text-orange-500">Hi, {userName}</h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`transition-all duration-200 cursor-pointer px-4 py-2 rounded-lg ${
                selected === item
                  ? "bg-orange-700 text-white"
                  : "hover:bg-gray-800"
              }`}
              onClick={() => setSelected(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
