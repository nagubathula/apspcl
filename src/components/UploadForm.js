"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadForm = ({ report, isEditMode, onEdit, onClose }) => {
  const [type, setType] = useState("");
  const [reportname, setReportname] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (isEditMode && report) {
      setType(report.type);
      setReportname(report.reportname);
      setTitle(report.title);
    }
  }, [isEditMode, report]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type !== "report" && type !== "return") {
      alert("Type must be either 'report' or 'return'.");
      return;
    }

    const formData = new FormData();
    formData.append("type", type);
    formData.append("reportname", reportname);
    formData.append("title", title);
    if (file) formData.append("file", file);

    try {
      if (isEditMode) {
        await axios.put(
          `http://localhost:5000/api/reports/${report._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Ensure the request is sent as multipart
            },
          }
        );
        onEdit(report._id, {
          type,
          reportname,
          title,
          filepath: report.filepath,
        });
      } else {
        await axios.post("http://localhost:5000/api/reports", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure the request is sent as multipart
          },
        });
        onClose(); // You may want to refresh the list or handle success
      }
    } catch (error) {
      console.error(
        "Error submitting report:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        >
          <option value="">Select type</option>
          <option value="report">Report</option>
          <option value="return">Return</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Report Name
        </label>
        <input
          type="text"
          value={reportname}
          onChange={(e) => setReportname(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">File</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          accept="image/*" // Adjust the file type if needed
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        {isEditMode ? "Update" : "Upload"}
      </button>
    </form>
  );
};

export default UploadForm;
