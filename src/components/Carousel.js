// ./components/Carousel.js
"use client"
import React, { useState, useEffect } from 'react';
import Card from './Card';

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 2 : prevIndex - 2));
  };

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % cards.length);
  };

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative flex p-4 overflow-hidden">
        {/* Left arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-500 hover:bg-pink-500 hover:shadow-pink-500 hover:shadow-sm hover:text-white hover:font-bold transistion-all ease-in duration-150  w-10 h-10 flex items-center justify-center z-10"
          onClick={prevSlide}
        >
          &lt;
        </button>

        {/* Cards */}
        {cards.slice(currentIndex, currentIndex + 2).map((card, index) => (
          <div key={index} className="w-1/2 px-8">
            <Card title={card.title} imageUrl={card.imageUrl} link={card.link} />
          </div>
        ))}

        {/* Right arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-500 hover:bg-pink-500 hover:shadow-pink-500 hover:shadow-sm hover:text-white w-10 h-10 flex items-center justify-center z-10"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
