"use client";

import React, { useState } from "react";
import {
  MenuIcon,
  ChevronDownIcon,
  HomeIcon,
  CogIcon,
  UserIcon,
} from "@heroicons/react/solid";

const icons = {
  MenuIcon: MenuIcon,
  HomeIcon: HomeIcon,
  CogIcon: CogIcon,
  UserIcon: UserIcon,
  ChevronDownIcon: ChevronDownIcon,
};

const menuData = {
  menuItems: [
    {
      title: "Menu Item 1",
      icon: "MenuIcon",
      link: "#",
      dropdown: true,
      dropdownItems: [
        {
          title: "Dropdown Item 1",
          icon: "UserIcon",
          link: "#",
        },
        {
          title: "Dropdown Item 2",
          icon: "UserIcon",
          link: "#",
        },
        {
          title: "Dropdown Item 3",
          icon: "UserIcon",
          link: "#",
        },
      ],
    },
    {
      title: "Menu Item 2",
      icon: "HomeIcon",
      link: "#",
      dropdown: false,
    },
    {
      title: "Menu Item 3",
      icon: "CogIcon",
      link: "#",
      dropdown: false,
    },
    {
      title: "Menu Item 4",
      icon: "UserIcon",
      link: "#",
      dropdown: false,
    },
  ],
};

const Scope = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <nav>
          <ul>
            {menuData.menuItems.map((item, index) => {
              const Icon = icons[item.icon];
              return (
                <li key={index} className="mb-4">
                  {item.dropdown ? (
                    <>
                      <button
                        className="w-full text-left flex items-center"
                        onClick={() => toggleDropdown(index)}
                      >
                        <Icon className="h-5 w-5 mr-2" />
                        {item.title}
                        <ChevronDownIcon className="h-5 w-5 ml-auto" />
                      </button>
                      {openDropdown === index && (
                        <ul className="ml-4 mt-2">
                          {item.dropdownItems.map((dropdownItem, idx) => {
                            const DropdownIcon = icons[dropdownItem.icon];
                            return (
                              <li key={idx} className="mb-2 flex items-center">
                                <DropdownIcon className="h-5 w-5 mr-2" />
                                <a href={dropdownItem.link}>
                                  {dropdownItem.title}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.link}
                      className="w-full text-left flex items-center"
                    >
                      <Icon className="h-5 w-5 mr-2" />
                      {item.title}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="w-3/4 bg-white p-4">
        <h1 className="text-2xl font-bold mb-4">Scope</h1>
        <ul className="list-disc list-inside">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
    </div>
  );
};

export default Scope;
