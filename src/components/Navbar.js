"use client"
import React, { useState } from "react";
import menuData from "@/data/menuData.json";
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);

  // Function to toggle active menu index for desktop view
  const toggleActiveMenu = (index) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  return (
    <div className="bg-blue-600 shadow-md">
      <nav className="container mx-auto px-4 py-6 md:px-2">
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
                onMouseEnter={() => toggleActiveMenu(index)}
                onMouseLeave={() => setActiveMenuIndex(null)}
              >
                <a
                  href={menuItem.link}
                  className="text-white hover:text-blue-400 uppercase tracking-wide flex items-center"
                >
                  {menuItem.label}
                  {menuItem.subItems.length > 0 && (
                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                  )}
                </a>
                {/* Submenu for Desktop */}
                {menuItem.subItems.length > 0 && (
                  <ul
                    className={`absolute left-0 hidden group-hover:block bg-blue-800 text-white rounded-md py-1 mt-2 ${
                      activeMenuIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    } transition-opacity duration-300`}
                    onMouseEnter={() => setActiveMenuIndex(index)}
                    onMouseLeave={() => setActiveMenuIndex(null)}
                  >
                    {menuItem.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.link}
                          className="block px-4 py-2 hover:bg-blue-400"
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
            <ul className="bg-gray-800 text-white rounded-md py-1">
              {menuData.menuItems.map((menuItem, index) => (
                <li key={index}>
                  <a
                    href={menuItem.link}
                    className="block px-4 py-2 hover:bg-blue-400 flex items-center justify-between"
                    onClick={() => setMenuOpen(false)} // Close menu on mobile link click
                  >
                    <span>{menuItem.label}</span>
                    {menuItem.subItems.length > 0 && (
                      <ChevronDownIcon className="w-4 h-4" />
                    )}
                  </a>
                  {/* Submenu for Mobile */}
                  {menuItem.subItems.length > 0 && (
                    <ul className="pl-4">
                      {menuItem.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.link}
                            className="block px-4 py-2 hover:bg-blue-400"
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
