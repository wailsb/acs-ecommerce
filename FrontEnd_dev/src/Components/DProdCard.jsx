import React from 'react';
import Image from 'next/image';

const DProdCard = () => {
  return (
    <div className="flex items-center bg-gray1 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">
      {/* Product Image (Left) */}
      <div className="w-24 h-24 relative flex-shrink-0">
        <Image
          src="/smwatch.jpeg" // Image path
          alt="Sonny Headphone"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Product Details (Right) */}
      <div className="ml-4 flex-grow">
        {/* Product Name */}
        <h2 className="font-bold text-xl text-white">Sonny Headphone</h2>

        {/* Product Description */}
        <p className="text-white text-base mt-1">
          Snopy SN-BT96 Pretty Back Bluetooth
        </p>

        {/* Product Category */}
        <p className="text-sm text-white mt-1">Headphone</p>

        {/* Product Price */}
        <p className="text-2xl font-semibold text-white mt-2">6000DA</p>
      </div>
    </div>
  );
};

export default DProdCard;