"use client";
import { useState } from "react";

// Office data in JSON format
const officeData = [
  {
    id: "corporateoffice",
    name: "CORPORATE OFFICE",
    addresses: [
      {
        title: "APSPCL Corporate Office :",
        body: "Andhra Pradesh Solar Power Corporation Pvt. Ltd 3rd Floor, Vidyut Soudha, Gunadala, Vijayawada – 520 004, Krishna District, Andhra Pradesh, India,",
      },
      {
        title: "APSPCL Correspondence Address:",
        body: "Flat No. 401 & 402, Garuda Enclave, Tadepalle - 522 501, Guntur District, Andhra Pradesh, India",
      },
      {
        title: "Contact Details",
        body: "08645-274040, 08645-274041 & 08645-274042",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.069460453856!2d80.67160225002333!3d16.522590588546368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e5290438840d%3A0xde358569a13d6c72!2sAPTRANSCO%20%26%20APGENCO%20%2C%20Vidyut%20Soudha%2C%20Vijayawada!5e0!3m2!1sen!2sin!4v1574745994620!5m2!1sen!2sin",
    contacts: [
      // {
      //   name: "Sri M. Siva Sankara Naidu",
      //   designation: "Dy. Executive Engineer/Civil",
      //   phone: "9966781745",
      //   email: "mss.naidu@ap.gov.in",
      // },
      // {
      //   name: "Sri G. Krishna Kishore",
      //   designation: "Dy. Executive Engineer/Electrical",
      //   phone: "9493121628",
      //   email: "krishna.gk@ap.gov.in",
      // },
    ],
  },
  {
    id: "ananthapuramu",
    name: "Ananthapuramu Ultra Mega Solar Park (1500 MW) Site Office",
    addresses: [
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
  {
    id: "kadapa",
    name: "KADAPA ULTRA MEGA SOLAR PARK (1000 MW)",
    addresses: [
      {
        title: "Kadapa Ultra Mega  Solar Park (1000 MW ) Site Office :",
        body: "H.No. 1/74, Brindavan colony, Opposite to RTC Busstand, Jamallamadugu -516434, Kadapa Dist, Andhra Pradesh.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d681.7770331830418!2d78.38624055573918!3d14.841339865472078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb471578780326d%3A0x27278b537927db46!2sJammalamadugu+Bus+Station!5e0!3m2!1sen!2sin!4v1487309945670",
    contacts: [
      {
        name: "	Sri K. Vijay Kumar Reddy",
        designation: "Dy. Executive Engineer/Electrical",
        phone: "9493195432",
        email: "vijay.kovvuru@ap.gov.in",
      },
      {
        name: "  Sri R. Anjaneyulu",
        designation: "Dy. Executive Engineer",
        phone: " 9493175617",
        email: "anjaneyulu.rangana@ap.gov.in",
      },
    ],
  },
  {
    id: "ananthapuramu2",
    name: "Ananthapuramu -II Ultra Mega Solar Park (1500 MW) Site Office.",
    addresses: [
      {
        title: "Ananthapuramu -II Ultra Mega Solar Park (1500 MW) Site Office.",
        body: "Andhra Pradesh Solar Power Corporation Pvt Ltd, Talari cheruvu village, Tadipatri Mandal, Ananthapuramu Dist, Andhra Pradesh.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d586269.6928318567!2d77.63675960587891!3d15.130825419754117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb4373fc210ef45%3A0xbd9249b3b3e736e3!2sTadipatri+Rd%2C+Andhra+Pradesh%2C+India!5e0!3m2!1sen!2sin!4v1487163402614",
    contacts: [
      {
        name: "	 Smt. C. Surekha",
        designation: " Dy. Executive Engineer/Electrical",
        phone: "9493120179",
        email: "surekha.challa@ap.gov.in",
      },
      {
        name: "  Sri R. Anjaneyulu",
        designation: "Dy. Executive Engineer/Civil",
        phone: " 9493175617",
        email: "anjaneyulu.rangana@ap.gov.in",
      },
    ],
  },
  {
    id: "administrativeoffice",
    name: "Administrative Office",
    addresses: [
      {
        title: "Ananthapuramu -II Ultra Mega Solar Park (1500 MW) Site Office.",
        body: "Andhra Pradesh Solar Power Corporation Pvt. Ltd Flat No. 401 & 402, 4th Floor, Garuda Enclave, Beside TG Plaza, Tadepalli (Village), Guntur District-522501, Andhra Pradesh, India",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.861214072822!2d80.6187827!3d16.4825637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f06e8757da59%3A0x255896a02ab06f44!2sTG%20Plaza!5e0!3m2!1sen!2sin!4v1574745755417!5m2!1sen!2sin",
    contacts: [
      {
        name: "Sri K. Vijayanand, IAS",
        designation: "Special Chief Secretary to Government, Energy Department & Chairman/APSPCL",
        phone: "08645-274040/41",
        email: "md.apspcl@ap.gov.in",
      },
      {
        name: "Dr. M. Kamalakar Babu, M.Sc., B.L., Ph.d.",
        designation: "Managing Director & Chief Executive Officer",
        phone: "08645-274040/41",
        email: "md.apspcl@ap.gov.in & md.apspcl@gmail.com",
      },
      {
        name: "Sri V.V. Hanumantha Rao",
        designation: "Chief Financial Officer",
        phone: "08645-274041-Extn:200",
        email: "apspcl2014@gmail.com",
      },
      {
        name: "Sri B.N. Prabhakar",
        designation: "Executive Engineer/Tech",
        phone: "08645-274041-Extn:300",
        email: "eetech.apspcl@gmail.com",
      },
      {
        name: "Sri J.V. Satyanarayana",
        designation: "Executive Engineer/Civil",
        phone: "08645-274041-Extn:400",
        email: "eecivil.apspcl@gmail.com",
      },
      {
        name: "Smt. C. Surekha",
        designation: "Dy. Executive Engineer/Electrical",
        phone: "9493120179",
        email: "surekha.challa@ap.gov.in",
      },
      {
        name: "Sri R. Anjaneyulu",
        designation: "Dy. Executive Engineer/Civil",
        phone: "9493175617",
        email: "anjaneyulu.rangana@ap.gov.in",
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
