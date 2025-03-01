"use client";
import ProductCard from "@/Components/ProductCard";
import { useState } from "react";

export default function Shop() {
  // State for filters, sorting, and search
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
  });
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock product data
  const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: "6000DA",
      image: "/smwatch.jpeg",
      category: "Wearables",
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      price: "4500DA",
      image: "/earbuds.webp",
      category: "Audio",
    },
    {
      id: 3,
      name: "Smart Speaker",
      price: "8000DA",
      image: "/speaker.jpg",
      category: "Smart Home",
    },
    {
      id: 4,
      name: "Fitness Tracker",
      price: "5000DA",
      image: "/fitness-tracker.jpg",
      category: "Wearables",
    },
  ];

  // Filter, sort, and search products
  const filteredProducts = products
    .filter((product) => {
      // Filter by category
      if (filters.category && product.category !== filters.category) return false;

      // Filter by price range
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split("-").map(Number);
        const price = Number(product.price.replace("DA", ""));
        if (price < min || price > max) return false;
      }

      // Filter by search query
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") {
        return (
          Number(a.price.replace("DA", "")) - Number(b.price.replace("DA", ""))
        );
      } else if (sortBy === "price-desc") {
        return (
          Number(b.price.replace("DA", "")) - Number(a.price.replace("DA", ""))
        );
      }
      return 0;
    });

  return (
    <div className="flex flex-col items-center min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Shop Header */}
      <div className="w-full max-w-4xl px-4 mt-6">
        <h1 className="text-3xl font-bold mb-4">Shop</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Category Filter */}
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="p-2 rounded-lg bg-gray-800 text-white"
          >
            <option value="">All Categories</option>
            <option value="Wearables">Wearables</option>
            <option value="Audio">Audio</option>
            <option value="Smart Home">Smart Home</option>
          </select>

          {/* Price Range Filter */}
          <select
            value={filters.priceRange}
            onChange={(e) =>
              setFilters({ ...filters, priceRange: e.target.value })
            }
            className="p-2 rounded-lg bg-gray-800 text-white"
          >
            <option value="">All Prices</option>
            <option value="0-5000">Under 5000DA</option>
            <option value="5000-10000">5000DA - 10000DA</option>
            <option value="10000-20000">10000DA - 20000DA</option>
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 rounded-lg bg-gray-800 text-white"
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-full max-w-4xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}