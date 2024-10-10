"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadForm = ({ report, isEditMode, onEdit, onClose }) => {
  const [type, setType] = useState("");
  const [reportname, setReportname] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  // Populate form fields when editing
  useEffect(() => {
    if (isEditMode && report) {
      setType(report.type || "");
      setReportname(report.reportname || "");
      setTitle(report.title || "");
    } else {
      resetForm(); // Reset form when switching from edit to new report
    }
  }, [isEditMode, report]);

  const resetForm = () => {
    setType("");
    setReportname("");
    setTitle("");
    setFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Type validation
    if (type !== "report" && type !== "return") {
      alert("Type must be either 'report' or 'return'.");
      return;
    }

    const formData = new FormData();
    formData.append("type", type);
    formData.append("reportname", reportname);
    formData.append("title", title);
    if (file) formData.append("file", file); // Append file only if it's present

    try {
      if (isEditMode) {
        // PUT request for editing an existing report
        await axios.put(
          `https://apspclbackend.onrender.com/api/reports/${report._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        onEdit(report._id, {
          type,
          reportname,
          title,
          filepath: report.filepath, // Keep the original file path if no new file
        });
      } else {
        // POST request for creating a new report
        await axios.post(
          "https://apspclbackend.onrender.com/api/reports",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
      resetForm(); // Clear form after submission
      onClose(); // Close the form
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
          accept="image/*" // Adjust if needed (e.g., PDFs, docs)
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-500 text-white rounded shadow hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          {isEditMode ? "Update" : "Upload"}
        </button>
      </div>
    </form>
  );
};

export default UploadForm;
