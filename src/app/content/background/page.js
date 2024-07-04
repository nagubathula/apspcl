import { Montserrat } from "next/font/google";
import "@/app/globals.css";
const inter = Montserrat({ subsets: ["latin"], variable: "--font-Montserrat" });

import Header from "@/components/Header1";
import Navbar from "@/components/Navbar";
import Link from "next/link";

import FooterLinks from "@/components/FooterLinks";

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="relative">
        <div className="relative z-50">
          <Header />
          <Navbar />
        </div>
        <div className=" mx-auto">
          <div className="container mx-auto py-4">
            <header className="mb-2">
              <h1 className="text-4xl font-bold ">APSPCL Overview</h1>
            </header>
          </div>
          <div className="container mx-auto flex flex-row ">
            <div className="max-w-5xl">
              <div className="mb-8">
                <h2 className="text-3xl uppercase  text-blue-600 font-semibold mb-4">
                  Background
                </h2>
                <p className="mb-4">
                  Andhra Pradesh Solar Power Corporation Private Limited
                  (APSPCL) was incorporated on 26-11-2014 under the Companies
                  Act, 2013 with the principal object of engaging in the
                  business of developing solar parks in the State of Andhra
                  Pradesh. APSPCL is a Joint Venture Company between three
                  government organisations namely Solar Energy Corporation of
                  India (SECI), a Govt. of India Enterprise, Andhra Pradesh
                  Power Generation Corporation Ltd (APGENCO), a Govt. of Andhra
                  Pradesh Undertaking and New and Renewable Energy Development
                  Corporation of Andhra Pradesh Ltd (NREDCAP), a State Govt.
                  Company.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl uppercase  text-blue-600 font-semibold mb-4">
                  About Shareholders
                </h2>
                <h3 className="text-2xl font-semibold mb-2">
                  Solar Energy Corporation of India (SECI)
                </h3>
                <p className="mb-4">
                  SECI is a company incorporated under Section 25 of the
                  Companies Act 1956 and having business interests in the
                  development of Grid Connected and Off Grid Solar Power
                  Projects; exchange, distribute and sale of solar power; solar
                  thermal applications including steam generation for industrial
                  process heating requirements, and promotion of research and
                  development in Solar Sector in accordance with the policies
                  and objectives laid down by the Government of India (GOI)
                  under Jawaharlal Nehru National Solar Mission.
                </p>

                <h3 className="text-2xl font-semibold mb-2">
                  Andhra Pradesh Power Generation Corporation Limited (APGENCO)
                </h3>
                <p className="mb-4">
                  APGENCO is one of the pivotal organizations of Andhra Pradesh,
                  engaged in the business of Power generation. Apart from
                  operation & Maintenance of the power plants, it has undertaken
                  the execution of the ongoing & new power projects scheduled
                  under capacity addition program and is taking up renovation &
                  modernization works of the old power stations. APGENCO came
                  into existence on 28.12.1998 and commenced operations from
                  01.02.1999.
                </p>

                <h3 className="text-2xl font-semibold mb-2">
                  New and Renewable Energy Development Corporation of Andhra
                  Pradesh Limited (NREDCAP)
                </h3>
                <p className="mb-4">
                  NREDCAP was incorporated under clause (d) of div 15 of the
                  Energy Conservation Act 2001 (Central Act No.52 of 2001). The
                  Government of Andhra Pradesh designated NREDCAP as &quot;The
                  Designated Agency &quot; to coordinate, regulate and enforce
                  the provisions of the aforesaid Act, and also for
                  implementation of the Schemes under the said Act within the
                  State of Andhra Pradesh as per Go.Ms No. 145 Dated:
                  30-12-2002.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl uppercase  text-blue-600 font-semibold mb-4">
                  Scope
                </h2>
                <p className="mb-4">
                  The Scope of JVC is Conceptualization, Structuring,
                  Implementation, Operation and Maintenance of Solar Parks at
                  the sites in the state of Andhra Pradesh by optimum
                  utilization of resources and knowledge base of Parties. The
                  JVC shall (i) plan, develop and operate solar park through a
                  suitable revenue model, and (ii) plan such other Solar
                  Projects as a developer or under any other arrangement as may
                  be decided by the JVC from time to time. In addition to
                  develop solar parks, JVC will also be setting up ultra-mega
                  and other solar power projects with financial support from
                  Government of India (budgetary support as well as support from
                  NCEF), State Government and various multi/bi-lateral financial
                  institutions.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl uppercase  text-blue-600 font-semibold mb-4">
                  Sale of Power
                </h2>
                <p className="mb-4">
                  Primarily the power generated from the projects developed by
                  the proposed JVC shall be sold to the DISCOMs of the state at
                  mutually agreed rate. Agreement will be entered with DISCOMs
                  of the state for sale of power for life of the plant. In case
                  the DISCOMs are not interested in entering PPA with JV, the
                  JVC / SECI & APGENCO are free to sell the power outside the
                  state and/or to third party.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl uppercase  text-blue-600 font-semibold mb-4">
                  Roles & Responsibilities
                </h2>
                <h3 className="text-2xl font-semibold mb-2">
                  SECI &apos;s Responsibilities
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    To act as Project Management Consultant to the JVC as per
                    mutually agreed terms and conditions.
                  </li>
                  <li>
                    Trading of solar power as per mutually agreed terms with the
                    JVC.
                  </li>
                  <li>
                    To subscribe the Equity in the agreed proportion of JVC as
                    and when required.
                  </li>
                  <li>
                    To help JVC for arranging funds including grant support from
                    National Clean Energy Fund, debt from multilateral or
                    International Banks required for development of the Solar
                    park and the solar power projects.
                  </li>
                  <li>
                    Any other responsibility that parties may deem fit and
                    proper to undertake.
                  </li>
                  <li>
                    SECI shall trade the power generated from the UMSPP projects
                    set up in solar Parks at mutually agreed terms and
                    conditions among the parties.
                  </li>
                  <li>
                    SECI shall coordinate with CTU to facilitate work on
                    evacuation connectivity.
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold mb-2">
                  APGENCO & NREDCAP&apos;s Responsibilities
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Preparation of documents relating to forming of JVC viz.
                    Memorandum of Association, Articles of Association,
                    shareholders Agreement etc. and necessary compliances as per
                    Companies Act 2013.
                  </li>
                  <li>
                    To provide land to JVC for development of Solar
                    Parks/Projects.
                  </li>
                  <li>
                    To help JVC in obtaining all permits and clearances required
                    for the development of these projects.
                  </li>
                  <li>
                    To help JVC in arranging the ancillary facilities like water
                    and auxiliary power.
                  </li>
                  <li>
                    To subscribe the Equity in the agreed proportion of JVC as
                    and when required.
                  </li>
                  <li>
                    To help JVC for arranging funds from Andhra Pradesh
                    Government or other sources in its knowledge or domain for
                    development of these Solar Thermal and PV Plants.
                  </li>
                  <li>
                    Any other responsibility that parties deem fit and proper to
                    undertake.
                  </li>
                  <li>
                    APGENCO & NREDCAP shall carry out bidding activities for
                    development of various infrastructural facilitates for the
                    Solar Parks such as, land development, roads, power
                    evacuation infrastructure within the park, water facilities,
                    common area development , etc.
                  </li>
                  <li>
                    APGENCO & NREDCAP may also take up bid process management
                    for UMSPP for allocation in the Solar Park.
                  </li>
                  <li>
                    APGENCO & NREDCAP shall coordinate with STU to facilitate
                    work on evacuation connectivity.
                  </li>
                  <li>
                    Parties at its discretion, in consultation with the other
                    party, can utilize the expertise of other agencies in
                    implementing the project and is free to sign any
                    agreement/Memorandum of Understanding, with such agencies.
                    However, any duties and liabilities arising out of such
                    agreements/understanding shall be solely the responsibility
                    of that party and the other parties shall not be made liable
                    for the same, whatsoever.
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-2xl px-4 bg-gray-100 flex flex-col h-fit py-4 transition-colors duration-300">
              <div className="text-3xl text-blue-500 font-semibold">
                {" "}
                DOWNLOADS
              </div>
              <div className="flex flex-col py-1">
                <Link
                  href="/uploads/solarpolicies/44944069.pdf"
                  className=" py-2 hover:px-2 text-lg hover:bg-blue-500 hover:text-white hover:font-semibold hover:rounded-md transition-colors duration-300"
                >
                  Designated Officers Under RTI Act-2005
                </Link>

                <Link
                  href="/uploads/solarpolicies/29284544.pdf"
                  className="  py-2 hover:px-2 text-lg hover:bg-blue-500 hover:text-white hover:font-semibold hover:rounded-md transition-colors duration-300"
                >
                  Under section 4(1) (b) (XV) of RTI Act
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Your other components go here */}

        <FooterLinks />
      </div>
    </div>
  );
}
