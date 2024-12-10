"use client";
import React, { useState } from "react";

// Modal component for displaying the form
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <button
          onClick={onClose}
          className="text-red-500 float-right focus:outline-none"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

const GOOForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    startYear: "",
    endYear: "",
    gooNumber: "",
    gooDate: "",
    issuedBy: "",
    file: null, // file will be stored here
  });
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("startYear", formData.startYear);
    formDataToSend.append("endYear", formData.endYear);
    formDataToSend.append("gooNumber", formData.gooNumber);
    formDataToSend.append("gooDate", formData.gooDate);
    formDataToSend.append("issuedBy", formData.issuedBy);
    formDataToSend.append("file", formData.file);

    try {
      const response = await fetch("https://apspcl.ap.gov.in/api/goos", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setMessage("GOO created successfully!");
        setFormData({
          title: "",
          startYear: "",
          endYear: "",
          gooNumber: "",
          gooDate: "",
          issuedBy: "",
          file: null,
        });
      } else {
        setMessage("Failed to create GOO. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred while creating the GOO.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open GOO Form
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Create GOO</h2>
          {message && <p className="text-red-500 mb-2">{message}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Title"
              required
              className="block w-full p-2"
            />
            <input
              type="number"
              name="startYear"
              value={formData.startYear}
              onChange={handleInputChange}
              placeholder="Start Year"
              required
              className="block w-full p-2"
            />
            <input
              type="number"
              name="endYear"
              value={formData.endYear}
              onChange={handleInputChange}
              placeholder="End Year"
              required
              className="block w-full p-2"
            />
            <input
              type="text"
              name="gooNumber"
              value={formData.gooNumber}
              onChange={handleInputChange}
              placeholder="GOO Number"
              required
              className="block w-full p-2"
            />
            <input
              type="date"
              name="gooDate"
              value={formData.gooDate}
              onChange={handleInputChange}
              required
              className="block w-full p-2"
            />
            <input
              type="text"
              name="issuedBy"
              value={formData.issuedBy}
              onChange={handleInputChange}
              placeholder="Issued By"
              required
              className="block w-full p-2"
            />
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="block w-full p-2"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              {isSubmitting ? "Submitting..." : "Submit GOO"}
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default GOOForm;
