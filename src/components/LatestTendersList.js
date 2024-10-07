"use client"
import { useEffect, useState } from 'react';

const TendersList = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tenders from the backend
  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/latest/tenders');
        if (!res.ok) {
          throw new Error('Failed to fetch tenders');
        }
        const data = await res.json();
        setTenders(data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchTenders();
  }, []);

  if (loading) {
    return <div>Loading tenders...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Latest Tenders</h2>
      {tenders.length === 0 ? (
        <p>No tenders available.</p>
      ) : (
        <ul className="space-y-4">
          {tenders.map((tendersItem) => (
            <li key={tendersItem._id} className="p-4 border rounded-md shadow-md">
              {/* Use createdDate field */}
              <p className="text-sm text-gray-500">
                {new Date(tendersItem.createdDate).toLocaleDateString()} {/* Display the created date */}
              </p>
              <h3 className="text-xl font-bold">
                &lt;&lt;{tendersItem.title}&gt;&gt; {/* Title in << >> */}
              </h3>
              <p className="text-gray-700 mt-2">
                {tendersItem.description} {/* Description */}
              </p>
              <a
                href={tendersItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                &lt;read more&gt; {/* "Read more" link in < > */}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TendersList;

