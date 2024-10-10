"use client";
import { useEffect, useState } from "react";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch news from the backend
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("https://apspclbackend.onrender.com/api/news");
        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await res.json();
        setNews(data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading news...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
      {news.length === 0 ? (
        <p>No news available.</p>
      ) : (
        <ul className="space-y-4">
          {news.map((newsItem) => (
            <li key={newsItem._id} className="p-4 border rounded-md shadow-md">
              {/* Use createdDate field */}
              <p className="text-sm text-gray-500">
                {new Date(newsItem.createdDate).toLocaleDateString()}{" "}
                {/* Display the created date */}
              </p>
              <h3 className="text-xl font-bold">{newsItem.title}</h3>
              <p className="text-gray-700 mt-2">{newsItem.description}</p>
              <a
                href={newsItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                read more
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsList;
