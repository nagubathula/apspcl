"use client";
import React from "react";

const SearchTender = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value); // Call the onSearch function with the search term
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search tenders..."
        className="w-full p-2 border border-gray-300 rounded-md"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchTender;
