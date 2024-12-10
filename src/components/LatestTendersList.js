"use client";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const TendersList = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const listRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const response = await axios.get(
          "https://apspcl.ap.gov.in/api/tenders"
        );
        const filteredTenders = response.data
          .filter(
            (tender) =>
              tender.viewStatus === "public" &&
              tender.latestStatus === "active" &&
              tender.createdAt
          )
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setTenders(filteredTenders);
        setLoading(false);
      } catch (err) {
        setError("Error fetching tenders");
        setLoading(false);
      }
    };

    fetchTenders();
  }, []);

  useEffect(() => {
    const scrollList = () => {
      if (listRef.current && isScrolling) {
        // Scroll down by a fixed amount
        listRef.current.scrollTop += 1; // Adjust scroll speed as needed

        // If at the bottom, reset to the top
        if (
          listRef.current.scrollTop >=
          listRef.current.scrollHeight - listRef.current.clientHeight
        ) {
          listRef.current.scrollTop = 0;
        }
      }
    };

    const intervalId = setInterval(scrollList, 50); // Scroll interval (speed)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [isScrolling]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading tenders...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  const shouldScroll = tenders.length > 3;

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <h1 className="text-xl font-bold mb-4 text-gray-800">
        Latest Public and Active Tenders
      </h1>
      <div
        className="relative h-96 overflow-auto"
        onMouseEnter={() => setIsScrolling(false)} // Stop scrolling on hover
        onMouseLeave={() => setIsScrolling(true)} // Resume scrolling on hover leave
        ref={listRef}
      >
        <div className={`tenders-list ${shouldScroll ? "auto-scroll" : ""}`}>
          {tenders.length === 0 ? (
            <p className="text-center text-gray-500">No tenders available.</p>
          ) : (
            tenders.map((tender) => (
              <div
                key={tender._id}
                className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 mb-3"
              >
                <h2 className="text-lg font-medium text-gray-700 mb-1 truncate">
                  {tender.tenderNotification}
                </h2>
                <p className="text-xs text-gray-500 mb-3">
                  {tender.description?.substring(0, 100)}...
                </p>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>
                    Uploaded on:{" "}
                    {new Date(tender.createdAt).toLocaleDateString()}
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TendersList;
