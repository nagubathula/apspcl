"use client";
import React, { useState, useEffect } from "react";
import LandDetailsView from "./LandDetailsView";

const UploadForm = ({ onUpload }) => {
  const [villagename, setVillageName] = useState("");
  const [govtland, setGovtLand] = useState(0);
  const [assignedland, setAssignedLand] = useState(0);
  const [pattaland, setPattaLand] = useState(0);
  const [total, setTotal] = useState(0);
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("villagename", villagename);
    formData.append("govtland", govtland);
    formData.append("assignedland", assignedland);
    formData.append("pattaland", pattaland);
    formData.append("total", total);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/npkuntalanddetails/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await response.json();
      if (response.ok) {
        alert("File uploaded successfully");
        setVillageName("");
        setGovtLand(0);
        setAssignedLand(0);
        setPattaLand(0);
        setTotal(0);
        setFile(null);
        onUpload();
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file.");
    }
  };

  return (
<form
 onSubmit={handleSubmit}
 className="bg-white p-4 rounded shadow-md"
>
 <div className="flex items-center gap-3">
   <div className="flex-1 min-w-0">
     <label className="block text-sm text-gray-700 mb-1">Village Name:</label>
     <input
       type="text"
       value={villagename}
       onChange={(e) => setVillageName(e.target.value)} 
       required
       className="w-full border border-gray-300 rounded p-2 text-sm"
     />
   </div>

   <div className="flex-1 min-w-0">
     <label className="block text-sm text-gray-700 mb-1">Govt Land (acres):</label>
     <input
       type="number"
       value={govtland}
       onChange={(e) => setGovtLand(e.target.value)}
       required
       step="0.01"
       className="w-full border border-gray-300 rounded p-2 text-sm"
     />
   </div>

   <div className="flex-1 min-w-0">
     <label className="block text-sm text-gray-700 mb-1">Assigned Land (acres):</label>
     <input
       type="number" 
       value={assignedland}
       onChange={(e) => setAssignedLand(e.target.value)}
       required
       step="0.01"
       className="w-full border border-gray-300 rounded p-2 text-sm"
     />
   </div>

   <div className="flex-1 min-w-0">
     <label className="block text-sm text-gray-700 mb-1">Patta Land (acres):</label>
     <input
       type="number"
       value={pattaland}
       onChange={(e) => setPattaLand(e.target.value)}
       required
       step="0.01"
       className="w-full border border-gray-300 rounded p-2 text-sm"
     />
   </div>

   <div className="flex-1 min-w-0">
     <label className="block text-sm text-gray-700 mb-1">Total Land (acres):</label>
     <input
       type="number"
       value={total}
       onChange={(e) => setTotal(e.target.value)}
       required
       step="0.01"
       className="w-full border border-gray-300 rounded p-2 text-sm"
     />
   </div>

   <div className="flex-none">
     <label className="block text-sm text-gray-700 mb-1 invisible">Action</label>
     <button
       type="submit"
       className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 text-sm whitespace-nowrap"
     >
       Upload
     </button>
   </div>
 </div>
</form>
  );
};

const LandDetailsList = () => {
  const [landdetails, setLandDetails] = useState([]);

  const loadLandDetails = async () => {
    const response = await fetch(
      "http://localhost:5000/api/npkuntalanddetails/landdetails"
    );
    const data = await response.json();
    setLandDetails(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this file?")) {
      await fetch(
        `http://localhost:5000/api/npkuntalanddetails/landdetails/${id}`,
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
    <table className="min-w-full">
      <thead>
        <tr className="bg-gray-50">
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Village Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Govt Land</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned Land</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patta Land</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Land</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {landdetails.map((landdetail) => (
          <tr key={landdetail._id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{landdetail.villagename}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{landdetail.govtland} acres</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{landdetail.assignedland} acres</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{landdetail.pattaland} acres</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{landdetail.total} acres</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                onClick={() => handleDelete(landdetail._id)}
                className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

const LandDetails = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Land Details Manager</h1>
      <UploadForm onUpload={() => window.location.reload()} />
      <h2 className="text-xl font-semibold mt-6">Land Details List</h2>
      <LandDetailsList />
     
    </div>
  );
};

export default LandDetails;
