// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <a href="https://www.apspcl.ap.gov.in/">
            <img src="https://www.apspcl.ap.gov.in/public/templates/apspclcms/images/logo.png" alt="logo-image" className="w-32"/>
          </a>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Andhra Pradesh Solar Power Corporation Private Limited</h3>
          <p className="text-lg">(A JV Company of Govt of Andhra Pradesh &amp; Govt of India)</p>
        </div>
        <div className="flex items-center">
          <img src="https://www.apspcl.ap.gov.in/public/templates/apspclcms/images/govt-logo.png" alt="govt-logo" className="w-32"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
