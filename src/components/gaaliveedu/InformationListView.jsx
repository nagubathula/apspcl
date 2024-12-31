"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const InformationListView = () => {
  const [informations, setInformations] = useState([]);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editFile, setEditFile] = useState(null);
  const [editId, setEditId] = useState(null);

  const loadInformations = async () => {
    const response = await fetch(
      "http://localhost:5000/api/gaaliveeduinformations/informations"
    );
    const data = await response.json();
    setInformations(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this file?")) {
      await fetch(
        `http://localhost:5000/api/gaaliveeduinformations/informations/${id}`,
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
        `http://localhost:5000/api/gaaliveeduinformations/informations/${id}`,
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
      <h2 className="text-xl font-semibold mt-6">Information To Bidders</h2>
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
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {informations.map((information) => (
              <tr key={information._id}>
                <>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {information.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {" "}
                    {information.description}
                  </td>
                  <td>
                    <Link
                      href={`http://localhost:5000/${information.path}`}
                      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 text-sm whitespace-nowrap"
                    >
                      {" "}
                      View
                    </Link>
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InformationListView;
