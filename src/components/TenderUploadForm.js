"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadForm = ({ tender, isEditMode, onEdit, onClose }) => {
  const [slNo, setSlNo] = useState("");
  const [officeOf, setOfficeOf] = useState("");
  const [tenderNotification, setTenderNotification] = useState("");
  const [description, setDescription] = useState("");
  const [corrigendum, setCorrigendum] = useState("N/A");
  const [closingDate, setClosingDate] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (isEditMode && tender) {
      setSlNo(tender.slNo || "");
      setOfficeOf(tender.officeOf || "");
      setTenderNotification(tender.tenderNotification || "");
      setDescription(tender.description || "");
      setCorrigendum(tender.corrigendum || "N/A");
      setClosingDate(
        new Date(tender.closingDate).toISOString().split("T")[0] || ""
      );
      setLink(tender.link || "");
    }
  }, [isEditMode, tender]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("slNo", slNo);
    formData.append("officeOf", officeOf);
    formData.append("tenderNotification", tenderNotification);
    formData.append("description", description);
    formData.append("corrigendum", corrigendum);
    formData.append("closingDate", closingDate);
    formData.append("link", link);
    if (file) formData.append("file", file);

    try {
      if (isEditMode) {
        await axios.put(
          `https://apspcl.ap.gov.in/api/tenders/${tender._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        onEdit(tender._id, {
          slNo,
          officeOf,
          tenderNotification,
          description,
          corrigendum,
          closingDate,
          link,
          filepath: tender.filepath,
        });
      } else {
        await axios.post("https://apspcl.ap.gov.in/api/tenders", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        onClose();
      }
    } catch (error) {
      console.error(
        "Error submitting tender:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Sl. No
        </label>
        <input
          type="number"
          value={slNo}
          onChange={(e) => setSlNo(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Office Of
        </label>
        <input
          type="text"
          value={officeOf}
          onChange={(e) => setOfficeOf(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Tender Notification
        </label>
        <input
          type="text"
          value={tenderNotification}
          onChange={(e) => setTenderNotification(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Corrigendum
        </label>
        <input
          type="text"
          value={corrigendum}
          onChange={(e) => setCorrigendum(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Closing Date
        </label>
        <input
          type="date"
          value={closingDate}
          onChange={(e) => setClosingDate(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Link</label>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">File</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          accept="application/pdf, image/*" // Adjust file types as needed
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        {isEditMode ? "Update Tender" : "Upload Tender"}
      </button>
    </form>
  );
};

export default UploadForm;
