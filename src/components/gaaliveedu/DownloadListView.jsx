"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const DownloadListView = () => {
  const [downloads, setDownloads] = useState([]);

  const loadDownloads = async () => {
    const response = await fetch(
      "http://localhost:5000/api/gaaliveedudownloads/downloads"
    );
    const data = await response.json();
    setDownloads(data);
  };

  useEffect(() => {
    loadDownloads();
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold mt-6">Download List View</h2>
      <ul className="bg-white rounded-lg shadow-lg divide-y divide-gray-200">
        {downloads.map((download) => (
          <li
            key={download._id}
            className="flex justify-between items-center p-4 hover:bg-gray-100 transition cursor-pointer"
          >
            <Link
              href={`http://localhost:5000/${download.path}`}
              download
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              {download.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadListView;
