import React from "react";
import Image from "next/image";
import Link from "next/link";

// JSON data for the header content
const headerData = {
  leftImages: [
    {
      src: "/logo.png",
      alt: "logo-image",
      link: "/",
      height: 110,
      width: 115,
    },
    {
      src: "/WTSA.png",
      alt: "WTSA-logo",
      link: "https://www.itu.int/wtsa/2024/",
      height: 110,
      width: 115,
    },
  ],
  titleSection: {
    title: "Andhra Pradesh Solar Power Corporation Private Limited",
    subtitle: "(A Govt of Andhra Pradesh & Govt of India)",
  },
  rightImages: [
    {
      src: "/govt-logo.png",
      alt: "govt-logo",
      height: 82,
      width: 89,
    },
  ],
};

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
        {/* Left Images Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mb-4 md:mb-0 space-y-4 md:space-y-0 md:space-x-4">
          {headerData.leftImages.map((image, index) => (
            <Link key={index} href={image.link}>
              <Image
                height={image.height}
                width={image.width}
                src={image.src}
                alt={image.alt}
                className="w-24 md:w-32"
              />
            </Link>
          ))}
        </div>

        {/* Title Section */}
        <div className="text-center mb-4 md:mb-0">
          <h3 className="text-xl md:text-2xl font-semibold text-green-600">
            {headerData.titleSection.title}
          </h3>
          <p className="text-lg md:text-xl text-pink-400 font-semibold">
            {headerData.titleSection.subtitle}
          </p>
        </div>

        {/* Right Images Section */}
        <div className="flex justify-center md:justify-end items-center">
          {headerData.rightImages.map((image, index) => (
            <Image
              key={index}
              height={image.height}
              width={image.width}
              src={image.src}
              alt={image.alt}
              className="w-20 md:w-32"
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
