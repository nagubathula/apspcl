import React from "react";

const About = () => {
  return (
    <div className="aboutApspcl bg-white  rounded-lg p-6 flex flex-row gap-8">
      <div className="w-1/2 pr-8 flex flex-col gap-4">
        <div className="font-semibold text-xl">ABOUT APSPCL</div>
        <div className="font-light">
          Ministry of New and renewable Energy (MNRE), Govt. Of India has drawn
          up a scheme to set up number of solar parks across various states in
          the country, each with a capacity of Solar Projects generally above
          500 MW. The Scheme proposes to provide financial support by Government
          of India to establish solar parks with an aim to facilitate creation
          of infrastructure necessary for setting up new solar power projects in
          terms of allocation of land, transmission and evacuation lines, access
          roads, availability of water and others, in a focused manner.
        </div>
        <div>
          <a
            href="#_"
            class="px-5 py-2.5 relative rounded group overflow-hidden font-light border text-gray-600 inline-block"
          >
            <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-pink-500 group-hover:h-full opacity-90"></span>
            <span class="relative group-hover:text-white">{"> "}Read More</span>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col px-8">
        {/* First Vision Section */}
        <div className="flex gap-4 mb-8">
          <div className="h-36 aspect-square border-2 border-gray-300 rounded-full flex items-center justify-center">
            <img
              src="https://www.apspcl.ap.gov.in/public/templates/apspclcms/images/vision-logo.png"
              alt="Vision Logo"
              className=" "
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-semibold text-xl mb-2">VISION</div>
            <div className="font-light text-gray-700">
              To be the best and largest Solar Park Developer in the World by
              harnessing immense potential available in the state of Andhra
              Pradesh for solar power generation.
            </div>
          </div>
        </div>

        {/* Second Vision Section */}
        <div className="flex gap-4">
          <div className="h-36 aspect-square border-2 border-gray-300 rounded-full flex items-center justify-center">
            <img
              src="https://www.apspcl.ap.gov.in/public/templates/apspclcms/images/mision-logo.png"
              alt="Vision Logo"
              className=" max-w-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-semibold text-xl mb-2">MISSION</div>
            <div className="font-light text-gray-700">
              To plan, develop and operate solar parks to promote generation of
              solar power most efficiently and economically to meet the energy
              requirements of Andhra Pradesh in a sustainable manner thereby
              reducing Green House Gases.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
