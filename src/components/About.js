import React from "react";
import Image from "next/image";

const AboutApspcl = () => {
  const visionMissionData = [
    {
      id: 1,
      type: "VISION",
      imageUrl: "/images/vision-logo.png",
      text: "To be the best and largest Solar Park Developer in the World by harnessing immense potential available in the state of Andhra Pradesh for solar power generation.",
    },
    {
      id: 2,
      type: "MISSION",
      imageUrl: "/images/mision-logo.png",
      text: "To plan, develop and operate solar parks to promote generation of solar power most efficiently and economically to meet the energy requirements of Andhra Pradesh in a sustainable manner thereby reducing Green House Gases.",
    },
    // Add more objects as needed
  ];
  return (
    <div>
      <div className="aboutApspcl rounded-lg p-6 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 lg:pr-8 flex flex-col gap-4">
          <div className="font-bold text-xl text-pink-500">ABOUT APSPCL</div>
          <div className="font-light">
            Ministry of New and renewable Energy (MNRE), Govt. Of India has
            drawn up a scheme to set up number of solar parks across various
            states in the country, each with a capacity of Solar Projects
            generally above 500 MW. The Scheme proposes to provide financial
            support by Government of India to establish solar parks with an aim
            to facilitate creation of infrastructure necessary for setting up
            new solar power projects in terms of allocation of land,
            transmission and evacuation lines, access roads, availability of
            water and others, in a focused manner.
          </div>
          <div>
            <a
              href="/introduction"
              className="px-5 py-2.5 relative rounded group overflow-hidden font-light border border-gray-300 text-gray-800 inline-block"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-pink-500 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">
                {"> "}Read More
              </span>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <Image
            src="/images/andhra-pradesh.png"
            alt="Andhra Pradesh Logo"
            width={500}
            height={500}
            className="mx-auto rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        {visionMissionData.map((item) => (
          <div key={item.id} className="flex gap-4 mb-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="h-28 w-28 aspect-square rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={`${item.type} Logo`}
                  className="max-w-full"
                  width={500}
                  height={500}
                  // alt="Picture of the author"
                />
              </div>
              <div className="font-semibold text-xl mb-2 text-center md:text-left">
                {item.type}
              </div>
              <div className="font-light text-gray-700 text-center md:text-left">
                {item.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutApspcl;
