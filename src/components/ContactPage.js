"use client";
import { useState } from "react";

// Office data in JSON format
const officeData = [
  {
    id: "ananthapuramu",
    name: "Ananthapuramu Ultra Mega Solar Park (1500 MW) Site Office",
    addresses: [
      {
        title: "Main Office",
        body: "Andhra Pradesh Solar Power Corporation Pvt Ltd,\nAPSPDCL Office Complex,\nAnanthapuramu Road, Near R&B Bungalow,\nKadiri - 515 591, Ananthapuramu Dist.\nAndhra Pradesh",
      },
      {
        title: "Main Office",
        body: "Andhra Pradesh Solar Power Corporation Pvt Ltd,\nAPSPDCL Office Complex,\nAnanthapuramu Road, Near R&B Bungalow,\nKadiri - 515 591, Ananthapuramu Dist.\nAndhra Pradesh",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30953.783942034097!2d78.14440259391127!3d14.122979566903146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3cef4f144ae5d%3A0x358dec2a622ff177!2sKadiri%2C+Andhra+Pradesh+515591!5e0!3m2!1sen!2sin!4v1474281688716",
    contacts: [
      {
        name: "Sri M. Siva Sankara Naidu",
        designation: "Dy. Executive Engineer/Civil",
        phone: "9966781745",
        email: "mss.naidu@ap.gov.in",
      },
      {
        name: "Sri G. Krishna Kishore",
        designation: "Dy. Executive Engineer/Electrical",
        phone: "9493121628",
        email: "krishna.gk@ap.gov.in",
      },
    ],
  },
  {
    id: "kurnool",
    name: "Kurnool Ultra Mega Solar Park (1000 MW) Site Office",
    addresses: [
      {
        title: "Main Office",
        body: "Andhra Pradesh Solar Power Corporation Pvt Ltd,\nBeside Pooling Substation-2, Sakunala Village,\nOrvakal Mandal\nKurnool -518 010",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1919.5492557496575!2d78.03370065796452!3d15.798758797262158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5ddc2f999a04b%3A0x7034d3e8cd52e881!2sVivek+Nagar%2C+Sri+Venkateshwara+Nagar%2C+Kallur%2C+Kurnool%2C+Andhra+Pradesh+518002!5e0!3m2!1sen!2sin!4v1474281215493",
    contacts: [
      {
        name: "Sri A. Nagaraju",
        designation: "Dy. Executive Engineer/Electrical",
        phone: "6281941042",
        email: "",
      },
    ],
  },
  // Add more office data as needed
];

// OfficeContact component
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

// Page component
export default function ContactPage() {
  return <OfficeContact officeData={officeData} />;
}
