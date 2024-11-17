// SearchBar.jsx
import React from "react";
import { useProductStore } from "../searchProductsStore";

const SearchBar = () => {
  const setSearchTerm = useProductStore((state) => state.setSearchTerm);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); // Postavi searchTerm u stanje
  };

  return (
    <div className="relative w-full sm:w-1/2">
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
      />
      <i className="fa-solid fa-magnifying-glass absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></i>
    </div>
  );
};

export default SearchBar;
