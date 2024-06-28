"use client";
import React, { useState } from "react";
import reportsData from "@/data/ApspclReports.json";

const ApspclReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const filteredReports = reportsData.filter((report) => {
    const matchesSearch = report["REPORT NAME"]
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "" || report.Type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">APSPCL Reports</h1>
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
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">Type</th>
              <th className="py-2 px-4">Report Name</th>
              <th className="py-2 px-4">Title</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredReports.map((report, index) => (
              <tr key={index} className="bg-gray-100 border-b">
                <td className="py-3 px-4">{report.Type}</td>
                <td className="py-3 px-4">{report["REPORT NAME"]}</td>
                <td className="py-3 px-4">
                  <a
                    href={report.Link}
                    className="text-blue-500 hover:underline"
                  >
                    {report.Title}
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
