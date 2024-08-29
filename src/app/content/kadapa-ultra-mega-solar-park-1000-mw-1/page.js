import Header from "@/components/Header1";
import Navbar from "@/components/Navbar";
import ImageSlider from "@/components/ImageSlider";
import QuickLink from "@/components/QuickLink";
import QuickLink2 from "@/components/QuickLink2";
import Image from "next/image";
import AboutApspcl from "@/components/AboutApspcl";
import Carousel from "@/components/Carousel";
import FooterLinks from "@/components/FooterLinks";
import People from "@/components/People";
import About from "@/components/About";
import Scope from "@/components/Content/Scope/Scope";
import Objectives from "@/components/Objectives/Objectives";
import Ananthapuramu from "@/components/Content/Ananthapuramu";
import Link from "next/link";

export default function Home() {
  const data = {
    title: "INFORMATION TO BIDDERS",
    columns: ["SL.NO.", "DESCRIPTION", "LINK"],
    rows: [
      {
        sl_no: 1,
        description:
          "Implementation And Support Agreement For 250 MW Grid Connected",
        link_text: "ISA For Kadapa- 250 MW.Docx",
        link_url:
          "https://apspcl.ap.gov.in/uploads/informationtobidder/information_35179632.docx",
      },
      {
        sl_no: 2,
        description: "Land Lease Agreement For 250 MW Grid Connected",
        link_text: "LLA For Kadapa- 250 MW.Docx",
        link_url:
          "https://apspcl.ap.gov.in/uploads/informationtobidder/information_31047188.docx",
      },
      {
        sl_no: 3,
        description: "Geological Report",
        link_text: "Geological Report.pdf",
        link_url:
          "https://apspcl.ap.gov.in/uploads/informationtobidder/information_64805772.pdf",
      },
      {
        sl_no: 4,
        description:
          "Draft Implementation and Support Agreement for 750 MW Grid Connected Solar Photo Voltaic Power Project at Kadapa Ultra Mega Solar Park (1000 MW)",
        link_text: "Draft ISA for Kadapa 750 MW",
        link_url:
          "https://apspcl.ap.gov.in/uploads/informationtobidder/information_26362255.docx",
      },
      {
        sl_no: 5,
        description:
          "Land Lease Agreement for 750 MW Grid Connected Solar Photo Voltaic Power Project at Kadapa Ultra Mega Solar Park (1000 MW)",
        link_text: "Draft LLA for Kadapa 750 MW",
        link_url:
          "https://apspcl.ap.gov.in/uploads/informationtobidder/information_61678799.docx",
      },
    ],
  };

  const data2 = {
    title: "Land Details for Kadapa Ultra Mega Solar Park",
    columns: [
      "S.NO.",
      "Name of the Village",
      "Govt. Land",
      "Assigned Land",
      "Patta Land",
      "Total",
    ],
    rows: [
      {
        s_no: 1,
        village: "Thalamanchi Patnam",
        govt_land: "852.87 Acres",
        assigned_land: "20.50 Acres",
        patta_land: "46.08 Acres",
        total: "919.45 Acres",
      },
      {
        s_no: 2,
        village: "Ramachandraya Palli",
        govt_land: "822.91 Acres",
        assigned_land: "107.58 Acres",
        patta_land: "32.80 Acres",
        total: "963.29 Acres",
      },
      {
        s_no: 3,
        village: "Dhodium",
        govt_land: "2260.14 Acres",
        assigned_land: "193.80 Acres",
        patta_land: "103.81 Acres",
        total: "2557.75 Acres",
      },
      {
        s_no: 4,
        village: "Vaddirala",
        govt_land: "286.79 Acres",
        assigned_land: "7.50 Acres",
        patta_land: "-",
        total: "294.29 Acres",
      },
      {
        s_no: 5,
        village: "Ponnam Pally",
        govt_land: "469.29 Acres",
        assigned_land: "-",
        patta_land: "-",
        total: "469.29 Acres",
      },
      {
        s_no: 6,
        village: "Kona Ananthapuram",
        govt_land: "729.89 Acres",
        assigned_land: "9.54 Acres",
        patta_land: "-",
        total: "739.43 Acres",
      },
    ],
    total_extent:
      "Total extent of land available for Kadapa Ultra Mega Solar Park at Mylavaram Mandals: 5943.50 Acres",
  };

  return (
    <div className="relative">
      <div className="relative z-50">
        <Header />
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto p-4">
          <header className="mb-8">
            <h1 className="text-4xl font-bold">
              KADAPA ULTRA MEGA SOLAR PARK (1000 MW)
            </h1>
          </header>
          <div className="max-w-7xl">
            <div className="max-w-7xl mx-auto border-t border-black/40 ">
              <div className="container mx-auto p-4">
                <header className="mb-8"></header>
                <div className="max-w-7xl">
                  <div className="mb-8">
                    <p className="mb-4 text-lg">
                      <b>SECI:</b> 750 MW under VGF Scheme. <br />
                      For 500 MW (Open) + 150 MW (DCR) NIT issued on 30.06.2016.
                      <br />
                      For 100 MW (with storage) NIT issued on 21.07.2016.
                      <br />
                      SECI has to issue NIT for tariff based bidding for
                      selection of solar power developers.
                    </p>
                    <p className="mb-4 text-lg">
                      <b>NTPC:</b>250 MW under Bundling Scheme. <br />
                      NIT issued on 26.10.2016
                    </p>
                    <p className="mb-4 text-lg">
                      <b>Bid Opening Date: </b> 09.12.2016.
                    </p>
                    <p className="mb-4 text-lg">
                      <b>Reverse auction conducted on </b> 11.04.2017.
                    </p>
                    <p className="mb-4 text-lg">
                      <b>Lowest levellised tariff quoted by the bidders:</b> Rs.
                      3.15 per kWh.
                    </p>
                    <p className="mb-4 text-lg">
                      NTPC has signed PSA with APDISCOMs on 11.12.2017. LOI is
                      to be issued to selected SPD by NTPC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-4">Plot Plan</h2>
              <div className="flex gap-4">
                <Link
                  href="/uploads/solarparks/22273516.pdf"
                  className="px-4 py-2 text-lg bg-blue-500 text-white rounded-md hover:font-semibold hover:rounded-lg hover:bg-blue-700 transition-all duration-150 ease-in"
                >
                  PDF Drawing
                </Link>
                <Link
                  href="uploads/solarparks/35560684.dwg"
                  className="px-4 py-2 text-lg bg-blue-500 text-white rounded-md hover:font-semibold hover:rounded-lg hover:bg-blue-700 transition-all duration-150 ease-in"
                >
                  Autocad Drawing -750 MW
                </Link>
              </div>
              <br /> <br />
              <h2 className="text-3xl font-semibold mb-4">Evacuation</h2>
              <div className="flex gap-4">
                <Link
                  href="/uploads/solarparks/38707386.pdf"
                  className="px-4 py-2 text-lg bg-blue-500 text-white rounded-md hover:font-semibold hover:rounded-lg hover:bg-blue-700 transition-all duration-150 ease-in"
                >
                  Internal Evacuation Plan
                </Link>
                <Link
                  href="/uploads/solarparks/31871448.pdf"
                  className="px-4 py-2 text-lg bg-blue-500 text-white rounded-md hover:font-semibold hover:rounded-lg hover:bg-blue-700 transition-all duration-150 ease-in"
                >
                  External Evacuation Plan
                </Link>
              </div>
              <br /> <br />
              <div className="max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto p-4">
                  <div className="max-w-7xl">
                    <div className="mb-8">
                      <div>
                        <h2 className="text-3xl font-semibold mb-4">
                          {data2.title}
                        </h2>
                        <div>
                          <table className="table-auto text-lg w-full">
                            <thead className="bg-gray-100 py-2">
                              <tr className="font-bold py-4">
                                {data2.columns.map((column, index) => (
                                  <td
                                    key={index}
                                    className="py-2 px-3 border-t border-b border-black/10"
                                  >
                                    {column}
                                  </td>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {data2.rows.map((row, index) => (
                                <tr key={index} className="py-2">
                                  <td className="py-2 px-3 border-t border-b border-black/10">
                                    {row.s_no}
                                  </td>
                                  <td className="py-2 px-3 border-t border-b border-black/10">
                                    {row.village}
                                  </td>
                                  <td className="py-2 px-3 border-t border-b border-black/10">
                                    {row.govt_land}
                                  </td>
                                  <td className="py-2 px-3 border-t border-b border-black/10">
                                    {row.assigned_land}
                                  </td>
                                  <td className="py-2 px-3 border-t border-b border-black/10">
                                    {row.patta_land}
                                  </td>
                                  <td className="py-2 px-3 font-semibold border-t border-b border-black/10">
                                    {row.total}
                                  </td>
                                </tr>
                              ))}
                              <tr>
                                <td  className="py-2 font-semibold px-3 border-t border-b border-black/10"></td>
                                <td  className="py-2 font-semibold px-3 border-t border-b border-black/10"></td>
                                <td  className="py-2 font-semibold px-3 border-t border-b border-black/10">5421.89 Acres </td>
                                <td  className="py-2 font-semibold px-3 border-t border-b border-black/10">338.92</td>
                                <td  className="py-2 font-semibold px-3 border-t border-b border-black/10">182.69</td>
                                <td  className="py-2 font-semibold px-3 border-t border-b border-black/10">5943.50</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="mt-4 text-xl font-bold">
                            {data2.total_extent}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br /> <br />
              <div>
                <h2 className="text-3xl font-semibold mb-4">{data.title}</h2>
                <div>
                  <table className="table-auto text-lg w-full">
                    <thead className="bg-gray-100 py-2">
                      <tr className="font-bold py-4">
                        {data.columns.map((column, index) => (
                          <td
                            key={index}
                            className="py-2 px-3 border-t border-b border-black/10"
                          >
                            {column}
                          </td>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.rows.map((row, index) => (
                        <tr key={index} className="py-2">
                          <td className="py-2 px-3 border-t border-b border-black/10">
                            {row.sl_no}
                          </td>
                          <td className="py-2 px-3 border-t border-b border-black/10">
                            {row.description}
                          </td>
                          <td className="py-2 px-3 border-t border-b border-black/10">
                            <Link
                              href={row.link_url}
                              target="_blank"
                              className="text-blue-500"
                            >
                              {row.link_text}
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>

      <FooterLinks />
    </div>
  );
}
