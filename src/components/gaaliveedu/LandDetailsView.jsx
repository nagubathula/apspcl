"use client";
import React, { useState, useEffect } from "react";

const LandDetailsView = () => {
  const [landdetails, setLandDetails] = useState([]);

  const loadLandDetails = async () => {
    const response = await fetch(
      "http://localhost:5000/api/gaaliveedulanddetails/landdetails"
    );
    const data = await response.json();
    setLandDetails(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this file?")) {
      await fetch(
        `http://localhost:5000/api/gaaliveedulanddetails/landdetails/${id}`,
        {
          method: "DELETE",
        }
      );
      loadLandDetails();
    }
  };
  useEffect(() => {
    loadLandDetails();
  }, []);

  return (
    <div className="bg-white rounded shadow-md overflow-x-auto">
      <h2 className="text-xl font-semibold mt-6">
        Land Details for Kadapa Ultra Mega Solar Park
      </h2>
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Village Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Govt Land
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Assigned Land
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Patta Land
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Total Land
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {landdetails.map((landdetail) => (
            <tr key={landdetail._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {landdetail.villagename}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {landdetail.govtland} acres
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {landdetail.assignedland} acres
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {landdetail.pattaland} acres
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {landdetail.total} acres
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LandDetailsView;
