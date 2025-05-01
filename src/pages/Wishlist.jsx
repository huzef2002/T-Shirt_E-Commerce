// src/pages/Wishlist.jsx
import React from "react";

const Wishlist = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">Wishlist</h2>
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
        <p>Your wishlist is empty.</p>
      </div>
    </div>
  );
};

export default Wishlist;
