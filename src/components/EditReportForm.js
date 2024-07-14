import React, { useState, useEffect } from "react";

const EditReportForm = ({ report, onSave, onCancel }) => {
  const [type, setType] = useState("");
  const [reportname, setReportname] = useState("");
  const [title, setTitle] = useState("");
  const [filepath, setFilepath] = useState("");

  // Update state when the report prop changes
  useEffect(() => {
    if (report) {
      setType(report.type || "");
      setReportname(report.reportname || "");
      setTitle(report.title || "");
      setFilepath(report.filepath || "");
    }
  }, [report]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!type || !reportname || !title) {
      alert("All fields are required.");
      return;
    }

    onSave({ ...report, type, reportname, title, filepath });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Report Name</label>
        <input
          type="text"
          value={reportname}
          onChange={(e) => setReportname(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">File Path</label>
        <input
          type="text"
          value={filepath}
          onChange={(e) => setFilepath(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="mr-2 px-4 py-2 bg-gray-500 text-white rounded shadow hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditReportForm;
