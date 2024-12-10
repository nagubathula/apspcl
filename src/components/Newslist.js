"use client";
import { useEffect, useState, useRef } from "react";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const listRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);

  // Fetch news from the backend
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("https://apspcl.ap.gov.in/api/news");
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

  // Infinite scroll effect
  useEffect(() => {
    const scrollList = () => {
      if (listRef.current && isScrolling) {
        const scrollHeight = listRef.current.scrollHeight;
        const scrollTop = listRef.current.scrollTop;
        const clientHeight = listRef.current.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
          // Reset scroll to top when reaching the bottom
          listRef.current.scrollTop = 0;
        } else {
          listRef.current.scrollTop += 2; // Adjust scroll speed as needed
        }
      }
    };

    const intervalId = setInterval(scrollList, 50); // Scroll interval (speed)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [isScrolling]);

  const handleMouseEnter = () => {
    setIsScrolling(false); // Stop scrolling on hover
  };

  const handleMouseLeave = () => {
    setIsScrolling(true); // Resume scrolling on hover leave
  };

  if (loading) {
    return <div>Loading news...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-lg font-semibold mb-4 text-center">Latest News</h2>
      <div
        className="relative h-96 overflow-auto bg-gray-50 shadow-lg rounded-md p-4 custom-scrollbar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={listRef}
      >
        {news.length === 0 ? (
          <p className="text-sm text-gray-500 text-center">
            No news available.
          </p>
        ) : (
          <ul className="space-y-2">
            {news.map((newsItem) => (
              <li
                key={newsItem._id}
                className="p-3 border border-gray-200 rounded-md shadow-sm bg-white hover:bg-gray-100 transition"
              >
                <p className="text-xs text-gray-400">
                  {new Date(newsItem.createdDate).toLocaleDateString()}
                </p>
                <h3 className="text-sm font-bold text-gray-800">
                  {newsItem.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1 line-clamp-3">
                  {newsItem.description}
                </p>
                <a
                  href={newsItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:underline mt-2 inline-block"
                >
                  Read more
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NewsList;
