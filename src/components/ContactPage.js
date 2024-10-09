"use client"; // Ensure this is at the top for client-side rendering
import { useState, useEffect } from "react";
// import OfficeContact from "./OfficeContact"; // Adjust the import path as necessary

const OfficeContact = ({ officeData }) => {
  const [activeTab, setActiveTab] = useState(officeData[0].id);

  return (
    <div className="container mx-auto p-4">
      {/* Dropdown Menu */}
      <div className="mb-4">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700"
        >
          {officeData.map((office) => (
            <option key={office.id} value={office.id}>
              {office.name}
            </option>
          ))}
        </select>
      </div>

      {/* Office Content */}
      {officeData.map((office) => (
        <div
          key={office.id}
          className={activeTab === office.id ? "block" : "hidden"}
        >
          <h1 className="text-2xl font-bold mb-6">{office.name}</h1>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Address Information */}
            <div className="md:w-1/2 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Address</h2>
              {office.addresses.map((address, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-md font-semibold">{address.title}</h3>
                  <p className="whitespace-pre-line">{address.body}</p>
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="md:w-1/2">
              <iframe
                src={office.mapUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg h-full"
              ></iframe>
            </div>
          </div>

          {/* Contact Details Table */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Details:</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2 text-left">S.NO.</th>
                    <th className="border p-2 text-left">NAME</th>
                    <th className="border p-2 text-left">DESIGNATION</th>
                    <th className="border p-2 text-left">CONTACT NUMBER</th>
                    <th className="border p-2 text-left">EMAIL ID</th>
                  </tr>
                </thead>
                <tbody>
                  {office.contacts.map((contact, index) => (
                    <tr key={index}>
                      <td className="border p-2">{index + 1}</td>
                      <td className="border p-2">{contact.name}</td>
                      <td className="border p-2">{contact.designation}</td>
                      <td className="border p-2">{contact.phone}</td>
                      <td className="border p-2">{contact.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default function ContactPage() {
  const [officeData, setOfficeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOfficeData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/offices"); // Adjust URL based on your API
        if (!response.ok) {
          throw new Error("Failed to fetch office data");
        }
        const data = await response.json();
        setOfficeData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOfficeData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <OfficeContact officeData={officeData} />;
}
