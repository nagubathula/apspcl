"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";


const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/people");
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
    <div className="grid grid-cols-1 gap-4 ">
      {people.map((person) => (
        <div
          key={person._id}
          className="max-w-sm rounded overflow-hidden shadow-lg px-4 py-3"
        >
          <Image
            className="w-full h-64 object-cover "
            src={`/${person.filepath}`}
            alt="Person"
            width={500}
            height={500}
            // alt="Picture of the author"
          />
          <div className="px-4 py-4">
            <div className="font-bold text-base text-center mb-2">
              {person.name}
            </div>
            <p className="text-gray-700 text-sm text-center">
              {person.designation}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default People;
