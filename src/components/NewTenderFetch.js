"use client";
import React, { useEffect, useState } from "react";

const categories = [
  "Corporate Office",
  "Ananthapuramu Ultra Mega Solar",
  "Kadapa Ultra Mega Solar Park (1000 MW)",
  "Ananthapuramu-II Ultra Mega Solar",
];

const NewTenderFetch = () => {
  const [tenders, setTenders] = useState([]); // State to hold tender data
  const [filteredTenders, setFilteredTenders] = useState([]); // State for filtered tender data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category from dropdown

  // Fetch tenders data on component mount
  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tenders");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTenders(data);
        setFilteredTenders(data); // Initially set filtered tenders to all tenders
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchTenders();
  }, []);

  // Filter tenders based on search query and selected category
  useEffect(() => {
    const filterTenders = () => {
      let filtered = tenders;

      if (searchQuery) {
        filtered = filtered.filter((tender) =>
          tender.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (selectedCategory) {
        filtered = filtered.filter(
          (tender) => tender.category === selectedCategory
        );
      }

      setFilteredTenders(filtered);
    };

    filterTenders();
  }, [searchQuery, selectedCategory, tenders]);

  // Render loading, error, or table
  if (loading) return <p>Loading tenders...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="tender-table-container">
      {/* Search and Filter Controls */}
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tenders"
          className="px-4 py-2 border border-gray-300 rounded-md"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Tender Table */}
      <table className="text-xs min-w-full border-collapse border-b">
        <thead>
          <tr>
            {/* <th className="border-b p-4">Category</th> */}
            <th className="border-b p-4">Office Of</th>
            <th className="border-b p-4">Tender Notification</th>
            <th className="border-b p-4">Description</th>
            <th className="border-b p-4">Corrigendum</th>
            <th className="border-b p-4">Closing Date</th>
            <th className="border-b p-4">Link</th>
          </tr>
        </thead>
        <tbody>
          {filteredTenders.map((tender, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"} // Add striped row classes
            >
              {/* <td className="border-b p-4">{tender.category}</td> */}
              <td className="border-b p-4">{tender.officeOf}</td>
              <td className="border-b p-4">{tender.tenderNotification}</td>
              <td className="border-b p-4">{tender.description}</td>
              <td className="border-b p-4">{tender.corrigendum || "N/A"}</td>
              <td className="border-b p-4">
                {new Date(tender.closingDate).toLocaleDateString()}
              </td>
              <td className="border-b p-4">
                <a
                  href={tender.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewTenderFetch;
