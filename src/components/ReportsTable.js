"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ReportTable = () => {
  const [reports, setReports] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const fileUrl = process.env.NEXT_PUBLIC_FILE_URL;

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/reports`);
        setReports(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Reports</h2>
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
          {reports.map((report) => (
            <tr key={report._id} className="hover:bg-gray-50">
              <td className="p-3 border-b border-gray-300">{report.type}</td>
              <td className="p-3 border-b border-gray-300">
                {report.reportname}
              </td>
              <td className="p-3 border-b border-gray-300">{report.title}</td>
              <td className="p-3 border-b border-gray-300">
                <a
                  href={`${fileUrl}/${report.filepath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
