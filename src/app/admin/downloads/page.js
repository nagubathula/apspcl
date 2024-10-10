"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DownloadManager = () => {
  const [downloads, setDownloads] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch downloads when the component mounts
  useEffect(() => {
    fetchDownloads();
  }, []);

  // Fetch downloads from backend
  const fetchDownloads = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/downloads");
      setDownloads(response.data);
    } catch (error) {
      console.error("Failed to fetch downloads", error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  // Handle form submit (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    if (formData.file) form.append("file", formData.file);

    try {
      if (editMode) {
        // Update download
        await axios.put(`http://localhost:5000/api/downloads/${editId}`, form);
        setEditMode(false);
        setEditId(null);
      } else {
        // Create new download
        await axios.post("http://localhost:5000/api/downloads", form);
      }
      fetchDownloads(); // Refresh list after submission
      setFormData({ title: "", description: "", file: null });
    } catch (error) {
      console.error("Failed to submit download", error);
    }
  };

  // Handle edit
  const handleEdit = (download) => {
    setFormData({ title: download.title, description: download.description });
    setEditMode(true);
    setEditId(download._id);
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/downloads/${id}`);
      fetchDownloads();
    } catch (error) {
      console.error("Failed to delete download", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Download Manager</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            File
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer"
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            {editMode ? "Update Download" : "Create Download"}
          </button>
        </div>
      </form>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Downloads List</h2>
        <ul className="space-y-4">
          {downloads.map((download) => (
            <li
              key={download._id}
              className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{download.title}</h3>
                <p className="text-gray-600">{download.description}</p>
                {download.link && (
                  <a
                    href={download.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Download File
                  </a>
                )}
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(download)}
                  className="px-3 py-1 bg-blue-500 text-white text-sm rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(download._id)}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DownloadManager;
