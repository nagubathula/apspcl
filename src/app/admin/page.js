// pages/index.js
"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import People from '@/components/People';

export default function Home() {
  const [peopleData, setPeopleData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/peopleData');
      setPeopleData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpload = (newData) => {
    setPeopleData((prevData) => [...prevData, newData]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload People Data</h1>
      <People onUpload={handleUpload} />
      <h2 className="text-xl font-semibold mt-8 mb-4">Uploaded Data</h2>
      <ul className="space-y-4">
        {peopleData.map((data) => (
          <li key={data._id} className="bg-white p-4 rounded-md shadow-md">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Designation:</strong> {data.designation}</p>
            <p><strong>Image URL:</strong> {data.imageUrl}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
