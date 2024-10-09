"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const TendersList = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch the tenders from the API
    const fetchTenders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tenders");
        const filteredTenders = response.data
          .filter(
            (tender) =>
              tender.viewStatus === "public" &&
              tender.latestStatus === "active" &&
              tender.createdAt // Filter out tenders without createdAt
          )
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by createdAt in descending order

        setTenders(filteredTenders);
        setLoading(false);
      } catch (err) {
        setError("Error fetching tenders");
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
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Latest Public and Active Tenders
      </h1>
      {tenders.length === 0 ? (
        <p className="text-center text-gray-500">No tenders available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tenders.map((tender) => (
            <div
              key={tender._id}
              className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2 truncate">
                {tender.tenderNotification}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {tender.description?.substring(0, 100)}...
              </p>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>
                  Uploaded on: {new Date(tender.createdAt).toLocaleDateString()}
                </span>
                <a
                  href={tender.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Tender
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TendersList;
