"use client";
import { useState, useEffect } from "react";
import Image from "next/image";


const images = [
  "/uploads/gallery/banners_62292850.jpg",
  "/uploads/gallery/banners_83059599.jpg",
  "/uploads/gallery/banners_59631964.jpg",
  "/uploads/gallery/banners_59082031.jpg",
  "/uploads/gallery/banners_70581301.jpg",
  "/uploads/gallery/banners_76788391.jpg",
  "/uploads/gallery/banners_89020083.jpg",
  "/uploads/gallery/banners_53913154.jpg",
  "/uploads/gallery/banners_10890151.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="z-0">
      <div className="overflow-hidden relative aspect-[2.2/1]">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-3000 ease-in-out"
          width={500}
          height={500}
          // alt="Picture of the author"
        />
      </div>
      <div className="relative bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
