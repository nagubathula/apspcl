"use client";
import React, { useEffect, useState } from "react";
import EditModal from "./EditCircularModal"; // Import the EditModal component

const CircularFetch = () => {
  const [circulars, setCIRCULARs] = useState([]); // State to hold CIRCULAR data
  const [filteredCIRCULARs, setFilteredCIRCULARs] = useState([]); // State to hold filtered CIRCULAR data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedCIRCULAR, setSelectedCIRCULAR] = useState(null); // State to hold the selected CIRCULAR for editing
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  // Fetch CIRCULAR data on component mount
  useEffect(() => {
    const fetchCIRCULARs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/circulars");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCIRCULARs(data);
        setFilteredCIRCULARs(data); // Initially set filtered CIRCULARs to all CIRCULARs
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchCIRCULARs();
  }, []);

  // Handle search input change
  useEffect(() => {
    filterCIRCULARs();
  }, [searchQuery]);

  const filterCIRCULARs = () => {
    let filtered = circulars;

    if (searchQuery) {
      filtered = filtered.filter((circular) =>
        circular.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredCIRCULARs(filtered);
  };

  // Handle delete action
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this CIRCULAR?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/circulars/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete CIRCULAR");
        }

        // Update state to remove the deleted CIRCULAR
        setCIRCULARs(circulars.filter((circular) => circular._id !== id));
        filterCIRCULARs(); // Re-filter after deletion
        alert("CIRCULAR deleted successfully!");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  // Handle update action
  const handleUpdate = (updatedCIRCULAR) => {
    setCIRCULARs(
      circulars.map((circular) => (circular._id === updatedCIRCULAR._id ? updatedCIRCULAR : circular))
    );
    filterCIRCULARs(); // Re-filter after update
  };

  // Render loading, error, or table
  if (loading) return <p>Loading CIRCULARs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="circular-table-container">
      {/* Search Control */}
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search CIRCULARs by title"
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* CIRCULAR Table */}
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
              CIRCULAR Number
            </th>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              CIRCULAR Date
            </th>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              Issued By
            </th>
            <th className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCIRCULARs.map((circular, index) => (
            <tr
              key={circular._id}
              className={`bg-white ${index % 2 === 0 ? "bg-gray-50" : ""
                } transition duration-200 hover:bg-gray-200`}
            >
              <td className="border border-gray-300 p-4">{circular.title}</td>
              <td className="border border-gray-300 p-4">{circular.startYear} - {circular.endYear || "N/A"}</td>
              
              <td className="border border-gray-300 p-4">{circular.circularNumber}</td>
              <td className="border border-gray-300 p-4">
                {new Date(circular.circularDate).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 p-4">{circular.issuedBy}</td>
              <td className="border border-gray-300 p-4">
                <a
                  href={circular.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View
                </a>
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
          circular={selectedCIRCULAR}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default CircularFetch;
