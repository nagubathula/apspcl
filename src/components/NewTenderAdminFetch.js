"use client";
import React, { useEffect, useState } from "react";
import EditModal from "./EditModal"; // Import the EditModal component

const categories = [
  "Corporate Office",
  "Ananthapuramu Ultra Mega Solar",
  "Kadapa  Ultra Mega Solar Park (1000 MW)",
  "Ananthapuramu-II Ultra Mega Sol",
];

const NewTenderAdminFetch = () => {
  const [tenders, setTenders] = useState([]); // State to hold tender data
  const [filteredTenders, setFilteredTenders] = useState([]); // State to hold filtered tender data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedTender, setSelectedTender] = useState(null); // State to hold the selected tender for editing
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category from dropdown

  // Fetch tenders data on component mount
  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const response = await fetch(
          "https://apspclbackend.onrender.com/api/tenders"
        );
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

  // Handle search input change
  useEffect(() => {
    filterTenders();
  }, [searchQuery, selectedCategory]);

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

  // Handle delete action
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this tender?")) {
      try {
        const response = await fetch(
          `https://apspclbackend.onrender.com/api/tenders/${id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete tender");
        }

        // Update state to remove the deleted tender
        setTenders(tenders.filter((tender) => tender._id !== id));
        filterTenders(); // Re-filter after deletion
        alert("Tender deleted successfully!");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  // Handle update action
  const handleUpdate = (updatedTender) => {
    setTenders(
      tenders.map((tender) =>
        tender._id === updatedTender._id ? updatedTender : tender
      )
    );
    filterTenders(); // Re-filter after update
  };

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
      <table className="min-w-full border-collapse border text-xs border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              Category
            </th>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              Office Of
            </th>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              Tender Notification
            </th>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              Description
            </th>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              Corrigendum
            </th>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              Closing Date
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
          {filteredTenders.map((tender, index) => (
            <tr
              key={tender._id}
              className={`bg-white ${
                index % 2 === 0 ? "bg-gray-50" : ""
              } transition duration-200 hover:bg-gray-200`}
            >
              <td className="border border-gray-300 p-4">{tender.category}</td>
              <td className="border border-gray-300 p-4">{tender.officeOf}</td>
              <td className="border border-gray-300 p-4">
                {tender.tenderNotification}
              </td>
              <td className="border border-gray-300 p-4">
                {tender.description}
              </td>
              <td className="border border-gray-300 p-4">
                {tender.corrigendum || "N/A"}
              </td>
              <td className="border border-gray-300 p-4">
                {new Date(tender.closingDate).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 p-4">
                <a
                  href={tender.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View
                </a>
              </td>

              <td className="border border-gray-300 p-4 flex space-x-2">
                <div>
                  <td className="border border-gray-300 p-4">
                    {tender.viewStatus}
                  </td>
                  <button
                    onClick={() => {
                      setSelectedTender(tender); // Set the selected tender for editing
                      setIsModalOpen(true); // Open the modal
                    }}
                    className="text-yellow-600 hover:underline transition duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(tender._id)}
                    className="text-red-600 hover:underline transition duration-200"
                  >
                    Delete
                  </button>
                </div>
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
          tender={selectedTender}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default NewTenderAdminFetch;
