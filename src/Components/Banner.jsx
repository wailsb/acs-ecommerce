"use client";
import React, { useState, useEffect } from 'react';

export default function Banner() {
  // List of banner images
  const banners = [
    "/banner.webp",
    "/banner2.webp",
    "/banner3.webp",
    "/banner4.webp",
  ];

  // State to track the current banner index
  const [currentBanner, setCurrentBanner] = useState(0);

  // Function to handle dot clicks
  const handleDotClick = (index) => {
    setCurrentBanner(index);
  };

  // Timer to automatically change banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length); // Cycle through banners
    }, 3000); // Change banner every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [banners.length]);

  return (
    <div className="bg-transparent flex flex-col items-center justify-center w-4/5 mt-5 relative min-h-[250px]">
      {/* Banner Image Container */}
      <div className="w-full flex justify-center max-h-[250px]">
        <img
          src={banners[currentBanner]}
          className="max-w-full max-h-[250px] rounded-xl"
          alt="Banner"
        />
      </div>

      {/* Dots for Navigation */}
      <div className="absolute bottom-[-20] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${
              index === currentBanner ? 'dotactive w-[25px]' : 'w-[10px]'
            } h-[3px]`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}