import React, { useState } from "react";
import CollectionCard from "../component/collection/CollectionCard";

function Collection() {
  const [sortOption, setSortOption] = useState("featured");
  const [filters, setFilters] = useState({
    type: [],
    category: [],
  });

  // ✅ Handle Filter Change
  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      const isSelected = prev[filterType].includes(value);
      return {
        ...prev,
        [filterType]: isSelected
          ? prev[filterType].filter((item) => item !== value)
          : [...prev[filterType], value],
      };
    });
  };

  // ✅ Handle Sort Change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row p-4 min-h-screen text-white pt-10">

      {/* ✅ Filter Sidebar */}
      <div className="w-full lg:w-1/4 p-4 sticky top-4 h-fit bg-white/10 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* ✅ Product Type (Always Open) */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Product Type</h3>
          {["Starter Kits", "Refills", "Extras"].map((type) => (
            <label key={type} className="flex items-center mb-2 cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => handleFilterChange("type", type)}
                checked={filters.type.includes(type)}
              />
              {type}
            </label>
          ))}
        </div>

        {/* ✅ Product Category (Always Open) */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Product Category</h3>
          {[
            "Hand Soap",
            "Cleaning Sprays",
            "Laundry",
            "Dish",
            "Toilet",
            "Personal Care",
          ].map((cat) => (
            <label key={cat} className="flex items-center mb-2 cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => handleFilterChange("category", cat)}
                checked={filters.category.includes(cat)}
              />
              {cat}
            </label>
          ))}
        </div>

        {/* ✅ Sort By (Radio Buttons instead of Dropdown) */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Sort By</h3>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="mr-2"
                value="featured"
                checked={sortOption === "featured"}
                onChange={handleSortChange}
              />
              Featured
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="mr-2"
                value="lowToHigh"
                checked={sortOption === "lowToHigh"}
                onChange={handleSortChange}
              />
              Price: Low to High
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="mr-2"
                value="highToLow"
                checked={sortOption === "highToLow"}
                onChange={handleSortChange}
              />
              Price: High to Low
            </label>
          </div>
        </div>
      </div>

      {/* ✅ Product Grid */}
      <div className="w-full lg:w-3/4 p-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-orange-700">All Products</h2>

        {/* ✅ Only 1 CollectionCard renders all cards */}
        <CollectionCard sortOption={sortOption} filters={filters} />
      </div>

    </div>
  );
}

export default Collection;
