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
import ContactPage from "@/components/ContactPage";
// import footerLinksData from '@/data/footerLinks.json';
// Dummy data for cards


export default function Home() {
  return (
    <div className="relative">
      <div className="relative z-50">
        <Header />
        <Navbar />
      </div>
      <div className="my-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 py-8 px-4 sm:px-6 lg:px-8">
        <ContactPage />
      </div>
      <FooterLinks />
    </div>
  );
}
