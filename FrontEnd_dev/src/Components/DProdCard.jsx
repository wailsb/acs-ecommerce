import React from "react";
import Image from "next/image";

const DProdCard = ({ name, price, image, description, category }) => {
  return (
    <div className="flex items-center bg-[var(--artBg)] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">
      {/* Product Image */}
      <div className="w-24 h-24 relative flex-shrink-0">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="ml-4 flex-grow">
        <h2 className="font-bold text-xl text-[var(--text)]">{name}</h2>
        <p className="text-[var(--text)] text-base mt-1">{description}</p>
        <p className="text-sm text-[var(--text)] mt-1">{category}</p>
        <p className="text-2xl font-semibold text-[var(--text)] mt-2">{price}</p>
      </div>
    </div>
  );
};

export default DProdCard;