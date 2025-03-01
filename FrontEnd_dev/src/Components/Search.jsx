'use client';

import { useState } from "react";

// Mock data for search results
const searchData = [
  {
    id: 1,
    title: "Samsung s20+ 5g",
    url: "#",
    description: "Abdou cabba store ",
  },
  {
    id: 2,
    title: "Oppo Reno 4",
    url: "#",
    description: "Abdou Cabba Store ",
  },
  {
    id: 3,
    title: "Iphone 15 pro max",
    url: "#",
    description: "MDM phones Abdou cabba store ",
  },
  {
    id: 4,
    title: "ISound Core",
    url: "#",
    description: "Abdou cabba store",
  },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);

  // Handle input change and filter results
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === "") {
      setSearchResults([]);
      setIsResultsVisible(false);
    } else {
      const filteredResults = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
      setIsResultsVisible(true);
    }
  };

  // Clear search results and input
  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsResultsVisible(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for product..."
          className="w-full px-4 py-2 pl-10 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          aria-label="Search"
        />
        {/* Search Icon */}
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        {/* Clear Button */}
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results */}
      {isResultsVisible && searchResults.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          <ul className="py-2">
            {searchResults.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
                onClick={() => window.open(item.url, "_blank")}
              >
                <div className="font-medium text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* No Results Message */}
      {isResultsVisible && searchResults.length === 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="px-4 py-2 text-gray-600">No results found.</div>
        </div>
      )}
    </div>
  );
}