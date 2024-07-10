// ./components/Card.js
import React from "react";
import Image from "next/image";

const Card = ({ title, imageUrl, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="block">
    <div className="bg-white shadow-md  overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={500}
        // alt="Picture of the author"
        className="w-full h-64 object-cover"
      />
    </div>
  </a>
);

export default Card;
