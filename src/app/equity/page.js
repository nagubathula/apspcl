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
import PieChart from "@/components/PieChart/PieChart";
// import footerLinksData from '@/data/footerLinks.json


export default function Home() {
  return (
    <div className="relative">
      <div className="relative z-50">
        <Header />
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto">
        <PieChart />
      </div>

      {/* Your other components go here */}

      <FooterLinks />
    </div>
  );
}
