"use client";
import { useState } from "react";

export default function CreateOffice() {
  const [formData, setFormData] = useState({
    id: "administrativeoffice", // default value
    name: "",
    addresses: [{ title: "", body: "" }],
    mapUrl: "",
    contacts: [{ name: "", designation: "", phone: "", email: "" }],
  });

  const handleChange = (e, index = null, type = null) => {
    const { name, value } = e.target;

    if (type === "address") {
      const updatedAddresses = [...formData.addresses];
      updatedAddresses[index][name] = value;
      setFormData({ ...formData, addresses: updatedAddresses });
    } else if (type === "contact") {
      const updatedContacts = [...formData.contacts];
      updatedContacts[index][name] = value;
      setFormData({ ...formData, contacts: updatedContacts });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddAddress = () => {
    setFormData({
      ...formData,
      addresses: [...formData.addresses, { title: "", body: "" }],
    });
  };

  const handleAddContact = () => {
    setFormData({
      ...formData,
      contacts: [
        ...formData.contacts,
        { name: "", designation: "", phone: "", email: "" },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://apspclbackend.onrender.com/api/offices",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Office created successfully");
      } else {
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("An error occurred while creating the office");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Create New Office</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Dropdown for Office ID */}
        <div>
          <label className="block text-gray-700">Office ID</label>
          <select
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          >
            <option value="administrativeoffice">Administrative Office</option>
            <option value="kadapa">Kadapa</option>
            <option value="ananthapuramu">Ananthapuramu</option>
            <option value="corporateoffice">Corporate Office</option>
            <option value="kurnool">Kurnool</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700">Office Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Map URL</label>
          <input
            type="text"
            name="mapUrl"
            value={formData.mapUrl}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <h3 className="font-bold">Addresses</h3>
          {formData.addresses.map((address, index) => (
            <div key={index} className="space-y-2">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={address.title}
                onChange={(e) => handleChange(e, index, "address")}
                className="border p-2 w-full"
              />
              <textarea
                name="body"
                placeholder="Address body"
                value={address.body}
                onChange={(e) => handleChange(e, index, "address")}
                className="border p-2 w-full"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddAddress}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Address
          </button>
        </div>

        <div>
          <h3 className="font-bold">Contacts</h3>
          {formData.contacts.map((contact, index) => (
            <div key={index} className="space-y-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={contact.name}
                onChange={(e) => handleChange(e, index, "contact")}
                className="border p-2 w-full"
              />
              <input
                type="text"
                name="designation"
                placeholder="Designation"
                value={contact.designation}
                onChange={(e) => handleChange(e, index, "contact")}
                className="border p-2 w-full"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={contact.phone}
                onChange={(e) => handleChange(e, index, "contact")}
                className="border p-2 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={contact.email}
                onChange={(e) => handleChange(e, index, "contact")}
                className="border p-2 w-full"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddContact}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Contact
          </button>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Create Office
        </button>
      </form>
    </div>
  );
}
