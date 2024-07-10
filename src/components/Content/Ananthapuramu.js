"use client"
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const menuData = {
  menuItems: [
    {
      title: "Menu Item 1",
      link: "#",
      dropdown: true,
      dropdownItems: [
        {
          title: "Dropdown Item 1",
          link: "#",
        },
        {
          title: "Dropdown Item 2",
          link: "#",
        },
        {
          title: "Dropdown Item 3",
          link: "#",
        },
      ],
    },
    {
      title: "Menu Item 2",
      link: "#",
      dropdown: false,
    },
    {
      title: "Menu Item 3",
      link: "#",
      dropdown: false,
    },
    {
      title: "Menu Item 4",
      link: "#",
      dropdown: false,
    },
  ],
};

const Ananthapuramu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="flex min-h-[36rem]">
      <div className="w-1/4 bg-gray-50 text-gray-800 p-4">
        <div>
          <ul>
            {menuData.menuItems.map((item, index) => (
              <li key={index} className="">
                {item.dropdown ? (
                  <>
                    <button
                      className="w-full text-left flex items-center py-2 px-4  border border-black/10 hover:bg-white focus:outline-none focus:bg-gray-200"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span className="text-sm font-medium">{item.title}</span>
                      <ChevronDownIcon className="h-5 w-5 ml-auto" />
                    </button>
                    {openDropdown === index && (
                      <ul className="tex-sm">
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <li key={idx} className="border-l border-r">
                            <a
                              href={dropdownItem.link}
                              className="block py-2 px-4 text-sm  hover:bg-white  "
                            >
                              {dropdownItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={item.link}
                    className="w-full text-left py-2 px-4 block  border border-black/10 hover:bg-white "
                  >
                    <span className="text-sm font-medium">{item.title}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-3/4 bg-white p-4 ">
        <h1 className="text-2xl font-bold mb-4">
          ANANTHAPURAMU ULTRA MEGA SOLAR PARK (1500 MW) EVACUATION SYSTEM:
        </h1>
        <div className="h-full overflow-y-auto">
          <ul className="list-disc list-outside pl-6">
            <li className="mb-4">
              <span className="block">
                PGCIL is establishing 400/220 kV Grid Sub-station within the
                Solar Park at NP Kunta Mandal for external evacuation.
              </span>
            </li>
            <li className="mb-4">
              <span className="block">
                APSPCL is establishing 220/33 kV Pooling Sub-stations and
                connected transmission lines upto 400 kV Grid Sub-station for
                internal evacuation, one 220/33 kV pooling sub-station for a
                block of 250 MW Solar Power Plants. APTRANSCO is executing above
                works on behalf of APSPCL.
              </span>
            </li>
          </ul>
          <div className="flex flex-row">
            <div>
              <div>Internal Evacuation Plan</div>

            </div>
            <div>
              <div>External Evacuation Plan</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ananthapuramu;


