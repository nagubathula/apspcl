"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UploadForm from "@/components/TenderUploadForm"; // Import the UploadForm component

const TendersTable = () => {
  const [tenders, setTenders] = useState([]);
  const [filteredTenders, setFilteredTenders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [tenderToEdit, setTenderToEdit] = useState(null); // State to manage tender being edited

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/tenders");
        setTenders(res.data);
        setFilteredTenders(res.data); // Initialize filtered tenders with all fetched tenders
      } catch (err) {
        console.error("Error fetching tenders:", err);
      }
    };

    fetchTenders();
  }, []);

  useEffect(() => {
    // Filter tenders based on the search query
    const results = tenders.filter((tender) =>
      tender.tenderNotification
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredTenders(results);
  }, [searchQuery, tenders]);

  // Function to handle opening the modal
  const openModal = (tender = null) => {
    setTenderToEdit(tender);
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setTenderToEdit(null);
  };

  // Function to handle deleting a tender
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this tender?"
    );
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/tenders/${id}`);
        // Remove the deleted tender from the state
        setTenders(tenders.filter((tender) => tender._id !== id));
        setFilteredTenders(
          filteredTenders.filter((tender) => tender._id !== id)
        );
      } catch (err) {
        console.error("Error deleting tender:", err);
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Tenders</h2>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by tender notification..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <button
        onClick={() => openModal(null)} // Open modal for creating new tender
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        Add New
      </button>

      <table className="w-full bg-white border border-gray-300 rounded shadow-md">
        <thead>
          <tr>
            <th className="p-3 border-b border-gray-300 text-left">Sl. No</th>
            <th className="p-3 border-b border-gray-300 text-left">
              Office Of
            </th>
            <th className="p-3 border-b border-gray-300 text-left">
              Tender Notification
            </th>
            <th className="p-3 border-b border-gray-300 text-left">
              Description
            </th>
            <th className="p-3 border-b border-gray-300 text-left">
              Corrigendum
            </th>
            <th className="p-3 border-b border-gray-300 text-left">
              Closing Date
            </th>
            <th className="p-3 border-b border-gray-300 text-left">Link</th>
            <th className="p-3 border-b border-gray-300 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTenders.length > 0 ? (
            filteredTenders.map((tender) => (
              <tr key={tender._id} className="hover:bg-gray-50">
                <td className="p-3 border-b border-gray-300">{tender.slNo}</td>
                <td className="p-3 border-b border-gray-300">
                  {tender.officeOf}
                </td>
                <td className="p-3 border-b border-gray-300">
                  {tender.tenderNotification}
                </td>
                <td className="p-3 border-b border-gray-300">
                  {tender.description}
                </td>
                <td className="p-3 border-b border-gray-300">
                  {tender.corrigendum}
                </td>
                <td className="p-3 border-b border-gray-300">
                  {new Date(tender.closingDate).toLocaleDateString()}
                </td>
                <td className="p-3 border-b border-gray-300">
                  <a
                    href={tender.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </td>
                <td className="p-3 border-b border-gray-300">
                  <button
                    onClick={() => openModal(tender)} // Open modal for editing
                    className="px-4 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(tender._id)} // Handle delete
                    className="ml-2 px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="p-3 text-center text-gray-500">
                No tenders found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal for UploadForm */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-gray-800 opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">
              {tenderToEdit ? "Edit Tender" : "Upload Tender"}
            </h3>
            <UploadForm
              tenderToEdit={tenderToEdit}
              onClose={closeModal}
              onUpdate={(updatedTender) => {
                setTenders((prevTenders) =>
                  prevTenders.map((tender) =>
                    tender._id === updatedTender._id ? updatedTender : tender
                  )
                );
                setFilteredTenders((prevTenders) =>
                  prevTenders.map((tender) =>
                    tender._id === updatedTender._id ? updatedTender : tender
                  )
                );
                closeModal();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TendersTable;
