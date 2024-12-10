import React, { useState, useEffect } from "react";

const EditModal = ({ isOpen, onClose, goo, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: "",
    startYear: "",
    endYear: "",
    gooNumber: "",
    gooDate: "",
    issuedBy: "",
    link: "",
  });

  useEffect(() => {
    if (goo) {
      setFormData({
        title: goo.title || "",
        startYear: goo.startYear || "",
        endYear: goo.endYear || "",
        gooNumber: goo.gooNumber || "",
        gooDate: goo.gooDate
          ? new Date(goo.gooDate).toISOString().split("T")[0]
          : "",
        issuedBy: goo.issuedBy || "",
        link: goo.link || "",
      });
    }
  }, [goo]);

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
        `https://apspcl.ap.gov.in/api/goos/${goo._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update GOO");
      }

      const updatedGOO = await response.json();
      onUpdate(updatedGOO); // Call onUpdate with the updated GOO data
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error updating GOO:", error);
      alert("Failed to update GOO.");
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
        <h2 className="text-xl font-semibold mb-4">Edit GOO</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Start Year:
            </label>
            <input
              type="number"
              name="startYear"
              value={formData.startYear}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              End Year (optional):
            </label>
            <input
              type="number"
              name="endYear"
              value={formData.endYear}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              GOO Number:
            </label>
            <input
              type="text"
              name="gooNumber"
              value={formData.gooNumber}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              GOO Date:
            </label>
            <input
              type="date"
              name="gooDate"
              value={formData.gooDate}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Issued By:
            </label>
            <input
              type="text"
              name="issuedBy"
              value={formData.issuedBy}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Link (optional):
            </label>
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 p-2"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Update GOO
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
