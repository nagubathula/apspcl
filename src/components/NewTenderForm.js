"use client";
import React, { useState } from "react";

// Modal component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // If modal is closed, don't render anything

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

const TenderForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    officeOf: "",
    tenderNotification: "",
    description: "",
    corrigendum: "",
    closingDate: "",
    viewStatus: "public", // Default value
    latestStatus: "active", // Default value
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type !== "application/pdf") {
      setMessage("Only PDF files are allowed.");
      setFile(null);
      return;
    }
    setFile(selectedFile);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure a file is selected
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("category", formData.category);
    formDataToSend.append("officeOf", formData.officeOf);
    formDataToSend.append("tenderNotification", formData.tenderNotification);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("corrigendum", formData.corrigendum);
    formDataToSend.append("closingDate", formData.closingDate);
    formDataToSend.append("viewStatus", formData.viewStatus);
    formDataToSend.append("latestStatus", formData.latestStatus);
    formDataToSend.append("file", file);

    try {
      const response = await fetch(
        "https://apspclbackend.onrender.com/api/tenders",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        const result = await response.json();
        setMessage("Tender created successfully!");
        console.log(result);

        // Clear the form after successful submission
        setFormData({
          category: "",
          officeOf: "",
          tenderNotification: "",
          description: "",
          corrigendum: "",
          closingDate: "",
          viewStatus: "public",
          latestStatus: "active",
        });
        setFile(null);
      } else {
        setMessage("Failed to create tender. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while creating the tender.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
      >
        Open Tender Form
      </button>

      {/* Modal for Tender Form */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Create Tender</h2>
          {message && <p className="text-red-500 mb-2">{message}</p>}
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="space-y-4"
          >
            {/* Existing fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category:
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Office Of:
              </label>
              <input
                type="text"
                name="officeOf"
                value={formData.officeOf}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tender Notification:
              </label>
              <input
                type="text"
                name="tenderNotification"
                value={formData.tenderNotification}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description:
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Corrigendum (optional):
              </label>
              <input
                type="text"
                name="corrigendum"
                value={formData.corrigendum}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Closing Date:
              </label>
              <input
                type="date"
                name="closingDate"
                value={formData.closingDate}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Radio Buttons for viewStatus */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                View Status:
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="viewStatus"
                    value="public"
                    checked={formData.viewStatus === "public"}
                    onChange={handleInputChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Public</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="viewStatus"
                    value="private"
                    checked={formData.viewStatus === "private"}
                    onChange={handleInputChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Private</span>
                </label>
              </div>
            </div>

            {/* Radio Buttons for latestStatus */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Latest Status:
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="latestStatus"
                    value="active"
                    checked={formData.latestStatus === "active"}
                    onChange={handleInputChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Active</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="latestStatus"
                    value="inactive"
                    checked={formData.latestStatus === "inactive"}
                    onChange={handleInputChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Inactive</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload File (PDF only):
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded transition duration-200 ${
                isSubmitting && "opacity-50 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Create Tender"}
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default TenderForm;
