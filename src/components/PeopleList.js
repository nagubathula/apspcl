// components/PeopleList.js
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/people`);
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">People List</h2>
      <table className="w-full table-auto border-collapse bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="p-2 border-b">Name</th>
            <th className="p-2 border-b">Designation</th>
            <th className="p-2 border-b">File</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person._id}>
              <td className="p-2 border-b">{person.name}</td>
              <td className="p-2 border-b">{person.designation}</td>
              <td className="p-2 border-b">
                <a
                  href={`/${person.filepath}`}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {person.filepath}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeopleList;
