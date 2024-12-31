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
import Npkunta from "@/components/npkunta/Npkunta";
import Gaaliveedu from "@/components/gaaliveedu/Gaaliveedu";

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
          <Npkunta />
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
          {/* <Gaaliveedu /> */}
        </div>
      </div>

      {/* Your other components go here */}

      <FooterLinks />
    </div>
  );
}
