"use client";
import React, { useState, useRef } from "react";
import menuData from "@/data/menuData.json";
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const timeoutRef = useRef(null);

  // Function to toggle active menu index for desktop view
  const toggleActiveMenu = (index) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setActiveMenuIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenuIndex(null);
    }, 300); // Adjust delay as needed
  };

  return (
    <div className="z-50 bg-gradient-to-r text-xs from-blue-500 via-blue-600 to-blue-700 shadow-md">
      <nav className="w-full mx-auto px-4 py-3 ">
        <div className="flex justify-between items-center">
          {/* Menu Toggle for Mobile */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow justify-center items-center space-x-4">
            {menuData.menuItems.map((menuItem, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={menuItem.link}
                  className="text-white hover:text-blue-300 uppercase tracking-wide flex items-center transition-colors duration-300"
                >
                  {menuItem.label}
                  {menuItem.subItems.length > 0 && (
                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                  )}
                </a>
                {/* Submenu for Desktop */}
                {menuItem.subItems.length > 0 && (
                  <ul
                    className={`absolute left-0 hidden group-hover:block bg-blue-600 text-white rounded-md py-1  shadow-lg ${
                      activeMenuIndex === index ? "block" : "hidden"
                    } transition-opacity duration-300`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menuItem.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.link}
                          className="block px-4 py-2 hover:bg-blue-500 transition-colors duration-300"
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2">
            <ul className="bg-blue-600 text-white rounded-md py-1 shadow-lg">
              {menuData.menuItems.map((menuItem, index) => (
                <li key={index}>
                  <a
                    href={menuItem.link}
                    className="px-4 py-2 hover:bg-blue-500 flex items-center justify-between transition-colors duration-300"
                    onClick={() => setMenuOpen(false)} // Close menu on mobile link click
                  >
                    <span>{menuItem.label}</span>
                    {menuItem.subItems.length > 0 && (
                      <ChevronDownIcon className="w-4 h-4" />
                    )}
                  </a>
                  {/* Submenu for Mobile */}
                  {menuItem.subItems.length > 0 && (
                    <ul className="pl-4 bg-blue-700">
                      {menuItem.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.link}
                            className="block px-4 py-2 hover:bg-blue-500 transition-colors duration-300"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
