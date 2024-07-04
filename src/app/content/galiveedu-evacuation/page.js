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
  return (
    <div className="relative">
      <div className="relative z-50">
        <Header />
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* <Ananthapuramu /> */}
        <div className="max-w-7xl mx-auto p-4">
          <header className="mb-8">
            <h1 className="text-4xl font-bold ">N.P. KUNTA</h1>
          </header>
          <div className="max-w-7xl">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-4">Plot Plan</h2>
              <div className="flex gap-4">
                <Link
                  href="uploads/solarparks/35538490.pdf"
                  className="px-4 py-2 text-lg  bg-blue-500 text-white rounded-md hover:font-semibold  hover:rounded-lg hover:bg-blue-700 transition-all duration-150 ease-in"
                >
                  {" "}
                  PDF Drawing - 250 MW
                </Link>
                <Link
                  href="uploads/solarparks/56497593.dwg"
                  className="px-4 py-2 text-lg  bg-blue-500 text-white rounded-md hover:font-semibold  hover:rounded-lg hover:bg-blue-700 transition-all duration-150 ease-in"
                >
                  {" "}
                  Autocad Drawing - 250 MW
                </Link>
                <Link
                  href="uploads/solarparks/41027955.dwg"
                  className="px-4 py-2 text-lg  bg-blue-500 text-white rounded-md hover:font-semibold  hover:rounded-lg hover:bg-blue-700 transition-all duration-150 ease-in"
                >
                  {" "}
                  Autocad Drawing-750 MW
                </Link>
              </div>
              <br /> <br />
              <h2 className="text-3xl font-semibold mb-4">Evacuation</h2>
              <div className="flex gap-4">
                <Link
                  href="uploads/solarparks/38707386.pdf"
                  className="px-4 py-2 text-lg  bg-blue-500 text-white rounded-md hover:font-semibold  hover:rounded-lg hover:bg-blue-700 transition-all duration-150 ease-in"
                >
                  {" "}
                  Internal Evacuation Plan
                </Link>
                <Link
                  href="uploads/solarparks/31871448.pdf"
                  className="px-4 py-2 text-lg  bg-blue-500 text-white rounded-md hover:font-semibold  hover:rounded-lg hover:bg-blue-700 transition-all duration-150 ease-in"
                >
                  {" "}
                  External Evacuation Plan
                </Link>
              </div>
              <br /> <br />
              {/* <h2 className="text-3xl font-semibold mb-4">Generation</h2>
              <div className="flex gap-4">
                <Link
                  href="uploads/solarparks/38707386.pdf"
                  className="px-4 py-2 text-lg  bg-blue-500 text-white rounded-md hover:font-semibold  hover:rounded-lg hover:bg-blue-700 transition-all duration-150 ease-in"
                >
                  {" "}
                  Internal Evacuation Plan
                </Link>
                <Link
                  href="uploads/solarparks/31871448.pdf"
                  className="px-4 py-2 text-lg  bg-blue-500 text-white rounded-md hover:font-semibold  hover:rounded-lg hover:bg-blue-700 transition-all duration-150 ease-in"
                >
                  {" "}
                  External Evacuation Plan
                </Link>
              </div> */}
              {/* <br /> <br /> */}
              <h2 className="text-3xl font-semibold mb-4">
                INFORMATION TO BIDDERS
              </h2>
              <div>
                <table className="table-auto text-lg w-full">
                  <thead className="bg-gray-100 py-2">
                    <tr class=" font-bold py-4">
                      <td className="py-2 px-3  border-t border-b border-black/10">SL.NO.</td>
                      <td className="py-2 px-3  border-t border-b border-black/10">DESCRIPTION</td>
                      <td className="py-2 px-3  border-t border-b border-black/10">LINK</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="py-2">
                      <td className="py-2 px-3  border-t border-b border-black/10">1</td>
                      <td className="py-2 px-3  border-t border-b border-black/10">Draft ISA for Phase-II (750 MW)</td>
                      <td className="py-2 px-3  border-t border-b border-black/10">
                        <Link
                          href="uploads/informationtobidder/information_42727075.pdf"
                          target="_blank"
                          className="text-blue-500"
                        >
                          Draft ISA for 750 MW
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3  border-t border-b border-black/10">2</td>
                      <td className="py-2 px-3  border-t border-b border-black/10">Draft LLA for Phase-II (750 MW)</td>
                      <td className="py-2 px-3  border-t border-b border-black/10">
                        <Link
                          href="uploads/informationtobidder/information_62852647.pdf"
                          target="_blank"
                          className="text-blue-500"
                        >
                          Draft LLA for 750 MW
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3  border-t border-b border-black/10">3</td>
                      <td className="py-2 px-3  border-t border-b border-black/10">Geological and Water Analysis Report for 750 MW</td>
                      <td className="py-2 px-3  border-t border-b border-black/10">
                        <Link
                          href="uploads/informationtobidder/information_43133976.pdf"
                          target="_blank"
                          className="text-blue-500"
                        >
                          Geological and Water Analysis Report for 750 MW
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3  border-t border-b border-black/10">4</td>
                      <td className="py-2 px-3  border-t border-b border-black/10">Single Line Diagram of 220/33 kV Pooling Station</td>
                      <td className="py-2 px-3  border-t border-b border-black/10">
                        <Link
                          href="uploads/informationtobidder/information_37082248.pdf"
                          target="_blank"
                          className="text-blue-500"
                        >
                          Single Line Diagram{" "}
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-black/40 pt-8  ">
        {/* <Ananthapuramu /> */}
        <div className="container mx-auto p-4">
          <header className="mb-8">
            <h1 className="text-4xl font-bold ">GALIVEEDU SITE</h1>
          </header>
          <div className="max-w-7xl">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-4">EVACUATION</h2>
              <h3 className="text-2xl font-semibold mb-4">
                ANANTHAPURAMU ULTRA MEGA SOLAR PARK (1500 MW) EVACUATION SYSTEM:
              </h3>
              <p className="mb-4">
                PGCIL is establishing a 400/220 kV Grid Sub-station within the
                Solar Park at NP Kunta Mandal for external evacuation.
              </p>
              <p className="mb-4">
                APSPCL is establishing 220/33 kV Pooling Sub-stations and
                connected transmission lines up to 400 kV Grid Sub-station for
                internal evacuation, one 220/33 kV pooling sub-station for a
                block of 250 MW Solar Power Plants. APTRANSCO is executing the
                above works on behalf of APSPCL.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Your other components go here */}

      <FooterLinks />
    </div>
  );
}
