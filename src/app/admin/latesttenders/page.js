"use client";
import { useState } from "react";

const TendersUploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const tendersData = {
      title,
      description,
      link,
    };

    try {
      const res = await fetch("https://apspcl.ap.gov.in/api/latest/tenders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tendersData),
      });

      if (res.ok) {
        setMessage("Tenders uploaded successfully!");
        setTitle("");
        setDescription("");
        setLink("");
      } else {
        setMessage("Failed to upload tenders.");
      }
    } catch (error) {
      setMessage("An error occurred while uploading tenders.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Upload Latest Tenders</h2>
      {message && <p className="text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="link"
            className="block text-sm font-medium text-gray-700"
          >
            Link
          </label>
          <input
            type="url"
            id="link"
            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Tenders"}
        </button>
      </form>
    </div>
  );
};

export default TendersUploadForm;
