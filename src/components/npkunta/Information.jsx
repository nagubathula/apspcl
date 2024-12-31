"use client";
import React, { useState, useEffect } from "react";
import InformationListView from "./InformationListView";

const UploadForm = ({ onUpload }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    try {
      const response = await fetch(
        "http://localhost:5000/api/npkuntainformations/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await response.json();
      if (response.ok) {
        alert("File uploaded successfully");
        setTitle(""); // Reset form fields
        setDescription("");
        setFile(null);
        onUpload();
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md flex items-center gap-3"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="File Title"
        required
        className="flex-1 border border-gray-300 rounded p-2 text-sm min-w-0"
      />

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="File Description"
        required
        className="flex-1 border border-gray-300 rounded p-2 text-sm min-w-0"
      />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
        className="flex-1 border border-gray-300 rounded p-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 min-w-0"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 text-sm whitespace-nowrap"
      >
        Upload
      </button>
    </form>
  );
};

const InformationList = () => {
  const [informations, setInformations] = useState([]);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editFile, setEditFile] = useState(null);
  const [editId, setEditId] = useState(null);

  const loadInformations = async () => {
    const response = await fetch(
      "http://localhost:5000/api/npkuntainformations/informations"
    );
    const data = await response.json();
    setInformations(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this file?")) {
      await fetch(
        `http://localhost:5000/api/npkuntainformations/informations/${id}`,
        {
          method: "DELETE",
        }
      );
      loadInformations();
    }
  };

  const handleEdit = (information) => {
    setEditId(information._id);
    setEditTitle(information.title);
    setEditDescription(information.description);
  };

  const submitEdit = async (id) => {
    const formData = new FormData();
    formData.append("title", editTitle);
    formData.append("description", editDescription);

    if (editFile) {
      formData.append("file", editFile); // Add the new file if selected
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/npkuntainformations/informations/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Failed to update information");

      setEditId(null); // Close the edit form
      loadInformations(); // Reload the information list
    } catch (error) {
      console.error("Error during file update:", error);
      alert("Failed to update information.");
    }
  };

  useEffect(() => {
    loadInformations();
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="bg-white rounded shadow-md overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Path
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {informations.map((information) => (
              <tr key={information._id}>
                {editId === information._id ? (
                  <>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="border border-gray-300 rounded p-2 w-full"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        className="border border-gray-300 rounded p-2 w-full"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="file"
                        onChange={(e) => setEditFile(e.target.files[0])}
                        className="border border-gray-300 rounded p-2"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => submitEdit(information._id)}
                        className="bg-green-500 text-white font-bold py-1 px-3 rounded hover:bg-green-700"
                      >
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {information.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {information.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {information.path}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(information)}
                        className="bg-yellow-500 text-white font-bold py-1 px-3 rounded hover:bg-yellow-700 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(information._id)}
                        className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-700"
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
    </div>
  );
};

const Information = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Informations Manager</h1>
      <UploadForm onUpload={() => window.location.reload()} />
      <h2 className="text-xl font-semibold mt-6">Information List</h2>
      <InformationList />

    </div>
  );
};

export default Information;
