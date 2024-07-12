// components/PeopleForm.js
"use client";
import React, { useState } from "react";
import axios from "axios";

const PeopleForm = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [file, setFile] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("file", file);

    try {
      const res = await axios.post(
        "https://apspcl.codesignagency.in/api/api/people",
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
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Upload Person Data
      </h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Designation:
          </label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
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

export default PeopleForm;
