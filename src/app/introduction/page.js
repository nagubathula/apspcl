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
import Introduction from "@/components/Introduction/Introduction";
// import footerLinksData from '@/data/footerLinks.json';
// Dummy data for cards
const cards = [
  {
    title: "Kurnool",
    imageUrl:
      "https://www.apspcl.ap.gov.in/uploads/solarparks/solarparks_90379579.jpg",
    link: "https://www.apspcl.ap.gov.in/content/kurnoolultramegasolarparks",
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
      <div className="max-w-7xl mx-auto">
        <Introduction />
      </div>

      {/* Your other components go here */}

      <FooterLinks />
    </div>
  );
}
