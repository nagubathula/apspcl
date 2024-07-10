import React from "react";
import Image from "next/image";

const Objectives = () => {
  const cards = [
    {
      image: "/uploads/objective_images/SolarPowerProject_11153892.jpg",
      title: "Development of solar park and solar power project",
      description:
        "Ministry of New and renewable Energy (MNRE), Govt. Of India has drawn up a scheme to set up number of solar parks across various states in the country, each with a capacity of Solar Projects generally above 500 MW. The Scheme proposes to provide financial support by Government of India to establish solar parks with an aim to facilitate creation of infrastructure necessary for setting up new solar power projects in terms of allocation of land, transmission and evacuation lines, access roads, availability of water and others, in a focused manner.",
    },
    {
      image: "/uploads/objective_images/SolarPowerProject_41559834.jpg",
      title: "Transmitting, manufacturing, supplying, selling of power",
      description:
        "Solar Energy Corporation of India (SECI), a central public sector enterprises under MNRE , has been implementing various schemes to develop solar sector in the country. As per the policy, these solar parks will be developed in collaboration with the State Governments. The implementation agency would be Solar Energy Corporation of India (SECI) on behalf of Government of India (GOI). SECI will handle funds to be made available under the scheme on behalf of GOI. The states shall designate a nodal agency for implementation of the solar park.",
    },
    {
      image: "/uploads/objective_images/SolarPowerProject_27392130.jpg",
      title: "Lease of land and finance",
      description:
        "The Solar Park is a concentrated zone of development of solar power generation projects. As part of Solar park development, land required for development of Solar Power Projects with cumulative capacity generally 500 MW and above will be identified and acquired and various infrastructure like transmission system, water, road connectivity and communication network etc. will be developed. The parks will be characterized by well developed proper infra-structure where the risk & gestation period of the projects will be minimized. At the state level, the solar park will enable the states to bring in significant investment from project developers in Solar Power sector, to meet its Solar Purchase Obligation (SPO) mandates and provide employment opportunities to local population. The state will also be able to reduce its carbon footprint by avoiding emissions equivalent to the solar parks generated capacity.",
    },
    {
      image: "/uploads/objective_images/SolarPowerProject_87240932.jpg",
      title: "Business management consultant",
      description:
        "In order to set up solar parks in the State of Andhra Pradesh, a Joint venture between SECI (Solar Energy Corporation of India), APGENCO (Andhra Pradesh Power Generation Corporation Limited) and NREDCAP (New & Renewable Energy Development Corporation of Andhra Pradesh Ltd.) has been formed for development of Solar Park in Andhra Pradesh. The JV Company is known as Andhra Pradesh Solar Power Corporation Private Limited (APSPCL).",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Objectives</h1>
      <div className="space-y-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex items-center  rounded-md p-4 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="flex w-1/3">
              <Image
                src={card.image}
                alt={`Card ${index + 1}`}
                className="w-full h-auto"
                width={500}
                height={500}
                // alt="Picture of the author"
              />
            </div>
            <div className="flex flex-col w-2/3 gap-y-4 ml-4">
              <div className="text-2xl font-semibold">{card.title} </div>
              <p className="opacity-60">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objectives;
