"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DownloadManager = () => {
  const [downloads, setDownloads] = useState([]);

  // Fetch downloads when the component mounts
  useEffect(() => {
    fetchDownloads();
  }, []);

  // Fetch downloads from backend
  const fetchDownloads = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/downloads");
      setDownloads(response.data);
    } catch (error) {
      console.error("Failed to fetch downloads", error);
    }
  };

  return (
    <div className="w-full mx-auto ">
      
      <ul className="list-disc pl-5 space-y-2">
        {downloads.map((download) => (
          <li key={download._id}>
            <h3 className="font-semibold text-base">{download.title}</h3>
            {download.link ? (
              <a
                href={download.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                {download.description}
              </a>
            ) : (
              <p className="text-gray-600">{download.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadManager;
