import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFirebase } from "../Context/Firebase";
import MyProfile from "../pages/MyProfile";
import Orders from "../pages/Orders";
import Wishlist from "../pages/Wishlist";
import Wallet from "../pages/Wallet";

// Lucide Icons
import { User, Heart, ShoppingBag, Wallet as WalletIcon, LogOut } from "lucide-react";

const menuItems = [
  { label: "My Profile", icon: <User size={18} /> },
  { label: "Wishlist", icon: <Heart size={18} /> },
  { label: "Orders", icon: <ShoppingBag size={18} /> },
  { label: "Wallet", icon: <WalletIcon size={18} /> },
  { label: "Logout", icon: <LogOut size={18} /> },
];

export default function ProfileDashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState("My Profile");

  const firebase = useFirebase();
  const user = firebase?.user;

  const contentMap = {
    "My Profile": <MyProfile user={user} />,
    Wishlist: <Wishlist />,
    Orders: <Orders />,
    Wallet: <Wallet />,
    Logout: <p>You’ve been logged out (simulate action).</p>,
  };

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && contentMap[tab]) {
      setSelected(tab);
    }
  }, [searchParams]);

  const handleMenuClick = (label) => {
    setSelected(label);
    setSearchParams({ tab: label });
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
              key={item.label}
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg ${
                selected === item.label
                  ? "bg-orange-700 text-white"
                  : "hover:bg-gray-800"
              }`}
              onClick={() => handleMenuClick(item.label)}
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
