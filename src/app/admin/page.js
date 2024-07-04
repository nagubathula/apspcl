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
import Admin from "@/components/Admin/Admin";

export default function Home() {
  return (
    <div className="relative">
  
      <div className=" mx-auto max-w-7xl flex flex-col lg:flex-row  sm:px-6 lg:px-8">
        <Admin />
      </div>
      <FooterLinks />
    </div>
  );
}
