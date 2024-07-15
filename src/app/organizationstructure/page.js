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

export default function Home() {
  return (
    <div className="relative">
      <div className="relative z-50">
        <Header />
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">ORGANIZATION STRUCTURE</h1>

          <div className="text-2xl font-semibold text-center bg-gray-200 py-2 my-2">ORGANIZATION STRUCTURE FOR ANDHRA PRADESH SOLAR POWER CORPORATION PRIVATE LIMITED</div>
          <div className="my-4">
            <Image
            alt=""
              width={1200}
              height={800}
              src="/organization.jpg"
            />
          </div>
        </div>
      </div>

      {/* Your other components go here */}

      <FooterLinks />
    </div>
  );
}
