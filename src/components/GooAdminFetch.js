"use client";
import React, { useEffect, useState } from "react";
import EditModal from "./EditGooModal"; // Import the EditModal component

const NewGOOAdminFetch = () => {
  const [goos, setGOOs] = useState([]); // State to hold GOO data
  const [filteredGOOs, setFilteredGOOs] = useState([]); // State to hold filtered GOO data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedGOO, setSelectedGOO] = useState(null); // State to hold the selected GOO for editing
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  // Fetch GOO data on component mount
  useEffect(() => {
    const fetchGOOs = async () => {
      try {
        const response = await fetch("https://apspcl.ap.gov.in/api/goos");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setGOOs(data);
        setFilteredGOOs(data); // Initially set filtered GOOs to all GOOs
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchGOOs();
  }, []);

  // Handle search input change
  useEffect(() => {
    filterGOOs();
  }, [searchQuery]);

  const filterGOOs = () => {
    let filtered = goos;

    if (searchQuery) {
      filtered = filtered.filter((goo) =>
        goo.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredGOOs(filtered);
  };

  // Handle delete action
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this GOO?")) {
      try {
        const response = await fetch(
          `https://apspcl.ap.gov.in/api/goos/${id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete GOO");
        }

        // Update state to remove the deleted GOO
        setGOOs(goos.filter((goo) => goo._id !== id));
        filterGOOs(); // Re-filter after deletion
        alert("GOO deleted successfully!");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  // Handle update action
  const handleUpdate = (updatedGOO) => {
    setGOOs(goos.map((goo) => (goo._id === updatedGOO._id ? updatedGOO : goo)));
    filterGOOs(); // Re-filter after update
  };

  // Render loading, error, or table
  if (loading) return <p>Loading GOOs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="goo-table-container">
      {/* Search Control */}
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search GOOs by title"
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* GOO Table */}
      <table className="min-w-full border-collapse border text-xs border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              Title
            </th>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              Start Year
            </th>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              End Year
            </th>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              GOO Number
            </th>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              GOO Date
            </th>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              Issued By
            </th>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              Link
            </th>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredGOOs.map((goo, index) => (
            <tr
              key={goo._id}
              className={`bg-white ${
                index % 2 === 0 ? "bg-gray-50" : ""
              } transition duration-200 hover:bg-gray-200`}
            >
              <td className="border border-gray-300 p-4">{goo.title}</td>
              <td className="border border-gray-300 p-4">{goo.startYear}</td>
              <td className="border border-gray-300 p-4">
                {goo.endYear || "N/A"}
              </td>
              <td className="border border-gray-300 p-4">{goo.gooNumber}</td>
              <td className="border border-gray-300 p-4">
                {new Date(goo.gooDate).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 p-4">{goo.issuedBy}</td>
              <td className="border border-gray-300 p-4">
                <a
                  href={goo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View
                </a>
              </td>
              <td className="border border-gray-300 p-4 flex space-x-2">
                <button
                  onClick={() => {
                    setSelectedGOO(goo); // Set the selected GOO for editing
                    setIsModalOpen(true); // Open the modal
                  }}
                  className="text-yellow-600 hover:underline transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(goo._id)}
                  className="text-red-600 hover:underline transition duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render Edit Modal */}
      {isModalOpen && (
        <EditModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          goo={selectedGOO}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default NewGOOAdminFetch;
