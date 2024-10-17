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
import Objectives from "@/components/Objectives/Objectives";
import ApspclTable from "@/components/ApspclTable";
import ApspclTenders from "@/components/ApspclTenders";
import NewTenderFetch from "@/components/NewTenderFetch";
import CircularFetch from "@/components/CircularFetch";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative z-50">
        <Header />
        <Navbar />
      </div>
      <div className="max-w-7xl  mx-auto">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">CIRCULARSS</h1>
          <div>
   <CircularFetch />
           
          </div>
        </div>
      </div>

      {/* Your other components go here */}

      <FooterLinks />
    </div>
  );
}
