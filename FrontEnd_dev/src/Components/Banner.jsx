"use client";
import React, { useState, useEffect } from "react";

export default function Banner() {
  const banners = [
    "/banner.webp",
    "/banner2.webp",
    "/banner3.webp",
    "/banner4.webp",
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  const handleDotClick = (index) => {
    setCurrentBanner(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative w-full h-[250px] rounded-xl overflow-hidden">
      {/* Banner Image */}
      <img
        src={banners[currentBanner]}
        className="w-full h-full object-cover"
        alt="Banner"
      />

      {/* Dots for Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentBanner ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}