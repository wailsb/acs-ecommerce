import React from 'react';

const ProductCard = () => {
  return (
    <div className="min-w-fit rounded-lg overflow-hidden shadow-lg bg-gray1">
      {/* Product Image */}
      <img
        className="w-full h-48 object-cover"
        src="/smwatch.jpeg" // Replace with the actual image path
        alt="Smart Watch"
      />

      {/* Product Details */}
      <div className="px-6 py-4">
        {/* Product Name */}
        <div className="font-bold text-xl mb-2 text-white">Smart Watch</div>

        {/* Product Price */}
        <p className="text-white text-base">6000DA</p>
      </div>
    </div>
  );
};

export default ProductCard;