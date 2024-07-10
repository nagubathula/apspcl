"use client";
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

const Scope = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="flex min-h-[36rem]">
      <div className="w-1/4 bg-gray-100 text-gray-800 p-4">
        <div>
          <ul>
            {menuData.menuItems.map((item, index) => (
              <li key={index} className="mb-4">
                {item.dropdown ? (
                  <>
                    <button
                      className="w-full text-left flex items-center py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span className="text-sm font-medium">{item.title}</span>
                      <ChevronDownIcon className="h-5 w-5 ml-auto" />
                    </button>
                    {openDropdown === index && (
                      <ul className="ml-4 mt-2">
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <li key={idx} className="mb-2">
                            <a
                              href={dropdownItem.link}
                              className="block py-2 px-4 rounded-lg hover:bg-gray-300"
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
                    className="w-full text-left py-2 px-4 rounded-lg block hover:bg-gray-300"
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
        <h1 className="text-2xl font-bold mb-4">Scope</h1>
        <div className="h-full overflow-y-auto">
          <ul className="list-disc list-outside pl-6">
            <li className="mb-4">
              <span className="block">
                The Scope of JVC is Conceptualization, Structuring,
                Implementation, Operation and Maintenance of Solar Parks at the
                sites in the state of Andhra Pradesh by optimum utilization of
                resources and knowledge base of Parties.
              </span>
            </li>
            <li className="mb-4">
              <span className="block">
                The JVC shall (i) plan, develop and operate solar park through a
                suitable revenue model, and (ii) plan such other Solar Projects
                as a developer or under any other arrangement as may be decided
                by the JVC from time to time.
              </span>
            </li>
            <li className="mb-4">
              <span className="block">
                In addition to develop solar parks, JVC will also be setting up
                ultra-mega and other solar power projects with financial support
                from Goverment of lndia (budgetary support as well as support
                from NCEF), State Government and various multi/bi-lateral
                financial institutions.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Scope;
