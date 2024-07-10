import React from "react";
import Link from "next/link";

const FooterLinks = () => {
  // Sample JSON data for footer links
  const footerLinks = [
    {
      id: 1,
      imageUrl: "/images/objectives-icon.png",
      text: "Objectives",
      link: "/objectives",
    },
    // {
    //   id: 2,
    //   imageUrl: "/images/vision-mission-icon.png",
    //   text: "Vision & Mission",
    //   link: "/missions",
    // },
    {
      id: 3,
      imageUrl: "/images/board-of-directors-icon.png",
      text: "Board Of Directors",
      link: "/directors",
    },
    {
      id: 4,
      imageUrl: "/images/equity-holding-icon.png",
      text: "Equity Holding",
      link: "/equityholding",
    },
    {
      id: 5,
      imageUrl: "/images/organization-structure-icon.png",
      text: "Organization Structure",
      link: "/organizationStructure",
    },
  ];

  return (
    <div className="pageWidth">
      {/* <div className=" max-w-7xl mx-auto above-footer translate-y-6">
        <ul className="flex flex-wrap justify-between bg-indigo-200 px-4 py-2 space-x-4">
          {footerLinks.map((link) => (
            <li key={link.id} className="mb-2">
              <Link href={link.link}>
                <div className="flex items-center space-x-2">
                  <Image
                    src={link.imageUrl}
                    alt={link.text}
                    className="w-6 h-6"
                  />
                  <span className="text-blue-800">{link.text}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div> */}

      <div className="justify-between py-8 bg-gray-200">
        <div className="max-w-7xl mx-auto flex flex-row justify-between">
          <div className="contact-info ">
            <p className="mb-2 font-bold">CONTACT US</p>
            <p>3rd Floor, Vidyut Soudha,</p>
            <p>Gunadala, Vijayawada – 520 004,</p>
            <p>Krishna District, Andhra Pradesh, India.</p>
            <p>APSPCL Correspondence Address:</p>
            <p>Flat No. 401 & 402, Garuda Enclave,</p>
            <p>Tadepalle - 522 501, Guntur District, Andhra Pradesh, India.</p>
          </div>
          {/* <div className="contact-info ">
            <p className="mb-2 font-bold">CONTACT US</p>
            <p>3rd Floor, Vidyut Soudha,</p>
            <p>Gunadala, Vijayawada – 520 004,</p>
            <p>Krishna District, Andhra Pradesh, India.</p>
            <p>APSPCL Correspondence Address:</p>
            <p>Flat No. 401 & 402, Garuda Enclave,</p>
            <p>Tadepalle - 522 501, Guntur District, Andhra Pradesh, India.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
