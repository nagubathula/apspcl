// src/components/Header.js
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <a href="/">
            <Image
              height={110}
              width={115}
              src="/templates/apspclcms/images/logo.png"
              alt="logo-image"
              className="w-32"
            />
          </a>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-green-600">
            Andhra Pradesh Solar Power Corporation Private Limited
          </h3>
          <p className="text-2xl text-pink-400 font-semibold">
            (A JV Company of Govt of Andhra Pradesh &amp; Govt of India)
          </p>
        </div>
        <div className="flex items-center">
          <Image
            height={82}
            width={89}
            src="/templates/apspclcms/images/govt-logo.png"
            alt="govt-logo"
            className="w-32"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
