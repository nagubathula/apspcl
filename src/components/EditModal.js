import React, { useState, useEffect } from "react";

const EditModal = ({ isOpen, onClose, tender, onUpdate }) => {
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

  useEffect(() => {
    if (tender) {
      setFormData({
        category: tender.category || "",
        officeOf: tender.officeOf || "",
        tenderNotification: tender.tenderNotification || "",
        description: tender.description || "",
        corrigendum: tender.corrigendum || "",
        closingDate: tender.closingDate
          ? new Date(tender.closingDate).toISOString().split("T")[0]
          : "",
        viewStatus: tender.viewStatus || "public", // Add viewStatus field
        latestStatus: tender.latestStatus || "active", // Add latestStatus field
      });
    }
  }, [tender]);

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/tenders/${tender._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update tender");
      }

      const updatedTender = await response.json();
      onUpdate(updatedTender); // Call onUpdate with the updated tender data
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error updating tender:", error);
      alert("Failed to update tender.");
    }
  };

  if (!isOpen) return null; // Don't render if the modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-lg z-10 p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Edit Tender</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category:
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Office Of:
            </label>
            <input
              type="text"
              name="officeOf"
              value={formData.officeOf}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tender Notification:
            </label>
            <input
              type="text"
              name="tenderNotification"
              value={formData.tenderNotification}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 p-2 h-24 resize-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Corrigendum (optional):
            </label>
            <input
              type="text"
              name="corrigendum"
              value={formData.corrigendum}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Closing Date:
            </label>
            <input
              type="date"
              name="closingDate"
              value={formData.closingDate}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 p-2"
            />
          </div>

          {/* Radio Buttons for viewStatus */}
          <div className="mb-4">
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
          <div className="mb-4">
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

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Update Tender
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
