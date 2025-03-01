"use client";
import ProductCard from "@/Components/ProductCard";
import Link from "next/link";
import { useState } from "react";

export default function WishList() {
  // Mock wishlist data (replace with dynamic data from an API or state management)
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Smart Watch",
      price: "6000DA",
      image: "/smwatch.jpeg",
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      price: "4500DA",
      image: "/earbuds.webp",
    },
    {
      id: 3,
      name: "Smart Speaker",
      price: "8000DA",
      image: "/speaker.jpg",
    },
    {
      id: 4,
      name: "Fitness Tracker",
      price: "5000DA",
      image: "/fitness-tracker.jpg",
    },
  ]);

  // Function to remove an item from the wishlist
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[var(--bg)] text-[var(--text)] p-6">
      {/* Wishlist Header */}
      <div className="w-full max-w-4xl mb-6">
        <h1 className="text-3xl font-bold">Your Wishlist</h1>
        <p className="text-gray-400">
          {wishlist.length} item{wishlist.length !== 1 && "s"} in your wishlist
        </p>
      </div>

      {/* Wishlist Products Grid or Empty Message */}
      <div className="w-full max-w-4xl">
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((product) => (
              <div key={product.id} className="relative">
                {/* Product Card */}
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  aria-label="Remove from wishlist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ) : (
          // Empty Wishlist Message
          <div className="text-center py-10">
            <p className="text-gray-400">Your wishlist is empty.</p>
            <Link
              href="/Shop"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Browse products &rarr;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}