import React, { useState, useEffect } from "react";
import axios from "axios";

const EditForm = ({ report, onClose, onUpdate }) => {
  // Initialize state with the report data
  const [formData, setFormData] = useState({
    type: report?.type || "",
    reportname: report?.reportname || "",
    title: report?.title || "",
    filepath: report?.filepath || "",
  });

  useEffect(() => {
    // Whenever the report prop changes, update the formData state
    if (report) {
      setFormData({
        type: report.type || "",
        reportname: report.reportname || "",
        title: report.title || "",
        filepath: report.filepath || "",
      });
    }
  }, [report]);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the updated report data to the backend
      const res = await axios.put(
        `http://localhost:5000/api/reports/${report._id}`,
        formData
      );

      // Call onUpdate to update the report in the parent component (ReportTable)
      onUpdate(res.data);
    } catch (err) {
      console.error("Error updating report:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Type:</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select type</option>
          <option value="report">Report</option>
          <option value="return">Return</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700">Report Name:</label>
        <input
          type="text"
          name="reportname"
          value={formData.reportname}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700">File Path:</label>
        <input
          type="text"
          name="filepath"
          value={formData.filepath}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditForm;
