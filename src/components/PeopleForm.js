// components/PeopleForm.js
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const PeopleForm = ({ person, onClose, onSubmitSuccess, onDelete }) => {
  const [name, setName] = useState(person?.name || "");
  const [designation, setDesignation] = useState(person?.designation || "");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (person) {
      setName(person.name);
      setDesignation(person.designation);
      setFile(null); // Clear file input
    }
  }, [person]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    if (file) {
      formData.append("file", file);
    }

    try {
      if (person) {
        await axios.put(
          `https://apspcl.ap.gov.in/api/people/${person._id}`,
          formData
        );
      } else {
        await axios.post("https://apspcl.ap.gov.in/api/people", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      if (onSubmitSuccess) onSubmitSuccess(); // Call the success callback
      onClose(); // Close the form after successful submission
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (person) {
      try {
        await axios.delete(`https://apspcl.ap.gov.in/api/people/${person._id}`);
        if (onDelete) onDelete(); // Call the delete callback
        onClose(); // Close the form after successful deletion
      } catch (err) {
        console.error("Failed to delete person", err);
      }
    }
  };

  return (
    <div className="relative max-w-lg mx-auto p-4 rounded ">
      <button
        onClick={onClose}
        className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
      >
        Close
      </button>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {person ? "Edit Person" : "Upload Person Data"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
          >
            {person ? "Save Changes" : "Upload"}
          </button>
          {person && (
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-600 text-white p-2 rounded hover:bg-red-500"
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PeopleForm;
