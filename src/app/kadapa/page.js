import React from 'react';

const data = {
  "title": "KADAPA ULTRA MEGA SOLAR PARK (1000 MW)",
  "projectDetails": [
    { "agency": "SECI", "description": "750 MW under VGF Scheme. For 500 MW (Open) + 150 MW (DCR) NIT issued on 30.06.2016. For 100 MW (with storage) NIT issued on 21.07.2016. SECI has to issue NIT for tariff based bidding for selection of solar power developers." },
    { "agency": "NTPC", "description": "250 MW under Bundling Scheme. NIT issued on 26.10.2016." }
  ],
  "plotPlan": {
    "title": "Plot Plan",
    "links": [
      { "id": "pdf-drawing", "href": "/uploads/solarparks/22273516.pdf", "text": "PDF Drawing" },
      { "id": "autocad-drawing", "href": "uploads/solarparks/35560684.dwg", "text": "Autocad Drawing -750 MW" }
    ]
  },
  "evacuationPlan": {
    "title": "Evacuation",
    "links": [
      { "id": "internal-evacuation", "href": "/uploads/solarparks/38707386.pdf", "text": "Internal Evacuation Plan" },
      { "id": "external-evacuation", "href": "/uploads/solarparks/31871448.pdf", "text": "External Evacuation Plan" }
    ]
  },
  "landDetails": {
    "title": "Land Details for Kadapa Ultra Mega Solar Park",
    "headers": ["S.NO.", "Name of the Village", "Govt. Land", "Assigned Land", "Patta Land", "Total"],
    "rows": [
      { "sno": 1, "village": "Thalamanchi Patnam", "govt": "852.87 Acres", "assigned": "20.50 Acres", "patta": "46.08 Acres", "total": "919.45 Acres" },
      { "sno": 2, "village": "Ramachandraya Palli", "govt": "822.91 Acres", "assigned": "107.58 Acres", "patta": "32.80 Acres", "total": "963.29 Acres" }
    ],
    "total": ["", "", "5421.89 Acres", "338.92", "182.69", "5943.50"],
    "summary": "Total extent of land available for Kadapa Ultra Mega Solar Park at Mylavaram Mandals: 5943.50 Acres"
  },
  "bidderInformation": {
    "title": "INFORMATION TO BIDDERS",
    "headers": ["SL.NO.", "DESCRIPTION", "LINK"],
    "rows": [
      { "sno": 1, "desc": "Implementation And Support Agreement For 250 MW Grid Connected", "link": "https://apspcl.ap.gov.in/api/uploads/informationtobidder/information_35179632.docx", "text": "ISA For Kadapa- 250 MW.Docx" },
      { "sno": 2, "desc": "Land Lease Agreement For 250 MW Grid Connected", "link": "https://apspcl.ap.gov.in/api/uploads/informationtobidder/information_31047188.docx", "text": "LLA For Kadapa- 250 MW.Docx" }
    ]
  }
};

const KadapaSolarPark = () => {
  return (
    <div id="kadapa-solar-park">
      <header id="title">
        <h1>{data.title}</h1>
      </header>

      <div id="project-details">
        {data.projectDetails.map((detail, index) => (
          <p key={index}>
            <b>{detail.agency}:</b> {detail.description}
          </p>
        ))}
      </div>

      <PlotPlan />
      <EvacuationPlan />
      <LandDetails />
      <BidderInformation />
    </div>
  );
};

const PlotPlan = () => (
  <div id="plot-plan">
    <h2>{data.plotPlan.title}</h2>
    <div>
      {data.plotPlan.links.map((link, index) => (
        <a key={index} id={link.id} href={link.href}>{link.text}</a>
      ))}
    </div>
  </div>
);

const EvacuationPlan = () => (
  <div id="evacuation-plan">
    <h2>{data.evacuationPlan.title}</h2>
    <div>
      {data.evacuationPlan.links.map((link, index) => (
        <a key={index} id={link.id} href={link.href}>{link.text}</a>
      ))}
    </div>
  </div>
);

const LandDetails = () => (
  <div id="land-details">
    <h2>{data.landDetails.title}</h2>
    <div>
      <table id="land-table">
        <thead>
          <tr>
            {data.landDetails.headers.map((header, index) => (
              <td key={index}>{header}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.landDetails.rows.map((row, index) => (
            <LandRow key={index} {...row} />
          ))}
          <tr>
            {data.landDetails.total.map((total, index) => (
              <td key={index}>{total}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <p>{data.landDetails.summary}</p>
    </div>
  </div>
);

const LandRow = ({ sno, village, govt, assigned, patta, total }) => (
  <tr>
    <td>{sno}</td>
    <td>{village}</td>
    <td>{govt}</td>
    <td>{assigned}</td>
    <td>{patta}</td>
    <td>{total}</td>
  </tr>
);

const BidderInformation = () => (
  <div id="bidder-information">
    <h2>{data.bidderInformation.title}</h2>
    <div>
      <table id="bidding-table">
        <thead>
          <tr>
            {data.bidderInformation.headers.map((header, index) => (
              <td key={index}>{header}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.bidderInformation.rows.map((row, index) => (
            <BidderRow key={index} {...row} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const BidderRow = ({ sno, desc, link, text }) => (
  <tr>
    <td>{sno}</td>
    <td>{desc}</td>
    <td><a href={link} target="_blank" rel="noopener noreferrer">{text}</a></td>
  </tr>
);

export default KadapaSolarPark;
