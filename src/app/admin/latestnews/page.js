"use client";
import { useState, useEffect } from "react";

const NewsUploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [newsList, setNewsList] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editNews, setEditNews] = useState(null); // Holds the news item being edited

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await fetch("https://apspcl.ap.gov.in/api/news", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();
        setNewsList(data);
      } else {
        console.error("Failed to fetch news.");
      }
    } catch (error) {
      console.error("An error occurred while fetching news.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newsData = {
      title,
      description,
      link,
    };

    try {
      const res = await fetch("https://apspcl.ap.gov.in/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newsData),
      });

      if (res.ok) {
        setMessage("News uploaded successfully!");
        setTitle("");
        setDescription("");
        setLink("");
        fetchNews(); // Refresh the news list
      } else {
        setMessage("Failed to upload news.");
      }
    } catch (error) {
      setMessage("An error occurred while uploading news.");
    }

    setLoading(false);
  };

  const handleEditClick = (news) => {
    setEditNews(news); // Set the news item to be edited
    setIsEditModalOpen(true); // Open the edit modal
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `https://apspcl.ap.gov.in/api/news/${editNews._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: editNews.title,
            description: editNews.description,
            link: editNews.link,
          }),
        }
      );

      if (res.ok) {
        setMessage("News updated successfully!");
        setIsEditModalOpen(false);
        fetchNews(); // Refresh the news list after editing
      } else {
        setMessage("Failed to update news.");
      }
    } catch (error) {
      setMessage("An error occurred while updating news.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Upload Latest News</h2>
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
          {loading ? "Uploading..." : "Upload News"}
        </button>
      </form>

      {/* News list section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Latest News</h2>
        {newsList.length > 0 ? (
          <ul className="space-y-4">
            {newsList.map((news) => (
              <li key={news._id} className="border p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold">{news.title}</h3>
                <p className="text-sm text-gray-600">{news.description}</p>
                <a
                  href={news.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
                <button
                  className="text-yellow-500 hover:text-yellow-700 mt-2"
                  onClick={() => handleEditClick(news)}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No news available.</p>
        )}
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && editNews && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-semibold mb-4">Edit News</h2>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="editTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="editTitle"
                  className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
                  value={editNews.title}
                  onChange={(e) =>
                    setEditNews({ ...editNews, title: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="editDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="editDescription"
                  className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
                  rows="3"
                  value={editNews.description}
                  onChange={(e) =>
                    setEditNews({ ...editNews, description: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="editLink"
                  className="block text-sm font-medium text-gray-700"
                >
                  Link
                </label>
                <input
                  type="url"
                  id="editLink"
                  className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
                  value={editNews.link}
                  onChange={(e) =>
                    setEditNews({ ...editNews, link: e.target.value })
                  }
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsUploadForm;
