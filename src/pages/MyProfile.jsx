// src/pages/MyProfile.jsx
import React from "react";
import { useFirebase } from "../Context/Firebase";

export default function MyProfile() {
  const firebase = useFirebase();
  const user = firebase?.user;

  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold text-orange-400">Profile Information</h4>
      <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
        <p><span className="text-orange-500">Name:</span> {user?.displayName || "N/A"}</p>
        <p><span className="text-orange-500">Email:</span> {user?.email || "N/A"}</p>
        <p><span className="text-orange-500">User ID:</span> {user?.uid || "N/A"}</p>
      </div>
    </div>
  );
}
