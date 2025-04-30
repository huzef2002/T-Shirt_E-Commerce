import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFirebase } from "../Context/Firebase"; 

const menuItems = [
  "My Profile",
  "Wishlist",
  "Orders",
  "Wallet",
  "Logout"
];

export default function ProfileDashboard() {
  const [searchParams] = useSearchParams();
  const [selected, setSelected] = useState("My Profile");

  const firebase = useFirebase();
  const user = firebase?.user;

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && contentMap[tab]) {
      setSelected(tab);
    }
  }, [searchParams]);

  const contentMap = {
    "My Profile": (
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-orange-400">Profile Information</h4>
        <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
          <p><span className="text-orange-500">Name:</span> {user?.displayName || "N/A"}</p>
          <p><span className="text-orange-500">Email:</span> {user?.email || "N/A"}</p>
          <p><span className="text-orange-500">User ID:</span> {user?.uid || "N/A"}</p>
        </div>
      </div>
    ),
    Wishlist: <p>These are your saved t-shirts.</p>,
    Orders: <p>Here’s your order history.</p>,
    Wallet: <p>Your wallet balance and transactions.</p>,
    Logout: <p>You’ve been logged out (simulate action).</p>
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Content Area */}
      <div className="flex-1 p-8">
        <h3 className="text-2xl font-semibold mb-4 text-orange-500">{selected}</h3>
        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          {contentMap[selected]}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-64 bg-gray-950 shadow-lg p-4">
        <h2 className="text-xl font-bold mb-6 text-orange-500">
          Hi, {user?.displayName || "User"}
        </h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer px-4 py-2 rounded-lg ${
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
