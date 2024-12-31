"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import DownloadListView from "@/components/npkunta/DownloadListView";

const UploadForm = ({ onUpload }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const response = await fetch(
        "http://localhost:5000/api/npkuntadownloads/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await response.json();
      if (response.ok) {
        alert("File uploaded successfully");
        onUpload();
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md flex items-center gap-4"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="File Title"
        required
        className="flex-1 border border-gray-300 rounded p-2 text-sm"
      />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
        className="flex-1 border border-gray-300 rounded p-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 text-sm"
      >
        Upload
      </button>
    </form>
  );
};

const DownloadList = () => {
  const [downloads, setDownloads] = useState([]);
  const [editTitle, setEditTitle] = useState("");
  const [editFile, setEditFile] = useState(null);
  const [editId, setEditId] = useState(null);

  const loadDownloads = async () => {
    const response = await fetch(
      "http://localhost:5000/api/npkuntadownloads/downloads"
    );
    const data = await response.json();
    setDownloads(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this file?")) {
      await fetch(
        `http://localhost:5000/api/npkuntadownloads/downloads/${id}`,
        {
          method: "DELETE",
        }
      );
      loadDownloads();
    }
  };

  const handleEdit = (download) => {
    setEditId(download._id);
    setEditTitle(download.title);
  };

  const submitEdit = async (id) => {
    const formData = new FormData();
    formData.append("title", editTitle);

    if (editFile) {
      formData.append("file", editFile); // Add the new file if selected
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/npkuntadownloads/downloads/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Failed to update download");

      setEditId(null); // Close the edit form
      loadDownloads(); // Reload the download list
    } catch (error) {
      console.error("Error during file update:", error);
    }
  };

  useEffect(() => {
    loadDownloads();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-lg">
        <thead className="bg-gray-100">
          <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Path</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {downloads.map((download) => (
            <tr key={download._id} className="hover:bg-gray-50">
              {editId === download._id ? (
                <>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <input
                      type="file"
                      onChange={(e) => setEditFile(e.target.files[0])}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </td>
                  <td className="py-2 px-4 flex gap-2">
                    <button
                      onClick={() => submitEdit(download._id)}
                      className="bg-green-500 text-white font-bold py-1 px-3 rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{download.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{download.path}</td>
                  <td className="py-2 px-4 flex gap-2">
                    <button
                      onClick={() => handleEdit(download)}
                      className="bg-yellow-500 text-white text-sm font-bold py-1 px-3 rounded hover:bg-yellow-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(download._id)}
                      className="bg-red-500 text-white text-sm font-bold py-1 px-3 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Downloads = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Downloads Manager</h1>
      <UploadForm onUpload={() => window.location.reload()} />
      <h2 className="text-xl font-semibold mt-6">Download List</h2>
      <DownloadList />

    </div>
  );
};

export default Downloads;
