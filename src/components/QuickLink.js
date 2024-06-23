import React from "react";

// Define Quick Links data in JSON format
const quickLinksData = {
  quickLinks: [
    { text: "SECI", url: "http://seci.gov.in/content/" },
    { text: "MNRE", url: "http://www.mnre.gov.in/" },
    { text: "APERC", url: "http://www.aperc.gov.in/" },
    { text: "CERC", url: "http://www.cercind.gov.in/" },
    { text: "CEA", url: "http://cea.nic.in/" },
    { text: "IREDA", url: "http://www.ireda.gov.in/" },
    { text: "SESI", url: "http://www.sesi.in/" },
    { text: "NISE", url: "http://www.mnre.gov.in/centers/about-sec-2" },
    {
      text: "APGENCO",
      url: "http://www.apgenco.gov.in/home.do;jsessionid=55915604278CEDC201A5EF95C36A1575",
    },
    { text: "APTRANSCO", url: "http://www.aptransco.gov.in/transco/" },
    { text: "APSPDCL", url: "https://www.apspdcl.in/" },
    { text: "APEPDCL", url: "https://www.apeasternpower.com/" },
    { text: "NREDCAP", url: "http://nredcap.in/" },
    { text: "NTPC", url: "http://www.ntpc.co.in" },
  ],
};

const QuickLink = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:justify-between md:gap-0">
      {/* First Column */}
      <div className="p-4 bg-gray-100 rounded-lg">
        <div className="moreLinks">
          <div className="q-links">
            <h3 className="text-xl font-bold mb-4 tex-left">Quick Links</h3>
            <ul
              className="text-sm nice-scroll overflow-y-auto max-h-72 outline-none"
              tabIndex="0"
            >
              {quickLinksData.quickLinks.map((link, index) => (
                <li key={index} className="py-1">
                  <a
                    href={link.url}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="  p-4">
        <img
          src="https://www.apspcl.ap.gov.in/public/templates/apspclcms/images/andhra-pradesh.png"
          alt="Andhra Pradesh Logo"
          className="mx-auto rounded-lg shadow-md"
        />
      </div>

      {/* Third Column */}
      <div className=" p-4 bg-gray-100 rounded-lg">
        <div className="flex flex-row justify-between">
          <h3 className="text-xl font-bold mb-4 text-left">News & Events</h3>

          <a href="https://www.apspcl.ap.gov.in/news" className="btn Btn_news ">
            View All <i className="ti-angle-right ml-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickLink;
