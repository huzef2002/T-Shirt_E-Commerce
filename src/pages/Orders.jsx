// src/pages/Orders.jsx
import React, { useState } from "react";

const Orders = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">Orders</h2>
      <input
        type="text"
        placeholder="Search Orders"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 w-full bg-gray-800 border border-gray-600 rounded-lg text-white"
      />
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
        <p>No orders yet. (Or show filtered results here)</p>
      </div>
    </div>
  );
};

export default Orders;
