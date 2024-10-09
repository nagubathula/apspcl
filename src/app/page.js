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
import NewsList from "@/components/Newslist";
import TendersList from "@/components/LatestTendersList";
// import footerLinksData from '@/data/footerLinks.json';


export default function Home() {
  return (
    <div className="relative">
      <div className="relative z-50">
        <Header />
        <Navbar />
      </div>
      <div className="my-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-10/12">
          <ImageSlider />
          {/* <QuickLink2 /> */}
          {/* <AboutApspcl /> */}
          <div className="bg-gray-100 mt-4 lg:mt-8">
            
            <NewsList />
            <TendersList />
            <About />
          </div>
          {/* <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Solar Parks</h1>
            <Carousel cards={cards} />
          </div> */}
        </div>
        <div
          id="sticky"
          className="w-full lg:w-2/12 flex flex-col gap-4 mt-8 lg:mt-0"
        >
          <People />
          <QuickLink />
        </div>
      </div>
      <FooterLinks />
    </div>
  );
}
