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
          "Land Lease Agreement for Grid Connected Solar Photo Voltaic Projects Under Batch-II Tranche-I",
        link_text: "1441454536400_Modified LLA,5.9.15 (1).docx",
        link_url:
          "https://apspcl.ap.gov.in/api/uploads/informationtobidder/information_22173161.docx",
      },
      {
        sl_no: 2,
        description:
          "Revised Charges Payable by SPDs for Kurnool Ultra Mega Solar Park (1000 MW)",
        link_text: "Revised charges, dt.31.7.15.docx",
        link_url:
          "https://apspcl.ap.gov.in/api/uploads/informationtobidder/information_13397875.docx",
      },
      {
        sl_no: 3,
        description: "Modified Implementation & Support Agreement",
        link_text: "Modified ISA.5.9.15.docx",
        link_url:
          "https://apspcl.ap.gov.in/api/uploads/informationtobidder/information_18225564.docx",
      },
      {
        sl_no: 4,
        description:
          "Local Area Development Charges For Kurnool Ultra Mega Solar Park (1000 MW)",
        link_text: "Local Area Development Charges.Pdf",
        link_url:
          "https://apspcl.ap.gov.in/api/uploads/informationtobidder/information_14257377.pdf",
      },
    ],
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
              KURNOOL ULTRA MEGA SOLAR PARK (1000 MW)
            </h1>
          </header>
          <div className="max-w-7xl">
            <div className="max-w-7xl mx-auto border-t border-black/40 pt-8">
              <div className="container mx-auto p-4">
                <header className="mb-8"></header>
                <div className="max-w-7xl">
                  <div className="mb-8">
                    <p className="mb-4 text-lg">
                      MNRE sanctioned this project to develop under state
                      specific bundling scheme and NTPC was chosen as
                      implementing agency for issuing tenders and selecting
                      solar power developers through competitive bidding
                      including reverse auction and supply power to APDISCOMs
                      under state specific bundling scheme.
                    </p>
                    <p className="mb-4 text-lg">
                      NTPC has issued NIT in April/May 2015 and selected the
                      following Solar Power Developers for establishment of
                      Solar Power Project.
                    </p>
                    <p className="mb-4 text-lg">
                      <b>Phase I (500 MW):</b> Reverse auction was done on
                      03.11.2015 and L1 is M/s Sun Edison at a tariff of Rs.
                      4.63 per kWh. Award placed on 09.01.2016 to M/s Sun Edison
                      at tariff of Rs 4.63 per unit.
                    </p>
                    <p className="mb-4 text-lg">
                      <b>Phase II (500 MW):</b> Reverse auction for 1x350 MW was
                      done on 14.12.2015 and for 3x50 MW (DCR) was done on
                      15.12.2015.
                    </p>
                    <p className="mb-4 text-lg">
                      <b>DCR </b> L1 for 2x50 (DCR): Azure Power at a tariff of
                      Rs. 5.12 per kWh and L2 for 1x50 MW (DCR): M/s Prayatna
                      Developers at a tariff of Rs. 5.13 per kWh.
                    </p>
                    <p className="mb-4 text-lg">
                      M/s SunEdison Energy India Pvt. Ltd. - 500 MW @ Rs. 4.63
                      per kWh <br />
                      M/s SBG Cleantech ProjectCo Pvt. Ltd. - 350 MW @ Rs. 4.63
                      per kWh <br />
                      M/s Azure Power India Ltd. - 100 MW @ Rs. 5.12 per kWh{" "}
                      <br />
                      M/s Prayatna Developers Pvt. Ltd. - 50 MW @ Rs. 5.13 per
                      kWh
                      <br />
                      All developers signed Implementation Support Agreement
                      (ISA) and Land Lease Agreement (LLA) on 05.09.2015.
                    </p>
                    <p className="mb-4 text-lg">
                      For Phase-II - 750 MW capacity is commissioned as on
                      31.12.2016. <br />
                      250 MW was commissioned as on 29.06.2017.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-4">Plot Plan</h2>
              <div className="flex gap-4">
                <Link
                  href="/uploads/solarparks/69967574.pdf"
                  className="px-4 py-2 text-lg bg-blue-500 text-white rounded-md hover:font-semibold hover:rounded-lg hover:bg-blue-700 transition-all duration-150 ease-in"
                >
                  PDF Drawing
                </Link>
                <Link
                  href="uploads/solarparks/59782394.dwg"
                  className="px-4 py-2 text-lg bg-blue-500 text-white rounded-md hover:font-semibold hover:rounded-lg hover:bg-blue-700 transition-all duration-150 ease-in"
                >
                  Autocad Drawing
                </Link>
                <Link
                  href="/uploads/solarparks/41027955.dwg"
                  className="px-4 py-2 text-lg bg-blue-500 text-white rounded-md hover:font-semibold hover:rounded-lg hover:bg-blue-700 transition-all duration-150 ease-in"
                >
                  Autocad Drawing-750 MW
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
