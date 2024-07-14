"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UploadForm from "@/components/UploadForm"; // Import the UploadForm component

const ReportTable = () => {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/reports");
        setReports(res.data);
        setFilteredReports(res.data); // Initialize filtered reports with all fetched reports
      } catch (err) {
        console.error(err);
      }
    };

    fetchReports();
  }, []);

  useEffect(() => {
    // Filter reports based on the search query
    const results = reports.filter((report) =>
      report.reportname.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredReports(results);
  }, [searchQuery, reports]);

  // Function to handle opening the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Reports</h2>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by report name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <button
        onClick={openModal}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        Add New
      </button>

      <table className="w-full bg-white border border-gray-300 rounded shadow-md">
        <thead>
          <tr>
            <th className="p-3 border-b border-gray-300 text-left">Type</th>
            <th className="p-3 border-b border-gray-300 text-left">
              Report Name
            </th>
            <th className="p-3 border-b border-gray-300 text-left">Title</th>
            <th className="p-3 border-b border-gray-300 text-left">
              File Path
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.length > 0 ? (
            filteredReports.map((report) => (
              <tr key={report._id} className="hover:bg-gray-50">
                <td className="p-3 border-b border-gray-300">{report.type}</td>
                <td className="p-3 border-b border-gray-300">
                  {report.reportname}
                </td>
                <td className="p-3 border-b border-gray-300">{report.title}</td>
                <td className="p-3 border-b border-gray-300">
                  <a
                    href={`/${report.filepath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-3 text-center text-gray-500">
                No reports found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal for UploadForm */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={closeModal}></div>
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">Upload Report</h3>
            <UploadForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportTable;
