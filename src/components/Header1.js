// src/components/Header.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
        
        {/* Logo Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mb-4 md:mb-0 space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/">
            <Image
              height={110}
              width={115}
              src="/logo.png"
              alt="logo-image"
              className="w-24 md:w-32"
            />
          </Link>
          <Link href="https://www.itu.int/wtsa/2024/">
            <Image
              height={110}
              width={115}
              src="/WTSA.png"
              alt="WTSA-logo"
              className="w-24 md:w-32"
            />
          </Link>
        </div>
        
        {/* Title Section */}
        <div className="text-center mb-4 md:mb-0">
          <h3 className="text-xl md:text-2xl font-semibold text-green-600">
            Andhra Pradesh Solar Power Corporation Private Limited
          </h3>
          <p className="text-lg md:text-xl text-pink-400 font-semibold">
            (A JV Company of Govt of Andhra Pradesh &amp; Govt of India)
          </p>
        </div>
        
        {/* Government Logo Section */}
        <div className="flex justify-center md:justify-end items-center">
          <Image
            height={82}
            width={89}
            src="/govt-logo.png"
            alt="govt-logo"
            className="w-20 md:w-32"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
