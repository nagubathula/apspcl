// components/ReportTable.js
"use client"
// components/ReportTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReportTable = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/reports');
        setReports(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchReports();
  }, []);

  return (
    <div>
      <h2>Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Report Name</th>
            <th>Title</th>
            <th>File Path</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report._id}>
              <td>{report.type}</td>
              <td>{report.reportname}</td>
              <td>{report.title}</td>
              <td>
                <a href={`http://localhost:5000/${report.filepath}`} target="_blank" rel="noopener noreferrer">
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
