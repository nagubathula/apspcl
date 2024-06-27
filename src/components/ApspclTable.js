// components/ApspclTable.js
"use client";
import Link from "next/link";
// components/ApspclTable.js
import React, { useState, useEffect } from "react";
import apspclData from "@/data/ApspclData.json"; // Adjust path as per your project structure

const ApspclTable = () => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    // Set default selected title to the first title in the JSON data
    const defaultTitle = Object.keys(apspclData)[0];
    setSelectedTitle(defaultTitle);
    setSelectedData(apspclData[defaultTitle]);
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleTitleChange = (event) => {
    const title = event.target.value;
    setSelectedTitle(title);
    setSelectedData(apspclData[title]);
  };

  return (
    <div className="overflow-x-auto max-w-7xl">
      <div className="mb-4 flex flex-row items-center gap-8 ">
        <label
          htmlFor="title"
          className="block w-auto text-sm font-medium text-gray-700"
        >
          Name of the Station
        </label>
        <select
          id="title"
          name="title"
          value={selectedTitle}
          onChange={handleTitleChange}
          className="mt-1 block  border border-gray-300 rounded py-2 px-4"
        >
          {Object.keys(apspclData).map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>
      {selectedData.length > 0 && (
        <table className="min-w-full bg-white border text-sm border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">
                SL.NO.
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">
                Office Of
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">
                Tender Notification
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">
                Description
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">
                Closing Date
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedData.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {item["SL.NO."]}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {item["Office Of"]}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {item["Tender Notification"]}
                </td>
                <td className="py-2 px-4 text-xs border-b border-gray-200">
                  <Link
                    href={item["Link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {item["Description"]}
                  </Link>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {item["Closing Date"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {selectedData.length === 0 && selectedTitle && (
        <p className="mt-4 text-gray-600">
          No data available for the selected title.
        </p>
      )}
    </div>
  );
};

export default ApspclTable;
