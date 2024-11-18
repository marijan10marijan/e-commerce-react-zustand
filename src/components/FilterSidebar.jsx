import React from "react";
import { useStore } from "../store"; // Uvezi tvoj store

const FilterSidebar = ({ setIsSidebarOpen }) => {
  const { filters, setFilter, resetFilters } = useStore();

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setFilter("price", [
      value === "" ? null : parseInt(value),
      filters.price?.[1],
    ]);
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setFilter("price", [
      filters.price?.[0],
      value === "" ? null : parseInt(value),
    ]);
  };

  return (
    <div className="w-full sm:w-64 lg:w-80 p-4 border-r fixed z-40 overflow-scroll sm:overflow-auto  h-screen top-0 left-0 right-0 sm:sticky sm:top-6 sm:bottom-6 bg-slate-100 sm:h-[calc(100vh-48px)]">
      <div
        className="absolute top-4 right-4 font-bold rounded-sm text-2xl cursor-pointer sm:hidden"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        x
      </div>
      <h2 className="font-bold text-lg mb-4">Filter Options</h2>

      {/* Filter po cijeni */}
      <div className="mb-4">
        <h3 className="font-semibold">Price</h3>
        <input
          type="number"
          placeholder="Min"
          min={0}
          value={filters.price?.[0] ?? ""}
          onChange={handleMinPriceChange}
          className="border p-1 mr-2 rounded-md mb-1"
        />
        <input
          type="number"
          placeholder="Max"
          min={0}
          value={filters.price?.[1] ?? ""}
          onChange={handleMaxPriceChange}
          className="border p-1 rounded-md"
        />
      </div>

      {/* Filter po spolu */}
      <div className="mb-4">
        <h3 className="font-semibold">Gender</h3>
        <select
          value={filters.gender || ""}
          onChange={(e) => setFilter("gender", e.target.value)}
          className="border p-1 w-full rounded-md"
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">Unisex</option>
        </select>
      </div>

      {/* Filter po veličini */}
      <div className="mb-4">
        <h3 className="font-semibold">Size</h3>
        <select
          value={filters.size || ""}
          onChange={(e) => setFilter("size", e.target.value)}
          className="border p-1 w-full rounded-md"
        >
          <option value="">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>

      {/* Filter po brendu */}
      <div className="mb-4">
        <h3 className="font-semibold">Brand</h3>
        <input
          value={filters.brand || ""}
          type="text"
          placeholder="Enter brand"
          onChange={(e) => setFilter("brand", e.target.value)}
          className="border p-1 w-full rounded-md"
        />
      </div>

      {/* Filter po boji */}
      <div className="mb-4">
        <h3 className="font-semibold">Color</h3>
        <input
          value={filters.color || ""}
          type="text"
          placeholder="Enter color"
          onChange={(e) => setFilter("color", e.target.value)}
          className="border p-1 w-full rounded-md"
        />
      </div>

      {/* Najprodavaniji filter */}
      <div className="mb-4">
        <h3 className="font-semibold">Best Selling</h3>
        <div className="flex items-center gap-2">
          <input
            className="mt-[2px] w-4 h-4 rounded-md"
            type="checkbox"
            onChange={(e) => setFilter("bestSelling", e.target.checked)}
            checked={filters.bestSelling}
            id="bestSelling"
          />{" "}
          <label htmlFor="bestSelling">Best Selling</label>
        </div>
      </div>

      {/* Resetiranje filtera */}
      <button
        onClick={() => {
          setIsSidebarOpen(false);
          resetFilters();
        }}
        className="bg-red-500 text-white py-2 px-4 mt-4 rounded-md font-bold"
      >
        Reset Filters
      </button>
      <div className="mt-0">
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="sm:hidden bg-slate-800 text-white py-2 px-4 mt-2 rounded-md font-bold"
        >
          Apply Changes
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
