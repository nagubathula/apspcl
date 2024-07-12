"use client";
// components/UploadForm.js
import React, { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [type, setType] = useState("");
  const [reportname, setReportname] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("type", type);
    formData.append("reportname", reportname);
    formData.append("title", title);
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://16.171.16.149/api/api/reports",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload Report</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Type:</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-white"
            required
          >
            <option value="">Select Type</option>
            <option value="Report">Report</option>
            <option value="Return">Return</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Report Name:
          </label>
          <input
            type="text"
            value={reportname}
            onChange={(e) => setReportname(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">File:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full p-2 border border-gray-300 rounded bg-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
