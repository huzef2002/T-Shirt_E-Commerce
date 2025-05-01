import React from "react";

const Wallet = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">Wallet</h2>
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
        <p>Balance: ₹0.00</p>
        <p>No transactions available.</p>
      </div>
    </div>
  );
};

export default Wallet;
