"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PeopleForm from "./PeopleForm";
import Link from "next/link";
import Image from "next/image";

const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingPerson, setEditingPerson] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get(
          "https://apspcl.codesignagency.in/api/api/people"
        );
        setPeople(response.data);
      } catch (err) {
        setError("Failed to fetch people data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  // Filter people based on search query
  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (person) => {
    setEditingPerson(person);
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("name", editingPerson.name);
      formData.append("designation", editingPerson.designation);
      if (editingPerson.file) {
        formData.append("file", editingPerson.file);
      }

      await axios.put(
        `https://apspcl.codesignagency.in/api/api/people/${editingPerson._id}`,
        formData
      );
      setEditingPerson(null);
      window.location.reload(); // Refresh the page after saving
    } catch (err) {
      console.error("Failed to update person", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://apspcl.codesignagency.in/api/api/people/${id}`
      );
      setPeople(people.filter((person) => person._id !== id));
      setEditingPerson(null);
    } catch (err) {
      console.error("Failed to delete person", err);
    }
  };

  const closeForm = () => {
    setShowForm(false);
    window.location.reload(); // Refresh the page when the form is closed
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-4xl mx-auto   ">
      {/* <h2 className="text-2xl font-bold text-gray-800 mb-4">People List</h2> */}
      <div className="mb-4 flex flex-row justiify-between w-full items-center gap-4">
        <div>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Add New Person
          </button>
        </div>
      </div>
      <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-600 border-b border-gray-300">
            <th className="p-4 text-left">Person</th>
            <th className="p-4 text-left">Designation</th>
            <th className="p-4 text-left">File</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPeople.map((person) => (
            <tr
              key={person._id}
              className="border-b border-gray-300 hover:bg-gray-50"
            >
              <td className="p-4 flex items-center gap-4">
                <Image
                  className="rounded-full h-12 w-12 object-cover"
                  alt={person.name}
                  src={`/${person.filepath}`}
                  height={48}
                  width={48}
                />
                <span className="text-gray-800 font-medium">{person.name}</span>
              </td>
              <td className="p-4 text-gray-700">{person.designation}</td>
              <td className="p-4">
                <Link
                  href={`/${person.filepath}`}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {person.filepath}
                </Link>
              </td>
              <td className="p-4 text-center">
                <button
                  onClick={() => handleEdit(person)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingPerson && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Edit Person
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={editingPerson.name}
                onChange={(e) =>
                  setEditingPerson({ ...editingPerson, name: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Designation</label>
              <input
                type="text"
                value={editingPerson.designation}
                onChange={(e) =>
                  setEditingPerson({
                    ...editingPerson,
                    designation: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">File</label>
              <input
                type="file"
                onChange={(e) =>
                  setEditingPerson({
                    ...editingPerson,
                    file: e.target.files[0],
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setEditingPerson(null)}
                className="mr-2 text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              >
                Save
              </button>
              <button
                onClick={() => handleDelete(editingPerson._id)}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-700 ml-2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="relative bg-white p-4 rounded shadow-md">
            {/* <button
              onClick={closeForm}
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
            >
              Close
            </button> */}
            <PeopleForm onClose={closeForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PeopleList;
