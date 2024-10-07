"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

const TendersList = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the tenders from the API
    const fetchTenders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tenders');
        const filteredTenders = response.data
          .filter(
            (tender) => 
              tender.viewStatus === 'public' && 
              tender.latestStatus === 'active' && 
              tender.createdAt // Filter out tenders without createdAt
          )
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by createdAt in descending order

        setTenders(filteredTenders);
        setLoading(false);
      } catch (err) {
        setError('Error fetching tenders');
        setLoading(false);
      }
    };

    fetchTenders();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading tenders...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Public and Active Tenders</h1>
      {tenders.length === 0 ? (
        <p className="text-center text-gray-500">No tenders available.</p>
      ) : (
        <ul className="space-y-4">
          {tenders.map((tender) => (
            <li
              key={tender._id}
              className="p-4 bg-white shadow-md rounded-md border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-700">{tender.tenderNotification}</h2>
              <a
                href={tender.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Tender
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TendersList;
