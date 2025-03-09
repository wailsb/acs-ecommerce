import React from "react";

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="min-w-[200px] rounded-lg overflow-hidden shadow-lg bg-[var(--artBg)] hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={name}
      />

      {/* Product Details */}
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2 text-[var(--text)]">{name}</div>
        <p className="text-[var(--text)] text-base">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;