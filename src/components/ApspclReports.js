"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ApspclReports = () => {
  const [reportsData, setReportsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/reports");
        setReportsData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch reports");
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const filteredReports = reportsData.filter((report) => {
    const reportName = report.reportname || ""; // Using 'reportname' from your model
    const matchesSearch = reportName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "" || report.type === filterType; // Using 'type' from your model
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Search :</span>
          <input
            type="text"
            placeholder="Search by report name..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 border border-gray-300 rounded-l focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Show :</span>
          <button
            onClick={() => handleFilterChange("")}
            className={`p-2 rounded-l rounded-r-none ${
              filterType === ""
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-600 focus:outline-none`}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("Report")}
            className={`p-2 ${
              filterType === "Report"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-600 focus:outline-none`}
          >
            Reports
          </button>
          <button
            onClick={() => handleFilterChange("Return")}
            className={`p-2 rounded-r rounded-l-none ${
              filterType === "Return"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-600 focus:outline-none`}
          >
            Returns
          </button>
        </div>
      </div>
      <div className="overflow-x-auto text-left text-sm">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-100 border ">
            <tr>
              <th className="py-2 px-4">Type</th>
              <th className="py-2 px-4">Report Name</th>
              <th className="py-2 px-4">Title</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredReports.map((report, index) => (
              <tr key={index} className="bg-gray-50 border-b">
                <td className="py-3 px-4">{report.type}</td> {/* Accessing 'type' */}
                <td className="py-3 px-4">{report.reportname}</td> {/* Accessing 'reportname' */}
                <td className="py-3 px-4">
                  <a
                    href={report.filepath}
                    className="text-blue-500 hover:underline"
                  >
                    {report.title}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApspclReports;
