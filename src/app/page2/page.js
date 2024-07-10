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
// import footerLinksData from '@/data/footerLinks.json';
// Dummy data for cards
const cards = [
  {
    title: "Kurnool",
    imageUrl: "/uploads/solarparks/solarparks_90379579.jpg",
    link: "/content/kurnoolultramegasolarparks",
  },
  {
    title: "Card 2",
    imageUrl: "https://via.placeholder.com/300",
    link: "https://example.com/2",
  },
  {
    title: "Card 3",
    imageUrl: "https://via.placeholder.com/300",
    link: "https://example.com/3",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <div className="relative z-50">
        <Header />
        <Navbar />
      </div>
      <div className="z-0 max-w-7xl mx-auto flex flex-row gap-8 py-8">
        <div className="w-9/12">
          <ImageSlider />
          {/* <QuickLink2 /> */}
          {/* <AboutApspcl /> */}
          <div className="bg-gray-100">
            <About />
          </div>
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Card Carousel</h1>
            <Carousel cards={cards} />
          </div>
        </div>
        <div id="sticky" className="w-3/12 flex flex-col gap-4 sticky top-0">
          <People />
          <QuickLink />
        </div>
      </div>

      <section>
        <FooterLinks />
      </section>
    </div>
  );
}
